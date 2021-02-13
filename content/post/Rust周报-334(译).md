---
title: "Rust周报 334(译)"
date: 2020-04-15T20:16:42+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-334"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-04-14
- [原文：334 期](https://this-week-in-rust.org/blog/2020/04/14/this-week-in-rust-334/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust 多久变一次](https://words.steveklabnik.com/how-often-does-rust-change)？
- [Ok-wrapping，try 代码块，和函数级别的 try 之间的区别](https://yaah.dev/try-blocks)。
- [围绕于 Ok-wrapping 的心理模型](https://vorner.github.io/2020/04/09/wrapping-mental-models.html)。
- [Rust 的效能问题](https://boats.gitlab.io/blog/post/the-problem-of-effects/)。
- [库化和 Rust 分析](https://smallcultfollowing.com/babysteps/blog/2020/04/09/libraryification/)。
- [一个可能的 Rust 新后端](https://jason-williams.co.uk/a-possible-new-backend-for-rust)。
- [简单，但功能强大的 Pratt 解析](https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html)。
- [Ruma is dead, long live Ruma](https://www.ruma.io/news/ruma-is-dead-long-live-ruma-2020-04-10/)。
- [Programming Servo：我自己的私有运行时](https://medium.com/programming-servo/programming-servo-my-own-private-runtime-8a5ba74c63c8)。
- [Hyper 陷阱](https://vorner.github.io/2020/04/13/hyper-traps.html)。
- [在 crates.io 上，下载所有箱子](https://www.pietroalbini.org/blog/downloading-crates-io/)。
- [Kubernetes：Rust 般的友谊](https://deislabs.io/posts/kubernetes-a-rusty-friendship/)。
- [可容错的 Iterator Adapters](https://blog.yoshuawuyts.com/fallible-iterator-adapters/)。
- [字符串之上的类型：Rust 中的可扩展架构](http://willcrichton.net/notes/types-over-strings/)。
- \[pdf] [LLHD: Rust 已在驱动，硬件设计语言的研究](https://arxiv.org/pdf/2004.03494)。
- [rust-analyzer changelog 20](https://rust-analyzer.github.io/thisweek/2020/04/13/changelog-20.html)。
- [IntelliJ Rust 更新日志 120](https://intellij-rust.github.io/2020/04/13/changelog-120.html)。
- [新的 sysinfo 版本：处理磁盘使用情况](https://blog.guillaume-gomez.fr/articles/2020-04-09+New+sysinfo+release%3A+processes+disk+usage)。
- [四月 lang 团队设计会议](https://blog.rust-lang.org/inside-rust/2020/04/10/lang-team-design-meetings.html)。

# 周箱

这周的箱子是[sudo](https://crates.io/crates/sudo)，一个使您的程序以 root 运行的库。

谢谢[Stefan Schindler](https://users.rust-lang.org/t/crate-of-the-week/2704/751)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [tree-buf：浮点数压缩](https://github.com/That3Percent/tree-buf/issues/1)。Tree-buf 是用 Rust 编写的，实验性序列化系统。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 367 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-04-06..2020-04-13

- [在`extern "Rust" { ... }`内，支持函数的`#[track_caller]`](https://github.com/rust-lang/rust/pull/70916)
- [处理`impl Trait`—— 这里的`Trait`具有 missing bounds 的 assoc type](https://github.com/rust-lang/rust/pull/69707)
- [在函数转换检查过程中，标准化函数签名](https://github.com/rust-lang/rust/pull/70982)
- [不要丢失或重新排列，用户提供的 linker 参数](https://github.com/rust-lang/rust/pull/70665)
- [在更多情况下，去建议 move —— 闭包和 async 代码块](https://github.com/rust-lang/rust/pull/70906)
- [移除`unused_braces`的误报](https://github.com/rust-lang/rust/pull/70789)
- [use a `SmallVec` for `Cache::predecessors`](https://github.com/rust-lang/rust/pull/70876)
- [加快路径搜索 with `find_library_crate`](https://github.com/rust-lang/rust/pull/70837)
- [在 arena 上，分配一些查询结果(query results)](https://github.com/rust-lang/rust/pull/70161)
- [添加`io::Write::write_all_vectored`](https://github.com/rust-lang/rust/pull/70612)
- [详细的 panic 消息, for `Vec`函数](https://github.com/rust-lang/rust/pull/70573)
- [小调整`ToOwned::clone_into`](https://github.com/rust-lang/rust/pull/70201)
- [移除`Ord` bound，因它一直困扰着`drain_filter`](https://github.com/rust-lang/rust/pull/70843)
- [在`Fuse`实现中，直接匹配 options](https://github.com/rust-lang/rust/pull/70750)
- [用`Option`保险丝，实现`Chain`](https://github.com/rust-lang/rust/pull/70896)
- [重新编排`BTreeMap::into_iter`，让它去匹配`range_mut`](https://github.com/rust-lang/rust/pull/70981)
- [第一个`BTreeMap`提案，调整](https://github.com/rust-lang/rust/pull/70850)
- [添加`or_insert_with_key`，到`HashMap`/`BTreeMap`的`Entry`](https://github.com/rust-lang/rust/pull/70996)
- [hashbrown：将 or_insert_with_key 添加到 HashMap 的 Entry](https://github.com/rust-lang/hashbrown/pull/152)
- [arch：添加更多 ARM SIMD 内部函数](https://github.com/rust-lang/stdarch/pull/792)
- [cargo：添加`cargo tree`命令](https://github.com/rust-lang/cargo/pull/8062)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [unsafe blocks in unsafe fn](https://github.com/rust-lang/rfcs/pull/2585)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [为`try` 代码块，解决 `ok`-wrapping](https://github.com/rust-lang/rust/issues/70941)。
- \[处置：合并] [标准化：`span::mixed_site`](https://github.com/rust-lang/rust/pull/68716)。
- \[处置：合并] [标准化： alloc_layout_extras 的许多常见 subset](https://github.com/rust-lang/rust/pull/69362)。
- \[处置：合并] [跟踪问题：PathBuf capacity methods](https://github.com/rust-lang/rust/issues/58234)。
- \[处置：合并] [添加 Option 到 Force Unwind Tables](https://github.com/rust-lang/rust/pull/69984)。
- \[处置：合并] [Move，LLVM bitcode destination](https://github.com/rust-lang/rust/pull/70458)。
- \[处置：合并] [超大 options 整顿](https://github.com/rust-lang/rust/pull/70729)。
- \[处置：合并] [标准化：UNICODE_VERSION (feature unicode_version)](https://github.com/rust-lang/rust/pull/71068)。

## 新的 RFC

- [重复数据消除 —— Cargo 工作区信息](https://github.com/rust-lang/rfcs/pull/2906)。
- [编译器团队的重大建议流程更改](https://github.com/rust-lang/rfcs/pull/2904)。

# 本周引用句

> 这个观点很有争议，我没有能力和任何不同意我的人辩论。但，Rust 就是有一个非常强大的宏系统，所以我不必解释。

– [withoutboats blogging about failure/fehler](https://boats.gitlab.io/blog/post/failure-to-fehler)

Thanks to [lxrec](https://users.rust-lang.org/t/twir-quote-of-the-week/328/849) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/g1fj7p/this_week_in_rust_334/).</small>
