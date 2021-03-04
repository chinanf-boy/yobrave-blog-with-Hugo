---
title: "Rust周报 379(译)"
date: 2021-03-04T21:09:22+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-379"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-02-24
- [原文：379 期](https://this-week-in-rust.org/blog/2021/02/24/this-week-in-rust-379/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有时事通讯或官方博客。

### Project/Tooling Updates

- [MoonZoon - New Rust fullstack framework](https://moonzoon.rs)
- [rust-analyzer Changelog #65](https://rust-analyzer.github.io/thisweek/2021/02/22/changelog-65.html)
- [Knurling-rs changelog #17](https://ferrous-systems.com/blog/knurling-changelog-17/)

### Observations/Thoughts

- [Rust for web development: 2 years later](https://kerkour.com/blog/rust-for-web-development-2-years-later/)
- [Integrating Rust and C++ in Firefox](https://manishearth.github.io/blog/2021/02/22/integrating-rust-and-c-plus-plus-in-firefox/)
- [Building a telnet chat server with Rust and Lunatic](https://dev.to/bkolobara/how-i-built-a-telnet-chat-server-in-2021-with-webassembly-2711)
- [我反对，Packaging Rust Crates](https://fy.blackhats.net.au/blog/html/2021/02/16/against_packaging_rust_crates.html)
- [Why building a front-end framework in Rust is hard](https://lik.ai/blog/why-building-a-front-end-framework-in-rust-is-hard)
- [Oxidizing Kraken](https://blog.kraken.com/post/7964/oxidizing-kraken/?)
- [Maybe We Can Have Nice Things](https://noncombatant.org/2021/02/16/maybe-we-can-have-nice-things/)
- [Three Things I Miss About Rust](https://bennett.dev/)
- [Storages: an alternative to allocators](https://www.reddit.com/r/rust/comments/lp0i5r/storages_an_alternative_to_allocators/)

### Rust Walkthroughs

- [Rust ownership, the hard way](https://chrismorgan.info/blog/rust-ownership-the-hard-way/)
- [Handling Unix Kill Signals in Rust](https://dev.to/talzvon/handling-unix-kill-signals-in-rust-55g6)
- [Replacing FastAPI with Rust: Part 5 - Rocket 0.5](https://dev.to/dbanty/replacing-fastapi-with-rust-part-5-rocket-0-5-3kb3)
- [Running ML models in a game (and in Wasm!)](https://dev.to/mockersf/running-ml-models-in-a-game-and-in-wasm-12i2)
- [What would SQLite look like if written in Rust? - Part 2](https://dev.to/joaoh82/what-would-sqlite-look-like-if-written-in-rust-part-2-4g66)
- [A primer on code generation in Cranelift](https://blog.benj.me/2021/02/17/cranelift-codegen-primer/)
- [Testing a Hardware Abstraction Layer (HAL)](https://ferrous-systems.com/blog/defmt-test-hal/)
- [Cross Compiling Rust GTK Projects for Windows](https://nivethan.dev/devlog/cross-compiling-rust-gtk-projects-for-windows.html)
- [Procedural Macros: A simple derive macro](https://blog.turbo.fish/proc-macro-simple-derive/)
- [Building an OpenStreetMap app in Rust, Part III](https://blogg.bekk.no/building-an-openstreetmap-app-in-rust-part-iii-ab9ad4b83bd8)
- [Generalizing over Generics in Rust (Part 1.5): Mechanisms](https://rustyyato.github.io/type/system,type/families/2021/02/22/Type-Families-1_5.html)
- [Macros in Rust: A tutorial with examples](https://blog.logrocket.com/macros-in-rust-a-tutorial-with-examples/)
- \[ES] [pipelines en rust(ii)](https://yorodm.is-a.dev/blog/rust-pipeline-pattern-ii/)
- \[video] [rust for windows](https://youtu.be/LajquCjHXK4)
- \[video] [crust of rust: subtyping and variance](https://youtu.be/iVYWDIW71jk)
- \[video] [learning rust: web server with actix web](https://youtu.be/PMa2m0Fe-Q4)
- \[video] \[series] [Rust For Beginners - Watch me code the Rustlings Tutorial](https://youtube.com/playlist?list=PLauX9TuJ8sfyaLPZ1udS3zS_V9YXdsbtc)
- \[video] \[series] [Easy Rust - learn to program in Rust with simple English](https://youtube.com/playlist?list=PLfllocyHVgsRwLkTAhG0E-2QxCf-ozBkk)

### Miscellaneous

- [Python cryptography, Rust, and Gentoo](https://lwn.net/Articles/845535/)
- [Mitigating Memory Safety Issues in Open Source Software](https://security.googleblog.com/2021/02/mitigating-memory-safety-issues-in-open.html)
- [matklad @ NEAR](https://matklad.github.io/2021/02/15/NEAR.html)
- [Application-wide panic handling](https://domwillia.ms/panik/)
- [Benchmarking low-level I/O: C, C++, Rust, Golang, Java, Python](https://medium.com/star-gazers/benchmarking-low-level-i-o-c-c-rust-golang-java-python-9a0d505f85f7)
- \[video] [ask the expert: rust at microsoft](https://youtu.be/1uAsA1hm52I)
- \[video] [aws re:invent 2020: next-gen networking infrastructure with rust and tokio](https://youtu.be/MZyleK8elPk)
- \[video] [interview part 2/2 with ashley williams, rust foundation interim executive director](https://youtu.be/eFQVxQsYcJ8)

# Crate of the Week

本周的箱子[lever](https://crates.io/crates/lever)，一个用于编写事务系统的库。

感谢[Mahmud Bulut](https://users.rust-lang.org/t/crate-of-the-week/2704/882)谢谢你的建议！

[提交下周的建议和投票][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，让您挑选并开始！

有些任务可能还有导师，请访问任务页以获取更多信息。

[starlight - Support for "unsafe" cases of `finally`](https://github.com/Starlight-JS/starlight/issues/7)

如果你是一个生锈的项目业主，并正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

329 个请求被删除[上周合并的][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-02-15..2021-02-22

- [suggest to create a new `const` item if the `fn` in the array is a `const fn`](https://github.com/rust-lang/rust/pull/81503)
- [fixing bad suggestion for `_` in `const` type when a function](https://github.com/rust-lang/rust/pull/81914)
- [简化 `eat_digits`](https://github.com/rust-lang/rust/pull/81427)
- [precompute ancestors when checking privacy](https://github.com/rust-lang/rust/pull/81574)
- [optimize counting digits in line numbers during error reporting](https://github.com/rust-lang/rust/pull/82248)
- [only store a `LocalDefId` in some HIR nodes](https://github.com/rust-lang/rust/pull/81611)
- [to digit simplification](https://github.com/rust-lang/rust/pull/82094)
- [reduce size of `InterpErrorInfo` to 8 bytes](https://github.com/rust-lang/rust/pull/82116)
- [pass large interpreter types by reference, not value](https://github.com/rust-lang/rust/pull/82124)
- [improve `assert_eq!` and `assert_ne!`](https://github.com/rust-lang/rust/pull/79100)
- [add `Mutex::unlock`](https://github.com/rust-lang/rust/pull/81873)
- [stabilize `Arguments::as_str`](https://github.com/rust-lang/rust/pull/82120)
- [futures: `FuturesUnordered`: do not poll the same future twice per iteration](https://github.com/rust-lang/futures-rs/pull/2333)
- [remove `unsafe impl Send for CompletedTest` & `TestResult`](https://github.com/rust-lang/rust/pull/82302)
- [test: print test name only once on timeout](https://github.com/rust-lang/rust/pull/82349)
- [cargo: propagate `lto=off` harder](https://github.com/rust-lang/cargo/pull/9182)

## Rust Compiler Performance Triage

总的来说，编译器性能提升的一周，只有一次适度的退步。退步的 change 对[bootstrap speed](https://github.com/rust-lang/rust/pull/70951#issuecomment-766292996)由显著的改善，更易于维护。

分诊人 **@rylev**. 修订范围：[f1c47c..301ad8a](https://perf.rust-lang.org/?start=f1c47c79fe8438ed241630f885797eebef3a6cab&end=301ad8a4fa3ea56fb980443b7997c8f9d72dd717&absolute=false&stat=instructions%3Au)

1 次退步，5 次改进，0 次混合，0 次汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Checking conditional compilation at compile time](https://github.com/rust-lang/rfcs/pull/3013)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PRs 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC - cargo templates](https://github.com/rust-lang/rfcs/pull/2922)
- [rfc: make cargo install extensible](https://github.com/rust-lang/rfcs/pull/2376)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Allow specifying alignment for functions](https://github.com/rust-lang/rust/pull/81234)
- \[disposition: merge] [Make rustdoc lints a tool lint instead of built-in](https://github.com/rust-lang/rust/pull/80527)
- \[disposition: merge] [Stabilize `unsafe_op_in_unsafe_fn` lint](https://github.com/rust-lang/rust/pull/79208)
- \[disposition: merge] [[librustdoc] Only split lang string on `,`, ` `, and `\t`](https://github.com/rust-lang/rust/pull/78429)
- \[disposition: merge] [Lint for unused borrows as part of `UNUSED_MUST_USE` ](https://github.com/rust-lang/rust/pull/76894)
- \[disposition: merge] [Tracking Issue for str_split_once](https://github.com/rust-lang/rust/issues/74773)
- \[disposition: merge] [Tracking Issue for ASCII methods on OsStr](https://github.com/rust-lang/rust/issues/70516)

## New RFCs

- [RFC: An edition-compatible system for "removing" deprecated items from the standard library](https://github.com/rust-lang/rfcs/pull/3088)
- [RFC: Declarative macro metavariable expressions](https://github.com/rust-lang/rfcs/pull/3086/files)
- [RFC: 2021 Edition](https://github.com/rust-lang/rfcs/pull/3085)
- [Add filename information to `std::io::Error` to improve `std::io` error messages ](https://github.com/rust-lang/rfcs/pull/3084)
- [Multi-part examples in rustdoc](https://github.com/rust-lang/rfcs/pull/3081)

# Quote of the Week

> 最后，我觉得有必要揭穿*对抗 the borrow checker*“传说，一个把 Rust 编译器描述成一个妖怪的故事：以我的经验来看，它主要发生在初学者和 1% 试图微优化代码,或突破边界的人身上。大多数有经验的 Rust 开发人员都知道如何精确地对代码进行建模，这样就不会浪费时间在设计问题上与编译器进行斗争，并且可以一眼就发现反模式，就像大多数人知道如何在正确的道路一侧，驾驶汽车以避免事故一样，同时注意到那些做得不对的人！

– [Simon Chemouil on the Kraken blog](https://blog.kraken.com/post/7964/oxidizing-kraken/)

Thanks to [scottmcm](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1004) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/lrw51r/this_week_in_rust_379/)</small>
