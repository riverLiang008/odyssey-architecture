# 为什么 Knowledge Space 不只是 RAG

> RAG 帮助 Agent 找到一次任务所需的信息；Knowledge Space 进一步定义知识如何被组织、理解、维护，并在多轮工作之间持续存在。

在设计 Agent 时，“给模型接一个知识库”通常意味着一条熟悉的路径：上传文件、切分文本、建立索引，再根据当前问题取回若干相关片段。

这条路径很重要。没有检索，模型很难把外部资料带进当前判断。但 Odyssey 关心的是另一层问题：**当 AI Agent 不是只回答一次问题，而是围绕同一批知识持续工作时，这些资料应该以什么结构存在？人如何理解这个结构？新的文件进入以后，已有关系如何被修订？不同 Agent 又如何共享同一片知识环境？**

仅仅提高一次检索的相关性，并不能完整回答这些问题。

因此，Odyssey 没有把 Knowledge Space 设计成 Agent Action 里的一个检索参数。它是一项独立资产：既保存人熟悉的文件组织，也表达机器可以使用的知识关系，并拥有自己的维护生命周期。

## RAG 解决进入上下文的问题

RAG 最直接地回答：面对当前问题，哪些内容值得进入模型上下文？

```text
当前问题
→ 检索相关内容
→ 放入上下文
→ 生成回答或行动
```

这是一个以当前任务为中心的过程。它关注查询与内容之间的相关性，以及有限上下文应该容纳什么。

但“被一起取回”不等于“在知识中具有同一种关系”。两个片段可能互相支持、彼此冲突、存在版本替代关系，也可能只是使用了相似词语。一次检索结果也很难独自说明：这份文档在整个主题中处于什么位置，读者应该从哪里进入，下一步又该沿哪条关系继续理解。

Odyssey 因此把检索视为进入知识的方式之一，而不是知识本身的最终形态。

这并不意味着 RAG 在 Odyssey 中消失了。检索仍然是一种重要能力，并以 Knowledge Retrieval Tool 的形式存在。Knowledge Space 负责定义知识以什么结构存在、如何被维护；Knowledge Retrieval Tool 则负责在一次具体行动中，从这片知识环境里找到适合进入上下文的内容。

它与其他 Tool 一样，可以进入 Agent Action 的 Toolbox，由 Agent 判断何时使用；也可以进入 Task，成为用户预先安排的确定性步骤。Odyssey 不是用知识图谱替代检索，而是把“知识是什么”与“这一次如何取回知识”拆成两个可以分别设计的对象。

## Knowledge Space 定义 Agent 的认知空间

在 Agent Action 中，Knowledge Spaces 与 Toolbox 被放在一起配置，但二者提供的是两种不同边界：

| 资源 | 回答的问题 | 对 Agent Action 的意义 |
| --- | --- | --- |
| **Knowledge Spaces** | Agent 可以依赖哪些信息和语义环境理解问题？ | 定义认知空间 |
| **Toolbox** | Agent 可以用哪些能力作用于问题或外部世界？ | 定义行动空间 |

Toolbox 不是 Agent 已经采取的行动，而是一组被允许使用的能力；同样，Knowledge Space 也不是一次已经拼装好的 Prompt，而是一片被允许进入和导航的知识环境。

这一区分对有边界的自主性很重要。只限制 Tool，只能回答 Agent 能做什么，却没有回答它可以基于什么知识作出判断；只提供检索结果，又容易把知识边界缩减成一次不可持续的上下文注入。

因此，一个 Agent Action 的开放式判断发生在几种边界交叉形成的空间中：Goal 定义目的，Knowledge Space 定义认知范围，Toolbox 定义行动能力，Variable 定义可读取和维护的状态。

## 同一批资料同时拥有两种结构

人通常通过目录和文件名维护资料。文件树适合表达存放位置、工作习惯和人为分类，但文件被放进同一目录，并不代表它们在语义上承担相同作用；移动文件也不应该自动改变知识之间的关系。

Odyssey 因此保留两种并列结构：

```text
Knowledge Space
├── 人维护的文件树
│   └── 文件放在哪里、如何被日常管理
└── Odyssey 维护的知识图谱
    └── 文档如何关联、形成哪些 Knowledge Families
```

文件树回答“资料放在哪里”；知识图谱回答“资料之间如何构成一片知识”。两者基于同一组文档，却不互相冒充。

![Knowledge Space 中被高亮的普通文件树](./assets/knowledge-space-file-tree-annotated.png)

