# Odyssey “可见性”语言规范与旧文档审计

> Status: Approved  
> Backlog item: `ODOC-003`  
> Created: 2026-09-16  
> Language policy: 中文定义是语义基准；英文是对应公开表达  
> Scope: 首版公开设计文档、旧文档改写及后续英文版

## 1. 目的

本文档冻结 Odyssey 对“可见”“推理”“解释性”“Thinking Ownership”和“自主性”的公开表述，避免把可见的系统设计结构误写成可见的模型内部推理。

需要解决的核心问题是：

> Canvas 能让什么变得可见？它又明确不能让什么变得可见？

首版统一答案：

> Odyssey 不会让模型的私有内部推理完全可见。它让围绕 Agent 推理而设计的系统结构变得可见、可编辑：系统拓扑、控制流、信息流、资源访问、自主权边界、显式决策位置，以及持久化配置和知识关系。

英文基准：

> Odyssey does not make a model's private internal reasoning fully visible. It makes the designed structure around agent reasoning visible and editable: system topology, control flow, information flow, resource access, autonomy boundaries, explicit decision positions, and persistent configuration and knowledge relationships.

## 2. 四种必须区分的可理解性

公开文档不得再用一个笼统的 `explainability` 覆盖全部含义。

| 层次 | 中文标准名 | 英文标准名 | 回答的问题 | Odyssey 首版立场 |
| --- | --- | --- | --- | --- |
| 1 | 设计可理解性 | design understandability | 为什么系统被设计成这样？ | 核心设计目标 |
| 2 | 结构可检查性 | structural inspectability | 谁能决定什么、访问什么、把结果送到哪里？ | 核心设计目标 |
| 3 | 运行可追踪性 | runtime traceability | 某一次真实执行发生了什么？ | 未来执行与可观察性工作；不可由 Canvas 单独证明 |
| 4 | 模型私有内部推理 | private internal model reasoning | 模型内部完整的隐含推理过程是什么？ | 不承诺完整可见 |

### 2.1 设计可理解性

可以公开说明：

- 为什么使用两个 Canvas 层级；
- 为什么 Pattern 与 Agent Workflow 分离；
- 为什么某个位置交给 Agent 作开放式判断；
- 为什么某个步骤保持确定性；
- 为什么 Knowledge Space 是独立资源。

证据通常来自：设计论证、当前 Figma、被确认的产品决定和历史演化材料。

### 2.2 结构可检查性

可以公开说明 Canvas 或配置界面能够展示：

- Pattern 和 Slot 拓扑；
- Workflow 节点和显式路径；
- Agent Action 与 Task 的责任差异；
- Agent 可以引用的 Tool 和 Knowledge Space；
- 人预先设定的条件和迭代边界；
- 页面之间的层级和所有权关系。

“可检查”不代表系统一定能解释每次模型输出的真实因果过程。

### 2.3 运行可追踪性

只有在存在真实运行记录、事件、日志、状态或验证证据时，才能使用：

- “记录了本次执行路径”；
- “可以回看实际调用的 Tool”；
- “可以追踪输入如何经过各节点”；
- “可以观察运行时策略或错误”。

Figma 中出现 Execution Behavior、Observability 或运行状态设计，只能证明 `Designed`，不能证明实际运行可追踪。

### 2.4 模型私有内部推理

不得承诺：

- 完整展示模型的思维链；
- 读取模型每一步真实思考；
- Canvas 与模型内部推理一一对应；
- 从图中完整解释模型为什么生成某句话。

可以说明的是：系统显式设计了哪些输入、资源、控制边界和决策位置。

## 3. “可见”可以修饰什么

### 3.1 推荐直接使用

