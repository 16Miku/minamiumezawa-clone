# 部署指南 — minamiumezawa-clone

本文档记录了将 Next.js 项目部署到 [Render](https://render.com) 的完整流程，供后续项目复用。

---

## 1. 前提条件

| 条件 | 说明 |
|------|------|
| GitHub 仓库 | 项目代码已推送到 GitHub（如 `https://github.com/16Miku/minamiumezawa-clone.git`） |
| Render 账号 | 在 [render.com](https://render.com) 注册并关联 GitHub 账号 |
| `package.json` 脚本 | 必须包含 `build` 和 `start` 脚本 |

## 2. 选择服务类型

> **⚠️ 关键选择：Next.js 项目必须选 Web Service，不能选 Static Site！**

| 服务类型 | 适用场景 | Next.js 兼容性 |
|----------|----------|----------------|
| **Web Service** | 需要 Node.js 运行时的应用（API、SSR、ISR） | ✅ 推荐 |
| Static Site | 纯前端静态文件（HTML/CSS/JS） | ❌ 不支持 SSR |

**原因**：Next.js 的 `next start` 需要 Node.js 服务器运行，Static Site 模式无法启动服务端进程。

## 3. 创建 Web Service

### 3.1 通过 Dashboard（推荐）

1. 登录 https://dashboard.render.com
2. 点击 **"New"** → **"Web Service"**
3. 选择 GitHub 仓库（如 `16Miku/minamiumezawa-clone`）
4. 填写以下配置：

| 字段 | 值 | 说明 |
|------|-----|------|
| **Name** | `minamiumezawa-fan` | 服务名称，决定子域名 |
| **Branch** | `master` | 部署分支 |
| **Root Directory** | 留空 | 除非项目在子目录中 |
| **Runtime** | `Node` | Next.js 使用 Node.js |
| **Build Command** | `npm install && npm run build` | 安装依赖 + 构建项目 |
| **Start Command** | `npm start` | 启动生产服务器 |
| **Plan** | `Free` | 免费计划，可后续升级 |
| **Instance Type** | Free | 512MB RAM，共享 CPU |

5. 点击 **"Create Web Service"**

### 3.2 通过 Render MCP（自动化）

如果已配置 Render API Key，可通过 MCP 工具自动创建：

```javascript
mcp__render__create_web_service({
  name: "minamiumezawa-fan",
  repo: "https://github.com/16Miku/minamiumezawa-clone.git",
  branch: "master",
  runtime: "node",
  buildCommand: "npm install && npm run build",
  startCommand: "npm start",
  plan: "free",
  autoDeploy: "yes"
})
```

## 4. 环境变量

| 变量名 | 值 | 必要性 |
|--------|-----|--------|
| `NODE_VERSION` | `20` | 可选，指定 Node.js 版本 |
| `PORT` | 自动分配 | 无需设置，Render 自动处理 |

## 5. 部署过程

部署日志参考：

```
==> Cloning from https://github.com16Miku/minamiumezawa-clone
==> Checking out commit 9329a49... in branch master
==> Using Node.js version 24.14.1 (default)
==> Running build command 'npm install && npm run build'...
    added 371 packages, and audited 372 packages in 11s
==> next build
    ▲ Next.js 16.2.9 (Turbopack)
    ✓ Compiled successfully in 4.6s
    ✓ Generating static pages (9/9) in 493ms
==> Uploading build...
==> Build successful 🎉
==> Running 'npm run start'
    ▲ Next.js 16.2.9
    - Local: http://localhost:10000
    ✓ Ready in 1107ms
==> Your service is live 🎉
==> Available at https://minamiumezawa-fan.onrender.com
```

## 6. 常见问题

### Q: 部署成功但打开显示 "Not Found"？

**A:** Render Free plan 服务在 15 分钟无流量后会**休眠**。首次访问需要约 30 秒冷启动，请耐心等待。

解决方法：
- 等待 30 秒后刷新
- 使用 `Ctrl+Shift+R` 强制刷新（清除缓存）
- 用无痕模式重新打开

### Q: 构建时 TypeScript 报错？

**A:** 确保 `tsconfig.json` 中 `strict` 模式的类型都正确，本地先运行 `npm run build` 验证。

### Q: 图片加载 404？

**A:** 确保：
1. 图片文件在 `public/` 目录下
2. `next.config.ts` 中配置了 `remotePatterns`（外部图片）
3. 使用 `next/image` 组件的 `fill` + `object-cover` 模式

### Q: 想使用自定义域名？

**A:** Render 支持自定义域名，步骤：
1. 在 Render Dashboard → Settings → Custom Domains 添加域名
2. 在域名注册商处添加 CNAME 记录指向 `minamiumezawa-fan.onrender.com`
3. 等待 DNS 传播（最长 48 小时）

## 7. Free Plan 限制

| 限制 | 说明 |
|------|------|
| 休眠 | 15 分钟无流量后服务休眠，下次访问需 30 秒冷启动 |
| 内存 | 512 MB RAM |
| 带宽 | 100 GB/月 |
| 构建时间 | 500 分钟/月 |
| SSL | 自动提供 HTTPS |

## 8. 项目信息快照

| 项目 | 值 |
|------|-----|
| 服务名称 | minamiumezawa-fan |
| 访问地址 | https://minamiumezawa-fan.onrender.com |
| GitHub 仓库 | https://github.com/16Miku/minamiumezawa-clone |
| 部署分支 | master |
| 运行时 | Node.js |
| 框架 | Next.js 16.2.9 |
| 计划 | Free |