*图 1a：高亮区域是人维护的普通文件树。它保留用户熟悉的文件夹与文件结构，回答资料放在哪里、如何被日常管理，但不定义文档之间的语义关系。完整界面可在 [Figma 中查看](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=147-44)。*

![Knowledge Space 同时呈现文件树、Knowledge Families 与文档关系；知识图谱区域被高亮](./assets/knowledge-space-graph-overview-annotated.png)

*图 1b：高亮区域是 Odyssey 维护的知识图谱。同一批文档可以形成跨文件夹的有向关系；四种颜色分别标出四个彼此独立的 Knowledge Families，其中 Brewing methods 展示了单份文档也可以独立构成一个 Family。完整设计可在 [Figma 中查看](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=147-44)。Figma 节点 `147:44`，修正、导出并标注于 2026-10-14。*

在图谱中，一份文档对应一个 Document Node。文档之间可以形成有方向的语义关系，例如引用、支持、解释、冲突或替代。一个 Knowledge Space 可以包含多个 Knowledge Families；暂时没有与其他文档建立关系的文档，则表现为单节点 Family。

一个 Knowledge Family 是 Knowledge Space 中一个完整的连通图：忽略关系方向后，Family 内任意两份文档之间都存在一条路径。不同 Knowledge Families 之间没有连线；如果两个区域之间建立了文档关系，它们就成为同一个连通分量，而不再是两个 Family。单独一份没有关系的文档也可以构成单节点 Family。

因此，Knowledge Family 不是文件夹的另一种外观。它表达的是由文档关系形成、可随知识变化而重新划分的连通区域，而不是用户事先决定的物理路径。

## 关系让知识具有上下文

如果 Agent 只得到若干相似片段，它仍然需要在当下自行推测片段之间的关系。Knowledge Space 希望把其中一部分关系提升为可见、可维护的设计对象。

例如，一份设计决策可能由调研记录提供证据，被后续规范采用，又被新的决策部分取代。对于关键词检索，这几份文档都可能“相关”；但对于真实判断，它们的角色并不相同。

```text
调研记录 ──supports──> 设计决策
设计决策 ──explains──> 产品规范
新决策   ──supersedes──> 旧决策
```

关系并不替模型完成推理，也不保证答案正确。它提供的是一层显式语境：人和 Agent 可以看到一份文档为什么被带入当前判断，还可以沿关系继续检查它的依据、后续影响或冲突来源。

这也是 Knowledge Space 与“把更多文本塞进上下文”之间最重要的差别。前者试图保留知识的结构，后者主要解决当前上下文的供给。

## Knowledge Space 是独立资产，而不是 Agent 的附件

Knowledge Space 不属于某一个 Agent，也不会因为一个 Agent 被删除而随之消失。Agent 和 Agent Template 保存的是对 Knowledge Space 的引用，而不是复制整套文档和图谱。

这使同一个 Knowledge Space 可以成为多个 Agent 的共同认知环境：它们可以拥有不同 Goal、Workflow 和 Toolbox，但仍然引用同一批持续维护的知识。

```text
Knowledge Space
├── 被 Agent A 引用
├── 被 Agent B 引用
└── 独立维护文档与知识关系
```

这条所有权边界避免了两个问题。第一，创建 Agent Template 不会悄悄复制一份很快分叉的知识资产；第二，修改或删除 Agent 不会破坏其他 Agent 仍在使用的知识环境。

“共享”也不意味着每个 Agent 自动获得整个 Workspace 的全部知识。只有被明确提供给 Agent Action 的 Knowledge Spaces 才构成这一步的认知空间。

## 长期知识需要维护，而不只是索引

文件集合不会保持静止。新文档会进入，旧文档会修改，引用会失效，两个来源可能互相冲突，原本孤立的材料也可能逐渐形成新的 Knowledge Family。

如果 Knowledge Space 只在上传时建立一次索引，那么它仍然是一张逐渐过期的快照。Odyssey 的设计因此区分两种维护尺度：

- **Document Curator OdyJourney** 面向局部变化。当文档新增或更新时，它负责生成初始元数据，并更新受影响的局部关系；
- **Knowledge Steward OdyJourney** 面向全局变化。它定期重新查看整个 Knowledge Space，协调跨文档关系，发现断裂、冲突、重复或需要人工确认的问题。

