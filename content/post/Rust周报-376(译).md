---
title: "Rust周报 376(译)"
date: 2021-02-04T16:01:35+08:00
tags: ["week"]
description: "螃蟹-Rust周报-376"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-02-03
- [原文：376 期](https://this-week-in-rust.org/blog/2021/02/03/this-week-in-rust-376/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有官方博客文章。

### Newsletters

- [RiB Newsletter #20 - Old fashioned chill](https://www.reddit.com/r/rust/comments/lc3tir/rib_newsletter_20_old_fashioned_chill/)

### Project/Tooling Updates

- [rust-analyzer Changelog #62](https://rust-analyzer.github.io/thisweek/2021/02/01/changelog-62.html)
- [IntelliJ Rust Changelog #140](https://intellij-rust.github.io/2021/02/01/changelog-140.html)
- [Llama Rust SDK preview 0.1.3](https://ericsink.com/entries/llama_rust_013.html)
- [Gfx-rs Release of v0.7](https://gfx-rs.github.io/2021/02/02/release-0.7.html)
- [Open-sourcing Datanymizer: in-flight template-driven data anonymization（测试数据的匿名工具）](https://evrone.com/datanymizer)
- [Announcing Step/Dir - Universal Stepper Motor Interface（步进电机接口）](https://flott-motion.org/news/announcing-step-dir/)
- [Announcing RampMaker - Stepper Motor Acceleration Ramp Generator（配置工具）](https://flott-motion.org/news/announcing-ramp-maker/)
- [Krustlet v0.6.0](https://github.com/deislabs/krustlet/releases/tag/v0.6.0)

### Observations/Thoughts

- [Is Rust a Functional Programming Language?](https://robert.kra.hn/posts/2021-02-03_is-rust-fp/)
- [Rust Collections Case Study: BTreeMap](https://cglab.ca/~abeinges/blah/rust-btree-case/)
- [Saving some allocations](https://vorner.github.io/2021/01/31/saving-some-allocations.html)
- [Bringing Stack Clash Protection to Clang/X86 - the Open Source Way](https://blog.llvm.org/posts/2021-01-05-stack-clash-protection/)
- [Announcing Krator: Build Kubernetes Operators with state machines.](https://deislabs.io/posts/introducing-krator/)

### Rust Walkthroughs

- [Returning Rust Iterators](https://depth-first.com/articles/2020/06/22/returning-rust-iterators/)
- [How to Read Rust Functions, Part 1](https://www.possiblerust.com/guide/how-to-read-rust-functions-part-1)
- [Parsing PDF Documents in Rust](https://adventures.michaelfbryan.com/posts/parsing-pdfs-in-rust/?utm_source=reddit&utm_medium=social&utm_campaign=parsing-pdf-documents)
- [Building and deploying Rust utilities](https://robert.kra.hn/posts/2021-02-01_cross-compile-rust/)
- [Learning to Fly: Let's create a simulation in Rust! (pt 2)](https://pwy.io/en/posts/learning-to-fly-pt2/)
- [Rust made my open source project 1000x faster](https://www.reddit.com/r/rust/comments/lazq0i/rust_made_my_open_source_project_1000x_faster/)
- [介绍 Drogue Device](https://blog.drogue.io/introducing-drogue-device/)
- [3 Things to Try When You Can't Make A Trait Object](https://www.possiblerust.com/pattern/3-things-to-try-when-you-can-t-make-a-trait-object)
- [Making concurrency fearless with Rust (for C++ developers)](https://radekvit.medium.com/making-concurrency-fearless-with-rust-for-c-developers-d5d8da50a452)
- [Exploring WebSocket with Rust and Tide](https://javierviola.com/post/exploring-websocket-with-rust-and-tide/)
- [Macros in Rust: A tutorial with examples](https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/)
- \[PL] [crabbybird #5 obsługa kolizji](https://postacnormalna.pl/crabbybird-5-obsluga-kolizji/)

### Miscellaneous

- [RustBelt: Securing the Foundations of the Rust Programming Language](https://people.mpi-sws.org/~dreyer/papers/rustbelt/paper.pdf)
- [Polymorphisation: Improving Rust compilation times through intelligent monomorphisation](https://davidtw.co/media/masters_dissertation.pdf)
- [A Memory Safe TLS Module for the Apache HTTP Server](https://www.abetterinternet.org/post/memory-safe-tls-apache/)
- [Chats with James: 006 - Bryan Cantrill](https://jamesmunns.com/podcast/006-bryan/)
- [Long range networking with LoRa: an overview featuring a Rust modem driver](https://tweedegolf.nl/blog/51/long-range-networking-with-lora-an-overview)

# Crate of the Week

这周的箱子是[fancy-regex](https://github.com/fancy-regex/fancy-regex) regex 实现，使用 regex 加快速度，还能回溯有趣的功能。

谢谢[Benjamin Minixhofer](https://users.rust-lang.org/t/crate-of-the-week/2704/877)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [dotenv-linter has several good first issues](https://github.com/dotenv-linter/dotenv-linter/issues)
- [Rust Berlin is searching for co-organizers](https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 323 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-01-25..2021-02-01

- [rustc: 将 `-Zrun-dsymutil` 稳定为 `-Csplit-debuginfo`](https://github.com/rust-lang/rust/pull/79570)
- [仅在非预料的泛型参数时，指出](https://github.com/rust-lang/rust/pull/79591)
- [improve diagnostics for Precise Capture](https://github.com/rust-lang/rust/pull/81062)
- [给出现有的 `_` field pattern when suggesting `..`](https://github.com/rust-lang/rust/pull/81422)
- [tweak suggestion for missing field in patterns](https://github.com/rust-lang/rust/pull/81416)
- [visit only statements in always live locals](https://github.com/rust-lang/rust/pull/81440)
- [avoid memory allocation when removing dead blocks](https://github.com/rust-lang/rust/pull/81470)
- [让 触碰递归限制数 in projection，不致命](https://github.com/rust-lang/rust/pull/81055)
- [`clashing_extern_declarations`: 使用 symbol interning，避免 string alloc](https://github.com/rust-lang/rust/pull/81453)
- [miri: add random failures to `compare_exchange_weak`](https://github.com/rust-lang/miri/pull/1686)
- [尝试让`Vec::shrink_to` 大于 capacity 时，应该为无效操作](https://github.com/rust-lang/rust/pull/81335)
- [implement Rust 2021 panic](https://github.com/rust-lang/rust/pull/80851)
- [implement missing `AsMut<str>` for `str`](https://github.com/rust-lang/rust/pull/80279)
- [implement `io::Seek` for `io::Empty`](https://github.com/rust-lang/rust/pull/78044)
- [let `io::copy` reuse `BufWriter` buffers](https://github.com/rust-lang/rust/pull/78641)
- [add 'Box::downcast()`for`dyn Any + Send + Sync\`](https://github.com/rust-lang/rust/pull/80945)
- [add `unwrap_unchecked()` methods for `Option` and `Result`](https://github.com/rust-lang/rust/pull/80876)
- [add `core::stream::Stream`](https://github.com/rust-lang/rust/pull/79023)
- [稳定化： `core::slice::fill_with`](https://github.com/rust-lang/rust/pull/81048)
- [稳定化： `unsigned_abs`](https://github.com/rust-lang/rust/pull/80959)
- [稳定化： raw ref macros](https://github.com/rust-lang/rust/pull/80886)
- [稳定化： by-value `[T; N]` iterator `core::array::IntoIter`](https://github.com/rust-lang/rust/pull/80470)
- [稳定化： `cargo test -- --include-ignored`](https://github.com/rust-lang/rust/pull/80053)
- [稳定化： `Arc::`{`increment`, `decrement`}`_strong_count`](https://github.com/rust-lang/rust/pull/79285)
- [稳定化： `Seek::stream_position` (feature `seek_convenience`)](https://github.com/rust-lang/rust/pull/70904)
- [优化：128-bit integers 的 小数格式](https://github.com/rust-lang/rust/pull/81484)
- [稳定化： int_bits_const](https://github.com/rust-lang/rust/pull/81590)
- [hashbrown: reduce the amount of llvm IR instantiated](https://github.com/rust-lang/hashbrown/pull/205)
- [libtest: 在 they report 完成之后，等待 test threads 退出](https://github.com/rust-lang/rust/pull/81367)
- [cargo: impl warn for locked install without Cargo.lock](https://github.com/rust-lang/cargo/pull/9108)
- [rustdoc: 改善在小屏幕上， docblock 的可读性](https://github.com/rust-lang/rust/pull/81563)

## Rust Compiler Performance Triage

又是由汇总占主导的一周，汇总大多数变化相对较小，原因尚不清楚。总体而言，本周表现没有重大变化。

分类由 **@simulacrum**。修订范围：[1483e67addd37d9bd20ba3b4613b678ee9ad4d68..f6cb45ad01a4518f615926f39801996622f46179](https://perf.rust-lang.org/?start=1483e67addd37d9bd20ba3b4613b678ee9ad4d68&end=f6cb45ad01a4518f615926f39801996622f46179&absolute=false&stat=instructions%3Au)

2 个退步，1 个改进，1 个混合

其中 3 个汇总

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-02-02.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Pointer metadata & VTable](https://github.com/rust-lang/rfcs/pull/2580)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge（合并）] [Allow leading | anywhere we allow or-patterns](https://github.com/rust-lang/rust/issues/81415)
- \[disposition: merge] [libtest: allow multiple filters](https://github.com/rust-lang/rust/pull/81356)
- \[disposition: merge] [稳定化：remaining integer methods as `const fn`](https://github.com/rust-lang/rust/pull/80962)
- \[disposition: merge] [Add an impl of Error on `Arc<impl Error>`.](https://github.com/rust-lang/rust/pull/80553)
- \[disposition: merge] [expand/resolve: 将 `#[derive]` 转为一个 regular macro attribute](https://github.com/rust-lang/rust/pull/79078)
- \[disposition: merge] [跟踪问题： `partition_point`](https://github.com/rust-lang/rust/issues/73831)

## New RFCs

- [综合使用：feature-name header field](https://github.com/rust-lang/rfcs/pull/3071)
- [使用更常见的'tests' module name ，而不是 'test' in examples](https://github.com/rust-lang/rfcs/pull/3070)

# Quote of the Week

这次我们有两个很好，我无法决定，所以两个都要：

> 我一直在学习……不特指 Rust，而是如何编写声音软件，在我看来，这是 rust 社区通过您开发的语言和工具，赋予我的最大资产。
>
> 在这个放大镜下，我很容易证明 Rust 提供的逐步学习曲线：我想学习如何编写声音软件，编写声音软件非常困难，而 Rust 编译器是一个非常好的老师。
>
> \[...]
>
> 在识别不正确代码的能力上，超越了 Rust 的语言，在我看来，无论是否学习过 Rust，大多数成本效益分析中，都没有充分体现这种能力。

– [Jorge Leitao on rust-users](https://users.rust-lang.org/t/thank-you-for-the-teaching-on-how-to-write-sound-software/54714)

和

> 拥有快速语言是不够的（ASM），拥有强类型的语言也不能保证（Haskell），拥有易于使用和可移植性的语言也不能保证（Python / Java）。将所有这些结合在一起，您将获得所有这些方面的精华。
>
> Rust 并不是任何编码原理的最佳选择，它是目前结合所有这些理论的最佳选择。

– [/u/CalligrapherMinute77 on /r/rust](https://www.reddit.com/r/rust/comments/l7vvo9/writing_a_proposal_to_use_rust_at_work/gl9lfk8)

Thanks to [2e71828](https://users.rust-lang.org/t/twir-quote-of-the-week/328/996) and [Rusty Shell](https://users.rust-lang.org/t/twir-quote-of-the-week/328/998) for their respective suggestions.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/lc8vn8/this_week_in_rust_376/)</small>
