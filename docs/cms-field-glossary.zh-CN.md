# IoTEdges CMS 字段词表

最后更新：2026-06-18

## 1. 目的

这份词表用于统一解释 Decap CMS 中的关键字段和值，减少后续编辑时的理解偏差。

适用范围：

- Blog
- Knowledge Base
- Products
- Solutions

这份文档不替代 `config.yml`，而是解释“字段是什么意思、什么时候用、不要怎么用”。

## 2. 通用字段

### `id`

用途：

- 页面稳定标识
- 通常直接参与 URL 生成

要求：

- 发布后不要随便修改
- 使用英文小写和连字符

示例：

- `how-to-choose-modbus-mqtt-gateway`
- `ier-140-4g-remote-relay-rtu`

### `title`

用途：

- 页面主标题
- 列表标题
- SEO 标题的主要来源之一

要求：

- 表达清楚主题
- 不要写成内部备注
- 不要写无信息量标题

### `excerpt`

用途：

- 列表摘要
- 页面 SEO 描述候选

要求：

- 用完整短句表达内容价值
- 不要只重复标题

### `order`

用途：

- 控制列表排序

要求：

- 使用整数
- 数值越小通常越靠前

### `body`

用途：

- Markdown 主体内容

要求：

- 用 Markdown 写
- 不要塞大量不可控 HTML

## 3. Blog 字段

### `author`

用途：

- 展示内容作者或归属团队

当前允许值：

- `Engineering Team`
- `Product Management`
- `Customer Success`

使用建议：

- 统一使用受控团队名
- 不要混用个人名、缩写名或大小写变体

### `category`

当前受控值：

- `Buyer Guide`
- `Industry Trends`
- `Hardware Guide`
- `Case Studies`

解释：

- `Buyer Guide`
  - 面向采购、选型、对比
- `Industry Trends`
  - 面向行业变化、市场趋势、方向判断
- `Hardware Guide`
  - 面向设备、接口、部署、硬件相关说明
- `Case Studies`
  - 面向项目案例、成果、应用实践

不要做的事：

- 不要临时新造一个近义分类
- 不要把文章主题写进分类字段

### `imageUrl`

用途：

- 博客封面图

建议：

- 优先使用 `/uploads/...`
- 尺寸参考 `16:9`

### `relatedProducts`

用途：

- 关联产品页

要求：

- 使用产品 ID
- 只填真正相关的产品
- 不要填写完整 URL 或产品标题

### `relatedResources`

用途：

- 关联站内资源页

要求：

- 使用站内路径
- 优先补与主题强相关的知识页、方案页、博客页
- 不要填写完整域名 URL

## 4. Knowledge 字段

### `category`

当前受控值：

- `Protocol Guide`
- `MQTT Guide`
- `Wiring Guide`
- `Sensor Wiring Guide`
- `IO Guide`
- `Control Guide`
- `Selection Guide`
- `Accessory Guide`
- `Access Control Guide`
- `Connectivity Guide`
- `Application Guide`

解释：

- `Protocol Guide`
  - 协议基础说明，如 Modbus
- `MQTT Guide`
  - MQTT 主题、上下行、遥测控制类内容
- `Wiring Guide`
  - RS485、干接点、接线屏蔽类内容
- `Sensor Wiring Guide`
  - 4-20mA、传感器接法等内容
- `IO Guide`
  - DI / DO / AI / AO 基础说明
- `Control Guide`
  - 继电器输出、远程控制逻辑
- `Selection Guide`
  - RTU / Gateway / Remote IO 等选型说明
- `Accessory Guide`
  - 电源、天线、电缆、端子等配套件说明
- `Access Control Guide`
  - 门禁、道闸、开门器相关知识
- `Connectivity Guide`
  - 4G、Cat1、网络连接方式说明
- `Application Guide`
  - 具体应用场景技术说明

### `primaryKeyword`

用途：

- 该知识页的核心 SEO 词

要求：

- 一个页面聚焦一个主词
- 不要写一串关键词堆砌

## 5. Product 字段

### `category`

当前受控值：

- `Industrial IoT Gateway`
- `Industrial RTU`
- `Remote IO Module`
- `Remote Access Controller`
- `4G Remote Relay RTU`
- `4G Pump & Valve RTU`
- `4G Power Cabinet RTU`
- `Industrial IoT Software`

解释：

- `Industrial IoT Gateway`
  - 以采集、协议转换、上云为主
- `Industrial RTU`
  - 具备远程终端和本地控制能力的设备
- `Remote IO Module`
  - 用于扩展现场信号
- `Remote Access Controller`
  - 门禁、开门器、远程访问控制类设备
- `4G Remote Relay RTU`
  - 以 4G 上行和继电器控制为主的 RTU
- `4G Pump & Valve RTU`
  - 面向泵、阀门、农业灌溉等控制场景
