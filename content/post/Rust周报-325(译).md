---
title: "Rust周报 325(译)"
date: 2020-02-14T11:34:24+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-325"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](<(https://this-week-in-rust.org)>)
- 日期：2020-02-11
- [原文：325 期](https://this-week-in-rust.org/blog/2020/02/11/this-week-in-rust-325/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Alex Crichton：减少我对 Rust 的参与](https://internals.rust-lang.org/t/scaling-back-my-involvement-in-rust/11754)。
- [将 async/await 引入 embedded Rust](https://ferrous-systems.com/blog/embedded-async-await/)。
- [宣布: the Cleanup Crew ICE-breaker 小组](https://blog.rust-lang.org/inside-rust/2020/02/06/Cleanup-Crew-ICE-breakers.html)。
- [Rust 游戏开发生态系统调查的结果](https://rust-gamedev.github.io/posts/survey-01/)。
- [Rusoto 的 `std::future::Future`](https://linuxwit.ch/blog/2020/02/the-future-of-rusoto/)。
- [在 VSCode 中，调试 Rust（2020 年）](https://jason-williams.co.uk/debugging-rust-in-vscode)。
- [从 React 的角度，来看 Rust 和 GTK](https://savanni.luminescent-dreams.com/2020/01/15/rust-react-gtk/)。
- [Rust 异步入门](https://omarabid.com/async-rust)。
- [解决 Rust 中的 sparse matrix 系统](https://medium.com/swlh/solving-sparse-matrix-systems-in-rust-5e978ed07bc3)。
- [我做了一件事情：Markedit](http://adventures.michaelfbryan.com/posts/markedit/)。
- [创建交互式应用程序](http://adventures.michaelfbryan.com/posts/implementing-interactive-applications/)。
- [异步采访 6：Eliza Weisman](https://smallcultfollowing.com/babysteps/blog/2020/02/11/async-interview-6-eliza-weisman/)。
- [rust-analyzer changelog 11](https://rust-analyzer.github.io/thisweek/2020/02/10/changelog-11.html)。

# 周箱

这周的箱子是[argh](https://github.com/google/argh)，是 Rust 的一个有主见的参数解析小库。

谢谢[Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/718)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [image：跟踪问题：转换 error representation](https://github.com/image-rs/image/issues/1134)。
- [Ferrous 系统和 TrueLayer：2020 年 3 月在伦敦进行 Rust 培训](https://ferrous-systems.com/blog/training-in-london/)。
- [libc 箱子正在寻找维护者](https://github.com/rust-lang/libc/issues/1657)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 261 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-02-03..2020-02-10

- [为 RISC-V 实现适当的 C ABI lowering](https://github.com/rust-lang/rust/pull/68452)
- [初步实现`#![feature(move_ref_pattern)]`](https://github.com/rust-lang/rust/pull/68376)
- [解析器：停止使用`BytePos`用于计算 spans](https://github.com/rust-lang/rust/pull/68845)
- [移除`HashStable` impl for `ast::Lifetime`](https://github.com/rust-lang/rust/pull/68919)
- [用 Universe 替换 leak check，take 2](https://github.com/rust-lang/rust/pull/65232)
- [调整 obligantion 错误输出](https://github.com/rust-lang/rust/pull/68377)
- [改进报告错误和 trait bounds 建议](https://github.com/rust-lang/rust/pull/67665)
- [对 or-patterns 实现 MIR lowering](https://github.com/rust-lang/rust/pull/67668)
- [提高`merge_from_succ`性能](https://github.com/rust-lang/rust/pull/68790)
- [减少`RefCell`在`InferCtxt`的数量](https://github.com/rust-lang/rust/pull/68694)
- [提高 coherence checks 的性能](https://github.com/rust-lang/rust/pull/68966)
- [加快固有 impl 的重叠检查](https://github.com/rust-lang/rust/pull/68911)
- [generator 恢复参数](https://github.com/rust-lang/rust/pull/68524)
- [删除一些不合理的 specialization](https://github.com/rust-lang/rust/pull/68358)
- [从`RangeInclusive`中删除有问题的 specialization](https://github.com/rust-lang/rust/pull/68835)
- [在`core::cmp`中，用`#[must_use]`标记几个函数和方法](https://github.com/rust-lang/rust/pull/68946)
- [impl `AsMut<str>` for `String`](https://github.com/rust-lang/rust/pull/68742)
- [修复和测试`BTreeMap::`{`first_entry`，`last_entry`，`pop_first`，`pop_last`}的实现](https://github.com/rust-lang/rust/pull/68834)
- [`BtreeMap::range_search`修剪](https://github.com/rust-lang/rust/pull/68499)
- [使`num::NonZeroX::new`成为不稳定的 const fn](https://github.com/rust-lang/rust/pull/68976)
- [使更多的算术函数不稳定](https://github.com/rust-lang/rust/pull/68809)
- [移除`Copy` impl form `OnceWith`](https://github.com/rust-lang/rust/pull/68810)
- [derive `Clone + Eq` for `std::string::FromUtf8Error`](https://github.com/rust-lang/rust/pull/68738)
- [feature：添加`TryFutureExt::map_ok_or_else`方法](https://github.com/rust-lang/futures-rs/pull/2058)
- [cargo：修复`BuildScriptOutput`，当 build script 多次运行时](https://github.com/rust-lang/cargo/pull/7857)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实现的 RFC：

- [RFC 2396：target_feature 1.1](https://github.com/rust-lang/rfcs/pull/2396)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [rust 2020 路线图](https://github.com/rust-lang/rfcs/pull/2857)。

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [将原型模型，添加到 libcore](https://github.com/rust-lang/rust/pull/67637)。
- \[处置：合并] [rustc_session: 运行从一个 group，手动控制 lint level of individual lints](https://github.com/rust-lang/rust/pull/67885)。
- \[处置：合并] [添加 wake trait for wakers 的 安全结构体](https://github.com/rust-lang/rust/pull/68700)。
- \[处置：合并] [添加 display 和 error impls for proc_macro::lexerror](https://github.com/rust-lang/rust/pull/68899)。
- \[处置：合并] [稳定化： once::is_completed](https://github.com/rust-lang/rust/pull/68945)。
- \[处置：关闭] [修复一个矛盾点 in linux version of tcplistener::accept](https://github.com/rust-lang/rust/pull/67028)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

本周我们有两个相关的引用句：

> **即使只进行了基本的优化，Rust 仍然能够超越超手动调整的 Go 版本。**这充分证明了用 Rust 编写高效的程序比用 Go 进行深层次开发要容易得多。
>
> [..] 经过一些分析和性能优化之后，**我们能够在每一个性能指标上都超过 Go**。在 Rust 版本中，延迟、CPU 和内存都更好。

– [Jesse Howard on the discord blog](https://blog.discordapp.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f)

> 一致性的问题确实不应该被忽视。性能即使是不错，但慢而一致的计划，仍然比不一致的容易得多。
>
> 当我用这门语言推出我的第一个项目时，那是一个关于 Rust 的伟大时刻。因为担心它，我增加了太多的测量，这样我就可以知道它的每一点是如何响应实际"交换"的。但当我开始看到数据的那一刻，我确信我的检测代码是坏的。我看到的那些图表实在是…有够无聊的。直线无处不在，没有变化…在 24 小时后，即使是最慢的响应（不是 P99… 字面上的 P100）也在最快响应的 75 毫秒内。

– [/u/tablair commenting on /r/rust](https://www.reddit.com/r/rust/comments/eytyug/why_discord_is_switching_from_go_to_rust/fgjjpiv/)

Thanks to [Jules Kerssemakers](https://users.rust-lang.org/t/twir-quote-of-the-week/328/811) and [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/809) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/f3a5hu/this_week_in_rust_325/).</small>
