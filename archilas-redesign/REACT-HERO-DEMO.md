# React hero demo — main LLM + Archilas tool

One continuous chat. The user talks to a main LLM (Claude). Archilas is the tool, not the chatbot.

Compact already happened over time via the memory SLM. Ask time is retrieve → select → return context.

## Flow

1. Composer types L→R:
   `We’re negotiating pricing with Acme. What did we already decide, what’s still open, and what must we not promise?`
2. Send → Claude opens `archilas_get_context`.
3. Steps (never compacting now): Calling Archilas… → Retrieving living memory… → Selecting what matters… → Returning context…
4. Already-compacted rows light up. Payload returned to the model:
   ```
   preference: Cap annual discount at 20%
   decision: Enterprise floor stays $12k
   open_loop: Usage add-on — legal not cleared
   ```
   Micro: Living memory · memory SLM · early access
5. Claude streams:
   `Keep the $12k floor. You can offer up to 20% on annual. Don’t promise the usage add-on until legal clears.`
6. Chrome difference: We don’t dump old chats into the prompt — we return the living record.

## Craft

Persistent Claude frame. Archilas is the tool. No Memory Field cuts. Opaque plate. Compact → Reason → Deliver as a tiny chrome hint. SLM/MCP not live. No Ship Friday.
