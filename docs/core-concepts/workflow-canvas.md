# Workflow Canvas

## Motivation

As discussed in the Introduction, Odyssey intentionally adopts the workflow-based interaction model popularized by platforms such as Dify and Coze, rather than relying solely on hidden autonomous agents.

This decision is based on two core principles introduced earlier:

- **Externalized Cognition** — reasoning should be visible rather than hidden inside a single prompt.
- **Shared Mental Model** — both users and LLMs should collaborate within the same reasoning space.

However, after studying existing workflow builders, we identified two major limitations.

First, most platforms still configure LLMs through traditional form-based interfaces (e.g. *Role*, *Instruction*, *Prompt*). Although the execution is performed by an intelligent model, the configuration process remains largely static and declarative.

Second, LLM nodes are typically treated as a single function invocation. The workflow determines *when* an LLM is called, but the LLM has very limited autonomy regarding *how* to accomplish the task. In other words, reasoning is constrained to isolated prompt execution instead of being represented as a first-class component of the workflow.

Odyssey therefore redesigns the workflow canvas around a different question:

> **Instead of configuring individual LLM calls, how should humans configure an intelligent system that reasons, plans, and acts?**

This redesign introduces a new abstraction:

> **Thinking Ownership**

Rather than distinguishing nodes simply by their functionality, Odyssey distinguishes them by **who owns the reasoning process**.

![alt text](..\public\images\canvas-overview.png)

# Thinking Ownership

Thinking Ownership describes **who is responsible for reasoning before an action is executed**.

Traditional workflow systems implicitly assume that all reasoning belongs to the workflow designer. Every branch, condition, and execution order must be explicitly specified.

Conversely, autonomous agents assume that almost all reasoning belongs to the LLM.

Odyssey adopts a hybrid approach.

Reasoning can belong to:

- **User** — deterministic execution explicitly configured by the workflow.
- **Shared** — lightweight reasoning jointly performed by both the user and the LLM.
- **LLM** — autonomous planning and decision-making performed by the agent.

Thinking Ownership is therefore a first-class property of the workflow rather than an implementation detail.

This abstraction provides users with explicit control over the balance between determinism and autonomy.

---

# Canvas Regions

To make Thinking Ownership immediately visible, the Workflow Canvas is divided into three logical regions.

- **Green Region** — User-owned reasoning.
- **Yellow Region** — Shared reasoning.
- **Red Region** — LLM-owned reasoning.

The colors do **not** represent execution order.

Instead, they visualize **who is responsible for making decisions** at different stages of execution.

![alt text](..\public\images\canvas-regions.png)

### Green Region

The green region represents deterministic logic explicitly designed by the workflow author.

Typical examples include:

- Flow control
- Conditional branching
- Looping
- Variable assignment
- Fixed task execution

The LLM has no authority to modify the execution logic within this region.

### Yellow Region

The yellow region represents shared reasoning.

This region is intentionally lightweight.

LLMs may inspect workflow state and existing variables, but they are not allowed to perform arbitrary tool execution.

Typical examples include:

- Variable inspection
- State evaluation
- Lightweight reasoning
- Context selection

The purpose of this region is to bridge deterministic workflows and autonomous agents.

### Red Region

The red region represents autonomous reasoning performed by an Agent.

Within this region, the LLM owns the reasoning process.

It decides:

- which tools to use,
- in what order,
- how intermediate reasoning evolves,
- and when the task has been completed.

This is the primary execution space for intelligent agents.


# Node Taxonomy

Instead of introducing dozens of specialized node types, Odyssey intentionally keeps the canvas minimal.

The Workflow Canvas consists of only three conceptual categories.

## Logic Nodes

Logic nodes control workflow structure but perform no external actions.

Examples include:

- Branch
- Loop
- End

These nodes define execution flow rather than task execution.

---

## Action Nodes

Action nodes are responsible for performing work.

Odyssey currently defines two action types.

### Agent

An Agent performs autonomous reasoning.

It owns its planning process and dynamically selects tools according to its goal.

### Task

A Task represents deterministic execution.

Unlike an Agent, a Task does not perform autonomous planning.

Typical examples include:

- Calling a predefined LLM function
- Executing a fixed API
- Running a predefined workflow
- Invoking a script

Although both Agent and Task execute actions, they differ fundamentally in **Thinking Ownership**.

---

## Variables

Variables are treated as first-class objects within the Workflow Canvas rather than hidden runtime state.

Their ownership model follows the same philosophy as Thinking Ownership.

---

# Agent Node

Unlike existing workflow systems, an Agent is **not** configured through a collection of prompts and parameters.

Instead, every Agent consists of three conceptual components.

![alt text](..\public\images\agent-node.png)

## Goal

The objective that the Agent is expected to accomplish.

Goals describe **what** should be achieved rather than **how** it should be implemented.

---

## Knowledge Space

Knowledge Space provides the cognitive environment in which an Agent reasons.

As introduced in the previous chapter, it serves as the reasoning scaffold that constrains and organizes the Agent's thinking process.

Rather than retrieving isolated documents, the Agent reasons within an explicit knowledge graph.

---

## Toolbox

Toolbox defines how an Agent interacts with the external world.

Tools may include:

- API calls
- LLM calls
- Code execution
- Variable manipulation
- Search
- Retrieval
- User-defined tools

Unlike traditional workflow nodes, tools are **resources** rather than workflow primitives.

An Agent dynamically decides **when** and **how** to use them.

Conceptually,

> **Knowledge Space represents cognition, while Toolbox represents action.**

Together, they define an Agent's intelligence.

# Variables

Variables are shared data structures throughout workflow execution.

Odyssey classifies variables according to ownership rather than storage location.

![alt text](..\public\images\canvas-variable.png)

## User Variables

Created and maintained by users.

Agents have read-only access.

---

## Shared Variables

Created by users but may be updated by Agents.

These variables enable collaboration between deterministic workflows and autonomous reasoning.

---

## Agent Variables

Created and maintained entirely by Agents.

These variables primarily store internal reasoning state.

Whether they are exposed to users is determined by the Agent itself or by explicit workflow configuration.

---

# Toolbox

Unlike traditional workflow systems where every capability becomes a dedicated node, Odyssey treats executable capabilities as reusable resources.

For example,

- API
- Search
- Database
- Code
- LLM
- Variable operations

are all implemented as tools.

This significantly simplifies the Workflow Canvas while making the execution ecosystem highly extensible.

Future versions of Odyssey will support lightweight, low-code tool creation so users can build and share custom capabilities.

---

# DSL Editing

The graphical canvas is not the only representation of a workflow.

Every canvas can be automatically translated into a dedicated Workflow DSL.

Conversely, modifying the DSL immediately updates the visual workflow.

This dual-editing model combines the strengths of graphical interaction and textual programming.

![alt text](..\public\images\DSL-canvas.png)

The DSL also enables:

- version control,
- automated validation,
- AI-assisted generation,
- and easier collaboration for experienced users.

Rather than replacing the visual editor, the DSL serves as an equivalent representation of the same workflow structure.