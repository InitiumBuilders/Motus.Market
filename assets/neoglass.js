/* ═══════════════════════════════════════════════════════════════
   NEURONEOGLASS — the shared behaviour layer.

   Two things, on every page:
     1. glass that lights where you point at it
     2. blocks that rise into place as you reach them

   Both are armoured the same way: the page is complete and readable
   with this file absent, blocked, or failed. Nothing here is required
   to see anything — it only adds the motion.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var root = document.documentElement;
  var STILL = window.matchMedia &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COARSE = window.matchMedia && matchMedia('(pointer: coarse)').matches;

  /* ── 1 · the glass lights where you point ──────────────────────
     The highlight already existed as a fixed glow at the top of each
     pane. Anchoring it to the cursor costs two custom properties and
     turns a decoration into a response. Touch has no cursor, so it
     keeps the original centred glow instead. */
  if (!COARSE && !STILL) {
    var pending = null;
    document.addEventListener('pointermove', function (e) {
      if (pending) return;
      pending = requestAnimationFrame(function () {
        pending = null;
        var pane = e.target && e.target.closest && e.target.closest('.pane--hover');
        if (!pane) return;
        var r = pane.getBoundingClientRect();
        if (!r.width || !r.height) return;
        pane.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        pane.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    }, { passive: true });
  }

  /* ── 2 · blocks rise as you reach them ─────────────────────────
     The class goes on FIRST and only from script, so a visitor without
     JS never meets a hidden element. Anything already on screen at load
     is revealed immediately rather than animating in behind them. */
  if (STILL || !('IntersectionObserver' in window)) return;

  var TARGETS = [
    '.proof .pane', '.proof h2', '.proof .beam',
    '.loopband', '.anatomy', '.keypane', '.lawpane',
    '.dvhero', '.splitpane', '.skillpane',
    '.mecard', '.movercard', '.phero'
  ].join(',');

  var nodes = [].slice.call(document.querySelectorAll(TARGETS));
  if (!nodes.length) return;

  root.classList.add('reveal-on');
  nodes.forEach(function (n, i) {
    n.setAttribute('data-reveal', '');
    /* stagger only within a row, never down a whole page — a long
       cascade reads as a loading screen, not as composure */
    n.style.setProperty('--rd', (i % 4) * 70 + 'ms');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('seen');
      io.unobserve(en.target);      /* it arrives once; it does not re-arrive */
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  nodes.forEach(function (n) {
    if (n.getBoundingClientRect().top < innerHeight) n.classList.add('seen');
    else io.observe(n);
  });
})();
