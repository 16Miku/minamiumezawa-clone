# CLAUDE.md - 开发指南

## 项目概述

这是 [minamiumezawa.jp](https://minamiumezawa.jp/) 的复刻项目，使用 Next.js 16 App Router 构建。

**在线地址**: https://minamiumezawa-fan.onrender.com

## 技术约定

### 框架
- **Next.js 16**：使用 App Router，所有页面放在 `src/app/` 目录下
- **React 19**：Server Components 为默认，需要交互的组件添加 `"use client"` 指令
- **Tailwind CSS 4**：使用 `@theme inline` 定义设计 token，避免在 `tailwind.config.ts` 中配置

### 代码风格
- 使用 TypeScript strict 模式
- 组件使用函数式声明 `export default function ComponentName()`
- CSS 使用 Tailwind 原子类，不自定义 CSS 类名
- 颜色使用语义化类名（`bg-background`、`text-foreground`、`text-muted-foreground`、`border-border`、`bg-card`），而非硬编码值
- 日文内容保持原样，不做翻译

### 目录约定
- `src/app/` - 路由页面（每个子目录一个 route）
- `src/components/` - 可复用的 React 组件
- `src/lib/` - 工具函数、类型定义、数据文件

### 主题系统

本项目支持 Light/Dark 模式切换，核心实现：

- **`src/components/ThemeProvider.tsx`**：React Context 管理主题状态
  - 从 `localStorage` 读取用户偏好主题
  - 支持 `prefers-color-scheme` 系统偏好检测
  - 通过操作 `document.documentElement.classList` 切换 `.dark` / `.light`
  
- **`src/components/ThemeToggle.tsx`**：导航栏中的主题切换按钮
  - 集成在 `Navbar.tsx` 桌面端和移动端
  - 太阳/月亮图标过渡动画
  
- **CSS 变量**：`
    - `:root` 定义亮色模式变量
    - `.dark` 定义暗色模式变量
    - `@theme inline` 将变量映射为 Tailwind 工具类

### 颜色使用规则

| 不要使用 | 使用 |
|---------|------|
| `bg-[#0a0a0a]` | `bg-background` |
| `text-white` | `text-foreground` |
| `text-white/60` | `text-muted-foreground` |
| `border-white/10` | `border-border` |
| `bg-white/5` | `bg-card` |
| `bg-white/10` | `bg-card-hover` |

### 动画
- 使用 Framer Motion
- 通用动画组件在 `src/components/animations.tsx`
- `FadeIn` 组件：滚动进入视口时的淡入动画
- `StaggerContainer` / `StaggerItem`：交错动画
- **HeroSlider 轮播图动画**（2026.06.22 优化）：
  - 淡入淡出效果（opacity: 0 → 1）
  - Ken Burns 效果（scale: 1.05 → 1，时长 8 秒）
  - 过渡时长：1.2 秒
  - 轮播间隔：5 秒
  - 字体布局：tracking-[0.4em] / 0.6em，fontWeight: 200 / 300

### 响应式断点
- `sm:` - 640px
- `md:` - 768px（导航切换移动/桌面端）
- `lg:` - 1024px

### 设计 Token
- 亮色背景：`#ffffff`
- 暗色背景：`#0a0a0a`（原站风格，默认暗色）
- 强调色：`#c4a77d`（金色，定义在 CSS 变量中）
- 语义化颜色：`text-foreground` > `text-foreground/80` > `text-muted-foreground` > `text-muted-foreground/50`

## 常用命令

```bash
npm run dev     # 开发服务器（端口 3000）
npm run build   # 生产构建
npm run lint    # ESLint 检查
```

## 注意事项

- **主题切换**：添加新页面时，必须避免使用 `text-white`、`bg-[#0a0a0a]` 等硬编码颜色，改用 `text-foreground`、`bg-background` 等语义化类名
- **图片资源**：使用 `next/image` 组件，需配置 `next.config.ts` 中的 `remotePatterns`
- **外部链接**：统一使用 `target="_blank" rel="noopener noreferrer"`
- **移动端导航**：使用 `AnimatePresence` 实现展开/收起动画
- **部署**：Free plan 服务在 15 分钟无流量后休眠，首次访问需约 30 秒冷启动
