---
title: "Rust周报 331(译)"
date: 2020-03-27T11:26:39+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-331"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-03-24
- [原文：331 期](https://this-week-in-rust.org/blog/2020/03/24/this-week-in-rust-331/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [regex 箱子未来计划](https://github.com/rust-lang/regex/issues/656)。
- [Tokio 基于 intrusive lists 的新内部信号量](https://github.com/tokio-rs/tokio/commit/acf8a7da7a64bf08d578db9a9836a8e061765314)。
- [Rust async 和糟糕，可怕，不好，非常坏的一天](https://medium.com/@KevinHoffman/rust-async-and-the-terrible-horrible-no-good-very-bad-day-348ebc836274)。
- [C++20 和 Rust：静态 Vs 动态泛型 ](https://www.youtube.com/watch?v=olM7o_oYML0)。
- [快速简单的 Rust interner](https://matklad.github.io/2020/03/22/fast-simple-rust-interner.html)。
- [安全 Rust 准则](https://anssi-fr.github.io/rust-guide/)。
- [我如何构建我的应用程序（使用 Rust 和其他语言）](https://dpc.pw/how-i-structure-my-apps-in-rust-and-other-languages)。
- [备忘单：Option（ Rust ）与 Maybe（ Haskell ）](https://notes.iveselov.info/programming/cheatsheet-rust-option-vs-haskell-maybe)。
- [两年 Rust](http://brooker.co.za/blog/2020/03/22/rust.html)。
- [减少 librsvg 中的内存消耗，第 3 部分：slack space in Bézier paths](https://people.gnome.org/~federico/blog/reducing-memory-consumption-in-librsvg-3.html)。
- [用被诅咒的 Rust，激起神的愤怒](http://troubles.md/abusing-rustc/)。
- [让我们编写一个 Web Assembly 解释器（第 1 部分）](https://medium.com/@richardanaya/lets-write-a-web-assembly-interpreter-part-1-287298201d75)。
- [NDArray 的描述性统计](https://shahinrostami.com/posts/programming/rust-notebooks/descriptive-statistics-with-ndarray/)。
- [rust-analyzer 变更日志＃17](https://rust-analyzer.github.io/thisweek/2020/03/23/changelog-17.html)。
- [宣布 Tokei 11：现在速度提高 40–60％](https://github.com/XAMPPRocky/tokei/releases/tag/v11.0.0)。
- [学习 Rust：构建玩具 JIRA 克隆](https://github.com/LukeMathWalker/build-your-own-jira-with-rust)。
- [Rust logo 的原始概念](https://twitter.com/mart3ll/status/1240705442839277569)。

# 周箱

这周的箱子是[flume](https://github.com/zesterer/flume)，一个快速的多生产者;单消费者;通道。

谢谢[Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/741)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [宣布 Rust IPFS，并呼吁参与者](https://blog.ipfs.io/2020-03-18-announcing-rust-ipfs/)。
- [RustConf 2020 CFP 现已开放](https://cfp.rustconf.com/events/rustconf-2020)。我们希望在 RustConf 收到您的来信！
- [This Week in Rust 正在寻找新的维护者](https://blog.rust-lang.org/inside-rust/2020/03/13/twir-new-lead.html)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 380 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-03-16..2020-03-23

- [在 async/await lowering 中，使用生成器恢复参数](https://github.com/rust-lang/rust/pull/69033)（内核异步！）
- [async：更小，更正确的生成器代码生成](https://github.com/rust-lang/rust/pull/69814)
- [为 sound specialization subset 实现一个功能](https://github.com/rust-lang/rust/pull/68970)
- [traits 中的`#[track_caller]`](https://github.com/rust-lang/rust/pull/69251)
- [添加`#[rustc_layout(debug)]`](https://github.com/rust-lang/rust/pull/69901)
- [parser：`for<'a> |...| body`闭包上的恢复](https://github.com/rust-lang/rust/pull/70209)
- [解决：根据隐私错误，打印导入链](https://github.com/rust-lang/rust/pull/69811)
- [解决：不要对 proc 宏定义的 visibilities，解析两次](https://github.com/rust-lang/rust/pull/70233)
- [ast：压缩`AttrId`，从`usize`到`u32`](https://github.com/rust-lang/rust/pull/70215)
- [在关联类型中，修复 const 参数的类型](https://github.com/rust-lang/rust/pull/70223)
- [修改了 span-to-lines 转换，在`DUMMY_SP`上生成一个空的 vec](https://github.com/rust-lang/rust/pull/70199)
- [rustc：在`TypeckTables`中，用`LocalDefId`代替`DefId`](https://github.com/rust-lang/rust/pull/70119)
- [更新 mir 内联成本](https://github.com/rust-lang/rust/pull/69934)
- [在单态化操作（monomorphizing）之后，处理`ConstKind::Unresolved`](https://github.com/rust-lang/rust/pull/70249)
- [perf（dep_graph）：在 number reads 较小时，避免分配一个 set](https://github.com/rust-lang/rust/pull/69778)
- [达到 macro expansion 递归限制时，不要 unwind](https://github.com/rust-lang/rust/pull/69497)
- [miri：检测 UB（未定义行为）：`copy`/`write_bytes`溢出](https://github.com/rust-lang/miri/pull/1248)
- [允许计算一个 point 后面的 layout](https://github.com/rust-lang/rust/pull/69079)
- [使`std::sync::Arc`与 ThreadSanitizer 兼容](https://github.com/rust-lang/rust/pull/65097)
- [proc_macro_harness：使用 item header spans 来纠正错误](https://github.com/rust-lang/rust/pull/70266)
- [为`MaybeUninit`，实现`zeroed`和`uninitialized`](https://github.com/rust-lang/rust/pull/69922)
- [return `NonZeroU64` from `ThreadId::as_u64`](https://github.com/rust-lang/rust/pull/70240)
- [`BTreeMap`：删除 shared root](https://github.com/rust-lang/rust/pull/70111)
- [hashbrown：使用`NonNull`用于 Bucket 指针](https://github.com/rust-lang/hashbrown/pull/148)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2843：添加 llvm_asm!，并弃用 asm!](https://github.com/rust-lang/rfcs/pull/2843)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [跟踪问题： `{f32,f64}::approx_unchecked_to` 方法](https://github.com/rust-lang/rust/issues/67058)。
- \[处置：合并] [允许保留 &mut osstr](https://github.com/rust-lang/rust/pull/70048)。
- \[处置：合并] [impl From<[T; N]> for Vec<T>](https://github.com/rust-lang/rust/pull/68692)。
- \[处置：合并] [impl Hash for Infallible](https://github.com/rust-lang/rust/pull/70281)。

## 新的 RFC

- [从 trait 对象，访问 trait 的相关函数和常量](https://github.com/rust-lang/rfcs/pull/2886)。
- [允许为单个 artifacts，指定依赖项](https://github.com/rust-lang/rfcs/pull/2887)。
- [`ForbiddenValue` trait，以实现更多优化](https://github.com/rust-lang/rfcs/pull/2888)。

# 本周引用句

> Rust 很有趣，因为在某种意义上它真是又硬又笨重。然而，只因为*它所要成为的，恰好是如此的坚硬和笨重*。想法上，即便不牺牲任何控制权，也可以使某些东西变得更简洁、更可读、更方便，这种例子一直都有。而，有时候，某些事情就是困难的，就是不方便的，归根结底，它的质地就是那么硬。
>
> 与其他语言相比，硬语言在不需要的时候通常是笨拙的，（甚至可以说），就不应该是“简单的”。

– [brundolf on Hacker News](https://news.ycombinator.com/item?id=22609082)

Thanks to [pitdicker](https://users.rust-lang.org/t/twir-quote-of-the-week/328/837) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/fp9z5t/this_week_in_rust_331/).</small>
