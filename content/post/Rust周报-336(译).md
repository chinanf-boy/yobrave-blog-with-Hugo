---
title: "Rust周报 336(译)"
date: 2020-05-03T10:53:35+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-336"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-04-28
- [原文：336 期](https://this-week-in-rust.org/blog/2020/04/28/this-week-in-rust-336/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.43.0](https://blog.rust-lang.org/2020/04/23/Rust-1.43.0.html)。🎉🎈
- [2020 年，Rust 编译器的加速计划](https://blog.mozilla.org/nnethercote/2020/04/24/how-to-speed-up-the-rust-compiler-in-2020/)。
- [体验 Firefox 中的 WebGPU](https://hacks.mozilla.org/2020/04/experimental-webgpu-in-firefox/)。
- [使用 Rust 和 AWS Lambda 进行数据提取](http://jamesmcm.github.io/blog/2020/04/19/data-engineering-with-rust-and-aws-lambda/#en)。
- [嵌入式 Rust pattern —— zero sized references(零大小引用)](https://ferrous-systems.com/blog/zero-sized-references/)。
- [Rust 实现线性四叉树](https://snorrwe.onrender.com/posts/morton-table/)。
- [tagged union 的内存有效序列化](https://robinmoussu.gitlab.io/blog/post/binary_serialisation_of_enum/)。
- [Unpacking Serde](https://www.reddit.com/r/rust/comments/g6ubuv/unpacking_serde_a_series_of_presentations_i_made/)。
- \[视频] [rust stream: ownership, closures, and threads (所有权，闭包和线程)- oh my](https://www.youtube.com/watch?v=2mwwYbBRJSo)。
- \[视频] [Crust of Rust：生命周期注释](https://docs.google.com/spreadsheets/d/15pqsOlwc2eBXNRV0GJP7Taa3NnFi5kMFpmyVerONsf8/edit#gid=853276561)。
- [对 Rust 和 WebAssembly 的第一印象](https://deedone.github.io/posts/rust-wasm/)。
- [从 Rust 到 WebAssembly：使用 Actix ＆ Yew 构建 交互式笔记 网络应用程序](https://www.luu.io/posts/lenote)。
- [Rust 的 future：内部执行过程](https://blog.knoldus.com/rusts-future-internal-execution/)。
- [Rust 并发：五个简单的部分](https://medium.com/@polyglot_factotum/rust-concurrency-five-easy-pieces-871f1c62906a)。
- [（几乎）无锁 stream buffering](https://mcfelix.me/blog/shared-buffers/)。
- [Rust 和 Node.js：天作之合](https://blog.logrocket.com/rust-and-node-js-a-match-made-in-heaven/)。
- [减少 Rust GStreamer 插件的大小](https://www.collabora.com/news-and-blog/blog/2020/04/28/reducing-size-rust-gstreamer-plugin/)。
- [在 Rust 代码中，编写 Python —— 第 2 部分](https://blog.m-ou.se/writing-python-inside-rust-2/)。

# 周箱

这周的箱子是[coercible_errors](https://crates.io/crates/coercible_errors)，如果 errors 永远不会发生，该库允许'泛型 trait 实现'，省略`Result::Err`的大小成本。

谢谢[Zac Burns](https://users.rust-lang.org/t/crate-of-the-week/2704/763)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [ALMA：添加 flag - 安装到分区，而不是格式化磁盘](https://github.com/r-darwish/alma/issues/46)。

如果您是 Rust 项目的所有者，并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 367 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-04-20..2020-04-27

- [不要在 "mir-opt-level=0" 上，运行各种 MIR 优化](https://github.com/rust-lang/rust/pull/70073)
- [在`box_region`中，用 generator resume 参数 替换 thread_local](https://github.com/rust-lang/rust/pull/71554)
- [fix `-Zast-json`：输出正确的 JSON 形式](https://github.com/rust-lang/rust/pull/71284)
- [允许`librustc_data_structures/profiling.rs`的 wasm32 编译](https://github.com/rust-lang/rust/pull/71369)
- [`proc_macro::is_available()`](https://github.com/rust-lang/rust/pull/71400)
- [proc_macro：稳定化 `Span::resolved_at`和`Span::located_at`](https://github.com/rust-lang/rust/pull/69041)
- [尝试通过删除`exports_all_green`，来恢复性能](https://github.com/rust-lang/rust/pull/71267)
- [chalk：使用`FxHashMap`/`FxHashSet`，并为元组添加格式正确的条件句](https://github.com/rust-lang/chalk/pull/411)
- [ConstProp：使用一个`BitSet<Local>`，代替`IndexVec<Local, bool>`](https://github.com/rust-lang/rust/pull/71312)
- [在 lowering 后，修复 `while` (`let`) 表达式的 span](https://github.com/rust-lang/rust/pull/71494)
- [Miri Frame：使用`mir::Location`去表示，函数中的位置](https://github.com/rust-lang/rust/pull/71475)
- [添加`BinaryHeap::retain`](https://github.com/rust-lang/rust/pull/71485)
- [新增一个函数：将`Box<T>`转为`Box<[T]>`](https://github.com/rust-lang/rust/pull/71421)
- [为 linked list `Cursor`和`CursorMut`，添加缺失`Send`和`Sync` impls](https://github.com/rust-lang/rust/pull/71548)
- [为`NonZero`整数类型，实现`BitOr`和`BitOrAssign`](https://github.com/rust-lang/rust/pull/69813)
- [稳定化：`alloc_layout_extras`的最常见子集](https://github.com/rust-lang/rust/pull/69362)
- [稳定化：`Span::mixed_site`](https://github.com/rust-lang/rust/pull/68716)
- [稳定化：`BTreeMap::remove_entry`](https://github.com/rust-lang/rust/pull/70712)
- [futures：引入`ready_chunks`适配器](https://github.com/rust-lang/futures-rs/pull/2123)
- [向后移植到 0.1：避免`FuturesUnordered::poll_next`内的 starvation(饿死)](https://github.com/rust-lang/futures-rs/pull/2122)
- [futures：添加`AsyncWriteExt::write_all_vectored`实用程序](https://github.com/rust-lang/futures-rs/pull/1741)
- [hashbrown：future-proof （specialization code）专有代码](https://github.com/rust-lang/hashbrown/pull/147)
- [hashbrown：删除 specialization 的不合理使用](https://github.com/rust-lang/hashbrown/pull/154)
- [cargo：修复在 workspace(工作区) 中，`resolve`不匹配的 warning(警告)](https://github.com/rust-lang/cargo/pull/8169)
- [cargo：添加`resolver`选择项，加入新功能解析器](https://github.com/rust-lang/cargo/pull/8129)
- [rustdoc：用 JSON 解析，替换 big JS dict](https://github.com/rust-lang/rust/pull/71250)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2836：介绍 ASM 项目组](https://github.com/rust-lang/rfcs/pull/2836)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [project groups](https://github.com/rust-lang/rfcs/pull/2856)。

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：`#[alloc_error_handler]` attribute (for no_std + liballoc)](https://github.com/rust-lang/rust/issues/66740)。
- \[处置：合并] [使 `handle_alloc_error` 为默认 panic (for no_std + liballoc)](https://github.com/rust-lang/rust/issues/66741)。
- \[处置：合并] [为 non-utf-8 str，移除语言级别的未定义行为](https://github.com/rust-lang/rust/issues/71033)。
- \[处置：合并] [定义 float-to-int 转换中的未定义行为，照顾边缘情况](https://github.com/rust-lang/rust/pull/71269)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> 一般来说，Rust 中的 Vecs，are crazy（疯狂） fast（快）（老快了）；比我在 C 语言重写还要快。太神奇了。

- [Jonathan Eisenzopf on rust-users](https://users.rust-lang.org/t/very-fast-initialization-of-a-vec-of-vecs/41301/17)

Thanks to [Louis Cloete](https://users.rust-lang.org/t/twir-quote-of-the-week/328/857) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), [srikwit](https://github.com/srikwit), and [nasa42](https://github.com/nasa42)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/gae1nt/this_week_in_rust_336/).</small>
