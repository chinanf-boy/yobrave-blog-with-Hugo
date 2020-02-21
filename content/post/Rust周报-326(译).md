---
title: "Rust周报 326(译)"
date: 2020-02-21T14:51:57+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-326"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](<(https://this-week-in-rust.org)>)
- 日期：2020-02-18
- [原文：326 期](https://this-week-in-rust.org/blog/2020/02/18/this-week-in-rust-326/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Sealed Rust 更新：Rust 安全为重计划](https://ferrous-systems.com/blog/sealed-rust-the-plan/)。
- [为什么 Rust 是最受欢迎的编程语言](https://matklad.github.io/2020/02/14/why-rust-is-loved.html)？
- [Rust ghost，signing off](https://quietmisdreavus.net/self/2020/02/17/rust-ghost-signing-off/)。
- [我审核了异步 RwLock 的 3 种不同实现](https://www.reddit.com/r/rust/comments/f4zldz/i_audited_3_different_implementation_of_async/)。
- [`deny(warnings)` is 相当有害](https://www.reddit.com/r/rust/comments/f5xpib/psa_denywarnings_is_actively_harmful/)。
- [Rust for Java devs](https://leshow.github.io/post/rust_for_java_devs/)。
- [Rust，未定义行为的一些细微差别](https://typr124.github.io/UB1)。
- [一个务实的方法，to 全局状态](http://adventures.michaelfbryan.com/posts/pragmatic-global-state/)
- [Rust 中的图形：GraphCore 简介](https://depth-first.com/articles/2020/02/17/graphs-in-rust-introducting-graphcore/)。
- [faux - 内部的样子](https://nrxus.github.io/faux/blog/how-it-works.html)
- [rust-analyzer changelog 12](https://rust-analyzer.github.io/thisweek/2020/02/17/changelog-12.html)。
- [IntelliJ Rust changelog 116](https://intellij-rust.github.io/2020/02/18/changelog-116.html)。
- [Rust GameDev 月刊 6 -2020 年 1 月](https://rust-gamedev.github.io/posts/newsletter-006/)。

# 周箱

这周的箱子是[pointer-utils](https://github.com/CAD97/pointer-utils)，一个用于处理指针的小型库，以及[jlrs](https://github.com/Taaitaaiger/jlrs)，一个箱子可以从 Rust 调用[Julia](https://julialang.org)。

谢谢[Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/729)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- \[puzzle] [rust 知识王座杯](https://rustbattle.net/battle/straight-finch-8-e4f4)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 276 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-02-10..2020-02-17

- [在 rustbuild 中，启用 Control Flow Guard](https://github.com/rust-lang/rust/pull/68824)
- [将 macro_legacy_warnings 转换为重大错误](https://github.com/rust-lang/rust/pull/69129)
- [parse：统一功能前端重要解析](https://github.com/rust-lang/rust/pull/69023)
- [fix：额外 subslice 降低](https://github.com/rust-lang/rust/pull/69128)
- [fix：GATs 中的生命周期阴影检查](https://github.com/rust-lang/rust/pull/68938)
- [记录，在 metadate 反序列化过程中，要使用的 proc macro harness 顺序](https://github.com/rust-lang/rust/pull/68814)
- [调整`FnMut`的 borrow error，若期待的是`Fn`的时候](https://github.com/rust-lang/rust/pull/68816)
- [当期待`BoxFuture`和使用`async {}`的时候，建议`Box::pin`](https://github.com/rust-lang/rust/pull/69082)
- [对 LEB128 读、写进行微优化](https://github.com/rust-lang/rust/pull/69050)
- [traits：预分配 2 个已知初始大小的 Vecs](https://github.com/rust-lang/rust/pull/69022)
- [不要对 future-compat lints 运行两次 coherence](https://github.com/rust-lang/rust/pull/69044)
- [二进制操作背后的，原型操作数类型的正确推断](https://github.com/rust-lang/rust/pull/68129)
- [支持新的 LLVM pass 管理器](https://github.com/rust-lang/rust/pull/67954)
- [rustc_session：允许从一个 group 中的单个 lints，替换 lints 等级](https://github.com/rust-lang/rust/pull/67885)
- [将 borrowck dataflow imls 迁移到新框架](https://github.com/rust-lang/rust/pull/68241)
- [推断 borrowck 中不透明类型的 regions](https://github.com/rust-lang/rust/pull/67681)
- [在`ObligationForest`中，创一个`ParamEnvAnd<Predicate>`用于缓存](https://github.com/rust-lang/rust/pull/68475)
- [添加，缺失的`_zeroed`变种到`AllocRef`](https://github.com/rust-lang/rust/pull/69027)
- [使 ASCII ctype 函数，为不稳定 const](https://github.com/rust-lang/rust/pull/68986)
- [加速`SipHasher128`](https://github.com/rust-lang/rust/pull/68914)
- [miri：修复 exact_div](https://github.com/rust-lang/rust/pull/69126)
- [miri：添加 shim 以重命名](https://github.com/rust-lang/miri/pull/1158)
- [BTree：减轻 Miri 的 load](https://github.com/rust-lang/rust/pull/68781)
- [提升：`ty.needs_drop`](https://github.com/rust-lang/rust/pull/68679)
- [allocator 准备好，了解`Box`](https://github.com/rust-lang/rust/pull/69058)
- [将 niches 隐藏在`UnsafeCell`之下](https://github.com/rust-lang/rust/pull/68491)
- [放宽`HashMap`/`HashSet`上的 bounds](https://github.com/rust-lang/rust/pull/67642)
- [提升：`char::is_ascii_*` codegen](https://github.com/rust-lang/rust/pull/67585)
- [实现 `LowerExp`和`UpperExp` for 整数](https://github.com/rust-lang/rust/pull/66721)
- [添加 `From<Vec<NonZeroU8>>` for `CString`](https://github.com/rust-lang/rust/pull/64069)
- [fix：在 WASI target 上的`std::fs::copy`](https://github.com/rust-lang/rust/pull/69106)
- [futures：为已完成的共享 futures，实现 fast-path](https://github.com/rust-lang/futures-rs/pull/2074)
- [rustdoc：结构变体字段搜索](https://github.com/rust-lang/rust/pull/68668)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2857：Rust 2020 路线图](https://github.com/rust-lang/rfcs/pull/2857)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [让 `u8::is_ascii`，成为一个稳定的`const fn`](https://github.com/rust-lang/rust/pull/68984)。
- \[处置：合并] [稳定化 assoc_int_consts ，关联 int/float 常量](https://github.com/rust-lang/rust/pull/68952)。
- \[处置：合并] [添加原型模块到 libcore](https://github.com/rust-lang/rust/pull/67637)。
- \[处置：合并] [跟踪问题：`#![feature(maybe_uninit_ref)]`](https://github.com/rust-lang/rust/issues/63568)。

## 新的 RFC

- [添加一个新属性，`#[isa]`](https://github.com/rust-lang/rfcs/pull/2867)。

# 本周引用句

> 虽然`Option`在不同种类的衣服范围内，总有 null 选项，但是(知道)那件衣服（是不穿）that null wear 是很重要。

– [skysch on rust-users](https://users.rust-lang.org/t/how-would-you-do-that-in-rust-versus-java/38187/6)

Thanks to [Cerberuser](https://users.rust-lang.org/t/twir-quote-of-the-week/328/815) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/f6sy2s/this_week_in_rust_326/).</small>
