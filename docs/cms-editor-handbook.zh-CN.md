# IoTEdges CMS 内容编辑手册

最后更新：2026-06-18

## 1. 适用范围

这份手册面向通过 Decap CMS 管理以下内容的编辑者：

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

这不是开发文档，重点是“如何正确改内容而不破坏站点结构和 SEO”。

## 2. 登录入口

后台入口：

- `https://iotedges.com/admin/`

登录方式：

- GitHub OAuth

如果登录失败，先检查：

- `https://cms-auth.iotedges.com/healthz`
- GitHub OAuth App callback 是否为 `https://cms-auth.iotedges.com/callback`

详细排查见：

- `docs/cms-troubleshooting.zh-CN.md`

## 3. 各类内容分别改什么

### 3.1 Blog

适合发布：

- 买家指南
- 行业趋势
- 应用拆解
- 产品选型文章

重点字段：

- `id`：文章稳定标识，发布后不要随意改
- `title`
- `excerpt`
- `date`
- `author`
- `category`
- `imageUrl`
- `relatedProducts`
- `relatedResources`
- `body`

### 3.2 Knowledge Base

适合发布：

- MQTT
- Modbus
- RS485
- LoRa
- OPC UA
- 工业协议与接口知识

重点字段：

- `id`
- `title`
- `excerpt`
- `category`
- `primaryKeyword`
- `relatedProducts`
- `body`

### 3.3 Products

适合维护：

- 产品标题和摘要
- 主图
- 型号
- 规格
- FAQ
- 选型说明
- 配套件建议

重点字段：

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

### 3.4 Solutions

适合维护：

- 方案标题
- 场景描述
- 推荐设备类型
- 推荐上行方式
- 典型硬件组成
- 相关产品和内容链接

重点字段：

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

### 3.5 Accessories Overview

适合维护：

- 配件专题页标题和摘要
- overview cards
- 配件分组
- selection guides
- product accessory map
- project kits
- CTA 文案

重点字段：

- `eyebrow`
- `title`
- `description`
- `overviewCards`
- `groups`
- `selectionGuides`
- `productAccessoryMap`
- `projectKits`
- `ctaLabel`
- `ctaHref`

### 3.6 Site Copy

适合维护：

- 首页文案
- About 页文案
- Contact 页文案
- Gateway 页文案
- Demo 页文案

这类文件的原则很明确：

- 只改文案
- 不改页面布局
- 不改交互逻辑
- 不改表单行为

## 4. 不能随便改的字段

以下字段影响 URL、SEO、内链和已收录页面，发布后不要随意改：

- `id`
- `route`
- `link`

如果必须改：

1. 先确认旧 URL 是否已有收录
2. 确认站内有没有旧链接引用
3. 确认是否需要做跳转或更新 sitemap

## 5. 图片怎么处理

建议统一使用后台上传，而不是手填外链图片。

正确方式：

1. 在 CMS 中上传图片
2. 让文件进入 `public/uploads`
3. 页面通过 `/uploads/...` 使用

不建议长期依赖：

- 临时图床
- 第三方不受控 CDN
- 随时可能失效的外链图片

## 6. Product 编辑规范

### 6.1 Category

当前只允许这些类型：

- `Industrial IoT Gateway`
- `Industrial RTU`
- `Remote IO Module`
- `Remote Access Controller`
- `4G Remote Relay RTU`
- `4G Pump & Valve RTU`
- `4G Power Cabinet RTU`
- `Industrial IoT Software`

如果要新增新类型，先改配置和前端文案，再加内容。

### 6.2 Status

当前允许值：

- `Available for project inquiry`
- `Preview`
- `Draft`
- `Published`

建议使用方式：

- `Draft`：未准备对外
- `Preview`：可内部预览，但不建议大规模推广
- `Published`：正式对外
- `Available for project inquiry`：适合“可询盘、可定制、未完全标准化”的产品

### 6.3 Spec Groups

不要只在正文描述规格。关键参数要放进 `specGroups`，至少覆盖：

- 上行通信
- 现场接口
- DI / DO / AI / AO
- 协议
- 电源
- 安装方式
- 温度范围

这样前端才能稳定生成：

- 规格表
- 摘要卡片
- 后续比较能力

### 6.4 Selection Guide

这里写“适合谁 / 不适合谁”，不是写大段营销话术。