| 中文推荐表达 | 英文推荐表达 | 使用条件 |
| --- | --- | --- |
| 可见、可编辑的系统结构 | visible and editable system structure | 首版总命题 |
| 可见的协作拓扑 | visible collaboration topology | Figma 或概念图明确显示 Agent 关系 |
| 可见的控制边界 | visible control boundaries | 人定义与 Agent 决策边界明确 |
| 可见的信息流 | visible information flow | 图中表达预期路径；若指真实运行需另有证据 |
| 显式决策位置 | explicit decision positions | 指结构中允许或要求决策的位置 |
| 可检查的资源关系 | inspectable resource relationships | Tool/Knowledge Space 绑定被界面或配置表达 |
| 可编辑的 Workflow 结构 | editable Workflow structure | 当前设计或实现支持结构编辑 |
| 共享的系统表示 | shared system representation | 人和 AI 可以讨论同一外部结构 |

### 3.2 必须带限定语

| 风险表达 | 必须说明 |
| --- | --- |
| 可见的规划 | 指显式建模或输出的计划，不是模型所有隐含规划 |
| 可见的推理路径 | 指 Workflow、引用路径或已记录运行路径，不是私有 Chain of Thought |
| 可解释 | 是设计结构可理解、结构可检查，还是有运行证据支持的解释 |
| 透明 | 对什么透明：配置、资源、路由、状态或实际运行记录 |
| Agent 的决策过程 | 指显式决策点和可观察输入/输出，不是完整内部思维 |
| 观察执行 | 只有设计明确表达运行记录及其边界时才可作为当前设计描述 |

### 3.3 首版禁止或替换

| 禁止或避免表达 | 风险 | 推荐替代 |
| --- | --- | --- |
| reasoning should be visible | 暗示推理本身完整可见 | designed reasoning boundaries should be visible |
| visible reasoning | 与私有内部推理混淆 | visible and editable system structure |
| 展示 Agent 的思考过程 | 过度承诺 | 展示 Agent 所处的结构、资源和显式决策位置 |
| 完整解释模型为什么这样回答 | 无法由 Canvas 保证 | 帮助检查影响回答的显式结构与证据 |
| shared reasoning space | 容易暗示人与模型共享内部思维 | shared system representation / shared workspace |
| the LLM owns the reasoning process | 范围过宽 | the Agent owns the open-ended decision within an explicit boundary |
| all reasoning belongs to the workflow designer | 把显式结构与所有认知活动混为一谈 | the designer predefines the deterministic structure and constraints |
| reasoning scaffold（不加说明） | 容易暗示控制模型内部推理 | context and navigation scaffold |
| inspect how a conclusion was reached | 容易被读作完整因果解释 | inspect the explicit sources, references, and configured path supporting a conclusion |
| transparent AI system | 范围无限 | inspectable system configuration / traceable execution（有证据时） |

## 4. Thinking Ownership 的统一解释

中文首次出现：

> 思考责任（Thinking Ownership）

定义：

> Thinking Ownership 用来讨论在一个系统结构中，哪些决定由人预先确定，哪些开放式判断由 Agent 在明确边界内承担，以及两者如何通过显式状态和资源连接。

英文：

> Thinking Ownership describes which decisions are predetermined by people, which open-ended judgments are delegated to an Agent within explicit boundaries, and how both sides connect through explicit state and resources.

### 4.1 可以表达的内容

- Workflow 设计者负责确定性结构、条件和约束；
- Agent Action 在指定 Goal、资源和上下文边界内承担开放式判断；
- Task 执行预先配置的确定性步骤；
- Shared Variable 等结构可以连接人定义状态和 Agent 更新；
- 不同节点语义体现不同决策责任。

### 4.2 不应继续使用的字面模型

旧文档将 Thinking Ownership 表达成：

- User-owned reasoning；
- Shared reasoning；
- LLM-owned reasoning；
- 绿色、黄色、红色三个固定 Canvas 区域。

这些内容是持续有效的设计原则，但不能把某一张概念图的具体布局写成所有当前界面必须逐像素复现的固定布局，也不能扩展成完整认知本体。

当前叙事应说明：

