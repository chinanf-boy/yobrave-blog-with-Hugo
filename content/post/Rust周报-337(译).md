---
title: "Rust周报 337(译)"
date: 2020-05-06T14:04:33+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-337"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-05-05
- [原文：337 期](https://this-week-in-rust.org/blog/2020/05/05/this-week-in-rust-337/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [异步采访：目前为止](https://smallcultfollowing.com/babysteps/blog/2020/04/30/async-interviews-my-take-thus-far/)
- [Rust 多线程 HTTP / WebSocket 服务器](https://sergey-melnychuk.github.io/2020/04/27/multi-threaded-http-websocket-server-in-rust/)。
- [用 Traits 欺骗 Rank-n](https://leshow.github.io/post/cheat_rank_n/)
- [了解真实世界 Rust 程序中，内存和线程安全实践和问题](https://cseweb.ucsd.edu/~yiying/RustStudy-PLDI20.pdf)
- [Rust 的 gRPC 入门指南](https://dev.to/anshulgoyal15/a-beginners-guide-to-grpc-with-rust-3c7o)
- [安设 Anaconda，Jupyter 和 Rust](https://shahinrostami.com/posts/programming/rust-notebooks/setup-anaconda-jupyter-and-rust/)
- [将一个 process 远程传送到另一台计算机上！](https://thume.ca/2020/04/18/telefork-forking-a-process-onto-a-different-computer/)
- [Rust 手动存出 WASI](http://www.jakubkonka.com/2020/04/28/rust-wasi-from-scratch.html)
- [Rust Analyzer - 更新日志 #22](https://rust-analyzer.github.io/thisweek/2020/04/27/changelog-22.html)
- [IntelliJ Rust 更新日志 ＃121](https://intellij-rust.github.io/2020/04/27/changelog-121.html)
- [Rust Type-level 编程](http://willcrichton.net/notes/type-level-programming/)
- [FullStory 实行 Rust，第 2 部分：我们的移动 SDK 的外观](https://bionic.fullstory.com/rust-at-fullstory-part-2/)
- [关于在 Rust 中解析的注意事项](https://blog.wesleyac.com/posts/rust-parsing)
- [Rust 创建快速的 REST API（第 1/2 部分）](https://docs.qovery.com/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1/)
- [The Safety Boat：Kubernetes 和 Rust](https://msrc-blog.microsoft.com/2020/04/29/the-safety-boat-kubernetes-and-rust/)
- [From Pratt to Dijkstra](https://matklad.github.io//2020/04/15/from-pratt-to-dijkstra.html)
- [学习嵌入式 Rust —— 构建 RISC-V 驱动的机器人，第 4 部分](https://matklad.github.io//2020/04/15/from-pratt-to-dijkstra.html)
- [如何编写 CRaP Rust 代码](https://blog.logrocket.com/how-to-write-crap-rust-code/)
- [Rust 并发：流式工作流，并带有 back-pressure 的一面。](https://medium.com/@polyglot_factotum/rust-concurrency-a-streaming-workflow-served-with-a-side-of-back-pressure-955bdf0266b5)
- [使用 PyO3 ，在 Rust 中编写 Python 模块](https://kushaldas.in/posts/writing-python-module-in-rust-using-pyo3.html)
- [创建一个健壮的，可重复使用的 Link-Checker](http://adventures.michaelfbryan.com/posts/linkchecker/)
- \[视频] [crust of rust: 声明式宏 ](https://www.youtube.com/watch?v=q6paRBbLgNw)
- \[视频] [rust stream: string it all together!](https://www.youtube.com/watch?v=7I11degAElQ)
- \[视频] [rust 教育在线 - 构建一个 git 命令行](https://www.youtube.com/watch?v=YFzF1AHYjes)
- \[视频] [子数组（subarrays）的最大和(Max Sum) —— (leetcode) in rust](https://www.youtube.com/watch?v=G1deF4Rehlw)
- \[视频] [wasm + rust](https://www.youtube.com/watch?list=PLDWmoWFf46gj7htqRU1yNwM3SeaqfLKhH&v=gpaNGlka7FY&feature=emb_logo)
- \[视频] [async/await - Rust 并发](https://www.youtube.com/watch?v=hrNoTZMG2MU)
- \[视频] [Rust 柏林畅想聚会-2020 年 4 月 ](https://www.youtube.com/watch?v=yGuxtodWYDs)
- \[视频] [rust zürisee, 4 月: cargo crev 和 cargo audit](https://www.youtube.com/watch?v=_xS40wqO8GA)

# 周箱

这周的箱子是[WinRT-rs](https://github.com/microsoft/winrt-rs)，这是 Microsoft™ 用于 Rust 的官方 WinRT API。

谢谢[JLalu](https://users.rust-lang.org/t/crate-of-the-week/2704/767)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

- [clap-rs：实现和派生常用 traits](https://github.com/clap-rs/clap/issues/952)
- [Boa 有几个问题标记为"easy", "good first issues", and "help wanted"](https://github.com/jasonwilliams/boa/issues)
- [Tokio：非消耗方法 —— 在 watch channel 上，等待新消息](https://github.com/tokio-rs/tokio/issues/2404)
- [Tokio：将 is_closed 添加到 mpsc channels](https://github.com/tokio-rs/tokio/issues/2469)
- [Tokio：写入 Windows 终端时，会拆分 Unicode 字符](https://github.com/tokio-rs/tokio/issues/2380)
- [Tokio：select! 一个分支，会导致裁剪错误](https://github.com/tokio-rs/tokio/issues/2251)
- [Stick：呼吁参与 —— 在 Linux 上测试更多游戏杆](https://github.com/libcala/stick/issues/5)

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 372 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-04-27..2020-05-04

- 实施 RFC[＃2523](https://rust-lang.github.io/rfcs/2523-cfg-path-version.html)，[`#[cfg(version(..))]`](https://github.com/rust-lang/rust/pull/71314)
- [让每个查询的缓存，将结果存储在 arenas 上面](https://github.com/rust-lang/rust/pull/70674)
- [避免为每个查询，重复代码](https://github.com/rust-lang/rust/pull/69808)
- [禁止`dyn Trait` in patterns](https://github.com/rust-lang/rust/pull/71038)
- [修复：autoderef 过程中的错误参数](https://github.com/rust-lang/rust/pull/71627)
- [建议`into`代替`try_into`，如果可能使用 int 类型的话](https://github.com/rust-lang/rust/pull/71617)
- [调整`rustc_resolve`的一些建议](https://github.com/rust-lang/rust/pull/71438)
- [添加消息：因名称空间错误的解析失败](https://github.com/rust-lang/rust/pull/71419)
- [由`?`导致的错误 —— `.into()`上的指向返回类型](https://github.com/rust-lang/rust/pull/71409)
- [在 tail exprs 中，选择建议`;`或是 drop 借用的行为](https://github.com/rust-lang/rust/pull/71217)
- [在涉及关联类型的 type mismatch 上，建议约束](https://github.com/rust-lang/rust/pull/71108)
- [最小化`coerce_borrowed_pointer`的参数](https://github.com/rust-lang/rust/pull/71524)
- [删除一些`Vec`分配，以提高性能](https://github.com/rust-lang/rust/pull/71268)
- [在 const-checking 中，无条件允许`Unreachable` terminators](https://github.com/rust-lang/rust/pull/71691)
- [在 const-checking 中，无条件允许`Downcast` projections](https://github.com/rust-lang/rust/pull/71688)
- [将 Scalars 的 MIR 常量传播，添加到函数调用参数(function call arguments)中](https://github.com/rust-lang/rust/pull/71697)
- [Miri：放开(unleash)所有的 feature gates](https://github.com/rust-lang/rust/pull/71631)
- [使用现有框架，进行反向数据流分析](https://github.com/rust-lang/rust/pull/71006)
- [添加：Read/Write::can_read/write_vectored](https://github.com/rust-lang/rust/pull/67841)
- [添加：`RefCell::take`](https://github.com/rust-lang/rust/pull/71398)
- [`slice::fill`： 采用`T`，代替泛型参数](https://github.com/rust-lang/rust/pull/71165)
- [`Vec` `drop`和`truncate`：使用 raw slice `*mut [T]`时，就 drop](https://github.com/rust-lang/rust/pull/71148)
- [hashbrown：标记 `RawTable::par_iter` 为 `unsafe`](https://github.com/rust-lang/hashbrown/pull/157)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2585:FC，用于 unsafe fn 中的不安全代码块](https://github.com/rust-lang/rfcs/pull/2585)

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_本周没有任何 RFC 处于最终评论期_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [跟踪问题：rfc 2432, "allow `if` and `match` in constants"](https://github.com/rust-lang/rust/issues/49146)
- \[处置：合并] [跟踪问题：std::sync::once poisoning](https://github.com/rust-lang/rust/issues/33577)

## 新的 RFC

- [内联`const`表达式和模式](https://github.com/rust-lang/rfcs/pull/2920)
- [添加`experimental_keywords`能力](https://github.com/rust-lang/rfcs/pull/2919)
- [sigil-option-notation](https://github.com/rust-lang/rfcs/pull/2918)

# 本周引用句

> 我爱 Rust 就像我爱 Dark Souls （黑魂）。
> 良药苦口（准备好受苦了吗）。对我来说，不管怎样赞美那些，意识到正确的错误，远远优于全面的文档的软件开发人员，都不为过。

– [seph-reed on Hacker News](https://news.ycombinator.com/item?id=23032636)

Thanks to [Armando Pérez Marqués](https://users.rust-lang.org/t/twir-quote-of-the-week/328/864) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), [srikwit](https://github.com/srikwit), and [nasa42](https://github.com/nasa42)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/geagy0/this_week_in_rust_337/).</small>