它们不是一组绕开 Odyssey 设计语言的特殊后台服务。按照当前方向，Document Curator 与 Knowledge Steward 本身就是用 Odyssey 搭建的两个维护型 assistant：在上层 System Pattern Canvas 中定义参与维护的 Agent 及其关系，再在下层 Agent Workflow Canvas 中定义每个 Agent 的内部行动、控制结构、Knowledge Spaces、Toolbox 与状态边界。换句话说，Knowledge Space 的维护者也服从双层 Canvas、有边界自主性和 Agent Workflow 的同一套概念语法。

两个 assistant 的具体 Pattern、Agent 分工和 Workflow 仍将在后续独立设计；这里确认的是它们应由 Odyssey 自身的组合语言表达，而不是作为不可见的系统特例存在。

这两个角色不是为了给普通索引流程换一个更像 Agent 的名字。它们表达的是两类不同责任：一次文件变化需要快速进入系统，而知识整体还需要较慢、较全面的复查。

维护结果也不应被隐藏成“系统已经理解了一切”。Knowledge Space 的设计会显式区分生命周期状态与图谱质量：系统可能正在同步，但仍保留上一份可用图谱；图谱也可能有效，却包含需要人审阅的问题。

## 人也需要看见和修订这片知识

如果知识结构只存在于检索后端，它对人仍然接近黑盒。Odyssey 因此把 Knowledge Space 设计成一个可以被浏览的工作空间，而不只是 Agent 配置面板里的一个 ID。

当前设计使用渐进式展开：

```text
Knowledge Space Overview
→ 选择 Document Node
→ Document Inspector
→ Document Detail
```

Overview 让人同时看到文件树、Knowledge Families 和文档关系；Inspector 在不丢失图谱位置的情况下展示摘要、标签、关系与状态；Document Detail 则允许更完整地阅读内容，并审阅可编辑的图谱元数据。

![Document Detail 区分可审阅元数据、只读系统状态与文档内容](./assets/knowledge-space-document-detail.png)

*图 2：Document Detail 让人从图谱进入单份文档，查看内容，并审阅 Knowledge Tags、Summary、Guide 与 References；索引时间和 Issue code 等系统状态保持只读。读者可以从这里返回图谱，而不把文档详情误当成另一套知识结构。你可以在 [Figma 中查看完整设计](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=157-2)。Figma 节点 `157:2`，导出于 2026-10-14。*

这并不意味着人必须手工维护所有边。重点是：由系统生成或调整的知识结构仍应留下可观察、可审阅和可纠正的位置。Agent 使用的认知空间，也应该是人能够进入的空间。

## 它与普通知识库、RAG 的差异在哪里

| 关注点 | 文件库 | 典型 RAG 流程 | Odyssey Knowledge Space |
| --- | --- | --- | --- |
| 主要问题 | 文件如何存放？ | 当前问题需要取回什么？ | 一片知识如何被组织、使用与长期维护？ |
| 核心结构 | 文件夹与文件 | 索引、片段与相关性 | 文件树与知识图谱并存 |
| 时间尺度 | 人工整理时 | 每次查询时 | 文档变化、周期维护与多轮任务之间 |
| 关系表达 | 多为隐含 | 可能在检索过程中临时形成 | 作为可见、可维护的图谱对象 |
| Agent 使用方式 | 读取文件 | 接收检索上下文 | 进入一个明确授权的认知空间 |
| 人的角色 | 管理文件 | 提问或配置检索 | 浏览、审阅并纠正知识结构 |
| 所有权 | 常与应用目录绑定 | 常与某条检索链绑定 | 独立资产，可被多个 Agent 引用 |

这张表不是要证明 RAG 已经过时。Knowledge Space 仍然可以使用检索来寻找入口、筛选内容和控制上下文规模。区别在于：Odyssey 不把检索层当作知识设计的全部。

## Knowledge Space 不是什么

为了避免把概念无限扩张，还需要明确几条边界。

Knowledge Space 不是 Agent 的全部记忆。它保存可持续维护的知识资产，不等于一次运行中的临时状态；后者属于 Variable 或未来更明确的运行时记忆设计。

Knowledge Space 不是 Prompt 的另一种名字，但它也不把 Prompt、Persona 等可复用文本隔离成彼此独立的资产类型。它们的本质仍然是文本：当这些内容需要被长期保存、建立关系、共同维护并提供给多个 Agent 使用时，Odyssey 将它们作为 Knowledge Space 中的文档统一管理，而不是为每一种文本用途建立一套彼此割裂的资源库。

