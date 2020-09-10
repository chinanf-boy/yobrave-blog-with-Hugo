---
title: "Rust周报 355(译)"
date: 2020-09-10T21:44:15+08:00
tags: ["week"]
description: "螃蟹-Rust周报-355"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-09-09
- [原文：355 期](https://this-week-in-rust.org/blog/2020/09/09/this-week-in-rust-355/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community（Rust 社区更新）

### Official（官方）

- [计划 2021 路线图](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)

### Tooling（工具）

- [Rust Analyzer Changelog #41](https://rust-analyzer.github.io/thisweek/2020/09/07/changelog-41.html)
- [IntelliJ Rust Changelog #130](https://intellij-rust.github.io/2020/09/07/changelog-130.html)

### Newsletters（时讯）

- [Rust GameDev 月刊 #13 - 8 月 2020](https://rust-gamedev.github.io/posts/newsletter-013/)
- [Rust OSDev 月刊 (8 月 2020)](https://rust-osdev.com/this-month/2020-08/)

### Observations/Thoughts（观察/思考）

- [回顾我的第一个有用 Rust 项目](http://jamesmcm.github.io/blog/2020/09/05/vopono/#en)

### Learn Standard Rust

- \[TR] [Rust Turu](https://tourofrust.com/00_tr.html)
- \[视频] [Choosing Rust - Intro to Rust and Ownership](https://www.youtube.com/watch?v=DMAnfOlhSpU)

### Learn More Rust

- [Linux System Call `fork()`](https://blog.knoldus.com/linux-system-call-fork-in-rust/)
- [窥视 Rust enum](https://fasterthanli.me/articles/peeking-inside-a-rust-enum)
- [如何再次加速 Rust 编译器](https://blog.mozilla.org/nnethercote/2020/09/08/how-to-speed-up-the-rust-compiler-one-last-time/)
- [Rust on Haiku: 隐蔽死亡线程的情况](https://www.haiku-os.org/blog/nielx/2020-09-06_rust_on_haiku_the_case_of_the_disappearing_deceased_threads/)
- [C++ vs Rust: 一个异步的一核一线程的故事](https://medium.com/@glaubercosta_11125/c-vs-rust-an-async-thread-per-core-story-28c4b43c410c)
- [Twistrs - 域名枚举库](https://blog.digital-horror.com/twistrs/)
- [如果你想要性能的话, 就作弊吧!](https://vorner.github.io/2020/09/03/performance-cheating.html)
- [反序列化 JSON 真的很快](https://blog.datalust.co/deserializing-json-really-fast/)
- [用 BPF 截断 Zoom's 加密数据](https://confused.ai/posts/intercepting-zoom-tls-encryption-bpf-uprobes)
  - **DISCLAIMER**: 本文使用的方法可能会在全球许多地区非法使用。请不要非法使用此类方法。The This Week in Rust team and the Rust project leadership are not responsible for any illegal activity by readers.

### Learn Standard Rust

- [半小时 Rust 学习](https://fasterthanli.me/articles/a-half-hour-to-learn-rust)
- [Rust - 明白 traits 1](https://dev.to/brunooliveira/rust-understanding-traits-1-45md)
- [That's so Rusty: 可变性](https://dev.to/imaculate3/that-s-so-rusty-mutables-5b40)
- \[视频] [Choosing Rust - Intro to Rust and Ownership](https://www.youtube.com/watch?v=DMAnfOlhSpU)

### Learn More Rust

- [制造一个语言 - 第零部分: 安装/设置](https://arzg.github.io/lang/0)
- [制造一个语言 - 第一部分: 一个基础解析器 （parser）](https://arzg.github.io/lang/1)
- [制造一个语言 - 第二部分: 空格支持](https://arzg.github.io/lang/2)
- [让我们构建一体 gRPC server-client 二进制文件 with Rust in 2020 - 第三部分](https://dev.to/tjtelan/let-s-build-a-single-binary-grpc-server-client-with-rust-in-2020-part-3-3fo8)
- [MMIO 抽象概念的冒险之旅](https://gist.github.com/Measter/2108508ba25ebe3978a6c10a1e01b9ad)
- [FFI 与 Rust](https://prateeknischal.github.io/i-c-and-so-does-rust/)
- [HTTP 状态码](https://www.fpcomplete.com/blog/http-status-codes-async-rust/)
- \[PL] [CrabbyBird #2 Poruszanie kamerą](https://postacnormalna.pl/ruch-kamery/)
- \[视频] [Using rust jni to call an external rust library in java](https://youtu.be/VIZK14pnGcw)
- \[视频] [1 - Basic Actix Web Server](https://youtu.be/HO-KMVXvXdA)
- \[视频] [2 - Creating the Tables](https://youtu.be/p22KFotfMYg)
- \[视频] [3 - Working with the Database](https://youtu.be/tK7qt0igtZA)
- \[视频] [4 - Getting the links](https://youtu.be/lxBxeKOZu3w)

### Project Updates（项目更新）

- [Rust 测试或是验证: 为什么不能全都要?](https://alastairreid.github.io/why-not-both/)
- [用 Knurling-rs，学习 嵌入式 Rust](https://ferrous-systems.com/blog/knurling-sessions-introduction/)

### Miscellaneous（杂项）

- [超快速就创建一个令人惊讶 Rust GitHub 项目](https://www.marcoieni.com/2020/09/create-an-amazing-rust-github-project-in-no-time/)
- [离开 Rust core 团队](https://www.ncameron.org/blog/leaving-the-rust-core-team/)
- [当线程撕裂者 CPU 遇见 rustc](https://bobweb.co/article/threadripper-meets-rustc)
- [了解和演变 Rust Programming Language](https://people.mpi-sws.org/~jung/thesis.html)
- [Path 的修整 in Nightly Rust](https://blog.aloni.org/posts/path-trimming-in-rust-nightly/)
- [Steve Klabnik 采访 - "Rust 并不担心作为不完美的作品，只要我们仍能做有用的事情就行。"](https://evrone.com/steve-klabnik-interview)
- [终于在 40 岁时学习编程](https://github.com/Dhghomon/programming_at_40/blob/master/README.md)
- \[视频] [Iota Identity-Diff Macro - Live Stream](https://youtu.be/1r094Uzz7A0)

# 周箱

This week's crate is [serde-query](https://github.com/pandaman64/serde-query/), 用于 Serde 的一个高效查询语言。

Thanks to [Vlad Frolov](https://users.rust-lang.org/t/crate-of-the-week/2704/810) for the suggestion!

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_No issues were proposed for CfP_.

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

332 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-08-31..2020-09-07

- [inliner: 当对 generators 优化时，防止查询（query）循环，](https://github.com/rust-lang/rust/pull/76245)
- [diagnostics: 具有唯一符号的更短 paths](https://github.com/rust-lang/rust/pull/73996)
- [添加 `-Z proc-macro-backtrace`，以允许展示 proc-macro panics](https://github.com/rust-lang/rust/pull/75082)
- [当遇到 `if x = y` 这种情况，建议`if let x = y`](https://github.com/rust-lang/rust/pull/75931)
- [MIR peephole 优化 {Ne, Eq}(\_1, false) into \_1](https://github.com/rust-lang/rust/pull/76067)
- [miri: 将 panic payload state ，从 Machine 移动到 Thread](https://github.com/rust-lang/miri/pull/1532)
- [当索引是来自一个 enum 时，消除一些其他的 bound checks](https://github.com/rust-lang/rust/pull/75529)
- [改善畸形的 `format!` call 的复原](https://github.com/rust-lang/rust/pull/76160)
- [让一些 collection 和 iterator 操作原地运行](https://github.com/rust-lang/rust/pull/70793)
- [稳定化：`deque_make_contiguous`](https://github.com/rust-lang/rust/pull/74559)
- [添加 `slice::check_range`](https://github.com/rust-lang/rust/pull/75207)
- [BTreeMap: 引入 marker::ValMut 和，为唯一访问保留 Mut](https://github.com/rust-lang/rust/pull/75200)
- [添加 `[T; N]::as_[mut_]slice `](https://github.com/rust-lang/rust/pull/76120)
- [impl `Seek::stream_position()` for `BufReader`](https://github.com/rust-lang/rust/pull/74366)
- [`impl Rc::new_cyclic`](https://github.com/rust-lang/rust/pull/75994)
- [让 `cow_is_borrowed` 方法变为 const](https://github.com/rust-lang/rust/pull/76139)
- [compiler-builtins: ’除法‘性能的巨大提升，for u128 和其他](https://github.com/rust-lang/compiler-builtins/pull/332)
- [stdarch: bye bye MMX!](https://github.com/rust-lang/stdarch/pull/890)
- [stdarch: AVX512](https://github.com/rust-lang/stdarch/pull/891)
- [futures-rs: impl `FusedStream` for `FuturesOrdered`](https://github.com/rust-lang/futures-rs/pull/2205)
- [futures-rs: 修复由于缺失 `'static` on `task::waker` 的 未定义行为](https://github.com/rust-lang/futures-rs/pull/2206)
- [hashbrown: 适用 alloc crate on stable Rust](https://github.com/rust-lang/hashbrown/pull/197)
- [hashbrown: 移除 `from_key_hashed_nocheck`的 `Q: Hash`](https://github.com/rust-lang/hashbrown/pull/200)

## Rust 编译器性能分类

- [2020-09-08](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-08.md):
  3 个性能退化, 0 个提升。

本周有几个 compile-time 性能退化。第一个是
[#70793](https://github.com/rust-lang/rust/pull/70793), 其添加了一些
specializations 到标准库，为了提升 runtime 性能。第二个是
[#73996](https://github.com/rust-lang/rust/pull/73996), 其添加了一个 option 到
diagnostics 代码，用来打印唯一 types 和 traits 的名字，而不是完整路径。 第三个是
[#75200](https://github.com/rust-lang/rust/pull/75200), 它重构了
`BTreeMap` 部分代码，避免了可变引用的别名化。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [[RFC]: 可移植 SIMD 库工作组](https://github.com/rust-lang/rfcs/pull/2977)
- [建立一个新的错误处理流程 工作组](https://github.com/rust-lang/rfcs/pull/2965)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [添加 `[T; N]: TryFrom<Vec<T>>` (insta-stable)](https://github.com/rust-lang/rust/pull/76310)
- \[处置: 合并] [让一些 ordering 方法变为 const](https://github.com/rust-lang/rust/pull/76198)
- \[处置: 合并] [稳定化： 一些 result 方法作为 const](https://github.com/rust-lang/rust/pull/76136)
- \[处置: 合并] [稳定化： 一些 option 方法作为 const](https://github.com/rust-lang/rust/pull/76135)
- \[处置: 合并] [在 `const fn`，默认使用 implicit (不明确) 规则，用于 promotability](https://github.com/rust-lang/rust/pull/75502)
- \[处置: 合并] [impl `index` and `indexmut` for arrays](https://github.com/rust-lang/rust/pull/74989)
- \[处置: 合并] [跟踪问题： `#[doc(alias = "...")]`](https://github.com/rust-lang/rust/issues/50146)

## New RFCs

_No new RFCs were proposed this week._

# 本周最佳语录

> 真的，"边缘情况" 出现的次数，是远出乎所有人的预料的。特别是，会有超多的人，在各式各样的操作系统上，用着超多的文件，如果想要程序健壮稳定，要检查超多的事情—— 正是 Rust 所做的。

- [ZiCog on rust-users](https://users.rust-lang.org/t/disappointed-with-path/48148/5)

Thanks to [Edoardo Morandi](https://users.rust-lang.org/t/twir-quote-of-the-week/328/938) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Weekis edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ippv0q/this_week_in_rust_355/)small>
