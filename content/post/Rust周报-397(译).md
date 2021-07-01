---
title: "Rust周报 397(译)"
date: 2021-07-01T11:36:00+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-397"
css:
  [
    "/css/pre_btn.css",
    "https://www.ecorax.net/style.css",
    "https://www.ecorax.net/color/marrow.css",
  ]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-06-30
- [原文：397 期](https://this-week-in-rust.org/blog/2021/30/06/this-week-in-rust-397/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

### Official

- \[Foundation] [announcing our executive search](https://foundation.rust-lang.org/posts/2021-06-25-announcing-executive-search/)

### Project/Tooling Updates

- [ChainSafe's Polkadot Index Network Token update #2](https://medium.com/chainsafe-systems/pint-community-update-2-b337ece3f031)
- [Rust Analyzer Changelog #83](https://rust-analyzer.github.io/thisweek/2021/06/28/changelog-83.html)
- [Fang](https://www.badykov.com/rust/2021/06/27/fang/)
- [This Week In Veloren 125](https://veloren.net/devblog-125/)
- [This Week In TensorBase 9](https://tensorbase.io/thisweek/2021-06-30-tw_9/)

### Observations/Thoughts

- [‘wasmi’ - 帮助 wasm 模块 与 Rust 结合](https://blog.knoldus.com/hosting-wasm-modules-in-rust-easily-using-wasmi/)
- \[video] [rust - 网络云的未来](https://www.youtube.com/watch?v=BWL4889RKhU&t=5s)

### Rust Walkthroughs

- [反序列化 二进制(0/1)数据文件 in Rust](https://adventures.michaelfbryan.com/posts/deserializing-binary-data-files/)
- [Type-checked keypaths in Rust](http://www.cmyr.net/blog/keypaths.html)
- [Polymorphism in Rust](https://oswalt.dev/2021/06/polymorphism-in-rust/)
- [GitHub Actions(持续集成产物)：跨平台编译 Rust 项目](https://www.rohanjain.in/cargo-cross/)
- [Rust #2: Lifetimes, Owners and Borrowers, OH MY!](https://dev.to/cthutu/rust-2-lifetimes-owners-and-borrowers-oh-my-3fem)
- \[系列] [Build an API in Rust (Part 3)](https://dev.to/naruhodo/build-an-api-in-rust-part-3-11j1)
- \[系列] \[video] [building a web application with rust - part v - http server with database manager](https://www.youtube.com/watch?v=TCUnZVLgNps)
- \[系列] \[video] [building a web application with rust - part vi - crud api](<[https://www.youtube.com/watch?v=v7y*Ngn*-AY](https://www.youtube.com/watch?v=v7y_Ngn_-AY)>)
- \[视频] [Beginner's Series to Rust](https://www.youtube.com/playlist?list=PLlrxD0HtieHjbTjrchBwOVks_sr8EVW1x)
- \[视频] [Building a multithreaded Flutter + Rust App integrating both with Bloc/Cubit and Rid](https://www.youtube.com/watch?v=PGKBdxOA6Xs&t=1s)
- \[视频] [Implementing Hazard Pointers in Rust](https://www.youtube.com/watch?v=fvcbyCYdR10)
- \[视频] [Rust Linz; June 2021 - Tim McNamara - How to learn Rust](https://www.youtube.com/watch?v=sDtQaO5_SOw)

### Miscellaneous

- [Programming Rust, 2nd Edition is Available](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/)
- [Rust in Action is Available](https://www.manning.com/books/rust-in-action)

## Crate of the Week

本周的箱子是[hypergraph](https://github.com/yamafaktory/hypergraph), 图(graph)数据结构实现，其中边(edge)可以连接任意数量的顶点(vertices)。

谢谢[Davy Duperron](https://users.rust-lang.org/t/crate-of-the-week/2704/929)建议。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

284 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-06-21..2021-06-28

- [fix type checking of return expressions outside of function bodies](https://github.com/rust-lang/rust/pull/86206)
- [add `future_prelude_collision` lint](https://github.com/rust-lang/rust/pull/85707)
- [do not emit alloca for ZST locals with multiple assignments](https://github.com/rust-lang/rust/pull/86166)
- [fix panic-safety in specialized `Zip::next_back`](https://github.com/rust-lang/rust/pull/86452)
- [add `io::Cursor::`{`remaining`, `remaining_slice`, `is_empty`}](https://github.com/rust-lang/rust/pull/86037)
- [make `fmt::Arguments::as_str` unstably const](https://github.com/rust-lang/rust/pull/86655)
- [cargo: unify weak and namespaced features](https://github.com/rust-lang/cargo/pull/9574)
- [rustdoc: properly render higher-ranked trait bounds](https://github.com/rust-lang/rust/pull/84814)
- [rustdoc: do not list impl when trait has doc(hidden)](https://github.com/rust-lang/rust/pull/86513)
- [rustdoc: render `<Self as X>::Y` type casts properly across crate bounds](https://github.com/rust-lang/rust/pull/86449)
- [rustdoc: staggered layout for module contents on mobile](https://github.com/rust-lang/rust/pull/85651)
- [clippy: add suspicious group](https://github.com/rust-lang/rust-clippy/pull/7350)

### Rust Compiler Performance Triage

本周我们只有部分结果（完整报告中，有更多详细信息）。从我们收集的结果来看，我们有一个小的退步和几个改进。此外，还有一个广泛的[max-rss regression](https://perf.rust-lang.org/compare.html?start=29cd70d40722930e66a8b726fe58a7bd1d64a22b&end=6b354a13820a444f834a33365ae4a8d97d7d27ce&stat=max-rss) 11 天前开始。和更精确的[max-rss regression](https://perf.rust-lang.org/compare.html?start=406d4a9cc3b9601cf98a07c6c83e0227d64f5d48&end=4573a4a879a8e1f773944a8859e4dcd136138af8&stat=max-rss)从 9 天前开始。

分流完成 **@pnkfelix**. 修订范围：[406d4a9..5a78340](https://perf.rust-lang.org/?start=406d4a9cc3b9601cf98a07c6c83e0227d64f5d48&end=5a7834050f3a0ebcd117b4ddf0bc1e8459594309&absolute=false&stat=instructions%3Au) 修订范围：[7c3872e..7ede6e2](https://perf.rust-lang.org/?start=7c3872e6bfd555d2ad753ac1f871db3bd7f2a547&end=7ede6e2a2359c1bb9032baffa4fdafe5633749e3&absolute=false&stat=instructions%3Au)

1 个退步，5 个改进，0 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-06-30.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [RFC: let-else statements](https://github.com/rust-lang/rfcs/pull/3137)
- \[处置：合并] [RFC: I/O Safety](https://github.com/rust-lang/rfcs/pull/3128)
- \[处置：合并] [`#[derive(Default)]` on enums with a `#[default]` attribute](https://github.com/rust-lang/rfcs/pull/3107)
- \[处置：关闭] [New RFC: Collection Transmute](https://github.com/rust-lang/rfcs/pull/2756)
- \[处置：关闭] [RFC: Add delete and delete_by methods to Iterator](https://github.com/rust-lang/rfcs/pull/2475)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [Stabilize bindings_after_at](https://github.com/rust-lang/rust/pull/85305)
- \[处置：合并] [Tracking Issue for std::io::Seek::rewind()](https://github.com/rust-lang/rust/issues/85149)
- \[处置：合并] [Stabilize `impl From<[(K, V); N]>` for HashMap (and friends)](https://github.com/rust-lang/rust/pull/84111)
- \[处置：合并] [Stabilize "RangeFrom" patterns in 1.55](https://github.com/rust-lang/rust/pull/83918)
- \[处置：合并] [Tracking Issue for feature(string_drain_as_str) - string::Drain::as_str()](https://github.com/rust-lang/rust/issues/76905)

### New RFCs

- [Candidate Target Policy](https://github.com/rust-lang/rfcs/pull/3145)

# Quote of the Week

> 当一个 panic（恐慌） 的“有效载荷（playload）”是一个需要 Drops 的对象时，\
> 而这个 panic 会因为意外停止而触发 catch_unwind\
> 如果在此之前，它的 Drop 也出现恐慌了，那么我们就会让你的桌面崩溃，\
> 结果就是，“有效载荷”被彻底遗忘了，和，you'd better grab some mops(拖把)！

——[Josh Triplett on twitter](https://twitter.com/josh_triplett/status/1407776002973986819)

谢谢[Josh Triplett](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1069)对于自我建议！

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_本周 Rust 编辑：[nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq)， 和[cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/obarj8/this_week_in_rust_397/)</small>
