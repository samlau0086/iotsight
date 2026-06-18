# GitHub 与 Cloudflare CMS 配置手册

最后更新：2026-06-18

## 目标

这份文档用于完成以下外部平台配置：

- 网站通过 GitHub Actions 自动部署到 VPS
- Decap CMS 通过 Cloudflare Worker 完成 GitHub OAuth 登录
- CMS 后台可从 `https://iotedges.com/admin/` 正常登录

这是一份偏操作执行的手册，不是架构说明。

如需最终上线勾选清单，请配合查看：

- `docs/cms-go-live-checklist.zh-CN.md`

## 1. 网站 VPS 部署所需 GitHub Secrets

打开：

- GitHub 仓库
- `Settings`
- `Secrets and variables`
- `Actions`

添加以下 **Secrets**：

| 名称 | 是否必需 | 说明 |
| --- | --- | --- |
| `VPS_HOST` | 必需 | VPS IP 或域名 |
| `VPS_USER` | 必需 | SSH 登录用户 |
| `VPS_SSH_KEY` | 必需 | GitHub Actions 使用的私钥 |
| `LIVE_CHAT_API_BASE_URL` | 必需 | CRM 域名或源地址 |
| `LIVE_CHAT_API_TOKEN` | 必需 | Live Chat token |
| `APP_URL` | 必需 | `https://iotedges.com`；部署时 URL 一致性校验会用到 |
| `VPS_PORT` | 可选 | SSH 端口，默认 `22` |
| `VPS_DEPLOY_PATH` | 可选 | 默认 `/var/www/iotedges` |
| `GEMINI_API_KEY` | 可选 | 仅在后续服务端功能需要时配置 |

添加以下 **Variables**：

| 名称 | 是否必需 | 说明 |
| --- | --- | --- |
| `PORT` | 建议 | 建议填 `3005` |
| `VITE_GA_MEASUREMENT_ID` | GA/GTM 二选一 | 例如 `G-XXXXXXXXXX` |
| `VITE_GTM_ID` | GA/GTM 二选一 | 例如 `GTM-XXXXXXX` |

注意：

- `VITE_GA_MEASUREMENT_ID` 和 `VITE_GTM_ID` 至少要有一个
- `LIVE_CHAT_API_TOKEN` 不要加 `VITE_` 前缀

## 2. Decap Auth Worker 所需 GitHub Secrets

在同一个 GitHub Actions 设置页中，添加以下 **Secrets**：

| 名称 | 是否必需 | 说明 |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | 必需 | 具备 Worker 部署权限的 Cloudflare Token |
| `CLOUDFLARE_ACCOUNT_ID` | 必需 | Cloudflare Account ID |
| `DECAP_GITHUB_CLIENT_ID` | 必需 | GitHub OAuth App 的 Client ID |
| `DECAP_GITHUB_CLIENT_SECRET` | 必需 | GitHub OAuth App 的 Client Secret |
| `DECAP_AUTH_HEALTH_URL` | 必需 | `https://cms-auth.iotedges.com/healthz` |
| `DECAP_OAUTH_REDIRECT_URI` | 必需 | `https://cms-auth.iotedges.com/callback` |
| `DECAP_OAUTH_SITE_ORIGIN` | 必需 | `https://iotedges.com` |

添加以下 **Variable**：

| 名称 | 是否必需 | 说明 |
| --- | --- | --- |
| `DECAP_OAUTH_SCOPE` | 建议 | 建议填 `repo,user` |

说明：

- `DECAP_GITHUB_CLIENT_SECRET` 与 `CLOUDFLARE_API_TOKEN` 必须使用 Secret
- `APP_URL`、`DECAP_AUTH_HEALTH_URL`、`DECAP_OAUTH_REDIRECT_URI`、`DECAP_OAUTH_SITE_ORIGIN` 如果你内部策略允许，可以放到 Variables

## 3. 创建 GitHub OAuth App

打开：

- GitHub
- `Settings`
- `Developer settings`
- `OAuth Apps`

新建一个 OAuth App，填写：

| 字段 | 值 |
| --- | --- |
| Application name | `IoTEdges Decap CMS` |
| Homepage URL | `https://iotedges.com/admin/` |
| Authorization callback URL | `https://cms-auth.iotedges.com/callback` |

创建完成后：

1. 将 **Client ID** 填入 `DECAP_GITHUB_CLIENT_ID`
2. 生成 **Client Secret**
3. 将其填入 `DECAP_GITHUB_CLIENT_SECRET`

## 4. 配置 Cloudflare Worker 域名

在 Cloudflare 后台确认：

1. `iotedges.com` 已接入 Cloudflare
2. `cms-auth.iotedges.com` 这个子域名已预留给 Worker
3. Worker 将绑定在这个域名上

建议的 Cloudflare 实际操作顺序：

