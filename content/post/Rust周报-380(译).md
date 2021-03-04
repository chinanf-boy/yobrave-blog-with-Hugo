---
title: "Rust周报 380(译)"
date: 2021-03-04T21:10:35+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-380"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-03-03
- [原文：380 期](https://this-week-in-rust.org/blog/2021/03/03/this-week-in-rust-380/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- [Const generics MVP hits beta!](https://blog.rust-lang.org/2021/02/26/const-generics-mvp-beta.html)
- \[Inside] [lang team march update](https://blog.rust-lang.org/inside-rust/2021/03/03/lang-team-mar-update.html)

### Project/Tooling Updates

- [IntelliJ Rust Changelog #142](https://intellij-rust.github.io/2021/03/01/changelog-142.html)
- [rust-analyzer changelog #66](https://rust-analyzer.github.io/thisweek/2021/03/01/changelog-66.html)
- [Knurling-rs changelog #18](https://ferrous-systems.com/blog/knurling-changelog-18/)
- [Last Month in Flott - March 2021](https://flott-motion.org/news/last-month-in-flott-march-2021/)
- [RampMaker 0.2 - Stepper Motor Acceleration Ramp Generator](https://flott-motion.org/news/ramp-maker-0-2/)

### Observations/Thoughts

- [Why we built the core auth library in Rust (interview with CTO of Oso)](https://console.dev/qa/oso-sam-scott/)
- [Data Manipulation: Pandas vs Rust](https://able.bio/haixuanTao/data-manipulation-pandas-vs-rust--1d70e7fc)
- [快速 Rust](https://gist.github.com/little-dude/674de61df7f48547bdcc5bbe2860563d)
- [Evolution of Kube](https://clux.github.io/probes/post/2021-02-28-kube-evolution/)
- [Temporal RDO（失真率优化）update optimization](https://dev.to/luzero/temporal-rdo-update-optimization-2pf1)
- [Introducing The Calypso Chronicles（自写小语言）](https://dev.to/thepuzzlemaker/introducing-the-calypso-chronicles-1ff8)
- [Rust: Beware of Escape Sequences\\n](https://d3lm.medium.com/rust-beware-of-escape-sequences-85ec90e9e243#ee0e-58229fc84d02)
- [Introducing Rustybot (part 3 of n)](https://objectdisoriented.evokewonder.com/posts/introducing-rustybot-part-3/)
- [Delete Cargo Integration Tests](https://matklad.github.io/2021/02/27/delete-cargo-integration-tests.html)

### Rust Walkthroughs

- [C++ to Rust - or how to render your mindset](https://jduchniewicz.com/posts/2021/02/c-to-rust-or-how-to-render-your-mindset/)
- [Generic `impl` blocks are kinda like macros...](https://dev.to/somedood/generic-impl-blocks-are-kinda-like-macros-1aa0)
- [Make a Back-End Number Guessing Game with Rust](https://dev.to/xinnks/make-a-back-end-number-guessing-game-with-rust-1hkj)
- [Captures in closures and async blocks](https://www.fpcomplete.com/blog/captures-closures-async/)
- [Testing a driver crate](https://ferrous-systems.com/blog/test-driver-crate/)
- [Using Rust for AWS Lambdas](https://beanseverywhere.xyz/blog/rust-lambda)
- [Always-On Benchmarking in Rust](https://medium.com/edge-node-engineering/always-on-benchmarking-in-rust-d23f2bac1c1d)
- [Building an OpenStreetMap app in Rust, Part IV](https://blogg.bekk.no/building-an-openstreetmap-app-in-rust-part-iv-d82ebc245381)
- [Solving Advent of Code 2020 in under a second](https://timvisee.com/blog/solving-aoc-2020-in-under-a-second/)
- [The Case for the Typestate Pattern - Introducing Algebraic Data Types](https://www.novatec-gmbh.de/en/blog/the-case-for-the-typestate-pattern-introducing-algebraic-data-types/)
- \[DE] [weniger frust mit rust](https://www.golem.de/news/programmiersprachen-weniger-frust-mit-rust-2102-154243.html)
- \[video] [learning rust: procedural macros](https://youtu.be/9IbYBl48eTQ)
- \[video] [rust proxy server with warp and hyper](https://youtu.be/eIllaNZisiU)

### Miscellaneous

- [Ferrocene Part 3: The Road to Rust in mission- and safety-critical](https://ferrous-systems.com/blog/ferrocene-update-three-the-road/)
- [How our AWS Rust team will contribute to Rust's future successes](https://aws.amazon.com/blogs/opensource/how-our-aws-rust-team-will-contribute-to-rusts-future-successes/)
- [Librsvg, Rust, and non-mainstream architectures](https://people.gnome.org/~federico/blog/librsvg-rust-and-non-mainstream-architectures.html)
- [Always-On Benchmarking In Rust](https://medium.com/edge-node-engineering/always-on-benchmarking-in-rust-d23f2bac1c1d)
- \[DE] [weniger frust mit rust](https://www.golem.de/news/programmiersprachen-weniger-frust-mit-rust-2102-154243.html)

# Crate of the Week

这周的箱子是[camino](https://crates.io/crates/camino)，具有 UTF-8 编码路径的库，模仿`std::os::Path`的 API。

谢谢[piegames](https://users.rust-lang.org/t/crate-of-the-week/2704/886)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_本周没有参加的电话_

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 402 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-02-22..2021-03-01

- [implement -Z hir-stats for nested foreign items](https://github.com/rust-lang/rust/pull/82258)
- [suggest character encoding is incorrect when encountering random null bytes](https://github.com/rust-lang/rust/pull/81856)
- [suggest `return`ing tail expressions that match return type](https://github.com/rust-lang/rust/pull/81769)
- [改善建议：tuple struct pattern matching errors](https://github.com/rust-lang/rust/pull/81235)
- [改善错误信息：when found type is deref of expected](https://github.com/rust-lang/rust/pull/82364)
- [AST: remove some unnecessary boxes](https://github.com/rust-lang/rust/pull/82321)
- [apply lint restrictions from renamed lints](https://github.com/rust-lang/rust/pull/82620)
- [remove storage markers if they won't be used during code generation](https://github.com/rust-lang/rust/pull/78360)
- [remove many `RefCell`s from `DocContext`](https://github.com/rust-lang/rust/pull/82305)
- [prevent computing Item attributes twice](https://github.com/rust-lang/rust/pull/82265)
- [new mir-opt pass to simplify gotos with const values](https://github.com/rust-lang/rust/pull/80475)
- [add an impl of `Error` on `Arc<impl Error>`](https://github.com/rust-lang/rust/pull/80553)
- [make `ptr::write` const](https://github.com/rust-lang/rust/pull/81167)
- [make `char` and `u8` methods const](https://github.com/rust-lang/rust/pull/82078)
- [`char::to_ascii_lowercase`小优化](https://github.com/rust-lang/rust/pull/81837)
- [stabilize `str_split_once`](https://github.com/rust-lang/rust/pull/81940)
- [specialize `slice::fill` with `Copy` type and `u8`/`i8`/`bool`](https://github.com/rust-lang/rust/pull/81874)
- [futures: `future::SelectAll::into_inner`](https://github.com/rust-lang/futures-rs/pull/2363)
- [futures: `futures_util::stream::SelectAll::push` should use `&self`](https://github.com/rust-lang/futures-rs/pull/2293)
- [cargo: run rustdoc doctests relative to the workspace](https://github.com/rust-lang/cargo/pull/9105)
- [cargo: throw error if `CARGO_TARGET_DIR` is an empty string](https://github.com/rust-lang/cargo/pull/8939)
- [cargo: 添加 `[env]` section 的支持，in .cargo/config.toml](https://github.com/rust-lang/cargo/pull/9175)
- [cargo: make it more clear which module is being tested when running cargo test](https://github.com/rust-lang/cargo/pull/9195)

## Rust Compiler Performance Triage

安静的一周，一些退步和一些不错的改进。

分流由 **@simulacrum**。修订范围：[301ad8..edeee](https://perf.rust-lang.org/?start=301ad8a4fa3ea56fb980443b7997c8f9d72dd717&end=edeee915b1c52f97411e57ef6b1a8bd46548a37a&absolute=false&stat=instructions%3Au)

2 个退步，3 个改进，0 个混合

其中 0 个汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC - cargo templates](https://github.com/rust-lang/rfcs/pull/2922)
- [rfc: make cargo install extensible](https://github.com/rust-lang/rfcs/pull/2376)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [弃用 `doc(include)`](https://github.com/rust-lang/rust/pull/82539)
- \[disposition: merge] [Implement Extend and FromIterator for OsString](https://github.com/rust-lang/rust/pull/82121)
- \[disposition: merge] [Allow specifying alignment for functions](https://github.com/rust-lang/rust/pull/81234)
- \[disposition: close] [resolve: allow super in module in block to refer to block items](https://github.com/rust-lang/rust/pull/79309)

## New RFCs

- [A new prelude for the 2021 edition](https://github.com/rust-lang/rfcs/pull/3090)

# Quote of the Week

> 这是 C/C ++ 和 Rust 不同态度的一个很好的例子：在 C / C ++中，只要有人可以正确使用它，它是正确的；而在 Rust 中，当有人无法不正确地使用它时，它是正确的。

– [/u/Janohard on /r/rust](https://www.reddit.com/r/rust/comments/lt4u85/const_generics_mvp_hits_beta/goyg3v4/)

Thanks to [Vlad Frolov](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1007) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://this-week-in-rust.org/blog/2021/03/03/this-week-in-rust-380/)</small>
