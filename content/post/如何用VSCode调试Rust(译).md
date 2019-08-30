---
title: '如何用VSCode调试Rust(译)'
date: 2019-08-30T11:13:52+08:00
categories: ['Rust']
tags: ['VSCode']
description: '如何在 VSCode 上，调试 Rust'
css: ['/css/main.css', '/css/stylesheet.css']
draft: false
---

![ ](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/header.png)

# 如何用 Visual Studio Code 调试 Rust

🌟 2019-03-24 ❤️ [原文][6-rs-vscode-debug]

[6-rs-vscode-debug]: https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/

我是 Visual Studio Code 编辑器的铁杆。不幸的是，它的 Rust 调试不 *太能* 开箱即用。

配置调试器并不困难。但有几个步骤。我已经看了好几遍了。我写这本指南是为了省下未来回想的脑力。

希望本指南对其他一些人也有用。

## 安装 Rust 和 VS Code

这应该不用多说了。

[安装 Rust](https://www.rust-lang.org/tools/install)\
[安装 Visual Studio Code](https://code.visualstudio.com/download)

## 安装 VS Code 扩展

您需要安装一个扩展。哪一个取决于你的平台。

[C/C++（Windows）](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)\
[codelldb（OS X/Linux）](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)

还要继续安装[Rust 扩展](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust)。

## 配置 VS Code

现在已经安装了工具，您需要配置 VS Code 启动属性。

单击“调试(Debug)”->“添加配置(Add Configuration)”\
如果您在 Windows 上，请选择`C++ (Windows)`\
如果您使用的是 Mac 或 Linux，请选择`LLDB: Custom Launch`

这应该会创建并打开`launch.json`。您必须手动更改“program”下的可执行文件名。

![launch.json](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/01.png)

接下来，您应该验证是否启用了断点。有些读者说需要这样做。一些机器是默认启用它。🤷‍♂️

![Breakpoint settings](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/07.png)

文件->首选项->设置（File -> Preferences -> Settings）

就这样！

添加断点。按 F5 启动。哇！

## 限制

Rust 的调试工作*确实*好。虽不算完美。但是已经很好拉！

基本类型工作正常。当然，是它们没有被编译器优化掉的假设下。

![Basic Types](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/02.png)

我发现，在优化“未使用”变量时，Rust 编译器比 C++更具侵略性。有时我只是为了调试下，在变量中存储中间值，但值总是会’缺席‘，这有点烦人。

`Vectors`工作很好。谢天谢地。我希望未展开的“preview”能提供更多信息。

![Basic Types](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/03.png)

不幸的是，其他容器类型根本不起作用。`HashMap`是无法辨认的废品。:(

![HashMap](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/04.png)

Visual Studio 2017 拥有[natvis](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects?view=vs-2017)，这个 C++ 调试工具。其实并不太好。我有很多抱怨。但总比 Rust 强。

![VisualStudio2017](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/06.png)

## 混合调试

在写这篇文章的时候，我学到了一些新的东西。我有点激动，想和大家分享。

我正在试验[microprofile](https://crates.io/crates/microprofile)箱子。其中，它的行为不像我想象的那样，所以我进入了调试器。令我惊讶的是，我能无缝地进入箱子的 Rust 代码。但真正让我震惊的是，我还可以直接进入它的底层 C++代码！

![C++ Debugging](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/img/05.png)

所有的这些都会“奏效”。不需要其他配置。您不必手动指定包含路径。

这太棒了！你可以很容易地进入箱子依赖。如果箱子依赖 C++代码，那么您也可以调试它。

我不知道这么容易。多么令人愉快的惊喜！

## 示例项目

我已经准备了一个小样本项目，它的`launch.json`预配置。这应该“奏效”。

1.  运行`cargo build`
2.  打开`.vscode/ws.code-workspace`
3.  添加断点
4.  选择调试启动配置
5.  按 F5 键

下载：[vscode_rust_example.zip](https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/assets/vscode_rust_example.zip)

## 最后的想法

感谢调试组的工作人员。使用 VS Code 调试 rust 并不完美，但它非常好。本指南应包含您开始所需的一切。

这应该在任何平台上都能工作。不过，我只测试了 Windows 和 OS X。如果我错过了一个步骤或进程发生了更改，请通知我。

谢谢你的阅读。

Forrest Smith©2019 年。版权所有。
