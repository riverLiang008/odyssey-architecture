# Odyssey Architecture Documentation Redesign Proposal

> Status: Revised proposal for review  
> Date: 2026-09-12  
> Scope: `odyssey-architecture` documentation positioning, narrative structure, content migration, and future video reuse  
> This document proposes changes only. It does not modify the existing documentation structure or content.

## 1. Executive Summary

The next version of the Odyssey architecture documentation should not be positioned as a product manual, an exhaustive technical specification, or another concept encyclopedia.

It should become a public, visual design argument for a more fundamental question:

> When AI agents evolve from short-lived assistants into long-running systems for complex knowledge work, how should people understand, organize, constrain, and reshape them?

Odyssey's interface, domain model, and implementation should be used as evidence for this argument. They should not become the center of the narrative.

The recommended long-term form is:

> One main narrative, a collection of focused design decisions, one end-to-end example, and an honest evolution record.

The first release should deliberately remain much smaller. Its goal is not to establish a complete documentation library. Its goal is to prove that one short design story can be read from beginning to end by someone encountering Odyssey for the first time.

The first-release narrative should be:

```text
The problem
→ Design principles
→ One minimal, credible Research Assistant case
→ Four key design decisions
→ Design evolution
→ Current state and limitations
```

Detailed chapters about Agent, Tool, Loop, Guardrail, DSL, formal Pattern theory, and implementation architecture belong to a future content map. They should enter public navigation only after the main narrative has proven coherent.

The recommended first deliverable is one illustrated sample chapter:

> Why Two Levels of Canvas?

This chapter will test the writing style, historical design evidence, current Figma annotation, explicit trade-offs, and implementation-status labeling before the entire site is rewritten.

The broader structure still supports both intended uses:

1. Embedded documentation for people who discover Odyssey and want to understand why it was designed this way.
2. A reusable narrative and visual source for future YouTube videos produced with SSTM AD, with the emphasis on design thinking rather than product maturity.

## 2. Documentation Positioning

### 2.1 Proposed identity

Recommended English subtitle:

> Odyssey — Designing Visible, Composable AI Agent Systems

Equivalent Chinese positioning:

> Odyssey：如何设计一套可见、可组合、可长期演化的 AI Agent 系统

Here, visible does not mean that a model's private internal reasoning becomes fully observable. It means that the designed structure around agent reasoning becomes visible and editable:

- system topology;
- control flow and information flow;
- resource access;
- autonomy boundaries;
- explicit decision positions;
- persistent configuration and knowledge relationships.

The canonical public statement should be:

> Odyssey does not make a model's private reasoning fully visible. It makes the designed structure around that reasoning visible and editable.

### 2.2 What the documentation should explain

The documentation should primarily answer:

- Why is a chat interface insufficient for long-term agent systems?
- What concretely persists when research continues through repeated collection, revision, and review?
- What system structure can a Canvas expose, and what private model reasoning remains invisible?
- Why should parts of an agent's reasoning structure be visible?
- Why does Odyssey separate system topology, agent collaboration, and internal workflow?
- Why are agent relationships modeled as Patterns instead of fixed roles?
- Why does an Agent own a Workflow, while an Agent Action is only one node inside that Workflow?
- Why are Tools resources rather than an ever-growing collection of workflow node types?
- Why is a Knowledge Space more than a document store or RAG index?
- Why does the interface use multiple levels of spatial navigation and progressive disclosure?
- What trade-offs and limitations follow from these decisions?

### 2.3 What the documentation should not become

The public design documentation should not become:

- a duplicated copy of implementation specifications in the main Odyssey repository;
- an API, schema, or database reference;
- a claim that Odyssey is already a mature production platform;
- a catalog of every Figma frame;
- a catalog of every domain object before a coherent story exists;
- a website shaped like a video storyboard;
- a list of features without the reasoning behind them;
- an undifferentiated mixture of current behavior, future vision, and abandoned ideas.

Detailed engineering contracts should remain in the Odyssey repository and be linked from the public documentation when necessary.

## 3. Audience and Information Layers

The documentation has two main audiences:

1. Product, design, and AI-system readers who want to understand the design argument.
2. Developers and contributors who need a reliable mental model before reading implementation documents.

To serve both audiences without mixing levels of detail, content should be organized into three information layers.

| Layer | Primary question | Recommended content |
| --- | --- | --- |
| Design thesis | Why is this design necessary? | Problems, observations, principles, trade-offs |
| Product expression | How are the principles expressed? | Figma screens, interaction models, entity relationships |
| Design context | Is this current, historical, exploratory, or deferred? | Source links, version context, unresolved design questions |

Each page should make its layer clear. A reader should never need to infer whether a statement describes a design principle, the current design, a historical design, or a future direction.

## 4. Valuable Ideas in the Existing Documentation

The original documentation already contains several strong ideas. They should be preserved and made more central.

### 4.1 Long-term knowledge work is not a collection of short tasks

Research, product development, investing, legal work, and creative work evolve over months or years. Their central problem is not merely task completion. It is the accumulation and revision of understanding, strategies, decisions, and evidence.

