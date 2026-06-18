# IoTEdges 内容上线审计

最后更新：2026-06-18

## 1. 目标

这份文档用于判断当前 IoTEdges 网站内容，是否已经从“工程定义稿”走到“可对外推广的工业物联网官网内容”。

这里关注的不是 CMS 架构是否可用，而是：

- 页面是否足够像正式对外页面
- 买家是否能快速理解你卖什么
- 内容是否会削弱信任感
- 当前剩余问题是否已经从结构性问题下降到收尾问题

## 2. 当前总体判断

当前站点已经具备较完整的对外内容基础：

- 产品页、方案页、知识页、博客页都已可访问
- 主要内容已转入 Markdown，可通过 CMS 演进维护
- 站内链接结构、SEO 路径、预渲染和 sitemap 基础已经具备
- 主要产品、方案、博客封面图已经切换到站内可控资源

现在的主要工作不再是“搭结构”，而是“收口内容质量”。

## 3. 已完成的关键整改

### 3.1 外链临时图替换

已完成第一轮本地占位图替换：

- 产品页：10 个产品页
- Solution 页：6 个页面
- Blog 封面：6 篇文章

这一步已经显著降低了第三方图片依赖和“模板站”观感。

### 3.2 产品页第一轮措辞收口

以下页面已完成第一轮 buyer-facing 措辞收口：

1. `IEG-100`
2. `IER-100`
3. `IER-140`
4. `IER-141`
5. `IER-142`
6. `IEAC-140`
7. `AI IoT Dashboard`
8. `IEG-120`
9. `IER-120`
10. `IEIO-100`

### 3.3 第二轮 buyer-facing 收口

以下页面已完成第二轮 buyer-facing 收口：

11. `AI IoT Dashboard`
12. `IEAC-140`
13. `IER-140`
14. `IER-141`
15. `IER-142`
16. `how-to-choose-4g-gate-opener-europe`
17. `how-to-choose-power-cabinet-monitoring-rtu`

### 3.4 知识页 / 方案页 validation-gated 语气收口

以下页面已完成第一轮收口：

- `src/content/knowledge/4g-gsm-gate-opener-europe.md`
- `src/content/knowledge/mqtt.md`
- `src/content/solutions/building-automation.md`
- `src/content/solutions/solar-energy.md`
- `src/content/blog/how-to-choose-4g-gate-opener-europe.md`

## 4. 当前剩余问题

### P1：仍可能影响买家信任的问题

#### 4.1 部分知识页仍保留较多工程口吻

全量扫描后，剩余较多命中的页面主要集中在知识页：

- `src/content/knowledge/wifi-industrial-iot-gateway.md`
- `src/content/knowledge/rs485.md`
- `src/content/knowledge/rs485-cable-shielding-guide.md`
- `src/content/knowledge/din-rail-power-supply-industrial-iot.md`
- `src/content/knowledge/digital-io.md`
- `src/content/knowledge/analog-input.md`
- `src/content/knowledge/4g-lte-cat1.md`
- `src/content/knowledge/4g-antenna-industrial-rtu.md`
- `src/content/knowledge/4-20ma-pressure-sensor-rtu-wiring.md`

说明：

- 这些页面里的 `depends / usually / target country` 之类词语，不一定都是坏问题
- 很多属于技术说明语境，本来就需要条件判断
- 但仍可以继续收口，避免整站语气过度偏工程评审

#### 4.2 高影响页面第一轮和第二轮收口已基本完成

此前优先收口的高影响页面已经完成主要整理，包括：

- `src/content/products/ieg-100-ethernet-industrial-iot-gateway.md`
- `src/content/products/ier-100-ethernet-industrial-rtu.md`
- `src/content/products/ieac-140-4g-gsm-gate-opener.md`
- `src/content/blog/industrial-iot-trends-2024.md`
- `src/content/blog/how-to-choose-modbus-mqtt-gateway.md`

