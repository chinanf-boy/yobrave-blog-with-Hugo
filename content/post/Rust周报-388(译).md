---
title: "Rust周报 388(译)"
date: 2021-05-01T11:01:00+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-388"
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
- 日期：2021-04-28
- [原文：388 期](https://this-week-in-rust.org/blog/2021/04/28/this-week-in-rust-388/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- [Announcing Rustup 1.24.0](https://blog.rust-lang.org/2021/04/27/Rustup-1.24.0.html)
- \[Inside] [congrats to compiler team member aaron hill](https://blog.rust-lang.org/inside-rust/2021/04/26/aaron-hill-compiler-team.html)
- \[Foundation] [introducing josh stone](https://foundation.rust-lang.org/posts/2021-04-22-introducing-josh-stone/)
- \[Foundation] [introducing lars bergstrom](https://foundation.rust-lang.org/posts/2021-04-22-introducing-lars-bergstrom/)

### Project/Tooling Updates

- [rust-analyzer Changelog #74](https://rust-analyzer.github.io/thisweek/2021/04/26/changelog-74.html)
- [IntelliJ Rust Changelog #146](https://intellij-rust.github.io/2021/04/26/changelog-146.html)
- [Lemmy Release v0.11.0](https://lemmy.ml/post/61856)
- [simdutf v0.1.1 - A small step for semver, one giant leap for performance](https://www.reddit.com/r/rust/comments/mz44xi/simdutf_v011_a_small_step_for_semver_one_giant/)
- [The playable demo of Outer Wonders, our cute, colorful and Rust-powered 猜谜游戏, is live on itch.io for Windows and Linux! Thank you Rust community for creating such awesome tools!](https://www.reddit.com/r/rust/comments/mx3enm/the_playable_demo_of_outer_wonders_our_cute/)

### Observations/Thoughts

- [Rust Notebooks with Evcxr: 采访 David Lattimore](https://blog.abor.dev/p/evcxr)
- [iterators 的成本 和 零成本抽象 in Rust](https://github.com/mike-barber/rust-zero-cost-abstractions/blob/main/README.md) (with video)
- [Move Constructors in Rust: Is it possible?](https://mcyoung.xyz/2021/04/26/move-ctors/)
- [basedrop: a garbage collector for 实时音频 in rust](https://glowcoil.com/posts/basedrop/)
- [Road to TurboWish; Part 1: Goals](http://blog.pnkfx.org/blog/2021/04/26/road-to-turbowish-part-1-goals/)
- [Road to TurboWish; Part 2: Stories](http://blog.pnkfx.org/blog/2021/04/27/road-to-turbowish-part-2-stories/)
- [The Pains of Path Parsing](https://www.fpcomplete.com/blog/pains-path-parsing/)
- [If you could re-design Rust from scratch today, what would you change?](https://www.reddit.com/r/rust/comments/my3ipa/if_you_could_redesign_rust_from_scratch_today/)
- [Red & blue functions are actually a good thing](https://blainehansen.me/post/red-blue-functions-are-actually-good/)

### Rust Walkthroughs

- [Creating 隐私保护签名 in Rust with BBS+](https://github.com/ockam-network/ockam/blob/develop/implementations/rust/ockam/signature_bbs_plus/GUIDE.md)
- [Late Night Confessions — Building a Website Using Rust, Rocket, Diesel, and Askama - Part 2](https://medium.com/perimeterx/late-night-confessions-building-a-website-using-rust-rocket-diesel-and-askama-part-2-fc87c463e8f3)
- [How to Build a Custom Test Harness in Rust](https://www.fluvio.io/blog/2021/04/rust-custom-test-harness/)
- [Introduction to gRPC in Rust](https://romankudryashov.com/blog/2021/04/grpc-rust/)
- [Writing a Postgres SQL Pretty Printer in Rust: Part 2](https://blog.urth.org/2021/04/24/writing-a-postgres-sql-pretty-printer-in-rust-part-2/)
- \[series] [a journey into rust](https://dev.to/basman/series/12170)
- \[ZH] \[series] [Build GraphQL services based on Async Rust using tide + async-graphql + mongodb (基于 Async Rust 构建 GraphQL 服务，使用 tide + async-graphql + mongodb) - Part 2](<https://blog.budshome.com/budshome/gou-jian-rust-yi-bu-graphql-fu-wu-:ji-yu-tide-+-async-graphql-+-mongodb(2)--cha-xun-fu-wu>)
- \[ZH] \[series] [Build GraphQL services based on Async Rust using actix-web + async-graphql + rbatis + postgresql / mysql (基于 actix-web + async-graphql + rbatis + postgresql / mysql 构建异步 Rust GraphQL 服务) - Part 1](https://blog.budshome.com/budshome/ji-yu-actix-web-+-async-graphql-+-rbatis-+-postgresql---mysql-gou-jian-yi-bu-rust-graphql-fu-wu---qi-bu-ji-crate-xuan-ze)
- \[video] [what is rust and why is it important?](https://youtu.be/kdv1EBk6Xgc)
- \[video] [using iterator::collect in rust](https://youtu.be/ECwy6s_h7T8)
- \[video] [rustconf 2020 - macros for a more productive rust by jam1garner](https://youtu.be/HN6EUcnGN1s)

### Papers/Research Projects

- [A DSL embedded in Rust](https://dl.acm.org/doi/10.1145/3310232.3310241)
- [各种编程语言的能量效率](https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf)

### Miscellaneous

- [采访 Linux 之父， Linus Torvalds: Linux and Git](https://www.tag1consulting.com/blog/interview-linus-torvalds-linux-and-git)
- [Programming languages: JavaScript has most developers but Rust is the fastest growing](https://www.zdnet.com/google-amp/article/programming-languages-javascript-has-most-developers-but-rust-is-the-fastest-growing/)
- [Parts of Tensorboard（提供机器学习实验所需的可视化功能和工具） are being rewritten in Rust for a 100x to 400x speedup](https://www.reddit.com/r/rust/comments/mzlg5s/parts_of_tensorboard_are_being_rewritten_in_rust/)
- [Are we finally about to gain guaranteed Tail Calls in Rust?](https://www.reddit.com/r/rust/comments/my6k5i/are_we_finally_about_to_gain_guaranteed_tail/)
- [GitHub Actions best practices for Rust projects](https://www.fluvio.io/blog/2021/04/github-actions-best-practices/)

# Crate of the Week

这周的箱子是[cargo-rr](https://github.com/danielzfranklin/cargo-rr)，这是一个 cargo 子命令，可在我们的代码上，使用时间旅行的 rr 调试器。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/905)提名

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

[jsonschema-rs: User-defined validation for the format keyword](https://github.com/Stranger6667/jsonschema-rs/issues/158)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

350 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-04-19..2021-04-26

- [use LLVM's new saturating float-to-int intrinsics](https://github.com/rust-lang/rust/pull/84339)
- [enable sanitizers for `x86_64-unknown-linux-musl`](https://github.com/rust-lang/rust/pull/84126)
- [add coverage to `continue` statements](https://github.com/rust-lang/rust/pull/84295)
- [further split up `const_fn` feature flag](https://github.com/rust-lang/rust/pull/84310)
- [各种各样的 const parameter defaults 改善](https://github.com/rust-lang/rust/pull/84299)
- [调整 trait not \`use d suggestion](https://github.com/rust-lang/rust/pull/84499)
- [on stable, suggest removing `#![feature]` for features that have been stabilized](https://github.com/rust-lang/rust/pull/83722)
- [improve diagnostics for function passed when a type was expected](https://github.com/rust-lang/rust/pull/84520)
- [add suggestion to "use break" when attempting to implicit-break a loop](https://github.com/rust-lang/rust/pull/84516)
- [suggest `.as_ref()` on borrow error involving `Option`/`Result`](https://github.com/rust-lang/rust/pull/84353)
- [implement a lint that highlights all moves larger than a configured limit](https://github.com/rust-lang/rust/pull/83519)
- [introduce `CompileMonoItem` `DepNode`](https://github.com/rust-lang/rust/pull/84123)
- [谨慎地添加 `IntoIterator` for arrays by value](https://github.com/rust-lang/rust/pull/84147)
- [stabilize `Duration::MAX`](https://github.com/rust-lang/rust/pull/84120)
- [stabilize `core::array::`{`from_ref`, `from_mut`} in 1.53.0](https://github.com/rust-lang/rust/pull/84105)
- [implement `TrustedRandomAccess` for `Take` iterator adapter](https://github.com/rust-lang/rust/pull/83990)
- [format `Struct { .. }` on one line even with `{:#?}`](https://github.com/rust-lang/rust/pull/84390)
- [added `CharIndices::offset` function](https://github.com/rust-lang/rust/pull/82585)
- [improve rebuilding behaviour of `BinaryHeap::retain`](https://github.com/rust-lang/rust/pull/78681)
- [hashbrown: add an `allocator()` getter to `HashMap` and `HashSet`](https://github.com/rust-lang/hashbrown/pull/257)
- [libz: disable forced zlib vendoring on musl](https://github.com/rust-lang/libz-sys/pull/78)
- [cargo: some changes to rustdoc fingerprint checking](https://github.com/rust-lang/cargo/pull/9404)
- [rustdoc: remove most fields from `ExternalCrate`](https://github.com/rust-lang/rust/pull/84457)
- [clippy: refactor MSRV aliases](https://github.com/rust-lang/rust-clippy/pull/7137)
- [clippy: finish MSRV for `cloned_instead_of_copied`](https://github.com/rust-lang/rust-clippy/pull/7134)
- [clippy: `manual_unwrap_or`: fix invalid code suggestion due to macro expansion](https://github.com/rust-lang/rust-clippy/pull/7136)
- [clippy: `cloned_instead_of_copied` MSRV](https://github.com/rust-lang/rust-clippy/pull/7129)
- [clippy: add `flat_map_option` lint](https://github.com/rust-lang/rust-clippy/pull/7101)
- [clippy: `unused_io_amount` detects `.read().ok()?`](https://github.com/rust-lang/rust-clippy/pull/7100)
- [clippy: add lint to check for boolean comparison in assert macro calls](https://github.com/rust-lang/rust-clippy/pull/7083)

## Rust Compiler Performance Triage

有一个星期没有任何退步和 2 个小改进总是很高兴 🎉🎉。

分流由 **@rylev**。修订范围：[6df26f8..537544](https://perf.rust-lang.org/?start=6df26f897cffb2d86880544bb451c6b5f8509b2d&end=537544b1061467ee4b74ef7f552fab3d513e5caf&absolute=false&stat=instructions%3Au)

0 退步，2 改进，0 混合

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [rfc: reserved prefixes in the 2021 edition](https://github.com/rust-lang/rfcs/pull/3101)
- \[disposition: postpone] [enum variant types](https://github.com/rust-lang/rfcs/pull/2593)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [add default search path to `target::search()`](https://github.com/rust-lang/rust/pull/83800)
- \[disposition: merge] [parser: remove support for inner attributes on non-block expressions](https://github.com/rust-lang/rust/pull/83312)
- \[disposition: merge] [跟踪问题：{hashmap,btreemap}::into\_{keys,values}](https://github.com/rust-lang/rust/issues/75294)

## New RFCs

- [Add bitfields support](https://github.com/rust-lang/rfcs/pull/3113)
- [A new prelude for the 2021 edition (trait-only edition)](https://github.com/rust-lang/rfcs/pull/3114)

# Quote of the Week

> 此错误消息是不真实的

– [Ash 2X3 on Twitter](https://twitter.com/ash2x3/status/1384986537167892483)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1046) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/n0t8mm/this_week_in_rust_388/)</small>