This provides the strongest motivation for Odyssey.

The word long-term should be grounded in observable continuity rather than an abstract promise that an Agent will run forever. In the first-release Research Assistant case, persistence should mean that:

- the Journey configuration still exists after one research cycle;
- the Agent Workflow can be reused or revised;
- the Knowledge Space retains sources and relationships;
- later work can review earlier evidence and decisions;
- a new cycle does not begin from an empty prompt.

### 4.2 Canvas as externalized system structure

The Canvas is not valuable merely because it provides low-code workflow editing. It externalizes designed structure that would otherwise remain scattered across prompts, forms, configuration files, or hidden orchestration.

It lets people inspect:

- where explicit decisions are placed;
- how information is expected to move;
- where autonomy begins and ends;
- which resources, assumptions, and constraints shape the system;
- how a local change affects the whole.

It does not expose a complete Chain of Thought or guarantee access to every internal model judgment.

### 4.3 Design understandability is not runtime transparency

A visible structure provides a representation that humans and models can both inspect, generate, discuss, and revise. The documentation should distinguish four ideas:

| Idea | Meaning | Odyssey's current emphasis |
| --- | --- | --- |
| Design understandability | Why the system was configured this way | Core design goal |
| Structural inspectability | What can act, decide, access, or route | Core design goal |
| Runtime traceability | What happened during one execution | Future execution and observability work |
| Model internal reasoning | The model's complete private reasoning process | Not promised |

This distinction should replace broad claims that reasoning itself is visible.

### 4.4 Patterns describe relationships rather than fixed roles

Manager Agent, Worker Agent, Planner Agent, and Reviewer Agent are not necessarily fundamental agent types. Many such roles emerge from an agent's position in a collaboration topology.

Odyssey's Pattern concept captures:

- collaboration structure;
- information flow;
- execution dependency;
- communication topology.

This remains one of the most distinctive ideas in the project.

### 4.5 Knowledge Space as a reasoning environment

A Knowledge Space is not only a folder tree, a vector index, or a set of retrieved fragments. It is intended to provide an explicit, navigable knowledge environment that supports long-term reasoning and maintenance.

These five ideas should form the intellectual backbone of the new documentation.

## 5. Problems in the Existing Documentation

### 5.1 Vision, current product, runtime design, and future plans are mixed

Some pages argue for a design principle, then move directly into backend responsibilities or future runtime behavior. Readers cannot reliably distinguish:

- the enduring idea;
- the current product decision;
- an implementation detail;
- an unimplemented proposal.

### 5.2 The canonical product model has changed

The early documentation uses `System` as the highest-level public abstraction. The current product model uses `OdyJourney` for a persistent, complete capability.

The current mental model is closer to:

```text
OdyJourney
├── Input Guardrail (optional, fixed Single Agent structure)
├── Execution (Pattern selected when the Journey is created)
├── Output Guardrail (optional, fixed Single Agent structure)
└── Execution Behavior (future capability)

Agent
└── Workflow
    ├── Agent Action
    ├── Task
    ├── Branch
    └── Loop
```

The new documentation should explain this hierarchy consistently.

### 5.3 Early interaction ideas are presented as if they were still literal UI

The Green, Yellow, and Red Thinking Ownership semantics remain part of the current design. What changed is their spatial form: ownership is now expressed through colored nodes and variable groups, labels, resource permissions, and Flow/Configure modes rather than only through three permanent large regions.

Thinking Ownership should remain a design principle and a current color language, not a claim that every final interface must be divided into three fixed large zones.

### 5.4 The Pattern chapter is too formal for the main narrative

The formal graph definition and structural equivalence discussion may be useful, but they appear before the reader has fully understood the design problem.

The main Pattern chapter should begin with concrete questions:

- Why not define Main Agent and Sub Agent as permanent types?
- When is a leader a node type, and when is it merely a graph position?
- Why should an Agent Workflow remain reusable under different collaboration structures?
- Why is the Pattern selected at Journey creation in V1?

Formal definitions should move to an appendix.

### 5.5 Placeholder pages reduce credibility

Several architecture, benchmark, example, and evolution pages contain only headings. Public navigation should not expose unfinished placeholders. A smaller but complete documentation site is preferable to a broad empty hierarchy.

### 5.6 Comparisons can become stale

Direct comparisons with Dify, Coze, Claude Code, Amazon Bedrock, or other platforms can quickly become inaccurate as those products evolve.

Future comparison pages should:

- state the observation date;
- compare design approaches rather than feature checklists;
- distinguish product evidence from inference;
- avoid making the main Odyssey argument dependent on competitors remaining unchanged.

### 5.7 The previous proposal was too large for a first release

A complete model section, ten design essays, several interaction chapters, a walkthrough, evolution pages, status pages, and appendices would recreate the risk of uneven completeness.

The revised plan therefore separates:

- a six-part first-release narrative;
- one sample chapter used to validate the method;
- a long-term content map that is not yet a public-navigation commitment.

## 6. First-Release Documentation Architecture

