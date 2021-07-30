---
title: "Rust周报 401(译)"
date: 2021-07-30T23:31:23+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-401"
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
- 日期：2021-07-28
- [原文：401 期](https://this-week-in-rust.org/blog/2021/07/28/this-week-in-rust-401/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## This Week in Rust 对你意味着什么 ?

This Week in Rust will be the focus of [nellshamrell](https://github.com/nellshamrell)'s RustConf keynote in September. She would love if you would help inform the talk by sharing what This Week in Rust means to you [on this Reddit post](https://www.reddit.com/r/rust/comments/oqifdk/what_does_this_week_in_rust_mean_to_you/) or [in the Discourse forums](https://users.rust-lang.org/t/what-does-this-week-in-rust-mean-to-you/62698). Thank you!

## Updates from Rust Community

### Official

- \[Inside] [1.54.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/07/26/1.54.0-prerelease.html)

### Project/Tooling Updates

- [rust-analyzer Changelog #87](https://rust-analyzer.github.io/thisweek/2021/07/26/changelog-87.html)
- [CGlue Today And The Road Ahead](https://blaz.is/blog/post/cglue-012-and-the-road-ahead/)
- [黑帽 Rust: July Update](https://kerkour.com/blog/black-hat-rust-july-update/)
- [Updates from the Tinyverse - July 2021](https://tinyverse.substack.com/p/updates-from-the-tinyverse-july-2021)
- [Gloo v0.3.0 release](https://gloo-rs.web.app/blog/release-0.3.0)
- [This Week In TensorBase 13](https://tensorbase.io/thisweek/2021-07-28-tw_13/)

### Observations/Thoughts

- [一分钟内，百万插入 in SQLite](https://avi.im/blag/2021/fast-sqlite-inserts/)
- [Async and asleep: designing our future embedded applications](https://tweedegolf.nl/blog/58/async-and-asleep-designing-our-future-embedded-applications)
- [我的 Rust 开发流程 (2年 全职经验)](https://kerkour.com/blog/rust-development-workflow/)
- [Dealing with Out-of-memory Conditions in Rust](https://www.crowdstrike.com/blog/dealing-with-out-of-memory-conditions-in-rust/)
- [Rust for Linux redux](https://lwn.net/Articles/862018/)
- [用 Rust 对一个 interpreter 进行拆解的经验](https://ceronman.com/2021/07/22/my-experience-crafting-an-interpreter-with-rust/)
- [Rust: First Thoughts](https://dev.to/mapoulos/rust-first-thoughts-7l0)
- [Mutable statics have scary superpowers! Do not use them](https://blog.kodewerx.org/2021/07/mutable-statics-have-scary-superpowers.html)
- [9 大优势 in Rust](https://tim.mcnamara.nz/post/657832047640985600/nine-advantages-of-programming-in-rust)
- \[audio] [arewepodcastyet - 07 georg semmler on diesel!](https://soundcloud.com/arewepodcastyet/awpy-07-georg-semmler-on-diesel)

### Rust Walkthroughs

- [Awesome Unstable Rust Features](https://lazy.codes/posts/awesome-unstable-rust-features/)
- [Svelte, Redis, and Rust，造一个跨平台桌面应用](https://css-tricks.com/how-i-built-a-cross-platform-desktop-application-with-svelte-redis-and-rust/)
- [深入了解 Rust futures](https://fasterthanli.me/articles/understanding-rust-futures-by-going-way-too-deep)
- [Understanding Rust's 'serde' using macro expansion](https://owengage.com/writing/#understanding-serde-macro-expansion)
- [Rust - Writing Parsers With nom Parser Combinator Framework](https://iximiuz.com/en/posts/rust-writing-parsers-with-nom/)
- [✨🥞 Rust Visualized: The Stack, the Heap, and Pointers](https://dev.to/ender_minyard/rust-visualized-the-stack-the-heap-and-pointers-a5c)
- [First steps with Rust declarative macros!](https://dev.to/rogertorres/first-steps-with-rust-declarative-macros-1f8m)
- [diceroller, a sample Rust project](https://blog.frankel.ch/start-rust/8/)
- [Ditching `try..catch` and `null` checks with Rust](https://blog.logrocket.com/ditching-try-catch-and-null-checks-in-rust/)
- [Implementing Merge Sort in Rust](https://dev.to/felixfaisal/implementing-merge-sort-in-rust-4ko8)
- [Emulating abstract base classes in Rust](https://dev.to/mdoerner/emulating-abstract-base-classes-in-rust-3ai6)
- [Rust #6: Exploring crates](https://dev.to/cthutu/rust-6-exploring-crates-3p6i)
- [Rust and WebAssembly Serverless Functions in Vercel](https://thenewstack.io/rust-and-webassembly-serverless-functions-in-vercel/)
- [Raw Pointers in Unsafe Rust are quite powerful](https://blog.knoldus.com/raw-pointers-in-unsafe-rust-are-quite-powerful/)
- [28 Days of Rust -- Part 1: Ownership and the Borrow Checker](https://medium.com/comsystoreply/28-days-of-rust-part-1-ownership-and-the-borrow-checker-977a17e5b733)
- [The Rust dbg! macro](https://edgarluque.com/blog/rust-dbg-macro)
- \[video] [building a web application with rust - part x - vanillajs frontend](https://youtu.be/mgGPD6IVUbI)
- \[video] [rust bevy tutorial - enemy formation & attack (part 3/3)](https://youtu.be/4nEUX2hf2ZI)
- \[video] [how to create an aws lambda in rust](https://www.youtube.com/watch?v=PmtwtK6jyLc)

### Research

- [Performance vs Programming Effort between Rust and C on Multicore Architectures: Case Study in N-Body](https://arxiv.org/abs/2107.11912)
- [Revisiting Prechelt's paper and follow-ups comparing Java, Lisp, C/C++ and scripting languages](https://renato.athaydes.com/posts/revisiting-prechelt-paper-comparing-languages.html)
- [Programming Rules to Develop Secure Applications with Rust](https://www.ssi.gouv.fr/en/guide/programming-rules-to-develop-secure-applications-with-rust/)

### Miscellaneous

- [This finally happened: rust 更合理了](https://www.reddit.com/r/rust/comments/or9r1h/this_finally_happened_rust_made_more_sense/)
- [Edward Snowden endorses Rust for more secure computing](https://www.reddit.com/r/rust/comments/os94ur/edward_snowden_endorses_rust_for_more_secure/)
- [I bet I can do that in rust!!. Generic types are more powerful than most of us thought](https://www.reddit.com/r/rust/comments/opkcuh/i_bet_i_can_do_that_in_rust_generic_types_are/)

## Crate of the Week

本周的箱子是[loadstone](https://crates.io/crates/loadstone)，用于嵌入式系统的裸机 bootloader。

谢谢[Andres O. Vela](https://users.rust-lang.org/t/crate-of-the-week/2704/940)建议。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

- [What does This Week in Rust mean to you?](https://www.reddit.com/r/rust/comments/oqifdk/what_does_this_week_in_rust_mean_to_you/)
- [rust-embedded/cross - Call for help: more maintainers wanted](https://github.com/rust-embedded/cross/issues/574)
- [ChainSafe/forest has several help wanted issues](https://users.rust-lang.org/t/what-does-this-week-in-rust-mean-to-you/62698)
- [getsynth/synth - Support postgres json and jsonb types](https://github.com/getsynth/synth/issues/67)
- [getsynth/synth - Feature: Doc template generator](https://github.com/getsynth/synth/issues/31)
- [ockam-network/ockam - Rust - UDP Transport](https://github.com/ockam-network/ockam/issues/1623)
- [ockam-networking/ockam - File Transfer over end-to-end encrypted secure channels](https://github.com/ockam-network/ockam/issues/1624)

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

287 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-07-19..2021-07-26

- [recognize bounds on impls as const bounds](https://github.com/rust-lang/rust/pull/87273)
- [warn on inert attributes used on bang macro invocation](https://github.com/rust-lang/rust/pull/87296)
- [better diagnostics with mismatched types due to implicit static lifetime](https://github.com/rust-lang/rust/pull/87244)
- [improve `SortedMap::get_by_key_enumerated` more](https://github.com/rust-lang/rust/pull/86429)
- [`VecMap::get_value_matching` should return just one element](https://github.com/rust-lang/rust/pull/86410)
- [don't create references to uninitialized data in `List::from_arena`](https://github.com/rust-lang/rust/pull/87268)
- [miri: better errors for negative out-of-bounds offsets](https://github.com/rust-lang/miri/pull/1853)
- [miri: better ptr-out-of-bounds errors](https://github.com/rust-lang/rust/pull/87224)
- [MIR opt: separate constant predecessors of a switch](https://github.com/rust-lang/rust/pull/85646)
- [stabilize `into_parts()` and `into_error()`](https://github.com/rust-lang/rust/pull/87175)
- [stabilize `impl From<[(K, V); N]> for HashMap` (and friends)](https://github.com/rust-lang/rust/pull/84111)
- [remove `Option` from `BufWriter`](https://github.com/rust-lang/rust/pull/87171)
- [implement `TrustedLen` for `Flatten`/`FlatMap` if the `U: IntoIterator == [T; N]`](https://github.com/rust-lang/rust/pull/87168)
- [add `Stdin::lines`, `Stdin::split` forwarder methods](https://github.com/rust-lang/rust/pull/86847)
- [add support for custom allocator in `VecDeque`](https://github.com/rust-lang/rust/pull/86595)
- [hashbrown: make rehashing and resizing less generic](https://github.com/rust-lang/hashbrown/pull/282)
- [hashbrown: inline small functions](https://github.com/rust-lang/hashbrown/pull/283)
- [clippy: add check if ty `has_escaping_bound_vars` in `zero_sized_map_values` lint](https://github.com/rust-lang/rust-clippy/pull/7470)
- [clippy: improve conflicting rlibs error again](https://github.com/rust-lang/rust-clippy/pull/7495)

### Rust Compiler Performance Triage

非常安静的一周，只有改进。有一种可能的退步，但由于几乎不影响一个有点嘈杂的压力测试基准，它被排除在考虑之外。未分类的拉取请求继续堆积，但仍然没有很好的处理流程。

分流完成 **@rylev**。修订范围：[5c0ca08..998cfe5](https://perf.rust-lang.org/?start=5c0ca08c662399c1c864310d1a20867d3ab68027&end=998cfe5aad7c21eb19a4bca50f05a13354706970&absolute=false&stat=instructions%3Au)

0 退步，3 改进，0 混合；其中 0 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-07-27.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [`#[derive(Default)]` on enums with a `#[default]` attribute](https://github.com/rust-lang/rfcs/pull/3107)
- [RFC: Introduce concat_bytes!() to join \[u8\] and byte str analogous to concat! for str](https://github.com/rust-lang/rfcs/pull/2509)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Stabilize Cargo's weak-dep-features and namespaced-features.](https://github.com/rust-lang/rfcs/pull/3143)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [impl Default, Copy, Clone for std::io::Sink and Empty](https://github.com/rust-lang/rust/pull/86744)
- \[disposition: merge] [Allow reifying intrinsics to fn pointers.](https://github.com/rust-lang/rust/pull/86699)
- \[disposition: merge] [Associated functions that contain extern indicator or have #[rustc_std_internal_symbol] are reachable](https://github.com/rust-lang/rust/pull/86492)
- \[disposition: merge] [impl Pattern for char array](https://github.com/rust-lang/rust/pull/86336)
- \[disposition: merge] [Commit to not supporting IPv4-in-IPv6 addresses](https://github.com/rust-lang/rust/pull/86335)
- \[disposition: merge] [Implement `Extend<(A, B)>` for `(Extend<A>, Extend<B>)`](https://github.com/rust-lang/rust/pull/85835)

### New RFCs

_本周没有提出新的 RFC。_

# Quote of the Week

> 我们能够验证 Rust 类型系统的安全性，从而展示 Rust 如何自动可靠地防止编程错误

– [Ralf Jung on Eureka Alert Science News](https://www.eurekalert.org/pub_releases/2021-07/su-cs071521.php)

Thanks to [Henrik Tougaard](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1084) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/otnvu8/this_week_in_rust_401/)</small>
