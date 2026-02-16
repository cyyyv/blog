---
title: "网络技术: 移动吉比特H2-3e光猫改桥接"
published: 2026-02-16
pubDate: 2026-02-16
description: 移动吉比特H2-3e光猫改桥接
draft: false
tags: [网络, 光猫, 随笔]
category: 教程
author: 垂叶叶叶
image: 'https://i0.hdslb.com/bfs/openplatform/695f0de4b64d62dd05bc3f15d6cb4328b1149340.jpg@1e_1c.webp'
---

# 前言

大家好！今天是除夕，我在这里先祝福大家除夕快乐！虽是佳节，但我们探索科技的脚步不会停息，今天跟大家分享中国移动`H2-3e`光猫如何改桥接模式

# 准备

首先 想要更改桥接模式 就必然需要光猫的超级管理员账号(不是光猫背面的) 用户名一般都是`CMCCAdmin`(注意大小写) 而密码就比较难获得了 这里有两种已知的可能密码 如果都不是就只能找当地的运维师傅索要了(要不到就算了)

1. `aDm8H%MdA`

2. `SN码的第3-5位+8m%+SN码的末3位`

Tips: SN码通常在光猫背部的标签上

像我家的光猫就是第一个密码

![](https://i0.hdslb.com/bfs/openplatform/e9d6b877af962aeef6ec4ec5d3e277d7adcf4f9a.jpg@1e_1c.webp)

其次 我们还需要知道宽带账号与密码 这个一般很容易知道 光猫上都有写 实在不知道打10086找客服问一下就行

# 实操

看到这里 想必你现在已经登录了光猫的超级管理员后台

我们找到`网络`里的`Internet连接` 然后在连接名称里找到`2_INTERNET_R_VID_xxxx`

![](https://i0.hdslb.com/bfs/openplatform/57315ccffe7c56557a92496f764bbdca9a1bab89.jpg@1e_1c.webp)

我们需要记住`VLAN 模式` `VLAN ID` 然后把这条连接删了

随后 我们新建一条连接 模式选`桥模式` 业务模式选`INTERNET` 

VLAN ID VLAN 模式写你刚刚记的 

`DHCP服务使能`可开可不开 据说关了能够保证改桥接后也能访问光猫(不过不知道为什么我不行)

接着保存

![](https://i0.hdslb.com/bfs/openplatform/3204ed3b89d3342baae4943466dd385fde1bafc7.jpg@1e_1c.webp)

随后 访问路由器后台 用路由器背面的账号信息登录

找到上网设置 将WAN口连接类型的`自动获取IP地址`改为`宽带拨号上网`

填入你的宽带账号与密码 保存拨号就好了

![](https://i0.hdslb.com/bfs/openplatform/a5f27c7fda8061162a4065a8df3ac101a34c2ec8.jpg@1e_1c.webp)

# 后话

Q: 桥接网速会变快吗

A: 一般不会 相反 它可能使家里网络变得不稳定 我之前改桥接每隔两个多月就会平白无故断网一次(应该是运营商的后台弄的鬼) 随后放弃 一般来说 没有家中服务需要外网访问等特殊要求 不建议折腾

感谢你的观看