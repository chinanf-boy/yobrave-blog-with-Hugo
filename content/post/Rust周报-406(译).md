---
title: "Rust周报 406(译)"
date: 2021-09-04T10:11:32+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-406"
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
- 日期：2021-09-01
- [原文：406 期](https://this-week-in-rust.org/blog/2021/09/01/this-week-in-rust-406/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls)

## Updates from Rust Community

### Newsletters

- [RiB Newsletter #27](https://rustinblockchain.org/newsletters/rib-newsletter-27/)

### Project/Tooling Updates

- [Rust Analyzer Changelog #92](https://rust-analyzer.github.io/thisweek/2021/08/30/changelog-92.html)
- [IntelliJ Rust Changelog #154](https://intellij-rust.github.io/2021/08/30/changelog-154.html)
- [GCC Rust Monthly Report #9 August 2021](https://thephilbert.io/2021/08/30/gcc-rust-monthly-report-9-august-2021/)
- [Bebop v2.3.0: Adding Rust support to Bebop serialization](https://rainway.com/blog/2021/08/30/bebop-rust/)
- [partial-borrow: derive macro 语法，制造 一个 'struct' 的多个引用 (maybe mut)](https://diziet.dreamwidth.org/9019.html)
- [Zellij 0.16.0 released: new UI, many bugfixes and more!](https://zellij.dev/news/new-ui/)
- [Knurling-rs changelog #30](https://ferrous-systems.com/blog/knurling-changelog-30/)
- [SixtyFPS (GUI crate) weekly update](https://sixtyfps.io/thisweek/2021-08-30.html)
- [This week in Fluvio #4: the programmable streaming platform](https://www.fluvio.io/news/this-week-in-fluvio-0004/)
- [This week in Datafuse #5](https://datafuselabs.github.io/weekly/2021-09-01-datafuse-weekly/)
- \[Tauri] [feature freeze](https://dev.to/tauri/tauri-feature-freeze-and-security-audit-1ml1),[Community Survey](https://tripetto.app/run/YV22XNAJBK)

### Observations/Thoughts

- [Game engine beginner - First look at Bevy - What is ECS and why should you care?](https://radim.xyz/project/agent_tag_bevy/)
- [An Alternative Syntax for Async Functions](https://ibraheem.ca/writings/an-alternative-async-fn-syntax/)
- [Development Cost of 将 TensorFlow 模型，移植到纯粹的 Rust 代码](https://www.crowdstrike.com/blog/development-cost-of-porting-tensorflow-models-to-pure-rust/)

### Rust Walkthroughs

- [Rust Option and Result](https://saidvandeklundert.net/learn/2021-09-01-rust-option-and-result/)
- [Asynchronous Rust: basic concepts](https://dev.to/rogertorres/asynchronous-rust-basic-concepts-44ed)
- [Rust Visualized: Pointers as References](https://dev.to/ender_minyard/rust-visualized-pointers-as-references-23cg)
- [Password auth in Rust, from scratch - Attacks and best practices](https://www.lpalmieri.com/posts/password-authentication-in-rust/)
- [Building an LC-3 virtual machine in Rust](https://www.rodrigoaraujo.me/posts/lets-build-an-lc-3-virtual-machine/)
- [Combining Axum, Hyper, Tonic, and Tower for hybrid web/gRPC apps: Part 1](https://www.fpcomplete.com/blog/axum-hyper-tonic-tower-part1/)
- \[video] [getting started with rust programming language 🦀 2021: 5. refactoring the cli app in rust](https://www.youtube.com/watch?v=LHPV3z9OSic)
- \[video] [crust of rust: async/await](https://www.youtube.com/watch?v=ThjvMReOXYM)
- \[video] [concurrency in rust - sharing state](https://www.youtube.com/watch?v=mupwF9jbVZ4)

### Miscellaneous

- [Struct Update Syntax in Rust](https://www.reddit.com/r/rust/comments/pchp8h/media_struct_update_syntax_in_rust/)
- [htsget-rs: Bioinformatic file formats accessible to the web, 100% Rust, a GSoC2021 project wrap-up](https://umccr.org/blog/htsget-rs/)
- [cold_iron: A Brief Introduction to Nanothaumaturgy](https://static.stillinbeta.com/cold-iron/cold_iron/)

## Crate of the Week

本周的箱子是[cargo-llvm-cov](https://github.com/taiki-e/cargo-llvm-cov)，用于基于 LLVM 的代码，覆盖率的 cargo 子命令。

谢谢[Jacob Pratt](https://users.rust-lang.org/t/crate-of-the-week/2704/948)的建议。

[Please submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

- [cdrs-tokio road to performance and testing](https://www.reddit.com/r/rust/comments/pfuwhf/help_wanted_cdrstokio_road_to_performance_and/)
- [RoaringBitmap/roaring-rs - The insert_range method does not properly handle boundary condition](https://github.com/RoaringBitmap/roaring-rs/issues/113)
- [ockam-network/ockam - Ockam Vault for AWS (KMS/HSM) in Rust](https://github.com/ockam-network/ockam/issues/160)
- [ockam-network/ockam - Ockam TCP Transport using smoltcp](https://github.com/ockam-network/ockam/issues/1804)

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

296 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-08-23..2021-08-30

- [fix debugger stepping behavior with match expressions](https://github.com/rust-lang/rust/pull/87832)
- [improve liveness analysis for generators](https://github.com/rust-lang/rust/pull/84333)
- [handle match statements with non exhaustive variants in closures](https://github.com/rust-lang/rust/pull/88280)
- [`ast_lowering`: introduce `lower_span` for catching all spans entering HIR](https://github.com/rust-lang/rust/pull/88208)
- [PGO for LLVM builds on `x86_64-unknown-linux-gnu` in CI](https://github.com/rust-lang/rust/pull/88069)
- [`Cow`'ify some `pprust` methods](https://github.com/rust-lang/rust/pull/88262)
- [polonius: move to a fully hand-written parser to improve compile / iteration times](https://github.com/rust-lang/polonius/pull/173)
- [warn about unreachable code following an expression with an uninhabited type](https://github.com/rust-lang/rust/pull/85556)
- [normalize projections under binders](https://github.com/rust-lang/rust/pull/85499)
- [stabilize and document `--force-warn`](https://github.com/rust-lang/rust/pull/87472)
- [stabilise `BufWriter::into_parts`](https://github.com/rust-lang/rust/pull/88299)
- [add `Cell::as_array_of_cells`](https://github.com/rust-lang/rust/pull/87944)
- [add `Saturating` type (based on `Wrapping` type)](https://github.com/rust-lang/rust/pull/87921)
- [stdarch: update codegen for simd wasm intrinsics with LLVM 13](https://github.com/rust-lang/stdarch/pull/1203)
- [futures: add `Peekable::`{`peek_mut`, `poll_peek_mut`}](https://github.com/rust-lang/futures-rs/pull/2488)
- [cargo: show description of well known subcommands (fmt, clippy) in `cargo --list`](https://github.com/rust-lang/cargo/pull/9848)
- [clippy: fix `option_if_let_else`](https://github.com/rust-lang/rust-clippy/pull/7573)
- [clippy: add `module_style` lint to style](https://github.com/rust-lang/rust-clippy/pull/7543)
- [clippy: don't report function calls as unnecessary operation if used in array index](https://github.com/rust-lang/rust-clippy/pull/7453)

### Rust Compiler Performance Triage

非常忙碌的一周，退步和改进的数量相对均匀（尽管，改进超过了退步）。最大的胜利是在 x86_64 linux builds 上，使用了配置文件引导优化（profile-guided optimization） (PGO) ，这为现实世界的 crate 带来了相当大的改进。有 2 个退步（~3.5%）需要调查的，导致实际 crate 相当大的退步。

分流完成 **@rylev**.修订范围：[33fdb..fe379](https://perf.rust-lang.org/?start=33fdb797f59421c7bbecaa4588ed5d7a31a9494a&end=fe37929e4cba2c5c21e6805805769630c736bc3d&absolute=false&stat=instructions%3Au)

5 个退步，4 个改进，5 个混合；其中 0 个在汇总中 总共进行了 56 次比较

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-09-01.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/f

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: close] [Proposal: Else clauses for for and while loops](https://github.com/rust-lang/rfcs/pull/3163)
- \[disposition: close] [RFC: let-expression](https://github.com/rust-lang/rfcs/pull/3159)
- \[disposition: merge] [Scrape code examples from examples/ directory for Rustdoc](https://github.com/rust-lang/rfcs/pull/3123)
- \[disposition: merge] [Rust-lang crate ownership policy](https://github.com/rust-lang/rfcs/pull/3119)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Partially stabilize array_methods](https://github.com/rust-lang/rust/pull/88353)
- \[disposition: merge] [Stabilize std::os::unix::fs::chroot](https://github.com/rust-lang/rust/pull/88177)
- \[disposition: merge] [Stabilize reserved prefixes](https://github.com/rust-lang/rust/issues/88140)
- \[disposition: merge] [stabilize disjoint capture in closures (RFC 2229)](https://github.com/rust-lang/rust/issues/88126)
- \[disposition: merge] [Stabilize try_reserve](https://github.com/rust-lang/rust/pull/87993)
- \[disposition: merge] [Support #[track_caller] on closures and generators](https://github.com/rust-lang/rust/pull/87064)

# Quote of the Week

> 总之，当标准库文档说：“去看看 nomicon 吧 ”
> 然后 nomicon 说：“这里是有一些建议，但最终版本，我们是不知道的，也许可以看看 UCG ”
> 然后 UCG（ Unsafe Code Guidelines） 说：“最终版本，我们不知道它可能是怎样的，因为还没有 RFC”\
> 然后 Ralf（rust 研究员/发起者） 说：“如果布局匹配，可能会有吧”。

– [Lokathor on the Rust Zulip](https://rust-lang.zulipchat.com/#narrow/stream/131828-t-compiler/topic/rustc.20warn.20against.20repr.20rust.20transmutes/near/250735818)

Thanks to [Riccardo D'Ambrosio](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1097) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/pgv2zq/this_week_in_rust_406/)</small>
