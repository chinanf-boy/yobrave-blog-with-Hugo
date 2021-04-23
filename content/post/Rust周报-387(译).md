---
title: "Rust周报 387(译)"
date: 2021-04-23T23:14:43+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-387"
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
- 日期：2021-04-21
- [原文：387 期](https://this-week-in-rust.org/blog/2021/04/21/this-week-in-rust-387/)

你好，欢迎再来一期 _本周的螃蟹行情_ ！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有论文/研究项目。

### Official

- \[Inside] [rust compiler april steering cycle](https://blog.rust-lang.org/inside-rust/2021/04/15/compiler-team-april-steering-cycle.html)
- \[Inside] [lang team april update](https://blog.rust-lang.org/inside-rust/2021/04/17/lang-team-apr-update.html)
- \[Inside] [jacob hoffman-andrews joins the rustdoc team](https://blog.rust-lang.org/inside-rust/2021/04/20/jsha-rustdoc-member.html)
- \[Foundation] [introducing jane lusby](https://foundation.rust-lang.org/posts/2021-04-15-introducing-jane-lusby/)
- \[Foundation] [introducing shane miller](https://foundation.rust-lang.org/posts/2021-04-15-introducing-shane-miller/)

### Newsletters

### Project/Tooling Updates

- [rust-analyzer Changelog #73](https://rust-analyzer.github.io/thisweek/2021/04/19/changelog-73.html)
- [Knurling-rs changelog #23](https://ferrous-systems.com/blog/knurling-changelog-23/)
- [This Week in Ballista #11](https://ballistacompute.org/thisweek/2021/04/18/this-week-in-ballista-11/)
- [Welcoming Alice Ryhl as the first paid Tokio contributor](https://tokio.rs/blog/2021-04-welcome-alice)
- [Zellij: a Rusty terminal multiplexer(终端复用/多窗口器) releases a beta version](https://zellij.dev/news/beta/)
- [faux: a struct mocking library - landing v0.1](https://nrxus.github.io/faux/blog/landing-v-0-1.html)
- [Otter - a game server for arbitrary board games](https://diziet.dreamwidth.org/8121.html). It is mainly [written in Rust](https://www.chiark.greenend.org.uk/~ianmdlvl/otter/docs/build.html)
- \[audio] [what's new in rust 1.50 and 1.51](https://rustacean-station.org/episode/033-rust-1.50-1.51/)

### Observations/Thoughts

- [Red & blue（async/sync） functions are actually a good thing](https://blainehansen.me/post/red-blue-functions-are-actually-good/)
- [Why Rust powers Temporal's new Core SDK](https://docs.temporal.io/blog/why-rust-powers-core-sdk/)
- [Optimizing 一个数独求解器 in Rust](https://www.simonclark.dev/2020/08/10/optimizing-sudoku-solver.html)
- [My journey to understand rust-lang](https://daveshawley.medium.com/my-journey-to-understand-rust-lang-28e4cf808b12)
- [How I Implemented /dev/printerfact in Rust](https://christine.website/blog/dev-printerfact-2021-04-17)
- [Why fnm was rewritten in Rust](https://gal.hagever.com/posts/why-fnm-was-rewritten-in-rust/)
- [Running GraphQL on Lambda with Rust](https://dev.to/dbanty/running-graphql-on-lambda-with-rust-1lak)
- [Runtime Alias（重叠/别名） Detection](https://myrrlyn.net/blog/bitvec/alias-detection)
- [What's in the box?](https://fasterthanli.me/articles/whats-in-the-box)
- \[video] [an overview of the embedded rust ecosystem](https://youtu.be/vLYit_HHPaY)

### Rust Walkthroughs

- [Late Night Confessions（深夜漂流瓶） — Building a Website Using Rust, Rocket, Diesel, and Askama - Part 1](https://medium.com/perimeterx/late-night-confessions-building-a-website-using-rust-rocket-diesel-and-askama-part-1-aeccade43252)
- [Tour of Rust's Standard Library Traits](https://github.com/pretzelhammer/rust-blog/blob/master/posts/tour-of-rusts-standard-library-traits.md)
- [Learning Rust #3: crates.io & publishing your package](https://hamatti.org/posts/learning-rust-3-crates-io-publishing-your-package/)
- [Making an online multiplayer game in Rust with Nakama](https://heroiclabs.com/blog/tutorials/rust-fishgame/)
- [Creating a Sleek Masonry Gallery with React and WebAssembly](https://dev.to/rvanderlaan/creating-a-sleek-masonry-gallery-with-react-and-webassembly-17p2)
- [The GPIO war: macro bunkers for typestate explosions (2)](https://www.ecorax.net/macro-bunker-2/)
- [Using `std` in embedded Rust](https://timmmm.github.io/std-embedded-rust/index.html)
- [Rust and TUI: Building a command-line interface in Rust](https://blog.logrocket.com/rust-and-tui-building-a-command-line-interface-in-rust/)
- [Rust: Serde: Working with untyped JSON values](https://youtu.be/NwYY00paiH0)
- \[series] [writing nes emulator in rust](https://bugzmanov.github.io/nes_ebook/index.html)

### Miscellaneous

- [rustc, iOS and an M1](https://fnordig.de/2021/04/16/rustc-ios-and-an-m1/)
- [Microsoft Previews 'Rust For Windows'](https://www.tectalk.co/microsoft-previews-rust-for-windows/)
- [Preparing Rustls for Wider Adoption](https://www.abetterinternet.org/post/preparing-rustls-for-wider-adoption/)
- [Are We Yeet Yet?](https://areweyeetyet.rs/)
- [Run Rust RISC-V Firmware with BL602 IoT SDK](https://lupyuen.github.io/articles/rust)
- \[video] [stanford seminar - the soul of a new machine: rethinking the computer](https://youtu.be/vvZA9n3e5pc)

# Crate of the Week

这周的箱子是[deltoid](https://github.com/jjpe/deltoid)，另一个用于增量压缩 Rust 数据结构的箱子。

谢谢[Joey Ezechiëls](https://users.rust-lang.org/t/crate-of-the-week/2704/904)提名

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_本周没有参加的电话_

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 292 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-04-12..2021-04-19

- [更严格检测 when suggested paths enter extern crates](https://github.com/rust-lang/rust/pull/84113)
- [don't set fast-math for the SIMD operations we set it for previously](https://github.com/rust-lang/rust/pull/84274)
- [add lint `deref_nullptr` detecting when a null ptr is dereferenced](https://github.com/rust-lang/rust/pull/83948)
- [fix suggestion for unsized function parameters](https://github.com/rust-lang/rust/pull/84313)
- [suggest to borrow after failing to cast from `T` to `*const/mut T`](https://github.com/rust-lang/rust/pull/84228)
- [stabilize `non-ascii-idents`](https://github.com/rust-lang/rust/pull/83799)
- [stabilize `is_subnormal`](https://github.com/rust-lang/rust/pull/84086)
- [stabilize `duration_zero`](https://github.com/rust-lang/rust/pull/84084)
- [stabilize `nonzero_leading_trailing_zeros`](https://github.com/rust-lang/rust/pull/84082)
- [stabilize `bufreader_seek_relative`](https://github.com/rust-lang/rust/pull/82992)
- [stabilize `BTree`{`Map`, `Set`}`::retain`](https://github.com/rust-lang/rust/pull/84121)
- [fix aliasing violations in `thread_local_const_init`](https://github.com/rust-lang/rust/pull/84291)
- [fix `join_paths` error display](https://github.com/rust-lang/rust/pull/84177)
- [merge same condition branch in vec `spec_extend`](https://github.com/rust-lang/rust/pull/84209)
- [improve `vecdeque_binary_search`](https://github.com/rust-lang/rust/pull/84145/files)
- [regex: shrink size of `Inst`](https://github.com/rust-lang/regex/pull/760)
- [cargo: don't re-use rustc cache when `RUSTC_WRAPPER` changes](https://github.com/rust-lang/cargo/pull/9348)
- [clippy: split `is_diagnostic_assoc_item`](https://github.com/rust-lang/rust-clippy/pull/7074)
- [clippy: fix `single_match`](https://github.com/rust-lang/rust-clippy/pull/7093)
- [clippy: fix a false negative on `needless_return`](https://github.com/rust-lang/rust-clippy/pull/7067)
- [clippy: fix a false positive in `missing_const_for_fn`](https://github.com/rust-lang/rust-clippy/pull/7076)
- [clippy: fix false positive in `wrong_self_convention` lint](https://github.com/rust-lang/rust-clippy/pull/7064)
- [clippy: fix `redundant_pattern_matching` drop order](https://github.com/rust-lang/rust-clippy/pull/6568)
- [clippy: un-double `return` on `try_err`](https://github.com/rust-lang/rust-clippy/pull/7108)

## Rust Compiler Performance Triage

另一个安静的星期，对编译器性能的更改很小。

分流由 **@rylev**。修订范围：[5258a74..6df26f](https://perf.rust-lang.org/?start=5258a74c887f8ae14717e1f98b652b470877ce4e&end=6df26f897cffb2d86880544bb451c6b5f8509b2d&absolute=false&stat=instructions%3Au)

1 个退步，0 个改进，1 个混合

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [try_trait_v2: A new design for the ? desugaring](https://github.com/rust-lang/rfcs/pull/3058)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [RFC: Reserved prefixes in the 2021 edition](https://github.com/rust-lang/rfcs/pull/3101)
- \[disposition: merge] [add const-ub RFC](https://github.com/rust-lang/rfcs/pull/3016)
- \[disposition: merge] [Target tier policy](https://github.com/rust-lang/rfcs/pull/2803)
- \[disposition: postpone] [RFC: Custom DSTs](https://github.com/rust-lang/rfcs/pull/2594)
- \[disposition: postpone] [Enum variant types](https://github.com/rust-lang/rfcs/pull/2593)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Cautiously add IntoIterator for arrays by value](https://github.com/rust-lang/rust/pull/84147)
- \[disposition: merge] [Stabilize Duration::MAX](https://github.com/rust-lang/rust/pull/84120)
- \[disposition: merge] [Stabilize `impl From<[(K, V); N]`> for HashMap`](https://github.com/rust-lang/rust/pull/84111)
- \[disposition: merge] [Allow setting `target_family` to multiple values, and implement `target_family="wasm"`](https://github.com/rust-lang/rust/pull/84072)
- \[disposition: close] [Exiting a process calls exit() which isn’t thread-safe](https://github.com/rust-lang/rust/issues/83994)
- \[disposition: merge] [Stabilize `:pat_param` but leave :pat2021 gated](https://github.com/rust-lang/rust/pull/83386)
- \[disposition: merge] [parser: Remove support for inner attributes on non-block expressions](https://github.com/rust-lang/rust/pull/83312)
- \[disposition: merge] [Update BARE_TRAIT_OBJECT and ELLIPSIS_INCLUSIVE_RANGE_PATTERNS to errors in Rust 2021](https://github.com/rust-lang/rust/pull/83213)
- \[disposition: merge] [Tracking Issue for vec_extend_from_within](https://github.com/rust-lang/rust/issues/81656)
- \[disposition: merge] [Tracking Issue for 'ordering helpers'](https://github.com/rust-lang/rust/issues/79885)
- \[disposition: merge] [Tracking issue for array::from_ref and array::from_mut](https://github.com/rust-lang/rust/issues/77101)
- \[disposition: merge] [Tracking Issue for {HashMap,BTreeMap}::into\_{keys,values}](https://github.com/rust-lang/rust/issues/75294)
- \[disposition: merge] [Tracking issue for x86 bittest intrinsics](https://github.com/rust-lang/rust/issues/59414)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 我们认为 Rust 现在已经准备好加入 C，作为一种实用的语言来实现 \[Linux]核心。它可以帮助我们减少特权代码中潜在的错误和安全漏洞的数量，同时很好地与核心内核一起使用，并保留其性能特征。

– [Wedson Almeida Filho on the Google Security Blog](https://security.googleblog.com/2021/04/rust-in-linux-kernel.html)

Thanks to [Jacob Pratt](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1040) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/mvuk1k/this_week_in_rust_387/)</small>
