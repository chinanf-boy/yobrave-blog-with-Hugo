---
title: "Rust周报 405(译)"
date: 2021-08-29T00:02:11+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-405"
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
- 日期：2021-08-25
- [原文：405 期](https://this-week-in-rust.org/blog/2021/08/25/this-week-in-rust-405/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls).

## Updates from Rust Community

### Project/Tooling Updates

- [rust-analyzer Changelog #91](https://rust-analyzer.github.io/thisweek/2021/08/23/changelog-91.html)
- [Apache Arrow Datafusion 5.0.0 release with major new features and performance improvements](https://arrow.apache.org/blog/2021/08/18/datafusion-5.0.0/)
- [Apache Arrow Ballista 0.5.0 release](https://arrow.apache.org/blog/2021/08/18/ballista-0.5.0/)
- [This week in Fluvio #3: the programmable streaming platform](https://www.fluvio.io/news/this-week-in-fluvio-0003/)
- [SixtyFPS 0.1 Release](https://sixtyfps.io/blog/announcing-sixtyfps-0.1.html)和[SixtyFPS Weekly Report](https://sixtyfps.io/thisweek/2021-08-23.html)
- [nailgun: DNS 性能测试客户端](https://leshow.github.io/post/nailgun/)
- [nom 7.0 release: fast parser combinators, now without macros! And the new nom-bufreader](https://www.reddit.com/r/rust/comments/p9usvq/nom_70_release_fast_parser_combinators_now/)
- [Announcing egui 0.14](https://www.reddit.com/r/rust/comments/papqk1/announcing_egui_014/)
- [miette: 为 apps and libraries，准备的 fancy new diagnostics definition and reporting crate !](https://www.reddit.com/r/rust/comments/p9t3jh/miette_a_fancy_new_diagnostics_definition_and/)
- [Rudra: Rust Memory Safety & Undefined Behavior Detection](https://www.reddit.com/r/rust/comments/p8gcbe/rudra_rust_memory_safety_undefined_behavior/)
- [SnakeOS v0.1.0 released!](https://www.reddit.com/r/rust/comments/p86a24/snakeos_v010_released/)
- [Pueue v1.0.0 - Manage your shell commands. 在 3.5 年之后，迎来稳定版本](https://www.reddit.com/r/rust/comments/p84amc/release_pueue_v100_manage_your_shell_commands/)
- [Announcing Persy 1.0: a simple transactional storage](https://persy.rs/posts/persy-1.0.html)
- [This week in Datafuse #4](https://datafuselabs.github.io/weekly/2021-08-25-datafuse-weekly/)

### Observations/Thoughts

- [Overview of the Rust 加密生态](https://kerkour.com/blog/rust-cryptography-ecosystem)
- [Superpowers of Unsafe Rust](https://blog.knoldus.com/superpowers-of-unsafe-rust/)
- [Using KLEE on Rust-for-Linux (part 1)](https://project-oak.github.io/rust-verification-tools/2021/08/22/rust-on-linux-1.html)
- [Large Rust Workspaces](https://matklad.github.io/2021/08/22/large-rust-workspaces.html)
- [Using Rust with Elixir 代码复用与性能](https://blog.doctave.com/2021/08/19/using-rust-with-elixir-for-code-reuse-and-performance.html)
- [Models of Generics and Metaprogramming: Go, Rust, Swift, D and More](https://thume.ca/2019/07/14/a-tour-of-metaprogramming-models-for-generics/)
- [Shaking Off the Rust 2: Ray Tracing in WebAssembly](https://clayto.com/2021/07/shaking-off-the-rust-2-ray-tracing-in-webassembly/)
- [Async Overloading](https://blog.yoshuawuyts.com/async-overloading/)
- [Scoped Arena Allocator](https://devblog.arcana.rs/scoped-arena-allocator)
- [Concurrency in Rust is indeed fearless](https://blog.knoldus.com/concurrency-in-rust-is-indeed-fearless/)

### Rust Walkthroughs

- [Rust vectors](https://saidvandeklundert.net/learn/2021-08-15-rust-vector/)
- [Daily Rust: Iterators](adventures.michaelfbryan.com/posts/daily/iterators/)
- [Getting Started with Systems Programming with Rust (Part 1)](https://www.bexxmodd.com/post/systems-programming-with-rust-1)
- [Getting Started with Systems Programming with Rust (Part 2)](https://www.bexxmodd.com/post/systems-programming-with-rust-2)
- [Optimizing Immutable Strings in Rust](https://dev.to/somedood/optimizing-immutable-strings-in-rust-2ahj)
- [Rust for Data Science: Tutorial 1](https://dev.to/davidedelpapa/rust-for-data-science-tutorial-1-4g5j)
- [Rust and WebAssembly Serverless functions in Vercel](https://dev.to/alabulei1/rust-and-webassembly-serverless-functions-in-vercel-47e4)
- [Pin, Unpin, and why Rust needs them](https://blog.adamchalmers.com/pin-unpin/)
- [Rust: How to Unwrap Multiple Required Options](https://blog.hendrikmaus.dev/rust-unwrap-options-in-a-function-that-returns-a-result-type/)
- [Hexagonal architecture in Rust #1](https://alexis-lozano.com/hexagonal-architecture-in-rust-1/)
- [Hexagonal architecture in Rust #2](https://alexis-lozano.com/hexagonal-architecture-in-rust-2/)
- [Daily Rust: Iterators](https://adventures.michaelfbryan.com/posts/daily/iterators/?utm_source=reddit&utm_medium=social&utm_campaign=daily-rust-basic-iterators)
- [Cross compiling Windows binaries from Linux](https://jake-shadle.github.io/xwin/)
- [Rust Trait Objects Demystified](https://desilva.io/posts/rust-trait-objects-demystified)
- [End-to-End Encryption through Kafka, with Rust](https://github.com/ockam-network/ockam/tree/develop/documentation/use-cases/end-to-end-encryption-through-kafka)
- [ZH] 使用 Rust 进行形式化概念分析，[Part1](https://www.horsal.dev/formal-concept-analysis-with-rust-1-introduction),[Part2](https://www.horsal.dev/formal-concept-analysis-with-rust-2-basic-algorithm),[Part3](https://www.horsal.dev/formal-concept-analysis-with-rust-3-parallization)
- \[video] [building a small finite state machine in rust](https://youtu.be/whN36JVUd6A)
- \[video] [rust community stuttgart - "traits and trait objects - more than just interfaces"](https://www.youtube.com/watch?v=izXf9-CTAfc)

### Miscellaneous

- [详尽列表：all Rust resources regarding automated or semi-automated formalization efforts in any area, constructive mathematics, formal algorithms, and program verification.](https://github.com/newca12/awesome-rust-formalized-reasoning)
- [聚合 streaming data in real-time with WebAssembly](https://www.infinyon.com/blog/2021/08/smartstream-aggregates/)
- [I re-implemented the legendary "Typing the technical interview" article using only Rust types!](https://www.reddit.com/r/rust/comments/pb97fa/i_reimplemented_the_legendary_typing_the/)
- [Chromium adds a Rust toolchain as a potential dependency](https://www.reddit.com/r/rust/comments/paxowq/chromium_adds_a_rust_toolchain_as_a_potential/)
- [New very promising Linux syscall for creating secret memory even the kernel can't read. I'll be working for creating a crate for using it out](https://www.reddit.com/r/rust/comments/p7qzdn/new_very_promising_linux_syscall_for_creating/)
- \[picture] [field init shorthand in rust](https://www.reddit.com/r/rust/comments/pai1o8/media_field_init_shorthand_in_rust/)

## Crate of the Week

本周的箱子是[kube-leader-election](https://github.com/hendrikmaus/kube-leader-election)，一个用于为 Kubernetes 工作负载，实现‘领导者选举’的箱子。

谢谢[hendrikmaus](https://users.rust-lang.org/t/crate-of-the-week/2704/945)自荐。

[Please submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

- [rust-lang/cargo - "error: binary xxx already exists in destination" should print the full destination path](https://github.com/rust-lang/cargo/issues/9797)
- [ockam-network/ockam - Like ngrok, but using Ockam](https://github.com/ockam-network/ockam/issues/1762)
- [ockam-network/ockam - Forwarder in Rust](https://github.com/ockam-network/ockam/issues/1761)
- [ andreev-io/little-raft - New Contributors Wanted](https://github.com/andreev-io/little-raft/issues)

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

293 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-08-16..2021-08-23

- [upgrade to LLVM 13](https://github.com/rust-lang/rust/pull/87570)
- [introduce `hir::ExprKind::Let` - Take 2](https://github.com/rust-lang/rust/pull/80357)
- [enable compiler consumers to obtain `mir::Body` with Polonius facts](https://github.com/rust-lang/rust/pull/86977)
- [force warn improvements](https://github.com/rust-lang/rust/pull/88134)
- [account for tabs when highlighting multiline code suggestions](https://github.com/rust-lang/rust/pull/87976)
- [use more accurate spans when proposing adding lifetime to item](https://github.com/rust-lang/rust/pull/87983)
- [add notes to macro-not-found diagnostics to point out how things with the same name were not a match](https://github.com/rust-lang/rust/pull/88232)
- [improve wording of the `drop_bounds` lint](https://github.com/rust-lang/rust/pull/86747)
- [improve NLL's "higher-ranked subtype error"s](https://github.com/rust-lang/rust/pull/86700)
- [suggest importing the right kind of macro](https://github.com/rust-lang/rust/pull/88229)
- [improve error reporting for closure return type mismatches](https://github.com/rust-lang/rust/pull/87661)
- [canonicalize consts before calling `try_unify_abstract_consts` query](https://github.com/rust-lang/rust/pull/88166)
- [reenable `RemoveZsts`](https://github.com/rust-lang/rust/pull/88176)
- [I/O safety](https://github.com/rust-lang/rust/pull/87329)(RFC)[#3128](https://rust-lang.github.io/rfcs/3128-io-safety.html))
- [stabilize `arbitrary_enum_discriminant`](https://github.com/rust-lang/rust/pull/86860)
- [constified implementations of `Default`](https://github.com/rust-lang/rust/pull/86808)
- [optimize unnecessary check in `VecDeque::retain`](https://github.com/rust-lang/rust/pull/88075)
- [where available use `AtomicU`{`64`, `128`} instead of mutex for `Instant` backsliding protection](https://github.com/rust-lang/rust/pull/83093)
- [add fast path for `Path::cmp` that skips over long shared prefixes](https://github.com/rust-lang/rust/pull/86898)
- [cargo: fix panic with build-std of a proc-macro](https://github.com/rust-lang/cargo/pull/9834)
- [clippy: add new lints `negative_feature_names` and `redundant_feature_names`](https://github.com/rust-lang/rust-clippy/pull/7539)
- [clippy: move `branches_sharing_code` to nursery](https://github.com/rust-lang/rust-clippy/pull/7595)
- [clippy: remove stderr limit](https://github.com/rust-lang/rust-clippy/pull/7593)

### Rust Compiler Performance Triage

本周有一些退步，但主要是改进，主要是由于升级到 LLVM 13。

分流完成 **@simulacrum**.修订范围：[aa8f27b..33fdb79](https://perf.rust-lang.org/?start=aa8f27bf4d980023a8b245ceb25a490a18041eb2&end=33fdb797f59421c7bbecaa4588ed5d7a31a9494a&absolute=false&stat=instructions%3Au)

2 个退步，1 个改进，2 个混合；其中 0 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-08-24.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: let-expression](https://github.com/rust-lang/rfcs/pull/3159)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize std::os::unix::fs::chroot](https://github.com/rust-lang/rust/pull/88177)
- \[disposition: merge] [Stabilize reserved prefixes](https://github.com/rust-lang/rust/issues/88140)
- \[disposition: merge] [stabilize disjoint capture in closures (RFC 2229)](https://github.com/rust-lang/rust/issues/88126)
- \[disposition: merge] [BTree: remove Ord bound from new](https://github.com/rust-lang/rust/pull/88040)
- \[disposition: merge] [Update Windows Argument Parsing](https://github.com/rust-lang/rust/pull/87580)
- \[disposition: merge] [Support #[track_caller] on closures and generators](https://github.com/rust-lang/rust/pull/87064)
- \[disposition: merge] [Stabilize "force warn" option](https://github.com/rust-lang/rust/issues/86516)
- \[disposition: merge] [Extend -Cdebuginfo with new options and named aliases](https://github.com/rust-lang/rust/pull/83947)
- \[disposition: merge] [Allow writing of incomplete UTF-8 sequences to the Windows console via stdout/stderr](https://github.com/rust-lang/rust/pull/83342)
- \[disposition: merge] [Tracking Issue for Iterator::intersperse](https://github.com/rust-lang/rust/issues/79524)
- \[disposition: merge] [Provide an API to extract fields from Command builder](https://github.com/rust-lang/rust/issues/44434)

### New RFCs

- [RFC: cargo-run-deps](https://github.com/rust-lang/rfcs/pull/3168)
- [Proposal: Else clauses for for and while loops](https://github.com/rust-lang/rfcs/pull/3163)

# Quote of the Week

> 代码在处理资源之前，就不要处理资源。这样才是流畅的数据流，同样的：您不关心线程管理，直到您想这样做，您不关心操作日志，直到您这样做，您不关心性能。。。从另一方面来说，代码不需要是异常安全的，直到它要。这种“神奇”语言特性的问题在于，正确性变得不可组合（‘1’ + ’1‘ 不一定等于 ‘2’）：您可以将两段工作代码放在一起，但得到的，可能是一些不起作用的东西。

– [Mickey Donaghy on Hacker News](https://news.ycombinator.com/item?id=26536896)

Thanks to [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1096) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/pcbgvj/this_week_in_rust_405/)</small>