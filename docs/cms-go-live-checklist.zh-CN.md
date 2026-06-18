# CMS 上线勾选清单

最后更新：2026-06-18

当你准备正式启用 `iotedges.com` 的 Decap CMS 时，按这份清单逐项勾选。

配合使用：

- `docs/cms-minimum-go-live.zh-CN.md`
- `docs/cms-admin-dry-run-checklist.zh-CN.md`
- `docs/cms-admin-dry-run-report-template.zh-CN.md`
- `docs/cms-field-glossary.zh-CN.md`
- `docs/cms-rollout-sequence.zh-CN.md`

## 1. GitHub 仓库

- [ ] `main` 分支是最新状态
- [ ] `public/admin/config.yml` 中已经包含：
  - [ ] `base_url: https://cms-auth.iotedges.com`
  - [ ] `auth_endpoint: auth`
  - [ ] `site_url: https://iotedges.com`
  - [ ] `display_url: https://iotedges.com`
- [ ] 存在 `.github/workflows/deploy.yml`
- [ ] 存在 `.github/workflows/deploy-decap-auth.yml`
- [ ] 存在 `.github/workflows/validate-cms-rollout.yml`

## 2. 网站部署所需 GitHub Secrets

- [ ] `VPS_HOST`
- [ ] `VPS_USER`
- [ ] `VPS_SSH_KEY`
- [ ] `LIVE_CHAT_API_BASE_URL`
- [ ] `LIVE_CHAT_API_TOKEN`
- [ ] `APP_URL`
- [ ] 以下至少有一个：
  - [ ] `VITE_GA_MEASUREMENT_ID`
  - [ ] `VITE_GTM_ID`

## 3. Decap Auth Worker 所需 GitHub Secrets

- [ ] `CLOUDFLARE_API_TOKEN`
- [ ] `CLOUDFLARE_ACCOUNT_ID`
- [ ] `DECAP_GITHUB_CLIENT_ID`
- [ ] `DECAP_GITHUB_CLIENT_SECRET`

以下必需值也已存在：

- [ ] `DECAP_AUTH_HEALTH_URL`
- [ ] `DECAP_OAUTH_REDIRECT_URI`
- [ ] `DECAP_OAUTH_SITE_ORIGIN`

建议值也已存在：

- [ ] `DECAP_OAUTH_SCOPE`

## 4. GitHub OAuth App

- [ ] 已在 GitHub 中创建 OAuth App
- [ ] Homepage URL 是 `https://iotedges.com/admin/`
- [ ] Callback URL 是 `https://cms-auth.iotedges.com/callback`
- [ ] Client ID 已复制到 GitHub Actions Secret
- [ ] Client Secret 已复制到 GitHub Actions Secret

## 5. Cloudflare

- [ ] `iotedges.com` 域名已在 Cloudflare 管理
- [ ] `cms-auth.iotedges.com` 已准备好绑定 Worker
- [ ] Worker secrets 已由 GitHub Actions 成功推送

## 6. Auth Worker 部署

- [ ] 本地 `npm run verify:cms-auth-preflight` 已通过
- [ ] Worker 相关 URL 的 `npm run verify:cms-external-config` 已通过
- [ ] 已运行 `Deploy Decap Auth Worker`
- [ ] workflow 成功
- [ ] `https://cms-auth.iotedges.com/healthz` 返回 HTTP 200
- [ ] health JSON 中包含 `"ok": true`
- [ ] health JSON 中包含 `"provider": "github"`

## 7. 网站部署

- [ ] 本地 `npm run verify:cms-preflight` 已通过
- [ ] 网站与 OAuth URL 的 `npm run verify:cms-external-config` 已通过
- [ ] build 之后本地 `npm run verify:server-surface` 已通过
- [ ] 已运行 `Deploy to VPS`
- [ ] workflow 成功
- [ ] `https://iotedges.com` 可正常访问
- [ ] `https://iotedges.com/admin/` 可正常访问
- [ ] 线上 `robots.txt` 包含 `Disallow: /admin` 和 `Sitemap: https://iotedges.com/sitemap.xml`
- [ ] 线上 `sitemap.xml` 可打开且不包含 `/admin`
- [ ] `npm run verify:auth-worker-surface` 针对 auth worker 验证通过
- [ ] 针对线上站点的 `npm run verify:production-surface` 验证通过
- [ ] `npm run verify:cms-live-surface` 针对整套 CMS 线上表面验证通过
- [ ] `npm run verify:cms-go-live` 作为最终端到端闸门验证通过

## 8. 首次登录

- [ ] `/admin/` 能弹出 GitHub 登录窗口
- [ ] OAuth 登录成功完成
- [ ] 登录后 CMS 后台正常打开
- [ ] 能看到以下集合：
  - [ ] Blog
  - [ ] Knowledge Base
  - [ ] Products
  - [ ] Solutions
  - [ ] Accessories
  - [ ] Site Copy

## 9. 首次内容编辑

- [ ] 修改一篇现有 blog
- [ ] 保存成功
- [ ] 产生 Git commit 或 editorial workflow 条目
- [ ] 后续 GitHub Actions 自动部署成功
- [ ] 修改后的线上页面显示正常

## 10. 最终门槛

- [ ] 已执行 `docs/decap-cms-qa-checklist.md`
- [ ] 已执行 `docs/cms-admin-dry-run-checklist.zh-CN.md`
- [ ] 已填写 `docs/cms-admin-dry-run-report-template.zh-CN.md` 作为真实执行记录
- [ ] 维护者知道如何回滚 CMS 产生的 Git commit
- [ ] 维护者知道去哪里查看 Worker 部署日志
- [ ] 维护者知道去哪里查看 VPS 部署日志

## 只有满足以下条件才算上线完成

- [ ] auth worker 健康
- [ ] `/admin/` 登录正常
- [ ] 至少一次 CMS 内容编辑成功发布
- [ ] 修改后的线上页面显示正确
