---
title: "博客搭建: 使用安知鱼主题美化你的博客"
published: 2025-08-09
pubDate: 2025-08-09
description: 使用安知鱼主题美化你的博客
draft: false
tags: [Hexo, 安知鱼, 随笔]
category: 教程
author: 垂叶叶叶
image: 'https://i0.hdslb.com/bfs/openplatform/7225387d88b3187d69a81590ff58096dcc9fc05d.webp@1e_1c.webp'
---

本教程参考内容 [安知鱼主题文档](https://docs.anheyu.com/)

封面来源 [安知鱼主题文档](https://docs.anheyu.com/)

# 主题安装

Tips: 如果你发现安装速度太慢或无法安装 请切换网络

在你博客目录下打开终端 输入以下内容安装主题

```bash
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

接着输入以下内容安装渲染器

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

如果你是 Linux 用户或 mac 用户 在你博客目录下打开终端 输入以下内容进行覆盖配置

```bash
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
```

如果你是 Windows 用户 请手动复制 /themes/anzhiyu/_config.yml 文件到你博客目录 并重命名为 _config.anzhiyu.yml 进行覆盖配置

修改你博客目录下的 _config.yml 文件 找到theme 修改 theme 的值为 anzhiyu

```bash
theme: anzhiyu
```

接下来 你就可以进行本地预览了 输入以下内容本地预览 以确保主题正确安装

```bash
hexo cl
hexo g
hexo s
```

# 生成标签页和分类页

1.在你博客目录下打开终端 输入以下内容生成标签页

```bash
hexo new page tags
```

找到 你的博客目录 /source/tags/index.md 这个文件 修改为以下内容 时间自行替换 (请自行去除空格)
```bash
    ---
    title: 标签
    date: 2025-08-09 12:15:49
    aside: false
    type: "tags"
    comments: false
    top_img: false
    ---
```

2.在你博客目录下打开终端 输入以下内容生成分类页

```bash
hexo new page categories
```

找到 你的博客目录 /source/categories/index.md 这个文件 修改为以下内容 时间自行替换 (请自行去除空格)

```bash
    ---
    title: 分类
    date: 2025-08-09 12:15:49
    aside: false
    type: "categories"
    comments: false
    top_img: false
    ---
```

# 其它功能配置(可选)

1.安装abbrlink插件(随机你文章的链接)

在你博客目录下打开终端输入以下内容

```bash
npm install hexo-abbrlink --save
```

然后打开你博客目录下的 _config.yml 文件(不是 _config.anzhiyu.yml 文件) 找到permalink 修改为以下内容

```bash
permalink: posts/:abbrlink/
```

还是这个文件 到末尾处(或随便一个空白处)添加以下内容

```bash
# abbrlink config
abbrlink:
  alg: crc32
  rep: hex
```

2.安装文章置顶插件

在你博客目录下打开终端输入以下内容

```bash
npm install hexo-generator-topindex --save
```

找到你要设置置顶的文章 添加top参数 以下为示例 (请自行去除空格)

```bash
    ---
    title: 文章标题
    date: 文章创建时间
    top: 1
    categories:
    - 分类
    tags:
    - 标签
    ---
```


如果有多个文章要设置置顶 修改 top 的值即可 数字越大 权重越高

更多关于安知鱼主题的美化和功能请自行访问 [安知鱼主题文档](https://docs.anheyu.com/) 感谢你的观看