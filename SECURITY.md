# Security policy

## Reporting a vulnerability

Please report privately, not in a public issue.

Use **[GitHub private vulnerability reporting](https://github.com/InitiumBuilders/Motus.Market/security/advisories/new)**
on this repository. That is the fastest route and it keeps the details out of public view while the
problem is being fixed.

If that is not available to you, open a public issue titled `security contact request` containing
**no details of the problem**, and you will be given a private channel.

Please include what you can: what you did, what happened, and what you expected. A proof of concept
helps enormously. If you are not sure whether something counts, report it — a false alarm costs us
ten minutes.

## Scope

**In scope:** this repository's front end, and the way it uses the public MotusMoves.US API —
authentication and session handling, the profile editor's write path, the corpus write path, and
anything that would let one account act as another.

**Also in scope, and especially welcome:** the session-token design described in
[docs/SECURITY-MODEL.md](docs/SECURITY-MODEL.md). If you can defeat it, we want to know.

**Out of scope:** volumetric denial of service, social engineering, findings from automated scanners
with no demonstrated impact, and reports about a third-party service's own infrastructure.

## Testing, and the line

Please test against your own account and your own data.

Do not access another person's account, profile, or corpus. Do not modify or delete data you do not
own. If a proof of concept requires acting on someone else's record, describe the mechanism instead
of executing it — that is sufficient and it will be taken seriously.

Good-faith research within these limits is welcome and will not be met with legal action.

## What this repository contains

No credentials, no keys, no tokens, and no personal data. The front end is static and reads public
endpoints. Server-side secrets live in the environment of a separate deployment and are documented
here by variable name only.

If you believe you have found a credential in this repository or anywhere in its history, that is a
report worth making immediately.

## Our side

- Every release is scrubbed before publication; the procedure is in
  [docs/RELEASING.md](docs/RELEASING.md).
- A confirmed leak means the credential is rotated first and the code is fixed second.
- Session tokens are scoped, expire in 12 hours, and fail closed when the signing secret is absent.
