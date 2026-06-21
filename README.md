# 梅澤美波 OFFICIAL WEBSITE - Clone

[minamiumezawa.jp](https://minamiumezawa.jp/) 的复刻项目，使用现代前端技术栈重新实现。

---

## 🔗 在线访问

- **Render 部署**: https://minamiumezawa-fan.onrender.com

---

## 🛠 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16 | React 框架（App Router） |
| React | 19 | UI 库 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 4 | 原子化样式 |
| Framer Motion | 12 | 动画效果 |

---

## ✨ 功能特性

- **首页**：全屏 Hero 区域，轮播图，NEWS / SCHEDULE / PROFILE / WORKS 预览
- **NEWS**：新闻列表和详情
- **SCHEDULE**：日程日历查看
- **PROFILE**：个人资料和简介
- **WORKS**：作品分类展示（MODEL / STAGE / MOVIE / TV / BOOK）
- **CONTACT**：联系方式
- **响应式设计**：适配桌面端和移动端
- **动画效果**：页面滚动淡入、导航栏过渡、轮播图等
- **主题切换**：支持 Light/Dark 模式切换（通过导航栏右侧按钮）

---

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 生产构建

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

---

## 📐 项目结构

```
src/
├── app/                          # Next.js App Router 页面
│   ├── layout.tsx                # 全局布局
│   ├── page.tsx                  # 首页
│   ├── globals.css               # 全局样式
│   ├── news/page.tsx            # 新闻页
│   ├── schedule/page.tsx        # 日程页
│   ├── profile/page.tsx         # 个人资料页
│   ├── works/page.tsx           # 作品展示页
│   └── contact/page.tsx         # 联系方式页
├── components/                   # 可复用组件
│   ├── Navbar.tsx               # 导航栏
│   ├── SocialLinks.tsx          # 社交链接
│   ├── HeroSlider.tsx           # 首页轮播图
│   ├── ThemeProvider.tsx        # 主题上下文管理
│   ├── ThemeToggle.tsx          # 主题切换按钮
│   └── animations.tsx           # 动画组件（FadeIn 等）
└── lib/                          # 工具函数和数据
```

---

## 🎨 设计说明

- **配色方案**：深色主题（背景 `#0a0a0a`），与原站保持一致；通过 ThemeProvider 支持 Light 模式切换
- **字体**：使用 Geist 字体，搭配日文字体回退
- **动画**：Framer Motion 驱动的页面过渡和滚动动画
- **布局**：最大宽度 `max-w-4xl`，居中排版
- **主题系统**：
  - 全局 CSS 变量（`:root` 亮色 / `.dark` 暗色）
  - `ThemeProvider` 管理主题状态（localStorage 持久化 + 系统偏好检测）
  - `ThemeToggle` 按钮集成在导航栏
  - 所有组件使用语义化颜色类名（`bg-background` / `text-foreground` / `text-muted-foreground` / `border-border` / `bg-card`）

---

## 📦 部署

详见 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取 Render 部署的完整指南。

---

## 🗄 开发总结

### 项目背景
本次项目是对梅澤美波官方粉丝网站 [minamiumezawa.jp](https://minamiumezawa.jp) 的复刻，目的是练习 Next.js 16 + Tailwind CSS 4 + Framer Motion 的实战应用。

### 技术挑战与解决方案

| 挑战 | 解决方案 |
|------|----------|
| 主题切换功能 | 重写 `ThemeProvider` + `ThemeToggle` 组件，使用 Tailwind v4 `@theme inline` 映射 CSS 变量 |
| 硬编码颜色值 | 全局替换为语义化类名（`text-foreground` / `bg-card` / `border-border` 等） |
| 图片远程加载 | 配置 `next.config.ts` 的 `remotePatterns`，下载图片保存到 `public/` 目录 |
| 轮播图动画 | Framer Motion `AnimatePresence` + CSS 过渡实现平滑切换 |
| 移动端导航 | `AnimatePresence` + 动态高度动画实现展开/收起 |
| Render 部署冷启动 | 了解 Free Plan 限制：15 分钟无流量休眠，首次访问需 30 秒冷启动 |

### 关键决策
- **框架选择**：Next.js App Router 支持静态页面生成（SSG），渲染速度快，部署成本低
- **CSS 架构**：Tailwind v4 `@theme inline` 将 CSS 变量映射为工具类，直接替代了 `tailwind.config.ts`
- **图片处理**：使用 `next/image` 组件，配合 `remotePatterns` 和 `public/` 目录
- **主题系统**：React Context + CSS 变量，避免引入 `next-themes` 等第三方依赖

### 待改进项
- [ ] 添加单元测试（Jest / Vitest）
- [ ] 集成 Vercel Speed Insights 或 Lighthouse CI 监控性能
- [ ] 为图片添加 loading="lazy" 和优化后的 sizes 属性
- [ ] 添加国际化支持（i18n）
- [ ] 集成 CMS（如 Sanity）管理动态内容

### 学习收获
1. **Tailwind CSS 4 的新特性**：`@theme inline` 的变量映射机制，直接替代了传统 `tailwind.config.ts`
2. **Next.js App Router**：深刻理解 Server Components 和 Client Components 的适用场景
3. **Framer Motion**：`whileInView` 实现滚动触发动画，`AnimatePresence` 实现页面过渡
4. **Render 部署**：了解 Free / Starter / Pro 各等级的差异，以及在 CI/CD 中的最佳实践

---

## 📜 许可证

本项目仅供学习交流使用，所有图片和内容的版权归梅澤美波及其经纪公司所有。
