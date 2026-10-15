# Odyssey 的设计原则

> 这四条原则不是功能列表，而是 Odyssey 设计 Human-AI Collaboration System 时反复使用的判断标准。

《为什么是 Odyssey》提出了一个总问题：当一项 AI Agent 能力跨越多轮工作持续存在时，人如何继续理解、塑造和维护它？

Odyssey 当前用四条原则回答这个问题。

## 1. 让系统结构可见、可编辑

复杂 Agent system 中，协作关系、控制流、资源入口和自主性边界不应该全部藏在 Prompt、表单或模型行为里。

Odyssey 使用 Journey Canvas 与 Agent Workflow Canvas，让人分别查看系统协作和单个 Agent 的内部工作，并通过节点、关系、颜色和配置修改这些结构。

这里可见的是**设计结构**，不是模型完整的私有内部推理。分层也会增加导航成本，但 Odyssey 接受这项代价，以避免不同尺度重新挤进一张无限 Canvas。

## 2. 让自主性拥有明确边界

Odyssey 不要求在传统 Workflow 与全自主 Agent 之间二选一。真正的问题是：哪些决定由人预先确定，哪些判断交给 Agent？

Thinking Ownership 用绿色、黄色、红色或粉色区分 User-managed、Shared 与 Agent-managed 责任；System 状态使用中性灰。这套颜色可以出现在空间区域、节点、Variable 分组和资源权限中，并不要求界面永远被切成三块固定区域。

Agent 可以在 Goal、Knowledge Spaces、Toolbox 和状态权限定义的范围内选择行动，但不能自行改写系统边界。代价是用户需要理解“自动执行”与“Agent 决定”的区别。

## 3. 先定义关系，再形成角色

Planner、Researcher 或 Reviewer 等名称能够描述职责，却不应该直接成为系统拓扑。

Odyssey 先用 Pattern 定义稳定的 Agent Slot、连接方式和信息流，再由具体 Agent 的 Goal、Workflow 和资源形成角色。同一种关系结构可以承载不同领域的协作。

这不意味着任意自由连线。当前内置 Pattern 保持各自的拓扑约束，因此更容易理解和交流，但也暂时不能表达所有复杂协作。

## 4. 让知识与配置共同持续存在

如果每轮工作都要重新描述协作结构、Workflow、Tool、状态边界和资料背景，那么系统仍然主要依赖当下 Prompt。

Odyssey 用 OdyJourney 保存可持续编辑的能力配置，用 Knowledge Space 保存可被持续组织、引用和维护的知识环境。配置回答“能力如何被组织”，知识回答“它依赖什么理解环境”。

持续存在不表示 Agent 必须始终运行，也不表示保存全部运行历史。它只表示结构、资源引用与知识能够在多轮工作之间继续被检查和修订。代价是系统必须认真处理引用、更新、冲突和资产生命周期。

## 四条原则共同回答什么

| 问题 | 原则 |
| --- | --- |
| 人如何理解和修改复杂系统？ | 可见、可编辑的系统结构 |
| 决定由谁承担？ | 有边界的自主性 |
| 多个 Agent 如何协作？ | 关系先于角色 |
| 一项能力如何跨越多轮工作？ | 知识与配置共同持续存在 |

这些原则描述的是 Odyssey 当前采用的设计方向，不是已经由生产系统证明的通用规律。Odyssey 是一套 Human-AI Collaboration System Prototype，目前没有执行 kernel 开发计划。

更具体的设计、边界和代价，将分别在《为什么是双层 Canvas》《关系先于角色》《为什么需要有边界的自主性》和《为什么 Knowledge Space 不只是 RAG》中展开。

## 设计来源

- 首版原则范围：`doc/planning/odyssey-documentation-redesign-backlog.md`；
- 首版定位：`doc/samples/why-odyssey/why-odyssey.zh.md`；
- 首版公开术语：`doc/foundations/first-release-terminology.md`；
- 已通过 Review 的四篇关键设计决定。
