# NEURONEOGLASS
**The neo-glass design system — sealed 2026-08-14. The default for every dense Motus surface.**
*Studied from Reflect.app and August's glass reference plates. Sibling: NeuroFOCUS (V1 neumorphism — sparse, sacred surfaces only).*

---

## The one sentence

**Darkness is the unknown; glass is honesty; light is understanding.** Glass shows there is nothing to hide. Blur pushes the not-now away. Light lands only where meaning lives.

## Why it exists — the NeuroFOCUS lesson

Neumorphism carves one material: an altar, never a market. It holds three focal things beautifully and collapses at four. Glass stacks *planes* — blur becomes hierarchy, so density becomes depth instead of mud. **Count the screen first: ≤3 focal things → either system. 4+ → glass, always.**

## The seven sealed laws (permanent, all systems, all platforms)

1. **FONT LAW.** No faded/tinted/low-strength text — ever, any mode. Pure white on NOX, deep navy on LUX. Hierarchy = size / weight / tracking / case. No secondary-ink token exists.
2. **ACCENT ORDER.** Cyan/electric blue = THE accent (actions, focus, live signals). Violet = atmosphere only — auras, orbs, glass tint; never text, never buttons. Orange = symbolic: MotusAgents, MotusModels, the Loops, the priced act.
3. **GLASS RAINBOW.** Hard conic stops, sharp edges, specular gloss — a material, never an aura. Once per surface, on the most magical thing only.
4. **FOCUS LAW.** One focal point per viewport. One idea per pane. Fewer, larger, calmer.
5. **GLYPH LAW.** No emojis. Drawn inline SVG — 1.8px strokes, currentColor, 24px grid.
6. **SPACE IS THE DESIGN.** 120px+ between landing sections, 72px+ between app sections, 34px between groups. Silence is layout.
7. **NOX / LUX.** Both modes, these names, every platform, forever.

## NOX — the interstellar void (primary)

```css
--bg:#0a0714;            /* indigo-black, never #000 */
--ink:#ffffff;
--glass:rgba(255,255,255,.045);
--edge:rgba(255,255,255,.14);
--blur:blur(22px) saturate(170%);
--violet:#8b5cf6;        /* atmosphere only */
--cyan:#38e8ff;          /* THE accent */
--orange:#ff8c2e;        /* the building blocks */
```

## LUX — the pastel glass day

```css
--field:linear-gradient(140deg,#dfe9ff,#e9dfff 48%,#d8f2ff);
--ink:#22314f;
--glass:rgba(255,255,255,.58);
--edge:rgba(255,255,255,.85);
--blur:blur(18px) saturate(160%);
```

## The glass recipe (every pane)

```css
.pane{background:var(--glass);
  backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);
  border:1px solid var(--edge);border-radius:24px;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.12), 0 24px 60px rgba(0,0,0,.35)}
```

Rules: the aurora **field is painted first** (glass needs something to refract) · always `saturate(160%+)` · the lit edge is mandatory · **one layer of glass, never glass-on-glass** · blur = hierarchy (the not-now is out of focus, never greyed) · grain over gradients · never animate backdrop-filter.

## Component canon

**The Pane** (glass card — one idea) · **The Eclipse** (the one luminous body per surface: dark core, blazing violet-cyan rim, sacred) · **The Rail** (desktop glass sidebar, cyan glow marks the live room) · **The Halo Pill** (glass capsule, active = cyan ring) · **The Focus Sheet** (modal; the world behind blurs, never greys) · **The Beam** (1px gradient line between acts) · **The Foil** (the sharp rainbow ring on the sacred element only) · **The Ticker** (mono numerals that tick, never jump).

## Type & motion

**Sora** — voice: 800 display, 400–600 body, always full-strength. **JetBrains Mono** — instruments: numerals, receipts, micro-labels ≥11.5px with wide tracking. Floors: text ≥12px, targets ≥44px.

Panes **surface** (rise + fade, 400–600ms, staggered ≤80ms). The eclipse rim revolves slowly — the only perpetual motion, paused off-screen. Glow breathes opacity-only. One signature motion per surface; content visible by default (pipeline armor).

## What Reflect teaches

One promise, three words. One glowing body per section. Nav is one glass pill. Features = glyph + two words. One plan, one price. Space between sections beats the sections. Calm is the luxury signal. *Full study: [notes-reflect.md](/notes-reflect.md) · essentials: [clarity-tips.md](/clarity-tips.md).*

## Anti-slop

Grey text on glass · glass with no field behind it · blur without saturate · rainbow as blurred aura · violet buttons or violet text · glass-on-glass mud · six glowing things · emoji icons · pure #000.

*Live: motusmarketinsight.vercel.app · V1 NeuroFOCUS canon: motusmarketdash.vercel.app/neuro.md*
