---
layout: home

hero:
  name: Odyssey
  text: 把 Agent 系统当作系统来设计
  tagline: 一组关于可见结构、有边界的自主性、共享知识，以及连接人、Canvas 与 LLM 的设计文档。
  image:
    src: /images/brand/odyssey-mark-v6.svg
    alt: Odyssey 图标
  actions:
    - theme: brand
      text: 从“为什么是 Odyssey”开始
      link: /zh/why-odyssey
    - theme: alt
      text: 阅读关键设计决策
      link: /zh/core-concepts/two-level-canvas
    - theme: alt
      text: English
      link: /

features:
  - title: 为什么是 Odyssey
    details: 从 Odyssey 试图呈现的问题出发，理解塑造整套设计的基本原则。
    link: /zh/why-odyssey
    linkText: 阅读介绍
  - title: 双层 Canvas
    details: 将系统级协作与单个 Agent 的内部 Workflow 放在不同尺度，同时保留二者之间的连接。
    link: /zh/core-concepts/two-level-canvas
    linkText: 阅读设计决定
  - title: 关系先于角色
    details: 先用 System Pattern 确定关系，再把具体 Agent 放入稳定的结构位置。
    link: /zh/core-concepts/pattern
    linkText: 了解 System Pattern
  - title: 有边界的自主性
    details: 明确哪些决定属于用户、Agent，或由双方通过显式控制结构共同维护。
    link: /zh/core-concepts/bounded-autonomy
    linkText: 了解 Thinking Ownership
  - title: Knowledge Space 不只是 RAG
    details: 把知识视为需要长期维护的语义环境，而不是一次性的检索附件。
    link: /zh/core-concepts/knowledge-space-more-than-rag
    linkText: 了解 Knowledge Space
  - title: Ody — Workflow DSL
    details: 让人、Canvas 与未来的 LLM 生成共享同一种可检查的 Agent Workflow 表达。
    link: /zh/core-concepts/workflow-language
    linkText: 了解 Ody
  - title: 设计演化
    details: 追踪 Odyssey 的概念与视觉表达如何形成，包括 Odyssey 图标的设计过程。
    link: /zh/design-evolution
    linkText: 查看设计进程
  - title: 当前状态与限制
    details: 区分当前可以确认的设计、仍处于探索中的提案，以及尚待验证的问题。
    link: /zh/current-state-and-limitations
    linkText: 阅读当前边界
---

## 这是一项设计探索，而不是成熟产品声明

Odyssey 探索的是：当 AI Agent 系统逐渐复杂时，如何仍然让人理解它——协作关系如何组织，自主判断发生在哪里，知识如何被长期维护，以及同一套设计如何在可视化 Canvas 与领域语言之间转换。

这套文档主要解释的是：**为什么要这样设计。** 它记录 Odyssey 背后的设计理由、取舍和仍未解决的问题，而不是把项目包装成一个已经成熟的产品。

目前的阅读主线已经可以从问题与设计原则出发，进入五项关键设计决定，再继续阅读设计演化与当前限制。随着设计推进，我们还会逐步补充概念参考与完整案例。

