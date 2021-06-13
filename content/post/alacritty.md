---
title: "Alacritty —— 小于5M, 跨平台, OpenGL 终端应用"
date: 2021-06-14T00:42:19+08:00
categories: ["Rust"]
tags: ["app"]
description: "alacritty"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "使用的东东"
draft: false
---

# Alacritty

[Alacritty](https://github.com/alacritty/alacritty#configuration) - 小于 5M, 跨平台, OpenGL 终端窗口。

![demo](/file_imgs/2021/alacritty-demo.png)

## 配置

开始，你要自己新建一个配置文件（下面任一路径都行）：

1. `$XDG_CONFIG_HOME/alacritty/alacritty.yml`
2. `$XDG_CONFIG_HOME/alacritty.yml`
3. `$HOME/.config/alacritty/alacritty.yml`
4. `$HOME/.alacritty.yml`

- 而在 Windows，配置应该在 `%APPDATA%\alacritty\alacritty.yml`。

下面是我的简单示例，详细了解，请进入 Alacritty 的 [releases 页面的最新版本，其中的 `alacritty.yml`](https://github.com/alacritty/alacritty/releases) 。

```yml
window:
  dimensions:
    columns: 170
    lines: 40
  position:
    x: 300
    y: 300

font:
  size: 16.0

colors:
  primary:
    background: "#272822"
    foreground: "#F8F8F2"

  normal:
    black: "#272822"
    red: "#F92672"
    green: "#A6E22E"
    yellow: "#F4BF75"
    blue: "#66D9EF"
    magenta: "#AE81FF"
    cyan: "#A1EFE4"
    white: "#F8F8F2"

  bright:
    black: "#75715E"
    red: "#F92672"
    green: "#A6E22E"
    yellow: "#F4BF75"
    blue: "#66D9EF"
    magenta: "#AE81FF"
    cyan: "#A1EFE4"
    white: "#F9F8F5"

shell:
  program: wsl.exe -d Ubuntu-20.04

mouse_bindings:
  - { mouse: Middle, action: PasteSelection }
  - { mouse: Right, action: Paste }

key_bindings:
  - { key: V, mods: Control, action: Paste }
```