> 原则保留下来，但表达方式从固定空间区域演化为节点语义、资源边界、权限、状态和 Flow/Configure 模式。

### 4.3 “Ownership”不是所有权实体

Thinking Ownership 是设计分析框架，不是：

- 数据库 ownership；
- 文件归属；
- Workspace 权限；
- 模型意识或人格所有权；
- 一项运行时字段。

## 5. 有边界的自主性

中文标准：有边界的自主性  
英文标准：Bounded Autonomy

定义：

> 人明确系统结构、资源范围和控制边界，Agent 在这些边界内承担开放式判断与行动。

推荐表达：

- Agent 在明确 Goal 和资源边界内选择下一步；
- 人负责定义不可越过的结构和约束；
- 确定性 Task 与开放式 Agent Action 可以在同一个 Workflow 中协作；
- 自主性的范围需要通过产品结构显式表达。

避免表达：

- 完全自主；
- Agent 自己决定一切；
- 所有推理都由 Agent 拥有；
- Workflow 与 Agent autonomy 只能二选一；
- 有 Canvas 就意味着 Agent 受到完整控制。

## 6. Externalized Cognition 的使用规则

旧文档中的 `Externalized Cognition` 具有价值，可以保留为设计灵感，但必须精确化。

推荐中文：认知外化  
推荐英文：externalized cognition

可接受定义：

> 人通过图、文档、公式和 Workflow 等外部表示来组织复杂问题。Odyssey 的 Canvas 延续这一思路，将系统设计结构外化，以便检查、讨论和修改。

不得从中推导：

- 模型内部认知已经被外化；
- Canvas 是模型真实思维过程的镜像；
- 所有影响输出的因素都能在 Canvas 中看到。

## 7. Shared Mental Model 的使用规则

`Shared Mental Model` 可以保留，但推荐公开表达改为：

- 中文：共享的系统表示；
- 英文：shared system representation。

原因：人与 AI 并不真正共享同一内部心智状态。双方可以共同读取、生成或修改的是一个外部表示。

推荐表达：

> Canvas 为人和 AI 提供一个可以共同讨论的系统表示。

避免表达：

> 人与 LLM 在同一个推理空间里共同思考。

如需使用 `shared mental model`，必须说明它指向对系统结构的共同理解目标，而非共享内部认知。

## 8. Explainability 的使用规则

首版不把 `Explainability` 单独作为 Odyssey 的总能力声明。

需要使用时，必须改写为具体对象：

| 想表达的内容 | 推荐写法 |
| --- | --- |
| 看懂系统设计 | design understandability |
| 检查配置和边界 | structural inspectability |
| 查看实际执行记录 | runtime traceability |
| 查看引用证据 | source/evidence inspection |
| 理解知识关系 | inspectable knowledge relationships |

不推荐：

> The Canvas provides explainability.

推荐：

> The Canvas makes the designed topology, control boundaries, and resource relationships inspectable.

## 9. Knowledge Space 相关可见性

Knowledge Space 可以提高显式证据和关系的可检查性，但不自动解释模型的全部结论。

推荐表达：

- 展示文档之间显式建立的引用和语义关系；
- 允许读者检查某个回答所引用的来源；
- 为 Agent 提供可导航的上下文结构；
- 帮助检查结论所依赖的显式证据和路径。

必须限定：

- 图中的关系不等于真实世界因果关系；
- 引用路径不等于模型完整推理链；
- Knowledge Family 是语义分组，不代表唯一正确分类；
- `Knowledge-Only Mode` 属于旧设计提案，是否仍属于当前设计需要重新确认；
- Knowledge Steward / Curator 的自动维护只能按当前设计意图描述，不能扩展成产品可用性承诺。

## 10. Canvas 相关可见性

### 10.1 Journey Canvas

可以声明它帮助读者看到：

- OdyJourney 的系统级区域；
- Pattern 与 Agent Slot；
- Agent 之间的预期协作关系；
- 当前选择的 Agent；
- 进入 Agent Workflow 的路径。