The first release should contain only six public parts:

1. The Problem.
2. Design Principles.
3. One minimal Research Assistant walkthrough.
4. Four Key Design Decisions.
5. One focused Design Evolution story.
6. Current State and Limitations.

The detailed subsections later in this chapter describe the long-term subject matter. They are not all first-release pages. Concepts should initially be introduced through the walkthrough and the four decisions; standalone chapters should be promoted only when readers genuinely need them.

## 6.1 Home — The Design Thesis

The home page should do only three things:

1. Present the problem.
2. State the design thesis.
3. Introduce the complete mental model with one visual.

Recommended progression:

```text
Prompt / Chat
    ↓
Single Agent
    ↓
Agent Workflow
    ↓
Multi-Agent Pattern
    ↓
Persistent Knowledge Environment
```

Suggested thesis:

> Odyssey explores how humans can understand and shape long-running AI agent systems by making their structure, autonomy, collaboration, and knowledge environment visible.

The home page should not begin with database schemas, DSL syntax, node catalogs, or a feature matrix.

## 6.2 Part I — The Problem

This section should replace the current broad Introduction with a more focused argument.

Recommended questions:

- What changes when an AI system exists for months rather than minutes?
- Why is long-term knowledge work different from a queue of tasks?
- Why can hidden autonomous planning become difficult to inspect and reshape?
- Why do current workflow builders often collapse into forms, parameters, and technical configuration?
- What does a person need to understand about a persistent agent system?
- Why is Odyssey best presented as a design exploration rather than a mature platform claim?

Recommended central statement:

> We are not designing a better task runner. We are exploring how humans can understand and shape long-running AI systems.

Direct competitor comparisons should be shortened here and moved into dated design-reference notes.

## 6.3 Part II — Design Principles

### Principle 1: Visible and editable system structure

Complex agent systems need external representations that reveal designed decision positions, information flow, resource access, autonomy boundaries, and iteration.

The Canvas exists to support understanding and modification, not merely visual programming. It does not claim to reveal a model's complete private reasoning.

### Principle 2: Bounded autonomy

The key design problem is not choosing between manual workflow and autonomous Agent. It is making ownership of reasoning explicit.

Reasoning may be:

- user-owned through deterministic structure;
- shared through explicit context and variable boundaries;
- agent-owned through autonomous reasoning and tool selection.

Thinking Ownership should be explained as a continuous semantic and color model expressed across spatial regions, nodes, variable groups, and permissions.

### Principle 3: Relationships before roles

An Agent's role often emerges from where it sits in a Pattern, what it receives, and where it sends its result. The system should avoid turning every collaboration position into a permanent Agent type.

### Principle 4: Stable outer structure, flexible inner behavior

Odyssey separates three levels:

| Level | Responsibility |
| --- | --- |
| OdyJourney | Defines one complete persistent capability and its system boundaries |
| Pattern | Defines how Journey Agents cooperate |
| Agent Workflow | Defines how one Agent reasons and acts internally |

The outer structure remains understandable while internal behavior can evolve.

### Principle 5: Knowledge is part of the system

Knowledge should not be treated only as temporary context retrieved for one model call. Long-running agents require persistent knowledge structures that can be inspected, maintained, and revised.

## 6.4 Part III — The Odyssey Model

### Chapter 1: OdyJourney

Explain an OdyJourney as the persistent configuration of one complete capability.

Explicitly distinguish:

- OdyJourney from one runtime execution;
- a domain object from its Canvas presentation;
- an instance from the Template that created it;
- durable configuration from temporary editor state.

### Chapter 2: Pattern

Explain Patterns through cooperation structures and design consequences.

The current built-in set should be presented as:

- Solo Component;
- Linear Sequence;
- Hub and Spoke;
- Circular Loop.

For every Pattern, explain:

- the topology;
- the direction of information flow;
- the kind of work it supports;
- the trade-off it introduces;
- the operations it allows on Slots;
- why the topology is not simply a collection of named Agent roles.

The V1 rule should be explicit: a Pattern is selected when the OdyJourney is created and cannot be replaced afterward. Slot operations remain governed by the selected Pattern strategy.

The persisted compatibility key `diamond_loop` should not appear as the primary public name. Public documentation should use Circular Loop.

### Chapter 3: Agent

This chapter must resolve the most important terminology distinction:

```text
Agent
└── owns one Workflow

Agent Action
└── is one reasoning node inside that Workflow
```

An Agent is a complete collaboration unit inside an OdyJourney. Its Pattern position determines its relationship to other Agents. Its Workflow determines how it performs its responsibility.

### Chapter 4: Workflow

Explain why Odyssey intentionally keeps the node model small:

| Node | Reasoning responsibility |
| --- | --- |
| Agent Action | Open-ended LLM reasoning and dynamic resource use |
| Task | Deterministic ordered Tool execution |
| Branch | Explicit conditional routing |
| Loop | Structured iteration with visible boundaries |

The central design decision is that the root Workflow remains a DAG. Iteration is represented through an explicit compound Loop rather than arbitrary graph cycles. This supports analysis, validation, visual understanding, and future AI generation.

