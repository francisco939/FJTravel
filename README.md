# 福建旅行 · 微信小程序 + Python 后端

一个用于比赛的「福建旅行」微信小程序，涵盖福建的 **景点 / 特色美食 / 特色人文** 三大板块，并提供 **行程规划** 与 **随机推荐（今日抽签）** 功能。

> 技术架构：**微信小程序前端**（WXML + WXSS + JavaScript）+ **Python Flask 后端**（提供数据 API）。
> 前端在请求后端失败时会自动回退到本地内置数据，保证离线演示也能完整展示。

---

## 一、项目结构

```
FJTravel/
├── backend/                    # Python 后端
│   ├── app.py                  # Flask 入口，提供 REST API
│   ├── data.py                 # 全部数据（城市/景点/美食/人文/行程）
│   └── requirements.txt        # 依赖（仅 flask）
├── miniprogram/                # 微信小程序前端
│   ├── app.js / app.json / app.wxss
│   ├── project.config.json     # 微信开发者工具项目配置
│   ├── sitemap.json
│   ├── utils/
│   │   ├── config.js           # 后端地址等配置
│   │   ├── api.js              # 请求封装（失败自动回退本地数据）
│   │   └── data.js             # 本地兜底数据
│   └── pages/
│       ├── index/              # 首页（主视觉 + 分类入口 + 精选）
│       ├── attractions/        # 景点列表（按城市筛选）
│       ├── food/               # 美食列表
│       ├── culture/            # 人文列表
│       ├── plan/               # 行程规划（3/5/7 日游）
│       ├── lucky/              # 今日抽签（随机推荐）
│       ├── detail/             # 通用详情页
│       └── search/             # 关键词搜索（景点/美食/人文）
└── README.md
```

## 二、运行后端（Python）

```bash
cd backend
pip install -r requirements.txt   # 只需要 flask
python app.py
```

启动后，后端运行在 `http://127.0.0.1:5000`，提供以下接口：

| 接口 | 说明 |
|------|------|
| `GET /api/home` | 首页聚合数据（统计 + 精选） |
| `GET /api/cities` | 城市列表 |
| `GET /api/attractions?city=厦门` | 景点列表（可按城市筛选） |
| `GET /api/attractions/<id>` | 单个景点 |
| `GET /api/foods` | 美食列表 |
| `GET /api/cultures` | 人文列表 |
| `GET /api/plan?days=3` | 行程规划（3/5/7 日） |
| `GET /api/lucky` | 随机推荐（抽签） |
| `GET /api/search?q=关键词` | 关键词搜索（返回景点/美食/人文分组结果） |

## 三、运行小程序前端

1. 打开 **微信开发者工具**（[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)）。
2. 选择「导入项目」，目录选择 `miniprogram/` 文件夹。
3. AppID 可先使用 **测试号**（`project.config.json` 中已填 `touristappid`）。
4. 在「详情 → 本地设置」中勾选 **「不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书」**（本地调试必需）。

### 配置后端地址

编辑 `miniprogram/utils/config.js` 中的 `baseUrl`：

- **电脑本机调试**：保持 `http://127.0.0.1:5000`
- **手机真机预览**：改成电脑的局域网 IP，例如 `http://192.168.1.100:5000`（手机与电脑需连同一 Wi-Fi）
- **正式上线**：部署后端到服务器并配置 HTTPS 域名，再在小程序后台配置「request 合法域名」

> `useMockFallback: true` 表示后端连不上时自动使用本地内置数据，比赛演示时保持开启即可，离线也能完整展示。

## 四、功能亮点

- 🏞️ **景点**：收录厦门、福州、泉州、武夷山等 9 座城市 24 个热门景点，支持按城市筛选、评分展示、亮点标签，并配有 **Wikimedia Commons 真实实景图片**。
- 🍜 **美食**：16 道福建特色美食（佛跳墙、沙茶面、土笋冻、大红袍…），按地区分类。
- 🎭 **人文**：14 项特色人文（闽南文化、妈祖文化、客家文化、海丝文化、闽剧、惠安女…）。
- 🗺️ **行程规划**：一键生成 3 / 5 / 7 日经典线路，逐日列出景点、美食与小贴士。
- 🎲 **今日抽签**：随机推荐「一个景点 + 一道美食 + 一项人文」，带摇签动画。
- 🔍 **搜索**：在景点、美食、人文中模糊匹配关键词（名称/城市/标签/简介），支持热门词一键搜索。

## 五、数据说明

数据集中维护在 `backend/data.py`，小程序端 `miniprogram/utils/data.js` 为其同步副本（用于离线兜底）。如需增删内容，请同时修改两处保持一致。

### 关于景点图片

景点图片使用 **Wikimedia Commons** 的公开图片（`Special:FilePath` 直链，真实、可商用、URL 稳定）。本地开发 / 真机调试时勾选「不校验合法域名」即可正常加载；正式上线需在小程序后台把以下域名加入 **request / downloadFile 合法域名**：

- `https://commons.wikimedia.org`
- `https://upload.wikimedia.org`
