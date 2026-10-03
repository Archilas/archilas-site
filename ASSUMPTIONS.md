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

## Eval demo (blocked on R&D access)

Hermes asked for one genuine Stage-15 correct Q&A from:

- `github.com/Archilas/archilas-r-and-d` @ `claude/stage15-coverage-siblings`
- `checkpoints/stage15/final/answers.json`
- `judge/judgements.jsonl` (verdict: correct)
- Prefer a why/decision or version question about Flask/Werkzeug, with its real source note

This Cloud Agent’s GitHub App install only includes `Archilas/archilas-site` (`archilas-r-and-d` returns 404). No Stage-15 row was fabricated. `src/lib/eval-demo.ts` stays `verifiedFromStage15: false` until read access is granted or a correct row is pasted into chat.

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented beyond the measured 86.8% / 121 / 1.5s figures in the repositioning brief.
