---
layout: home

hero:
  name: Odyssey
  text: Keeping Complex AI Agent Systems Understandable
  tagline: An implemented, interactive Human–AI Collaboration System Prototype exploring how people can see, configure, and keep reshaping the structure, autonomy, collaboration, and knowledge environment of an Agent system.
  image:
    src: /images/brand/odyssey-mark-v6.svg
    alt: Odyssey mark
  actions:
    - theme: brand
      text: Understand Why Odyssey
      link: /why-odyssey
    - theme: alt
      text: Open the Live Demo ↗
      link: https://shiny-dawn-ff43.houliang008.workers.dev/
    - theme: alt
      text: Read the Key Decisions
      link: /core-concepts/two-level-canvas

features:
  - title: Why Odyssey Exists
    details: Agents are becoming more autonomous, and Agent platforms offer more and more capabilities. But can people still see why a complex system is organized this way, who owns each decision, and where it should be changed next?
  - title: What Odyssey Is Today
    details: An interactive Human–AI Collaboration System Prototype. Its core concepts now exist in the interface, domain model, Canvases, Knowledge Space, and Ody DSL, and can be explored in the Live Demo.
  - title: What Odyssey Is Not
    details: It is not a production-validated Agent execution platform or a mature commercial product. Its current purpose is to test whether its design language, information architecture, and interaction model form a clear and coherent system.
---

## Motivation: Stronger Agents Do Not Automatically Create Clearer Systems

Odyssey began with two problems appearing at the same time.

On one side, Agents such as Claude Code and Codex can now handle increasingly complex tasks on their own. People can provide a Goal, inspect logs, and intervene when necessary. But as an Agent gains more room for open-ended judgment, it also becomes harder to know what it will do next, why it chose a particular path, and which parts of the surrounding state it is allowed to change.

On the other side, Workflow platforms can already connect Agents, Tools, knowledge, and external services. More capability often brings more node types, configuration pages, and platform concepts. A system may be able to represent a great deal while still leaving its reader with basic questions: Why are these capabilities organized in this way? Which relationships belong to the whole system, and which controls belong inside one Agent? Which decisions were made by a person in advance, and which judgments were assigned to an Agent?

Odyssey therefore did not begin by asking what other feature could be added. It began with a structural question:

> If an Agent system must be used repeatedly, changed over time, or shared among multiple Agents, can a smaller and clearer set of concepts help people keep seeing how it collaborates, where it is autonomous, what it may use, and how its knowledge continues to develop?

## The Odyssey Design Hypothesis

Odyssey does not try to eliminate complexity, nor does it hand all complexity to an Agent.

Instead, it gives different questions different places in the design:

- **OdyJourney and the Journey Canvas** represent a complete capability and its system-level collaboration;
- a **System Pattern** defines relationships among Agents before concrete roles are assigned;
- the **Agent Workflow Canvas** represents the steps, branches, iterations, and actions inside one Agent;
- **Thinking Ownership** distinguishes what a person decides in advance, what an Agent judges, and what both sides maintain through explicit structure;
- **Knowledge Space** and **Toolbox** separate an Agent's cognitive space from its action space;
- the **Ody DSL** lets the same Workflow move between Canvas and text while remaining subject to domain validation.

These concepts are not intended to create more terminology. They let a reader move from system-level relationships into local execution and understand what kind of decision is being changed at each level.

## Current State: A System Prototype You Can Already Operate

Odyssey is currently best understood as a **Human–AI Collaboration System Prototype**.

Here, Prototype does not mean only a collection of sketches or Figma screens. Odyssey has a working Web interface and persistent domain model. In the Live Demo, a reader can create an OdyJourney, choose a System Pattern, configure an Agent, enter the Agent Workflow Canvas, and inspect design objects such as Tools, Variables, and Knowledge Spaces.

Ody DSL has also become a second Workflow editing surface. Canvas and DSL operate on the same Canonical Workflow, with bidirectional conversion, compilation checks, and explicit Apply. The current Document Curator brings Pattern, Workflow, Agent Action, Task, Branch, Knowledge Space, Tool, and Variable into one relatively complete configuration example, testing whether these concepts can describe a concrete problem together.

Odyssey is therefore no longer only documentation about a possible product. It is a product prototype that can be operated, inspected, and changed. This documentation explains the reasoning behind that prototype. Its current purpose remains to validate the design language, information architecture, and interaction model rather than to demonstrate production-grade execution.

## Where to Begin

If Odyssey is new to you, the following path introduces the design in order:

1. [Why Odyssey?](/why-odyssey) presents the full problem and design thesis;
2. [Design Principles](/design-principles) defines the criteria shared by the decisions that follow;
3. [Why Two Canvas Levels?](/core-concepts/two-level-canvas) explains why system collaboration and one Agent's Workflow need different design scales;
4. [Why Relationships Before Roles?](/core-concepts/pattern) explains how four System Patterns establish collaboration before concrete roles;
5. [Why Bounded Autonomy?](/core-concepts/bounded-autonomy) introduces Thinking Ownership, Agent Action, Task, and explicit control nodes;
6. [Why Knowledge Space Is More Than RAG](/core-concepts/knowledge-space-more-than-rag) explains why knowledge needs its own maintenance lifecycle;
7. [Why Odyssey Needs a Language](/core-concepts/workflow-language) explains how Ody DSL connects people, Canvas, and an Agent Workflow representation that an LLM can generate and the system can validate;
8. [Current State and Limitations](/current-state-and-limitations) states what the documentation can and cannot currently claim.

If you would rather see what Odyssey looks like first, open the [Live Demo](https://shiny-dawn-ff43.houliang008.workers.dev/) or explore the [Figma design](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=1-2&p=f).

## Why Publish This Documentation

The most useful question about Odyssey today is not whether it already contains enough product features. It is whether the proposed structure actually helps: Do these concepts make a complex Agent system easier to understand? Do two Canvas levels separate the right design scales? Can Thinking Ownership express responsibility clearly enough? Is the separation between Knowledge Space and Toolbox meaningful? Can Canvas and DSL share one semantic model?

This documentation records which problems led to these decisions, what they make possible, what they cost, and which questions remain unanswered.

It is not a feature manual or a promotional page for a mature product. It is a design argument that can be examined and challenged.
