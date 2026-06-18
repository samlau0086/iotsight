# CMS 最小上线执行单

最后更新：2026-06-19

这份文档面向实际执行者，定义 `iotedges.com` 启用 Decap CMS 的最小上线路径。

它比完整 rollout 文档更收敛，目标不是一次性把整套 CMS 完全开放，而是先让一个真实编辑者完成一次安全、可回滚的生产修改。

建议配合以下文档一起使用：

- [docs/decap-cms-config-draft.zh-CN.md](./decap-cms-config-draft.zh-CN.md)
- [docs/github-cloudflare-cms-setup-runbook.zh-CN.md](./github-cloudflare-cms-setup-runbook.zh-CN.md)
- [docs/cms-go-live-checklist.zh-CN.md](./cms-go-live-checklist.zh-CN.md)
- [docs/cms-admin-dry-run-checklist.zh-CN.md](./cms-admin-dry-run-checklist.zh-CN.md)

## 1. 最小开放范围

首轮真实生产演练只做这些事：

- 只使用一个编辑账号
- 只修改一篇现有 Blog
- 不新建产品页
- 不调整 Solution 页面结构
- 不修改 Site Copy
- 不做批量图片迁移

这是运营层面的限制，不是配置层面的限制。也就是说，`public/admin/config.yml` 里可以先保留所有 collection，但第一轮生产使用只进入最低风险内容面。

## 2. 最小公网拓扑

最小生产拓扑应为：

- 主站：`https://iotedges.com`
- 后台：`https://iotedges.com/admin/`
- Auth Worker：`https://cms-auth.iotedges.com`

必须保持一致的 URL：

| 项目 | 期望值 |
| --- | --- |
| `APP_URL` | `https://iotedges.com` |
| `DECAP_OAUTH_SITE_ORIGIN` | `https://iotedges.com` |
| `DECAP_AUTH_HEALTH_URL` | `https://cms-auth.iotedges.com/healthz` |
| `DECAP_OAUTH_REDIRECT_URI` | `https://cms-auth.iotedges.com/callback` |
| `public/admin/config.yml` 的 `base_url` | `https://cms-auth.iotedges.com` |

## 3. 最小 GitHub Actions 配置

网站部署 Secrets：

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `LIVE_CHAT_API_BASE_URL`
- `LIVE_CHAT_API_TOKEN`
- `APP_URL`

网站部署 Variables：

- `PORT=3005`
- 以下至少一个：
  - `VITE_GTM_ID`
  - `VITE_GA_MEASUREMENT_ID`

Auth Worker Secrets：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DECAP_GITHUB_CLIENT_ID`
- `DECAP_GITHUB_CLIENT_SECRET`
- `DECAP_AUTH_HEALTH_URL`
- `DECAP_OAUTH_REDIRECT_URI`
- `DECAP_OAUTH_SITE_ORIGIN`

建议的 Auth Worker Variable：

- `DECAP_OAUTH_SCOPE=repo,user`

## 4. 最小预检

在碰生产登录前，先跑：

```bash
npm run verify:cms-preflight
```

然后校验外部 URL 矩阵：

```bash
npm run verify:cms-external-config
```

只要其中任意一步失败，都应先停止上线动作。

## 5. 最小部署顺序

1. 运行 `Deploy Decap Auth Worker`。
2. 确认 `https://cms-auth.iotedges.com/healthz` 返回 HTTP 200，且 JSON 中有 `"ok": true`。
3. 运行：

```bash
npm run verify:auth-worker-surface
```

4. 运行 `Deploy to VPS`。
5. 确认：
   - `https://iotedges.com/admin/` 加载的是 Decap 后台壳，而不是网站首页壳
   - `https://iotedges.com/admin/config.yml` 可访问
   - `https://iotedges.com/robots.txt` 包含 `Disallow: /admin`
6. 运行：

```bash
npm run verify:cms-live-surface
```

在这些步骤全部通过之前，不要进入编辑者登录阶段。

最终合并闸门：

```bash
npm run verify:cms-go-live
```

如果 auth worker 和网站同时失败，建议按这个顺序处理：

1. 先修复并验证 `cms-auth.iotedges.com`
2. 等 worker hostname 正常后再重发网站
3. 再次运行 `npm run verify:cms-live-surface`

## 6. 首次生产修改

第一次只允许操作一篇现有 Blog。

必须按下面的路径执行：

1. 打开 `/admin/`。
2. 通过 GitHub OAuth 登录。
3. 打开一篇现有 Blog。
4. 做一个小且可回滚的文案修改。
5. 按当前 editorial flow 保存。
6. 确认 Git commit 或 editorial workflow 条目出现。
7. 确认 GitHub Actions 部署被触发。
8. 确认线上 Blog 页面显示了这次修改。

建议的首次修改类型：

- 修一句话
- 改一个 excerpt
- 替换一个段落

首次生产修改不要做这些事：

- 改 `id`
- 改图片规范
- 批量改 related links
- 改 Products 或 Solutions 内容
- 一次改多个 collection

## 7. 什么才算最小上线完成

只有在以下条件都成立时，才算完成最小上线：

- auth worker 表面验证通过
- 线上 `/admin/` 加载正常
- 至少一个编辑者登录成功
- 一次现有 Blog 编辑完整走通
- 一次由 CMS 内容触发的部署成功
- 变更后的线上页面显示正常

这还不代表 Products、Solutions、Accessories、Site Copy 这些集合已经全部完成上线验证。

## 8. 最小上线后的下一步

第一次 Blog 修改成功后，下一步应该是：

1. 用同样流程验证一篇现有 Knowledge Base 页面
2. 执行完整的 [docs/cms-admin-dry-run-checklist.zh-CN.md](./cms-admin-dry-run-checklist.zh-CN.md)
3. 填写 [docs/cms-admin-dry-run-report-template.zh-CN.md](./cms-admin-dry-run-report-template.zh-CN.md)
4. 之后再开始实际开放 Products 和 Solutions 的运营使用

## 9. 当前最可能遇到的失败类型

如果 rollout 失败，最常见的几类问题是：

- auth worker 的 DNS 或自定义域名绑定未完成
- 线上 `/admin/` 仍然回到了网站壳，而不是 CMS 壳
- `public/admin/config.yml` 和 GitHub Actions 里的 URL 值不一致
- OAuth callback URL 不匹配
- 编辑者登录成功了，但内容提交触发的部署失败

更细的排查请看：

- [docs/cms-troubleshooting.zh-CN.md](./cms-troubleshooting.zh-CN.md)