不能声明它显示：

- 每个 Agent 的全部内部决策；
- 一次真实运行的完整轨迹；
- 模型未记录的思考内容。

### 10.2 Agent Workflow Canvas

可以声明它帮助读者看到：

- Agent 内部的显式节点结构；
- 确定性控制与开放式行动的边界；
- 配置的 Tool、Knowledge Space 和变量关系；
- Branch 与 Loop 的结构化边界。

不能声明它显示：

- Agent Action 内部完整推理；
- Tool 返回后模型所有隐含判断；
- 运行时一定走过的路径，除非有执行记录叠加。

### 10.3 Workflow Preview

可以称为：

- 只读结构预览；
- 用于方向感和渐进披露；
- 显示 Workflow 拓扑的简化表达。

不能称为：

- Agent 当前实时思考画面；
- 运行追踪器；
- 完整 Workflow 解释器。

## 11. 中英标准表达

| 中文基准 | 英文标准 |
| --- | --- |
| 可见、可编辑的系统结构 | visible and editable system structure |
| 围绕 Agent 推理而设计的结构 | the designed structure around agent reasoning |
| 设计可理解性 | design understandability |
| 结构可检查性 | structural inspectability |
| 运行可追踪性 | runtime traceability |
| 模型私有内部推理 | private internal model reasoning |
| 显式决策位置 | explicit decision position |
| 自主权边界 | autonomy boundary |
| 预期信息流 | intended information flow |
| 实际执行路径 | actual execution path |
| 共享的系统表示 | shared system representation |
| 认知外化 | externalized cognition |
| 思考责任 | Thinking Ownership |
| 有边界的自主性 | Bounded Autonomy |
| 可检查的知识关系 | inspectable knowledge relationships |
| 显式来源与证据 | explicit sources and evidence |
| 上下文和导航支架 | context and navigation scaffold |

## 12. 写作前自检

每次出现以下词语时暂停检查：

- 可见 / visible；
- 推理 / reasoning；
- 解释 / explainability；
- 透明 / transparent；
- 观察 / observe；
- 追踪 / trace；
- 自主 / autonomous；
- 所有权 / ownership；
- 心智模型 / mental model；
- 认知 / cognition。

逐句回答：

1. 这句话的主语是设计结构、运行记录，还是模型内部推理？
2. “可见”的具体对象是什么？
3. 依据是当前 Figma、产品决定、历史材料还是探索稿？
4. 该内容属于当前设计、历史设计、设计探索还是已后置？
5. 是否可能被读成公开 Chain of Thought？
6. 是否用一个宽泛术语掩盖了多个不同能力？
7. 是否需要明确“不能看见什么”？

若无法回答，不发布该句。

## 13. 旧文档逐文件审计

行号基于 2026-09-16 当前文件，仅作为定位线索；正式改写时以原句搜索为准。

### 13.1 `docs/introduction/introduction.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L30 | `Visible Planning vs Hidden Planning` | 限定后保留 | 改为“显式系统规划与隐式模型规划”，说明只外化被建模或输出的部分 |
| L36 | Canvas 的 deeper role 是 `externalized cognition` | 保留并精确化 | 明确外化的是人的系统设计表示，不是模型全部内部认知 |
| L38 | implicit agent hides planning inside model inference | 限定 | 可以批评结构不可检查，但不要暗示所有规划都能被 Canvas 还原 |
| L40 | `A visible canvas` | 替换 | 写清可见的是 topology、boundaries、resources 和 decision positions |
| L51 | `Shared Mental Model and Explainability` | 重写 | 改为“共享的系统表示与结构可检查性” |
| L57 | `workflow canvas ... provides explainability` | 必须替换 | 改为 Canvas 让设计结构和资源关系可检查 |
| L123 | canvas provides visibility | 限定 | 说明大图可见不等于可理解，引出双层 Canvas |
| L184–186 | human thinking and machine intelligence interact | 可保留 | 避免拟人化为共享内部思维；强调共享外部工件和持续配置 |

