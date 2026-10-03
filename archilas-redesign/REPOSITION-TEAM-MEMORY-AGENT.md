# Archilas repositioning: team memory agent (DRAFT, not published)
Requested by Co-founder at Hermes's direction, 2026-10-03. Website + outreach only (not YC).

## Facts this copy relies on (verify before publishing)
- Archilas gives engineering teams on Cursor, Claude Code and MCP a lasting memory.
- Answers why, when and who from team history, with a citation to the source note.
- Measured: 86.8% accuracy on 121 single-fact questions about a real repo's history; p95 latency 1.5s.
- No head-to-head benchmark yet. Competitor cells are qualitative and based on how those products describe themselves publicly. Check each before going live.
- CONFIRMED by Hermes (2026-10-03): Cursor, Claude Code and MCP integrations are NOT live. Say "coming soon" everywhere. CTA is an early-access / intro call, never a self-serve try.

---

## 1. Positioning

**Statement**
For engineering teams who build with Cursor and Claude Code, Archilas is the agent that remembers your team's work. It answers why something was built, when it changed and who decided, and it cites the note it came from. Other memory tools give an agent somewhere to store and fetch facts, and document search hands back loose chunks. Archilas keeps a lasting record of the team's decisions and reasons over it, so every agent and every engineer starts from what the team already knows. Cursor, Claude Code and MCP integrations are coming soon; early access is by intro call.

**Headline options**
1. The agent that knows your team's history.
2. Ask why it was built. Get the answer, and the source.
3. Your team's memory, coming soon to Cursor and Claude Code.

---

## 2. Homepage copy

### Hero
- Eyebrow: Team memory for engineering teams · Cursor, Claude Code and MCP coming soon
- H1: The agent that knows your team's history.
- Sub: Ask why, when or who about any part of your codebase. Archilas answers from your team's record and cites the note it came from.
- Primary CTA: Get early access → https://cal.com/archilas/archilas-intro (intro call, not self-serve)
- Secondary CTA: See how it works (anchor)
- Proof line: 86.8% accuracy on 121 questions about a real repo's history · p95 1.5s

### Problem (one line)
The reason behind your code lives in old PRs, threads and people's heads. Your agents can't see any of it, and new engineers have to ask around.

### How it works
1. **Capture.** Archilas reads the places your team already writes things down: PRs, issues, design notes and threads.
2. **Remember.** It keeps a lasting record of decisions, changes and owners over time, not a pile of chunks.
3. **Answer.** Ask a question and get a direct answer with a citation to the source note. Asking from Cursor, Claude Code or any MCP client is coming soon.

Example (illustrative, replace with a real one):
> **Q:** Why did we move auth off the session service, and who signed off?
> **A:** The team moved it in March after repeated timeouts under load. Priya approved the change in the infra review. *Source: PR #412, design note "Auth migration".*

### Why Archilas beats other memory tools
Intro line: Other memory tools give your agent a place to store and fetch facts. Archilas answers your team's why, when and who about the code, and cites the note behind every answer.

| | Archilas | Mem0 | Zep | Letta | Search over docs (RAG) |
|---|---|---|---|---|---|
| Built for | Engineering teams' code and decision history | Memory layer for AI agents and apps | Governed shared context for enterprise agents | Platform for stateful, self-improving agents | Finding passages in documents |
| Answers why / when / who | Direct answers from team history over time | Recalls stored facts, ranked by time | Tracks facts and how they change | Agent-managed memory; depends on agent design | Returns chunks; the model has to infer |
| Cites the source note | A citation on every answer | Change history, not cited answers | Traces facts back to source records | Depends on your build | Can show the chunk, not the decision |
| Cursor and Claude Code | Coming soon, via MCP | Ships MCP server and Claude Code plugin | Memory MCP for Cursor and Claude Code (needs SSO setup) | Demo Claude Code plugin; own coding agent | Partly built in; quality varies |
| Setup | Early access, onboarded with you | Cloud API, SDK, MCP, or self-host | Managed cloud or your VPC; Graphiti OSS | Letta app/CLI; cloud or self-host | Build and tune a pipeline |
| Measured on team-history questions | 86.8% on 121 questions, p95 1.5s | [Benchmark pending] | [Benchmark pending] | [Benchmark pending] | [Benchmark pending] |

Footnote: Competitor cells checked against each product's public site and docs on Oct 3, 2026 (mem0.ai, docs.mem0.ai, getzep.com, help.getzep.com, docs.letta.com, github.com/letta-ai). Re-check before publishing. Head-to-head benchmark on the same question set coming soon.

Internal note (do not publish): Mem0 and Zep already ship MCP servers that work with Cursor and Claude Code, so don't claim we're the only option there, and since Zep pitches organization-wide shared context, don't say "only we do team memory". The claims that hold up are cited, direct answers to why/when/who about engineering history, plus our measured accuracy. Mem0's MCP gives you memory tools rather than cited answers. Zep's MCP requires an enterprise SSO setup. Letta's Claude Code plugin is labelled a demo.

### Agent + memory (short band)
- H2: An agent and a memory, in one.
- Line: A memory store waits to be queried. An agent forgets when the session ends. Archilas does both: it holds your team's history and reasons over it when you ask.

### CTA band
- H2: See it on your own repo.
- Line: 20 minutes. Bring a question your team keeps asking.
- Button: Book an early-access call → https://cal.com/archilas/archilas-intro

---

## 3. Outreach angle (eng leads)

**First line:**
Your engineers and your agents keep asking the same question: why is it built this way?

**Value prop (3 lines):**
- Archilas answers why, when and who from your team's history, with a citation to the source.
- Cursor, Claude Code and MCP integrations are coming soon, so your agents will start with context instead of guessing.
- On a real repo it scored 86.8% on 121 history questions at 1.5s p95. Happy to run it on yours.

CTA: Want early access? 20 minutes: https://cal.com/archilas/archilas-intro
