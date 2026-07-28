# Design Note: Designing Beyond Traditional Form-Based Interfaces

## Observation

While exploring the Figma Community, I noticed that the vast majority of UI resources focus on conventional application interfaces, such as dashboards, CRUD systems, forms, chat applications, and management panels.

These interfaces primarily revolve around presenting and editing structured data through components such as:

- Forms
- Tables
- Cards
- Lists
- Navigation
- Dialogs

For these products, the user's primary interaction is filling fields, configuring parameters, or browsing information.

As a result, there is already a mature design language and an abundance of reusable templates for this category of software.

---

## The Challenge

Odyssey presents a fundamentally different design problem.

The primary task is not to help users edit data.

Instead, users construct and organize an intelligent system composed of multiple interacting components.

Users are continuously making structural decisions such as:

- Creating execution modules
- Organizing agents
- Configuring node relationships
- Managing resources
- Navigating between abstraction levels

In other words, the interface itself becomes part of the thinking process.

This shifts the design focus from **information presentation** to **knowledge construction**.

---

## Existing References

This type of interaction is surprisingly uncommon in conventional business software.

Instead, similar interaction patterns can be found in professional tools such as:

- Game engines (Unity, Unreal Engine)
- Electronic Design Automation (EDA) software
- Visual programming environments
- Infinite canvas applications
- Node-based editors
- Creative software (Figma, Blender, After Effects)

These systems share several characteristics:

- Objects exist within a spatial workspace.
- Users build structures rather than complete forms.
- Navigation spans multiple abstraction levels.
- Interaction emphasizes composition instead of configuration.

Although these products belong to different industries, they provide valuable references for designing scalable AI systems.

---

## Design Philosophy

Rather than treating the application as a collection of configuration pages, Odyssey treats the interface as a workspace for system design.

The goal is to create an environment where users can gradually build increasingly complex AI systems while maintaining a clear mental model of:

- where they are,
- what they are editing,
- how individual components relate to the whole system.

This perspective naturally leads to interaction patterns that differ from traditional dashboard applications and requires a new visual language centered around hierarchy, spatial organization, and composable system structures.

---

## Reflection

One interesting observation throughout the design process is that modern AI-assisted UI generation performs remarkably well for conventional form-based applications.

However, when designing novel interaction paradigms, reusable references become significantly scarcer.

In these situations, interface design becomes less about arranging existing UI components and more about inventing new interaction models that better support human thinking.

For Odyssey, this challenge is not simply a visual design problem—it is fundamentally an interaction design problem.