---
title: "Rust周报 382(译)"
date: 2021-03-21T15:15:37+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-380"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-03-17
- [原文：382 期](https://this-week-in-rust.org/blog/2021/03/17/this-week-in-rust-382/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

_本周没有官方博客文章_

### Newsletters

_本周没有新闻通讯_

### Project/Tooling Updates

- [MiniWASM - Rust WebAssembly 项目模板极简版](https://github.com/thedjinn/MiniWASM)
- [Stepper 0.5 (formerly Step/Dir) - Universal Stepper Motor Interface](https://flott-motion.org/news/stepper-0-5/)
- [Rust Analyzer Changelog #68](https://rust-analyzer.github.io/thisweek/2021/03/15/changelog-68.html)
- [IntelliJ Rust Changelog #143](https://intellij-rust.github.io/2021/03/16/changelog-143.html)

### Observations/Thoughts

- [Starship —— Rust 写成的 shell prompt (项目创建者采访)](https://console.dev/qa/starship-matan-kushner/)
- [Rust vs. Go: 一起会更强](https://thenewstack.io/rust-vs-go-why-theyre-better-together/?s=09)
- [Cranelift, Part 3: Correctness in Register Allocation](https://cfallin.org/blog/2021/03/15/cranelift-isel-3/)
- [Making Great Docs with Rustdoc](https://www.tangramvision.com/blog/making-great-docs-with-rustdoc)
- [Writing a Postgres SQL Pretty Printer in Rust: Part 1](https://blog.urth.org/2021/03/14/writing-a-postgres-sql-pretty-printer-in-rust-part-1/)
- [Data Manipulation: Polars vs Rust](https://able.bio/haixuanTao/data-manipulation-polars-vs-rust--3def44c8)

### Rust Walkthroughs

- [OS in Rust: Incorporate VGA buffer: Part-7](https://blog.knoldus.com/os-in-rust-incorporate-vga-buffer-part-7/)
- [Rust Koans（启蒙）](https://github.com/crazymykl/rust-koans)
- [How to send emails with Rust](https://kerkour.com/blog/rust-send-email/)
- [Writing Pong in Rust for my OS](https://blog.stephenmarz.com/2021/02/22/writing-pong-in-rust/)
- [Arenas in Rust](https://manishearth.github.io/blog/2021/03/15/arenas-in-rust/)
- [永不下线的部署](https://www.lpalmieri.com/posts/zero-downtime-deployments/)
- [Deploy A Rust Website on Heroku](https://dev.to/xinnks/deploy-a-rust-website-on-heroku-1l45)
- [One enum to rule them all](https://www.jakobmeier.ch/blogging/Enums.html)
- [Writing a 3D Shooter using rg3d - #3 - Bots, AI](https://rg3d.rs/tutorials/2021/03/11/tutorial3.html)
- [Developing High Performance Apache Cassandra™ Applications in Rust (Part 1)](https://www.datastax.com/blog/2021/03/developing-high-performance-apache-cassandra-applications-rust-part-1)
- [Strings in Rust](https://bes.github.io/blog/rust-strings/)
- [Rust - Reqwest examples](https://dev.to/pintuch/rust-reqwest-examples-10ff)
- [libp2p tutorial: Build a peer-to-peer app in Rust](https://blog.logrocket.com/libp2p-tutorial-build-a-peer-to-peer-app-in-rust/)
- \[video] [rust for beginners - watch me code the rustlings tutorial](https://www.youtube.com/playlist?list=PLauX9TuJ8sfyaLPZ1udS3zS_V9YXdsbtc)
- \[video] [crust of rust: the drop check (live edition)](https://www.youtube.com/watch?v=Das3XSWo1GU)

### Papers and Research Projects

\*_本周没有论文和研究项目_

### Miscellaneous

- [rkyv 更快哦，比起 {bincode, capnp, cbor, flatbuffers, postcard, prost, serde_json} 来说](https://davidkoloski.me/blog/rkyv-is-faster-than/)
- [100ms delays with Rust on Lambda](https://www.peakscale.com/100ms-gotcha/)
- [Speed of Rust vs C](https://kornel.ski/rust-c-speed)
- [Rust Playground At Your Fingertips](https://www.greyblake.com/blog/2021-03-12-rust-playground-at-your-fingertips/)
- [totally_safe_transmute, 一行一行地瞧](https://blog.yossarian.net/2021/03/16/totally_safe_transmute-line-by-line)
- [Rust Graphics Crates](https://github.com/ocboogie/rust-graphics-crates)
- [C++ to Rust - or how to render your mindset](https://jduchniewicz.com/posts/2021/02/c-to-rust-or-how-to-render-your-mindset/#introduction)
- [在线调查，有钱拿: Rust Programmers’ Experience and Challenges](https://www.personal.psu.edu/suz305/recruitment-twir.html)

# Crate of the Week

这周的箱子是[ibig](https://github.com/tczajka/ibig-rs)，快速的大整数。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/889)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [delta-rs has many good first issues for those who want to learn Delta Lake or Rust](https://github.com/delta-io/delta-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- [dotenv-linter has many good first issues](https://github.com/dotenv-linter/dotenv-linter/issues/390)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 365 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-03-08..2021-03-15

- [expand: 如无必要，不要分配 `Lrc` for `allow_internal_unstable` list](https://github.com/rust-lang/rust/pull/82422)
- [account for `if (let pat = expr) {}`](https://github.com/rust-lang/rust/pull/82854)
- [introduce `proc_macro_back_compat` lint, and emit for `time-macros-impl`](https://github.com/rust-lang/rust/pull/83127)
- [急切地构建 bodies of THIR](https://github.com/rust-lang/rust/pull/82495)
- [store HIR attributes in a side table](https://github.com/rust-lang/rust/pull/79519)
- [add `StatementKind::CopyNonOverlapping`](https://github.com/rust-lang/rust/pull/77511)
- [tweaks to stable hashing](https://github.com/rust-lang/rust/pull/83064)
- [`rustc_query_system`: 简化 `QueryCache::iter`](https://github.com/rust-lang/rust/pull/83069)
- [mir-opt-level 4 is the new 3](https://github.com/rust-lang/miri/pull/1737)
- [miri: 确保我们捕捉到不正确的 unwinding calls](https://github.com/rust-lang/miri/pull/1744)
- [miri: 检查被调用者 ABI，when Miri calls closures](https://github.com/rust-lang/miri/pull/1743)
- [不要用 `mem::swap`，去实现 `mem::replace`](https://github.com/rust-lang/rust/pull/83022)
- [使用 `copy_file_range` ，修复 `io::copy` specialization，when writer was opened with `O_APPEND`](https://github.com/rust-lang/rust/pull/82417)
- [added `#[repr(transparent)]` to `core::cmp::Reverse`](https://github.com/rust-lang/rust/pull/81879)
- [add `Option::get_or_default`](https://github.com/rust-lang/rust/pull/82849)
- [implement `Extend` and `FromIterator` for `OsString`](https://github.com/rust-lang/rust/pull/82121)
- [improve `sift_down` performance in `BinaryHeap`](https://github.com/rust-lang/rust/pull/81127)
- [fix leak in `Vec::extend_from_within`](https://github.com/rust-lang/rust/pull/82760)
- [regex: 在本质上，减少 regex stack size](https://github.com/rust-lang/regex/pull/752)
- [clippy: implement new lint: `if_then_some_else_none`](https://github.com/rust-lang/rust-clippy/pull/6859)

## Rust Compiler Performance Triage

正面的，但安静的一周。许多性能改善，尽管都是从以前的退步中获得的。我们需要继续关注汇总，因为有两个汇总引起了小的性能变化。

分流由 **@rylev** 。修订范围：[edeee..86187](https://perf.rust-lang.org/?start=edeee915b1c52f97411e57ef6b1a8bd46548a37a&end=861872bc453bde79b83ff99d443d035225f10e87&absolute=false&stat=instructions%3Au)

1 个退步，4 个改进，1 个混合

其中 2 个汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: Declarative macro metavariable expressions](https://github.com/rust-lang/rfcs/pull/3086)
- [Change visibility scoping rules for macro_rules macros](https://github.com/rust-lang/rfcs/pull/3067)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [rustdoc: allow list syntax for #[doc(alias)] attributes](https://github.com/rust-lang/rust/pull/82846)
- \[disposition: merge] [Deprecate `doc(include)`](https://github.com/rust-lang/rust/pull/82539)
- \[disposition: merge] [Stabilize or_patterns (RFC 2535, 2530, 2175)](https://github.com/rust-lang/rust/pull/79278)
- \[disposition: merge] [Add IEEE 754 compliant fmt/parse of -0, infinity, NaN](https://github.com/rust-lang/rust/pull/78618)
- \[disposition: close] [`impl<A, B>` IntoIterator for (A, B) as Zip](https://github.com/rust-lang/rust/pull/78204)
- \[disposition: merge] [跟踪问题： `debug_non_exhaustive` feature](https://github.com/rust-lang/rust/issues/67364)
- \[disposition: close] [[Edition vNext] Consider deprecating weird nesting of items](https://github.com/rust-lang/rust/issues/65516)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 我认为互联网的安全性显然非常重要，我希望它的安全性，并且我认为 Rust 一定会有所帮助。默认情况下，它消除了一些最经典的漏洞类型。
>
> 但是我认为这不是最令人兴奋的部分。我认为最令人兴奋的部分是可以实现这些类型的事情的那部分人，例如，是哪个谁编写 coreutils，那个谁编写 curl，那个谁做到那样这样事情。这些人，曾经仅仅是小数。他们一定是那些了解黑暗艺术的人 —— 只有他们，或他们的好友或其他。
>
> 而 **Rust 的目标，让这个人群壮大**并且最终...

> 我认为这时将要发生的事情。这意味着’纯粹‘的人数将会更多，并且那一群人的多样性也将不断增长。而且我认为，与消除 undefined behaviour 相比，这实际上可能会为工具的安全性和实用性做更多的事情。

– [Ashley Williams on twitch](https://www.twitch.tv/videos/946905598) (quote starts at 46:48)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1014) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/m7fy87/this_week_in_rust_382/)</small>
