---
title: "Rust周报 398(译)"
date: 2021-07-10T22:32:27+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-398"
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
- 日期：2021-07-07
- [原文：398 期](https://this-week-in-rust.org/blog/2021/07/07/this-week-in-rust-398/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

## Updates from Rust Community

### Official

- \[Inside] [what the error handling project group is working towards](https://blog.rust-lang.org/inside-rust/2021/07/01/What-the-error-handling-project-group-is-working-towards.html)

### Project/Tooling Updates

- [Linux Rust Support Patches](https://lore.kernel.org/lkml/20210704202756.29107-1-ojeda@kernel.org/)
- [Intellij Rust Changelog #150](https://intellij-rust.github.io/2021/07/05/changelog-150.html)
- [Rust Analyzer Changelog #84](https://rust-analyzer.github.io/thisweek/2021/07/05/changelog-84.html)
- [GCC Rust Monthly Report #7 June 2021](https://thephilbert.io/2021/07/05/gcc-rust-monthly-report-7-june-2021/)
- [The future of Buck](https://developers.facebook.com/blog/post/2021/07/01/future-of-buck)
- [ChainSafe's Rust implementation of Mina spec Community Spotlight (video)](https://youtu.be/NaxZR-LDc_g)
- [MoonZoon Dev News (5): Chat example, MoonZoon Cloud](https://dev.to/martinkavik/moonzoon-dev-news-5-chat-example-moonzoon-cloud-5de4)
- [Fluvio: The Programmable Data Platform](https://www.infinyon.com/blog/2021/06/introducing-fluvio/)
- [butido - a Linux Package Building Tool in Rust](https://beyermatthias.de/butido-a-linux-package-building-tool-in-rust)
- [Knurling-rs changelog #28](https://ferrous-systems.com/blog/knurling-changelog-28/)
- [`fcp` 0.2.0 released - A significantly faster alternative to `cp`](https://github.com/Svetlitski/fcp)
- [Announcing Sycamore v0.5.0 - SSR + Routing](https://sycamore-rs.netlify.app/news/announcing-v0.5.0)
- [This Week In TensorBase 10](https://tensorbase.io/thisweek/2021-07-07-tw_10/)

### Observations/Thoughts

- [用 Rust 浏览一遍 "The Java Tutorials" - 'What Is an Interface?' and specialization](https://rust-java-tutorials.netlify.app/blog/6-interfaces/)
- [Rust and Tinyverse](https://tinyverse.substack.com/p/rust-and-tinyverse)
- [用 Rust + WebAssembly 加速 Webcola Graph Viz Library](https://cprimozic.net/blog/speeding-up-webcola-with-webassembly/)
- [Rust closures: How a closure can implement more than one trait](https://diaries.vercel.app/posts/closure-traits-rust/)

### Rust Walkthroughs

- [Rust 前端](https://blog.frankel.ch/start-rust/5/)
- [Deploy a Rust Web App With Rocket](https://www.koyeb.com/tutorials/deploy-a-rust-web-app-with-rocket)
- [30行 Rust，一个 TCP 代理](https://zmedley.com/tcp-proxy.html)
- [Manage WebAssembly Apps in WasmEdge Using Docker Tools](https://www.secondstate.io/articles/manage-webassembly-apps-in-wasmedge-using-docker-tools/)
- [Rust 概念大揭秘: Deref vs AsRef vs Borrow vs Cow](https://dev.to/zhanghandong/rust-concept-clarification-deref-vs-asref-vs-borrow-vs-cow-13g6)
- [Thread safety and Learning in Rust](https://dev.to/onesignal/thread-safety-and-learning-in-rust-1p83)
- [REST API Wrapper with Rust](https://dev.to/rogertorres/rest-api-wrapper-with-rust-mk4)
- \[video] [Building a Web Application with Rust - Part VII - Auth Middleware](https://www.youtube.com/watch?v=NEyUq5AVF2U)
- \[video] [Building a Web Application with Rust - Part VIII - Containerization](https://www.youtube.com/watch?v=iEZAnmVX7yk)
- \[video] [Rust & Bevy Tutorial - Building a Game From Scratch (Part 1)](https://www.youtube.com/watch?v=Yb3vInxzKGE)
- \[video] [Creating a Chat Server with async Rust and Tokio](https://www.youtube.com/watch?v=4DqP57BHaXI)
- \[video] [1Password Developer Fireside Chat: Dive into Async & Futures in Rust](https://www.youtube.com/watch?v=HrxwOUVzyDU)

### Miscellaneous

## Crate of the Week

本周的箱子是[css-inline](https://github.com/Stranger6667/css-inline)，一个将 CSS 内联到`style`标签的箱子。

谢谢[Dmitry Dygalo](https://users.rust-lang.org/t/crate-of-the-week/2704/931)的建议。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

**Synth**

- [Feature: Scheduler / Topological sorting namespaces](https://github.com/getsynth/synth/issues/29)
- [Use parameterized Statements for Postgres export](https://github.com/getsynth/synth/issues/30)
- [Feature: Doc template generator](https://github.com/getsynth/synth/issues/31)
- [XML export / import](https://github.com/getsynth/synth/issues/32)
- [Feature: CSV import/export](https://github.com/getsynth/synth/issues/33)

**Sycamore**

- [Sycamore has some good first issues](https://github.com/sycamore-rs/sycamore/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

297 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-06-28..2021-07-05

- [make `ForceWarn` a lint level](https://github.com/rust-lang/rust/pull/86009)
- [change vtable memory representation to use `tcx` allocated allocations](https://github.com/rust-lang/rust/pull/86475)
- [support allocation failures when interpreting MIR](https://github.com/rust-lang/rust/pull/86255)
- [avoid byte to char position conversions in `is_multiline`](https://github.com/rust-lang/rust/pull/86778)
- [fix pretty print for `loop`](https://github.com/rust-lang/rust/pull/86358)
- [pretty-print macro matchers instead of using source code](https://github.com/rust-lang/rust/pull/86282)
- [fix ICE when main is declared in an extern block](https://github.com/rust-lang/rust/pull/86190)
- [ignore inference variables in certain queries](https://github.com/rust-lang/rust/pull/86866)
- [check the number of generic lifetime and const parameters of intrinsics](https://github.com/rust-lang/rust/pull/86148)
- [check node kind to avoid ICE in `check_expr_return()`](https://github.com/rust-lang/rust/pull/86728)
- [deny using default function in impl const Trait](https://github.com/rust-lang/rust/pull/86571)
- [fix garbled suggestion for missing lifetime specifier](https://github.com/rust-lang/rust/pull/86678)
- [fix misleading "impl Trait" error](https://github.com/rust-lang/rust/pull/86666)
- [alloc: `no_global_oom_handling`: disable `new()`s, `pin()`s, etc.](https://github.com/rust-lang/rust/pull/86810)
- [add linked list cursor end methods](https://github.com/rust-lang/rust/pull/86714)
- [stabilize `str::from_utf8_unchecked` as const](https://github.com/rust-lang/rust/pull/86213)
- [stabilize `string_drain_as_str`](https://github.com/rust-lang/rust/pull/86858)
- [stabilize `Bound::cloned()`](https://github.com/rust-lang/rust/pull/86797)
- [stabilize `Seek::rewind()`](https://github.com/rust-lang/rust/pull/86794)
- [when using `process::Command` on Windows, environment variable names must be case-preserving but case-insensitive](https://github.com/rust-lang/rust/pull/85270)
- [add `track_path::path` fn for usage in `proc_macro`s](https://github.com/rust-lang/rust/pull/84029)
- [libm: optimize `round` and `roundf`](https://github.com/rust-lang/libm/pull/253)
- [cargo: adjust error message with `offline` and `frozen`](https://github.com/rust-lang/cargo/pull/9644)
- [clippy: stabilize `cargo clippy --fix`](https://github.com/rust-lang/rust-clippy/pull/7405)
- [clippy: downgrade `nonstandard_macro_braces` to nursery](https://github.com/rust-lang/rust-clippy/pull/7424)
- [clippy: don't suggest `doc(hidden)` or unstable variants in wildcard lint](https://github.com/rust-lang/rust-clippy/pull/7407)
- [clippy: fix emitting in nested (`proc_`)`macro`s for `nonstandard_macro_braces` lint](https://github.com/rust-lang/rust-clippy/pull/7431)
- [clippy: fix `doc_markdown` false positive](https://github.com/rust-lang/rust-clippy/pull/7426)
- [clippy: new lint: `rc_mutex`](https://github.com/rust-lang/rust-clippy/pull/7316)
- [clippy: new lint: `strlen_on_c_strings`](https://github.com/rust-lang/rust-clippy/pull/7243)
- [clippy: new lint: `disallowed_script_idents`](https://github.com/rust-lang/rust-clippy/pull/7400)

### Rust Compiler Performance Triage

一个相当复杂的一周，改进和退步大多相互抵消。本周的亮点是我们现在开始采用新的性能分类流程，该流程将对引起性能退步的 PR 标记为`perf-regression`标签。作者 and/or 审阅者应该通过简短总结，为什么尽管退步仍然值得更改，或者通过创建一个问题来跟进退步，从而证明他们的性能退步是合理的。

从长远来看，我们希望这个过程能够带来更好的编译器性能。

分流完成 **@rylev** .修订范围：[5a78340..9a27044](https://perf.rust-lang.org/?start=5a7834050f3a0ebcd117b4ddf0bc1e8459594309&end=9a27044f42ace9eb652781b53f598e25d4e7e918&absolute=false&stat=instructions%3Au)

2 个退步，3 个改进，2 个混合。1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-07-06.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [RFC: let-else statements](https://github.com/rust-lang/rfcs/pull/3137)
- \[disposition: merge] [RFC: I/O Safety](https://github.com/rust-lang/rfcs/pull/3128)
- \[disposition: merge] [`#[derive(Default)]` on enums with a `#[default]` attribute](https://github.com/rust-lang/rfcs/pull/3107)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize const_fn_transmute, const_fn_union](https://github.com/rust-lang/rust/pull/85769)
- \[disposition: merge] [Stabilize bindings_after_at](https://github.com/rust-lang/rust/pull/85305)
- \[disposition: close] [Add expr202x macro pattern](https://github.com/rust-lang/rust/pull/84364)
- \[disposition: merge] [Stabilize `impl From<[(K, V); N]>` for HashMap (and friends)](https://github.com/rust-lang/rust/pull/84111)
- \[disposition: merge] [Stabilize "RangeFrom" patterns in 1.55](https://github.com/rust-lang/rust/pull/83918)
- \[disposition: merge] [Remove P: Unpin bound on impl Future for Pin](https://github.com/rust-lang/rust/pull/81363)
- \[disposition: merge] [Tracking Issue for IntoInnerError::into_parts etc. (io_into_inner_error_parts)](https://github.com/rust-lang/rust/issues/79704)
- \[disposition: merge] [Tracking Issue for array_map](https://github.com/rust-lang/rust/issues/75243)
- \[disposition: merge] [Tracking issue for #![feature(maybe_uninit_extra)] ](https://github.com/rust-lang/rust/issues/63567)

### New RFCs

_本周没有提出新的 RFC。_

# Quote of the Week

> 我喜欢 Rust 的一件事是，它过滤掉了懒惰/马虎的思想者。即使我不同意另一种，但对问题考虑得足够深入，借此通过借用检查器检查的想法，抱有一定程度的尊重。

– [Zeroexcuses on rust-users](https://users.rust-lang.org/t/what-is-you-elevator-pitch-for-rust/61713/7?u=llogiq)

Thanks to [Jonah](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1070) for the self-suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/og0zde/this_week_in_rust_398/)</small>
