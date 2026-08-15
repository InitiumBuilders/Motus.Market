# The security model

How one platform lets you sign in with another platform's account without ever holding the thing
that could hurt you.

This document is the reasoning, not just the mechanism. If you are building a cross-platform
sign-in of your own, the last two sections are the ones that will save you.

---

## The problem

Motus.Market and MotusMoves.US are separate deployments. Accounts live on MotusMoves. We wanted a
mover to sign into Motus.Market with the account they already have — same credentials, same 2-step
— and then edit their profile from either place.

The naive version of this is to have MotusMoves hand over the account's write credential after a
successful login. That is what most integrations do, and it is wrong: it turns a login into a
permanent, unrevocable grant of full account authority to another origin.

## What the write credential actually is

On MotusMoves, every public profile carries a `clientId`. It is the **sole** authority for writing
to that profile — a save or a delete is authorised by it and nothing else. Whoever holds it can
rewrite a builder's payout addresses or delete their page.

Two consequences follow, and both are enforced in code:

1. The public profile API **strips `clientId` from every response**, on the single-profile read and
   on the directory read alike. Publishing it even once would let anyone harvest it.
2. The login endpoint **never returns it**, to any caller, ever — including the one that just
   proved it knows the password.

## The token

After a full login — password verified against the identity provider, and a valid TOTP code if the
account has 2-step enabled — MotusMoves mints a session token:

```
body = base64url({ cid, slug, uid, scp, exp, v })
sig  = base64url(HMAC-SHA256(body, key))
token = body + "." + sig
```

- `key` is derived: `SHA256("<purpose>:" + SERVER_SECRET)`. The purpose string means this token
  cannot be replayed against a different subsystem that shares the same secret.
- `exp` is **12 hours** from issue.
- `scp` is a single named scope.
- **Fail closed.** If the server has no secret configured, `key` is null and `mint` returns nothing.
  There is no fallback path that issues an unsigned or weakly-signed token.

Verification uses `crypto.timingSafeEqual` on the signature, then checks expiry, then checks that
the scope matches what the endpoint requires.

The consuming platform stores the token and the public identity in `localStorage`. It never stores
the password. It never sees the `clientId`.

## What the token is allowed to do

A valid token is not a substitute for the credential. Every write endpoint narrows it further:

| Rule | Where |
|---|---|
| The saved record's slug is **forced** to the token's own slug — you cannot rename yourself into someone else's page. | `api/profile.js` |
| `delete` is refused outright with `403 scope`. A remote session can never destroy an account. | `api/profile.js` |
| The stored record's `clientId` must still match the one the token carries, or the write is refused. | `api/profile.js` |
| `verified` is forced to the value already on record. A trust flag is never self-grantable across a boundary. | `api/profile.js` |
| A corpus write can only ever append to the token's own slug. | `api/corpus.js` |
| The `clientId` is stripped from the response echoed back to a token session. | `api/profile.js` |

## The two guards every remote editor needs

Both of these were real holes, found and closed before the feature shipped. They are not specific
to this codebase — they are what goes wrong whenever one system edits another system's records.

### 1. A partial payload must never erase what the form doesn't render

A remote editor only sends the fields it displays. If the server treats that payload as the new
complete record, everything the editor didn't know about is silently destroyed — in our case a
mover's handle, their active MotusModel, and their pinned repositories.

Two defences, because one is not enough:

- **Server:** on a token write, any field the payload omits keeps the value already on record.
- **Client:** the Save button stays **disabled until the current record has actually loaded**. No
  record in hand, no save. If the fetch fails, the editor says so and stays shut.

### 2. The identity anchor must be the account, not the lookup

Our first version decided "are you signed in?" by whether a public profile had been successfully
matched to the account. When the match failed, the login succeeded, returned a blank identity, and
the interface silently did nothing — the user saw a confirmed login and then no change at all.

The fix is a separation that is obvious in hindsight:

- **The account is the session.** The user id always exists once the password and 2-step are
  verified. That, and only that, decides whether someone is signed in.
- **Whether a public page is linked is a separate, softer fact**, returned as its own flag. When it
  is false the interface says so plainly and still shows the account.

A related lesson: the profile lookup itself now tries four routes — slug, handle, username, and
payout identity — because a single failing match should never be the difference between an account
and a ghost.

## What is not protected by this, and should not be

- The MotusCorpus is **public to read**. It is a record of public work, and the entire point is
  that anyone can check it. Writes are token-only.
- Profiles are public pages. Everything in a profile read is intended to be seen.
- `$DASH` and `$TRUST` addresses on a profile are published on purpose, so that anyone can verify a
  payment themselves rather than trusting a middle layer.

## Secrets

There are none in this repository, and there is nothing to configure to run the front end — it is
static and talks only to public endpoints.

The server side, which lives in a different repository, reads its secrets from the environment.
The variable **names** are documented here so the design is auditable; the values are not, and
never appear in any repository:

| Variable | Used for |
|---|---|
| `DEVICE_2FA_KEY` | Root secret for TOTP storage and for deriving the session-token signing key. |
| `BLOB_READ_WRITE_TOKEN` | Object storage for profiles and corpus logs. |

## Reporting

Please see [SECURITY.md](../SECURITY.md). Don't open a public issue for a vulnerability.
