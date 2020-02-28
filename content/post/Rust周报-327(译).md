---
title: "Rust周报 327(译)"
date: 2020-02-28T11:11:08+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-327"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](<(https://this-week-in-rust.org)>)
- 日期：2020-02-25
- [原文：327 期](https://this-week-in-rust.org/blog/2020/02/25/this-week-in-rust-327/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [使用 Rust String](https://fasterthanli.me/blog/2020/working-with-strings-in-rust/)。
- [Rust / WinRT 即将推出](https://kennykerr.ca/2020/02/22/rust-winrt-coming-soon/)。
- [rustc 的自我分析器简介](https://blog.rust-lang.org/inside-rust/2020/02/25/intro-rustc-self-profile.html)。
- [crates.io 2020-02-20 事件报告](https://blog.rust-lang.org/inside-rust/2020/02/26/crates-io-incident-report.html)。
- [命令行：过滤重复项：比 sort | uniq 快 30 倍](https://medium.com/adobetech/filtering-duplicates-on-the-command-line-30x-faster-than-sort-uniq-96ca5f7b4277)。
- [制作我们自己的可执行打包器](https://fasterthanli.me/blog/2020/whats-in-a-linux-executable/)。
- [Ramer–Douglas–Peucker 算法 —— 将曲线近似表示为一系列点，并减少点的数量的一种算法](http://adventures.michaelfbryan.com/posts/line-simplification/)。
- [异步 HTTP](https://blog.yoshuawuyts.com/async-http/)。
- [关于异步/等待的进一步思考](https://medium.com/@polyglot_factotum/further-thoughts-on-async-await-7767f924cb7e)。
- [Rust 团队按比例分流](https://docs.rs/dtolnay/0.0.8/dtolnay/macro._04__triage_scale.html)。
- [介绍，图像处理服务 Dali](https://tech.olx.com/presenting-dali-an-image-processor-service-514e6be00de8)。
- [宣布 async_executors，这是 executor agnostic 库的构建块](https://blog.wnut.pw/2020/02/25/anouncing-async_executors-a-building-block-for-executor-agnostic-libraries/)。
- [使用 vgtk 构建 TodoMVC](https://bodil.lol/vgtk/)。
- [在 github 页面或其他页面上，托管 Rust + Wasm 项目](https://github.com/sn99/wasm-template-rust)。
- [Programming Servo：实现 BroadcastChannel](https://medium.com/programming-servo/programming-servo-implementing-broadcastchannel-94516289ecd4)。
- [Fuchsia 编程语言政策](https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/project/policy/programming_languages.md)。
- [rust-analyzer changelog 113](https://rust-analyzer.github.io/thisweek/2020/02/24/changelog-13.html)。

# 周箱

这周的箱子是[wundergraph](https://crates.io/crates/wundergraph)，一个 GraphQL 接口库；和[kibi](https://github.com/ilai-deutel/kibi)，千行 Rust 的文本编辑器。

谢谢[Georg Semmler](https://users.rust-lang.org/t/crate-of-the-week/2704/732)和[Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/734)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [good first issue][sqlx: 实现对 time-rs 0.2 的支持](https://github.com/launchbadge/sqlx/issues/115)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 307 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-02-17..2020-02-24

- [配置：为 LLVM 标志，设置一个值](https://github.com/rust-lang/rust/pull/69244)
- [解析：统一项目解析 & 过滤非法项的种类](https://github.com/rust-lang/rust/pull/69366)
- [解析：允许`type Foo: Ord`句式](https://github.com/rust-lang/rust/pull/69361)
- [解析：将关联项和外部项，融合到 defaultness](https://github.com/rust-lang/rust/pull/69194)
- [`recursion_limit`的解析控制，溢出](https://github.com/rust-lang/rust/pull/67272)
- [修复：生成器错误编译](https://github.com/rust-lang/rust/pull/69302)
- [不要消除 thumb target 上的 frame 指针](https://github.com/rust-lang/rust/pull/69248)
- [调整，绑定的 lifetime 建议文本](https://github.com/rust-lang/rust/pull/69305)
- [不匹配的参数数量 —— (错误提示)指向参数位置，且所有提示英文：从‘parameter’改为‘argument’](https://github.com/rust-lang/rust/pull/68877)
- [不发出建议：对外部类型，实现操作 trait](https://github.com/rust-lang/rust/pull/69217)
- [从宏部分，拆分`unused_doc_comment`的非宏部分，分为两阶段/lints](https://github.com/rust-lang/rust/pull/69084)
- [结合`HaveBeenBorrowedLocals`与`IndirectlyMutableLocals`，变为一次数据流分析](https://github.com/rust-lang/rust/pull/69113)
- [修复：`Yield` terminator 的打印](https://github.com/rust-lang/rust/pull/69200)
- [质测 `object_safety_violations`](https://github.com/rust-lang/rust/pull/69242)
- [更改 const eval，仅返回 the value](https://github.com/rust-lang/rust/pull/69181)
- [允许在 const context 中的具体类型上，调用 trait 方法](https://github.com/rust-lang/rust/pull/68847)
- [性能：杂项(miscellaneous) 内联改进](https://github.com/rust-lang/rust/pull/69256)
- [perf：按名称查找关联项 —— O（log n）](https://github.com/rust-lang/rust/pull/69072)
- [添加`LinkedList::remove`](https://github.com/rust-lang/rust/pull/68705)
- [更改`FromStr` for `String`，直接使用`Infallible`](https://github.com/rust-lang/rust/pull/67925)
- [让`u8::is_ascii`为稳定的`const fn`](https://github.com/rust-lang/rust/pull/68984)
- [使整数幂方法(integer exponentiation)，为不稳定 const](https://github.com/rust-lang/rust/pull/68978)
- [简化`Skip::nth`和`Skip::last`实现](https://github.com/rust-lang/rust/pull/68597)
- [稳定化：`Once::is_completed`](https://github.com/rust-lang/rust/pull/68945)
- [稳定化：{`f32`，`f64`}::{`LOG2_10`，`LOG10_2`}](https://github.com/rust-lang/rust/pull/69249)
- [git2：添加`Branch::get_mut`](https://github.com/rust-lang/git2-rs/pull/522)
- [futures：为 `FuturesUnordered`，放宽 bounds ](https://github.com/rust-lang/futures-rs/pull/2085)
- [futures：添加`StreamExt::flat_map`](https://github.com/rust-lang/futures-rs/pull/2068)
- [cargo：添加新功能解析器](https://github.com/rust-lang/cargo/pull/7820)
- [cargo：添加选项 —— 将箱子版本，包含到生成的文档中](https://github.com/rust-lang/cargo/pull/7903)
- [cargo：改进 `StringList`配置处理](https://github.com/rust-lang/cargo/pull/7891)
- [rustfmt：支持格式化 half open range](https://github.com/rust-lang/rustfmt/pull/4044)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [cargo 报告 future-incompat](https://github.com/rust-lang/rfcs/pull/2834)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [许可： negative impls for non-auto traits](https://github.com/rust-lang/rust/pull/68004)。
- \[处置：合并] [稳定化： 将整数的 {to,from}\_{be,le,ne}\_bytes 方法，const](https://github.com/rust-lang/rust/pull/69373)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> Yoda must have hit his head, though. `if let 42 = x {}` "if let forty-two equals x"

– [Hutch on rust-internals](https://internals.rust-lang.org/t/using-if-let-to-check-for-equality/11750/19)

Thanks to [Kornel](https://users.rust-lang.org/t/twir-quote-of-the-week/328/821) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/fabtwg/this_week_in_rust_327/).</small>