- `4G Power Cabinet RTU`
  - 面向配电柜、电力监测类场景
- `Industrial IoT Software`
  - 软件平台或 Dashboard 类产品

### `model`

用途：

- 产品型号

要求：

- 用统一型号命名
- 不要把型号和标题写成两套不同信息

### `status`

当前受控值：

- `Available for project inquiry`
- `Preview`
- `Draft`
- `Published`

解释：

- `Available for project inquiry`
  - 适合现阶段“可询盘、可沟通、可定制”
- `Preview`
  - 页面可内部或有限公开预览
- `Draft`
  - 尚未准备对外
- `Published`
  - 已准备正式对外展示

说明：

- 当前站点里很多产品仍处于“可询盘型内容”，所以 `Available for project inquiry` 目前是合理值
- 如果后续产品体系更标准化，可以再统一收敛状态策略

### `route`

用途：

- 产品详情页的 canonical 路径

要求：

- 发布后不要轻易改

### `specGroups`

用途：

- 结构化规格表

建议包含：

- Communication
- Hardware I/O
- Protocols
- Power & Mounting
- Environment

当前受控组名：

- `Hardware I/O`
- `Communication`
- `Protocols`
- `Power & Mounting`
- `Environment`
- `Platform Scope`
- `Telemetry & Control`
- `Operations Interface`

使用建议：

- 硬件类产品优先使用 `Hardware I/O`、`Communication`、`Protocols`、`Power & Mounting`
- 软件平台类产品可以使用 `Platform Scope`、`Telemetry & Control`、`Operations Interface`
- 不要继续新增自由命名组标题，避免产品页规格结构发散

### `selectionGuide`

用途：

- 帮买家快速判断适配性

子字段：

- `chooseWhen`
- `notFitWhen`
- `compareLinks`

建议完整度：

- `chooseWhen` 至少 2-3 条
- `notFitWhen` 至少 2-3 条
- `compareLinks` 至少 2 条

### `bomGroups`

用途：

- 补充项目所需配套件与部署要素

### `preSalesFaq`

用途：

- 承载询盘前常见问题

建议内容：

- 样品
- 协议适配
- OEM / ODM
- 注册表映射
- 交期

## 6. Solution 字段

### `iconKey`

当前受控值：

- `zap`
- `sun`
- `droplets`
- `sprout`
- `snowflake`
- `shield`

解释建议：

- `zap`
  - 能源、电力、工厂能耗
- `sun`
  - 光伏、太阳能
- `droplets`
  - 水务、水处理、液位、泵站
- `sprout`
  - 农业、灌溉、种植
- `snowflake`
  - 楼宇环境、HVAC、建筑自动化
- `shield`
  - 门禁、开门器、安防控制

### `recommendedProductType`

当前受控值：

- `Gateway`
- `RTU`
- `Gateway or RTU`
- `RTU and Remote IO`
- `RTU or Remote IO`
- `Access controller or relay RTU`

用途：

- 给买家一个场景级设备方向判断

要求：

- 保持简短
- 不要写成长段技术说明

### `recommendedUplink`

当前受控值：

- `Ethernet first`
- `4G first`
- `Ethernet or 4G`
- `4G or wired cabinet path`

解释：

- `Ethernet first`
  - 现场优先有线网络
- `4G first`
  - 现场更适合蜂窝远程接入
- `Ethernet or 4G`
  - 两种上行都可行，按现场条件选
- `4G or wired cabinet path`
  - 适合远程现场，也可接入已有柜内有线网络

### `deploymentEnvironment`

用途：

- 描述方案典型部署环境

示例：

- `Factory cabinets and LAN-connected workshops`
- `Remote pump stations and outdoor valve chambers`

### `detailedContent`

用途：

- 方案页前部摘要段落

要求：

- 每条写一段完整信息
- 不要只写关键词

建议完整度：

- 至少 3 段

### `hardware`

用途：

- 列出方案中常见硬件组成

建议完整度：

- 至少 4 项

### `software`

用途：

- 列出方案中的软件或平台侧能力

建议完整度：

- 至少 3 项

### `relatedProducts`

用途：

- 关联本方案推荐的设备页

要求：

- 使用买家可读的标题
- `href` 使用站内相对路径
- 不要填写完整域名 URL

### `relatedResources`

用途：

- 关联知识页、博客页、案例页

要求：

- 使用买家可读的标题
- `href` 使用站内相对路径
- 不要填写完整域名 URL

## 7. 使用原则

编辑时优先顺序：

1. 先确认 `id / route / link` 不误改
2. 再确认分类、状态、图标、上行方式是否选对
3. 再补结构化字段
4. 最后写正文

## 8. 相关文档

- `public/admin/config.yml`
- `docs/cms-editor-handbook.zh-CN.md`
- `docs/decap-cms-config-draft.zh-CN.md`
- `docs/media-asset-guidelines.zh-CN.md`
