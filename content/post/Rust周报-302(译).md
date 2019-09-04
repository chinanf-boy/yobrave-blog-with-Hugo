---
title: 'Rust周报 302(译)'
date: 2019-09-04T21:39:23+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-302'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-09-03

[原文：本周 Rust(螃蟹) 302](https://this-week-in-rust.org/blog/2019/09/03/this-week-in-rust-302/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust Web 应用程序简介](https://erwabook.com/intro/)。
- [本月 Rust GameDev＃1 - 2019 年 8 月](https://rust-gamedev.github.io/2019/09/02/newsletter-001.html)。
- [HHVM 正将其部分 OCaml 代码，重写为 Rust](https://hhvm.com/blog/2019/08/27/hhvm-4.20.0.html)。
- [宣布 cargo-udeps](https://gist.github.com/est31/3d9e880be746c3a443c699d9ff1888d2)。
- [宣布 structopt 0.3](https://www.reddit.com/r/rust/comments/cxgw86/announcing_structopt_03/)。
- [Rust 中的语义验证](https://slowtec.de/posts/2019-09-03-semantic-validation-with-rust.html)。
- [STM32 Blue Pill 上的低功率 NB-IoT，带有 Apache Mynewt 和嵌入式 Rust](https://medium.com/@ly.lee/low-power-nb-iot-on-stm32-blue-pill-with-apache-mynewt-and-embedded-rust-cef5a3ecdd90)。

# 本周的箱子

本周的箱子是[cargo-udeps](https://crates.io/crates/cargo-udeps)，Cargo 子命令，用于查找未使用的依赖项。

谢谢[克里斯托弗达勒姆](https://users.rust-lang.org/t/crate-of-the-week/2704/613)建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

_没有针对 CFP 提出任何问题_。

如果你是一个 Rust 项目的所有者，并且正在寻找贡献者，请[在这里](https://users.rust-lang.org/t/twir-call-for-participation/4821)提交任务。

# Rust Core 的更新

[在上周合并][merged]了 214 个请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-08-26..2019-09-02

- [rustc：处理了“fat”LTO 中的模块，使其更加强大](https://github.com/rust-lang/rust/pull/63956)
- [为`Ident`，添加默认序列化](https://github.com/rust-lang/rust/pull/63853)
- [为`impl Trait`参数，提供添加边界的正确建议](https://github.com/rust-lang/rust/pull/63811)
- [在诊断中，为长的代码行，分离成代码左侧和右侧](https://github.com/rust-lang/rust/pull/63402)
- [使用`impl` `Self`类型时，不再抱怨未使用的代码](https://github.com/rust-lang/rust/pull/63317)
- [简化常量的急切标准化](https://github.com/rust-lang/rust/pull/63820)
- [miri：Stacked Borrows：在重新标记(retag)期间，不要从内存中读取](https://github.com/rust-lang/miri/pull/931)
- [miri：检测到太大的动态固定对象](https://github.com/rust-lang/rust/pull/64014)
- [整数的`Ord`实现的小改进](https://github.com/rust-lang/rust/pull/63992)
- [改进 Rustdoc 对过程宏的处理](https://github.com/rust-lang/rust/pull/62855)
- [crates.io：为箱子所有者，显示下拉版本的右栏](https://github.com/rust-lang/crates.io/pull/1759)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

- [RFC 2360：hint::bench_black_box](https://github.com/rust-lang/rfcs/pull/2360)。

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 正处于最终评论期。_

### [跟踪问题和 PR](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [追踪 issue for udp_peer_addr](https://github.com/rust-lang/rust/issues/59127)。
- \[处置：合并] [详述: int->float 和 f32->f64 四舍五入, 溢出为 infinity](https://github.com/rust-lang/rust/issues/62231)。
- \[处置：合并] [稳定化 `bind_by_move_pattern_guards` in rust 1.39.0](https://github.com/rust-lang/rust/pull/63118)。
- \[处置：合并] [使 `abs`, `wrapping_abs`, `overflowing_abs` const 函数](https://github.com/rust-lang/rust/pull/63786)。
- \[处置：合并] [稳定化 `vec::new` 和 `string::new` ，作为 `const fn`s](https://github.com/rust-lang/rust/pull/64028)。

## 新的 RFC

- [Collection 转化](https://github.com/rust-lang/rfcs/pull/2756)。
- [稳定化`#[unwind]`](https://github.com/rust-lang/rfcs/pull/2753)。

# 本周引用句

> 线程（threads）用于并行工作，异步(async)用于并行等待。

\-[ssokolow ON /r/rust](https://reddit.com/r/rust/comments/cws788/is_await_only_useful_is_my_code_doesnt_do_much/eyfg4va/)

多亏了[菲利浦·奥浦曼](https://users.rust-lang.org/t/twir-quote-of-the-week/328/686)提交了这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_本周《 Rust》的编辑：[nasa42](https://github.com/nasa42)，[llogiq](https://github.com/llogiq)和[Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/czizge/this_week_in_rust_302/).</small>
