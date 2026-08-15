# Architecture

Motus.Market is four HTML files. This document explains how they are organised, what talks to what,
and the handful of decisions that would otherwise look strange.

---

## Shape

```
                        ┌─────────────────────────────┐
     a browser  ──────▶ │  Motus.Market (static)      │
                        │  index · app · hope · read  │
                        └──────────────┬──────────────┘
                                       │  fetch, CORS-open
                                       ▼
                        ┌─────────────────────────────┐
                        │  MotusMoves.US  /api/*      │
                        │  feed · models · profile    │
                        │  corpus · auth              │
                        └─────────────────────────────┘
```

No build step. No bundler. No framework. No server of its own. Each page is a single HTML file
containing its own `<style>` and one `<script>`, plus the shared `assets/neoglass.css`.

### Why it is built this way

A marketplace whose front end is a folder of files can be audited by reading it, served by anything,
and cannot break in a toolchain nobody understands two years from now. The constraint also enforces
restraint: when there is no component abstraction to hide behind, you notice how much you are
adding.

The cost is real and worth naming — no type checking, no tree-shaking, and long files. We accept
that. The verification discipline below is what replaces the compiler.

## The pages

| File | Role |
|---|---|
| `index.html` | The landing page. Statement cinema — one line per viewport, arriving out of blur, locked by native CSS scroll-snap. |
| `app.html` | The application. Rail navigation, five surfaces, focus sheets, all live data binding. |
| `hope.html` | The Founding Exchange — a standalone published document. |
| `read.html` | A glass markdown reader. Renders the `.md` files in this repository from a fixed whitelist. |

## The scroll lock on the landing page

Worth documenting because the obvious approach does not work.

The landing page locks to one statement per gesture. The first three implementations did this in
JavaScript by cancelling wheel events — and all three failed in the field, intermittently, in a way
that looked like a tuning problem and was not.

**Chrome marks wheel events non-cancelable once a fling is in flight.** `preventDefault()` returns
without doing anything, silently, and the user sails past three statements. No amount of parameter
tuning fixes a call that is being ignored.

The working version is native CSS:

```css
html.snap        { scroll-snap-type: y mandatory }
.arrival, .act   { scroll-snap-align: center; scroll-snap-stop: always }
```

The browser refuses to skip a statement using its own momentum curve, on every input method.

One trap comes with it: `mandatory` snap will **trap** the reader inside the snap region — you
cannot scroll past the last statement to reach the rest of the page. The fix is to give everything
below its own `scroll-snap-align: start`. Sections taller than the viewport are then exempt from
snapping by specification, and the page scrolls freely again.

## Data binding in the app

All state is plain `var`s inside one IIFE, drawn by idempotent `draw*()` functions.

| Variable | Source | Drawn by |
|---|---|---|
| `MOVES` | `GET /api/feed` | `drawMoves`, `drawBroadcast`, `drawWKpis` |
| `MM` | `GET /api/models` | `drawModels`, `drawInMotion`, `drawKpis`, `drawMyModels` |
| `MOVERS` | `GET /api/profile` | `drawMovers` |
| `OFFERS` | `localStorage` | `drawOffersFeed`, `offerCard` |
| `ME` | `POST /api/auth` → `localStorage` | `drawMe` |
| `CORPUS_SRV` | `GET /api/corpus` | `drawCorpusLog` |

`syncMe()` is the one place that redraws every surface an account touches. Sign in, sign out, and
profile save all route through it rather than each poking at four renderers.

### One hazard this creates

Because everything lives in one IIFE and `var` hoists, a function defined near the top can run
before the array it reads is assigned. It will see `undefined`, not an empty array, and a bare
`.filter()` will throw — taking the entire file down with it, because the throw escapes the IIFE
and nothing after it is ever defined.

This is not hypothetical; it shipped once and blanked the whole application for signed-in users
only. Two defences are now in place:

- Every draw function that reads a later-declared array coalesces it: `var mv = MOVES || []`.
- The account render at startup is wrapped so that a throw is re-raised asynchronously — still
  loud in the console, no longer fatal to the file.

## The MotusCorpus

A shared, append-only record of a mover's work, readable by anyone and writable only by them.

Stored per-mover as JSON in object storage. Read is public. Write requires a scoped session token
and can only ever target the token's own slug. The server stamps the timestamp, so a client cannot
backdate its own history; identical titles within sixty seconds are treated as a double-submit and
dropped.

**The server records the turns, not the client.** When a mantra changes or a MotusModel is switched
or stopped, the profile endpoint compares the record before and after and writes the event itself.
That way the entry is identical whether the change was made on MotusMoves.US or on Motus.Market —
neither client has to remember to report, and neither can lie about what happened.

Events made while signed out are held on the device and flushed to the account on sign-in.

## Rendering the corpus

The log a reader sees is a merge of two sources:

- **Derived rows**, computed live from the feed and the Commons — moves made, models minted, runs
  settled. These are always current and never stored twice.
- **Logged events**, from the shared corpus — mantra changes, model switches, completed offers and
  VotusMoves.

Completed work is a logged event and not a derived row, deliberately: derive it as well and every
completion appears twice.

## Design system

`assets/neoglass.css` is the only stylesheet, and it is the single source of truth for the mark, the
palette, the glass tiers, and the type scale.

A specificity trap worth knowing about, because it cost real time: page-level rules like
`.nav .brand .inf` (specificity 0,3,0) beat the shared `.brand img.inf` (0,2,1). Every per-page
override of the mark has been deleted for this reason. Shared identity lives in the shared file, and
nowhere else.

## Verification

With no compiler, checks are explicit and run before every deploy:

| Gate | What it catches |
|---|---|
| `node --check` on every extracted `<script>` block | Syntax errors, in every page. |
| Brace balance on every `<style>` block | A dropped `}` silently killing the rest of a stylesheet. |
| Emoji regex over the tree | Violations of the drawn-glyph rule (`hope.html` is exempt — the emoji there are the author's own). |
| DOM-measured audit at 1440 and 375 | Horizontal overflow, text under 12px, tap targets under 44px. |
| Live probes against the deployed URL | That the thing which is actually serving is the thing that was built. |

The last one is not paranoia. A green deployment is not proof that the domain is serving it.
