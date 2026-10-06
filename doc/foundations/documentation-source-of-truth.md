# Odyssey 公开设计文档权威信息源

> Status: Approved  
> Backlog item: `ODOC-001`  
> Created: 2026-09-14  
> Applies to: `odyssey-architecture` 中文首版及后续英文版  
> Documentation workspace: `C:\Users\13067\River\projectWorkPlace\odysseyDesign\odyssey-architecture`

## 1. 目的

本文档规定 Odyssey 公开设计文档中的不同类型陈述应以什么材料为依据，以及当 Figma、产品规范、领域文档和历史设计互相不一致时如何处理。

它不试图选出一份能够覆盖所有问题的“总权威文档”。Odyssey 的信息权威与问题类型有关：产品意图、交互表达、领域约束、当前设计、历史设计和探索方向分别需要不同依据。

核心规则是：

> 先判断陈述属于哪种信息，再选择对应权威来源；不能用一种证据替代另一种证据。

River 于 2026-09-14 确认：

> 描述当前产品希望设计成什么样时，以当前 Figma 为准。设计文档不以开发完成度为组织维度，当前代码不用于反向改写产品设计。如果 Figma、书面规范或领域约束之间出现无法协调的真实冲突，暂停相关写作并向 River 确认，不自行推断。

例如：

- Figma 可以证明某项交互已经被设计，但不能证明它已经实现；
- 代码可以证明当前实现如何工作，但不能单独证明这是最终产品意图；
- 历史文档可以证明最初如何思考，但不能自动成为当前产品事实；
- 实施计划可以证明计划做什么，但不能证明工作已经完成；
- Completion Report 可以作为完成线索，但仍需用代码、测试或可运行页面复核重要公开声明。

## 2. 信息类型与首选来源

| 信息类型 | 首选来源 | 辅助来源 | 不足以单独证明 |
| --- | --- | --- | --- |
| 项目设计命题 | 经确认的新版公开设计文档、产品负责人确认 | 旧 Introduction、Design Notes | 单个 UI 截图、实现细节 |
| 产品概念与对象责任 | 当前产品规范、已接受的领域约束或决策文档 | Figma Information Architecture、领域模型草案 | 旧概念页、组件名称 |
| 页面层级与导航 | 当前 Figma Information Architecture | 当前路由和浏览器验证、Figma frame | Figma 画布上的物理排列 |
| 视觉与交互意图 | 当前指定 Figma node、对应产品规范 | 实现页面截图 | 旧飞书图、组件代码本身 |
| 领域不变量 | 已接受的决策文档、当前 V1 Design Constraints、canonical contracts | 领域模型草案、领域测试 | Figma 外观、实施计划示例 |
| API 与持久化契约 | 当前 canonical contract、后端 schema/API、数据库设计 | contract handoff、实现计划 | Figma、公开概念文档 |
| 历史设计与演化 | 带日期和语境的旧文档、旧图、决策记录 | Git history、后续设计说明 | 当前 Figma 对历史原因的反推 |
| 未来方向 | 明确标记的 Roadmap、Exploratory/Deferred 设计 | Figma 探索稿、开放问题 | 当前实现或主导航中的暗示 |
| 外部平台比较 | 带观察日期的一手产品资料和实际验证 | 历史 benchmark | 无日期的功能印象 |

## 3. 来源等级不是一条全局排序

不得使用一条简单的“代码永远高于文档”或“Figma 永远高于代码”的规则。

推荐判断流程：

```text
这句话在陈述什么？
├── 产品为什么这样设计 → 产品决定 / 设计论证
├── 用户应该如何交互 → 当前产品规范 + 指定 Figma
├── 领域允许什么 → Accepted Decision + V1 Constraints + Canonical Contract
├── 当前实际上能做什么 → Code + Tests + Browser Verification
├── 最初为什么这么想 → Historical Document + Historical Visual
└── 以后可能做什么 → Explicitly Labeled Roadmap / Exploration
```

同一个主题可能需要多种证据。例如“双层 Canvas”页面至少需要：

- 旧设计材料：证明初始假设；
- 当前 Figma：证明现在如何表达；
- Information Architecture：证明页面与 UI State 的边界；
- 当前代码和浏览器验证：证明哪些交互已经实现；
- 公开设计文章：解释为什么接受这种取舍。

