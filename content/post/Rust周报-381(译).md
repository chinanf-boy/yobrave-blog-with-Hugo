---
title: "Rust周报 381(译)"
date: 2021-03-12T23:15:26+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-381"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-03-10
- [原文：381 期](https://this-week-in-rust.org/blog/2021/03/10/this-week-in-rust-381/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Planning the Rust 2021 Edition](https://blog.rust-lang.org/inside-rust/2021/03/04/planning-rust-2021.html)

### Newsletters

- [This Month in Rust GameDev #19 - February 2021](https://rust-gamedev.github.io/posts/newsletter-019/)
- [This Month in Rust OSDev (February 2021)](https://rust-osdev.com/this-month/2021-02/)
- [RiB Newsletter #21 - More Rust and blockchains](https://www.reddit.com/r/rust/comments/lxdw8j/rib_newsletter_21_more_rust_and_blockchains/)

### Project/Tooling Updates

- [rust-analyzer Changelog #67](https://rust-analyzer.github.io/thisweek/2021/03/08/changelog-67.html)
- [rust-gpu v0.3](https://github.com/EmbarkStudios/rust-gpu/releases/tag/v0.3.0)
- [cargo-generate 0.6.0](https://github.com/cargo-generate/cargo-generate/releases/tag/v0.6.0)
- [Automatically generate APIs for datasets using Rust, Arrow and Datafusion](https://roapi.github.io/docs/index.html)

### Observations/Thoughts

- [Serverless Rust Testing](https://www.peakscale.com/serverless-rust/)
- [Rust's Type System is Turing（图灵）-Complete](https://sdleffler.github.io/RustTypeSystemTuringComplete/)
- [Why I rewrote my Rust keyboard firmware in Zig: consistency（合理性）, mastery（精通）, and fun](https://kevinlynagh.com/rust-zig/)
- [Calling a private Rust function from outside of its module](https://tim.mcnamara.nz/post/644942576528523264/calling-a-private-rust-function-from-outside)
- [Safe, Flexible Aliasing with Deferred Borrows](https://cfallin.org/pubs/ecoop2020_defborrow.pdf)
- [Evaluating Memory Models for Graph-Like Data Structures in the Rust Programming Language: Performance and Usability](http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1463648&dswid=1332)
- [Rusts Universes](https://aloso.github.io/2021/03/10/rusts-universes.html)
- [Giganotes 应用的强力助推 Rust](https://www.reddit.com/r/rust/comments/m14agf/how_i_significantly_improved_giganotes_app/)

### Rust Walkthroughs

- [OS in Rust: Incorporate VGA buffer: Part-6](https://blog.knoldus.com/os-in-rust-incorporate-vga-buffer-part-6/)
- [Writing a 3D Shooter using rg3d - #1 - Character Controller](https://rg3d.rs/tutorials/2021/03/05/tutorial1.html)
- [Writing a 3D Shooter using rg3d - #2 - Weapons](https://rg3d.rs/tutorials/2021/03/09/tutorial2.html)
- [Writing Pong in Rust for my OS Written in Rust](https://blog.stephenmarz.com/2021/02/22/writing-pong-in-rust/)
- [Replacing FastAPI with Rust: Part 6 - AWS Lambda](https://dev.to/dbanty/replacing-fastapi-with-rust-part-6-aws-lambda-inm)
- [Creating an Iterator in Rust](https://aloso.github.io/2021/03/09/creating-an-iterator)
- [Building an OpenStreetMap app in Rust, Part V](https://blogg.bekk.no/building-an-openstreetmap-app-in-rust-part-v-f14831e13e61)
- \[video] [learning rust: structs and traits](https://youtu.be/tYfA5rjrhqk)
- \[video] [answers to stackoverflow's top rust programming questions explained](https://youtu.be/Flf4ezLWw1E)
- \[video] [(live coding) learning timely dataflow](https://youtu.be/z2m1Y4nj7s8)
- \[FA] \[video] [Rust in Farsi ツ](https://www.youtube.com/channel/UCIXThmX_uAp2cJTR-hTjdcA)

### Papers and Research Projects

- [Creusot is a tool for deductive verification of Rust code](https://github.com/xldenis/creusot)
- [egg, a Rust library ，以电子图的角度，观察等式的不同写法](https://egraphs-good.github.io/)

### Miscellaneous

- [Debian running on Rust coreutils](https://sylvestre.ledru.info/blog/2021/03/09/debian-running-on-rust-coreutils)
- [A friend and I made pipes-rs, a Rust clone of pipes.sh](https://www.reddit.com/r/rust/comments/lxil6d/a_friend_and_i_made_pipesrs_a_rust_clone_of/)
- [半数的 curl's vulnerabilities（安全漏洞） 为 C 的错误](https://daniel.haxx.se/blog/2021/03/09/half-of-curls-vulnerabilities-are-c-mistakes/)
- \[video] [usenix enigma 2021 - quantifying memory unsafety and reactions to it](https://youtu.be/drfXNB6p6nI)

# Crate of the Week

这周的箱子是[Sorceress](https://crates.io/crates/sorceress)，用于声音合成和算法合成的 Rust 环境。

谢谢[Zelda Hessler](https://users.rust-lang.org/t/crate-of-the-week/2704/887)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [rust-analyzer - Optimize MBE (macro by example) performance](https://github.com/rust-analyzer/rust-analyzer/issues/7857)
- [Our own "Papers and Research Projects" section needs filling!](https://github.com/rust-lang/this-week-in-rust/)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 369 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-03-01..2021-03-08

- [upgrade to LLVM 12](https://github.com/rust-lang/rust/pull/81451)
- [backport some LLVM compile-time improvements](https://github.com/rust-lang/rust/pull/82783)
- [add natvis for `Result`, `NonNull`, `CString`, `CStr`, and `Cow`](https://github.com/rust-lang/rust/pull/82557)
- [将关于 unknown attributes 的错误，改为一个 warning](https://github.com/rust-lang/rust/pull/82702)
- [shrink the size of Rvalue by 16 bytes](https://github.com/rust-lang/rust/pull/82727)
- [move check only relevant in error case out of critical path](https://github.com/rust-lang/rust/pull/82738)
- [add `assert_matches!` macro](https://github.com/rust-lang/rust/pull/82770)
- [对 `Write` impl 泛化，从 `Vec<u8>` to `Vec<u8, A>`](https://github.com/rust-lang/rust/pull/82862)
- [避免不必要的 `Vec` 构造 in `BufReader`](https://github.com/rust-lang/rust/pull/82728)
- [improve `slice.binary_search_by()`'s best-case performance to O(1)](https://github.com/rust-lang/rust/pull/74024)
- [add {`BTreeMap`, `HashMap`}`::try_insert`](https://github.com/rust-lang/rust/pull/82764)
- [hashbrown: add `try_insert`](https://github.com/rust-lang/hashbrown/pull/247)
- [cargo: fix `filter_platform` to run on targets other than x86](https://github.com/rust-lang/cargo/pull/9246)
- [make rustdoc lints a tool lint instead of built-in](https://github.com/rust-lang/rust/pull/80527)

## Rust Compiler Performance Triage

正面的，但安静的一周。许多性能改善，尽管都是从以前的退步中获得的。我们需要继续关注汇总，因为有两个汇总引起了小的性能变化。

分流由 **@rylev**。修订范围：[edeee..86187](https://perf.rust-lang.org/?start=edeee915b1c52f97411e57ef6b1a8bd46548a37a&end=861872bc453bde79b83ff99d443d035225f10e87&absolute=false&stat=instructions%3Au)

1 个退步，4 个改进，1 个混合

其中 2 个汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [Linking modifiers for native libraries](https://github.com/rust-lang/rfcs/pull/2951)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Change visibility scoping rules for macro_rules macros](https://github.com/rust-lang/rfcs/pull/3067)
- [Make the authors field optional](https://github.com/rust-lang/rfcs/pull/3052)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [rustdoc: allow list syntax for #[doc(alias)] attributes](https://github.com/rust-lang/rust/pull/82846)
- \[disposition: merge] [slice: Stabilize `IterMut::as_slice`.](https://github.com/rust-lang/rust/pull/82771)
- \[disposition: merge] [Implement Extend and FromIterator for OsString](https://github.com/rust-lang/rust/pull/82121)
- \[disposition: merge] [Emit errors/warns on some wrong uses of rustdoc attributes](https://github.com/rust-lang/rust/pull/80300)
- \[disposition: close] [resolve: allow super in module in block to refer to block items](https://github.com/rust-lang/rust/pull/79309)
- \[disposition: close] [[Edition vNext] 考虑弃用，奇怪的嵌套 items](https://github.com/rust-lang/rust/issues/65516)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 很好笑，每次我遇到令人困惑的 borrow error 时，都会阻止我犯下真实的，严重的错误
>
> 但是可能需要一些思考才能弄清楚那个错误到底是什么。
>
> 有时 borrow checker 感觉像是一个在山上，明智的圣人用谜语提供建议 。嘻嘻

– [Jarrett on discord](https://discord.com/channels/442252698964721669/443150878111694848/817890654779605009)

Thanks to [Daniel H-M](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1012) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/m2g9cy/this_week_in_rust_381/)</small>
