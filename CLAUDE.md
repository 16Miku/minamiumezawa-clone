# CLAUDE.md - 开发指南

## 项目概述

这是 [minamiumezawa.jp](https://minamiumezawa.jp/) 的复刻项目，使用 Next.js 16 App Router 构建。

## 技术约定

### 框架
- **Next.js 16**：使用 App Router，所有页面放在 `src/app/` 目录下
- **React 19**：Server Components 为默认，需要交互的组件添加 `"use client"` 指令
- **Tailwind CSS 4**：使用 `@theme inline` 定义设计 token，避免在 `tailwind.config.ts` 中配置

### 代码风格
- 使用 TypeScript strict 模式
- 组件使用函数式声明 `export default function ComponentName()`
- CSS 使用 Tailwind 原子类，不自定义 CSS 类名
- 颜色使用 `white/60`、`bg-white/5` 等 Tailwind 透明度语法
- 日文内容保持原样，不做翻译

### 目录约定
- `src/app/` - 路由页面（每个子目录一个 route）
- `src/components/` - 可复用的 React 组件
- `src/lib/` - 工具函数、类型定义、数据文件

### 动画
- 使用 Framer Motion
- 通用动画组件在 `src/components/animations.tsx`
- `FadeIn` 组件：滚动进入视口时的淡入动画
- `StaggerContainer` / `StaggerItem`：交错动画

### 响应式断点
- `sm:` - 640px
- `md:` - 768px（导航切换移动/桌面端）
- `lg:` - 1024px

### 设计 Token
- 背景色：`#0a0a0a`（深黑）
- 强调色：`#c4a77d`（金色，定义在 CSS 变量中）
- 文字层级：`text-white` > `text-white/80` > `text-white/60` > `text-white/40`

## 常用命令

```bash
npm run dev     # 开发服务器（端口 3000）
npm run build   # 生产构建
npm run lint    # ESLint 检查
```

## 注意事项

- 图片资源使用 `next/image` 组件，需配置 `next.config.ts` 中的 `remotePatterns`
- 外部链接统一使用 `target="_blank" rel="noopener noreferrer"`
- 移动端导航使用 `AnimatePresence` 实现展开/收起动画
