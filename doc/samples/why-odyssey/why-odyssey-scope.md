# 《为什么是 Odyssey》命题与边界

> Status: Draft scope
> Backlog: ODOC-301
> Updated: 2026-10-14

## 核心命题

Odyssey 不是在设计一个更好的单次任务执行器。它是一套 Human-AI Collaboration System Prototype，探索的是：当 AI Agent 围绕同一项能力持续工作时，人如何理解、塑造并维护它的结构、自主性、协作关系和知识环境。

## “长期”的可观察定义

本文中的长期不表示 Agent 必须无人值守地持续运行，也不承诺已经存在完整执行引擎。它指一项能力在多轮工作之间保持以下连续性：

- 系统结构可以被再次打开和修改；
- Agent 的协作位置与内部 Workflow 可以被复用或修订；
- Tool、Variable 与资源边界不必在每轮工作中重新描述；
- Knowledge Space 中的文档与关系可以持续积累、审阅和维护。

## 必须回答的问题

- 为什么一段更长的 Prompt 或聊天历史不能独自承担这种连续性？
- 为什么一个拥有很多 Tool 的 Agent 仍然可能把系统结构隐藏起来？
- 为什么传统 Workflow 与完全自主 Agent 不是唯一的二选一？
- OdyJourney 为什么是能力配置，而不是一次运行或聊天记录？
- 四个关键设计决定如何共同回答同一个问题？

## 不在本文展开

- 不介绍完整节点、API、数据库或执行引擎；
- 不虚构 Research Assistant 案例；
- 不进行容易过时的竞品功能比较；
- 不宣称 Canvas 可以展示模型的私有内部推理；
- 不把当前设计写成已经成熟验证的通用平台，也不暗示存在执行 kernel 开发计划。

## 证据基线

- 首版公开术语：`doc/foundations/first-release-terminology.md`；
- 可见性表达边界：`doc/foundations/visibility-language-guidelines.md`；
- 当前信息架构：`odyssey/doc/product/information-architecture/odyssey-figma-information-architecture.md`；
- 当前领域约束：`odyssey/doc/architecture/domain/odyssey-v1-design-constraints.md`；
- 已通过 Review 的四篇关键设计决定：双层 Canvas、关系先于角色、有边界的自主性、Knowledge Space 不只是 RAG。
