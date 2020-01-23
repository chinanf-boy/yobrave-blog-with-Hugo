---
title: "Rust周报 322(译)"
date: 2020-01-23T21:50:07+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-322"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust]((https://this-week-in-rust.org))
- 日期：2020-01-21
- [原文：322 期](https://this-week-in-rust.org/blog/2020/01/21/this-week-in-rust-322/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [烟雾测试(Smoke-testing) Rust HTTP 客户端](https://medium.com/@shnatsel/smoke-testing-rust-http-clients-b8f2ee5db4e6)。
- [Rust 伤心的一天](https://words.steveklabnik.com/a-sad-day-for-rust)。
- [什么是 Rust，为什么如此受欢迎](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/) —— 来自官方 StackOverflow 博客。
- [Rust 编写操作系统：分配器设计](https://os.phil-opp.com/allocator-designs/)。
- [如何重构宏，将我的 Rust 项目的编译时间从 4 小时减少到 40 秒](https://users.rust-lang.org/t/5-hours-to-compile-macro-what-can-i-do/36508)。
- [为什么高级 slice 模式的稳定，对我来说很重要](<https://thomashartmann.dev/blog/feature(slice_patterns)/>)。
- [如何编写快速的 Rust 代码](http://likebike.com/posts/How_To_Write_Fast_Rust_Code.html)。
- [公开 C 和 Rust API：librsvg 的一些想法](https://people.gnome.org/~federico/blog/exposing-c-and-rust-apis.html)。
- [ESP32 上的 Rust —— SVD，PAC 和 USB 闪存](https://mabez.dev/blog/posts/esp32-rust-svd-pac/)。
- [Epoll，Kqueue 和 IOCP 用 Rust 进行了解释](https://cfsamsonbooks.gitbook.io/epoll-kqueue-iocp-explained/)。
- [Servo 编程：三年，100 次 commits](https://medium.com/programming-servo/programming-servo-three-years-100-commits-a3cbfb06ff23)。
- [Verona 计划：Microsoft 受 Rust 启发的研究语言，已经发布](https://github.com/microsoft/verona)。

# 周箱

这周的箱子是[fasteval](https://crates.io/crates/fasteval)，用于快速，安全地执行代数表达式的箱子。

谢谢[克里斯托弗·塞巴斯蒂安（Christopher Sebastian）](https://users.rust-lang.org/t/crate-of-the-week/2704/705)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [征文通知：Rust LATAM Mexico 2020](https://www.reddit.com/r/rust/comments/em0ru8/rust_2020_a_conference_in_latin_america)。
- [time：实现函数，以返回本地 UTC 偏移量](https://github.com/time-rs/time/issues/203)。
- [rusty-celery：标记为“状态：想要帮助”的多个问题，是新手入门的好地方](https://github.com/rusty-celery/rusty-celery/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Help+Wanted%22)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 270 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-01-13..2020-01-20

- [数组重复表达式的 lengths 在 MIR building time，必须是 monomorphic 的](https://github.com/rust-lang/rust/pull/68285)
- [确保所有上游的 泛型，都从 Rust dylibs 重新导出](https://github.com/rust-lang/rust/pull/68277)
- [const 泛型参数类型内，禁止省略 lifetimes](https://github.com/rust-lang/rust/pull/68143)
- [不要对格式错误的 suggestion spans，进行 ICE](https://github.com/rust-lang/rust/pull/68256)
- [将 ZST 验证从整数验证中解开，并将其普及到所有 zsts](https://github.com/rust-lang/rust/pull/68219)
- [不要试图`force_ptr`，那些指向 zsts 的指针](https://github.com/rust-lang/rust/pull/68088)
- [性能：急切地将文本转换为 const](https://github.com/rust-lang/rust/pull/68118)
- [通过更正更新 editor_builtins，以修复 aarch64 Windows 的 128 位整数余数](https://github.com/rust-lang/rust/pull/68233)
- [处理 drop shims 的递归实例化](https://github.com/rust-lang/rust/pull/67731)
- [添加无法访问的传播 mir 优化过程](https://github.com/rust-lang/rust/pull/66329)
- [将 LLVM rebase 到 9.0.1](https://github.com/rust-lang/rust/pull/68030)
- [不要在 bounds 不一致的 items 上，执行 const 传播](https://github.com/rust-lang/rust/pull/67914)
- [不要在非 32 位 x86 MSVC 上，对 f32 cmath 函数使用 f64 shims](https://github.com/rust-lang/rust/pull/68033)
- [稳定化：slice 模式](https://github.com/rust-lang/rust/pull/67712)
- [从 pad_integral exit 时，重置 Formatter 标志](https://github.com/rust-lang/rust/pull/67784)
- [优化 Unicode 数据集的大小/速度](https://github.com/rust-lang/rust/pull/68232)
- [稳定化：`Condvar::`{`wait_while`，`wait_timeout_while`}](https://github.com/rust-lang/rust/pull/67076)
- [稳定化：`ManuallyDrop::take`](https://github.com/rust-lang/rust/pull/68066)
- [让`iter::Empty<T>` `Send`和`Sync` for 任何`T`](https://github.com/rust-lang/rust/pull/68348)
- [实现`DebugStruct::non_exhaustive`](https://github.com/rust-lang/rust/pull/66716)
- [实现`Cursor` for 链接列表](https://github.com/rust-lang/rust/pull/68123)（RFC＃[2570](https://rust-lang.github.io/rfcs/2570-linked-list-cursors.html)）

## 批准的 RFC

对 Rust 的更改，要跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实现的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [欢迎 the asm project group](https://github.com/rust-lang/rfcs/pull/2836)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：`ptr::slice_from_raw_parts[_mut]`](https://github.com/rust-lang/rust/pull/68234)。
- \[处置：合并] [稳定化：`#[repr(transparent)]` on `enum`，定于 Rust 1.42.0](https://github.com/rust-lang/rust/pull/68122)。
- \[处置：合并] [稳定化： debug_map_key_value 功能](https://github.com/rust-lang/rust/pull/68200)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> `Rc<RefCell>`就像胶带一样。
>
> 它的用途非常广泛，可以在紧要关头解决许多问题。对于某些问题，它甚至是最好的工具。但是，如果你正在建设的东西居然有超过 10% 胶带包裹着，你可能想重新考虑你的设计过程！

– [trentj on rust-users](https://users.rust-lang.org/t/why-do-all-docs-say-refcell-is-bad/37086/22)

Thanks to [Tom Phinney](https://users.rust-lang.org/t/twir-quote-of-the-week/328/798) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/esbf8h/this_week_in_rust_322/).</small>
