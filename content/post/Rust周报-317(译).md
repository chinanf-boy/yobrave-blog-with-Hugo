---
title: "Rust周报 317(译)"
date: 2019-12-21T11:01:11+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-317'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-12-17

[原文：本周 Rust(螃蟹) 317](https://this-week-in-rust.org/blog/2019/12/17/this-week-in-rust-317/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [用 cargo-bisect-rustc 对分 Rust 编译器 regressions](https://blog.rust-lang.org/inside-rust/2019/12/18/bisecting-rust-compiler.html)。
- [不用再担心阻塞了：受 Go 启发的新 async-std runtime](https://async.rs/blog/stop-worrying-about-blocking-the-new-async-std-runtime/)。
- [从零到 main()：裸机 Rust](https://interrupt.memfault.com/blog/zero-to-main-rust-1)。
- [WASM 为抽象平台](http://adventures.michaelfbryan.com/posts/wasm-as-a-platform-for-abstraction/)。
- [gtk-rs 新版本：简化以及更多功能](https://gtk-rs.org/blog/2019/12/15/new-release.html)。
- [宣布 Mio 0.7-alpha.1](https://tokio.rs/blog/2019-12-mio-v0.7-alpha.1/)。
- [Rendology 简介：基于 Glium 的渲染管道](https://leod.github.io/rust/gamedev/rendology/2019/12/13/introduction-to-rendology.html)。
- [常见的 Rust traits](https://stevedonovan.github.io/rustifications/2018/09/08/common-rust-traits.html)。
- [用 Rust 解决 Burger 问题](https://rust-malaysia.github.io/code/2019/12/15/the-burger-problem.html)。
- [将 druid Rust 小部件移植到 PineTime 智能手表](https://medium.com/@ly.lee/porting-druid-rust-widgets-to-pinetime-smart-watch-7e1d5a5d977a)。
- [Relm 教程](https://relm.antoyo.xyz/documentation/tutorial/)。
- [为什么 Rust 似乎会启发人们](https://www.reddit.com/r/rust/comments/eaay3c/why_does_rust_seem_to_inspire_people/)？

# 周箱

这周的箱子是[bstr](https://github.com/BurntSushi/bstr)，不要求是有效的 UTF-8 的， Rust 字符串类型。

谢谢[威利·卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/603)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_没有针对 CfP 提出任何问题_。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 223 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-12-09..2019-12-16

- [revert never 类型的稳定化](https://github.com/rust-lang/rust/pull/67224)（sorry – llogiq）
- [在一个 feature flag 背后，启用在 constants 的`loop`和`while`](https://github.com/rust-lang/rust/pull/67216)
- [使 transparent enums 更普通](https://github.com/rust-lang/rust/pull/67323)
- [确保在泛型 ZST 常量的主体，所导致执行错误，为重大错误](https://github.com/rust-lang/rust/pull/67134)
- [改进诊断和代码，以彻底消除空 matches ](https://github.com/rust-lang/rust/pull/67026)
- [不要在 unnamed future 上，ICE](https://github.com/rust-lang/rust/pull/67289)
- [从`NamedMatch::MatchedSeq`除掉`DelimSpan`](https://github.com/rust-lang/rust/pull/67250)
- [优化`shallow_resolve_changed`](https://github.com/rust-lang/rust/pull/67079)
- [添加 ExactSizeIterator bound 到 返回类型](https://github.com/rust-lang/rust/pull/67125)
- [fix `-Z print-type-sizes` 对 zero-sized 字段的处理](https://github.com/rust-lang/rust/pull/67215)
- [追踪在`-Z self-profile`的 polonius](https://github.com/rust-lang/rust/pull/67193)
- [fix constant propagation for scalar pairs](https://github.com/rust-lang/rust/pull/67015)
- [fix macro by example code 的 `unused_parens` 触发](https://github.com/rust-lang/rust/pull/66983)
- [rustc：允许在 global trait select/eval 缓存中，使用非空的 ParamEnv](https://github.com/rust-lang/rust/pull/66821)
- [删除相同的 array move MIR passes](https://github.com/rust-lang/rust/pull/66650)
- [chalk：消除深度传递](https://github.com/rust-lang/chalk/pull/308)
- [chalk：truncating 一个目标时，不 truncate 环境](https://github.com/rust-lang/chalk/pull/294)
- [在 vectored I/O 中，使用第一个非空缓冲区](https://github.com/rust-lang/futures-rs/pull/1998)
- [在 Pin trait 实现中，使用 deref target](https://github.com/rust-lang/rust/pull/67039)
- [改进代码生成 for `starts_with('<literal char>')`](https://github.com/rust-lang/rust/pull/67249)
- [优化 bool 的`Ord` trait 实现](https://github.com/rust-lang/rust/pull/66881)
- [在`OsStr`上内联一些常用方法](https://github.com/rust-lang/rust/pull/67169)
- [`LinkedList`：drop panics 时，drop 剩余物品](https://github.com/rust-lang/rust/pull/67243)
- [`VecDeque`：在 destructor panic 中，drop 剩余物品](https://github.com/rust-lang/rust/pull/67235)
- [稳定化`Result::map_or`](https://github.com/rust-lang/rust/pull/66570)
- [为没有格式参数的消息，添加一条单独的 path](https://github.com/rust-lang/log/pull/366)
- [remove `NodeState::{Waiting,Done}`](https://github.com/rust-lang/rust/pull/66405)
- [match `VecDeque::extend` to `Vec::extend_desugared`](https://github.com/rust-lang/rust/pull/66341)
- [稳定化`core::panic` module](https://github.com/rust-lang/rust/pull/66771)
- [`From<NonZero*>` impls for 更广泛的`NonZero`类型](https://github.com/rust-lang/rust/pull/66277)
- [添加 str::strip_prefix 和 str::strip_suffix](https://github.com/rust-lang/rust/pull/66735)
- [cargo：在`[target.'cfg(debug_assertions)'.dependencies]`以及类似的上，发出错误](https://github.com/rust-lang/cargo/pull/7660)
- [rustup：改善 preinstalled rust 消息](https://github.com/rust-lang/rustup/pull/2155)
- [docs.rs：如果无法箱子构建失败，则修复 panic viewing 源代码](https://github.com/rust-lang/docs.rs/pull/519)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2797：宣布 FFI-unwinding 项目组](https://github.com/rust-lang/rfcs/pull/2797)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [添加 intofuture trait 并支持 await](https://github.com/rust-lang/rust/pull/65244)。
- \[处置：合并] [添加 partialeq 和 eq 到 cursor](https://github.com/rust-lang/rust/pull/67233)。
- \[处置：合并] [追踪问题：`matches!` macro](https://github.com/rust-lang/rust/issues/65721)。

## 新的 RFC

_本周没有提出新的招标书。_

# 本周引用句

> 嘿，@rustlang 的朋友们，有没有一个关于 formatting 机关 (format!(), write!(), etc.) 的全面的书面/参考资料！特别是从实现的角度来讲的（编写 trait objects，递归之类）？

– [詹姆斯·蒙斯](https://jamesmunns.com/blog/fmt-unreasonably-expensive/)

> 黑暗与古老的魔法。我想没人知道得很清楚，从不用担心文档问题

– [尼克·R·卡梅伦](https://twitter.com/nick_r_cameron/status/1203753952329650176?ref_src=twsrc%5Etfw)

Thanks to [mmmmib](https://users.rust-lang.org/t/twir-quote-of-the-week/328/756) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ecuj74/this_week_in_rust_317/).</small>
