---
title: "Rust周报 312(译)"
date: 2019-11-16T20:44:26+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-312'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-11-12

[原文：本周 Rust(螃蟹) 312](https://this-week-in-rust.org/blog/2019/11/12/this-week-in-rust-312/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.39.0](https://blog.rust-lang.org/2019/11/07/Rust-1.39.0.html)。🎉🎈
- [stable Rust 版本上的，Async-await](https://blog.rust-lang.org/2019/11/07/Async-await-stable.html)。
- [宣布 async-std 1.0](https://async.rs/blog/announcing-async-std-1-0/)。
- [发布了 Futures 0.3（具有 async/await 支持）](https://github.com/rust-lang-nursery/futures-rs/releases/tag/0.3.0)。
- [比较 Rust 和 C ++ 并发](https://parallel-rust-cpp.github.io/)。
- [在 Rust 中，使用类型级编程，来进行更安全的硬件抽象](https://blog.auxon.io/2019/10/25/type-level-registers/)。
- [揭开 async Rust 的神秘面纱](https://github.com/teh-cmc/rust-async/blob/master/README.md)。
- [Mors Servo 提供的 librsvg 中的 CSS，现在已使用 Rust ](https://people.gnome.org/~federico/blog/css-in-librsvg-is-now-in-rust.html)。
- [Swift 如何在 Rust 无法实现的地方，实现动态链接](https://gankra.github.io/blah/swift-abi/)。
- [对 Windows 代码库的底层系统组件，进行实验性重写](https://msrc-blog.microsoft.com/2019/11/07/using-rust-in-windows/)。
- [iou：用于 liburing 的 Rust 绑定](https://boats.gitlab.io/blog/post/iou/)。
- [在 Rust 中，泛化协程](https://samsartor.com/coroutines-1/)。
- [关于 Rust 中的类型布局和 ABI 的注释](https://gankra.github.io/blah/rust-layouts-and-abis/)。
- [使用 eBPF，将 Rust 放入内核](https://blog.redsift.com/labs/putting-rust-in-the-kernel-with-ebpf/)。
- [运动控制历险记：使用 G-Code](http://adventures.michaelfbryan.com/posts/working-with-gcode/)。
- [使用 Meili，搜索 Rust 箱子](https://blog.meilisearch.com/search-rust-crates-meili/)。

### ＃Rust2020

查找位于＃Rust2020 [Read Rust](https://readrust.net/rust-2020/)的所有帖子。

# 周箱

这周有多个箱子：

- [accurate](https://crates.io/crates/accurate)，累加器类型，以更精确（甚至证明正确）sum 和浮点数点积
- [transfer](https://github.com/dureuill/transfer)，一个在订好的实例之间，传输值的箱子。
- [genawaiter](https://github.com/whatisaphone/genawaiter)，一个在 stabel Rust 上，允许 generators 的箱子。

谢谢[内斯特·德穆尔](https://users.rust-lang.org/t/crate-of-the-week/2704/666)和[威利·卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/669)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [crates.io：carols10cents 将指导 11 月和 12 月的多个问题](https://github.com/rust-lang/crates.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AE-mentor)。
- [simdeez：创建 agner fog 的矢量库中， SIMD sin / cos / log 等函数](https://github.com/jackmott/simdeez/issues/17)。
- [Spirit：Tokio 0.2 和 hyper 0.13 支持](https://github.com/vorner/spirit/issues/45)。
- [Spirit：支持 slog](https://github.com/vorner/spirit/issues/46)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了共有 310 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-11-04..2019-11-11

- [编译器-内置：指令存在时，Gate atomic intrinsics 函数](https://github.com/rust-lang/compiler-builtins/pull/324)
- [在 powerpc 上，修复 C aggregate-passing ABI ](https://github.com/rust-lang/rust/pull/66050)
- [减少给予的未闭合 delimiter 错误的数量](https://github.com/rust-lang/rust/pull/65838)
- [从 Session 中，删除 LintBuffer](https://github.com/rust-lang/rust/pull/65835)
- [改名`MethodSig`→`FnSig`，并在`ItemKind::Fn`中使用](https://github.com/rust-lang/rust/pull/66188)
- [更低成本的 doc comments](https://github.com/rust-lang/rust/pull/65750)
- [Chalk：手动实现底层错误](https://github.com/rust-lang/chalk/pull/276)
- [Use `ptr::drop_in_place` for `VecDeque::`{`truncate`，`clear`}](https://github.com/rust-lang/rust/pull/65933)
- [稳定化：`re_rebalance_coherence` trait](https://github.com/rust-lang/rust/pull/65879)
- [添加`MaybeUninit`的方法：`uninit_array`，`slice_get_ref`，`slice_get_mut`](https://github.com/rust-lang/rust/pull/65580)
- [hashbrown：从 raw entry API 中，删除 BuildHasher 要求](https://github.com/rust-lang/hashbrown/pull/123)
- [hashbrown：优化 set union 和 intersection](https://github.com/rust-lang/hashbrown/pull/130)
- [clippy：删除插件界面](https://github.com/rust-lang/rust-clippy/pull/4714)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最后意见征询期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： `!` in rust 1.41.0](https://github.com/rust-lang/rust/pull/65355).
- \[处置：合并] [稳定化： result::map_or_else](https://github.com/rust-lang/rust/pull/66322).

## 新的 RFC

- [derive 中的泛型参数](https://github.com/rust-lang/rfcs/pull/2811).
- [将 is_zero() 添加到 core::time::Duration](https://github.com/rust-lang/rfcs/pull/2814).

# 本周引用句

> 根据我的经验，祈祷并不是一个非常有效的并发原语。

– [罗伯特·洛德的博客](https://lord.io/blog/2019/text-editing-hates-you-too/)

多谢了[斯蒂芬索科洛](https://users.rust-lang.org/t/twir-quote-of-the-week/328/727)这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/dvsuio/this_week_in_rust_312/).</small>