The current rule should be reflected: a Loop may contain Agent Action, Task, and Branch nodes, but nested Loops remain out of V1 scope.

### Chapter 5: Tool

Explain why capabilities are resources rather than unlimited workflow node categories.

The chapter should distinguish conceptually:

- Tool Definition;
- configured Tool;
- Agent-level reusable Tool;
- ordered Tool Instance inside a Task.

The main design message is more important than unstable storage details:

> Workflow nodes describe reasoning and control semantics. Tools describe executable capabilities.

### Chapter 6: Knowledge Space

Use the current Coffee Knowledge Base design as the canonical example.

Explain the coexistence of two structures:

| Structure | Owner and purpose |
| --- | --- |
| Folder tree | User-maintained organization and file operations |
| Knowledge graph | System-maintained semantic relationships for navigation and reasoning |

Explain:

- Knowledge Space as an independent Workspace asset;
- Knowledge Families as semantic graph regions;
- documents as graph nodes;
- references as directed relations;
- Tags, Summary, Guide, and References as human-reviewable metadata;
- indexing and issue information as system-owned state;
- Document Curator and Knowledge Steward as ordinary reusable OdyJourneys rather than privileged backend entity types.

## 6.5 Part IV — Interaction Architecture

### Chapter 1: A Journey is a persistent capability

Use the Journey List to establish that users are managing durable systems, not a history of conversations.

### Chapter 2: Two levels of Canvas

This should be a central chapter.

```text
Journey Editor
└── Shows how Agents cooperate in the complete system

Agent Workflow Editor
└── Shows how one Agent reasons and acts internally
```

Explain the Agent Slot progression:

```text
Select Agent Slot
    ↓
Read-only workflow preview
    ↓
Open full Agent Workflow Canvas
```

This interaction balances global orientation with local detail. It prevents one unlimited graph from carrying every abstraction level at once.

### Chapter 3: Flow and Configure

Explain the separation between:

- Flow mode for topology, routing, and execution comprehension;
- Configure mode for Model, Goal, Knowledge Space, Toolbox, variables, and other resource bindings;
- Focus Mode for editing complex local structures without losing the ability to return to the owning Journey.

### Chapter 4: Stable system structure

Explain the responsibility of:

- Input Guardrail;
- Execution;
- Output Guardrail;
- Execution Behavior.

The current product position should be used:

- Execution uses the Pattern selected when the Journey is created.
- Input and Output Guardrails are optional modules.
- Enabling a Guardrail creates a fixed Single Agent structure rather than asking the user to select a Pattern.
- A Guardrail Agent reuses the normal Agent Workflow model and interaction.
- Execution Behavior is a future capability and should be labeled accordingly.

### Chapter 5: Pages, panels, previews, and temporary states

Use the Figma design to explain the hierarchy:

- pages represent durable navigation and object identity;
- side panels configure a selected object within its context;
- previews support orientation and progressive disclosure;
- inspector overlays support quick exploration without forcing navigation;
- a Figma frame may represent a UI state rather than a separate product page.

This chapter can demonstrate that information architecture is part of the product's cognitive model.

## 6.6 Part V — Design Decisions

The first release should publish only four focused design essays:

1. Why two levels of Canvas?
2. Why does Pattern describe relationships instead of roles?
3. Why must deterministic structure and Agent autonomy coexist?
4. Why is Knowledge Space more than RAG?

Additional essays remain in the long-term content map and should not be first-release commitments.

Use one standard structure for every essay:

```text
Problem
→ Tempting solution
→ Where it breaks
→ Odyssey decision
→ Trade-off
→ Current limitation
```

This format is suitable for careful web reading. Its core conflict may later be adapted into a short video, but the web page should not be written as a voice-over script.

## 6.7 Part VI — End-to-End Example

Replace multiple incomplete example pages with one minimal, credible walkthrough.

Working candidate:

> Research Assistant Journey

This is not yet a frozen canonical example. Before writing, its topology and steps must be verified against the current Figma design, domain model, seed data, and implemented application flow.

The example must not be expanded merely to demonstrate every Odyssey capability. Circular Loop, dual Guardrails, Reviewer Agent, Branch, Loop, and every Tool type should appear only if the verified scenario genuinely requires them.

Possible structure:

```text
OdyJourney
├── One verified built-in Pattern
├── Research Agent
│   └── Workflow
│       ├── Agent Action
│       └── Only necessary Task or Branch nodes
└── Research Knowledge Space
```

The walkthrough should demonstrate continuity across at least two research cycles, then enter only the levels required by the story:

1. Journey purpose and system boundary.
2. Pattern and Slot topology.
3. One Agent and its Workflow.
4. Agent Action, Task, Branch, and Loop semantics.
5. Tool and Knowledge Space bindings.
6. Knowledge navigation and review.
7. How the final result is checked or refined.

Anything outside the current design must be labeled `Exploration`, `Historical Design`, or `Deferred`.

One restrained example will establish a stronger mental model than several disconnected or feature-complete demonstrations.

