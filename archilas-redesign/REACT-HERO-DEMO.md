# React hero demo — continuous chat

One AI chat transcript the entire loop. No cuts to Memory Field / Reason screens.

## Flow

1. User bubble types (caret):
   `We’re on a call about pricing. What did we already decide, what’s still open, and what should we not promise yet?`
2. Send → `search_living_memory` tool-call row smoothly expands.
3. Inside that panel: Searching… → Selecting memories… → shards dim→lit → Pref / Decision / Open micros → Done.
4. Panel collapses to a completed tool chip.
5. Assistant streams:
   `Keep the $12k floor. You can offer up to 20% off on annual. Don’t promise the usage add-on until legal clears.`
6. Soft loop reset. Same layout always. ~20s.

## Craft

One persistent app frame (sidebar + header + composer stay put). Content transitions in place: type → tool accordion → stream. No Memory Field / Reason page cuts. Opaque plate. Compact → Reason → Deliver as a tiny chrome hint only. No Ship Friday. SLM/MCP not live.
