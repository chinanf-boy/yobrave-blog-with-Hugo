---
title: "Rust周报 377(译)"
date: 2021-02-13T09:09:52+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-377"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-02-10
- [原文：377 期](https://this-week-in-rust.org/blog/2021/02/10/this-week-in-rust-377/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- \[Foundation] [hello world!](https://foundation.rust-lang.org/posts/2021-02-08-hello-world/)
- \[Inside] [1.50.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/02/09/1.50.0-prerelease.html)

### Newsletters

- [This Month in Rust GameDev #18 - January 2021](https://rust-gamedev.github.io/posts/newsletter-018/)
- [This Month in Rust OSDev (January 2021)](https://rust-osdev.com/this-month/2021-01/)

### Project/Tooling Updates

- [rust-analyzer Changelog #63](https://rust-analyzer.github.io/thisweek/2021/02/08/changelog-63.html)
- [Launching wasm.rs: a collection of crates, a community](https://yrashk.medium.com/launching-wasm-rs-a-collection-of-crates-a-community-4344d2ba75b3)
- [A Memory Safe TLS Module for the Apache HTTP Server](https://www.abetterinternet.org/post/memory-safe-tls-apache/)

### Observations/Thoughts

- [对 Tokio Tasks 和 Goroutines 进行基准测试](https://www.reddit.com/r/rust/comments/lg0a7b/benchmarking_tokio_tasks_and_goroutines/)
- [A Better Rust 分析器](https://matklad.github.io/2021/02/10/a-better-profiler.html)
- [An unsafe tour of Rust's Send and Sync](https://nyanpasu64.github.io/blog/an-unsafe-tour-of-rust-s-send-and-sync/)
- [Improving texture atlas allocation（纹理图分配） in WebRender](https://nical.github.io/posts/etagere.html)

### Rust Walkthroughs

- [Async Rust: Futures, Tasks, Wakers; Oh My!](https://msarmi9.github.io/posts/async-rust/)
- [Rust for Haskell Programmers!](https://mmhaskell.com/rust)
- [Rust CLI Game of Life tutorial - Part 1](https://dev.to/jbarszczewski/rust-cli-game-of-life-tutorial-part-1-57pp)
- [Where everything went wrong...](https://msirringhaus.github.io/Where-everything-went-wrong/)
- [Rust for Clojurists](https://gist.github.com/oakes/4af1023b6c5162c6f8f0)
- \[ES] [el formato ron: rusty object notation](https://blog.adrianistan.eu/formato-ron-rusty-object-notation)
- \[video] [1password developer fireside chat: introduction to rust macros](https://youtu.be/Lh262L63asA)
- \[video] [dynamic vs static dispatch in rust](https://youtu.be/tM2r9HD4ivQ)

### Miscellaneous

- [Congratulations, Rustaceans, on the creation of the Rust Foundation!](https://aws.amazon.com/blogs/opensource/congratulations-rustaceans-on-the-creation-of-the-rust-foundation/)
- [Microsoft joins Rust Foundation](https://cloudblogs.microsoft.com/opensource/2021/02/08/microsoft-joins-rust-foundation/)
- [Google joins the Rust Foundation](https://opensource.googleblog.com/2021/02/google-joins-rust-foundation.html)
- [Mozilla Welcomes the Rust Foundation](https://blog.mozilla.org/blog/2021/02/08/mozilla-welcomes-the-rust-foundation/)
- [Trusted Programming - Our Rust Mission at Huawei](https://trusted-programming.github.io/2021-02-07/index.html)
- [YSK: VSCode's most recent update fixed a quirk in Rust workflows](https://www.reddit.com/r/rust/comments/lgccv5/ysk_vscodes_most_recent_update_fixed_a_quirk_in/)
- [curl supports rustls](https://daniel.haxx.se/blog/2021/02/09/curl-supports-rustls/)
- [Architecting Artichoke Ruby: A Modular Ruby implementation written in Rust](https://github.com/artichoke/artichoke/blob/21045d8f1086c669dd428a3b5bdcc4a58e13acec/ARCHITECTURE.md)
- \[video] [interview with ashley williams, rust foundation interim executive director (part 1)](https://youtu.be/h-LoPr5553o)

# Crate of the Week

这周的箱子是[threadIO](https://crates.io/crates/thread_io)，让后台线程中磁盘 IO，简单且优雅 的箱子。

谢谢[David Andersen](https://users.rust-lang.org/t/crate-of-the-week/2704/881)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

紫红色有几个可用的问题：

- [\[netstack3\] ARP: Add tests for ARP on a broadcast medium](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=34979)
- [\[netstack3\] Migrate all transport protocols to trait associated types](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=48364)
- [\[netstack3\] Split IpProto into Ipv4Proto and Ipv6NextHeader](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=47454)
- [\[net-types\] Add common prefix length calculation for IP addresses](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=47008)
- [\[netstack3\] Make sure ICMP messages are not sent in response to non-initial fragment packets](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=21432)
- [\[internet-checksum\] Clarify documentation around odd byte lengths](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=69355)
- [\[netstack3\] IP fragment reassembly vulnerable to FragmentSmack](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=50830)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 384 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-02-01..2021-02-08

- [add AArch64 big-endian and ILP32 targets](https://github.com/rust-lang/rust/pull/81455)
- [improve handling of spans around macro result parse errors](https://github.com/rust-lang/rust/pull/81608)
- [identify unreachable subpatterns more reliably](https://github.com/rust-lang/rust/pull/80632)
- [fix issues：move closures and mutability](https://github.com/rust-lang/rust/pull/80092)
- [const_evaluatable: 考虑让 sub-expressions to be evaluatable](https://github.com/rust-lang/rust/pull/81577)
- [introduce future-compatibility warning for forbidden lint groups](https://github.com/rust-lang/rust/pull/81556)
- [`Box` the biggest `ast::ItemKind` variants](https://github.com/rust-lang/rust/pull/81405)
- [改善错误信息：disallowed ptr-to-int casts in const eval](https://github.com/rust-lang/rust/pull/81779)
- [typeck: emit structured suggestions for tuple struct syntax](https://github.com/rust-lang/rust/pull/81737)
- [faster few span methods](https://github.com/rust-lang/rust/pull/81735)
- [fix bug with `assert!()` - 调用错误版本的`panic!()`](https://github.com/rust-lang/rust/pull/81647)
- [make `Allocator` object-safe](https://github.com/rust-lang/rust/pull/81730)
- [add Frames Iterator for Backtrace](https://github.com/rust-lang/rust/pull/81022)
- [add `Vec::extend_from_within` method under `vec_extend_from_within` feature gate](https://github.com/rust-lang/rust/pull/79015)
- [`BTreeMap`: make `Ord` bound explicit, compile-test its absence](https://github.com/rust-lang/rust/pull/81610)
- [implement `TrustedLen` for `Fuse<I: TrustedLen>`](https://github.com/rust-lang/rust/pull/81599)
- [rename `Iterator::fold_first` to `reduce` and stabilize it](https://github.com/rust-lang/rust/pull/79805)
- [稳定化：the `Wake` trait](https://github.com/rust-lang/rust/pull/74304)
- [稳定化：`peekable_next_if`](https://github.com/rust-lang/rust/pull/80011)
- [稳定化：poison API of `Once`, rename `poisoned()`](https://github.com/rust-lang/rust/pull/81745)
- [稳定化：将 integer methods 保留为 `const fn`](https://github.com/rust-lang/rust/pull/80962)
- [futures-rs: avoid `once_cell` in static wakers](https://github.com/rust-lang/futures-rs/pull/2332)
- [hashbrown: implement `From<HashMap<T, ()>>` for `HashSet<T>`](https://github.com/rust-lang/hashbrown/pull/235)
- [cargo: fix panic with doc collision orphan](https://github.com/rust-lang/cargo/pull/9142)
- [cargo: 修复 env/cfg set for `cargo test` and `cargo run`](https://github.com/rust-lang/cargo/pull/9122)
- [让 rustdoc 遵循 `--error-format short` in doctests](https://github.com/rust-lang/rust/pull/81675)
- [clippy: 修复 `let_underscore_drop` false positive](https://github.com/rust-lang/rust-clippy/pull/6682)
- [clippy: 修复 `let_and_return` false positive](https://github.com/rust-lang/rust-clippy/pull/6659)
- [clippy: 不触发 `exhaustive_structs` for structs with private fields](https://github.com/rust-lang/rust-clippy/pull/6661)
- [clippy: add new lint `missing_panics_doc`](https://github.com/rust-lang/rust-clippy/pull/6523)
- [compiletest: 为每个 bitwidth，添加触发 compiler stderr 的 选项](https://github.com/rust-lang/rust/pull/81817)

## Rust Compiler Performance Triage

_本周没有分类报告_

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [Rust 2021 Roadmap](https://github.com/rust-lang/rfcs/pull/3037)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [adds async stream rfc](https://github.com/rust-lang/rfcs/pull/2996)
- [RFC: add the Freeze trait to libcore/libstd](https://github.com/rust-lang/rfcs/pull/2944)
- [Generic Pointer to Field](https://github.com/rust-lang/rfcs/pull/2708)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [允许 前缀 | anywhere we allow or-patterns](https://github.com/rust-lang/rust/issues/81415)
- \[disposition: merge] [`impl PartialEq<Punct> for char`; symmetry for #78636](https://github.com/rust-lang/rust/pull/80595)
- \[disposition: merge] [add an impl of Error on `Arc<impl Error>`.](https://github.com/rust-lang/rust/pull/80553)
- \[disposition: merge] [add `NotSupported` to `std::io::ErrorKind`](https://github.com/rust-lang/rust/pull/78880)
- \[disposition: merge] [跟踪问题： `Option::expect_none(msg)` and `unwrap_none()`](https://github.com/rust-lang/rust/issues/62633)

## New RFCs

- [Add named path bases to cargo](https://github.com/rust-lang/rfcs/pull/3074)

# Quote of the Week

> Rust 的主题*不是*系统编程，速度或内存安全性 —— 而是它将运行时问题转移到编译时上。其他一切都是偶然的。这是作为一种语言的宝贵品质，也是 Rust 出色的一面。

– [/u/OS6aDohpegavod4 on /r/rust](https://www.reddit.com/r/rust/comments/leki5o/advantages_of_building_a_crud_web_application_in/gmfq2w9/)

Thanks to [Chris](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1001) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/lhe7yi/this_week_in_rust_377/)</small>
