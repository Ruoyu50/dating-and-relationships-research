# COMPENDIUM 使用说明

PSDS 3121 — *The Future of 2046* 期末 Compendium 的构建流程。

---

## 1. 文件清单

| 文件 | 是什么 | 改不改 |
|---|---|---|
| `COMPENDIUM.md` | **源文件** — 所有正文都在这里 | ✏️ 改这个 |
| `COMPENDIUM.docx` | 用 pandoc 从 md 生成的 Word 文档 | ❌ **不要直接改**(每次 build 都会覆盖) |
| `reference.docx` | Word 样式模板 — 控制字体、标题、行距等 | ✏️ 在 Word 里改样式,保存原文件名 |
| `build.sh` | 一键转换脚本 | 一般不动 |
| `README.md` | 本文件 | — |

---

## 2. 日常工作流

```
改 COMPENDIUM.md  →  ./build.sh  →  打开 COMPENDIUM.docx 检查
```

### build.sh 三种用法

```bash
./build.sh           # 转一次
./build.sh --open    # 转一次并打开 docx
./build.sh --watch   # 监听 md,改一次自动转一次 (需要 fswatch)
```

第一次用 watch 模式要先装 fswatch:

```bash
brew install fswatch
```

---

## 3. 改样式 (字体 / 标题 / 行距 / 页边距)

样式不在 md 里改 — 在 `reference.docx` 里改。

1. Word 打开 `reference.docx`
2. 改 **Title / Subtitle / Heading 1 / Heading 2 / Normal** 等样式
   - 方法:在 Word 的"样式"面板里右键样式 → 修改
   - 不要直接改某一段文字 — 要改的是"样式定义"
3. **保存** (Cmd-S),**不要 Save As**,要保留 `reference.docx` 这个文件名
4. 下次 `./build.sh` 会自动套用新样式

### 常见调整

- **Heading 1 加分页** — 修改 Heading 1 样式 → 段落 → 分页 → 勾选"段前分页",这样每个大章节都会另起一页
- **正文行距** — 修改 Normal → 段落 → 行距 1.5 或 2.0
- **Title 字号** — 修改 Title 样式 → 字体大小

---

## 4. 改正文 (COMPENDIUM.md)

Markdown 语法快速参考:

| 写法 | 效果 |
|---|---|
| `## 1. 标题` | 一级章节 |
| `### 1.1 小节` | 二级小节 |
| `**粗体**` | **粗体** |
| `*斜体*` | *斜体* |
| `- 项目` | 无序列表 |
| `> 引用` | 引用块 |
| 表格 | 用 `\| 列 \| 列 \|` |

封面元数据在 md 文件最顶部的 YAML 区块 (`---` 之间):

```yaml
title: "..."
subtitle: "..."
author:
  - "Sophie Wetherby"
  - ...
date: "13 May 2026"
```

---

## 5. 当前状态

正文里有三处 placeholder,等队友补:

- §7 Futures Wheel
- §8 Three-Step Rapid Forecasting
- §10 Backcasting

§9 Cone of Plausibility 完整,Connection Club 相关章节 (§11–§14) 完整。

---

## 6. 提交 docx 之前的检查清单

- [ ] 运行 `./build.sh` 用最新 md 生成 docx
- [ ] Word 里打开 `COMPENDIUM.docx`
- [ ] 目录页 (TOC) 第一次打开可能是空 — 右键 → **Update Field** 刷新页码
- [ ] 通读一遍,确认 placeholder 都已替换 (Cmd-F 搜 "Placeholder")
- [ ] 检查 cover 信息无误 (名字、课程代码、日期)
- [ ] 关掉 Word 再交 — 避免占用文件锁

---

## 7. 排错

| 报错 | 解决 |
|---|---|
| `pandoc: command not found` | `brew install pandoc` |
| `fswatch not installed` (watch 模式) | `brew install fswatch` |
| `permission denied: ./build.sh` | `chmod +x build.sh` |
| TOC 页码全是 1 或不更新 | Word 里右键目录 → Update Field → Update entire table |
| 改了 reference.docx 但没生效 | 确认文件名仍是 `reference.docx`,且和 build.sh 在同一目录 |
| 改了 md 但 docx 没变 | 确认存盘了 md,且 `./build.sh` 没报错 |

---

## 8. 文件夹结构 (参考)

```
Final/
├── COMPENDIUM.md           # 源文件
├── COMPENDIUM.docx         # 输出 (自动生成)
├── reference.docx          # 样式模板
├── build.sh                # 构建脚本
├── README.md               # 本文件
├── presentation_script.md  # 演讲稿
├── sprint01/               # Sprint 1 原始研究
│   ├── signals.md
│   ├── steep.md
│   └── raw_capture/        # 5 个数据源原文件
└── sprint02/               # Sprint 2 框架
    └── Cone_of_Plausibility.{md,pdf}
```
