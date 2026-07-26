# Introduction

## Background and Motivation

Large Language Models have fundamentally changed how humans interact with software. Instead of manually operating predefined tools, users can now delegate tasks to intelligent agents through natural language.

However, most current AI applications are still designed around a task-oriented paradigm: users provide instructions, agents execute actions, and the interaction ends once the task is completed.

This paradigm works well for short-lived tasks such as summarizing documents, writing emails, searching information, or generating code snippets. However, many of the most valuable human activities do not follow this pattern.

A significant portion of human intelligence is invested in **long-term knowledge work**: scientific research, product development, entrepreneurship, investment analysis, legal practice, and creative writing. These activities often span months or years. Their core challenge is not completing individual tasks, but continuously evolving strategies, understanding complex contexts, maintaining decisions, and accumulating knowledge over time.

For these scenarios, an AI system should not only answer questions or execute workflows. It should help users build, organize, and evolve a persistent knowledge environment.

Therefore, we believe the next generation of AI applications should move beyond **task execution** and focus on **long-term knowledge collaboration**.

> We are not building an AI task runner.  
> We are building an operating system for long-term knowledge work.

The key concept is not AI itself, nor the Agent. The fundamental problem is how knowledge is represented, evolved, and transformed into intelligent actions.

---

# Why Canvas and Workflow are Still Necessary?

With the rapid development of LLM agents, one may argue that explicit workflow design is unnecessary. If LLMs are powerful enough, why not simply describe the goal in natural language and let agents figure out the execution?

We believe explicit structures remain necessary for three fundamental reasons.

## 1. Externalized Cognition: Visible Planning vs Hidden Planning

Human reasoning is not purely internal. Throughout history, humans have relied on external representations — notes, diagrams, mathematical formulas, architectural drawings, and documents — to extend their cognitive capability.

A workflow canvas serves a similar purpose.

The value of a canvas is not merely defining execution order. Its deeper role is **externalized cognition**.

A fully implicit agent hides planning inside model inference. While this may reduce user effort in simple scenarios, it makes complex reasoning difficult to inspect, revise, and improve.

A visible canvas allows users to answer fundamental questions:

- What are the components of this agent?
- How does information flow between them?
- Where should decisions happen?
- Which parts require human control?

A good AI platform should not only execute what users ask. It should help users understand what kind of agent they actually need.

---

## 2. Shared Mental Model and Explainability

Workflow is often considered a mechanism for controlling execution. However, its more important role is creating a **shared mental model** between humans and AI systems.

In collaborative environments, humans need a common representation of how a system works.

The purpose of a workflow canvas is therefore not simply automation. It provides explainability.

A user should be able to look at an agent system and understand:

- its intention,
- its structure,
- its assumptions,
- its limitations.

This becomes especially important when agents evolve from personal assistants into long-running systems participating in professional knowledge work.

---

# Why Not Just Use Claude Code with Existing Knowledge Tools?

A natural question is:

> If LLM agents are already powerful, why not simply let Claude Code or similar coding agents access existing knowledge repositories such as Obsidian Vault?

The answer is that these systems manage **workspace**, not **knowledge**.

A workspace describes where files exist:
```
project/
├── src/
├── documents/
├── notes/
└── configs/
```

However, long-term knowledge work requires understanding deeper structures:

- Why was this architecture chosen?
- What alternatives were considered?
- What trade-offs were made?
- Which decisions are still valid?
- How does current knowledge relate to previous discoveries?

These are not merely files. They are knowledge relationships.

Existing coding agents are optimized for manipulating artifacts inside a workspace. They do not provide an explicit knowledge model describing how information evolves over time.

Therefore, the missing layer is not another file system. It is a **Knowledge Space**.

---

# Limitations of Current Agent Platforms

This explains why platforms such as Dify, Coze, and Amazon Bedrock Agent tools have emerged. They attempt to provide a structured environment for building AI applications beyond simple chat interfaces.

However, current workflow-based agent platforms still have several limitations.

First, agent configuration is often represented as a collection of forms and parameters.

For example, configuring an LLM node usually becomes:

- model selection,
- temperature,
- system prompt,
- variables,
- parameters.

This creates a technical configuration experience rather than a cognitive design experience.

Second, workflow management remains difficult.

Although canvas-based interfaces provide visibility, large workflows quickly become complicated graphs that challenge users' mental models.

The problem is not that users cannot draw workflows. The problem is that current abstractions do not match how humans naturally design intelligent systems.

A better abstraction is needed.

---

# From Workflow Automation to Knowledge Evolution

Current AI platforms are often optimized for short-lived tasks:

- Send an email
- Book a flight
- Search information
- Generate a report

However, these tasks have limited lifecycle value. They usually exist for minutes or hours.

The most valuable applications belong to a different category: long-term knowledge work.

Examples include:

- Writing a research paper
- Building a startup
- Designing a product strategy
- Conducting investment analysis
- Managing legal cases
- Creating a novel

The central question in these domains is rarely:

> "How do I complete this task?"

Instead, it is:

> "How does my understanding evolve, and how should my decisions change over time?"

This is not merely a Prompt problem.

It is not merely a Workflow problem.

It is a problem of **Knowledge Evolution**.

Existing AI building blocks focus primarily on composing actions. However, they have not fully addressed how knowledge itself should be represented, maintained, and transformed into future actions.

---

# Design Vision

Odyssey is built on the following principle:

> Long-term knowledge work requires a persistent environment where humans and AI can jointly create, organize, and evolve knowledge.

Instead of building another AI task runner, Odyssey aims to provide a **knowledge runtime**:

- Knowledge Space represents evolving knowledge and relationships.
- Canvas provides explicit cognitive structures for designing intelligent systems.
- Patterns define reusable execution strategies.
- Agents operate as components within a larger knowledge ecosystem.

The goal is not to replace human thinking with autonomous agents.

The goal is to create an environment where human thinking and machine intelligence can continuously interact, accumulate, and evolve.

---

# Roadmap

Odyssey will gradually evolve through several layers:

1. **Problem**
   - Understanding the limitations of current AI applications.

2. **Pattern**
   - Defining reusable structures for agent collaboration and execution.

3. **Knowledge Space**
   - Building a persistent, connected knowledge model.

4. **Canvas**
   - Providing an intuitive interface for designing AI systems.

5. **Architecture**
   - Developing the underlying execution and knowledge runtime.

6. **Examples**
   - Demonstrating applications in real-world long-term knowledge scenarios.