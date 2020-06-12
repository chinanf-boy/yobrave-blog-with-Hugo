---
title: "Rust周报 342(译)"
date: 2020-06-12T17:25:40+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-342"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-06-10
- [原文：342 期](https://this-week-in-rust.org/blog/2020/06/10/this-week-in-rust-342/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

看看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/017-twir-341-342/)

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rust 1.44.0](https://blog.rust-lang.org/2020/06/04/Rust-1.44.0.html)
- [RustConf 2020 注册已开放](https://rustconf.com/)
- [Rust 使用 Win32 API，枚举监视器（monitors）](https://patriksvensson.se/2020/06/enumerating-monitors-in-rust-using-win32-api/)
- [Rust cli 应用程序与 slack 集成](https://bprog.github.io/rust_slack_bot/)
- [Hack week：Rust miniCouchDB](https://www.garrensmith.com/blogs/mini-couch-hack-week)
- [从零到生产#1：工具链、IDEs、CI](https://www.lpalmieri.com/posts/2020-06-06-zero-to-production-1-setup-toolchain-ides-ci/)
- [从 Rust 到 Svelte，我会用什么技术](https://hugodaniel.pt/posts/browser-tech-stack-2020/)
- [Rust 的 图和树遍历](https://sachanganesh.com/programming/graph-tree-traversals-in-rust/)
- [编程语言：Rust 首次进入 20 强流行排行榜](https://www.zdnet.com/article/programming-languages-rust-enters-top-20-popularity-rankings-for-the-first-time/)
- [Rust SentencePiece 实现](https://guillaume-be.github.io/2020-05-30/sentence_piece)
- [在 C 中，我错过的 Rust](https://people.gnome.org/~federico/blog/rust-things-i-miss-in-c.html)
- [那么，微软（以及其他所有人）对 Rust 的热爱到底是怎么回事呢？](https://visualstudiomagazine.com/articles/2020/06/02/rust-love.aspx?m=1)
- [为什么使用 Rust 的开发人员如此喜欢它](https://stackoverflow.blog/2020/06/05/why-the-developers-who-use-rust-love-it-so-much/?cb=1)
- [Rust 尾调用优化的故事](https://dev.to/seanchen1991/the-story-of-tail-call-optimizations-in-rust-35hf)
- [Result, Option, unwrap 和 ? 操作符 in Rust，不愉快之路](https://dev.to/codeprototype/taking-the-unhappy-path-with-result-option-unwrap-and-operator-in-rust-482b)
- [Rust OSDev 月刊（2020 年 5 月）](https://rust-osdev.com/this-month/2020-05/)
- [Rust GameDev 月刊 #10- 2020 年 5 月](https://rust-gamedev.github.io/posts/newsletter-010/)
- [rustsim 月刊 #11（2020 年 4 月至 5 月）](https://www.rustsim.org/blog/2020/06/01/this-month-in-rustsim/)
- [Rust 区块链新闻 #12 - ZK-Rustups](https://rustinblockchain.org/newsletters/2020-06-03-zk-rustups/)
- [考虑解决内存安全问题？所有的 Rust CVEs 的实验研究](https://arxiv.org/abs/2003.03296)
- [用 Rust 创建自己的编程语言](https://createlang.rs/)
- [rust-analyzer changelog #28](https://rust-analyzer.github.io/thisweek/2020/06/08/changelog-28.html)
- [Rust/WinRT 入门](https://kennykerr.ca/2020/06/05/getting-started-with-rust-winrt/)
- \[中文] [simple sorting algorithms in rust](https://www.bilibili.com/read/cv4991161)
- \[印度尼西亚语] [berbagai alasan melakukan programming dalam rust](https://dev.to/rizki96/berbagai-alasan-melakukan-programming-dalam-rust-p67)
- \[幻灯片] [rust in 15 minutes](https://geigerkind.github.io/training_presentations/rust_in_15_minutes/presentation.html))
- \[视频] [rust web development | boilerplate free with rocket](https://youtu.be/tjH0Mye8U_A))
- \[视频] [educational rust live coding - building a web app - part 4](https://www.youtube.com/watch?v=Dj8i3rM8FIQ))
- \[视频] [iterators - rust](https://www.youtube.com/watch?time_continue=1&v=HZftwxCIXqE&feature=emb_logo))
- \[视频] [browser computation with webassembly live stream](https://www.twitch.tv/occupy_paul_st))
- \[视频] [jonathan teaches jason rust!](https://www.youtube.com/watch?v=Y5-ZgxfQvpc))

# 一周一箱

这个星期的箱子是[cargo-spellcheck](https://github.com/drahnr/cargo-spellcheck)，用于拼写检查文档的 cargo 子命令。

多谢[Bernhard Schuster](https://users.rust-lang.org/t/crate-of-the-week/2704/777)这个建议！

[提交下周的建议和投票][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

- [maud：默认情况下，添加一个“不稳定”特性](https://github.com/lambda-fairy/maud/issues/187)
- [maud: 将 Span::def_site 的所有用途，更改为 Span::mixed_site](https://github.com/lambda-fairy/maud/issues/190)
- [maud: 文档化“允许 class 和 ID 名称中的任意属性语法”](https://github.com/lambda-fairy/maud/issues/167)
- [maud：迁移到第三方`quote!`宏](https://github.com/lambda-fairy/maud/issues/191)

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会强调 Rust 社区的一些任务，供您选择并开始！

其中一些任务可能还提供了导师，请访问任务页以获取更多信息。

如果您是 Rust 项目的所有者并正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 更新

350 个请求在[上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-06-01..2020-06-08

- [InstCombine：不要将`&mut *x`优化为`x`](https://github.com/rust-lang/rust/pull/72820)
- [添加`-Z span-debug`，简化 proc 宏的调试](https://github.com/rust-lang/rust/pull/72799)
- [避免设置错误的 obligation，导致关联类型的 span 不匹配](https://github.com/rust-lang/rust/pull/72807)
- [更小心点，generators 的`ty::Error`使用](https://github.com/rust-lang/rust/pull/72764)
- [完成：尝试使用`SmallVec`或`Box` for `stalled_on`](https://github.com/rust-lang/rust/pull/72776)
- [`impl AsRef<[T]> for vec::IntoIter<T>`](https://github.com/rust-lang/rust/pull/72583)
- [chalk：准备首发](https://github.com/rust-lang/chalk/pull/483)
- [简单`default()`，用为`Default::default()`](https://github.com/rust-lang/rust/pull/73001)
- [稳定化：`std::io::Buf{Reader, Writer}::capacity`](https://github.com/rust-lang/rust/pull/72924)
- [添加-关联的 consts `MIN`/`MAX` for `Wrapping<Int>`](https://github.com/rust-lang/rust/pull/72891)
- [取消升级 Duration::from_secs](https://github.com/rust-lang/rust/pull/71796)
- [编译器内置：为 LVI 手动修补 ret 指令](https://github.com/rust-lang/compiler-builtins/pull/359)
- [cargo：添加环境变量，以标识 二进制文件和 crate 名称](https://github.com/rust-lang/cargo/pull/8270)
- [cargo：允许没有 dll 后缀的 Windows dylibs](https://github.com/rust-lang/cargo/pull/8310)
- [cargo：传递相对路径到`Workspace::new`，给出更好的错误信息](https://github.com/rust-lang/cargo/pull/8321)
- [cargo：不要在苹果平台上，哈希化可执行文件名](https://github.com/rust-lang/cargo/pull/8329)
- [cargo：支持`{prefix}`和`{lowerprefix}` markers，在`config.json` `dl` 字段](https://github.com/rust-lang/cargo/pull/8267)
- [cargo：如果在 git URL 中使用 hash，则发出警告](https://github.com/rust-lang/cargo/pull/8297)
- [cargo：在 resolutions 之间，重置 lockfile 信息](https://github.com/rust-lang/cargo/pull/8274)
- [crates.io：修复问题：crates.io 允许加号介入 crate 名称](https://github.com/rust-lang/crates.io/pull/2551)
- [docs.rs：打印“fail to build”的箱子回溯](https://github.com/rust-lang/docs.rs/pull/823)
- [rustfmt：在可见性 modifier 和 item name 之间，选取注释](https://github.com/rust-lang/rustfmt/pull/4239)
- [rustfmt：保留 inner 和 outer block 文档注释中的 Markdown 换行符](https://github.com/rust-lang/rustfmt/pull/4233)
- [rustfmt：使用 rewrite buffer 来确定注释是否应该在新行上](https://github.com/rust-lang/rustfmt/pull/4229)
- [rustfmt: feat：条件性允许 stable/beta 上的不稳定 opts](https://github.com/rust-lang/rustfmt/pull/4228)

## Rust 编译器性能类

- [2020 年 6 月 9 日](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-06-09)

## 批准的 RFC

对 Rust 的更改跟随 Rust [RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 这些是本周批准实施的 RFC：

_本周没有批准 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [`impl tosocketaddrs for (string, u16)`](https://github.com/rust-lang/rust/pull/73007)
- \[处置：合并] [稳定化： `option::zip`](https://github.com/rust-lang/rust/pull/72938)
- \[处置：合并] [稳定化： `vec::drain::as_slice`](https://github.com/rust-lang/rust/pull/72584)
- \[处置：合并] [添加： raw_ref macros](https://github.com/rust-lang/rust/pull/72279)
- \[处置：合并] [打印由 rustc 访问的环境变量，将其作为特殊注释，放进 depinfo 文件](https://github.com/rust-lang/rust/pull/71858)

## 新的 RFC

_本周没有提出新的 RFC。_

# 本周引用句

> 生命周期（lifetime）不应由你（有意）声明。生命周期来自代码的形状，因此要改变生命周期，你必须改变代码的形状。

– [Alice Ryhl on rust-users](https://users.rust-lang.org/t/lifetime-of-a-returned-iterator/43732/2)

Thanks to [RustyYato](https://users.rust-lang.org/t/twir-quote-of-the-week/328/883) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/h0mt9k/this_week_in_rust_342/)</small>
