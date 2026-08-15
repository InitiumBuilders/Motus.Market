# Releasing

Motus.Market is developed in a private repository and published here. This document is the pattern,
written down so it is followed the same way every time.

**Private is the working copy. Public is a scrubbed publication of it. The scrub happens on every
release, not once.**

---

## The two repositories

| | Purpose | Carries |
|---|---|---|
| **`MotusMarketPrivate`** | Backup and working copy. | The full tree, deployment configuration, and a reference copy of the server-side bridge files. |
| **`Motus.Market`** (this one) | The open-source publication. | Application source, documentation, and nothing operational. |

## What never crosses into public

| Excluded | Why |
|---|---|
| `.vercel/` | Deployment identifiers. Not cryptographic secrets, but they point at infrastructure and have no business here. |
| Any `.env*` file | Obvious, and it stays obvious by never making an exception. |
| Server-side API source | It belongs to its own repository and reads real secrets from the environment. |
| Private infrastructure names, tunnel hosts, internal relays | A name is a target. |
| Personal identifiers not already public by intent | Email addresses, private wallet addresses, absolute paths carrying a username. |

Documentation may name an environment **variable** so the design is auditable. It never carries a
value.

## The steps

1. **Land and verify the change in private.** Parse gates, layout audit at 1440 and 375, live
   probes. Publishing something unverified helps nobody.
2. **Push the private backup.** Working copy first. The public repository is downstream of a known
   good state, never ahead of one.
3. **Rebuild the public tree from the private one** with an explicit include list. Copy what is
   named, rather than deleting what is unwanted — a deny list silently ships the file you forgot to
   think about.
4. **Run the scrub scan** over the resulting tree. It classifies by tier: cryptographic material is
   a blocker; personal and infrastructure identifiers are a decision to be made deliberately; content
   that is public by intent is flagged and kept.
5. **Confirm the scanner is not simply silent.** Plant a decoy of each tier, scan, see it caught,
   remove it. A clean report from a scanner that has not been proven to detect anything is not a
   clean report.
6. **Publish**, and update this documentation in the same commit if behaviour changed.

## Two rules that are not negotiable

**Scan the tree that will publish, not the folder on disk.** A working directory is full of
untracked and ignored files that a raw grep will happily read and a push will never include — and
the reverse mistake, a file that is tracked but not open in front of you, is the one that leaks.

**A clean tip is not a clean history.** Git keeps what was committed even after it is deleted. Both
of these repositories were seeded from a scrubbed tree as a fresh initial commit for exactly this
reason. If a secret ever does reach a public commit here, the response is to rotate the secret —
not to rewrite the history and hope.

## If something leaks anyway

1. Rotate the credential first. Treat it as compromised from the moment it was pushed, not from the
   moment it was noticed.
2. Then remove it from the code.
3. Then work out which step above would have caught it, and add that step.
