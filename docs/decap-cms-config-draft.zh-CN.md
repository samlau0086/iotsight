# Decap CMS 配置草案

最后更新：2026-06-19

这份文档定义当前 IoTEdges 网站的 Decap CMS 基线。它对应的是 `/admin` 的实际落地草案，不是通用示例。

当前站点仍然保持“文件驱动 + 构建期渲染”的交付方式。Decap CMS 只负责作为结构化营销内容的编辑入口。

字段的权威约束以 [docs/content-model-schema.md](./content-model-schema.md) 为准。

## 1. 交付模型

当前发布链路：

`Editor -> Decap CMS -> GitHub Repo -> GitHub Actions -> VPS / Cloudflare Pages`

这次 rollout 不改变前端交付方式：

- 内容仍然放在 `src/content/...`
- 上传素材仍然放在 `public/uploads`
- GitHub 仍然是内容真源
- GitHub Actions 继续负责构建和部署
- 前端仍然在构建阶段从仓库内容生成页面

## 2. 责任边界

Decap CMS 只负责内容层：

- `src/content/blog` 下的博客文章
- `src/content/knowledge` 下的知识库页面
- `src/content/products` 下的产品页面
- `src/content/solutions` 下的解决方案页面
- `src/content/accessories` 下的配件总览内容
- `src/content/site-copy` 下的单文件站点文案

Decap CMS 不负责：

- 路由、布局和组件代码
- 主题逻辑
- 部署密钥
- Analytics 和 Tag Manager ID
- Live Chat 运行时配置
- Request Quote 接口逻辑

## 3. 后台配置基线

当前 `public/admin/config.yml` 的生产草案为：

```yaml
backend:
  name: github
  repo: samla/iotsight
  branch: main
  base_url: https://cms-auth.iotedges.com
  auth_endpoint: auth
  commit_messages:
    create: "cms: create {{collection}} {{slug}}"
    update: "cms: update {{collection}} {{slug}}"
    delete: "cms: delete {{collection}} {{slug}}"
    uploadMedia: "cms: upload {{path}}"
    deleteMedia: "cms: delete media {{path}}"

local_backend: true

site_url: https://iotedges.com
display_url: https://iotedges.com
logo_url: /uploads/iotedges-logo.png

media_folder: public/uploads
public_folder: /uploads

publish_mode: editorial_workflow

slug:
  encoding: ascii
  clean_accents: true
  sanitize_replacement: "-"

issue_reports:
  url: https://github.com/samla/iotsight/issues/new
```

## 4. 部署配置矩阵

下面这些值必须在网站部署、Auth Worker 部署以及线上 `/admin` 表面保持一致。

| 项目 | 期望值 | 必须一致的位置 | 说明 |
| --- | --- | --- | --- |
| 站点来源 | `https://iotedges.com` | `APP_URL`、`DECAP_OAUTH_SITE_ORIGIN`、线上站点 origin | 不要混用 `www` 和裸域，除非整套上线都统一到同一个 host。 |
| Auth 健康检查地址 | `https://cms-auth.iotedges.com/healthz` | `DECAP_AUTH_HEALTH_URL`、Worker health 检查、GitHub Actions 校验 | 必须是 HTTPS，且路径必须以 `/healthz` 结尾。 |
| OAuth 回调地址 | `https://cms-auth.iotedges.com/callback` | GitHub OAuth App callback、`DECAP_OAUTH_REDIRECT_URI`、Worker 重定向目标 | 必须完全一致，包含路径。 |
| CMS backend base URL | `https://cms-auth.iotedges.com` | `public/admin/config.yml` 里的 `base_url`、线上 `/admin/config.yml` | `auth_endpoint` 仍然是 `auth`，所以登录入口会从 `/auth` 开始。 |
| 后台站点 URL | `https://iotedges.com` | `site_url`、`display_url`、线上 admin 所在 host | 用来保持 Decap 的预览和跳转一致。 |

仓库侧一致性校验：

```bash
npm run verify:cms-external-config
```

部署后的线上校验：

```bash
npm run verify:cms-live-surface
```

## 5. Collection 基线

### `blog`

- 类型：folder collection
- 来源：`src/content/blog`
- 是否允许新建：是
- 正文：Markdown
- 用途：SEO 文章和内容营销页面

关键字段：

