export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Direct answer for AEO; appears near the top of the post */
  directAnswer: string;
  datePublished: string;
  author: string;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  /** Plain text body paragraphs and headings for word count + rendering */
  sections: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

function wordCount(post: BlogPost): number {
  const bits: string[] = [
    post.title,
    post.excerpt,
    post.directAnswer,
    ...post.sections.flatMap((s) => {
      if (s.type === "ul") return s.items;
      return [s.text];
    }),
  ];
  return bits.join(" ").trim().split(/\s+/).filter(Boolean).length;
}

export function readingTimeMinutes(post: BlogPost): number {
  return Math.max(1, Math.ceil(wordCount(post) / 200));
}

export const posts: BlogPost[] = [
  {
    slug: "ai-memory-vs-rag",
    title: "How AI memory tools actually work, and how they differ from RAG",
    excerpt:
      "Retrieval-augmented generation finds passages. A memory agent remembers what matters across time and answers for your other agents. Here is the practical difference.",
    directAnswer:
      "RAG retrieves text snippets and pastes them into a prompt. A memory agent remembers structured facts about your work and answers for your other agents, so replies stay consistent across sessions instead of depending on whatever search happened to return.",
    datePublished: "2026-08-04",
    author: "Archilas",
    coverImage: "/blog/covers/memory-vs-rag.svg",
    coverAlt:
      "Abstract diagram contrasting a search stack of text snippets with a memory agent that answers for other agents",
    tags: ["memory", "RAG", "architecture"],
    sections: [
      {
        type: "p",
        text: "Most people meet “AI memory” as a product feature: the chatbot somehow remembers a preference from last week. Under the hood, that feature is often just retrieval-augmented generation (RAG) with a friendlier name: embed documents, search them, stuff the top hits into the prompt.",
      },
      {
        type: "p",
        text: "That approach is useful. It is also not the same thing as giving an AI a durable model of your world.",
      },
      { type: "h2", text: "What RAG is good at" },
      {
        type: "p",
        text: "RAG shines when the answer lives in a document you already have: policies, READMEs, tickets, PDFs. The system searches for relevant passages and asks the model to ground its reply in those passages. When the corpus is clean and the question is local to a page, this works well.",
      },
      {
        type: "p",
        text: "Where RAG strains is when the truth is distributed. “Why did we leave that vendor?” might require a payment failure from one month, a migration decision from another, and a constraint you stated in passing. Search returns fragments. The model is left to stitch them, or invent a bridge.",
      },
      { type: "h2", text: "What a memory agent is trying to do" },
      {
        type: "p",
        text: "A memory agent treats conversations as material for a maintained record: preferences, decisions, open loops, relationships between facts. It remembers, then answers for your other agents. The goal is not to re-find last Tuesday’s transcript. The goal is to keep a compact, current picture the next agent can ask about.",
      },
      {
        type: "ul",
        items: [
          "Facts should stay attributable and revisable when something changes.",
          "Related details should compose into one coherent answer, not two competing snippets.",
          "The system should refuse to invent when the record does not support a claim.",
        ],
      },
      { type: "h2", text: "Why the distinction matters in practice" },
      {
        type: "p",
        text: "If your daily stack spans several chat apps and internal agents, each tool’s prompt window is a temporary stage. Without a shared memory agent, you re-explain context, or each tool reconstructs a different story from whatever it can search. Cursor, Claude Code, and MCP integrations for Archilas are coming soon — they are not live.",
      },
      {
        type: "p",
        text: "Archilas is that memory agent: it remembers what your other agents were told and did, and answers with the source. RAG can still feed documents into the picture. The memory agent is what keeps the picture from resetting every morning.",
      },
    ],
  },
  {
    slug: "why-agents-lose-context",
    title: "Why AI agents lose context between sessions, and what to do about it",
    excerpt:
      "Agents do not forget because they are careless. They forget because session state is ephemeral by default. Persistent memory is the missing layer.",
    directAnswer:
      "AI agents lose context between sessions because each run usually starts with a fresh prompt window. Unless you deliberately persist structured memory outside that window, and reload it on the next run, the agent cannot reliably remember decisions, constraints, or unfinished work from yesterday.",
    datePublished: "2026-08-06",
    author: "Archilas",
    coverImage: "/blog/covers/agents-lose-context.svg",
    coverAlt:
      "Illustration of a broken timeline between two agent sessions with context falling into a gap",
    tags: ["agents", "context", "memory"],
    sections: [
      {
        type: "p",
        text: "Watch an agent work for an afternoon and it can look almost continuous: plans, tool calls, corrections, a partial implementation left mid-flight. Close the session and open a new one, and that continuity often vanishes. The agent asks questions you already answered. It reopens decisions you already closed.",
      },
      { type: "h2", text: "The prompt window is not a mind" },
      {
        type: "p",
        text: "Large language models are powerful within a context window. That window is still a temporary buffer. When the session ends, the buffer is gone unless something else saved the important parts in a form the next session can use.",
      },
      {
        type: "p",
        text: "Chat transcripts help, but they are a weak memory format. They are long, noisy, and ordered by conversation rather than by what is still true. Agents that “read the last thread” are doing damage control, not maintaining state.",
      },
      { type: "h2", text: "What actually needs to persist" },
      {
        type: "ul",
        items: [
          "Stable preferences and working constraints.",
          "Decisions and the reasons that still apply.",
          "Open loops: unfinished tasks, blockers, promises.",
          "Entity-level facts that other facts depend on.",
        ],
      },
      {
        type: "p",
        text: "Those items need a home outside the chat log: something durable, queryable, and small enough to reload without drowning the next prompt.",
      },
      { type: "h2", text: "A practical response" },
      {
        type: "p",
        text: "Treat memory as infrastructure, not as a side effect of logging. Compress what matters. Keep conflicts visible instead of silently overwriting. Reload memory at the start of work the same way you would mount a volume before running a job.",
      },
      {
        type: "p",
        text: "That is the problem Archilas focuses on: a persistent memory layer that agents and everyday AI tools can draw on between sessions, so continuity is designed rather than accidental.",
      },
    ],
  },
  {
    slug: "what-is-mcp",
    title: "What MCP is, and why it matters for agent tooling",
    excerpt:
      "The Model Context Protocol is a standard way for AI tools to connect to external context and capabilities. Here is why that matters for memory.",
    directAnswer:
      "MCP (Model Context Protocol) is an open protocol that lets AI applications connect to external tools and context sources through a shared interface. Memory could reach Claude, Cursor, and other clients that way. Archilas’s Cursor, Claude Code, and MCP integrations are coming soon — they are not live.",
    datePublished: "2026-08-08",
    author: "Archilas",
    coverImage: "/blog/covers/what-is-mcp.svg",
    coverAlt:
      "Abstract hubs-and-spokes graphic showing an AI client connecting to tools through a shared protocol layer",
    tags: ["MCP", "tooling", "integrations"],
    sections: [
      {
        type: "p",
        text: "If you have wired the same capability into three different AI products, you already understand the pain MCP is trying to reduce. Each client wants context. Each client speaks a slightly different dialect of “tools,” “plugins,” or “connectors.”",
      },
      { type: "h2", text: "A short definition" },
      {
        type: "p",
        text: "The Model Context Protocol standardizes how an AI client discovers and calls external capabilities. Instead of a bespoke bridge for every editor or chat app, a server can expose resources and tools in a form multiple clients understand.",
      },
      { type: "h2", text: "Why memory belongs on that path" },
      {
        type: "p",
        text: "Memory is only useful if it shows up where you already work. Developers do not want a fourth chat window that holds the “real” context while their other tools remain unaware. Delivering memory through MCP would let the same agent meet you inside those tools. For Archilas, Cursor, Claude Code, and MCP are coming soon. Memory does not reach those tools from Archilas today.",
      },
      {
        type: "ul",
        items: [
          "One memory service, many clients.",
          "Clearer boundaries between the model, the host app, and your data.",
          "Room to evolve the memory system without rewriting every integration.",
        ],
      },
      { type: "h2", text: "What to watch for" },
      {
        type: "p",
        text: "Protocols do not replace product judgment. You still need careful control over what is stored, what is retrieved, and how answers are grounded. MCP is the delivery rail. The quality of the memory on that rail is the actual product.",
      },
      {
        type: "p",
        text: "Archilas is a memory agent meant to answer for your other agents. Reaching the tools you already use — Cursor, Claude Code, and MCP — is coming soon, not something the product does today.",
      },
    ],
  },
  {
    slug: "memory-that-does-not-fabricate",
    title: "Build in public: teaching memory not to fabricate answers",
    excerpt:
      "A plain look at a hard product problem: when memory is incomplete, the system should say so, not invent a confident story.",
    directAnswer:
      "The hardest part of AI memory is not storage. It is restraint. When related facts are missing or conflict, a trustworthy memory system should refuse to invent a tidy story. We design for grounded composition: combine what is known, surface uncertainty, and avoid fabricated bridges between fragments.",
    datePublished: "2026-08-10",
    author: "Archilas",
    coverImage: "/blog/covers/no-fabricate.svg",
    coverAlt:
      "Warm abstract illustration of two factual nodes connected carefully with a gap left visible rather than filled",
    tags: ["build-in-public", "reliability", "memory"],
    sections: [
      {
        type: "p",
        text: "Early memory prototypes fail in a familiar way. Ask a question that touches two real facts and one missing link, and the system produces a fluent paragraph that sounds right. The fluency is the bug.",
      },
      { type: "h2", text: "The failure mode" },
      {
        type: "p",
        text: "Language models are trained to continue. Given partial evidence, continuation often means invention: a motive that was never stated, a timeline that was never confirmed, a causal link that only looks obvious in hindsight.",
      },
      {
        type: "p",
        text: "For a chat toy, that can be entertaining. For a memory layer people rely on across work, it is unacceptable. Memory that fabricates is worse than no memory, because it teaches you to trust a record that is quietly rewriting history.",
      },
      { type: "h2", text: "What we optimize for instead" },
      {
        type: "ul",
        items: [
          "Prefer an incomplete but honest answer over a polished guess.",
          "Compose related facts when the record supports the composition.",
          "Keep competing values visible when the record disagrees with itself.",
        ],
      },
      {
        type: "p",
        text: "None of that requires publishing internal scoreboards. You can feel the difference in daily use: the assistant stops “helpfully” filling gaps you never authorized it to fill.",
      },
      { type: "h2", text: "Why we are building in public on this point" },
      {
        type: "p",
        text: "Reliability is easy to claim and hard to demonstrate without turning a marketing site into a lab notebook. So we state the standard plainly: Archilas is aimed at memory that does not fabricate answers and that combines related facts correctly. The work continues, and the standard does not get relaxed for demos.",
      },
    ],
  },
  {
    slug: "persistent-memory-for-everyday-ai",
    title: "Persistent memory for the AI tools you already use",
    excerpt:
      "You should not have to pick one chat app forever to keep context. A memory agent should answer for your other agents. Delivery into Claude, ChatGPT, and Cursor is coming soon.",
    directAnswer:
      "Persistent AI memory should follow you across tools, not lock you into a single chat product. Archilas is a memory agent that remembers what matters and answers for your other agents. Delivery into Claude, ChatGPT, and Cursor through MCP is coming soon. Those integrations are not live.",
    datePublished: "2026-08-12",
    author: "Archilas",
    coverImage: "/blog/covers/everyday-ai.svg",
    coverAlt:
      "Illustration of multiple AI tool windows sharing one warm persistent memory ribbon",
    tags: ["product", "workflow", "MCP"],
    sections: [
      {
        type: "p",
        text: "People do not use one AI. They move between an IDE assistant, a long-form chat, a browser agent, and whatever shipped inside their company last quarter. Context should not reset at each doorway.",
      },
      { type: "h2", text: "The portability problem" },
      {
        type: "p",
        text: "Product-native memory is convenient until you switch tools. Then your preferences, project state, and decision history are trapped behind someone else’s retention policy and UI. That is a fragile foundation for serious work.",
      },
      { type: "h2", text: "A better shape" },
      {
        type: "p",
        text: "Keep memory as its own agent. Compact what matters. Reason over it where you need control. Connecting that agent to Claude, ChatGPT, Cursor, and MCP is coming soon — it is not available in those tools today. When a new client appears later, you connect the agent. You do not rebuild your history.",
      },
      {
        type: "p",
        text: "That is the Archilas bet: a memory agent that reasons over your history and stays grounded. It does not yet meet you inside Claude, ChatGPT, or Cursor. Those integrations, including MCP, are coming soon.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}