## 6.8 Part VII — Design Context and Limits

The site should explain which ideas form the current design, which are historical evidence, which remain exploratory, and which have been deliberately deferred. It should not become an implementation-status report.

Recommended presentation:

| Current Design | Historical Design | Exploration / Deferred |
| --- | --- | --- |
| Journey, Agent, and Workflow model | Early Thinking Ownership regions | Unresolved future interaction directions |
| Two-level Canvas | Earlier single-surface assumptions | Research Assistant case (`Deferred`) |
| Structured Loop | Superseded interaction sketches | Future Tool-language exploration |

The exact table should be updated from Figma, dated historical material, and River's design decisions before publication.

The page should avoid ambiguous marketing terms such as available, supported, or complete unless the status has been verified.

## 6.9 Part VIII — Evolution and Trade-offs

This section should document how implementation and detailed interaction design changed the original ideas.

Recommended stories:

- Why `System` evolved into `OdyJourney`.
- How the same three-color Thinking Ownership design appears across spatial regions, nodes, variable groups, and resource permissions.
- Why Diamond Loop was corrected to Circular Loop.
- Why Pattern selection moved to Journey creation.
- Why Tools became resources rather than Canvas node types.
- Why Agent Slot selection needs a workflow preview before full navigation.
- Which Figma concepts exposed missing domain contracts.
- Which implementation constraints improved the interaction model.

This section is particularly valuable for design-oriented video content because it shows real reasoning rather than presenting a polished result without context.

## 6.10 Appendix

Move specialist material out of the main narrative:

- formal Pattern definition;
- structural equivalence under abstraction;
- canonical terminology;
- references to implementation contracts;
- dated platform design references;
- discarded or deferred alternatives;
- glossary.

## 7. Proposed Navigation

```text
Odyssey
├── Why Odyssey?
├── Design Principles
├── Research Assistant Walkthrough
├── Key Decisions
│   ├── Why Two Levels of Canvas?
│   ├── Why Relationships Before Roles?
│   ├── Why Bounded Autonomy?
│   └── Why Knowledge Space Is More Than RAG
├── From the First Sketch to the Current Design
└── Current State and Limitations
```

Navigation should expose only completed pages. Drafts and placeholders may remain in the repository but should not appear in the public sidebar. Detailed concept pages should not be added merely because a concept exists in the domain model.

### 7.1 Long-term content map

The broader model, interaction, and appendix structure described in Section 6 remains a long-term map rather than a first-release commitment. A topic should move into public navigation only when:

1. the main narrative creates a real reader need for it;
2. its terminology and product position are stable;
3. it can be completed to the same quality as the sample chapter;
4. it does not duplicate an authoritative engineering document.

### 7.2 First deliverable: Why Two Levels of Canvas?

Before rewriting the full site, produce one illustrated sample chapter.

Proposed structure:

```text
1. Why one Canvas becomes cognitively overloaded
2. The early hypothesis: spatializing Thinking Ownership
3. The abstraction conflict: Agent cooperation versus internal execution
4. The Odyssey decision: Journey Canvas and Agent Workflow Canvas
5. The transition: Agent Slot → Preview → Full Canvas
6. What the design makes understandable
7. What the design does not expose
8. Trade-offs and navigation cost
9. Current Figma and implementation status
10. Open questions
```

The chapter succeeds if a reader unfamiliar with Odyssey can explain why one unlimited Agent graph is insufficient, what belongs at each Canvas level, why the preview exists, what structure becomes visible, what private model reasoning remains invisible, and what navigation cost the design introduces.

## 8. Existing Content Migration Plan

| Existing content | Proposed action | Reason |
| --- | --- | --- |
| `introduction/introduction.md` | Rewrite into The Problem and Design Thesis | Strong ideas, but product comparison and future vision are mixed |
| `design-notes/001-why-spatial-ui.md` | Use as source material for the two-level Canvas sample | It directly expresses Odyssey's interaction-design motivation |
| `core-concepts/system.md` | Rewrite around OdyJourney and current system modules | `System` is no longer the best canonical public object name |
| `core-concepts/pattern.md` | Shorten the main chapter; move formal theory to Appendix | The current chapter introduces formalism before intuitive understanding |
| `core-concepts/workflow-canvas.md` | Rewrite around the two-level Canvas, node semantics, modes, and structured Loop | Current interaction and domain models have changed substantially |
| `core-concepts/knowledge-space.md` | Preserve the thesis; align with the current Knowledge Space specification | The conceptual direction remains valuable, but the user/system ownership model is now clearer |
| `core-concepts/canvas.md` | Merge into Interaction Architecture | Too broad to remain a useful standalone page |
| `core-concepts/pattern-slot.md` | Merge into Pattern | Slot is part of Pattern semantics rather than a peer concept |
| `core-concepts/component-ecosystem.md` | Move into Future and Community | Community distribution is not part of the present V1 experience |
| `core-concepts/tool.md` | Keep out of first-release navigation; rewrite after terminology is frozen | Current placeholder does not describe the actual design |
| `core-concepts/two-level-canvas.md` | Replace the placeholder with the sample chapter | This has become a key interaction decision in Figma and implementation |
| `core-concepts/execution-model.md` | Merge into Workflow and status pages | Avoid duplicating runtime claims that are not yet implemented |
| `architecture/level-*.md` | Remove from public navigation | Empty hierarchy reduces credibility and duplicates the new model structure |
| `benchmark/*.md` | Hide until rewritten as dated design references | Empty and likely to become stale as products evolve |
| `examples/*.md` | Replace with one verified minimal walkthrough | One restrained example is more credible than feature coverage |
| `evolution/index.md` | Begin with one focused evolution story | The first release should not attempt to catalog every design change |