这些页面现在只保留少量正常的技术边界说明，不再属于当前最高优先级问题。

### P2：品牌成熟度问题

#### 4.3 图片风格仍未完全统一

虽然外链图已大幅清理，但当前站内图片仍是“多种阶段素材并存”：

- 产品占位图
- Solution 占位图
- Blog 封面占位图
- 少量旧页面样式差异

这不是阻塞上线的问题，但会影响整体品牌完成度。

建议后续按 `docs/media-asset-guidelines.zh-CN.md` 做统一替换。

#### 4.4 产品状态已经开始分层，但还可以继续细化

当前公开产品页已经不再全部使用同一种状态，而是开始区分为：

- `Published`
- `Available for project inquiry`
- `Preview`

这比早期“所有产品都挂同一状态”要成熟得多，至少已经能向买家传达：

- 哪些型号属于当前公开主推款
- 哪些型号适合项目型询盘
- 哪些内容仍属于预览或平台级展示

当前状态分层本身不再是高优先级问题。后续如果产品矩阵继续扩大，可以再考虑是否要进一步细分为：

- 标准量产款
- 项目定制款
- 预发布款

## 5. 当前扫描结果如何解读

全量 `rg` 扫描仍会命中很多：

- `depends`
- `usually`
- `target`
- `future`
- `project`

这里要区分两类情况：

### 5.1 需要继续修的命中

如果这些词出现在：

- FAQ
- 产品规格
- 产品选型说明
- 对外结论段

通常值得继续收紧。

### 5.2 可以接受的命中

如果这些词出现在：

- 技术知识页
- 安装条件说明
- 国家/运营商兼容性说明
- 接线或协议边界说明

那通常属于正常技术表达，不需要机械删除。

## 6. 建议的下一步顺序

### 第一优先级：集中处理知识页专题口径

当前最高优先级已经从单个高影响页面，转移到知识页专题口径统一。

目标不是“删掉所有条件语气”，而是：

- 减少整站技术内容里的工程评审感
- 保留必要边界
- 让知识页对买家和集成商都更容易读

### 第二优先级：集中收口知识页语气

建议按专题批量处理：

1. 接线 / 电源 / RS485 类
2. MQTT / Modbus / 协议类
3. 4G / 天线 / Cat1 类

这样比逐页零碎改更高效，也更容易统一口径。

当前进度：

- 接线 / 电源 / RS485 第一批已完成：
  - `src/content/knowledge/rs485.md`
  - `src/content/knowledge/rs485-cable-shielding-guide.md`
  - `src/content/knowledge/din-rail-power-supply-industrial-iot.md`
  - `src/content/knowledge/4-20ma-pressure-sensor-rtu-wiring.md`
- MQTT / Modbus / IO 第二批已完成：
  - `src/content/knowledge/mqtt.md`
  - `src/content/knowledge/modbus.md`
  - `src/content/knowledge/mqtt-downlink-control.md`
  - `src/content/knowledge/digital-io.md`
  - `src/content/knowledge/analog-input.md`
- 4G / 天线 / WiFi 第三批已完成：
  - `src/content/knowledge/4g-lte-cat1.md`
  - `src/content/knowledge/4g-antenna-industrial-rtu.md`
  - `src/content/knowledge/wifi-industrial-iot-gateway.md`

### 第三优先级：统一视觉素材

在内容语气基本收口后，再推进：

- 产品实拍主图
- 方案架构图
- 更统一的博客封面图

## 7. 当前结论

当前 IoTEdges 网站已经明显越过了“结构没搭好”的阶段。

现在更准确的判断是：

- 架构已经可用
- 主要页面已经具备对外展示能力
- 主要风险已经从“系统性问题”下降为“内容成熟度收尾”

如果现在开始推广，不会再像一个纯草稿站。

后续工作的重点应继续放在：

- 收口少量高影响页面
- 统一技术知识页口径
- 逐步替换占位图为正式品牌素材