1. 打开 `Workers & Pages`
2. 选择或部署这个 Decap auth Worker
3. 给它添加 `cms-auth.iotedges.com` 这个 **Custom Domain**
4. 等到 Cloudflare 显示该域名已生效
5. 然后再跑外部验活或 GitHub Actions 验活

部署成功后，预期会有以下地址：

- `https://cms-auth.iotedges.com/auth`
- `https://cms-auth.iotedges.com/callback`
- `https://cms-auth.iotedges.com/healthz`

如果 `cms-auth.iotedges.com` 完全无法解析，不一定是 Worker 代码有问题，也可能只是自定义域名绑定还没完成。

## 4.1 关键值一致性矩阵

下面这些值必须完全一致：

| 用途 | 预期值 | 必须出现的位置 |
| --- | --- | --- |
| CMS 站点来源 | `https://iotedges.com` | `DECAP_OAUTH_SITE_ORIGIN`、Worker health 输出、线上站点来源 |
| OAuth 回调地址 | `https://cms-auth.iotedges.com/callback` | GitHub OAuth App callback URL、`DECAP_OAUTH_REDIRECT_URI`、Worker `/auth` 重定向 |
| Worker 健康检查地址 | `https://cms-auth.iotedges.com/healthz` | `DECAP_AUTH_HEALTH_URL`、手动 health 检查、GitHub Actions Worker 验证 |
| CMS backend base URL | `https://cms-auth.iotedges.com` | `public/admin/config.yml` 里的 `base_url`、线上 `/admin/config.yml` |

不要混用：

- `http` 和 `https`
- 裸域和 `www`
- 不同 callback 域名
- 不同 auth 子域名

## 5. 部署 Auth Worker

使用以下 workflow：

- `.github/workflows/deploy-decap-auth.yml`

可选的前置校验 workflow：

- `.github/workflows/validate-cms-rollout.yml`

建议顺序：

1. 先把 Worker 相关 GitHub secrets / variables 配齐
2. 确认 `main` 分支代码就是当前最新状态
3. 进入 **Actions > Deploy Decap Auth Worker**
4. 等待 workflow 结束
5. 运行 `npm run verify:auth-worker-surface`
6. 打开 `https://cms-auth.iotedges.com/healthz`

成功标准：

- 返回 HTTP 200
- JSON 中有 `"ok": true`
- JSON 中有 `"provider": "github"`
- `/auth` 会正确跳到 GitHub OAuth，并带上预期 callback URI

如果 `npm run verify:auth-worker-surface` 返回 `ENOTFOUND`：

- 说明 Worker 子域名还没有解析成功
- 优先检查 Cloudflare Custom Domain 绑定，而不是先怀疑 Worker 代码

如果失败，重点检查：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`
- GitHub OAuth App 回调地址是否与 Worker 配置完全一致

## 6. 部署网站

使用以下 workflow：

- `.github/workflows/deploy.yml`

建议顺序：

1. 确认网站部署相关 secrets / variables 已配置完成
2. 进入 **Actions > Deploy to VPS**
3. 等待构建、prerender、VPS 重启全部通过
4. 打开 `https://iotedges.com`

本地可先执行以下仓库自检：

```bash
npm run verify:cms-preflight
```

等价的分步命令：

```bash
npm run lint
npm run verify:cms
npm run verify:cms-runtime
npm run build
npm run verify:cms-build
```

URL 和 origin 一致性检查：

```bash
npm run verify:cms-external-config
```

VPS 部署完成后，再执行：

```bash
npm run verify:cms-live-surface
```

## 7. 首次 CMS 登录测试

当两个 workflow 都成功后：

1. 打开 `https://iotedges.com/admin/`
2. 点击 GitHub 登录
3. 完成 OAuth 流程
4. 确认后台中能看到以下 6 个集合：
   - Blog
   - Knowledge Base
   - Products
   - Solutions
   - Accessories
   - Site Copy

如果登录失败，检查：

- 浏览器控制台报错
- Worker 的 `/healthz`
- `npm run verify:auth-worker-surface`
- `npm run verify:production-surface`
- GitHub OAuth App 回调地址
- `public/admin/config.yml`

## 8. 首次内容编辑测试

先做低风险修改。

建议流程：

1. 修改一篇现有 blog 的 excerpt
2. 在 CMS 中保存
3. 确认产生了 Git commit 或 editorial workflow 条目
4. 等待 GitHub Actions 自动部署
5. 检查线上页面是否正确更新
6. 将结果写入 `docs/cms-admin-dry-run-report-template.zh-CN.md`

## 9. 最终验收

只有以下条件全部满足，才算 CMS 外部配置成功：

1. Auth Worker 部署 workflow 成功
2. Worker `/healthz` 返回 `ok: true`
3. `npm run verify:auth-worker-surface` 通过
4. 网站部署 workflow 成功
5. `npm run verify:cms-live-surface` 通过
6. `/admin/` 登录成功
7. 一次 CMS 内容修改成功发布
8. 修改后的线上页面显示正常
