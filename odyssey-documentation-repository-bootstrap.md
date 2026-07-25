# Odyssey Documentation Repository Bootstrap

## Goal

Initialize the documentation repository for **Odyssey**.

The repository already exists on GitHub.

Your task is **NOT** to write the documentation itself. Instead, create a clean, production-ready documentation project using **VitePress**, including the documentation structure, version-ready organization, GitHub Pages deployment, and GitHub Actions.

The result should be a repository that can be cloned, installed, and immediately serve a documentation website.

---

# Tech Stack

* VitePress (latest stable)
* Markdown
* GitHub Pages
* GitHub Actions (automatic deployment)
* Mermaid enabled
* KaTeX enabled
* Dark mode enabled
* Search enabled
* Clean default VitePress theme

---

# Requirements

## 1. Initialize VitePress

Create a complete VitePress project.

Configure:

* navigation
* sidebar
* edit link placeholder
* GitHub link
* search
* dark mode
* last updated
* markdown extensions
* Mermaid support
* KaTeX support

The project should be production-ready.

---

## 2. Repository Structure

Create the following structure.

```text
.
├── docs
│
│   ├── index.md
│
│   ├── introduction
│   │     introduction.md
│   │
│   ├── core-concepts
│   │     pattern-slot.md
│   │     knowledge-space.md
│   │     two-level-canvas.md
│   │
│   ├── architecture
│   │     level-1-system.md
│   │     level-2-execution-module.md
│   │     level-3-agent.md
│   │     level-4-node.md
│   │
│   ├── benchmark
│   │     claude-code.md
│   │     coze.md
│   │     dify.md
│   │     amazon-bedrock.md
│   │     langgraph.md
│   │
│   ├── examples
│   │     auto-generator.md
│   │     worldquant-alpha.md
│   │
│   ├── evolution
│   │     index.md
│   │
│   ├── public
│   │     images
│   │     videos
│   │
│   └── .vitepress
│         config.ts
│
├── .github
│    └── workflows
│           deploy.yml
│
├── package.json
├── README.md
└── .gitignore
```

---

## 3. Documentation Navigation

Top Navigation:

* Docs
* Evolution
* GitHub

Sidebar:

Introduction

Core Concepts

* Pattern + Slot
* Knowledge Space
* 2-Level Canvas / Studio

Architecture

* Level 1 — System
* Level 2 — Execution Module
* Level 3 — Agent
* Level 4 — Node

Benchmark

* Claude Code
* Coze
* Dify
* Amazon Bedrock
* LangGraph

Examples

* Auto-generator
* WorldQuant Alpha

---

## 4. Placeholder Pages

Do NOT write actual documentation.

Each page should contain only:

* title
* one sentence placeholder
* TODO section

Example:

```md
# Pattern + Slot

TODO

This page will describe the Pattern abstraction and Slot mechanism.
```

Nothing more.

---

## 5. Evolution

Create an independent Evolution section.

This is NOT documentation history.

It represents the design evolution of the project.

For now only create:

```text
Evolution

Coming Soon
```

Do not create version documents yet.

---

## 6. Version-ready Architecture

The project should be designed so that documentation versions can be added later.

The default documentation should represent:

Version:

v1.0 (Latest)

Reserve space for a future version selector.

Do not implement version switching using a plugin yet.

Simply organize the project so future versions can be introduced without major restructuring.

---

## 7. Assets

Create folders:

```text
docs/public/images
docs/public/videos
```

No assets are required.

---

## 8. Deployment

Configure GitHub Actions.

Requirements:

* automatically build on push to main
* automatically deploy to GitHub Pages
* use the official GitHub Pages workflow
* no third-party deployment actions unless officially recommended

The repository should require no manual deployment after the initial GitHub Pages configuration.

---

## 9. README

Create a concise README including:

* project name
* introduction
* local development commands
* build commands
* deployment overview

Keep it minimal.

---

## 10. Final Step

After everything is complete:

1. install dependencies
2. verify local build succeeds
3. commit all files with an appropriate commit message
4. push to the existing GitHub repository

If GitHub Pages requires repository settings to be changed manually, explain exactly which settings need to be enabled after the push.