## 4. 当前核心来源清单

以下路径均相对于对应仓库根目录。

### 4.1 `odyssey-architecture`：公开叙事与历史设计来源

仓库：`C:\Users\13067\River\projectWorkPlace\odysseyDesign\odyssey-architecture`

| 来源 | 当前用途 | 权威范围 | 注意事项 |
| --- | --- | --- | --- |
| `doc/planning/odyssey-architecture-documentation-redesign-proposal.md` | 改版定位和范围 | 已确认的改版方向 | 是工作方案，不是产品事实来源 |
| `doc/planning/odyssey-documentation-redesign-backlog.md` | 执行追踪 | 工作顺序、验收与状态 | 任务 Done 仍需相应交付物证据 |
| `docs/introduction/introduction.md` | 历史设计命题 | 长期知识工作、外化结构、共享心智模型的早期论证 | 不能直接代表当前产品能力 |
| `docs/design-notes/001-why-spatial-ui.md` | 历史交互设计论证 | 为什么 Odyssey 不是传统表单型产品 | 需要与当前 Figma 并置使用 |
| `docs/core-concepts/pattern.md` | 历史概念来源 | 关系先于角色、Pattern 的理论动机 | 正文过度形式化；具体产品约束可能已变化 |
| `docs/core-concepts/workflow-canvas.md` | 核心设计原则与视觉来源 | Thinking Ownership、Workflow Canvas 的责任模型 | 三色原则一直有效；具体界面形态与当前 Figma 并置说明 |
| `docs/core-concepts/knowledge-space.md` | 历史概念来源 | Knowledge Space 不只是文件夹或检索结果 | 当前对象、维护流程以最新 specification 为准 |
| `docs/core-concepts/system.md` | 历史系统结构来源 | 稳定外层结构与 Pattern 复杂度分离 | 公开顶层对象已逐渐转为 OdyJourney |
| `docs/public/images/*` | 历史视觉证据 | 初始设计如何表达概念 | 使用前补充来源、日期和语境；不可冒充当前 UI |

以下内容目前不应作为公开事实来源：

- 只有标题的 `architecture/level-*.md`；
- 只有标题的 `benchmark/*.md`；
- 只有标题的 `examples/*.md`；
- 空白或未完成的概念占位页。

### 4.2 `odyssey`：当前产品与领域事实来源

仓库：`C:\Users\13067\River\projectWorkPlace\odyssey`

#### 产品信息架构

| 来源 | 权威范围 | 注意事项 |
| --- | --- | --- |
| `doc/product/information-architecture/odyssey-figma-information-architecture.md` | 产品层级、推荐路由、Page 与 UI State 边界、核心对象关系 | 描述 Figma draft；需确认哪些节点代表当前设计 |

#### 领域概念与约束

| 来源 | 权威范围 | 注意事项 |
| --- | --- | --- |
| `doc/architecture/domain/odyssey-v1-design-constraints.md` | V1 Template/Instance、Pattern、Slot、Agent、Tool、Knowledge Space 和持久化边界 | 遇到后续 Accepted Decision 时以后者为准 |
| `doc/architecture/domain/diamond-loop-pattern-decision.md` | Circular Loop 的已接受语义、公开命名和兼容键 | `diamond_loop` 仅作为持久化兼容键 |
| `doc/architecture/domain/odyssey-domain-model-draft.md` | 完整领域模型背景、对象关系和开放问题 | 文件明确为 draft；有冲突时不能压过后续约束和已接受决定 |
| `doc/architecture/execution/Canvas Execution Model.md` | Agent Workflow、核心节点、DAG 与结构化 Loop 的设计 | 执行引擎尚未完成时不得写成运行能力证明 |

#### Knowledge Space

| 来源 | 权威范围 | 注意事项 |
| --- | --- | --- |
| `doc/product/feature-specifications/knowledge-space/knowledge-space-specification.md` | 当前 Knowledge Space 产品模型、文件树/知识图谱、元数据、维护角色和 UI 责任 | 与当前 Figma 不一致时需确认当前设计 |

#### Tool 与 Variable

