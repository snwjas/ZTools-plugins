# plain-text

即开即写的轻量文本编辑器，支持纯文本和 Markdown 双模式。自动保存、多文稿管理、一键导出 .txt/.md 文件。

## 功能

- **纯文本 / Markdown 双模式** — Markdown 模式下左右分栏实时预览
- **多文稿管理** — 新建、切换、删除，侧边抽屉一览
- **自动保存** — 输入防抖 300ms 自动写入 localStorage
- **字号切换** — 14 / 16 / 18 / 20px 循环切换
- **行号显示** — 编辑区左侧同步滚动
- **一键导出** — 点击按钮或 Ctrl+S，导出 .txt 或 .md 到下载目录并定位文件
- **暗色模式** — 跟随系统偏好自动切换

## 触发指令

`编辑` `笔记` `记事` `文本` `wb` `bj` `js` `edit`

## 项目结构

```
├── public/
│   ├── logo.png
│   ├── plugin.json
│   └── preload/
│       ├── package.json
│       └── services.js        # 文件读写能力
├── src/
│   ├── main.tsx
│   ├── main.css
│   ├── App.tsx
│   ├── Editor/
│   │   ├── index.tsx          # 主编辑器组件
│   │   └── index.css
│   ├── stores/
│   │   └── notes.ts           # 文稿数据管理
│   └── env.d.ts
├── index.html
├── vite.config.js
├── tsconfig.json
└── package.json
```

## 开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物输出到 dist/
```

## 技术栈

React 19 + TypeScript + Vite + marked + DOMPurify

## 开源协议

MIT License