## 9. Canonical Decisions to Freeze Before Rewriting

Several historical conflicts should be resolved explicitly before the new text is written.

### 9.1 Visible structure

Recommended decision:

- Use `visible and editable system structure` as the primary phrase.
- Explicitly deny that Odyssey exposes complete private model reasoning.
- Distinguish design understandability and structural inspectability from runtime traceability.

### 9.2 Thinking Ownership

Recommended decision:

- Preserve Thinking Ownership as a core design principle.
- Use it to explain the difference between Agent Action, Task, Branch, Loop, variables, and resource permissions.
- Preserve Green, Yellow, and Red/Pink as the current User-managed, Shared, and Agent-managed color semantics, while avoiding a claim that they must always form permanent large Canvas regions.
- Preserve the original regional design as evidence of design evolution.

### 9.3 Research Assistant case

Before writing, verify:

- the exact Journey used in current Figma and seed data;
- its actual Pattern and minimum Agent set;
- the Workflow nodes genuinely needed by the scenario;
- the Knowledge Space relationship;
- what persists across two research cycles;
- which steps are implemented and which are design-only.

Do not add capabilities solely to make the case appear comprehensive.

### 9.4 Guardrails

Recommended current position:

- Input and Output Guardrails are optional system modules.
- They do not expose Pattern selection.
- When enabled, each has a fixed Single Agent structure.
- The Guardrail Agent reuses the normal Agent Workflow model.
- Execution remains the Pattern-configured multi-Agent module.
- Keep Guardrails outside the first-release case unless the verified scenario genuinely requires them.

### 9.5 Pattern mutability

Recommended V1 position:

- The Pattern is selected during OdyJourney creation.
- It cannot be replaced afterward.
- Slot addition, removal, reordering, entry selection, and routing rules depend on the Pattern strategy.
- A future custom Pattern system should be described as future work, not current capability.

### 9.6 Agent Action inside Loop

The early domain draft prohibits Agent Action inside Loop, while current Figma and later implementation plans allow it.

Recommended current rule:

- Loop may contain Agent Action, Task, and Branch.
- Nested Loop is not supported in V1.

### 9.7 Reusable Tool scope

Early documents disagree about whether reusable configured Tools are Workspace-level or Agent Workflow-level.

Recommended documentation approach:

- Explain the stable design distinction between capability definitions, configured reusable capabilities, and Task-owned instances.
- Avoid promising a storage or ownership scope until the authoritative domain contract is frozen.
- Link to a technical contract only when it helps explain a design boundary.

### 9.8 Design-context labels

Use a controlled vocabulary only when content is not self-evidently the current design:

- `Current Design`
- `Exploration`
- `Historical Design`
- `Deferred`

Do not use a historical or exploratory screenshot as evidence of the current design. Development completion is outside this documentation's organizing scope.

## 10. Writing Guidelines

### 10.1 Lead with the question, not the object

Avoid opening a chapter with:

> A Pattern is...

Prefer:

> Multi-agent products often encode Planner, Manager, and Worker as permanent Agent types. What happens when the same Agent must occupy different collaboration positions?

The concept should appear as the answer to a recognizable design problem.

### 10.2 Separate fact from interpretation

Use explicit labels where helpful:

- Design principle
- Current product decision
- Current implementation
- Trade-off
- Future direction

### 10.3 Prefer one visual argument per section

Each important section should have a visual that makes one relationship easier to understand:

- a hierarchy for OdyJourney → Agent → Workflow;
- a comparison for Agent versus Agent Action;
- a topology diagram for Patterns;
- a two-level navigation diagram for the Canvases;
- a split view for folder tree versus knowledge graph;
- a timeline for design evolution.

Avoid decorative screenshots without annotations or a specific argument.

### 10.4 Explain trade-offs

Every major decision should state what it makes easier and what it restricts.

Examples:

- Fixed built-in Patterns improve comprehensibility but limit free-form topology.
- A DAG with explicit Loop improves analyzability but prohibits arbitrary cycles.
- Two Canvas levels preserve mental models but require navigation between abstraction levels.
- Explicit knowledge metadata improves inspectability but introduces stewardship work.

### 10.5 Avoid premature universality

The documentation should say:

> Odyssey explores one design approach.

It should avoid saying:

> All future AI systems must use this architecture.

The credibility of the design argument comes from clear reasoning and acknowledged constraints.

