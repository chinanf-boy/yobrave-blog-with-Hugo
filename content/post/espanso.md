---
title: "Espanso - 可以作为打字替换工具的首选"
date: 2021-06-14T22:53:51+08:00
categories: ["Rust"]
tags: ["app"]
description: "Espanso 功能已然齐全"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "使用的东东"
draft: false
---

# [Espanso](https://github.com/federico-terzi/espanso)

跨平台的文字扩展工具：`':greet' -> 'hello world'`

![demo](/file_imgs/2021/example.gif)

## 安装

官方网站 [https://espanso.org](https://espanso.org/install/)

## 使用来说

### 先定义

```sh
espanso edit
# 打开的文本文件，自行修改
# EDITOR=/usr/bin/vim
```

简化如下：

```yml
# espanso configuration file

# This is the default configuration file, change it as you like it
# You can refer to the official documentation:
# https://espanso.org/docs/

# Matches are the substitution rules, when you type the "trigger" string
# it gets replaced by the "replace" string.
matches:
  # Simple text replacement
  - trigger: ":espanso"
    replace: "Hi there!"

  # Dates
  - trigger: ":date"
    replace: "{{mydate}}"
    vars:
      - name: mydate
        type: date
        params:
          format: "%m/%d/%Y"

  # Shell commands
  - trigger: ":shell"
    replace: "{{output}}"
    vars:
      - name: output
        type: shell
        params:
          cmd: "echo Hello from your shell"

  # 给出一个表格界面
  - trigger: ":greet"
    form: |
      Hey {{name}},
      Happy Birthday!
```

之后，就可以  `:espanso —> Hi there!`。

- 双击 Alt, 关闭。
- 配置文件，按名称区分啊等等。

至于其他的，[作者的文档](https://espanso.org/docs/)写得相当详细。