# IoTEdges CMS /admin 试运行记录模板

最后更新：2026-06-18

这份模板用于记录一次真实 `/admin` 试运行的结果。

如需在 `docs/cms-dry-run-reports/` 中生成一份可填写副本，可运行：

```bash
npm run create:cms-dry-run-report -- --lang zh-CN --date 2026-06-18
```

建议配套文档：

- [docs/cms-admin-dry-run-checklist.zh-CN.md](./cms-admin-dry-run-checklist.zh-CN.md)
- [docs/cms-go-live-checklist.zh-CN.md](./cms-go-live-checklist.zh-CN.md)
- [docs/cms-troubleshooting.zh-CN.md](./cms-troubleshooting.zh-CN.md)

## 1. 会话摘要

- 日期：
- 执行人：
- 环境：
- 主站 URL：
- Admin URL：
- Auth Worker URL：
- GitHub 仓库：
- 分支：
- 结果：
  - 通过
  - 通过但有后续项
  - 被阻塞
  - 失败

## 2. 前置条件

- `/admin/` 可访问：
- `/healthz` 可访问：
- GitHub OAuth App 已核对：
- 网站部署 workflow 正常：
- Auth Worker 部署 workflow 正常：

## 3. 执行记录

### 路径一：首次登录

- 结果：
- 备注：
- 证据：

### 路径二：新建一篇 Blog

- 结果：
- 测试页面或 slug：
- 备注：
- 证据：

### 路径三：编辑一篇 Knowledge

- 结果：
- 编辑页面：
- 备注：
- 证据：

### 路径四：编辑一个 Product

- 结果：
- 编辑产品：
- 备注：
- 证据：

### 路径五：编辑一个 Solution

- 结果：
- 编辑方案：
- 备注：
- 证据：

### 路径六：上传一张图片

- 结果：
- 上传文件：
- 备注：
- 证据：

### 路径七：保存与发布链路

- 结果：
- Workflow 或 commit 参考：
- 备注：
- 证据：

### 路径八：线上结果核对

- 结果：
- 检查页面：
- 备注：
- 证据：

### 回滚演练

- 结果：
- 已核对的回滚方式：
- 备注：
- 证据：

## 4. Workflow 证据

- 网站部署 workflow 运行：
- Auth Worker workflow 运行：
- CMS 产生的 commit 或 editorial entry：
- 已核对的线上页面 URL：

## 5. 发现的问题

把试运行中发现的每个问题都记下来。

### 问题 1

- 标题：
- 严重级别：
- 影响范围：
- 复现方式：
- 证据：
- 建议修复：
- 负责人：
- 状态：

### 问题 2

- 标题：
- 严重级别：
- 影响范围：
- 复现方式：
- 证据：
- 建议修复：
- 负责人：
- 状态：

## 6. 后续动作

1. 
2. 
3. 

## 7. 最终结论

- 试运行状态：
- 是否可进入 go-live：
  - 是
  - 否
- 阻塞项：
- 是否需要复测：
  - 是
  - 否
- 下次计划测试日期：
