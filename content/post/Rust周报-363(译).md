---
title: "Rust周报 363(译)"
date: 2020-11-07T13:16:43+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-363"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-11-04
- [原文：363 期](https://this-week-in-rust.org/blog/2020/11/04/this-week-in-rust-363/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有 Rust Blog 帖子。

### Newsletters

- [RiB Newsletter #17 - Trick? Or Trait?](https://www.reddit.com/r/rust/comments/job17k/rib_newsletter_17_trick_or_trait/)
- [This month in Dimforge #2 (October 2020)](https://www.dimforge.com/blog/2020/11/01/this-month-in-dimforge/)
- [These Weeks in Actix | Sep-Oct '20](https://www.reddit.com/r/rust/comments/jkv5xu/these_weeks_in_actix_sepoct_20/)

### Tooling

- [Rust-Analyzer Changelog #49](https://rust-analyzer.github.io/thisweek/2020/11/02/changelog-49.html)
- [IntelliJ Rust Changelog #134](https://intellij-rust.github.io/2020/11/02/changelog-134.html)
- [IntelliJ Rust: 新功能性 Cargo Features](https://blog.jetbrains.com/clion/2020/10/intellij-rust-new-functionality-for-cargo-features/)

### Observations/Thoughts

- [Semantic FFI Bindings in Rust - 重启 the Borrow Checker](https://blog.schichler.dev/semantic-ffi-bindings-in-rust-reactivating-the-borrow-checker-ckgxtoxo8057pwrs174dqhcsi)
- [异常安全 in Rust: using transient（短暂的） droppers 防止内存泄漏](http://ngr.yt/blog/2020-11-03-exception-safety-in-rust-using-transient-droppers-to-prevent-memory-leaks.html)
- [Wasmcloud 进度](https://christine.website/blog/wasmcloud-progress-domains-2020-10-31)
- [Fast programming languages: C, C++, Rust, and Assembly](http://tempesta-tech.com/blog/fast-programming-languages-c-c++-rust-assembly)
- [对于复杂的应用, Rust 生产力可比 Kotlin](https://ferrous-systems.com/blog/rust-as-productive-as-kotlin/)
- [Rust for 数据密集型计算](https://github.com/frankmcsherry/blog/blob/master/posts/2020-06-09.md)
- [Using Rust for a simple 硬件项目](https://blog.tonari.no/rust-simple-hardware-project)
- [致命缺陷之 Ownership Semantics](http://www.gingerbill.org/article/2020/06/21/the-ownership-semantics-flaw/)
- [修复 bootstrap of rustc，通过使用 cg_clif](https://bjorn3.github.io/2020/11/01/fixing-rustc-bootstrap-with-cg_clif.html)
- [Cargo [features] 高阶用法](https://blog.turbo.fish/cargo-features/)

### Rust Walkthroughs

- [Rust 测试性设计: 调查问卷](https://alastairreid.github.io/rust-testability/)
- [Rust from a Gopher - Lessons 3 & 4](https://levpaul.com/posts/rust-lesson-3-and-4/)
- [（Web 框架）Rocket Tutorial 01: 基础](https://dev.to/davidedelpapa/rocket-tutorial-01-basics-4ph9)
- [构建一个 AWS Lambda 扩展 with Rust](https://dev.to/davidedelpapa/rocket-tutorial-01-basics-4ph9)
- [A Gopher Client in Rust - 02 Core Client](https://dev.to/krowemoh/gopher-client-in-rust-02-core-client-anh)
- [A Gopher Client in Rust - 03 Bookmarks and Full Code](https://dev.to/krowemoh/gopher-client-in-rust-03-extras-4o4d)
- [Rust HTTP Testing：使用 httpmock](https://dev.to/alexliesenfeld/rust-http-testing-with-httpmock-2mi0)
- [Newtype 模式 in Rust](https://www.worthe-it.co.za/blog/2020-10-31-newtype-pattern-in-rust.html)
- [How to: Rust + SDL2 + OpenGL on the web](https://blog.therocode.net/2020/10/a-guide-to-rust-sdl2-emscripten)
- [微编译器: Lexing](https://christine.website/blog/minicompiler-lexing-2020-10-29)
- [持续发布 For Rust Applications (Zero To Production In Rust #5)](https://www.lpalmieri.com/posts/2020-11-01-zero-to-production-5-how-to-deploy-a-rust-application/)
- \[DE] [The Rust Programming Language (translated in German)](https://rust-lang-de.github.io/rustbook-de/)
- \[video] [(Live Coding) Audio adventures in Rust: UI with WASM, Yew, and WebView](https://youtu.be/FaSoPcyOqPE)
- \[video] [How to build a multiplayer game - RustFest.Global Pre-Event (Video)](https://www.youtube.com/watch?v=Yb-QR3Vm3sk)
- \[video] [Current state of wasm with rust using an example](https://youtu.be/DxzIH1RrIxE)
- \[video] [Understanding Rust Lifetimes](https://youtu.be/MSi3E5Z8oRw)

### Project Updates

- [oso, 开源策略引擎 for authorization written in Rust](https://github.com/osohq/oso)，已发布[version 0.7.1 of their authorization library for Rust projects!](https://docs.rs/oso/0.7.1/oso/)
- [Apache Arrow 2.0.0 Rust Highlights](https://arrow.apache.org/blog/2020/10/27/rust-2.0.0-release/)

### Miscellaneous

- [100 个 Rust Binaries](https://www.wezm.net/v2/posts/2020/100-rust-binaries/)
- [为什么 Dark 不选择使用 Rust](https://blog.darklang.com/why-dark-didnt-choose-rust/)
- [Rust GameDev Ecosystem 调查](https://www.reddit.com/r/rust/comments/joj5e0/rust_gamedev_ecosystem_survey/)

# Crate of the Week

这周的箱子是来自 Sonos 的[tract](https://github.com/sonos/tract)，这是一个神经网络推理库，完全用 Rust 编写，用于 ONNX，NNEF 和 TF 格式的模型。

谢谢[Benjamin Minixhofer](https://users.rust-lang.org/t/crate-of-the-week/2704/837)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 374 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-10-26..2020-11-02

- [添加 cg_clif，作为可选的 codegen 后端](https://github.com/rust-lang/rust/pull/77975)（呀呼！）
- [rustc_span: 改善 bounds checks in byte_pos_to_line_and_col](https://github.com/rust-lang/rust/pull/78423)
- [调整对 const 泛型 的 turbofish 帮助信息](https://github.com/rust-lang/rust/pull/78460)
- [在包含新行（newlines）的片段（snippets）中，避免复杂的 diagnostics](https://github.com/rust-lang/rust/pull/75020)
- [建议 method call 和 field access 上，调用 await ](https://github.com/rust-lang/rust/pull/78297)
- [修复 “break 返回一个发散 values”，的 control flow check](https://github.com/rust-lang/rust/pull/77317)
- [提升 `temporary-cstring-as-ptr` lint from clippy into rustc](https://github.com/rust-lang/rust/pull/75671)
- [检查通用常量的对象安全](https://github.com/rust-lang/rust/pull/78365)
- [chalk: recursive solver 可配置最大值(max_size)](https://github.com/rust-lang/chalk/pull/647)
- [coherence check 性能: 遍历那个更小列表](https://github.com/rust-lang/rust/pull/78323)
- [进一步优化 align_offset for stride=1](https://github.com/rust-lang/rust/pull/75728)
- [inline `NonZeroN::from(n)`](https://github.com/rust-lang/rust/pull/78491)
- [inline Default::default() for atomics](https://github.com/rust-lang/rust/pull/78621)
- [inline some functions in core::str](https://github.com/rust-lang/rust/pull/78073)
- [当滥用 panic 时，防止 `String::retain` 创建 non-utf8 strings](https://github.com/rust-lang/rust/pull/78499)
- [添加 `fetch_update` methods to `AtomicBool` and `AtomicPtr`](https://github.com/rust-lang/rust/pull/78637)
- [add `[T]::as_chunks` (`_mut`) ](https://github.com/rust-lang/rust/pull/76635)
- [fix `Box::into_unique`](https://github.com/rust-lang/rust/pull/78446)
- [hashbrown: stable 版本上的小优化](https://github.com/rust-lang/hashbrown/pull/209)
- [futures: 添加 `WeakShared`](https://github.com/rust-lang/futures-rs/pull/2169)
- [cargo: 在 allowed feature name 字符上，添加一个 future-兼容性的警告](https://github.com/rust-lang/cargo/pull/8814)
- [cargo: 新的实现，namespaced features](https://github.com/rust-lang/cargo/pull/8799)

## Rust Compiler Performance Triage

- [2020-11-03](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-03.md)：0 退步，5 改进，0 混合

在各种基准上进行了许多改进。本周在编译器性能方面最值得注意的新闻是，在每个查询级别（per-query level）的指令量 collection 方面的进展。看最新的[measureme#143](https://github.com/rust-lang/measureme/pull/143)。

其他的，本周的性能表现不错（尽管主要是在压力测试和自动生成的测试用例上，而不是通常看到的代码上）。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-03.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: Target extension](https://github.com/rust-lang/rfcs/pull/2048)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [考虑具有 ManuallyDrop 类型的 union 字段，它的 assignments（分配） 的安全](https://github.com/rust-lang/rust/pull/78068)
- \[处置: 合并] [泛型类型上的 repr(transparent)，跳过 "exactly one non-zero-sized field" 的检查](https://github.com/rust-lang/rust/issues/77841)
- \[处置: 合并] [重命名/弃用 LayoutErr，以支持 LayoutError](https://github.com/rust-lang/rust/pull/77691)
- \[处置: 合并] [跟踪问题：raw_ref_macros](https://github.com/rust-lang/rust/issues/73394)
- \[disposition: merge] [添加检查流程：no_mangle to unsafe_code lint](https://github.com/rust-lang/rust/pull/72209)

## New RFCs

- [检查 compile time 时的条件式编译](https://github.com/rust-lang/rfcs/pull/3013)

# Quote of the Week

> 像其他语言一样，Rust 确实有步枪。不同的是，unsafe 帮我们上了保险栓。

– [Ted Mielczarek on twitter](https://twitter.com/TedMielczarek/status/1322618223980892161)

Thanks to [Nikolai Vazquez](https://users.rust-lang.org/t/twir-quote-of-the-week/328/956) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/joxy7n/this_week_in_rust_363/)</small>
