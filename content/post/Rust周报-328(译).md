---
title: "Rust周报 328(译)"
date: 2020-03-13T11:18:20+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-328"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-03-03
- [原文：328 期](https://this-week-in-rust.org/blog/2020/03/03/this-week-in-rust-328/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rust 1.41.1](https://blog.rust-lang.org/2020/02/27/Rust-1.41.1.html)。
- [半小时 Rust](https://fasterthanli.me/blog/2020/a-half-hour-to-learn-rust/)。
- [最近和将来的 pattern matching 改进](https://blog.rust-lang.org/inside-rust/2020/03/04/recent-future-pattern-matching-improvements.html)。
- [高性能 Rust 的易技巧](https://deterministic.space/high-performance-rust.html)。
- [了解 Rust 中的 String 和＆str](https://blog.thoughtram.io/string-vs-str-in-rust/)。
- [caniuse.rs - Rust feature 搜索](https://caniuse.rs/)。
- [在嵌入式 Rust 上的 async/await ](https://ferrous-systems.com/blog/async-on-embedded/)。
- [RustCrypto `aes-gcm`和`chacha20poly1305`箱子，由 NCC 组审核](https://research.nccgroup.com/2020/02/26/public-report-rustcrypto-aes-gcm-and-chacha20poly1305-implementation-review/)。
- [FFI patterns ＃1 - 复杂的 Rust 数据结构，无缝地公开给 C ++](https://crisal.io/words/2020/02/28/C++-rust-ffi-patterns-1-complex-data-structures.html)。
- [多维数组，和 NDArray 的操作](https://shahinrostami.com/posts/programming/rust-notebooks/multidimensional-arrays-and-operations-with-ndarray/)。
- [探索 Rust，使用中断处理程序实现和共享数据的方法](https://therealprof.github.io/blog/interrupt-comparison/)。
- [使用 Rust 将 JavaScript 应用程序移植到 WebAssembly（第 3 部分）](https://www.slowtec.de/posts/2020-02-28-porting-javascript-to-rust-part-3.html)。
- [Pietro Albini 已加入核心团队](https://blog.rust-lang.org/inside-rust/2020/02/27/pietro-joins-core-team.html)。
- [宣布首次 FFI-unwind 项目设计会议](https://blog.rust-lang.org/inside-rust/2020/02/27/ffi-unwind-design-meeting.html)。
- [Rust 编写操作系统：2020 年 2 月更新](https://os.phil-opp.com/status-update/2020-03-02/)。
- [rust-analyzerChangelog 14](https://rust-analyzer.github.io/thisweek/2020/03/02/changelog-14.html)。
- [IntelliJ Rust 更新日志 117](https://intellij-rust.github.io/2020/03/02/changelog-117.html)。
- [本月 rustsim , 9](https://www.rustsim.org/blog/2020/03/01/this-month-in-rustsim/)。
- [Rust 区块链时讯 9：在家工作的月份](https://rustinblockchain.org/2020/03/04/rib-newsletter-9-the-month-of-working-from-home/)。
- [Tokio v0.2.12，包括`Notify`，async/await 同步原语，和`StreamMap`动态合并流](https://github.com/tokio-rs/tokio/releases/tag/tokio-0.2.12)。

# 周箱

这周箱子是[tokenizers](https://github.com/huggingface/tokenizers)，一个带有 python 和 nodejs 绑定的 Rust 箱子，可用于机器学习的快速文本标记化。

llogiq（个人推荐箱子）恭喜恭喜。

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [RustConf 2020 CFP 现已开放](https://cfp.rustconf.com/events/rustconf-2020)。我们希望在 RustConf 收到您的来信！

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 304 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-02-24..2020-03-02

- [实现关联类型 Defaults](https://github.com/rust-lang/rust/pull/61812)（RFC＃[2532](https://rust-lang.github.io/rfcs/2532-associated-type-defaults.html)）
- [在数据流期间，生成器进行 discriminant 时，不要去`bug`它](https://github.com/rust-lang/rust/pull/69562)
- [性能：写 json 错误/警告时，缓冲 stderr](https://github.com/rust-lang/rust/pull/69227)
- [像平常一样，由`check_mod_attrs`消耗 mark attributes](https://github.com/rust-lang/rust/pull/69412)
- [stash API：移除 panic，以修复 ICE](https://github.com/rust-lang/rust/pull/69623)
- [chalk：在 rustc 中，更改构建所需的](https://github.com/rust-lang/chalk/pull/332)
- [调整 Miri value visitor，和文档注释布局组件](https://github.com/rust-lang/rust/pull/69257)
- [miri：让机器规范化 AllocID](https://github.com/rust-lang/rust/pull/69408)
- [多个`main`声明的失败](https://github.com/rust-lang/rust/pull/69379)
- [不要实例化这么多的`drop_in_place`副本](https://github.com/rust-lang/rust/pull/67332)
- [切换到 discriminant 后，将其他变体标记为未初始化](https://github.com/rust-lang/rust/pull/68528)
- [枚举变体若没有 drop glue，就跳过`Drop`终止符](https://github.com/rust-lang/rust/pull/68943)
- [当用户析构函数崩溃时，审核`Drop` impls 中， liballoc 泄漏](https://github.com/rust-lang/rust/pull/67290)
- [将原始模块，添加到 libcore](https://github.com/rust-lang/rust/pull/67637)
- [放松 str::get_unchecked 前提条件，以允许空切片](https://github.com/rust-lang/rust/pull/69385)
- [fix：`align_to_mut`的混叠违规](https://github.com/rust-lang/rust/pull/69581)
- [在“泄漏” RefCell 借用上添加方法，作为具有原始引用生命周期的引用](https://github.com/rust-lang/rust/pull/68712)
- [稳定化：`boxed_slice_try_from`](https://github.com/rust-lang/rust/pull/69538)
- [`BTreeMap`导航更安全，更快捷](https://github.com/rust-lang/rust/pull/68827)
- [const mem::forget](https://github.com/rust-lang/rust/pull/69617)
- [crates.io：启用箱子排序-按最新添加的](https://github.com/rust-lang/crates.io/pull/2214)
- [rustlings：添加 clippy lints](https://github.com/rust-lang/rustlings/pull/269)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [cargo report future-incompat](https://github.com/rust-lang/rfcs/pull/2834)。
- \[处置：合并] [添加 `llvm_asm!` 和 弃用 `asm!`](https://github.com/rust-lang/rfcs/pull/2843)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [允许'if' 表达式上的属性](https://github.com/rust-lang/rust/pull/69201)。
- \[处置：合并] [mem::zeroed/uninit: 若是那些类型没有 zero-initialization ，就 panic](https://github.com/rust-lang/rust/pull/66059)。

## 新的 RFC

- [内联汇编](https://github.com/rust-lang/rfcs/pull/2873)。
- [Rust-lang org GitHub 访问策略](https://github.com/rust-lang/rfcs/pull/2872)。
- [净化 UnwindSafe](https://github.com/rust-lang/rfcs/pull/2871)。

# 本周引用句

> 嗨，甲壳类动物们！我是螃蟹编程语言的新仔。无节幼体。

– [GhostProc on rust-users](https://users.rust-lang.org/t/how-can-i-improve-this/38711)

Thanks to [Tom Phinney](https://users.rust-lang.org/t/twir-quote-of-the-week/328/822) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/fdzspa/this_week_in_rust_328/).</small>
