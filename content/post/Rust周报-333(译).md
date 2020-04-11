---
title: "Rust周报 333(译)"
date: 2020-04-10T20:19:44+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-333"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-04-07
- [原文：333 期](https://this-week-in-rust.org/blog/2020/04/07/this-week-in-rust-333/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [为什么我要建立一个新的 async runtime](https://stjepang.github.io/2020/04/03/why-im-building-a-new-async-runtime.html)。
- [200 行 Rust 代码， 为你解释 Futures](https://cfsamson.github.io/books-futures-explained/)。
- [Sled：对'准确性至关重要'的 Rust 项目中的错误处理](http://sled.rs/errors)。
- [对 rust-clippy 最常忽视的 lints，降级或删除](https://github.com/rust-lang/rust-clippy/issues/5418)。
- [Ok-Wrapping 的道歉小文](https://boats.gitlab.io/blog/post/why-ok-wrapping/)。
- [从 failure(失败) 到 Fehler（错误）](https://boats.gitlab.io/blog/post/failure-to-fehler/)。
- [嵌入式 WG 的 树莓派 OS 开发教程：教程 14 - 异常部分 2：外设 IRQ](https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials/tree/master/14_exceptions_part2_peripheral_IRQs)。
- [贡献 Rust：九个补丁](https://blog.yoshuawuyts.com/nine-patches/)。
- [Inside Rust：GitHub Actions 执行流程的更新](https://blog.rust-lang.org/inside-rust/2020/04/07/update-on-the-github-actions-evaluation.html)。
- [Programming Servo：为您服务的 Workers](https://medium.com/programming-servo/programming-servo-workers-at-your-service-db71e5943511)。
- [Iced，一个跨平台的 GUI 库：新版本具有自定义样式，事件订阅，其他小部件，新示例等](https://github.com/hecrj/iced/pull/253)。
- [rust-analyzer changelog 19](https://rust-analyzer.github.io/thisweek/2020/04/06/changelog-19.html)。
- [rustsim 10 月 —— 2020 年 3 月](https://www.rustsim.org/blog/2020/04/01/this-month-in-rustsim/)。
- [Rust GameDev 月刊 第 8 期 —— 2020 年 3 月](https://rust-gamedev.github.io/posts/newsletter-008/)。

# 周箱

这周的箱子是[explaine.rs](https://github.com/jrvidal/explaine.rs)，一个互动的 Rust 语法游乐场。

谢谢[弗拉德·弗罗洛夫（Vlad Frolov）](https://users.rust-lang.org/t/crate-of-the-week/2704/747)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_没有针对 CfP 提出任何问题_。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 443 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-03-30..2020-04-06

- [正确处理不带`#`s，非终止的 raw strinsg](https://github.com/rust-lang/rust/pull/70681)
- [解析：复原`const fn()` / `async fn()`](https://github.com/rust-lang/rust/pull/70421)
- [改进 raw strings 的错误消息](https://github.com/rust-lang/rust/pull/70522)
- [从 MIR bodies 中，删除未使用的 discriminant reads](https://github.com/rust-lang/rust/pull/70595)
- [跟踪，专项图（specialization graph）中的结尾节点](https://github.com/rust-lang/rust/pull/70535)
- [使用较小的 span，来建议限制性 lifetime](https://github.com/rust-lang/rust/pull/70827)
- [修复：debuginfo `file_metadata`中的性能退化](https://github.com/rust-lang/rust/pull/70803)
- [启用布局调试(layout debugging)，for `impl Trait`类型别名](https://github.com/rust-lang/rust/pull/70815)
- [polonius：更新 facts，移除其余（🤞）的 move errors 误报](https://github.com/rust-lang/polonius/pull/147)
- [chalk：使用 fallback debug impls，代替`unimplemented`](https://github.com/rust-lang/chalk/pull/366)
- [chalk：goal builder](https://github.com/rust-lang/chalk/pull/361)
- [chalk：试用`Vec<ProgramClause<I>>`](https://github.com/rust-lang/chalk/pull/370)
- [typeck/type_of：让 wfcheck 处理不透明类型的 substs 中的泛型](https://github.com/rust-lang/rust/pull/70272)
- [miri：使 backtrace 函数 names 和 spans 匹配](https://github.com/rust-lang/rust/pull/70590)
- [miri terminator 处理：仅对“Call” terminator 实行，进度完整性检查](https://github.com/rust-lang/rust/pull/70771)
- [修复：`libstd::syn::unix::Thread::new`的双重释放和未定义行为](https://github.com/rust-lang/rust/pull/70597)
- [std：修复 wasm32-wasi 上的 over-aligned (内存)分配](https://github.com/rust-lang/rust/pull/70585)
- [添加`-Z dump-mir-dataflow` flag：让转储的数据流结果，可视化](https://github.com/rust-lang/rust/pull/70511)
- [稳定化：`float::to_int_unchecked`](https://github.com/rust-lang/rust/pull/70487)
- [避免在 Windows `Env`迭代器中，创建不必要的引用](https://github.com/rust-lang/rust/pull/70479)
- [Impl `Hash` for `Infallible`](https://github.com/rust-lang/rust/pull/70281)
- [使用`str`模式，优化`strip_prefix`和`strip_suffix`](https://github.com/rust-lang/rust/pull/69784)
- [为`RwLock::`{`try_read`，`try_write`}，添加垫片(shims)](https://github.com/rust-lang/miri/pull/1157)
- [查询-验证 `Instance::resolve`](https://github.com/rust-lang/rust/pull/67797)
- [stdarch：支持`crc32`—— 即使在 arm32 上](https://github.com/rust-lang/stdarch/pull/834)
- [添加`slice::fill`](https://github.com/rust-lang/rust/pull/70752)
- [扩展`vec![]`(宏)为`Vec::new()`](https://github.com/rust-lang/rust/pull/70632)
- [有关`Vec`函数的详细恐慌消息](https://github.com/rust-lang/rust/pull/70573)
- [`Vec`修复了一些 aliasing 问题](https://github.com/rust-lang/rust/pull/70558)
- [添加`fn make_contiguous`到`VecDeque`](https://github.com/rust-lang/rust/pull/69425)
- [`BTreeMap`/`BTreeSet`：实现`drain_filter`](https://github.com/rust-lang/rust/pull/68770)
- [从一个`BTreeMap`删除位置时，(这个)位置保持跟踪](https://github.com/rust-lang/rust/pull/70795)
- [collections 内部，用`ManuallyDrop`代替`forget`](https://github.com/rust-lang/rust/pull/70766)
- [直接在`Fuse`实现中，匹配 options](https://github.com/rust-lang/rust/pull/70750)
- [将 TLS 初始化程序与重定位，放置在 .tdata 中](https://github.com/rust-lang/rust/pull/70720)
- [futures：减少 bilock 中的 box 分配](https://github.com/rust-lang/futures-rs/pull/2104)
- [futures：impl `Extend` for `SelectAll`](https://github.com/rust-lang/futures-rs/pull/2107)
- [hashbrown：微优化`repeat`函数](https://github.com/rust-lang/hashbrown/pull/150)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [Unsafe blocks in unsafe fn](https://github.com/rust-lang/rfcs/pull/2585)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [跟踪问题：pathbuf capacity methods](https://github.com/rust-lang/rust/issues/58234)。
- \[处置：合并] [移除 -z no-landing-pads flag](https://github.com/rust-lang/rust/pull/70175>).
- \[处置：合并] [Move llvm bitcode destination](https://github.com/rust-lang/rust/pull/70458)。

## 新的 RFC

- [err，给上‘result missing’方法](https://github.com/rust-lang/rfcs/pull/2897)。

# 本周引用句

> 在许多情况下，我们会有完全重构底层代码的可能，同时需要保持公共 API 的原样，且不会引入新的 bug。遇到 Rust 之前，我从未有过如此舒适的重构经验。
>
> 换言之，我从来没有见过这么有效率的语言。像 JavaScript 和 Python 这样的动态语言效率是最低*就目前来说*。代码运行，测试通过，投入生产。。。意外的异常，不！同志们，是时候把整个‘舞蹈’**再一次**啦。有了 Rust，头一遍地编写，就可以处理所有这些垃圾（因为编译器很严苛）。对凌晨 3 点的‘电话’，说再见。而*这*才是生产力。

– [Jay Oster on rust-users](https://users.rust-lang.org/t/rust-language-efficacy-and-productivity/39352/10)

Thanks to [Louis Cloete](https://users.rust-lang.org/t/twir-quote-of-the-week/328/846) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/fxqdrs/this_week_in_rust_333/).</small>
