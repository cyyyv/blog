---
title: "博客搭建: 使用Hexo框架搭建博客并托管至Github Pages"
published: 2025-08-09
pubDate: 2025-08-09
description: 使用Hexo框架搭建博客并托管至Github Pages
draft: false
tags: [Hexo, 随笔, Github]
category: 教程
author: 垂叶叶叶
image: 'https://i0.hdslb.com/bfs/openplatform/542bfb390a4e14ed475a1de8df8d446694717887.png@1e_1c.webp'
---

本教程适用于 Linux 用户 Windows和Mac用户安装可参考 [Hexo官方文档](https://hexo.io/docs/)

本教程参考内容 [crystal的帖子](https://zhuanlan.zhihu.com/p/60578464)

# 环境配置

Tips: 如果你发现安装速度太慢或无法安装 请切换网络

1.安装Git

如果你是 Ubuntu 或者 Debian发行版 在终端设备中输入以下内容

```bash
sudo apt-get install git-core
```

如果你是CentOS发行版 在终端设备中输入以下内容

```bash
sudo yum install git-core
```

2.安装Node.js

首先在终端输入以下内容 安装nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

接着你可以选择重启终端或加载nvm

```bash
\. "$HOME/.nvm/nvm.sh"
```

然后用nvm命令安装Node.js 这里安装的是LTS 你也可以换成其它版本

```bash
nvm install --lts
```

最后验证是否安装成功 如果输出你安装的版本号即为成功

```bash
npm --v
```

# 安装Hexo

输入以下内容安装Hexo

```bash
npm install -g hexo-cli
```

然后新建一个文件夹 并切换到这个文件夹目录

输入以下内容完成Hexo初始化

```bash
hexo init
npm install
```

此时你会发现你创建的文件夹内多了许多文件 代表你成功了

让我们来预览一下

输入以下内容开启本地预览

```bash
hexo cl
hexo g
hexo s
```

浏览器访问 http://localhost:4000 进行本地预览

最后Ctrl+C关闭本地服务

# 托管至Github Pages

登录Github账号 创建一个新仓库 仓库名称为”你的用户名.github.io”

打开终端 输入以下内容

```bash
git config --global user.name "你GitHub的用户名"
git config --global user.email "你注册GitHub的邮箱"
```

接着创建公钥

```bash
ssh-keygen -t rsa -C "你注册GitHub的邮箱"
```

然后一路回车 不要设置密码 否则后续更新代码会频繁让你输入密码

打开你home文件夹下的.ssh文件夹 找到 id_rsa.pub 文件并复制里面的内容

回到Github 点击你的头像 打开Settings页面 找到SSH and GPG keys 点击New SSH key

名称随便起一个你喜欢的 key内容粘贴你复制的公钥

点击 Add SSH key 保存

接着回到终端输入以下内容连接github

```bash
ssh -T git@github.com
```

输入yes 弹出 “Hi xxx! ….”就成功了

回到终端 输入以下内容 安装Hexo插件

```bash
npm install hexo-deployer-git --save
```

然后到你创建的文件夹目录下找到_config.yml 在末尾处修改deploy为

```bash
deploy:
  type: git
  repository: git@github.com:用户名/用户名.github.io.git
  branch: main
```

接着在终端输入

```bash
hexo d
```

现在你可以通过访问 https://用户名.github.io 来访问你的博客了

# 绑定域名(可选)

在你的域名解析商里设置CNAME解析到 用户名.github.io 或添加A记录为

```bash
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153
```

找到你创建的github仓库 点击齿轮打开仓库设置(不是点击你的头像的那个设置) 找到Pages 在Custom domain里输入你的域名

最后在你博客文件夹下的source文件夹里添加一个CNAME文件 里面输入你的域名

到此你完成了搭建博客并托管至Github Pages 感谢观看