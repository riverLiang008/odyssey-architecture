# Why Odyssey?

> Odyssey does not explore how to make models complete more one-off tasks. It explores how people can understand, shape, and maintain an AI Agent capability that continues to evolve.

## One Successful Answer Is Not a Capability That Can Persist

Most AI interactions begin on a very short timescale: ask a question, provide some context, receive an answer, and finish the task.

This format already works well for one-off writing, summarization, and information requests. A user can put the goal, source material, and constraints into a Prompt, then add requirements throughout the conversation. The system does not need a stable structure as long as the current answer is good enough.

The problem changes when the same work continues through multiple rounds of gathering, judgment, revision, and review.

A new round must know more than “what should be answered this time?” It must also know which collaboration structure was previously chosen; which steps must remain fixed and which judgments may be assigned to an Agent; which Tools and knowledge it may use; which state is maintained by people and which state the Agent may update; how existing material relates; and where someone should continue editing the capability when it is opened again.

If all of this can persist only through an ever-growing conversation history, or must be reassembled into a longer Prompt each time, the system has continuity of context but not continuity of design.

Odyssey begins here.

## “Long-Running” Does Not Mean an Agent Runs Forever

A long-running Agent system is easily imagined as an always-on, unattended Agent that plans everything for itself. Odyssey does not define “long-running” through that promise.

Here, long-running first means a set of observable continuities:

- the structure of a complete capability can be saved, reopened, and changed;
- Agent collaboration positions and internal Workflows can be reused in the next round or redesigned by a person;
- Tools, Variables, knowledge, and permission boundaries do not need to be explained again in natural language every time;
- documents and knowledge relationships can accumulate, change, and undergo review as new material arrives.

None of this requires the system to remain in continuous execution. An OdyJourney may not be running at all and still exist as a capability that can be edited over time.

Odyssey therefore does not ask how many hours an Agent can keep working. It asks: **after many rounds of work, can a person still understand what this capability consists of, why it has this structure, and where to change it next?**

## A Longer Prompt Still Compresses Structure into Text

The most direct response is to put more information into the Prompt: goals, roles, steps, Tool instructions, output formats, review rules, and historical context can all be written there.

This can give one model call richer context, but it also mixes several fundamentally different decisions into one body of text.

“Retrieve before writing” may be a fixed process. “Decide what to do when evidence is insufficient” may require open-ended judgment. “Who owns final review?” is a collaboration relationship. “Which sources may be read?” is a resource boundary. “Who maintains the current draft?” is a state responsibility. Each can be written as a sentence, but placing those sentences together does not automatically produce an inspectable system structure.

When structure exists only inside a Prompt, it becomes difficult to change one decision locally without affecting the rest, or to quickly confirm which capabilities an Agent actually has. Prompts remain important, but they should not carry the architecture of an entire Agent system by themselves.

## One Agent with Many Tools Is Not Necessarily a Clear System

Another common direction is to give one Agent enough Tools and knowledge, then let it plan how to reach the Goal.

This works well for work that cannot be fully enumerated in advance, and it reduces process configuration. As the task grows, however, important decisions become concentrated inside a process that is difficult to inspect. Why did the Agent choose this path? When should work pass to another responsibility? Which steps must repeat? Under what condition must the work stop? Is a Tool merely available, or has its use been fixed as part of the process?

Odyssey does not object to Agents making open-ended judgments. It questions whether the need for autonomy should also hand system relationships, control boundaries, and resource scope to a black-box promise that “the Agent will handle it.”

Autonomy should exist, but it needs a place.

## A Traditional Workflow Cannot Answer the Whole Problem Either

A Workflow gains clarity in another way: it draws steps, conditions, and ordering in advance. This is valuable for processes that can be enumerated.

AI Agent work, however, cannot always be decomposed into fixed steps. Research, judgment, comparison, and revision often require the next move to depend on the information currently available. If every possible judgment becomes a node in order to preserve visibility, the Workflow expands rapidly. If one large model node absorbs every uncertainty, the structure disappears inside that node again.

The choice is therefore not simply between a Workflow and an Agent.

The real questions are: **which decisions should people determine in advance, and which should be assigned to an Agent? Which relationships belong to collaboration among multiple Agents, and which controls belong inside one Agent? How can knowledge, capabilities, and state persist across many rounds of work?**

## Odyssey Makes the Capability Itself Continuously Editable

Odyssey uses an OdyJourney to represent a complete capability configuration that can be edited over time.

An OdyJourney is not one execution record or a conversation history. It organizes system-level structure, collaboration among Agents, and the Agent Workflow owned by each Agent. Each Agent Workflow then organizes deterministic Tasks, open-ended Agent Actions, Branches, Loops, and the knowledge, Tools, and Variables available to them.

```text
OdyJourney
├── System-level structure and collaboration Pattern
├── Agent Slots and configured Agents
│   └── Each Agent owns an Agent Workflow
├── Available Tools and state boundaries
└── A maintainable Knowledge Space
```