| 来源 | 权威范围 | 注意事项 |
| --- | --- | --- |
| `doc/product/feature-specifications/tools/Built-in Tool Configuration Specification (V1).md` | V1 内置 Tool 配置和交互 | 与无 `(V1)` 文件并存，正式引用前需确认哪个是当前版本 |
| `doc/product/feature-specifications/tools/Built-in Tool Configuration Specification.md` | Tool 设计背景或另一个版本 | 两份同名规范是当前待核验点 |
| `doc/product/feature-specifications/variables/odyssey-agent-variable-ui-spec.md` | Agent Variable UI 与交互 | 公开概念定义仍需与 canonical contract 对齐 |

#### 数据契约与持久化

| 来源 | 权威范围 | 注意事项 |
| --- | --- | --- |
| `doc/architecture/data/contracts/canonical-json-contracts-draft.md` | canonical JSON 方向和字段背景 | 文件为 draft；最终以当前 schema/API/code 为准 |
| `doc/architecture/data/contracts/v1-contract-source-mapping.md` | contract 字段与来源映射 | 需要与当前代码同步核验 |
| `doc/architecture/data/database/Odyssey Database Design.md` | 数据库实体、关系和持久化设计 | 不直接决定公开产品叙事 |
| `doc/architecture/data/storage/v1-object-storage-design.md` | Knowledge Space 文件等对象存储边界 | 仅在公开文档涉及存储事实时引用 |

#### 计划与完成报告

| 来源类型 | 权威范围 | 使用规则 |
| --- | --- | --- |
| `doc/planning/implementation/**/**implementation-plan.md` | 某一阶段计划如何实现 | 只能证明计划和预期验收标准，不能证明已完成 |
| `doc/planning/implementation/**/**completion-report.md` | 辅助理解设计曾如何被解释或落地 | 不作为当前设计的优先依据 |
| Acceptance checklist/prompt | 某阶段如何验收 | 不等于实际通过验收 |

#### 当前代码、测试与运行页面

| 来源 | 权威范围 | 使用规则 |
| --- | --- | --- |
| `apps/web/src/domain/**` | 当前前端领域命令、校验与不变量实现 | 结合测试判断，不用 UI 临时状态推导领域事实 |
| `apps/web/src/stores/**` | 当前应用状态转换和 repository 协调 | 证明实现路径，不自动成为产品设计理由 |
| `apps/web/src/features/**`、`apps/web/src/views/**` | 当前界面与交互实现 | 需结合真实页面和测试验证完整行为 |
| 前端自动化测试 | 已覆盖行为 | 只能证明测试覆盖的条件 |
| 后端 schema、service、repository 与测试 | 当前 API、持久化和领域行为 | 数据库相关声明优先使用 PostgreSQL 真实测试证据 |
| 真实浏览器验证 | 当前用户可观察行为 | 记录日期、环境、路径和验证步骤 |

代码路径可能继续演化。正式发布前应重新定位对应文件，而不是把本表中的目录名当作永久链接。

### 4.3 Figma：当前设计表达来源

文件：`Odyssey Design`  
File key: `P3EF9io2DhyhwkNYBVqB5Z`  
Root node: `1:2`

当前优先核验节点：

| Node | Frame | 可证明的内容 | 不可单独证明 |
| --- | --- | --- | --- |
| `247:33` | OdyJourney — Journey List | Journey 作为可管理对象的列表表达 | 列表功能已完整实现 |
| `59:2` | OdyJourney — Resource Library Open | Journey Editor 的系统级结构、Agent Slot 与 Workflow Preview 设计 | Guardrail、拖放、菜单等交互已实现 |
| `62:2` | Research Agent — Workflow Canvas | Agent Workflow Editor、节点语义和资源区的当前设计表达 | 执行引擎存在或节点实际可运行 |
| `147:44` | Knowledge Space — Graph Overview | 文件树与知识图谱并置、Knowledge Family 表达 | 自动索引和维护已经实现 |
| `157:2` | Knowledge Space — Document Detail | 文档内容、人可编辑元数据和系统状态的视觉边界 | 数据持久化与索引流程已实现 |

Figma 使用规则：

