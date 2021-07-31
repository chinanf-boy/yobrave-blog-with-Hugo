---
title: "Host的秘密以及工具 UsbEAm Hosts Editor"
date: 2021-07-31T11:35:36+08:00
tags: ["app"]
description: "UsbEAm Hosts Editor 多平台 hosts 修改"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "使用的东东"
draft: false
---

## Host

host 文件 —— 域名与 IP 相对应的’覆盖型‘配置文件。至于关联的爱恨情仇就不多说。

典型的例子莫过于：Github.com 网页的“加速”访问。

通过修改 host 文件（**不要急着找文件在哪，也不用急着抄，后面有工具**）

```sh
# GitHub Host Start

185.199.108.154              github.githubassets.com
140.82.112.21                central.github.com
185.199.108.133              desktop.githubusercontent.com
185.199.108.153              assets-cdn.github.com
185.199.108.133              camo.githubusercontent.com
185.199.108.133              github.map.fastly.net
199.232.5.194                github.global.ssl.fastly.net
140.82.113.4                 gist.github.com
185.199.108.153              github.io
140.82.114.3                 github.com
140.82.112.5                 api.github.com
185.199.108.133              raw.githubusercontent.com
185.199.108.133              user-images.githubusercontent.com
185.199.108.133              favicons.githubusercontent.com
185.199.108.133              avatars5.githubusercontent.com
185.199.108.133              avatars4.githubusercontent.com
185.199.108.133              avatars3.githubusercontent.com
185.199.108.133              avatars2.githubusercontent.com
185.199.108.133              avatars1.githubusercontent.com
185.199.108.133              avatars0.githubusercontent.com
185.199.108.133              avatars.githubusercontent.com
140.82.114.10                codeload.github.com
52.216.9.227                 github-cloud.s3.amazonaws.com
52.217.74.20                 github-com.s3.amazonaws.com
52.217.48.92                 github-production-release-asset-2e65be.s3.amazonaws.com
52.216.250.204               github-production-user-asset-6210df.s3.amazonaws.com
52.217.74.124                github-production-repository-file-5c1aeb.s3.amazonaws.com
185.199.108.153              githubstatus.com
64.71.144.202                github.community
185.199.108.133              media.githubusercontent.com

# Please Star : https://github.com/ineo6/hosts
# Mirror Repo : https://gitee.com/ineo6/hosts
# Update at: 2021-07-31 10:24:17

# GitHub Host End
```

先说说为什么要这样做吧。

**地点，运营商**的不同，都会导致 `github.com` 域名，解析出来的 IP 有所不同，而最快的 IP _一般情况下，只有一个_。可视化表现上，我们借用 [站长工具（点击）](http://ping.chinaz.com/github.com) ，就可以看到结果了。

通过，host 文件的修改，定下了 ip <-> 域名，不用再花时间去找了（外网域名，极大可能找不到）。

## UsbEAm Hosts Editor

![UsbEAm Hosts Editor](https://www.dogfight360.com/blog/wp-content/uploads/2021/07/image-17.png)

只有一个文件的修改。那么，我们工具需要的方便是什么：

1. 不同平台的 host 文件位置不同。按钮: 编辑 Host。
2. github 网站并不是我们的全部，我还有游戏之类的呢。菜单: 不同网站/平台/游戏的 预设 host，想选哪个就哪个。
3. 一般情况下，只有一个 ip，那我不一般呢。好的，检测不同 ip 的延迟。
4. 。。。

一个 host 编辑工具的方便功能，基本上都有了，欢迎大家，去作者的软件网页查看使用 https://www.dogfight360.com/blog/475/。

> 个人使用原因：最近玩 黑色沙漠的台服，原来是蜗牛般的更新速度，修改 host 之后，恢复正常。