建议写法：

- `chooseWhen`：项目适用条件
- `notFitWhen`：边界条件或不建议场景
- `compareLinks`：对比产品或上级列表页

### 6.5 BOM Groups

这里写项目常见配套，不是泛泛说明。

例如：

- 电源
- 接线端子
- RS485 电缆
- 天线
- 隔离器
- 传感器
- 仪表

### 6.6 Pre-Sales FAQ

FAQ 建议围绕真实采购问题：

- 是否支持样品
- 是否支持 OEM / ODM
- 是否支持协议调整
- 是否支持寄存器映射
- 是否支持 CE / EMC / 环境要求

## 7. Solution 编辑规范

### 7.1 Recommended Product Type

当前受控值包括：

- `Gateway`
- `RTU`
- `Gateway or RTU`
- `RTU and Remote IO`
- `RTU or Remote IO`
- `Access controller or relay RTU`

不要写成长句。这是摘要型标签，不是正文段落。

### 7.2 Recommended Uplink

当前受控值包括：

- `Ethernet first`
- `4G first`
- `Ethernet or 4G`
- `4G or wired cabinet path`

这个字段是给买家快速判断网络路径，不要把完整技术说明塞进去。

### 7.3 `detailedContent` / `body`

建议分工：

- `detailedContent`：方案页前半部分摘要段落
- `body`：更完整的 Markdown 内容

如果只是补几段说明，优先维护 `detailedContent`。  
如果需要更长的技术说明、架构分解、部署建议，再写到 `body`。

## 8. Accessories 与 Site Copy 编辑边界

### 8.1 Accessories Overview

这个文件虽然是专题页，但仍然要保持边界：

- 可以改配件分组和说明
- 可以改项目套装和推荐指南
- 可以改 CTA 文案
- 不要把它改成自由页面搭建器

### 8.2 Site Copy

Site Copy 只管理受控文案。

不要通过这些文件尝试修改：

- 页面布局
- Navbar / Footer 结构
- Quote 表单字段
- Live Chat 行为
- Demo mock dashboard 结构
- SEO 逻辑和埋点逻辑

## 9. Blog / Knowledge 写作规范

### 9.1 标题

标题必须清晰表达买家搜索意图，不要写空泛标题。

示例：

- `How to Choose a 4G Gate Opener for Europe`
- `Modbus RTU vs Modbus TCP for Industrial IoT Projects`

避免：

- `Industry Insights`
- `Smart Future`

### 9.2 摘要

`excerpt` 要写成真正的列表摘要和 SEO 描述候选，不要复制标题，也不要只写几个词。

### 9.3 Related links

建议每篇文章至少补其中一类：

- `relatedProducts`
- `relatedResources`

这样能增强内链、相关浏览和转化路径。

## 10. 发布前检查

每次编辑完成，至少检查：

1. 标题是否准确
2. 摘要是否完整
3. `id / route / link` 是否误改
4. 图片是否能正常显示
5. 规格或列表是否渲染正常
6. 页面 CTA 和相关链接是否还在
7. 内容里是否有占位词、草稿语气、未确认参数

## 11. 不要在页面里写的内容

以下内容不要直接暴露给买家：

- “此处待补资料”
- “参数待确认”
- “仅供内部讨论”
- “这是示例内容”
- 过强的内部流程说明

如果参数还没完全定死，应改成更稳妥的对外表达，而不是把内部状态直接展示出来。

## 12. 建议的编辑流程

建议统一按下面流程操作：

1. 进入 `/admin`
2. 选择对应 collection
3. 新建或编辑内容
4. 先检查标题、slug、主图、摘要
5. 再补结构化字段
6. 最后写正文
7. 保存后预览页面
8. 确认无误再进入发布流程

## 13. 相关文档

- `public/admin/config.yml`
- `docs/decap-cms-config-draft.zh-CN.md`
- `docs/cms-field-glossary.zh-CN.md`
- `docs/cms-admin-dry-run-checklist.zh-CN.md`
- `docs/cms-rollout-sequence.zh-CN.md`
- `docs/media-asset-guidelines.zh-CN.md`
- `docs/cms-go-live-checklist.zh-CN.md`
- `docs/cms-troubleshooting.zh-CN.md`
- `docs/content-model-schema.md`
