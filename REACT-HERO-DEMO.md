# React hero demo — main LLM + Archilas tool

One continuous chat. The user talks to a main LLM (Claude). Archilas is the tool, not the chatbot.

Compact already happened over time via the memory SLM. Ask time is retrieve → rank → return context.

## Flow

1. Composer types L→R (caret at the end):
   `We’re on a call about pricing. What did we already decide, what’s still open, and what should we not promise yet?`
2. Send → composer clears, user bubble appears. Claude opens `search_living_memory`.
3. Tool subtitle: Archilas · Memory SLM · early access.
   Status: Retrieving… → Ranking… → Done.
   Steps: Retrieve from living memory (already compacted) → Rank prefs / decisions / open loops → Return context to model.
   Already-compacted rows light up. A **Returned to model** block shows the Archilas → LLM payload.
4. Panel collapses. Claude streams:
   `Keep the $12k floor. You can offer up to 20% off on annual. Don’t promise the usage add-on until legal clears.`
5. Soft loop reset. Same Claude frame always. ~20s.

## Craft

Persistent app frame. Living record · not paste. No Memory Field cuts. No live-compacting step. Opaque plate. Compact → Reason → Deliver as a tiny chrome hint only. SLM/MCP not live. No Ship Friday.
