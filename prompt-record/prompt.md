# 本项目主要提示词记录

本文档记录了本次 minamiumezawa.jp 复刻项目开发过程中的主要用户提示词，用于复盘和后续参考。

---

## 初始化项目复刻

```
https://minamiumezawa.jp/
我想要复刻这个网站，该如何设定任务，调用goal来执行呢？
```

> 注：Claude Code 调用了 BrightData MCP 来爬取网站信息。

---

## Goal 1：项目初始化和基础结构

```
/goal 
"复刻 minamiumezawa.jp：
1. 初始化 Next.js+TS+Tailwind 项目 
2. 实现导航和 Hero 
3. 实现 NEWS 模块 
4. 实现 SCHEDULE 日历 
5. 实现 PROFILE 页面
6. 实现 WORKS 展示页 
7. 添加动画和响应式"
```

---

## Goal 2：Git 管理、文档和配图

```
/goal 
[
  1、使用git管理本项目，提交已完成内容。
  2、为本项目添加你认为需要的README.md和CLAUDE.md等说明文档和开发文档。
  3、继续把 https://minamiumezawa.jp/ 网站各个页面的全部配图和首页轮播图效果也完整进行复刻。
]
```

---

## Goal 3：修复主题切换和推送

```
/goal 
1、修复网站无法正确切换Light和Dark模式的问题，然后重启项目供我检查
2、提交修复，使用详细的中文版git提交信息
3、推送项目代码到 https://github.com/16Miku/minamiumezawa-clone.git
```

---

## 部署请求

```
已经成功推送了。请指导我在render平台部署该项目
```

---

## Goal 4：部署总结和项目复盘

```
/goal
  1、生成部署总结文档，以便以后复用。
  2、我发现当前项目已经具备light 和 dark切换的功能了，是我之前根据错误的按钮判断错误了
  3、请你对本次项目开发进行你认为需要的总结。
  4、提交和推送内容
```
