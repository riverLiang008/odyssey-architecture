# 《为什么是 Odyssey》视觉计划

> Status: Planned
> Updated: 2026-10-14
> Applies to: Chinese and English versions

本章需要帮助读者建立整体心智模型，而不是再次讲完四篇设计决策。视觉素材应承担“建立关系”和“展示过渡”的责任，详细论证继续交给对应章节。

## Visual 1 — Odyssey mental model

### 位置

放在“OdyJourney 把能力本身变成可持续编辑的对象”一节中，位于 OdyJourney 定义之后。

### 形式

一张基于当前 Figma 设计重新裁切、组合和标注的静态图。建议同时呈现：

1. OdyJourney / Journey Canvas：完整能力和系统级协作结构；
2. Agent Slot → Workflow Preview：从系统位置进入一个 Agent；
3. Agent Workflow Canvas：单个 Agent 内部的行动与控制结构；
4. Knowledge Space：作为可被 Agent 引用、但不隶属于 Agent 的独立认知环境。

### 叙事边界

- 图只回答“这些对象如何组成同一套系统”；
- 不在本章重复节点、Pattern 或 Knowledge Family 的详细规则；
- 使用 4–6 个编号标注和一条清楚的阅读路径；
- 图注链接到代表性的 Figma 节点，并把详细解释导向四篇设计决策。

### 当前文字 fallback

在图片完成前保留正文中的 ASCII 层级图。正式图片接入后，再判断 ASCII 图是否仍有辅助价值；不提前删除。

## Visual 2 — From Journey to Agent Workflow

### 位置

放在“四个关键决定来自同一个问题”一节中，紧跟“双层 Canvas”段落。

### 推荐形式

一个短 GIF 或同等的轻量循环动效，展示：

```text
Journey Canvas
→ select configured Agent Slot
→ open read-only Workflow Preview
→ open full Agent Workflow Canvas
```

建议时长 5–8 秒，停留点清楚，不依赖鼠标快速移动来解释交互。关键状态之间使用少量关键帧 Motion，突出尺度变化和上下文保持。

### 素材来源

- 首选：从当前 Figma 状态生成受控动效，确保视觉与设计文档一致；
- 可选：以本地 demo 为动作参考，或在界面与 Figma 已一致时录制基础画面；
- 不直接使用包含调试状态、未完成面板或无关导航操作的长录屏。

### 静态 fallback

如果 GIF 尚未完成，使用已经存在的 `cross-level-transition.png` 或重新制作的三状态静态序列。正式网页不显示灰色占位图。

## Visual 3 — Four decisions, one question

### 位置

放在“四个关键决定”四段文字之后。

### 形式

优先使用一张简化概念图，而不是第二个操作 GIF：

```text
持续可编辑的 Agent capability
├── 两种设计尺度 → Two Canvas Levels
├── 协作如何成立 → Relationships Before Roles
├── 决定由谁承担 → Bounded Autonomy
└── 知识如何持续 → Knowledge Space Beyond RAG
```

四个分支应指向已有章节，而不是各自再塞一张产品截图。

### 占位规则

- 工作计划允许存在 `Visual TODO`；
- 正式正文不使用灰色图片占位；
- 素材未完成时，保留已经成立的文字论证；
- 图片加入后，中英文共享同一视觉，只分别维护 alt text 与图注。
