# CMS 上线故障排查

最后更新：2026-06-18

这份文档用于排查以下几类问题：

- `https://iotedges.com/admin/` 打不开或打开空白
- GitHub OAuth 登录失败
- Cloudflare Worker 健康检查失败
- GitHub Actions 部署 Worker 失败
- GitHub Actions 部署网站失败
- CMS 保存内容后没有成功发布

建议排查顺序：

1. 先看 Worker `/healthz`
2. 再看 GitHub OAuth App 回调地址
3. 再看 GitHub Actions secrets / variables
4. 最后看浏览器控制台和 Worker / Actions 日志

## 1. `/admin/` 页面打不开

常见表现：

- 返回 404
- 页面空白
- 打开的不是 CMS，而是网站首页
- 浏览器控制台报错

检查项：

- 确认线上网站已部署最新版本
- 确认 `public/admin/index.html` 已包含在产物中
- 确认 `public/admin/config.yml` 已随网站部署上线
- 确认 `https://iotedges.com/admin/` 不是被服务器重写规则错误拦截
- 确认生产服务没有把 `/admin/` 错误兜底到 SPA 首页

优先检查：

- `Deploy to VPS` workflow 是否成功
- 本地 `npm run build` 后 `npm run verify:server-surface` 是否通过
- `npm run verify:production-surface` 针对线上站点是否通过
- 线上是否能直接打开：
  - `https://iotedges.com/admin/`
  - `https://iotedges.com/admin/config.yml`

如果 `/admin/` 打开后显示的是首页而不是 CMS：

- 先检查生产环境的 Express fallback 逻辑
- 确认 `/admin` 和 `/admin/` 被明确指向 `dist/admin/index.html`
- 确认反向代理或 CDN 没有把 `/admin/` 重写到 `/`
- 如果返回内容和首页几乎一致，优先按“首页 fallback 路由”处理，不要先怀疑 CMS 本身

如果 `/admin/config.yml` 打开出来是 HTML 而不是 YAML：

- 大概率是站点把 `/admin/config.yml` 也兜底到了应用壳
- 先检查生产服务对 `/admin/config.yml` 的静态文件路由
- 再检查 CDN 或反向代理重写规则，不要先怀疑 Decap 配置语法
- 如果内容和首页 HTML 一样，基本可以按“首页 fallback 路由”处理，而不是 YAML 语法问题

## 2. 点击 GitHub 登录没有反应

常见表现：

- 点击登录按钮无弹窗
- 弹窗一闪而过
- 浏览器提示跨域或 popup 被阻止

检查项：

- 浏览器是否拦截弹窗
- `public/admin/config.yml` 中是否存在：
  - `base_url: https://cms-auth.iotedges.com`
  - `auth_endpoint: auth`
- `cms-auth.iotedges.com` 是否真实可访问

建议动作：

1. 手动打开 `https://cms-auth.iotedges.com/healthz`
2. 运行 `npm run verify:auth-worker-surface`
3. 查看浏览器控制台
4. 确认 Worker 已成功部署

## 3. `/healthz` 返回失败

常见表现：

- 返回 404
- 返回 500
- JSON 中 `ok` 为 `false`
- 返回的是 HTML 页面而不是 JSON
- 返回的是 Cloudflare 错误页而不是 Worker JSON

检查项：

- Cloudflare Worker 是否已发布到正确账号
- `cms-auth.iotedges.com` 是否已绑定到 Worker
- 以下 GitHub Actions secrets 是否已存在：
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
  - `DECAP_GITHUB_CLIENT_ID`
  - `DECAP_GITHUB_CLIENT_SECRET`

如果 `/healthz` 返回的是 HTML 或 Cloudflare 品牌错误页：

