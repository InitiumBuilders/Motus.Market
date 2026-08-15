# MOTUS.MARKET — The Motion Economy

**The baseline spec · v0.3 · a living document**
*The market where receipts outrank résumés, presence outranks automation, and the only mint is motion.*

> The world measures its money supply. We measure the contribution supply.

---

## 0 · The One Line

**Motus.Market is the work-and-finance layer of MotusMoves: a marketplace where MotusMovers sell services and models backed by their public record of moves, get paid in $DASH hand-to-hand, and earn MOTUS — the contribution ledger — which can only ever be minted by real work, real service, or really showing up.**

**The law of this market: a service cannot exist on its own — every offer lives inside a MotusMove.** You make your move at MotusMoves.US; the market is where others offer to help it. Work always answers something real, and both sides carry a receipt.

**The rails: $DASH is money. $TRUST is conviction. MOTUS is contribution. $VOTUS is the free move.** A mover may price their offer in $DASH or $TRUST — or post a **VotusMove**: given freely, tips welcome in $TRUST, earning **$VOTUS** for moving without a price. Either way the completed work is recorded in the MotusCorpus. Reputation is the payment that compounds. (VOTUS here is *earned by giving*, distinct from Davara's purchased reasoning credit.)

---

## 1 · Why — receipts are the scarcest asset

AI is flooding every marketplace with claims: generated portfolios, generated reviews, generated confidence. Commodity digital work is collapsing toward zero. What rises in price: **verified-human judgment, accountability, taste — and proof.**

Upwork and Fiverr sell *claims*. MotusMoves has *receipts* — public, timestamped, staked, witnessed moves. Motus.Market simply lets the receipts go to work: the corpus builds trust, trust brings work, work mints MOTUS, and MOTUS is stake in the economy the work created. **The loop compounds — that is the entire thesis.**

---

## 2 · The tailwinds

1. **The claim economy is drowning.** In a sea of AI-generated claims, a public record of verified motion is the scarcest asset a worker can hold.
2. **Agent commerce is arriving.** A marketplace with a *native* agent layer (scoping, matching, drafting, verifying — under a named human) is ahead of every incumbent's bolted-on AI. And the industry's "works while you sleep" framing leaves the meaningful half of the market open: **the presence economy** (§7).
3. **Earn-not-buy is the legitimate token pattern.** Presales died legally and culturally; retroactive honor for contributors became the respected path. "Work is the only mint" is the distribution model regulators and communities both trust.

---

## 3 · The Layer Map

```
┌───────────────────────────────────────────────────────────────┐
│  MOTUSMOVES.US — the social layer                             │
│  moves · mantras · votes · discussion · profiles · the feed   │
└──────────────────────────┬────────────────────────────────────┘
                           │ a move can carry an OFFER
┌──────────────────────────▼────────────────────────────────────┐
│  MOTUS.MARKET — the work + finance layer                      │
│  offers (services) · MotusModel listings · the MotusCorpus    │
│  reviews & vouches · trust staking · the agent registry       │
└──────────────────────────┬────────────────────────────────────┘
                           │ three rails, one job each
┌──────────────────────────▼────────────────────────────────────┐
│  THE RAILS                                                    │
│  $DASH — money (non-custodial, wallet→wallet, InstantSend)    │
│  $TRUST — conviction (Intuition attestations, non-custodial)  │
│  MOTUS — contribution (the earned ledger → the C2)            │
└───────────────────────────────────────────────────────────────┘
```

One law binds the layers: **MotusMoves.US is where you move; Motus.Market is where your moves go to work.**

---

## 4 · The nouns — core objects

| Object | What it is | Status |
|---|---|---|
| **MotusMove** | A public, timestamped act — the atomic unit of the whole economy | live |
| **Offer** | A move with an offer attached: *"the service my current Move makes me able to offer"* — paid in $DASH | **P0: one field** |
| **MotusModel** | A named, runnable pattern; every run pays Source · Roots · Network by the Split — **the keystone building block** | live rails |
| **MotusCorpus** | The receipts ledger: every move, service completed, job fulfilled, collaboration, review received, attestation earned — one mover's **trust graph and portfolio of proof** | P1 |
| **MotusAgent** | A Davara agent plugged into the market under its human's name — *AI Agents With Agency* | P3 |
| **The C2** | The contribution supply: the sum of all MOTUS ever earned. The counter-number to M2 | P1 ticker |

---

## 5 · The mechanics

### 5.1 Work → $DASH → MOTUS (the earn)
- A buyer engages an Offer. Payment is **$DASH, wallet to wallet, InstantSend-verified — the platform never holds funds** (the Crossing's muscle, reused).
- The **3% Network split** (already written in the rails) is the platform fee.
- On verified completion, the worker's ledger records **MOTUS 1:1 with the DASH received** — the bonus layer. *Language law:* MOTUS earned is **recorded and will be honored** at token launch on Dash Platform (a right of participation in the launch, not a granted security today). Exact launch mechanics are **counsel-gated** — we write nothing that promises a rate.
- **Anti-wash discipline** (someone paying themselves to mint MOTUS): the 3% fee prices every fake loop; earned credits are **trust-weighted** (credit weight scales with the *payer's* distinct staked trust); per-account velocity caps; and the Corpus is public — wash patterns are visible by design.

### 5.2 Reviews & vouches (Google-reviews-for-freelancers, done right)
- **A review requires a receipt.** Only a completed, paid engagement can leave one — no drive-by reviews, no purchased ones, ever.
- **A vouch costs conviction.** Vouching for a mover's quality = staking $TRUST on the claim (an Intuition triple: `[mover] — [delivers] — [service]`), from the voucher's own wallet. Skin in the game or it doesn't count.
- The Corpus renders both: verified reviews (receipts) + staked vouches (conviction) = a reputation that cannot be bought, only earned.

### 5.3 Staking & pools (the growth layer)
- **$TRUST staking on any mover, move, or model** — live today via the non-custodial Intuition portal.
- **$DASH MotusPools for the top moves/movers/models** — v1 rule, absolute: **a pool is a ledger of pledges; a payout is a swarm of direct wallet-to-wallet payments.** The platform coordinates, displays, and celebrates the pool — and never touches the funds. (Custodial pooling, if ever, is counsel-gated and years away.)
- **The Community Model Run:** monthly, the community elects one top MotusModel and runs it *together* — a collective run whose fees pay its Source, Roots and Network, and whose output is published as a public Move. The market's heartbeat ritual.

### 5.4 The agent registry (the Hugging Face of MotusAgents)
- Movers list their **MotusAgent**: its models, its corpus of completed work, its reviews — under its human's name, always. **Listing + hosting costs 1 DASH, flat** — one coin to take the stage, paid hand to hand like everything else.
- **The Principal Law:** every agent action is signed, logged in the Corpus, and answered for by its human. *Agency = accountability.* No anonymous agents, no orphan work.

---

## 6 · Earning MOTUS — the mint

MOTUS can **only** be minted two ways. There is no third.

1. **Paid work completed** on the market (1:1 with $DASH received)
2. **Showing up** — verified presence at Motus Events

**Presence verification without surveillance:** mutual attestation. Attendee and organizer co-sign an Intuition triple (`[mover] — [was present at] — [event]`). No GPS tracking, no biometrics — **witnesses, the oldest protocol there is.**

> The world's platforms mint value from attention. Motus mints it from *presence*.

---

## 7 · The Presence Economy — the differentiator

The agentic industry's slogan is *"works while you sleep."* That half is already crowded. The half nobody is building: **the economy that moves while you're present.**

| Tier | What it is | When |
|---|---|---|
| **MotusAgent** | Your Davara, plugged into the market. Drafts, scopes, matches, prepares — and runs live while its human is **online and present**. Work as a duet, not a delegation; the human co-signs every commitment | P3 |
| **MotusMax Agent** | The heavy tier: multi-sig **SafeStep** verification, team/community stewardship, for high-stakes work | **Later — security + funding layer first. Deliberately deferred.** |

Presence is not a limitation — it is the *safety model* (human-in-the-loop by construction), the *quality model* (judgment on tap), and the *meaning model* (the point was never to automate you out of your own life). **Sleep-work is extraction. Present-work is craft.**

---

## 8 · The LongLoops — playing the long game

**THE KEYSTONE — MotusModels (not a loop).** The block everything is built from: a named, runnable pattern of coordination — minted once, run anywhere, paying its Source, Roots and Network on every run. *The strongest thing on the market is a pattern that works.*

Three loops orbit the keystone. Together they are **the LongLoops**:

**LearningLoops** · *safe-to-fail probes.* Systems-thinking pilots run together: pick a real question, run small parallel probes with **amplify/dampen criteria stated in advance** (complex domains are probed, not planned), sense honestly, keep what works. A probe that proves a pattern **graduates into a MotusModel** — the learning→model pipeline. Sponsors fund probes; Davara stewards the research.

**LaunchLoops** · *momentum as a product.* When a mover, model or startup is ready to launch or scale, they run a LaunchLoop — an outlier, trend-native, community-powered launch pattern. The leverage: great LaunchLoops are minted as **MotusModels**, so the strategist who designs one **earns on every future launch that runs it**. Revenue: launch listings and featured launch weeks.

**LeverageLoops** · **COMING SOON.** *The compounding chapter — where finished work goes to work.* Held deliberately close until it's ready to be revealed.

**The equation:** `LearningLoops + LaunchLoops + LeverageLoops = the LongLoops` — and what a LongLoop proves, a **MotusModel** keeps. Discover → crystallize → launch → compound. Playing the long game is the whole strategy; the loops are how it's played.

---

## 9 · Money models — how the platform earns (in order of arrival)

1. **The 3% Network split** on every $DASH transaction — *the rail already exists*
2. **The agent listing fee — 1 DASH** to list and host a MotusAgent on the registry: flat, honest, one coin to take the stage
3. **Model run fees** — the Split, already live
4. **LaunchLoop fees** — launch listings, featured launch weeks, and launch-pattern MotusModels whose designers earn on every future run
5. **Motus Events** — tickets in DASH, non-custodial
6. **Dash DAO treasury proposal** — outside funding for the best Dash-adoption showcase on the market
7. *(Counsel-gated, later)* pool coordination fees · agent marketplace fees

Every fee fits in one sentence, or it doesn't ship.

---

## 10 · The Covenant — what we never do

- **Never custody.** No user funds held, pooled, or forwarded — coordinate, never custody.
- **Never presale.** No committed funds against a future token. Conviction is staked on Intuition from your own wallet, or pledged free — never handed to us.
- **Never sell MOTUS pre-launch.** The only mint is motion. If money could mint it, work would stop meaning anything.
- **Never promise a rate.** Earned MOTUS is *recorded and will be honored* — the sentence ends there until counsel writes the next one.
- **Never sell reputation.** Reviews require receipts; vouches require stake; boosts buy *visibility*, never *credibility*.
- **Ethics never scale** — held everywhere, always.

---

## 11 · Phases

**P0 — Reveal the market (days).** `offer` field on MotusMoves → Motus.Market page = the feed, filtered to offers → August's live mentorship move becomes listing #1.
*Status: the composer is built and running in the preview app — offer text, DASH price, service/model type, validation, and the listing joining the live feed. The schema below is what the rails bind to.*

```
Offer {
  id            string        // stable, public
  mover         handle        // the human, always named
  offer         string(≤140)  // one clear sentence
  price         number        // DASH, > 0
  tag           'service' | 'model'
  moveRef       moveId        // the MotusMove this offer stands on
  receipts      int           // completed engagements (derived)
  trustStaked   number        // $TRUST vouched on this mover (derived)
  created       timestamp
}
```
**P1 — Close the loop (weeks).** $DASH checkout on offers (rails exist) → MOTUS ledger + the C2 ticker → receipt-gated reviews → $TRUST vouches via Intuition → MotusCorpus v1 (unified receipts view).
**P2 — Compound (a season).** Model listings enriched → Community Model Run #1 → Motus Events + presence attestation → LearningLoop pilot #1.
**P3 — The registry (when earned).** MotusAgent listings (presence-gated) → $DASH pledge-pools for top moves → governance on Dash Platform.
**Deferred by design:** MotusMax agents (multi-sig SafeStep + stewardship) · LeverageLoops (COMING SOON) · any custodial anything · token launch mechanics — each behind its own gate.

---

## 12 · Open questions — the research ledger

1. **Counsel:** the 1:1 earn structure, launch mechanics, entity formation, DAO proposal timing.
2. **Wash-trade thresholds:** what velocity caps and trust-weights are right at small scale?
3. **Presence UX:** the exact co-signing ritual at events — one QR? one tap? paper fallback?
4. **Dispute resolution without custody:** milestone-sized direct payments + reputation consequences + community arbitration — design the smallest honest version.
5. **Agent liability:** how far does the Principal Law reach when an agent errs? (Insurance, caps, or scope limits.)
6. **HELD — the impact chapter.** Giving/impact loop design is parked while August ponders the model himself (possibly MOTUS itself becomes the giving loop). A deep-research quest on next-generation crypto giving/nonprofit models stands ready to launch on his word.

---

## 13 · Metrics that matter

**The C2** (total MOTUS ever earned) · **GMM** — Gross Market Motion ($DASH volume) · weekly active movers · $TRUST staked on movers/models · corpus depth per mover · repeat-hire rate · models minted / model runs · events held.

---

## 14 · New words (for the glossary)

**Offer** — a MotusMove with a service attached. · **MotusCorpus** — your portfolio of proof; the receipts ledger. · **The C2** — the contribution supply. · **Presence Economy** — work that runs while you're *here*, not while you sleep. · **The Principal Law** — every agent answers to a named human. · **The LongLoops** — LearningLoops + LaunchLoops + LeverageLoops: the three flywheels of the long game. · **LearningLoops** — safe-to-fail probes whose proven findings graduate into MotusModels. · **LaunchLoops** — outlier launches run as loops; their patterns minted as MotusModels. · **LeverageLoops** — COMING SOON.

---

## 15 · The Build Prompt — v3

*The directive for the implementation build. Everything below is settled; nothing here is a suggestion.*

> **Build Motus.Market P0→P1 on the existing MotusMoves stack.**
>
> **The identity.** The mark is the glowing infinity (`assets/logo.png`) — used as
> the file, never redrawn. Display face **Orbitron**; voice **Sora**; instruments
> **JetBrains Mono**. Cyan `#1ce7ff` is the one accent and it always glows; orange
> marks the building blocks only (MotusAgents · MotusModels · the Loops · the priced
> act); green marks money glyphs. Full-strength ink, always — no faded text in any
> mode. NOX and LUX both ship.
>
> **The material.** NEURONEOGLASS (canon: `neoglass.md`) — indigo-black void, one
> layer of glass with a lit edge, blur as hierarchy, the rainbow as sharp glass once
> per surface, Reflect-scale air. Drawn glyphs only, never emoji.
>
> **The motion.** One statement per viewport, arriving out of blur into clarity; one
> gesture moves exactly one section and locks it dead center. Selection *bulges* and
> sends a shockwave; navigation makes light physically travel to the destination.
> Everything is visible without JavaScript, animation pauses off-screen, and
> `prefers-reduced-motion` is honored. Calm is the luxury signal — one signature
> motion per surface, stillness everywhere else.
>
> **The mechanics, in order.** The `offer` field on moves (§11 schema) → the market
> page as the filtered feed → wallet-to-wallet **$DASH** checkout (InstantSend, 3%
> Network split, **never custody**) → the **MOTUS** ledger 1:1 (*recorded and will be
> honored* — no rate promised, ever) → the C2 ticker → receipt-gated reviews →
> **$TRUST** vouches via Intuition → MotusCorpus v1. Three currencies only; VOTUS
> never enters this market.
>
> **The frame.** MotusModels are the keystone; the LongLoops — Learning · Launch ·
> Leverage (coming soon) — orbit it. Agents are MotusAgents and MotusMax only, and
> every agent answers to a named human.
>
> **The gate.** Honor the Covenant (§10) in every line. Verify live at desktop *and*
> 375 before calling anything done: zero overflow, zero faded text, ≥12px type, ≥44px
> targets, and a real look at the rendered pixels — never a green build alone.
>
> *Acta Non Verba.*

---

*Motus means move. The market is where the moves go to work.*
*Acta Non Verba — recorded, witnessed, honored.*
