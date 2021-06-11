---
title: "Rust周报 394(译)"
date: 2021-06-11T11:38:54+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-394"
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
- 日期：2021-06-09
- [原文：394 期](https://this-week-in-rust.org/blog/2021/09/06/this-week-in-rust-394/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

### Official

- [Announcing Rustup 1.24.3](https://blog.rust-lang.org/2021/06/08/Rustup-1.24.3.html)

### Newsletters

- [This Month in Rust OSDev (May 2021)](https://rust-osdev.com/this-month/2021-05/)

### Project/Tooling Updates

- [Filecoin Forest update](https://medium.com/chainsafe-systems/back-into-the-forest-983a4344ffe9)
- [Mina Protocol update](https://medium.com/chainsafe-systems/realizing-the-mina-vision-in-rust-453f6f522205)
- [rust-analyzer Changelog #80](https://rust-analyzer.github.io/thisweek/2021/06/07/changelog-80.html)
- [IntelliJ Rust Changelog #148](https://intellij-rust.github.io/2021/06/07/changelog-148.html)
- [Rust/C++ Interop in the Android Platform](https://security.googleblog.com/2021/06/rustc-interop-in-android-platform.html)
- [Rocket v0.5 Release Candidate](https://rocket.rs/v0.5-rc/news/2021-06-09-version-0.5-rc.1/)
- [This Week In TensorBase 6](https://tensorbase.io/thisweek/2021-06-09-tw_6/)
- [Dotenv-linter v3.1.0: Overview of key changes](https://dotenv-linter.github.io/#/whats_new/v310)
- [AWS SDK Rust: 9 New Services Added](https://github.com/awslabs/aws-sdk-rust/releases/tag/v0.0.7-alpha)

### Observations/Thoughts

- [Untapped potential in Rust's type system](https://www.jakobmeier.ch/blogging/Untapped-Rust.html)
- [Idiomatic Rust? Implementing binary search (part 2)](https://shane-o.dev/blog/binary-search-rust-part-2)
- [Designing Rust bindings for REST APIs](https://plume.benboeckel.net/~/JustAnotherBlog/designing-rust-bindings-for-rest-ap-is)
- [Rust zero-cost abstractions in action](https://medium.com/ingeniouslysimple/rust-zero-cost-abstraction-in-action-9e4e2f8bf5a)
- [Translating Quake 3 into Rust](https://immunant.com/blog/2020/01/quake3/)
- [First impressions of Rust programming on Solana](https://brson.github.io/2021/06/08/rust-on-solana)
- [Optimizing Pairing-Based Cryptography: Montgomery Arithmetic(蒙哥马利算法) in Rust](https://research.nccgroup.com/2021/06/09/optimizing-pairing-based-cryptography-montgomery-arithmetic-in-rust/)
- [My second cup of Rust](https://blog.frankel.ch/start-rust/2/)
- [A Goose In The Clouds: Load Testing At Scale](https://www.tag1consulting.com/blog/goose-clouds-load-testing-scale)
- [Walking through "The Java Tutorials" with Rust](https://rust-java-tutorials.netlify.app/blog/)
- [Behavior inheritance in Rust](https://abadcafe.wordpress.com/2021/01/08/behavior-inheritance-in-rust/)
- \[audio] [building with rust: ralf jung on ghostcell and working as a pl researcher](https://anchor.fm/building-with-rust/episodes/Building-with-Rust-Ralf-Jung-on-GhostCell-and-Working-as-a-PL-Researcher-e12auje)

### Rust Walkthroughs

- [Rust Derive Macro 指南](https://github.com/imbolc/rust-derive-macro-guide)
- [Calibration From Scratch Using Rust: Part 1 of 3](https://www.tangramvision.com/blog/calibration-from-scratch-using-rust-part-1-of-3)
- [Calibration From Scratch Using Rust: Part 2 of 3](https://www.tangramvision.com/blog/calibration-from-scratch-using-rust-part-2-of-3)
- [Calibration From Scratch Using Rust: Part 3 of 3](https://www.tangramvision.com/blog/calibration-from-scratch-using-rust-part-3-of-3)
- [Rust from a JavaScript perspective](https://blogs.harvard.edu/kapolos/rust-from-a-javascript-perspective/)
- [!#\[no_std\] with WASI is more complicated than I thought it would be](https://dev.to/thepuzzlemaker/nostd-with-wasi-is-more-complicated-than-i-thought-it-would-be-14j7)
- [Rust - 是什么点醒了 我 (Ownership and memory models)](https://deavid.wordpress.com/2021/06/06/rust-what-made-it-click-for-me-ownership-memory-internals/)
- [Creating an NPM package written in Rust](https://popcornpaws.medium.com/creating-an-npm-package-written-in-rust-ce02f7c55458)
- [Rise and Shine: Putting the nRF52840 to sleep, and waking it back up](https://tweedegolf.nl/blog/57/rise-and-shine-putting-the-nrf52840-to-sleep-and-waking-back-up)
- [Iterator producing iterator in Rust is really helpful.](https://blog.knoldus.com/iterator-producing-iterator-in-rust-is-really-helpful/)
- [Speed up your Rust CI with cache image and Buildkit](https://blog.erebe.dev/blog/speed-up-your-ci-with-buildkit/)
- \[ZH] \[series] [Build front-end web apps with Yew and WebAssembly in Rust -part 1: crates (Rust 和 Wasm 的融合，使用 yew 构建 WebAssembly 标准的 web 前端（1）- 起步及 crate 选择)](<https://blog.budshome.com/budshome/rust-he-wasm-de-rong-he-,shi-yong-yew-gou-jian-webassembly-biao-zhun-de-web-qian-duan-(1)--qi-bu-ji-crate-xuan-ze>)
- \[ZH] \[series] [Build front-end web apps with Yew and WebAssembly in Rust -part 2: Components & Routers (Rust 和 Wasm 的融合，使用 yew 构建 WebAssembly 标准的 web 前端（2）- 组件和路由)](<https://blog.budshome.com/budshome/rust-he-wasm-de-rong-he-,shi-yong-yew-gou-jian-webassembly-biao-zhun-de-web-qian-duan-(2)--zu-jian-he-lu-you>)
- [video][rust beginners 5 - tuples](<https://youtu.be/gZMet9Vi7_A>)

### Research

- \[collection] [自动化工具： rust verification tools (2021)](https://alastairreid.github.io/automatic-rust-verification-tools-2021/)

### Miscellaneous

- [QUIC Version 1 is live on Cloudflare](https://blog.cloudflare.com/quic-version-1-is-live-on-cloudflare/)
- [What are the most "professional" crates?](https://www.reddit.com/r/rust/comments/nsvyxq/what_are_the_most_professional_crates/)
- [What's your favourite under-rated Rust crate and why?](https://www.reddit.com/r/rust/comments/nuq1ix/whats_your_favourite_underrated_rust_crate_and_why/)
- [It's not much, but I graduated from middle-school today with Rust as my language of choice](https://www.reddit.com/r/rust/comments/nrin1u/its_not_much_but_i_graduated_from_middleschool/)
- [From Julia to Rust](https://miguelraz.github.io/blog/juliatorust/)
- [fastText 和 Rust，用于即时翻译](https://instantdomainsearch.com/engineering/how-to-use-fasttext-for-instant-translations)

## Crate of the Week

本周的箱子是[cargo-sort](https://github.com/DevinR528/cargo-sort), 一个 cargo 子命令，排序你的`Cargo.toml`的依赖项和工作区成员。

谢谢[jplatte](https://users.rust-lang.org/t/crate-of-the-week/2704/921)为提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

- [Ruma has several "help wanted" issues](https://github.com/ruma/ruma/labels/help%20wanted)
- [Cargo has several "help wanted" issues](https://github.com/rust-lang/cargo/labels/E-help-wanted)

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

267 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-05-31..2021-06-07

- [BPF target support](https://github.com/rust-lang/rust/pull/79608)
- [support for force-warns](https://github.com/rust-lang/rust/pull/85788)
- [improve debugging experience for enums on windows-msvc](https://github.com/rust-lang/rust/pull/85292)
- [parser: ensure that all nonterminals have tokens after parsing](https://github.com/rust-lang/rust/pull/84995)
- [don't suggest unsized indirection in where-clauses](https://github.com/rust-lang/rust/pull/85979)
- [rustc: allow safe `#[target_feature]` on wasm](https://github.com/rust-lang/rust/pull/84988)
- [always go through the `expn_that_defined` query](https://github.com/rust-lang/rust/pull/86002)
- [perf: miscellaneous inlining improvements](https://github.com/rust-lang/rust/pull/85892)
- [perf: only compute the trait map once](https://github.com/rust-lang/rust/pull/85905)
- [stabilize `vecdeque_binary_search`](https://github.com/rust-lang/rust/pull/83362)
- [update standard library for `IntoIterator` implementation of arrays](https://github.com/rust-lang/rust/pull/85930)
- [clippy: don't warn about `cfg!(..)` as a constant in assertions](https://github.com/rust-lang/rust-clippy/pull/7319)
- [clippy: fix `needless_collect` with binding shadowing](https://github.com/rust-lang/rust-clippy/pull/7289)
- [clippy: add lint `manual_str_repeat`](https://github.com/rust-lang/rust-clippy/pull/7265)

### Rust Compiler Performance Triage

一些很好的改进，和一些退步。没有大的变化。

分流完成 **@simulacrum**.修订范围：[1160cf..a50d721](https://perf.rust-lang.org/?start=1160cf864f2a0014e3442367e1b96496bfbeadf4&end=a50d72158e08e02cfc051b863017bdbd2c45b637&absolute=false&stat=instructions%3Au)

3 个退步，3 个改进，1 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-06-08.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有提出新的 RFC。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: close] [Add the boxed!() macro to "de-magic" box syntax](https://github.com/rust-lang/rfcs/pull/3057)
- \[disposition: merge] [RFC: Supertrait item shadowing](https://github.com/rust-lang/rfcs/pull/2845)
- \[disposition: merge] [Type-changing struct update syntax](https://github.com/rust-lang/rfcs/pull/2528)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize span_open() and span_close().](https://github.com/rust-lang/rust/pull/86136)
- \[disposition: merge] [Stabilize ops::ControlFlow (just the type)](https://github.com/rust-lang/rust/pull/85608)
- \[disposition: merge] [Re-add support for parsing (and pretty-printing) inner-attributes in match body](https://github.com/rust-lang/rust/pull/85193)
- \[disposition: merge] [Ignore derived Clone and Debug implementations during dead code analysis](https://github.com/rust-lang/rust/pull/85200)
- \[disposition: merge] [Tracking Issue for const core::str::from_utf8_unchecked](https://github.com/rust-lang/rust/issues/75196)

### New RFCs

- [RFC: let-else statements](https://github.com/rust-lang/rfcs/pull/3137)

# Quote of the Week

> 软件工程中的权衡，随着时间的推移而改变，理想的解决方案也是如此。大约 40 年前，当第一个 C 标准被写下来的时候，人们的能力不亚于今天那些研究 Rust 的人，语言的设计和没有定义的行为列表，在当时的背景下可能比现在更有意义。在未来的几年里，Rust 做出的选择也许不如今时今日这样有意义，也说不定。

– [Simonas on rust-internals](https://users.rust-lang.org/t/why-deference-maybeuninit-unint-as-mut-ptr-is-safe/60344/19)

Thanks to [Kill The Mule](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1055) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/nx4s28/this_week_in_rust_394/)</small>
