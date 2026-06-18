# IoTEdges CMS 最小上线顺序

最后更新：2026-06-18

## 1. 目标

这份文档定义 Decap CMS 的最小上线顺序，避免一开始把所有 collection 同时开放，导致内容、素材、字段和发布流程一起失控。

核心原则：

- 先开结构最简单、风险最低的内容类型
- 再开字段更复杂、对前端页面影响更大的内容类型
- 最后再开单文件型站点文案，让核心营销页面的文案进入 CMS

## 2. 当前已经实现的内容范围

仓库里当前已经具备以下文件驱动 CMS 目标：

- Blog
- Knowledge Base
- Products
- Solutions
- Accessories Overview
- Site Copy
  - Homepage Copy
  - About Page Copy
  - Contact Page Copy
  - Gateway Page Copy
  - Demo Page Copy

这意味着现在的问题已经不是“要不要做 CMS”，而是“按什么顺序开放，才能把风险控制住”。

## 3. 推荐顺序

推荐按下面顺序启用：

1. Blog
2. Knowledge Base
3. Products
4. Solutions
5. Accessories Overview
6. Site Copy 文件

这个顺序不是偏好问题，而是风险控制问题。

## 4. 第一阶段：先开 Blog

### 原因

- 字段结构最简单
- 主要是标题、摘要、作者、分类、封面图和 Markdown 正文
- 对页面布局影响最小
- 最容易验证编辑、保存、预览和部署链路

### 通过标准

- 能新建文章
- 能编辑已有文章
- `category` 受控选项正常
- 封面图上传正常
- Markdown 渲染正常
- 页面上线后标题、摘要和图片都正确

## 5. 第二阶段：开 Knowledge Base

### 原因

- 和 Blog 一样属于 Markdown 主导内容
- 结构比 Products / Solutions 简单
- 但已经开始涉及更强的 SEO 关键词和技术主题管理

### 通过标准

- 现有 Knowledge 页面可正常回填到编辑器
- `category` 受控选项正常
- `primaryKeyword` 可稳定维护
- `relatedProducts` 不出错

## 6. 第三阶段：开 Products

### 原因

- Products 有大量结构化字段
- 包含多层 frontmatter
- 会直接影响产品详情页的信息密度和买家判断
- 一旦字段保存出错，页面可读性会明显受损

### 主要风险点

- `specGroups`
- `selectionGuide`
- `bomGroups`
- `preSalesFaq`
- `status`
- `category`

### 通过标准

- 现有 Product 文件可正确回填
- 多层列表结构编辑后不乱
- 保存后 frontmatter 结构稳定
- 产品规格表、FAQ、对比链接显示正常

## 7. 第四阶段：开 Solutions

### 原因

- Solutions 同时包含摘要字段、列表字段、推荐标签、关联资源
- 会影响场景页、推荐产品和相关阅读路径
- 对 SEO 和转化路径都有影响

### 主要风险点

- `iconKey`
- `recommendedProductType`
- `recommendedUplink`
- `detailedContent`
- `relatedProducts`
- `relatedResources`

### 通过标准

- 现有 Solution 文件可正确回填
- 受控字段值显示正常
- 相关产品和相关资源编辑后不出错
- 页面 CTA 和内容结构不被破坏

## 8. 第五阶段：开 Accessories Overview

### 原因

- 它虽然只有一个文件，但本质上不是普通文章
- 包含分组列表、产品线配件映射、项目套装等结构化内容
- 是从“多文件内容 collection”过渡到“单文件站点内容”的合适桥梁

### 通过标准

- `src/content/accessories/accessories-overview.md` 能正常回填
- 分组列表编辑后结构不乱
- `/accessories` 页面区块顺序正常
- 配件表格和 guide 链接正常

## 9. 第六阶段：开 Site Copy 文件

### 当前包含

- `src/content/site-copy/homepage.md`
- `src/content/site-copy/aboutpage.md`
- `src/content/site-copy/contactpage.md`
- `src/content/site-copy/gatewaypage.md`
- `src/content/site-copy/demopage.md`

### 原因

- 这些文件直接影响核心营销页面
- 虽然风险低于 Products / Solutions 的嵌套字段，但一旦误改，会直接影响首页和关键转化页
- 应该放在主要 collection 已经验证稳定之后再开放

### 必须保持的边界

- CMS 只改文案
- 页面布局仍由代码控制
- Quote 表单逻辑仍由代码控制
- Live Chat 逻辑仍由代码控制
- Demo mock dashboard 和模拟数据仍由代码控制

### 通过标准

- 每个文件都能正常回填到编辑器
- 文案修改保存后不破坏页面结构
- 首页、About、Contact、Gateway、Demo 路由部署后都正常
- CTA、结构化区块和 SEO 输出没有回归

## 10. 不建议的上线方式

不建议一开始就：

- 把所有 collection 一次性全开
- 直接让多人同时编辑
- 不做 dry run 就进入生产使用
- 不做图片规则就开放上传

常见后果是：

- 分类失控
- 图片风格失控
- frontmatter 结构被写乱
- 页面 URL 和 SEO 字段被误改

## 11. 推荐的实际执行节奏

### 阶段 A

- 开 Blog
- 跑一轮 `/admin` dry run
- 修正字段和图片问题

### 阶段 B

- 开 Knowledge Base
- 跑一轮技术内容编辑验证

### 阶段 C

- 开 Products 和 Solutions
- 重点验证嵌套字段、受控标签和页面完整性

### 阶段 D

- 开 Accessories Overview
- 重点验证单文件专题页和分组结构

### 阶段 E

- 开 Site Copy 文件
- 重点验证首页和关键营销页的 copy-only 编辑

## 12. 每个阶段都要重复的检查

每开一个新 collection，都至少重复做这些检查：

1. 登录是否正常
2. 编辑器能否正确回填旧内容
3. 受控字段是否还能正确显示已有值
4. 保存后文件结构是否稳定
5. 部署是否成功
6. 线上页面是否正常

## 13. 与其他文档的关系

建议配合以下文档一起执行：

- `docs/cms-admin-dry-run-checklist.zh-CN.md`
- `docs/cms-field-glossary.zh-CN.md`
- `docs/cms-editor-handbook.zh-CN.md`
- `docs/cms-go-live-checklist.zh-CN.md`

## 14. 结论

对当前 IoTEdges 项目，正确做法不是“CMS 一次性全开”，而是：

- 先 Blog
- 再 Knowledge
- 再 Products
- 再 Solutions
- 再 Accessories Overview
- 最后 Site Copy 文件

这样才能在不打乱现有 SEO、内容结构和部署链路的前提下，把 CMS 真实落到可用状态。