优先级：`P0`。这是首版问题陈述的主要来源，宽泛表述必须在复用前修正。

### 13.2 `docs/core-concepts/workflow-canvas.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L9 | `reasoning should be visible` | 禁止沿用 | 改为 designed reasoning boundaries should be visible |
| L10 | `same reasoning space` | 禁止沿用 | 改为 shared system representation |
| L16 | reasoning as first-class workflow component | 限定 | 说明结构中给开放式判断留下显式位置，不是把内部推理变成节点 |
| L24–48 | Thinking Ownership | 核心思想保留，全文重写 | 采用“谁预设结构、谁承担开放式判断”的定义 |
| L34 | all reasoning belongs to workflow designer | 替换 | 改为 designer predefines deterministic structure and constraints |
| L36 | almost all reasoning belongs to LLM | 替换 | 改为 Agent receives broad open-ended decision authority |
| L40–44 | User / Shared / LLM owned reasoning | 作为当前 Thinking Ownership 原则保留 | 用当前术语 User-managed / Shared / Agent-managed 表达，不扩展成完整认知本体 |
| L46 | first-class property of workflow | 降级 | Thinking Ownership 是设计分析框架，当前未确认是持久化字段 |
| L54–58 | 三个颜色区域 | 保留设计原则 | 区域、节点和变量分组是同一三色原则在不同尺度上的表达 |
| L82–107 | 各颜色区域行为 | 按当前术语校准 | 使用 User-managed / Shared / Agent-managed，并与当前权限语义对齐 |
| L99–107 | LLM owns reasoning and intermediate evolution | 必须限定 | 写成 Agent 在边界内拥有下一步开放式决策权 |
| L141 | Agent performs autonomous reasoning | 替换 | Agent Action 在指定边界内承担开放式判断 |
| L190 | Knowledge Space constrains Agent thinking | 限定 | 改为提供上下文和导航边界 |
| L216 | Knowledge Space represents cognition | 禁止沿用 | 改为 Knowledge Space provides persistent context; Toolbox provides executable capabilities |
| L248 | Agent Variables store internal reasoning state | 高风险 | 若无明确设计依据，不公开声称保存内部推理状态 |

优先级：`P0`。这是过度表述最集中的文件，也是未来 Design Evolution 的主要历史证据。

### 13.3 `docs/core-concepts/knowledge-space.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L18 | reasoning needs global view and paths | 限定后保留 | 改为复杂工作需要可导航上下文，不宣称这是所有推理的必要条件 |
| L40 | graph helps reasoning | 保留 | 说明它暴露显式关系，不代表唯一正确语义结构 |
| L46–48 | `Explicit Reasoning Scaffold` | 改名 | 使用 `Context and Navigation Scaffold` |
| L48 | guides how a model expands context | 保留并限定 | 指上下文选择和导航，不指控制内部推理步骤 |
| L124 | `real reasoning loop` | 替换 | 改为 domain navigation loop / reference cycle |
| L172 | every LLM decision grounded exclusively | 标记历史提案 | Knowledge-Only Mode 当前状态需要确认 |
| L183 | inspect how a conclusion was reached | 必须限定 | inspect explicit sources, references, and recorded path |
| L185 | active reasoning framework | 替换 | persistent context and navigation framework |

优先级：`P1`。核心方向可保留，但需要删除“图谱等于推理过程”的暗示。

### 13.4 `docs/core-concepts/system.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L120 | clearer mental model | 可保留 | 指对系统结构的理解，不是模型自身 mental model |
| L153 | hidden configuration → visible spatial representation | 推荐保留 | 进一步列出可见对象：configured/empty modules、topology、Slot 和 boundaries |
| L175 | Agent performs specialized reasoning | 限定 | 改为 Agent performs open-ended decisions or actions within its Workflow |

