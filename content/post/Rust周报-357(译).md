---
title: "Rust周报 357(译)"
date: 2020-09-24T23:27:04+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-357"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-09-23
- [原文：357 期](https://this-week-in-rust.org/blog/2020/09/23/this-week-in-rust-357/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

本周没有新闻通讯。

### 官方

- [2021 年路线图参与博客，即将结束](https://blog.rust-lang.org/2020/09/21/Scheduling-2021-Roadmap.html)
- [宣布错误处理项目组](https://blog.rust-lang.org/inside-rust/2020/09/18/error-handling-wg-announcement.html)
- \[内部] [intra-doc links 接近稳定](https://blog.rust-lang.org/inside-rust/2020/09/17/stabilizing-intra-doc-links.html)

### 工具

- [IntelliJ Rust 更新日志＃131](https://intellij-rust.github.io/2020/09/21/changelog-131.html)
- [Rust Analyzer 变更日志＃43](https://rust-analyzer.github.io/thisweek/2020/09/21/changelog-43.html)
- [Knurling-rs 变更日志＃1](https://ferrous-systems.com/blog/knurling-changelog-1/)

### 观察/想法

- [将 EBU R128 音频响度分析，从 C 移植到 Rust](https://coaxion.net/blog/2020/09/porting-ebu-r128-audio-loudness-analysis-from-c-to-rust/)
- [字符串上的类型：Rust 中的可扩展架构](https://willcrichton.net/notes/types-over-strings/)
- [为什么不用 Rust？](https://matklad.github.io//2020/09/20/why-not-rust.html)
- [为什么不用 Rust for 安全？](https://www.cryptologie.net/article/505/why-not-rust-for-security/)
- [为什么 Rust 不是成熟的编程语言](https://codecs.multimedia.cx/2020/09/why-rust-is-not-a-mature-programming-language/)
- [我最喜欢的 Rust 签名](https://www.brandonsmith.ninja/blog/favorite-rust-function)
- [Rust 是伪装的函数式语言吗？](https://ceronman.com/2020/09/17/is-rust-a-functional-language-in-disguise/)
- [Async Iteration 语义](https://blog.yoshuawuyts.com/async-iteration/)
- [Cranelift 的新后端，第 1 部分：指令选择](https://cfallin.org/blog/2020/09/18/cranelift-isel-1/)
- [丢码](https://vorner.github.io/2020/09/20/throw-away-code.html)
- [我开始学习 Rust](https://jean.manguy.eu/post/i-started-to-learn-rust/)
- [基于纯 AST 的 linting，真的很烂](https://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html)
- [Rust 嵌入式抽象的潜在改进](https://tweedegolf.nl/blog/42/potential-improvements-for-rust-embedded-abstractions)

### 学习标准 Rust

- [TL;;DR Rust](https://christine.website/blog/TLDR-rust-2020-09-19)
- [Rust 中的变量和可变性](https://edfloreshz.blog/variables-and-mutability)
- [Rust 初学者的工作路线](https://rustlabs.kubedaily.com/Beginners/README.html)
- [学习 Rust：OMG WTF RS —— 帮助您入门 Rust 的资源](https://ferrous-systems.com/blog/omg-wtf-rs-resources-to-help-you-get-started-with-rust/)
- [仅用 10 行编写您自己的 Rust 编译器插件！](https://dev.to/sam3d/write-your-own-rust-compiler-plugin-in-only-10-lines-4df4)
- [Rust 中的可选参数](https://dev.to/virtualkirill/optional-arguments-in-rust-1e9g)
- [Rust 二叉搜索树的实现](https://medium.com/@bkuliyev/implementation-of-binary-search-tree-in-rust-ce7ce479b505)
- \[FR] [le concept de “propriétaire” ou “ownership” en rust](https://medium.com/@nunes.nelson4/le-concept-de-propri%C3%A9taire-ou-ownership-en-rust-c96d43c3375d)
- \[TH] [rustler 101: ferris say](https://dev.to/wingyplus/rustler-101-ferris-say-3jj6)

### 了解更多 Rust

- [动态迭代器](https://hole.tuziwo.info/dyn-iterator.html)
- [底层-学院](https://lowlvl.org/)
- [使用 tokio，在 Rust 中编写 HTTP（S）隧道。](https://medium.com/@xnuter/writing-a-modern-http-s-tunnel-in-rust-56e70d898700)
- [与 TLS 同舞](https://blog.drogue.io/yak-hole-of-tls/)
- [实在太 Rust 啦：元编程](https://dev.to/imaculate3/that-s-so-rusty-metaprogramming-49mj)
- [Bevy 游戏引擎＃1](https://dev.to/ethanyidong/the-bevy-engine-1-4k4k)
- [使用 Rust 和 WebAssembly 在 Node.js 中，进行人脸检测](https://dev.to/alabulei1/high-performance-and-safe-ai-as-a-service-in-node-js-43lg)
- \[视频] [FLTK Rust: Using FLTK on Android](https://youtu.be/3jW_vxGmxt0)

### 项目更新

- [宣布和公开新的 Holochain](https://medium.com/holochain/unpacking-the-new-holochain-f54da3ca99b7)

### 杂项

- [延长 CfP 截止日期和新的演讲者特权！](https://blog.rustfest.eu/cfp-extension-new-speaker-perks)
- [Neovim 和 Rust](https://sharksforarms.dev/posts/neovim-rust/)
- [我如何停止担心，并开始使用 Rust🦀️ 进行编码](https://dev.to/yjdoc2/how-i-stopped-worrying-and-started-coding-in-rust-52b)
- [Haskell 的孩子](https://owenlynch.org/posts/2020-09-16-haskells-children/)
- [Bazel 持久性工人 for Rust](https://nikhilism.com/post/2020/bazel-persistent-worker-rust/)
- [Rust 的 ESXi 二进制文件](https://sbaronda.com/2020/09/20/esxi-binaries-with-rust/)
- [j4rs：JavaFX 支持（WIP）](https://astonbitecode.github.io/blog/post/j4rs_javafx_support/)
- [使用 LVGL ，在 RIOT 上，将 PineTime 表盘从 C 移植到 Rust](https://lupyuen.github.io/pinetime-rust-riot/articles/watch_face)
- \[J.P] [rust の async で goroutine の速度に勝つ](https://medium.com/nttlabs/rust-async-runtime-877b516d934d)

# 征集博客文章

Rust 核心团队希望获得社区的意见！如果您还没有，[阅读官方博客](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)并提交博客文章-它会显示在这里！自征集博客以来，以下是精彩的投稿：

- [Rust 2021 —— 道德发展](https://llogiq.github.io/2020/09/21/ethics.html)
- [我的 Rust 2021 心愿单 for 2021 年路线图](https://estada.ch/2020/9/23/my-rust-2021-wishlist-for-the-2021-roadmap/)
- [Rust 2021：降低障碍](https://blog.nindalf.com/posts/rust-2021/)
- [要求 cargo 更好的\[patch\]](https://longfangsong.github.io/2020/09/07/Rust-2021-Request-for-a-better-patch-in-cargo/)
- [我对 ＃Rust2021 的期望](https://haurchefant.fr/posts/what-i-wish-for-rust2021/)
- [2021 年的 Rust](https://www.ncameron.org/blog/rust-in-2021/)
- [Rust 2021](https://gist.github.com/mark-i-m/57b51099e02f2d1fb4d4a4bf08e92965)
- [作为爱好 Rust 开发人员，我想少考虑错误处理](https://mbuffett.com/posts/rust-less-error-handling/)
- [Rust 2021](https://gist.github.com/pickfire/3bcceeacf0bae22dd9f03c5053a976e3)
- [我最不喜欢的 Rust 类型](https://ridiculousfish.com/blog/posts/least-favorite-rust-type.html)
- [我对 Rust 2021 的愿望清单](https://sam-vente.com/blog/my-rust-2021-wishlist/index.html)
- [我的 Rust 2021 路线图](https://www.reddit.com/r/rust/comments/imd8b8/my_rust_2021_roadmap/)
- [Rust 路线图 2021：允许使用任意大小的整数原语](https://therealprof.github.io/blog/roadmap-2021-arbitrary-size-primitives/)
- [Rust 路线图 2021：添加有用的开发人员模式，并将其设置为默认模式](https://therealprof.github.io/blog/roadmap-2021-usable-dev-mode/)
- [2021 年的 Rust](https://jyn514.github.io/2020/09/05/Rust-in-2021.html)
- [是什么阻止了我使用 Rust？](https://mgrech.dev/whats-stopping-me-from-using-rust/)
- [Pastebin 提交](https://pastebin.com/d6jaxh7n)
- [黑客新闻提交](https://news.ycombinator.com/item?id=24368077)

# 周箱

这周的箱子是[cargo-about](https://crates.io/crates/cargo-about)，这是一个便捷的 cargo 子命令，用于列出依赖项及其许可证！

谢谢[Jimuazu](https://users.rust-lang.org/t/crate-of-the-week/2704/820)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 373 个拉取请求[在上周合并] [merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-09-14..2020-09-21

- [让用户看到 type-length 限制错误的完整类型](https://github.com/rust-lang/rust/pull/76843)
- [不允许直接在`type-alias-impl-trait`上，实现 trait](https://github.com/rust-lang/rust/pull/76940)
- [给予 _更好_ 的建议，当匹配一个 const range](https://github.com/rust-lang/rust/pull/76749)
- [介绍一个`PartitioningCx`结构](https://github.com/rust-lang/rust/pull/76694)
- [初步支持`riscv32gc_unknown_linux_gnu`](https://github.com/rust-lang/rust/pull/76048)
- [请注意，由 deref coercion 导致一个 move/borrow 错误时](https://github.com/rust-lang/rust/pull/75304)
- [新的 MIR 优化过程，减少了那些 tuples of enums 匹配时的分支](https://github.com/rust-lang/rust/pull/75119)
- [改善诊断 `&mut`之后的 lifetime](https://github.com/rust-lang/rust/pull/73595)
- [在 MIR 上，实现一个泛型的 Destination Propagation(目的地传播)优化](https://github.com/rust-lang/rust/pull/72632)
- [miri：支持非 rlib extern 文件](https://github.com/rust-lang/miri/pull/1557)
- [将`as_str()`添加到`string::Drain`](https://github.com/rust-lang/rust/pull/76525)
- [使`Duration`所有的方法变为不稳定的 const](https://github.com/rust-lang/rust/pull/76335)
- [添加 `[T; N]: TryFrom<Vec<T>>` ](https://github.com/rust-lang/rust/pull/76310)
- [稳定化：将一些`Result`方法，as const](https://github.com/rust-lang/rust/pull/76136)
- [稳定化：将一些`Option`方法，as const](https://github.com/rust-lang/rust/pull/76135)
- [当`std::collections::binary_heap::PeekMut`永远不会被可变地解引用，避免没用的`sift_down`](https://github.com/rust-lang/rust/pull/75974)
- [futures：实现`try_take_while`](https://github.com/rust-lang/futures-rs/pull/2212)
- [clippy：更改`interior_mutable_const`的规范](https://github.com/rust-lang/rust-clippy/pull/6046)

## Rust 编译器性能分类

- [2020-09-21](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-21.md)：2 个性能回退，5 个改进，4 个混合

这是半自动性能分类的第一周，谢天谢地：发生了很多事情。大多数回退值要么很小，要么已经发布了修复程序。

[＃72412](https://github.com/rust-lang/rust/issues/72412)可能是最有趣的情况。通过在似乎‘比较热’的代码部分添加循环检测，解决了涉及嵌套闭包的病理问题。结果，大多数用户在他们的箱子中，会看到轻微的[编译时性能回退](https://perf.rust-lang.org/compare.html?start=2c69266c0697b0c0b34abea62cba1a1d3c59c90c&end=fdc3405c20122fd0f077f5a77addabc873f20e4c&stat=task-clock)。

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-21.md)更多。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [\[RFC\]：便携式 SIMD 库项目组](https://github.com/rust-lang/rfcs/pull/2977)
- [建立一个新的错误处理项目组](https://github.com/rust-lang/rfcs/pull/2965)

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [获取任意表达式的类型](https://github.com/rust-lang/rfcs/pull/2706)
- [添加一般性的 Arity 元组](https://github.com/rust-lang/rfcs/pull/2702)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [让 RawFd 实现 RawFd traits](https://github.com/rust-lang/rust/pull/76969)
- \[处置：合并] [允许 ‘无人居住的’ enums 转换为 ints](https://github.com/rust-lang/rust/pull/76199)
- \[处置：合并] [稳定化： move_ref_pattern](https://github.com/rust-lang/rust/pull/76119)
- \[处置：合并] [为 MAJOR.MINOR channel 编写 manifest，去启动 rustup 便利性](https://github.com/rust-lang/rust/pull/76107)
- \[处置：合并] [明确记录 Option 做出的 size 保证 ](https://github.com/rust-lang/rust/pull/75454)
- \[处置：合并] [稳定化： intra-doc links](https://github.com/rust-lang/rust/pull/74430>)
- \[处置：合并] [添加 PartialEq impls for Vec <-> slice](https://github.com/rust-lang/rust/pull/74194)
- \[处置：合并] [target-feature 1.1: 闭包应该继承 target-feature 注解 吗?](https://github.com/rust-lang/rust/issues/73631)
- \[处置：合并] [might_permit_raw_init: 还要检查合计的字段](https://github.com/rust-lang/rust/pull/71274)

## 新的 RFC

- [RFC 2582: 修复原始指针的隐式 auto-deref](https://github.com/rust-lang/rfcs/pull/2987)
- [稳定的 Rustdoc URLs](https://github.com/rust-lang/rfcs/pull/2988)

# 本周最佳语录

> 有时，你甚至不*希望*代码被编译。因为编译器的工作通常是告诉你，你的代码不能编译，而不是试图找到一些允许代码编译的有效建议。

- [Josh Triplett on rust-internals](https://internals.rust-lang.org/t/pre-rfc-returning-automatically-generating-impl-trait/13090/11)

Thanks to [Jacob Pratt](https://users.rust-lang.org/t/twir-quote-of-the-week/328/943) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/iu3ge0/this_week_in_rust_356/)</small>
