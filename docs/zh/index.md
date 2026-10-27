---
layout: home

hero:
  name: Odyssey
  text: 让复杂的 AI Agent 系统仍然可以被人理解
  tagline: 一套已经实现为可交互软件的 Human-AI Collaboration System Prototype，探索人如何看见、配置并持续修改 Agent 系统的结构、自主性、协作关系与知识环境。
  image:
    src: /images/brand/odyssey-mark-v6.svg
    alt: Odyssey 图标
  actions:
    - theme: brand
      text: 理解为什么是 Odyssey
      link: /zh/why-odyssey
    - theme: alt
      text: 打开在线 Demo ↗
      link: https://shiny-dawn-ff43.houliang008.workers.dev/
    - theme: alt
      text: 阅读关键设计决定
      link: /zh/core-concepts/two-level-canvas

features:
  - title: 为什么需要 Odyssey
    details: Agent 正变得更加自主，Agent 平台也拥有越来越多的功能；但人是否还能看清一个复杂系统为什么这样组织、哪些决定属于谁，以及下一步应该在哪里修改？
  - title: Odyssey 现在是什么
    details: 一套可交互的 Human-AI Collaboration System Prototype。核心概念已经进入界面、领域模型、Canvas、Knowledge Space 与 Ody DSL，并可通过在线 Demo 查看。
  - title: Odyssey 不是什么
    details: 它不是已经验证生产可靠性的 Agent 执行平台，也不是成熟商业产品。当前重点是检验设计语言、信息架构和交互逻辑能否形成一套清晰、一致的系统。
---

## Motivation：Agent 越来越强，但系统不一定越来越清楚

Odyssey 最初来自两组同时出现的问题。

一方面，Claude Code、Codex 一类 Agent 已经可以独立处理越来越复杂的任务。人可以给出 Goal、查看日志并在必要时介入，但随着 Agent 获得更多开放判断空间，我们也更难直接知道它接下来会做什么、为什么选择某条路径，以及它能够改变哪些状态。

另一方面，Workflow 平台已经可以连接 Agent、Tool、知识与外部服务。功能越丰富，往往也意味着更多节点类型、配置页面和平台概念。系统可以搭建得非常复杂，但读者未必能迅速理解：为什么功能要以这种方式组合？哪些关系属于整个系统，哪些控制只属于一个 Agent？哪些步骤由人预先决定，哪些判断交给 Agent？

因此，Odyssey 的出发点不是再增加一组功能，而是重新提出一个结构问题：

> 如果一个 Agent 系统需要被反复使用、持续修改，或者由多个 Agent 共同完成工作，我们能否用一组更少、更清晰的概念，让人始终看见它如何协作、在哪里自主、能够使用什么，以及知识如何继续积累？

## Odyssey 的设计假设

Odyssey 不试图消除复杂性，也不把所有复杂性都交给一个 Agent。

它选择把不同问题放在不同的设计位置：

- 用 **OdyJourney 与 Journey Canvas** 表达完整能力和系统级协作；
- 用 **System Pattern** 先定义 Agent 之间的关系，再放入具体角色；
- 用 **Agent Workflow Canvas** 表达单个 Agent 内部的步骤、分支、迭代与行动；
- 用 **Thinking Ownership** 区分由用户预先决定、由 Agent 判断，以及双方共同维护的部分；
- 用 **Knowledge Space** 与 **Toolbox** 分开表达 Agent 的认知空间与行动空间；
- 用 **Ody DSL** 让同一份 Workflow 可以在 Canvas 与文本之间双向表达，并接受领域检查。

这些概念不是为了制造更多术语，而是为了让人能从系统级关系逐层进入局部执行，在需要修改时知道自己正在改变哪一类决定。

## 当前状态：一套已经可以操作的系统原型

Odyssey 目前最适合被定义为一套 **Human-AI Collaboration System Prototype**。

这里的 Prototype 不只是概念草图或 Figma 页面。Odyssey 已经拥有可运行的 Web 界面和持久化领域模型；读者可以在在线 Demo 中创建 OdyJourney、选择 System Pattern、配置 Agent、进入 Agent Workflow Canvas，并查看 Tool、Variable 与 Knowledge Space 等设计对象。

Ody DSL 也已经成为另一种 Workflow 编辑界面。Canvas 与 DSL 围绕同一份 Canonical Workflow 工作，支持双向转换、编译检查和显式 Apply。当前的 Document Curator 则把 Pattern、Workflow、Agent Action、Task、Branch、Knowledge Space、Tool 与 Variable 放进同一个较完整的配置案例中，用来检验这些概念能否共同描述一个真实问题。

因此，Odyssey 已经不只是“关于一个产品的文档”。它是一套可以操作、观察和继续修改的产品原型；这套文档解释的，是这个原型背后的设计理由。它目前仍以验证设计语言、信息架构和交互逻辑为主，而不是以证明生产级执行能力为目标。

## 从哪里开始

如果你第一次接触 Odyssey，可以按下面的顺序阅读：

1. [为什么是 Odyssey](/zh/why-odyssey)：完整理解它试图解决的问题和设计命题；
2. [设计原则](/zh/design-principles)：了解后续设计决定共享的判断标准；
3. [为什么使用双层 Canvas](/zh/core-concepts/two-level-canvas)：理解系统协作与单个 Agent Workflow 为什么需要不同尺度；
4. [为什么关系先于角色](/zh/core-concepts/pattern)：理解四种 System Pattern 如何先建立协作结构；
5. [为什么需要有边界的自主性](/zh/core-concepts/bounded-autonomy)：理解 Thinking Ownership、Agent Action、Task 与控制节点；
6. [为什么 Knowledge Space 不只是 RAG](/zh/core-concepts/knowledge-space-more-than-rag)：理解知识为什么需要独立的维护生命周期；
7. [为什么 Odyssey 需要一门语言](/zh/core-concepts/workflow-language)：理解 Ody DSL 如何连接人、Canvas 与 LLM 可生成的 Workflow 表达；
8. [当前状态与限制](/zh/current-state-and-limitations)：查看文档当前能够支持和不能支持的主张。

如果你更想先看看它现在长什么样，可以直接打开[在线 Demo](https://shiny-dawn-ff43.houliang008.workers.dev/)或 [Figma 设计](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=1-2&p=f)。

## 为什么公开这些文档

Odyssey 目前最值得讨论的，不是它是否已经拥有足够多的产品功能，而是它提出的结构是否真的有帮助：这些概念能否让复杂 Agent 系统更容易被理解？双层 Canvas 是否划分了正确的设计尺度？Thinking Ownership 是否足以表达责任？Knowledge Space 与 Toolbox 的分离是否有意义？Canvas 与 DSL 是否能够共享同一种语义？

这套文档记录这些决定从什么问题中产生、带来了什么好处、付出了什么代价，以及还有哪些问题没有答案。

它不是一份功能手册，也不是成熟产品的宣传页。它是一份可以被检验的设计论证。
