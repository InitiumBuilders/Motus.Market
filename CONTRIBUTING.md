# Contributing

Thank you for being here. This is a small, deliberately plain codebase, and that is the thing most
worth protecting about it.

---

## The constraints are the design

Before proposing a change, know that these are load-bearing:

- **No build step.** No bundler, no transpiler, no framework, no package manager for the front end.
  If a change needs one, the change needs a different approach.
- **One stylesheet.** `assets/neoglass.css` is the single source of truth for the mark, the palette,
  the glass, and the type. Per-page overrides of shared identity get deleted on sight — they have
  caused real bugs by winning on specificity.
- **ES5-compatible browser JavaScript.** `var`, `function`, no optional chaining. Every page must
  parse under `node --check` without a transform.
- **Static and public-read.** The front end has no server and holds no secret.

A pull request that adds a dependency isn't unwelcome — but it needs to argue for itself, because
the default answer is no.

## The seven design rules

The interface follows NEURONEOGLASS, written out in [neoglass.md](neoglass.md). Inside this
codebase these are not stylistic preferences:

1. **No faded text.** Pure white on dark, deep navy on light. Size and weight carry subtlety; opacity does not.
2. **Cyan is the accent.** One accent. Orange is reserved for the symbolic building blocks.
3. **The glass rainbow is sacred** — hard conic stops, once per surface, never twice.
4. **Blur is hierarchy**, not decoration.
5. **Drawn glyphs, never emoji.** There is a gate for this. `hope.html` is the sole exemption, because those emoji are the author's own.
6. **Space is the design.** Air is the first thing to add and the last thing to cut.
7. **Glow, never highlight.** A soft aura that bleeds into the dark, never a bright slab behind text.

Two more, from the mobile standards this was built against: nothing under **12px**, and no tap
target under **44px**.

## Before you open a pull request

Run the same gates the maintainers run:

```bash
# every <script> block must parse
node --check <(sed -n '/<script>/,/<\/script>/p' app.html | sed '1d;$d')

# serve it and actually look at it, at 1440 and at 375
python3 -m http.server 8080
```

Check by hand, in the browser, at both widths:

- Nothing overflows horizontally — the document should never be wider than the viewport.
- No text under 12px, no tap target under 44px.
- No console errors.

Screenshots of anything visual, please. "It works" is not reviewable.

## Commits and pull requests

- One concern per pull request.
- Explain *why*, not just what. The what is in the diff.
- If you fixed a bug, say what the failure looked like — that sentence is often the most valuable
  thing in the change.
- Comments should explain the reasoning that isn't in the code, especially the traps. Several
  comments in this codebase exist because someone lost an afternoon; don't delete those.

## Reporting bugs

Include the browser, the viewport width, whether you were signed in, and what you expected. If it is
a rendering issue, a screenshot is worth more than a paragraph.

Security problems go to [SECURITY.md](SECURITY.md), privately, never a public issue.

## Where things are

| I want to change... | Look in |
|---|---|
| The landing page and its statement cinema | `index.html` |
| Any of the five app surfaces | `app.html` |
| Colour, glass, type, the mark | `assets/neoglass.css` |
| What the product is meant to be | `spec.md` |
| How it is wired together | `docs/ARCHITECTURE.md` |
| Auth and the session token | `docs/SECURITY-MODEL.md` |
