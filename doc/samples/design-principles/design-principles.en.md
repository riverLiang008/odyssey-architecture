# Odyssey’s Design Principles

> These four principles are not a feature list. They are the criteria Odyssey repeatedly uses when designing a Human-AI Collaboration System.

*Why Odyssey?* asks one central question: when an AI Agent capability persists across multiple rounds of work, how can people continue to understand, shape, and maintain it?

Odyssey currently answers through four principles.

## 1. Make System Structure Visible and Editable

In a complex Agent system, collaboration relationships, control flow, resource access, and autonomy boundaries should not all remain hidden inside Prompts, forms, or model behavior.

Odyssey uses the Journey Canvas and Agent Workflow Canvas to let people examine system collaboration separately from the internal work of one Agent, then change those structures through nodes, relationships, colors, and configuration.

What becomes visible is the **designed structure**, not the model’s complete private reasoning. This separation adds navigation cost, but Odyssey accepts that cost to avoid forcing different design scales back onto one infinite Canvas.

## 2. Give Autonomy Explicit Boundaries

Odyssey does not require a choice between a traditional Workflow and a fully autonomous Agent. The real question is: which decisions should people determine in advance, and which judgments should belong to an Agent?

Thinking Ownership uses green, yellow, and red or pink to distinguish User-managed, Shared, and Agent-managed responsibilities; System state uses neutral gray. This color language can appear across spatial regions, nodes, Variable groups, and resource permissions. It does not require the interface to remain divided into three fixed areas.

An Agent may choose how to act within the Goal, Knowledge Spaces, Toolbox, and state permissions it has been given, but it may not rewrite the system boundary itself. The cost is that users must understand the difference between “executed automatically” and “decided by an Agent.”

## 3. Define Relationships Before Roles

Names such as Planner, Researcher, or Reviewer can describe responsibilities, but they should not directly define the system topology.

Odyssey first uses a Pattern to define stable Agent Slots, connections, and information flow. A configured Agent’s Goal, Workflow, and resources then form its role. The same relationship structure can support collaboration in different domains.

This does not mean arbitrary free-form connections. Each current built-in Pattern preserves its own topology constraints. That makes the structure easier to understand and communicate, but it also means some complex forms of collaboration cannot yet be expressed directly.

## 4. Let Knowledge and Configuration Persist Together

If every round of work requires people to redefine the collaboration structure, Workflow, Tools, state boundaries, and source context, the system still depends primarily on the current Prompt.

Odyssey uses an OdyJourney to preserve an editable capability configuration, and a Knowledge Space to preserve a knowledge environment that can be organized, referenced, and maintained. Configuration answers “how is this capability organized?” Knowledge answers “what environment does it depend on to understand its work?”

Persistence does not mean that an Agent must remain continuously active, or that every runtime state is retained. It means that structure, resource references, and knowledge can continue to be inspected and revised across multiple rounds of work. The cost is that the system must address references, updates, conflicts, and asset lifecycles seriously.

## What the Four Principles Answer Together

| Question | Principle |
| --- | --- |
| How can people understand and change a complex system? | Visible and editable system structure |
| Who owns each decision? | Bounded Autonomy |
| How do multiple Agents collaborate? | Relationships before roles |
| How does a capability continue across multiple rounds of work? | Knowledge and configuration persist together |

These principles describe Odyssey’s current design direction. They are not universal rules proven by a production system. Odyssey is a Human-AI Collaboration System Prototype, and there is currently no plan to develop an execution kernel.

The detailed designs, boundaries, and trade-offs are explored in *Why Two Canvas Levels?*, *Why Relationships Before Roles?*, *Why Bounded Autonomy?*, and *Why Knowledge Space Is More Than RAG*.

## Design Sources

- First-release principle scope: `doc/planning/odyssey-documentation-redesign-backlog.md`;
- First-release positioning: `doc/samples/why-odyssey/why-odyssey.en.md`;
- First-release public terminology: `doc/foundations/first-release-terminology.md`;
- The four reviewed key-design-decision chapters.