The point is not to add as many layers as possible. It is to give different questions different design positions. A person should not have to understand the whole system through one master Prompt or spread every kind of complexity across a single infinite Canvas.

When a capability is opened again, a reader should be able to understand its overall collaboration structure first, then enter one Agent to inspect its internal Workflow. They should be able to distinguish deterministic control from open-ended judgment, and see which knowledge an Agent may rely on, which actions it may take, and which state it may maintain.

Odyssey tries to make these design decisions into objects that can be discussed, inspected, and changed.

## Four Key Decisions Grow from the Same Problem

Odyssey’s four current key design decisions are not four unrelated feature sets.

**Two Canvas levels** separate two design scales. The Journey Canvas explains how multiple Agents form a system; the Agent Workflow Canvas explains how one Agent does its work. System topology and local control flow no longer compete for the same nodes and connections.

**Relationships before roles** allows a Pattern to define stable collaboration positions and information flow before a configured Agent’s Goal, Workflow, and resources form its role. The system does not need to turn Planner, Researcher, or Reviewer into permanent Agent types.

**Bounded Autonomy** places open-ended judgment inside explicit Agent Actions while preserving visible control structures such as Tasks, Branches, and Loops. An Agent can choose how to act within the Knowledge Spaces, Toolbox, and state permissions it has been given, but it cannot rewrite the boundaries of the whole system.

**Knowledge Space is more than RAG** allows knowledge to persist beyond one model call. Material can be retrieved into context, but it can also retain a human-facing file structure, machine-usable semantic relationships, and a maintenance lifecycle of its own.

Together, these decisions answer one question: when an AI Agent capability must be used repeatedly and designed further, how can people retain an understanding of its structure, responsibilities, actions, and knowledge?

## The Design Structure Is Visible, Not the Model’s Private Thought

Odyssey uses Canvases, nodes, colors, relationships, and resource configuration to place system structure in the interface. This visibility has a clear boundary.

It can show collaboration positions, control flow, information relationships, resource access, state responsibility, and where autonomy is allowed. It cannot guarantee visibility into all of a model’s runtime reasoning, and it does not expose a model’s private Chain of Thought.

What Odyssey tries to improve is design understandability. When people decide how to compose an Agent system, its critical architectural judgments should not all be buried in Prompts, configuration forms, or model behavior. Even if execution traces are introduced in the future, they would belong to runtime observability rather than being an automatic property of the Canvas.

## This Is a Human-AI Collaboration System Prototype

At this stage, Odyssey is best understood as a **Human-AI Collaboration System Prototype**. It explores how people can understand, configure, and constrain systems made of AI Agents; it does not attempt to prove that a production Agent platform is already executing real work.

What matters most in this Prototype is its design thinking, information architecture, and interaction logic. OdyJourney, Pattern, the two Canvas levels, Thinking Ownership, Agent Workflow, and Knowledge Space together form a system language that can be viewed, discussed, and revised. Their value does not depend on waiting for an execution engine to make the interfaces meaningful.

The Prototype proposes a design language that is still being tested: an OdyJourney preserves a complete capability; a Pattern expresses collaboration; two Canvas levels separate the system scale from the internal scale of an Agent; Thinking Ownership and Variable permissions express responsibility; Agent Actions and explicit control structures compose autonomy; and Knowledge Spaces support long-lived knowledge environments.

There is currently no plan to develop an execution kernel for Odyssey. These interfaces and domain models should therefore not be read as a promise of an unfinished runtime platform, or as evidence of production behavior around reliability, evaluation, cost, permissions, auditing, or error recovery. A production Agent platform must answer those questions, but they are outside what this Prototype currently attempts to validate.

Choosing not to target a mature execution platform does not make the design questions less valuable. It is the reason for publishing this documentation: to place the important questions, decisions, trade-offs, and unresolved areas together so that others can understand why this Human-AI Collaboration System is designed as it is—and judge whether those choices hold up.

## The Odyssey Design Thesis

Odyssey does not try to hide complexity, nor does it hand all complexity to an Agent.

It explores another path:

> Give people visible, editable structure through which they can understand and shape a long-lived AI Agent capability—how it collaborates, where it is autonomous, what it may use, and how the knowledge it depends on continues to evolve.

This is the thesis developed by every design chapter that follows.

## Design Sources

- First-release positioning and information architecture: `doc/planning/odyssey-architecture-documentation-redesign-proposal.md`;
- First-release public terminology: `doc/foundations/first-release-terminology.md`;
- Visibility language boundaries: `doc/foundations/visibility-language-guidelines.md`;
- Current product information architecture: `odyssey/doc/product/information-architecture/odyssey-figma-information-architecture.md`;
- Current domain constraints: `odyssey/doc/architecture/domain/odyssey-v1-design-constraints.md`;
- Related design decisions: *Why Two Canvas Levels?*, *Why Relationships Before Roles?*, *Why Bounded Autonomy?*, and *Why Knowledge Space Is More Than RAG*.
