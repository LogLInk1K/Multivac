# Multivac

> 一款基于 Astro 和 Tailwind CSS 构建的个人博客，支持深色模式、动态说说、友链管理等功能。

![Astro](https://img.shields.io/badge/Astro-5.16.7-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-06B6D4?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 特性

- 🚀 **极致性能** - 基于 Astro 5.x 构建，默认零 JS 发送
- 🎨 **精美设计** - 现代化 UI，深色模式支持，丝滑的过渡动画
- 📝 **多种内容格式** - 支持 Markdown、MDX 和 YAML
- 🔐 **文章加密** - 支持密码保护特定文章
- 💬 **动态说说** - 类似朋友圈的动态分享功能
- 🔗 **友链管理** - 支持分组的友情链接管理
- 🔍 **全文搜索** - 快速搜索文章内容
- 📑 **目录导航** - 自动生成的文章目录
- 💭 **评论系统** - 集成 Twikoo 评论
- 📱 **响应式设计** - 完美适配各种设备
- 🌙 **深色模式** - 优雅的明暗主题切换
- 🖼️ **图片灯箱** - Fancybox 图片查看器
- 📡 **RSS 订阅** - 自动生成 RSS 订阅源
- 🗺️ **Sitemap** - 自动生成站点地图

## 🛠️ 技术栈

- **框架**: [Astro 5.16.7](https://astro.build) - 现代化静态站点生成器
- **样式**: [Tailwind CSS 3.4.19](https://tailwindcss.com) - 实用优先的 CSS 框架
- **语言**: [TypeScript 5.9.3](https://www.typescriptlang.org) - 类型安全的 JavaScript
- **内容**: MDX - 支持在 Markdown 嵌入 JavaScript 和 JSX 语法
- **评论**: [Twikoo](https://twikoo.js.org) - 简洁的评论系统
- **灯箱**: [@fancyapps/ui](https://fancyapps.com) - 图片查看器

## 📦 项目结构

```
site/
├── post/                    # 内容目录
│   ├── example/            # 示例文章
│   ├── friends/            # 友链数据
│   └── moments/            # 动态数据
├── src/
│   ├── components/         # Astro 组件
│   │   ├── BlogCard.astro
│   │   ├── Header.astro
│   │   ├── LeftSidebar.astro
│   │   ├── RightSidebar.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PasswordProtect.astro
│   │   ├── Twikoo.astro
│   │   └── ...
│   ├── layouts/            # 页面布局
│   │   ├── MainLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/              # 路由页面
│   │   ├── index.astro     # 首页（文章列表）
│   │   ├── page/[page].astro # 分页
│   │   ├── p/[...slug].astro # 文章详情
│   │   ├── moments.astro   # 动态页
│   │   ├── friends.astro   # 友链页
│   │   ├── about.astro     # 关于页
│   │   └── archives/       # 归档页
│   ├── styles/             # 全局样式
│   ├── scripts/            # 客户端脚本
│   ├── utils/              # 工具函数
│   ├── consts.ts           # 站点常量
│   └── content.config.ts   # 内容集合配置
├── public/                 # 静态资源
├── astro.config.mjs        # Astro 配置
├── tailwind.config.js      # Tailwind 配置
└── package.json
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 pnpm

### 安装

```bash
# 克隆项目
git clone https://github.com/your-username/site.git
cd site

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321` 查看效果。

### 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📌 特性说明

为了实现“开源分享”与“个人部署”的解耦，本项目内置了以下机制：

- **双重内容过滤**：`post/example/` 目录下的文章仅在开发环境（Dev）可见，生产构建（Build）时会自动剔除，确保演示数据不污染正式站点。
- **隐私保护**：`.gitignore` 已预设忽略规则。可以直接在 `post/` 下写作，无需担心私人内容被误推送到公开仓库。
- **零配置发布**：只需将 Markdown 存入 `post/` 目录，构建系统会自动处理一切。

## ⚙️ 配置说明

### 站点基本信息

编辑 `src/consts.ts` 修改站点标题和描述：

```typescript
export const SITE_TITLE = '你的博客标题';
export const SITE_DESCRIPTION = '你的博客描述';
```

### 站点 URL

编辑 `astro.config.mjs` 修改站点 URL：

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### 评论系统

编辑 `src/components/Twikoo.astro` 配置 Twikoo 评论：

```astro
const envId = 'https://your-twikoo-endpoint.com';
```

### 主题颜色

编辑 `tailwind.config.js` 自定义主题颜色：

```javascript
colors: {
  primary: {
    light: '#425aef',  // 浅色主题主色
    dark: '#ffc848',   // 深色主题主色
  },
  // ...
}
```

## 📝 内容管理

### 添加文章

在 `post/` 目录下创建 Markdown/MDX 文件：

```markdown
---
title: "文章标题"
description: "文章简介（至少10个字符）"
pubDate: 2026-01-20
updatedDate: 2026-01-20  # 可选
heroImage: ./cover.jpg   # 可选
tags: ["标签1", "标签2"]
category: "分类"
draft: false             # 是否为草稿
author: "作者名"
---

# 正文内容

使用 Markdown 语法撰写...
```

#### 文章加密

添加密码保护：

```markdown
---
title: "加密文章"
password: "your-password"
passwordHint: "提示信息"
---
```

### 添加动态

编辑 `post/moments/index.yml`：

```yaml
---
title: 动态说说
description: 记录生活的点点滴滴
moments:
  - content: "今天天气真好！"
    date: 2026/01/20
    images:
      - https://example.com/image.jpg
  - content: "分享多个图片"
    date: 2026/01/19
    images:
      - https://example.com/img1.jpg
      - https://example.com/img2.jpg
      - https://example.com/img3.jpg
---
```

### 添加友链

编辑 `post/friends/index.yml`：

```yaml
---
title: 友情链接
description: 相逢意气为君饮，系马高楼垂柳边。
sections:
  - title: 申请友链
    content: |-
      欢迎交换友链！请确保您的网站符合以下要求：
      - 内容积极向上
      - 网站可以正常访问
friendGroups:
  - title: 技术博主
    description: 优秀的技术博客
    friends:
      - name: "友链名称"
        url: "https://example.com"
        avatar: "https://example.com/avatar.jpg"
        description: "友链描述"
---
```

### 个人信息

编辑 `src/components/LeftSidebar.astro` 修改左侧边栏信息：

```astro
<!-- 头像 -->
<img src="https://your-avatar-url" alt="博主头像" />

<!-- 博主信息 -->
<h2>你的昵称</h2>
<p>个性签名</p>

<!-- 社交链接 -->
<a href="https://github.com/your-username">GitHub</a>
<a href="https://space.bilibili.com/your-id">Bilibili</a>
```

## 🎨 主要功能详解

### 深色模式

- 支持自动跟随系统主题
- 手动切换主题（带圆形扩散动画）
- 使用 View Transitions API 实现平滑过渡

### 响应式布局

- **大屏幕**: 三栏布局（左侧栏 + 主内容 + 右侧栏）
- **中屏幕**: 两栏布局（左侧栏 + 主内容）
- **小屏幕**: 单栏布局（主内容）

### 文章目录

- 自动从标题生成目录
- 支持点击滚动定位
- 高亮当前阅读位置

### Matrix 特效

左侧个人信息卡片支持炫酷的 Matrix 动画效果：
- 文字乱码重组动画
- 头像 Emoji 切换效果
- 鼠标跟随视差效果

### 图片灯箱

- 点击图片放大查看
- 支持多图画廊模式
- 键盘快捷键支持

### 友链分组

- 支持多个友链分组
- 每个分组可设置独立描述
- 卡片式展示，悬停动效

## 📦 部署

### Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### Netlify

将构建命令设置为 `npm run build`，发布目录为 `dist/`。

### GitHub Pages

1. 在 `.github/workflows/` 创建部署配置
2. 推送代码自动触发部署

### Cloudflare Pages

```bash
# 使用 Wrangler CLI
npm install -g wrangler
wrangler pages deploy dist
```

## ⚖️ 许可与说明

本项目采用 **[MIT](LICENSE)** 协议开源。

此仓库仅作为个人博客存档，按“现状”提供。欢迎 Fork 随意折腾，但我可能无法回答你的 Issue。

## 📮 联系方式

- 博客: [https://log.1k.ink](https://log.1k.ink)
- GitHub: [@LogLInk1K](https://github.com/LogLInk1K)

## ⭐ 鸣谢

本博客参考了以下优秀项目：

- [Astro](https://astro.build) - 核心框架
- [张洪Heo](https://blog.zhheo.com) - 设计灵感
- [安子璠](https://www.anzifan.com) - UI 参考
- [安和鱼](https://blog.anheyu.com) - 交互设计
- [Hsinyau](https://hsinyau.com) - 布局创意

---

Made with 🧊 by [波罗歌](https://log.1k.ink)