这不等于所有运行时指令都会自动变成 Knowledge Space 文档。某次 Agent Action 的 Goal、节点配置和 Workflow 控制结构仍然承担各自的控制责任。这里区分的是：**可持续复用的文本知识由 Knowledge Space 管理；一次具体行动如何使用这些知识，仍由 Goal、Workflow 与 Tool 决定。**

Knowledge Space 也不是“事实正确性”的保证。图谱可以显示来源之间的关系和问题，却不能自动消除过期信息、错误判断或来源偏差。正因为如此，冲突、断链和待确认关系需要成为可见状态，而不是被一次成功索引掩盖。

最后，Knowledge Space 不是一个必须完全连通的完美图谱。真实知识可能包含多个 Knowledge Families、孤立文档和暂时无法确认的关系。设计的目标不是强迫所有内容连接，而是让已有关系和不确定性都能被看见。

## 这个设计的代价

把知识视为长期资产，比建立一次索引承担更多成本。

首先，关系需要治理。自动生成的关系可能过多、过弱或解释不清；如果所有“可能相关”都成为边，图谱会迅速失去意义。

其次，局部更新与全局维护之间需要清楚的协调。Document Curator 追求及时，Knowledge Steward 追求整体一致；二者如何处理冲突、版本和人工修改，必须拥有可解释的规则。

再次，图谱的视觉表达可能在文档增多后变得拥挤。Knowledge Family、筛选、聚焦和 Inspector 需要帮助人逐层进入，而不能把“全局视图”变成一团无法阅读的节点。

最后，认知空间的授权边界仍需继续细化。一个 Agent 能引用哪个 Knowledge Space，不等于它应该读取其中每份文档；敏感内容、权限继承、审计和不同 Agent 的访问范围，不能只靠 Canvas 上的一次拖放解决。

这些代价说明，Knowledge Space 不是一个更炫的知识库界面。它要求 Odyssey 同时设计信息结构、维护责任、资产所有权和 Agent 的认知边界。

## 为什么 Odyssey 仍然选择它

Odyssey 想设计的不是只在一次对话中显得聪明的 Agent，而是能够围绕一组持续变化的知识反复工作、被人检查，并与其他 Agent 协作的系统。

在这样的系统中，检索仍然必要，却不再足够。Agent 需要知道它可以依赖哪片知识；人需要看见这片知识如何组织；系统需要在文档变化后继续维护关系；多个 Agent 还需要在不复制资产的情况下共享同一认知环境。

因此，Knowledge Space 的设计命题不是“用图谱替代 RAG”，而是：

> **让检索发生在一片有结构、有所有权、有维护责任，也能被人审阅的知识环境中。**

## 本文术语

| 术语 | 本文中的含义 |
| --- | --- |
| **Knowledge Space** | 由同一根目录下的文档、面向人的文件树和面向语义关系的知识图谱共同构成的独立知识资产。 |
| **Knowledge Family** | Knowledge Space 中由文档关系形成的一个完整连通图；不同 Families 之间没有连线，单节点也可以构成一个 Family。 |
| **Document Node** | 知识图谱中代表一份已纳入管理的文档的节点。 |
| **Document Curator OdyJourney** | 面向文档新增或修改，负责初始元数据与局部图谱更新的设计职责。 |
| **Knowledge Steward OdyJourney** | 面向整个 Knowledge Space，负责关系协调、问题发现与全局维护的设计职责。 |
| **认知空间** | Agent Action 被明确允许引用和导航的信息与语义环境。 |
| **行动空间** | Agent Action 通过 Toolbox 被明确允许使用的能力范围。 |

## 设计来源

- Knowledge Space 当前产品模型：`odyssey/doc/product/feature-specifications/knowledge-space/knowledge-space-specification.md`；
- 当前产品层级与资产边界：`odyssey/doc/product/information-architecture/odyssey-figma-information-architecture.md`；
- Knowledge Space 独立资产与引用规则：`odyssey/doc/architecture/domain/odyssey-v1-design-constraints.md`；
- 当前 Knowledge Space 图谱设计：[Figma `Knowledge Space — Graph Overview`（`147:44`）](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=147-44)；
- 当前 Document Detail 设计：[Figma `Knowledge Space — Document Detail`（`157:2`）](https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=157-2)；
- Agent Action 中 Knowledge Spaces 与 Toolbox 的边界：`doc/samples/bounded-autonomy/why-bounded-autonomy.zh.md`；
- 历史 Knowledge Space 论证：`docs/core-concepts/knowledge-space.md`。
