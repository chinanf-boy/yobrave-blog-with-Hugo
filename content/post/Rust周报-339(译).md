---
title: "Rust周报 339(译)"
date: 2020-05-22T00:24:54+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-339"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-05-19
- [原文：339 期](https://this-week-in-rust.org/blog/2020/05/19/this-week-in-rust-339/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

号外号外，从现在起，还有每周一次，_Rust 播客（This Week in Rust Podcast_ —— 重点介绍每期的一些故事。您可以在[Rustacean 站](https://rustacean-station.org/episode/015-twir-339/)了解首播。

# Rust 社区的更新

## 新闻和博客文章

- [走过五年的 Rust](https://blog.rust-lang.org/2020/05/15/five-years-of-rust.html)
- [2020 年的结构化和处理错误](https://nick.groenen.me/posts/rust-error-handling/)
- [充分利用 Rust 的自动向量化（Auto-Vectorization）](https://nickwilcox.github.io/blog/autovec/)
- [Rust - Web 路由的状态](https://pksunkara.com/posts/state-of-routing-in-rust/)
- [使用 GitHub Actions 服务单个和多个 targets - Rust releases](https://mateuscosta.me/rust-releases-with-github-actions)
- [通过构建微型 Markdown 编译器，开始 Rust 的开发](https://jesselawson.org/rust/getting-started-with-rust-by-building-a-tiny-markdown-compiler/)
- [Parcel and Rust：WASM Romcom](https://dev.to/potatostudios_/parcel-and-rust-a-wasm-romcom-545e)
- [使用 Raspberry Pi GPIO，Rust 读取温度传感器](https://dev.to/citizen_stig/reading-temperature-sensor-in-rust-using-raspberry-pi-gpio-bhf)
- [Rust Analyzer —— 未来几年](https://rust-analyzer.github.io/blog/2020/05/18/next-few-years.html)
- [FFI 中的 Rust 闭包](http://adventures.michaelfbryan.com/posts/rust-closures-in-ffi/)
- [将 Rust 用于汽车软件的案例](https://medium.com/@sojan.james/the-case-for-using-rust-for-automotive-software-19400779f126)
- [Gamedev＃4：全栈 Rust 的好处](https://www.jakobmeier.ch/blogging/Paddlers_4.html)
- [RISC-V OS 使用 Rust 第 9 章：Block IO](http://osblog.stephenmarz.com/ch9.html)
- [Rust 全球数据指南](https://github.com/paulkernfeld/global-data-in-rust)
- \[音频] [Rust 新版本 1.42 和 1.43 的 新 在哪](https://rustacean-station.org/episode/014-rust-1.42-1.43/)
- \[视频] [Jonathan Teaches jason rust!](https://www.youtube.com/watch?v=EzQ7YIIo1rY&feature=youtu.be)
- \[视频] [Educational rust coding - 构建一个 web app](https://www.twitch.tv/videos/623988324)
- \[视频] [Rust and C++ Cardiff virtual meetup](https://www.youtube.com/watch?v=s8WMaVU3EBs&feature=youtu.be)

# 周箱

这周的箱子是[apply](https://crates.io/crates/apply)，一个微型库，用于将随意函数，链接到方法调用链中。

谢谢[特雷弗·斯皮特里](https://users.rust-lang.org/t/crate-of-the-week/2704/769)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [clap-rs：Windows 上的子命令 bin_name，会在中间包含".exe"，而不是结尾（或是不完全）](https://github.com/clap-rs/clap/issues/992)
- [keikan：将渲染代码更新为符合 PBR](https://github.com/Tloru/keikan/issues/1)
- [keikan：实现不同的对象](https://github.com/Tloru/keikan/issues/2)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

359 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-05-11..2020-05-18

- [添加内置的 PSP target](https://github.com/rust-lang/rust/pull/72062)
- [优化’燃料‘用完时，发出警告](https://github.com/rust-lang/rust/pull/72067)
- [文字错误的报告 清除](https://github.com/rust-lang/rust/pull/72047)
- [不完整的功能也可能不健全](https://github.com/rust-lang/rust/pull/72045)
- [对`DroplessArena`/`TypedArena`成长，少点激进](https://github.com/rust-lang/rust/pull/71872)
- [为 std debug 断言，提供单独的选项](https://github.com/rust-lang/rust/pull/72146)
- [返工`std::iter::Step` trait](https://github.com/rust-lang/rust/pull/69659)
- [更简单的 slice `Iterator`方法](https://github.com/rust-lang/rust/pull/72166)
- [让`RawVec::grow`大多为非泛型](https://github.com/rust-lang/rust/pull/72013)
- [impl `FromStr` for `OsString`](https://github.com/rust-lang/rust/pull/71662)
- [make `offset` `must_use`](https://github.com/rust-lang/rust/pull/72143)
- [cargo：在某些情况下，忽略损坏的控制台输出](https://github.com/rust-lang/cargo/pull/8236)
- [cargo：使用 rlib/cdylib 箱子类型，处理 LTO](https://github.com/rust-lang/cargo/pull/8254)
- [cargo：在构建过程中，优雅地处理错误](https://github.com/rust-lang/cargo/pull/8247)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_上周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [替换：rust-analyzer 作为我们的官方 LSP（语言服务器协议）实现](https://github.com/rust-lang/rfcs/pull/2912)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：AtomicN::fetch_min and AtomicN::fetch_max](https://github.com/rust-lang/rust/pull/72324)
- \[处置：合并] [稳定化：process_set_argv0 功能 for unix](https://github.com/rust-lang/rust/pull/72123)
- \[处置：合并] [impl From <Cow\> for Box, Rc, and Arc](https://github.com/rust-lang/rust/pull/71447)
- \[处置：关闭] [跟踪问题：non_static_type_id](https://github.com/rust-lang/rust/issues/41875)

## 新的 RFC

- [RFC:读取进未初始化的缓冲区](https://github.com/rust-lang/rfcs/pull/2930)

# 本周引用句

> 异常处理代码（exceptions）背后的全部动机是业务逻辑可以得以传递，专注于开发者在此过程中，是如何思考的，而不需要进行大量的错误检查，以及控制代码来掩盖这个逻辑。因此导致，错误被“try”掩埋在'地毯'下面，用“catch”挡住视线。
>
> 然而，在我的世界观中，失败一直都在，它可以说是一种常见的现象。而因为它太重要了，所以不能隐藏起来。故，在您编写的代码中，异常处理的原则应该是“面向人们” —— 那些读它的人。

– [ZiCog on rust-users](https://users.rust-lang.org/t/did-rust-make-the-right-choice-about-error-handling/41736/29)

Thanks to [Lzutao](https://users.rust-lang.org/t/twir-quote-of-the-week/328/872) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/gmyv8h/this_week_in_rust_339/).</small>
