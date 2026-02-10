---
title: "博客搭建: 使用Mizuki主题搭建博客"
published: 2026-02-10
pubDate: 2026-02-10
description: 使用Mizuki主题搭建博客
draft: false
tags: [Astro, Mizuki, 教程]
category: 教程
author: 垂叶叶叶
image: 'https://i0.hdslb.com/bfs/openplatform/8e2f31035772c2e9e1c839d6de6260645a4d9301.png@1e_1c.webp'
---

封面来源 [Mizuki主题文档](https://docs.mizuki.mysqil.com/)

本教程参考内容 [Mizuki主题文档](https://docs.mizuki.mysqil.com/)

# 前期概要

Astro是一个现代化的前端框架，性能强悍，自定义功能十分强大，十分适合搭建个人博客，本博客就是使用Astro框架与Mizuki主题

你不了解Astro？

可阅读 [Astro官方介绍](https://astro.build/)

Mizuki主题是一个基于Astro的现代化静态博客模板，具有丰富的功能和美观的设计，具体详情可阅读 [Mizuki主题文档](https://docs.mizuki.mysqil.com/)

# 环境准备

0. 一个懂得思考的大脑，支持两个单位的事件及以上的并行运算

1. [Node.js](https://nodejs.org/)

2. [pnpm](https://pnpm.io/)

3. [Git](http://git-scm.com/install/)

# 项目部署

Tips: 如果你发现安装速度太慢或无法安装 请切换网络

1. 将Mizuki仓库克隆到本地 并切换至对应目录

```bash
git clone https://github.com/matsuzaka-yuki/mizuki.git
cd Mizuki
```

如果觉得 Mizuki 这个名字比较麻烦 可以重命名文件夹 例如: blog

2. 安装项目所必需的依赖

```bash
pnpm install
```

3. 更改博客基本信息

打开 `src/config.ts` 里面内置了些示例信息 我们可以按照文件内部与下面的注释 一一将其改写为我们的东西

- `title`: 网站的标题

- `subtitle`: 网站副标题
 
- `description`: 网站描述

- `themeColor`: 网站的主题色调 通过hue值传递

- `banner`: 网站顶部图片

- `NavBarConfig`: 导航栏链接 通过links传递

- `ProfileConfig`: 个人信息配置
  - `avatar`: 博主头像
  - `name`: 博主名字
  - `bio`: 个人签名
  - `links`: 社交账号链接

- `AnnouncementConfig`: 底部公告配置
  - `title`: 公告标题
  - `content`: 公告内容

# 本地预览

在终端输入以下内容

```bash
pnpm dev
```

然后访问 http://localhost:4321 进行本地预览

按 `Curl+C` 退出预览

# 推送至Github

创建一个 Github 仓库

然后在终端输入以下内容

```bash
git config --global user.name "你GitHub的用户名"
git config --global user.email "你注册GitHub的邮箱"
```

创建一个公钥链接

```bash
ssh-keygen -t rsa -C "你注册GitHub的邮箱"
```

在你的 `.ssh` 文件夹里找到 `id_rsa.pub`文件 复制里面的内容

回到Github 在 `SSH and GPG keys` 里面创建一个ssh 名称任意 内容为刚刚复制的内容

接着终端输入以下内容

```bash
ssh -T git@github.com
```

若提示 `Hi xxx! ...` 就代表成功连接至Github

将 Mizuki 仓库原来的 git 删除

```bash
git remote remove origin
```

然后设置 git 为自己的仓库链接 并将仓库设置为 ssh 连接

```bash
git remote add origin git@github.com:你的用户名/仓库名.git
git remote set-url origin git@github.com:你的用户名/仓库名.git
```

现在 我们一切就绪 将我们改好的代码推送至我们的仓库

```bash
git add .
git commit -m "项目初始化"
git push u origin main
```

# 推送至Cloudflare Pages(可选)

Tips: Cloudflare默认的Pagas域名在中国大陆无法使用，请使用自定义域名

将项目根目录下的 `astro.config.mjs` 里的 `site` 修改为自己的域名

三件套推送至Github

```bash
git add .
git commit -m "chore: 修改astro.config.mjs"
git push
```

访问 [Cloudflare](https://dash.cloudflare.com) 找到 Workers 和 Pages 创建一个 Pages

选择Git存储库 连接你的Github仓库 框架选择`Astro` 构建命令填`pnpm build` 构建设置目录填`dist`

泡一杯咖啡 稍等片刻 你的项目就部署在了Cloudflare Pages

找到自定义域选项 绑定你的域名即可

更多关于Mizuki配置请查阅 [Mizuki主题文档](https://docs.mizuki.mysqil.com/) 感谢你的观看