### 10.6 Use implementation as evidence, not as the narrative

Implementation details are valuable when they reveal a design boundary. For example:

- separating Canvas presentation state from domain state validates that Canvas is a view, not the object itself;
- typed drag-and-drop boundaries validate that a gesture must become a domain intent;
- deriving Pattern layout from topology validates that geometry is not business state.

These ideas can appear in evolution or technical notes without turning the main site into an engineering guide.

## 11. Standard Page Template

Recommended template for a concept page:

```md
# Concept Name

## The problem
What user or system-design problem makes this concept necessary?

## The tempting alternative
What simpler or conventional design might be chosen first?

## Where it breaks
Why is the alternative insufficient for Odyssey's target scenario?

## The Odyssey decision
What did Odyssey choose, and how does it work conceptually?

## How the interface expresses it
Which Figma interaction makes the concept visible?

## Trade-offs
What becomes easier, and what becomes constrained?

## Current status
Is this implemented, in development, designed, exploratory, or deferred?

## Related decisions
Where should the reader continue?
```

Recommended template for an evolution page:

```md
# Decision or Concept Evolution

## Initial hypothesis
## What the early design looked like
## What Figma exploration revealed
## What implementation revealed
## Current decision
## Remaining uncertainty
```

## 12. Visual Asset Plan

Historical diagrams, simplified conceptual diagrams, and current Figma screens serve different purposes. They should not replace one another indiscriminately.

| What must be explained | Best visual source |
| --- | --- |
| Why two Canvas levels, Patterns, or Knowledge Space are needed | Newly drawn simplified concept diagram |
| How a decision appears in Odyssey | Cropped and annotated current Figma design |
| What changed and why | Historical design and current Figma shown together |

### 12.1 Use current Figma screens as product evidence

Use selected, cropped, and annotated frames rather than full-page screenshots without guidance. Recommended evidence includes:

- Journey List: durable capability rather than conversation history.
- Journey Editor: stable system structure and Pattern-level collaboration.
- Agent workflow preview: progressive disclosure between abstraction levels.
- Agent Workflow Editor: Flow/Configure and bounded reasoning semantics.
- Knowledge Space graph overview: folder structure versus semantic graph.
- Document Detail: human-reviewable metadata versus system-owned indexing state.

### 12.2 Create explanatory diagrams separately

Figma screenshots show the product expression, but they should not carry every conceptual explanation. Create simplified diagrams for:

- the complete Odyssey hierarchy;
- the relationship between Pattern and Agent Workflow;
- Thinking Ownership;
- Pattern topology comparison;
- structured Loop semantics;
- Knowledge Space navigation;
- design evolution.

### 12.3 Preserve historical design as evidence

Do not automatically replace old Feishu or early-design diagrams with current Figma screenshots. Preserve historical visuals when they reveal an initial hypothesis, a discovered problem, and the reason for a later decision.

The highest-priority comparison is:

```text
Three-color Thinking Ownership principle
across
spatial regions, nodes, variable groups, resource boundaries, and Flow/Configure modes
```

This comparison should show that a design principle can survive even when its first visual expression changes.

### 12.4 Visual annotation rules

- Highlight only the element discussed in the section.
- Dim unrelated UI when explaining one decision.
- Use consistent color meanings across documentation and video.
- Do not rely on color alone for topology, state, or ownership.
- Prefer short callouts over screenshots filled with explanatory text.
- Clearly mark historical, current, and exploratory designs.

## 13. YouTube Reuse Strategy

Documentation and video should share source arguments and visual assets, but they should not share the same finished structure. The website must support careful, non-linear reading; a video should select one or two decisions and build a paced visual argument around them.

This section is a production appendix. It should not determine the website's public navigation.

For every mature design decision, prepare:

- one-sentence thesis;
- one conceptual diagram;
- one Figma interaction clip or sequence;
- one rejected or earlier design;
- one explicit trade-off;
- one statement of current project status.

The website keeps the complete reasoning, annotations, alternatives, status, and references. A video extracts only the conflict and decisions that benefit from motion and narration.

Odyssey, SSTM, and AD may become parallel public series, but Odyssey documentation must remain independently understandable to a first-time reader.

### 13.1 Main video

Suggested title:

> Why We Designed Odyssey: Making AI Agent Systems Visible

Suggested length: 8–12 minutes.

Suggested structure:

1. The limits of chat for long-running systems.
2. Externalized cognition and visible structure.
3. OdyJourney, Pattern, and Agent Workflow.
4. Two-level Canvas navigation.
5. Knowledge Space as an evolving reasoning environment.
6. Trade-offs and what is not implemented yet.

### 13.2 Short design breakdowns

Each Design Decision article can become a 3–6 minute video:

- Why Agent roles should emerge from topology.
- Why an Agent and an Agent Action are different.
- Why an AI workflow still needs explicit structure.
- Why arbitrary graph loops are difficult to reason about.
- Why a knowledge graph and folder tree solve different problems.

### 13.3 Design evolution videos

Evolution content can show:

