---
title: "Alfred 与 Wox：桌面效率工具的代名词"
date: 2021-06-18T15:38:44+08:00
categories: ["Windows"]
tags: ["app"]
description: "Alfred，Wox：可快速启动、计算、查找等"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "使用的东东"
draft: false
---

# 效率工具 Alfred 与 Wox。

场景：网页链接/本地文件与程序/翻译，与网址沟通等等。

![ts](/file_imgs/2021/ts.png)

> 翻译

对应安装教程 [知乎 for Wox](https://zhuanlan.zhihu.com/p/68383315) 与 [简书 for Alfred](https://www.jianshu.com/p/e9f3352c785f)

## **Wox 示例：添加一个快速的翻译页面跳转。**

1. 在桌面屏幕，右下方找到 Wox 图标，右键 `setting`。
2. 设置新的网页链接:

![demo](/file_imgs/2021/ts-demo.png)

URL(注意那个 `{q}`，就是用户所写的占位符):

```
https://translate.google.cn/?sl=en&tl=zh-CN&text={q}%20&op=translate
```
