# Assumptions

## Early access

Primary CTA is an intro call at `https://cal.com/archilas/archilas-intro`. There is no self-serve signup on the marketing site. The waitlist API remains in the repo but is not the landing CTA.

## Product and copy (team memory agent)

Source: `archilas-redesign/REPOSITION-TEAM-MEMORY-AGENT.md` (Hermes, 2026-10-03), plus Hermes PR #56 feedback (light Linear/Vercel look, contrast cards, real eval demo).

- H1: “The agent that knows your team's history.”
- Sub: Ask why, when or who about your codebase. Get a cited answer from your team's record.
- Eyebrow: Team memory for engineering teams · Cursor, Claude Code and MCP coming soon
- Proof: 86.8% accuracy on 121 questions about a real repo's history · p95 1.5s
- Integrations (Cursor, Claude Code, MCP) are NOT live — say “coming soon” everywhere
- Comparison is three short contrast cards (no competitor names, no table, no “[Benchmark pending]”)
- No invented customer logos or self-serve try claims

## Eval demo

Hermes asked for Stage 15 from `Archilas/archilas-r-and-d@claude/stage15-coverage-siblings`. That repo 404s for this GitHub App. A genuine Flask why-answer was taken instead from the live RunPod `stage23-coverage` workspace:

- `checkpoints/stage23/dev_S23/answers.json` id `m5_w040_0` (qtype `why_lead`)
- Model answer judged blind with the Stage-23 judge rubric (`anthropic/claude-sonnet-4.6`, temperature 0) → `correct: true`
- Source note `n_0030` “Flask subdomain matching behavior” → `flask/CHANGES.rst`

The landing copy shortens the model answer slightly for the typed UI; meaning matches the judged row.

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented beyond the measured 86.8% / 121 / 1.5s figures and the judged eval row above.
