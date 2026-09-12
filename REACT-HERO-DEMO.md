# React hero demo — continuous chat

One AI chat transcript the entire loop. No cuts to Memory Field / Reason screens.

## Flow

1. User bubble types (caret):
   `We’re jumping on with Acme in 10 minutes. What should I tell them about enterprise pricing — only what we already decided, and call out anything still open so I don’t overpromise?`
2. Send → `archilas_memory` tool-call row smoothly expands.
3. Inside that panel: Searching living memory… → shards dim→lit → Pref / Decision / Open micros → Done · 4 memories.
4. Panel collapses to a completed tool chip.
5. Assistant streams:
   `Keep the $12k floor. Offer up to 20% on annual. Don’t promise the usage add-on until legal clears.`
6. Soft loop reset. Same layout always. ~20s.

## Craft

Real chatbot chrome (bubbles, tool accordion, streaming). Opaque plate. Crisp type. Compact → Reason → Deliver as a tiny chrome hint only. No Ship Friday. SLM/MCP not live.