优先级：`P1`。主要问题不是可见性，而是 `System` 与 `OdyJourney` 术语已经变化。

### 13.5 `docs/design-notes/001-why-spatial-ui.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L38 | interface becomes part of thinking process | 保留并限定 | 对人而言，界面参与组织和修改系统设计 |
| L72 | maintain a clear mental model | 保留 | 明确是用户对系统层级和关系的理解 |
| L88 | interaction models support human thinking | 保留 | 这是设计动机，不是产品能力承诺 |

优先级：`P2`。整体表述较稳健，是样章的重要来源。

### 13.6 `docs/core-concepts/pattern.md`

| 当前位置 | 当前表达 | 处理 | 建议 |
| --- | --- | --- | --- |
| L261、L308、L371 | multi-stage / complex reasoning | 可保留但避免泛化 | 描述任务结构或协作阶段，不宣称 Pattern 显示内部推理 |

优先级：`P2`。主要改写需求来自篇幅和当前 Pattern 约束，不是可见性风险。

## 14. 跨文件替换策略

不要进行机械全文替换。相同单词在不同语境中责任不同。

推荐顺序：

1. 先写新的中文页面；
2. 从旧文档提取仍有效的论点；
3. 按本文四层模型重写句子；
4. 将非当前内容标注为 Historical Design、Exploration 或 Deferred；
5. 三色 Thinking Ownership 作为持续设计原则保留，不写成已经被当前设计替代；
6. 中文 Review 通过后再生成英文版；
7. 英文版逐项检查表述强度是否与中文一致。

## 15. 样章中的最小可见性声明

《为什么是双层 Canvas》至少应包含以下两段：

### 15.1 它让什么变得可见

> 双层 Canvas 将两个不同抽象层的设计结构分开：Journey Canvas 呈现 OdyJourney 中 Agent 的协作位置和关系；Agent Workflow Canvas 呈现单个 Agent 内部的显式节点、控制边界和资源关系。它们帮助人检查系统是如何被设计的，并决定应该从哪里进入修改。

### 15.2 它不让什么变得可见

> 这并不意味着模型的完整内部推理变得透明。Agent Action 仍然包含开放式模型判断；Canvas 展示的是围绕这些判断而设计的边界、输入、资源和连接，而不是私有 Chain of Thought。

## 16. ODOC-003 完成边界

本任务完成了：

- 冻结四种可理解性层次；
- 冻结“可见”可以修饰的对象；
- 建立推荐、限定、禁止和替换表达；
- 冻结 Thinking Ownership、Bounded Autonomy、Externalized Cognition、Shared Mental Model 和 Explainability 的使用规则；
- 建立 Canvas 与 Knowledge Space 的可见性边界；
- 建立中英标准表达和写作自检；
- 对六份旧公开文档完成逐文件审计；
- 给出双层 Canvas 样章的最小声明。

本任务没有：

- 直接重写旧公开页面；
- 证明 runtime traceability 已经成为可用能力；
- 验证 Execution Behavior 或 observability 的开发状态；
- 编写双层 Canvas 样章正文；
- 替代 `ODOC-004` 的设计内容类型与来源标注规则。

## 17. Review 决定记录

> Reviewer: River  
> Review result: Approved  
> Recorded: 2026-09-21

River 批准以下全部决定：

1. 采用四层区分：设计可理解性、结构可检查性、运行可追踪性、模型私有内部推理。
2. 采用“可见、可编辑的系统结构”作为首版总表述，并明确不承诺私有 Chain of Thought。
3. 将 `Shared Mental Model` 的首选公开表达改为“共享的系统表示”。
4. 保留“认知外化”，但只指外化系统设计表示，不指模型内部认知。
5. 将三色 Thinking Ownership 视为贯穿始终的设计；区域、节点与变量分组是同一原则的不同落点。
6. 首版避免把 `Explainability` 作为无边界总能力声明。
7. 采用本文对旧文档 P0/P1 修订优先级的判断。
