# IoTEdges CMS /admin 试运行清单

最后更新：2026-06-18

## 1. 目的

这份清单用于在正式启用 CMS 前，按真实操作路径跑一遍 `/admin`。

目标不是检查“配置看起来对不对”，而是确认下面这些链路真实可用：

- 登录
- 打开 collection
- 新建内容
- 编辑现有内容
- 上传图片
- 保存
- 预览和上线结果一致

## 2. 试运行前提

开始前先确认：

- [ ] `https://iotedges.com/admin/` 可访问
- [ ] `https://cms-auth.iotedges.com/healthz` 返回正常
- [ ] GitHub OAuth 登录已配置
- [ ] 网站部署 workflow 正常
- [ ] Auth Worker workflow 正常

## 3. 路径一：首次登录

- [ ] 打开 `https://iotedges.com/admin/`
- [ ] 页面能正常加载 CMS
- [ ] 点击登录后能弹出 GitHub OAuth 窗口
- [ ] GitHub 授权完成后能正常回到 CMS
- [ ] 登录后能看到以下 collection：
  - [ ] Blog
  - [ ] Knowledge Base
  - [ ] Products
  - [ ] Solutions
  - [ ] Accessories
  - [ ] Site Copy

如果这一步失败，先看：

- `docs/cms-troubleshooting.zh-CN.md`

## 4. 路径二：新建一篇 Blog

建议新建一篇测试文章，不要一开始就改正式文章。

检查项：

- [ ] 进入 `Blog`
- [ ] 点击新建
- [ ] 正确填写：
  - [ ] `id`
  - [ ] `title`
  - [ ] `excerpt`
  - [ ] `date`
  - [ ] `author`
  - [ ] `category`
- [ ] 上传一张封面图
- [ ] 填写 `body`
- [ ] 保存成功
- [ ] 没有 schema 报错
- [ ] 保存后生成对应内容变更

建议验证点：

- [ ] `category` 下拉选项正常
- [ ] 封面图路径进入 `/uploads/...`
- [ ] Markdown 正文未被破坏

## 5. 路径三：编辑一篇 Knowledge

选择一篇已有知识页，验证“编辑现有内容”链路。

检查项：

- [ ] 打开一篇已有 Knowledge 页面
- [ ] `category` 能正常显示当前值
- [ ] `primaryKeyword` 保持不变
- [ ] 修改一小段 `excerpt` 或 `body`
- [ ] 保存成功
- [ ] 页面没有字段缺失或报错

建议验证点：

- [ ] 旧内容能正常回填到编辑器
- [ ] 下拉选项不会把现有值判成非法

## 6. 路径四：编辑一个 Product

产品页是最复杂的 collection，必须单独验证。

建议选一个已有产品，例如：

- `IEG-100`
- `IER-140`

检查项：

- [ ] 打开一个已有 Product
- [ ] `category` 正确显示
- [ ] `status` 正确显示
- [ ] `route` 没有被误改
- [ ] `specGroups` 能正常编辑
- [ ] `selectionGuide` 能正常编辑
- [ ] `bomGroups` 能正常编辑
- [ ] `preSalesFaq` 能正常编辑
- [ ] 保存成功

重点验证：

- [ ] 嵌套列表字段不乱序
- [ ] 修改后 frontmatter 结构仍然可读
- [ ] 不会因为多层字段导致保存失败

## 7. 路径五：编辑一个 Solution

方案页验证重点在受控标签和列表字段。

检查项：

- [ ] 打开一个已有 Solution
- [ ] `iconKey` 下拉能正常显示当前值
- [ ] `recommendedProductType` 下拉能正常显示当前值
- [ ] `recommendedUplink` 下拉能正常显示当前值
- [ ] `detailedContent` 能正常编辑
- [ ] `hardware` 能正常编辑
- [ ] `software` 能正常编辑
- [ ] `relatedProducts` 能正常编辑
- [ ] `relatedResources` 能正常编辑
- [ ] 保存成功

## 8. 路径六：上传图片

这一步单独验证媒体链路。

检查项：

- [ ] 在 Blog、Product 或 Solution 中上传一张新图片
- [ ] 图片文件名可控
- [ ] 上传成功
- [ ] 保存后图片路径为 `/uploads/...`
- [ ] 线上页面可以正常加载该图片

同时确认：

- [ ] 图片比例没有把页面布局撑坏
- [ ] 文件大小合理

## 9. 路径七：保存后发布链路

如果启用了 editorial workflow，验证草稿和发布流程。

检查项：

- [ ] 保存后能看到 draft / workflow 条目
- [ ] 审核或发布动作正常
- [ ] GitHub 仓库里能看到对应内容变更
- [ ] 后续部署成功

如果当前先走直接写入主分支，也要确认：

- [ ] 内容提交后 workflow 触发正常
- [ ] 页面重新部署正常

## 10. 路径八：线上结果核对

完成编辑后，检查线上页面结果，而不是只看 CMS 保存成功。

至少核对：

- [ ] 页面标题正确
- [ ] 图片正常显示
- [ ] 列表页摘要正常
- [ ] 正文 Markdown 渲染正常
- [ ] CTA 还在
- [ ] 内链还在
- [ ] URL 没被误改

## 11. 回滚演练

正式启用前至少做一次小范围回滚演练。

检查项：

- [ ] 知道如何定位 CMS 产生的 Git commit
- [ ] 知道如何撤销一次错误内容变更
- [ ] 知道撤销后如何重新部署

## 12. 通过标准

只有当下面这些都满足，才算 `/admin` 试运行通过：

- [ ] 登录成功
- [ ] 六个 collection 都能打开
- [ ] Blog 新建成功
- [ ] Knowledge 编辑成功
- [ ] Product 编辑成功
- [ ] Solution 编辑成功
- [ ] Accessories 编辑成功
- [ ] Site Copy 编辑成功
- [ ] 图片上传成功
- [ ] 保存后部署成功
- [ ] 线上页面结果正确

## 13. 记录结果

试运行结束后，把结果写入：

- `docs/cms-admin-dry-run-report-template.zh-CN.md`
- 或使用 `npm run create:cms-dry-run-report -- --lang zh-CN --date YYYY-MM-DD` 生成一份带日期的可填写副本

## 14. 相关文档

- `docs/cms-go-live-checklist.zh-CN.md`
- `docs/cms-troubleshooting.zh-CN.md`
- `docs/cms-editor-handbook.zh-CN.md`
- `docs/cms-field-glossary.zh-CN.md`
- `docs/media-asset-guidelines.zh-CN.md`
