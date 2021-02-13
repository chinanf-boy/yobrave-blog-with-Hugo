---
title: "Rust周报 323(译)"
date: 2020-01-30T23:14:57+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-323"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](<(https://this-week-in-rust.org)>)
- 日期：2020-01-28
- [原文：323 期](https://this-week-in-rust.org/blog/2020/01/28/this-week-in-rust-323/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [cargo-audit v0.11：介绍`fix`功能，箱子检测，更多功能](https://blog.rust-lang.org/inside-rust/2020/01/23/Introducing-cargo-audit-fix-and-more.html)。
- [Bitfields forever：为什么需要兼容 C 的 Rust 箱子](https://immunant.com/blog/2020/01/bitfields/)。
- [Rust 中，具有改进类型的测量单元](https://yoric.github.io/post/uom.rs/)。
- [std.rs：直接访问稳定的 rust docs](https://std.rs/)。
- [100 LoC 以下的，无堆栈 Rust 协程库](https://blog.aloni.org/posts/a-stack-less-rust-coroutine-100-loc/)。
- [Zebra 如何使用 Tower 用现代的 async Rust 代替 Zcash 的旧比特币 C ++网络代码](https://www.zfnd.org/blog/a-new-network-stack-for-zcash/)。
- [建立你自己的`block_on()`](https://stjepang.github.io/2020/01/25/build-your-own-block-on.html)。
- [为 Debian 打包一个 Rust 项目](https://blog.hackeriet.no/packaging-a-rust-project-for-debian/)。
- [Byte 有序型 streams](https://yoshuawuyts-blog.netlify.com/byte-ordered-stream-parsing/)。
- [Tide channels](https://blog.yoshuawuyts.com/tide-channels/)。
- [将库更新为 std::future 的经验教训](https://cetra3.github.io/blog/mpart-async-0-3-0/)。
- [返回 trait 对象](https://bryce.fisher-fleig.org/blog/returning-trait-objects/)。
- [在 Raspberry Pi 上，为 PineTime 调试 Rust + Mynewt 固件](https://medium.com/@ly.lee/debug-rust-mynewt-firmware-for-pinetime-on-raspberry-pi-4b9ac2d093a9)。
- [rust-analyzer changelog 9](https://rust-analyzer.github.io/thisweek/2020/01/27/changelog-9.html)。

# 周箱

这周的箱子是[test-case](https://crates.io/crates/test-case)，用于参数化测试的框架。

谢谢[Synek317](https://users.rust-lang.org/t/crate-of-the-week/2704/712)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [rust：fs::remove_dir_all 对于 Windows 上的大型目录，很少会成功](https://github.com/rust-lang/rust/issues/29497#issuecomment-573353391)。
- [arcs：用于绘制几何项目的交互式工具](https://github.com/Michael-F-Bryan/arcs/issues/9)。Arcs 是一个 Rust CAD 系统。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 261 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-01-20..2020-01-27

- [`?const`实现退出 trait bounds](https://github.com/rust-lang/rust/pull/68140)
- [在 FreeBSD 13.0-CURRENT i386 上，与 lld 9 建立牢不可破链接](https://github.com/rust-lang/rust/pull/68361)
- [导出， emorySanitizer 使用的 weak symbols](https://github.com/rust-lang/rust/pull/68410)
- [稳定化：`#[repr(transparent)]`上`enum`s](https://github.com/rust-lang/rust/pull/68122)
- [修复：`#[track_caller]`和函数指针](https://github.com/rust-lang/rust/pull/68302)
- [微优化 OutputFilenames](https://github.com/rust-lang/rust/pull/68409)
- [性能：避免在 fold 过程中，没有变化的情况下创建 SmallVec](https://github.com/rust-lang/rust/pull/68031)
- [建议借用型`Vec<NonCopy>`，在 for loop 中](https://github.com/rust-lang/rust/pull/68424)
- [进一步改善`impl Trait`/`dyn Trait`建议](https://github.com/rust-lang/rust/pull/68522)
- [typeck：简化处理`diverges`](https://github.com/rust-lang/rust/pull/68422)
- [当推断变量存在时，不要丢弃 marker trait 暗示](https://github.com/rust-lang/rust/pull/68057)
- [不透明类型错误消息，考虑 substs 中的非类型](https://github.com/rust-lang/rust/pull/68438)
- [避免声明一个虚假的依赖项边缘](https://github.com/rust-lang/rust/pull/68298)
- [在 MIR 中，更紧凑地 render const 指针](https://github.com/rust-lang/rust/pull/68516)
- [使用`normalize_and_test_predicates`条件过滤和测试断言，for const-prop](https://github.com/rust-lang/rust/pull/68297)
- [让 pointers to statics internal](https://github.com/rust-lang/rust/pull/68494)
- [避免`std::iter::Skip::count`溢出](https://github.com/rust-lang/rust/pull/68469)
- [通过避免 slice in BTreeMap（具有 shared root），来简化 NodeHeader](https://github.com/rust-lang/rust/pull/67686)
- [将 Leading_ones 和 Trailing_ones 方法添加到原始整数类型](https://github.com/rust-lang/rust/pull/68165)
- [futures：避免 FuturesUnordered::poll_next '饿死' ](https://github.com/rust-lang/futures-rs/pull/2049)
- [futures：添加 StreamExt::scan](https://github.com/rust-lang/futures-rs/pull/2044)
- [stdarch：添加 Icelake avx512 功能](https://github.com/rust-lang/stdarch/pull/838)
- [cargo：存储最大队列长度](https://github.com/rust-lang/cargo/pull/7829)
- [cargo：使用临时工作空间，搜索 root 清单](https://github.com/rust-lang/cargo/pull/7768)
- [rustdoc：修复`rustdoc --test`执行时，对编译错误的处理](https://github.com/rust-lang/rust/pull/68357)
- [docs.rs：修复 match_version 中的各种错误](https://github.com/rust-lang/docs.rs/pull/565)
- [compiletest：简化多调试器支持](https://github.com/rust-lang/rust/pull/68391)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [target_feature 1.1](https://github.com/rust-lang/rfcs/pull/2396)。
- \[处置：关闭] [crate changelogs](https://github.com/rust-lang/rfcs/pull/2129)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [二进制操作背后，原始操作数类型的正确推断](https://github.com/rust-lang/rust/pull/68129)。
- \[处置：合并] [在判别性省略存在时，Mutex 和 Rwlock 会不合理](https://github.com/rust-lang/rust/issues/68206)。

## 新的 RFC

- [Rust 2020 路线图](https://github.com/rust-lang/rfcs/pull/2857)。
- [Secret 类型](https://github.com/rust-lang/rfcs/pull/2859)。
- [项目组](https://github.com/rust-lang/rfcs/pull/2856)。

# 本周引用句

> Rust 基本上是 Haskell 的运动型弟弟。不是很聪明，但还是很聪明，能举重。

– [icefox, Jan 22 in community-Discord #games-and-graphics](https://discordapp.com/channels/273534239310479360/335502453371961344/669636317277192222)

Thanks to [Duane](https://users.rust-lang.org/t/twir-quote-of-the-week/328/801) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ew3gri/this_week_in_rust_323/).</small>