- 很可能自定义域名其实没有正确绑定到目标 Worker
- DNS 也可能解析成功了，但并没有落到你预期的 Worker 路由
- 先检查 Cloudflare Worker 的 custom domain 绑定，再去怀疑 OAuth 代码
- 以下可选值是否正确：
  - `DECAP_OAUTH_REDIRECT_URI`
  - `DECAP_OAUTH_SITE_ORIGIN`
  - `DECAP_OAUTH_SCOPE`

如果 `ok: false`：

- 通常表示 Worker 已上线，但缺少必需 secrets
- 也可能是 `/auth` 重定向里的 callback URI 配错了

如果看到 `getaddrinfo ENOTFOUND`：

- 说明 `cms-auth.iotedges.com` 当前在 DNS 中不可解析
- 或 Cloudflare 里这个子域名还没真正创建 / 绑定好

## 4. GitHub OAuth 后跳回失败

常见表现：

- GitHub 授权完成后显示错误页
- 提示 callback URL 不匹配
- 登录后 CMS 没有打开

重点检查：

- GitHub OAuth App 的 callback URL 是否精确等于：
  - `https://cms-auth.iotedges.com/callback`
- Worker 配置的 `DECAP_OAUTH_REDIRECT_URI` 是否一致
- `OAUTH_SITE_ORIGIN` 是否是：
  - `https://iotedges.com`
- 当前环境值下 `npm run verify:cms-external-config` 是否通过

如果地址有任意一个字符不一致，OAuth 很容易失败。

## 5. `Deploy Decap Auth Worker` workflow 失败

优先检查：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- Cloudflare Token 是否有 Worker 部署权限
- Workflow 日志里失败的是：
  - 部署前校验
  - Wrangler 部署
  - `/healthz` 检查

如果失败在 `/healthz`：

- 多半是 Worker 已发布但 secrets 未正确注入
- 或 `DECAP_AUTH_HEALTH_URL` 指向了错误域名

## 6. `Deploy to VPS` workflow 失败

优先检查：

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `LIVE_CHAT_API_BASE_URL`
- `LIVE_CHAT_API_TOKEN`
- 至少一个 analytics 变量：
  - `VITE_GA_MEASUREMENT_ID`
  - `VITE_GTM_ID`

常见失败点：

- SSH 无法连接 VPS
- analytics 变量未设置导致 workflow 直接 fail
- build 或 prerender 校验失败

## 7. CMS 保存内容后没有自动发布

检查项：

- 是否启用了 `publish_mode: editorial_workflow`
- 是否只是创建了草稿，但没有发布
- GitHub 中是否已有对应 commit / editorial entry
- 保存后是否触发了网站部署 workflow

如果 CMS 已写入仓库但线上没更新：

- 去看 `Deploy to VPS` workflow 是否失败

## 8. 内容发布后页面异常

常见表现：

- 页面显示 `Untitled Product`
- 页面空白
- 图片路径错误
- YAML/frontmatter 结构损坏

先做：

1. 运行：
   - `npm run verify:cms-preflight`
   - `npm run verify:cms`
   - `npm run verify:cms-runtime`
   - `npm run lint`
2. 检查对应 Markdown frontmatter 是否损坏
3. 按 `docs/decap-cms-qa-checklist.md` 做集合级检查

如果是产品页或方案页，优先检查这些字段：

- `id`
- `title`
- `model`
- `route` 或 `link`
- `status`
- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`

现在配置更严格后，很多“页面显示异常”其实不是渲染问题，而是 CMS 保存了不完整或不合法的 frontmatter。
如果看到 `Untitled Product`，通常意味着标题或身份字段没有正确回填，而不是前端模板失效。

## 9. 建议你每次排查时提供这些信息

如果后续需要继续联调，最好一次性提供：

1. 出错的页面地址
2. GitHub Actions workflow 名称
3. workflow 的报错原文
4. 浏览器控制台报错
5. `https://cms-auth.iotedges.com/healthz` 返回内容
6. 最近一次修改的内容文件

这样可以更快定位问题，不需要反复补上下文。