```text
Initial document
→ Figma exploration
→ Domain model
→ Implementation constraint
→ Revised design
```

This format is especially appropriate for Odyssey because the value lies in the reasoning process, not in presenting a finished commercial product.

## 14. Recommended Implementation Phases

### Phase 1 — Freeze the minimum credible case

Before rewriting pages:

1. Verify the current Research Assistant or Research System design in Figma.
2. Verify the matching domain model, seed data, and implemented flow.
3. Define what persists across two research cycles.
4. Remove every capability included only for feature coverage.
5. Label all remaining steps by implementation status.

Deliverable: one canonical case brief.

### Phase 2 — Produce the two-level Canvas sample chapter

1. Collect the relevant early diagrams.
2. Select and crop current Figma evidence.
3. Draw one simplified abstraction-level diagram.
4. Write the chapter using the design-decision structure.
5. State what the Canvas reveals and what it does not.
6. Include trade-offs and verified current status.

Deliverable: one complete illustrated sample chapter.

### Phase 3 — Review the method

Evaluate:

- Can a first-time reader understand the problem?
- Is every claim precise and supportable?
- Do historical diagrams, concept diagrams, and Figma evidence perform distinct roles?
- Does the page explain a real trade-off?
- Does it remain useful without video narration?
- Can its core conflict later be adapted into a short video?

Deliverable: an approved writing and visual standard, or a revised sample.

### Phase 4 — Complete the first-release narrative

Write only:

1. Why Odyssey?
2. Design Principles.
3. Research Assistant Walkthrough.
4. Four Key Design Decisions.
5. One focused Design Evolution page.
6. Current State and Limitations.

Deliverable: a small but complete public design story.

### Phase 5 — Migrate and simplify the site

1. Replace or redirect relevant old pages.
2. Remove placeholder pages from navigation.
3. Move formal and unstable material out of the main narrative.
4. Add authoritative links to the Odyssey repository.
5. Verify every status claim again.

Deliverable: a coherent embedded documentation site.

### Phase 6 — Expand only from demonstrated reader needs

Choose future concept chapters and design essays from the long-term content map. Do not expand the site merely to fill categories.

### Phase 7 — Select video topics from mature pages

Extract video material only after the corresponding design argument and visual evidence are stable.

## 15. Review Checklist

The proposal is ready to move into the sample chapter only after the following questions have clear answers:

- Is `visible and editable system structure` the accepted public phrase?
- Does the documentation explicitly avoid claiming access to private model reasoning?
- What exactly persists across repeated Research Assistant work?
- Which current Research Assistant design is the canonical case?
- What Pattern and minimum Agent set does the verified case use?
- Which case ideas belong to the current design, exploration, historical design, or deferred scope?
- Is the public top-level term `OdyJourney`, with `System` used only as a general description?
- Are the four first-release design principles accurate?
- Is Thinking Ownership conceptual rather than a literal three-region layout?
- Are Guardrails optional fixed Single Agent modules?
- Is Pattern immutable after Journey creation in V1?
- May Agent Action appear inside Loop while nested Loop remains prohibited?
- What public terminology should be used for configured and reusable Tools?
- Which example should become the canonical walkthrough?
- Which Figma pages or nodes represent the current design?
- Which historical diagrams best demonstrate design evolution?
- Should the site be English-first, Chinese-first, or bilingual?
- Will the documentation be embedded in Odyssey by build-time packaging, iframe, or external link?
- Which visual assets can be exported from Figma for public reuse?

## 16. Reference Sources

This proposal was derived from the following current sources:

- Original `odyssey-architecture` Introduction, System, Pattern, Workflow Canvas, Knowledge Space, and spatial UI design note.
- `odyssey/doc/product/information-architecture/odyssey-figma-information-architecture.md`.
- `odyssey/doc/architecture/domain/odyssey-domain-model-draft.md`.
- `odyssey/doc/architecture/domain/odyssey-v1-design-constraints.md`.
- `odyssey/doc/architecture/domain/diamond-loop-pattern-decision.md`.
- `odyssey/doc/architecture/execution/Canvas Execution Model.md`.
- `odyssey/doc/product/feature-specifications/knowledge-space/knowledge-space-specification.md`.
- Current Odyssey Figma design, including Journey List, Journey Editor, Agent Workflow Editor, Knowledge Space graph overview, and Document Detail.
- Review feedback recommending a narrower first release, more precise visibility claims, a verified minimal case, differentiated visual roles, and a sample-first process.

## 17. Final Recommendation

Approve the reframing of the documentation, but do not begin by rebuilding the entire site.

First freeze one credible Research Assistant case and produce one complete illustrated chapter: `Why Two Levels of Canvas?`

If that chapter can clearly explain the original problem, the design evolution, the current Figma interaction, the limits of visibility, and the cost of the decision, use the same standard to build the six-part first-release narrative.

The long-term documentation can still grow into a richer design library. Its first public version should prove something smaller and more important:

> Odyssey can explain one coherent approach to making the structure around persistent AI agents visible, editable, composable, and understandable without pretending that the product or the model itself is fully transparent.
