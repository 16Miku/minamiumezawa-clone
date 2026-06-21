# 梅澤美波 OFFICIAL WEBSITE - Clone

[minamiumezawa.jp](https://minamiumezawa.jp/) 的复刻项目，使用现代前端技术栈重新实现。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16 | React 框架（App Router） |
| React | 19 | UI 库 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 4 | 原子化样式 |
| Framer Motion | 11 | 动画效果 |

## 功能

- **首页**：全屏 Hero 区域，轮播图，NEWS / SCHEDULE / PROFILE / WORKS 预览
- **NEWS**：新闻列表和详情页
- **SCHEDULE**：日程日历查看
- **PROFILE**：个人资料和简介
- **WORKS**：作品分类展示（MODEL / STAGE / MOVIE / TV / BOOK）
- **CONTACT**：联系方式
- **响应式设计**：适配桌面端和移动端
- **动画效果**：页面滚动淡入、导航栏过渡、轮播图等

## 快速开始

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

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── news/page.tsx       # 新闻页
│   ├── schedule/page.tsx   # 日程页
│   ├── profile/page.tsx    # 个人资料页
│   ├── works/page.tsx      # 作品展示页
│   └── contact/page.tsx    # 联系方式页
├── components/             # 可复用组件
│   ├── Navbar.tsx          # 导航栏
│   ├── SocialLinks.tsx     # 社交链接
│   └── animations.tsx      # 动画组件（FadeIn 等）
└── lib/                    # 工具函数和数据
```

## 设计说明

- **配色方案**：深色主题（背景 `#0a0a0a`），与原站保持一致
- **字体**：使用 Geist 字体，搭配日文衬线体
- **动画**：Framer Motion 驱动的页面过渡和滚动动画
- **布局**：最大宽度 `max-w-4xl`，居中排版

## 许可证

本项目仅供学习交流使用，所有图片和内容的版权归梅澤美波及其经纪公司所有。