- 通过 node ID 引用具体 frame，不用整个文件的物理位置推导产品层级；
- 一个 frame 可能是页面状态而不是独立路由；
- 隐藏 layer、实验 frame 和旧 variant 不能自动视为当前设计；
- 截图进入公开文档前必须裁切、标注并记录 node ID；
- 当产品规范与 Figma 冲突时，先确认哪个更新，不凭视觉猜测；
- 当前 Figma 用于表达 `Current Design`，不承担证明开发完成度的责任。

## 5. 冲突处理规则

### 5.1 已接受决定与早期草案冲突

使用后续的 Accepted Decision，并在演化页面保留早期草案作为历史证据。

示例：

- 公开名称使用 Circular Loop；
- `diamond_loop` 仅保留为兼容键；
- 不能继续把它解释成旧的 branch-and-merge 结构。

### 5.2 当前产品规范与 Figma 冲突

以当前 Figma 作为产品体验意图的起点，但不得静默忽略与它冲突的书面约束。

处理步骤：

1. 检查文档状态、日期和对应 Figma node；
2. 检查是否只是 UI State 与产品对象层级的差异；
3. 查找后续决策或实现计划；
4. 仍存在真实矛盾时暂停相关写作，并向 River 确认；
5. 记录 River 的决定后再写入公开文档。

### 5.3 产品意图与当前代码不一致

设计正文只记录 `Current Design`；历史、探索和已后置内容分别使用 `Historical Design`、`Exploration` 和 `Deferred` 标注。

不得为了配合当前代码而悄悄重写设计理由。正文不主动讨论开发完成度；只有 Figma 画面可能造成严重误解时，才说明本文展示的是设计。

### 5.4 实施材料与设计来源冲突

实施计划和 Completion Report 可以帮助理解某个设计曾如何被解释或落地，但不能取代当前 Figma 和明确的设计决定。

### 5.5 历史文档与当前设计冲突

历史文档不被删除其历史意义，但必须明确语境：

- 当时的假设；
- 后来发现的问题；
- 当前决定；
- 哪些原则保留，哪些表达改变。

### 5.6 两份同类当前文档冲突

如果两份规范都没有明确状态或替代关系：

- 不通过文件名猜测；
- 不把两份内容拼接成新的事实；
- 记录冲突字段；
- 请求产品或领域负责人确认；
- 确认后在旧文件顶部增加 superseded 信息，或建立显式映射。

## 6. 当前已知冲突与风险

| ID | 主题 | 冲突或风险 | 公开写作处理 | 状态 |
| --- | --- | --- | --- | --- |
| SRC-01 | `System` 与 `OdyJourney` | 早期文档以 System 为最高对象，当前产品以 OdyJourney 表达完整能力 | 使用 `OdyJourney` 作为公开标准术语；system 只作一般描述 | Resolved by River |
| SRC-02 | Thinking Ownership | 原设计以三色空间区域解释责任；当前 Figma 继续以绿、黄、红/粉表达 User-managed、Shared、Agent-managed，并以灰色表达 System | 视为贯穿始终的同一设计；区域、节点、变量分组、标签和权限是不同界面尺度上的表达 | Resolved by Figma `119:2` and River |
| SRC-03 | 可见推理 | 旧文案可能暗示模型推理可见 | 统一改为“可见、可编辑的系统结构” | Resolved for documentation |
| SRC-04 | Agent Action in Loop | 早期领域草案禁止，当前 Figma 和后续实施允许 | 公开写作使用当前规则前需以最新约束与代码复核 | Open verification |
| SRC-05 | Guardrail | 历史材料和不同阶段方案曾出现可配置 Pattern 与固定 Single Agent 两种方向 | 当前采用可选模块、固定 Single Agent 的产品决定；发布前核对当前 Figma | Provisional |
| SRC-06 | 一个配置好的 Tool 可以在哪里复用 | 现有文档可能分别表达“只能在一个 Agent Workflow 内复用”和“整个 Workspace 都能复用” | 首版不需要回答；等编写 Tool 专题时再向 River 或对应产品决定确认 | Deferred clarification |
| SRC-07 | 两份 Built-in Tool 规范哪份是当前版本 | 产品目录同时存在带 `(V1)` 和不带 `(V1)` 的两个相近文件名，仅凭文件名无法确认替代关系 | Tool 专题开始前不把任何一份当作最终权威；届时再确认 | Deferred clarification |
| SRC-08 | Knowledge Steward / Curator | 当前 specification 有完整设计，但与当前 Figma 的关系尚需确认 | 标记为 Current Design、Exploration 或 Deferred，等待设计确认 | Open verification |
| SRC-09 | Execution engine | Execution Model 描述语义，V1 可能不包含完整执行引擎 | 不用设计文档证明可运行 | Open verification |
| SRC-10 | Figma 多版本状态 | 根页面包含大量 frame、hidden layer 和迭代稿 | 每篇文章冻结具体 node，不用根页面整体作为当前状态 | Open per page |
| SRC-11 | Research Assistant 案例 | 当前没有经过确认的最小端到端案例设计 | 不进入首版依赖；保持 Deferred | Resolved for scope |

