---
title: "Rust周报 308(译)"
date: 2019-10-19T22:16:31+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-304'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-10-15

[原文：本周 Rust(螃蟹) 308](https://this-week-in-rust.org/blog/2019/10/15/this-week-in-rust-308/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [使 Tokio scheduler 快 10 倍](https://tokio.rs/blog/2019-10-scheduler/)。
- [在 2019 年，如何进一步加快 Rust 编译器的速度](https://blog.mozilla.org/nnethercote/2019/10/11/how-to-speed-up-the-rust-compiler-some-more-in-2019/)。
- [node 实验 - 使用 Rust 探索异步基础知识](https://cfsamson.github.io/book-exploring-async-basics/)。
- [在 CLion 中，调试 Rust 代码](https://blog.jetbrains.com/clion/2019/10/debugging-rust-code-in-clion/)。
- [我最喜欢的 rust 函数`std::mem::drop`](https://blog.jabid.in/2019/10/11/drop.html)。
- [sodiumoxide 中的漏洞：`generichash::Digest::eq` 始终返回 true](https://www.reddit.com/r/rust/comments/dguqt3/vulnerability_in_sodiumoxide_generichashdigesteq/)。
- [使用 Rust 的 RISC-V OS：Communications](http://osblog.stephenmarz.com/ch2.html)。
- [将一个箱子从 futures 0.1 迁移到 0.3](https://www.ncameron.org/blog/migrating-a-crate-from-futures-0-1-to-0-3/)。
- [运动控制历险记：通信系统第 2 部分](http://adventures.michaelfbryan.com/posts/comms-part-2/)。
- [宣布 Rustup 1.20.0](https://blog.rust-lang.org/2019/10/15/Rustup-1.20.0.html)。
- [新的 VxWorks 版本，支持 Rust](https://www.windriver.com/news/press/pr.html?ID=22444)。
- [AWS 赞助 Rust 项目](https://aws.amazon.com/blogs/opensource/aws-sponsorship-of-the-rust-project/)。

# 本周的箱子

这周，我们不是一个，也不是两个，而是*三个*箱子！有[Watt](https://github.com/dtolnay/watt)，一个基于 WASM 的快速 proc-macro 运行时，[Anyhow](https://github.com/dtolnay/anyhow)，为另一个错误处理箱，和[spotify-tui](https://github.com/Rigellute/spotify-tui)，Spotify 的控制台用户界面。

谢谢[Aloso](https://users.rust-lang.org/t/crate-of-the-week/2704/649), [zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/645) and [Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/644) 的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- \[good first issue] [async-std: 添加 stream::throttle](https://github.com/async-rs/async-std/issues/342)。
- \[good first issue] [async-std: 添加 stream::timeout](https://github.com/async-rs/async-std/issues/340)。
- \[good first issue] [async-std: 添加 future::delay](https://github.com/async-rs/async-std/issues/341)。
- [async-std：[tracking] streams](https://github.com/async-rs/async-std/issues/129)。
- \[good first issue] [tracing: core: 添加 `dispatcher::set_default`](https://github.com/tokio-rs/tracing/issues/383)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了，共有 302 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-10-07..2019-10-14

- [添加对`const unsafe? extern fn`的支持](https://github.com/rust-lang/rust/pull/64906)
- [将非 CAS 原子支持，拆分到`target_has_atomic_load_store`](https://github.com/rust-lang/rust/pull/65214)
- [推导：避免在人工`type_ident`路径，使用 dummy Span](https://github.com/rust-lang/rust/pull/65310)
- [带反引号的打印 lifetimes](https://github.com/rust-lang/rust/pull/65292)
- [修复建议的绑定附加 diagnostic ](https://github.com/rust-lang/rust/pull/65289)
- [注意何时需要一个可变 trait object](https://github.com/rust-lang/rust/pull/65077)
- [使用结构化的建议，对`as_str()`调用的删除](https://github.com/rust-lang/rust/pull/65194)
- [修复 const 泛型参数，不显示在类型不匹配 diagnostic 中](https://github.com/rust-lang/rust/pull/65154)
- [改善消息，当尝试使用私有字段实例化元组结构时](https://github.com/rust-lang/rust/pull/65153)
- [当在`if`要么`while`使用时，建议解引用的布尔引用](https://github.com/rust-lang/rust/pull/65150)
- [当建议使用 type params 的 assoc 函数时，包括 turbofish](https://github.com/rust-lang/rust/pull/65145)
- [self-profiling：为 trait selection 之外的所有，添加 events](https://github.com/rust-lang/rust/pull/65208)
- [避免`SmallVec::collect`](https://github.com/rust-lang/rust/pull/64949)
- [加速 `TokenStream` concatenation](https://github.com/rust-lang/rust/pull/65198)
- [impl `Clone::clone_from` for `VecDeque`](https://github.com/rust-lang/rust/pull/65069)
- [稳定化`slice::repeat`](https://github.com/rust-lang/rust/pull/64877)
- [稳定化`mem::take`](https://github.com/rust-lang/rust/pull/64716)
- [impl（`HashMap`）`Entry::insert`](https://github.com/rust-lang/rust/pull/64656)
- [提高签名的`saturating_mul`的性能](https://github.com/rust-lang/rust/pull/65312)
- [dist：最小化`rust-std`组件](https://github.com/rust-lang/rust/pull/64823)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

- [RFC 2495：最低支持的 Rust 版本](https://github.com/rust-lang/rfcs/pull/2495)。

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处理：推迟] [紧凑的 cargo workspaces](https://github.com/rust-lang/rfcs/pull/2315)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [稳定化 rfc 2451, re-rebalance coherence(连贯性)](https://github.com/rust-lang/rust/issues/63599)。
- \[处理：合并] [将 is_power_of_two 做成一个 const function](https://github.com/rust-lang/rust/pull/65092)中。

## 新的 RFC

- [统一协程 a.k.a. 生成器恢复参数](https://github.com/rust-lang/rfcs/pull/2781)。
- [impl-only glob 导入](https://github.com/rust-lang/rfcs/pull/2782)。

# Rust 工作

- [中国杭州 Nervos 高级区块链工程师（远程可用）](https://angel.co/company/nervos-1/jobs/589230-senior-blockchain-engineer)。

_发推特给我们[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)为了得到你在这里列出的工作机会！_

# 本周引用句

> 如果 rust 社区存在一股风气的话，那应该是，软件应该具有 strong static typing，而人们应该具有 soft dynamic typing。

\-[凯尔·斯特朗，推特上](https://twitter.com/BatmanAoD/status/1174799660134699008)

多亏了[Kyle Strand](https://users.rust-lang.org/t/twir-quote-of-the-week/328/710)为了这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
