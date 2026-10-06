# Odyssey 设计文档工作区

这个目录存放 Odyssey 设计文档改版的规划、写作基线和中文样章工作稿。公开站点内容仍位于仓库的 `docs/`；这里主要用于 River Review 和改版过程追踪。

## 建议阅读顺序

1. [改版方案](planning/odyssey-architecture-documentation-redesign-proposal.md)
2. [执行 Backlog](planning/odyssey-documentation-redesign-backlog.md)
3. [权威来源规则](foundations/documentation-source-of-truth.md)
4. [首版术语](foundations/first-release-terminology.md)
5. [可见性表述规则](foundations/visibility-language-guidelines.md)
6. [设计内容类型与来源标注规则](foundations/status-and-evidence-guidelines.md)
7. [双层 Canvas 样章命题与边界](samples/two-level-canvas/double-layer-canvas-sample-scope.md)
8. [《为什么是双层 Canvas》中文工作稿](samples/two-level-canvas/why-two-level-canvas.zh.md)

## 目录结构

```text
doc/
├── README.md
├── planning/
│   ├── odyssey-architecture-documentation-redesign-proposal.md
│   └── odyssey-documentation-redesign-backlog.md
├── foundations/
│   ├── documentation-source-of-truth.md
│   ├── first-release-terminology.md
│   ├── status-and-evidence-guidelines.md
│   └── visibility-language-guidelines.md
└── samples/
    └── two-level-canvas/
        ├── double-layer-canvas-sample-scope.md
        └── why-two-level-canvas.zh.md
```

## 各目录职责

### `planning/`

记录为什么要改版、首版范围、执行顺序、任务状态和 Review 结论。设计事实不要只写在 Backlog 中，应进入相应的 foundation 或样章文件。

### `foundations/`

存放所有正式写作共同遵守的基线：什么来源回答什么问题、使用哪些术语、怎样描述可见性，以及如何区分当前设计、历史设计、探索与后置内容。

### `samples/`

按主题保存中文先行的样章工作。每个主题可以包含命题边界、素材清单、中文稿和后续英文稿；不要把不同主题的临时材料重新堆回 `doc/` 根目录。

## 当前状态

- M0 基线冻结：`Done`
- ODOC-101 双层 Canvas 命题与边界：`Review`
- 《为什么是双层 Canvas》：中文工作稿已建立，图片仍待 ODOC-102–105 补齐
- 英文版：尚未启动，等待中文定稿

任务状态以 [执行 Backlog](planning/odyssey-documentation-redesign-backlog.md) 为准。