## 7. 公开陈述的证据记录格式

每篇正式页面在工作阶段应维护一份事实表，可以在发布时隐藏或移动到 Review 记录。

```md
| Claim | Type | Source | Evidence date | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| Agent Slot opens a read-only preview | Interaction design | Figma `59:2` + IA section 4.1 | YYYY-MM-DD | Designed | Implementation pending verification |
```

最低要求：

- `Claim`：准备公开表达的事实；
- `Type`：设计命题、产品决定、交互设计、领域约束或历史事实；
- `Source`：具体文件、Figma node 或确认记录；
- `Evidence date`：证据核验日期；
- `Status`：Current Design / Exploration / Historical Design / Deferred；
- `Notes`：冲突、范围或限制。

## 8. 中文先行与英文同步的来源规则

中文版是内容与事实 Review 的语义基准。

```text
中文事实表与正文定稿
→ 英文翻译
→ 双语 Claim 对照
→ 双语一致性 Review
```

英文版：

- 使用同一组事实来源和核验日期；
- 不得通过翻译新增产品能力或弱化限制；
- Figma node、状态、图号和引用必须与中文对应；
- 如果中文事实发生变化，英文页面重新进入待同步状态；
- 英文自然化表达不能改变 Claim 的强度，例如不能把 `Designed` 翻译成暗示已经 available 的措辞。

## 9. 发布前重新核验要求

以下来源具有较高变化概率，不能只在项目开始时检查一次：

- Figma 指定节点；
- 当前 Figma 节点与设计内容类型；
- 路由和交互路径；
- Tool、Guardrail、Knowledge Space 的实现边界；
- 测试与构建结果；
- 状态页中的所有能力标签。

每篇页面在进入发布候选状态前，应记录最后核验日期。超过一个主要开发里程碑或对应模块发生实质修改时，应重新核验。

## 10. ODOC-001 完成边界

本任务完成了：

- 信息类型与对应权威来源的分类；
- 当前核心来源清单；
- Figma 的证据边界；
- 冲突处理规则；
- 已知冲突与风险登记；
- 中文先行、英文同步的来源规则；
- 公开设计结论的来源记录格式。

基线任务完成后，样章阶段仍需逐项确认当前 Figma 节点、历史材料和探索内容；Research Assistant 案例继续保持 `Deferred`。

## 11. Review 决定记录

> Reviewer: River  
> Review date: 2026-09-14  
> Result: Approved

1. 同意按信息类型选择权威来源。出现矛盾或冲突时暂停，并向 River 确认。
2. 当前产品设计意图以 Figma 为准；设计文档不以开发完成度为组织维度。
3. 同意将历史文档作为演化证据保留，但不自动代表当前事实。
4. 同意当前核心来源和冲突登记方式。
5. 确认公开标准术语采用 `OdyJourney`。
6. “Tool 复用作用域”是指一个配置好的 Tool 只能在一个 Agent Workflow 内复用，还是可以跨整个 Workspace 复用。此问题不影响首版，延后到 Tool 专题。
7. “两份 Built-in Tool Specification”是指当前产品目录同时存在带 `(V1)` 与不带 `(V1)` 的两份相近规范，尚不明确哪一份取代另一份。此问题不影响首版，延后到 Tool 专题。