- `id`
- `title`
- `excerpt`
- `date`
- `author`
- `category`
- `imageUrl`
- `relatedProducts`
- `relatedResources`
- `order`
- `body`

### `knowledge`

- 类型：folder collection
- 来源：`src/content/knowledge`
- 是否允许新建：是
- 正文：Markdown
- 用途：协议、接线、选型和技术教育页面

关键字段：

- `id`
- `title`
- `excerpt`
- `category`
- `primaryKeyword`
- `relatedProducts`
- `order`
- `body`

### `products`

- 类型：folder collection
- 来源：`src/content/products`
- 是否允许新建：否
- 正文：Markdown
- 用途：受控编辑现有产品页

关键字段：

- `id`
- `title`
- `excerpt`
- `imageUrl`
- `category`
- `model`
- `status`
- `primaryKeyword`
- `route`
- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`
- `body`

为什么先设为 `create: false`：

- 产品分类目前仍由代码和内容规划共同约束
- 产品页有较多结构化区块，放开随意新建容易破坏页面模型
- 上线初期应先验证“编辑现有产品”流程，再决定是否开放“新建产品”

### `solutions`

- 类型：folder collection
- 来源：`src/content/solutions`
- 是否允许新建：否
- 正文：Markdown + 结构化区块
- 用途：受控编辑现有解决方案落地页

关键字段：

- `id`
- `title`
- `description`
- `image`
- `architectureImage`
- `iconKey`
- `recommendedProductType`
- `recommendedUplink`
- `deploymentEnvironment`
- `link`
- `detailedContent`
- `hardware`
- `software`
- `relatedProducts`
- `relatedResources`
- `body`

### `accessories`

- 类型：file collection
- 来源：`src/content/accessories/accessories-overview.md`
- 是否允许新建：不适用
- 用途：结构化维护配件总览页

### `siteCopy`

- 类型：file collection
- 来源：`src/content/site-copy/*.md`
- 是否允许新建：不适用
- 用途：维护模板型页面的文案

当前已覆盖文件：

- `homepage.md`
- `aboutpage.md`
- `contactpage.md`
- `gatewaypage.md`
- `demopage.md`

## 6. 编辑约束

CMS 必须保证路由和 schema 稳定。

规则如下：

- 页面上线后，`id`、`route`、`link`、`model` 不应随意修改
- 不要在 CMS 中私自新增 taxonomy 值，除非前端已先支持
- 上传图片统一放在 `public/uploads`
- Markdown 只用于正文内容，不用于重建页面布局
- 未验证的电气参数、认证声明、协议能力不要直接写进产品内容

## 7. Rollout 顺序

建议开放顺序：

1. Blog
2. Knowledge Base
3. Existing Products
4. Existing Solutions
5. Accessories Overview
6. Site Copy

这样可以先验证低风险内容集合，再逐步开放高价值商业页面。

## 8. 运行前提

在真正开放 `/admin` 给编辑使用前，以下条件必须满足：

- `https://cms-auth.iotedges.com/healthz` 返回 HTTP 200
- GitHub OAuth 回调地址为 `https://cms-auth.iotedges.com/callback`
- `public/admin/config.yml` 指向同一套 auth 服务
- `npm run verify:cms-external-config` 能针对目标部署值通过
- 线上站点的 `/admin/` 可以正常打开
- 线上 `/admin/config.yml` 可访问，且其中 backend 配置与预期一致
- 上传到 `public/uploads` 的素材部署后仍可访问
- CMS 产生的提交可以通过部署工作流
- 部署后 `npm run verify:cms-live-surface` 通过

## 9. 验证命令

本地验证命令：

```bash
npm run verify:cms
npm run verify:cms-auth-preflight
npm run verify:cms-preflight
npm run verify:cms-external-config
```

网站和 Auth Worker 部署完成后，再执行：

```bash
npm run verify:cms-live-surface
```

这些命令可以校验仓库基线以及线上 CMS 表面，但仍然不能替代一次真实的线上 `/admin` 浏览器演练。

## 10. 相关文档

- [docs/cms-minimum-go-live.zh-CN.md](./cms-minimum-go-live.zh-CN.md)
- [docs/decap-auth-rollout.md](./decap-auth-rollout.md)
- [docs/github-cloudflare-cms-setup-runbook.md](./github-cloudflare-cms-setup-runbook.md)
- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-rollout-sequence.md](./cms-rollout-sequence.md)
- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
