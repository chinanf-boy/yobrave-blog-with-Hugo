---
title: "Rust周报 385(译)"
date: 2021-04-09T22:33:11+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-385"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-04-07
- [原文：385 期](https://this-week-in-rust.org/blog/2021/04/07/this-week-in-rust-385/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有论文/研究项目。

### Official

- \[Inside] [core team updates](https://blog.rust-lang.org/inside-rust/2021/04/03/core-team-updates.html)
- \[Foundation] [introducing peixin hou](https://foundation.rust-lang.org/posts/2021-04-08-introducing-peixin-hou/)
- \[Foundation] [introducing florian gilcher](https://foundation.rust-lang.org/posts/2021-04-08-introducing-florian-gilcher/)

### Newsletters

- [This Month in Rust OSDev (March 2021)](https://rust-osdev.com/this-month/2021-03/)
- [RiB Newsletter #22 - A few tweaks](https://www.reddit.com/r/rust/comments/mhmfu9/rib_newsletter_22_a_few_tweaks/)

### Project/Tooling Updates

- [GCC Rust Monthly Report #4 March 2021](https://thephilbert.io/2021/04/02/gcc-rust-monthly-report-4-march-2021/)
- [mrustc upgrade: rustc 1.39.0](https://www.reddit.com/r/rust/comments/mjxbaz/mrustc_upgrade_rustc_1390/)
- [rust-analyzer Changelog #71](https://rust-analyzer.github.io/thisweek/2021/04/05/changelog-71.html)
- [A new Left Recursive PEG Parser Generator for rust](https://www.mess.org/2021/03/26/Left-Recursive-PEG-Parser-Generator/)
- [Last Month in Flott (Motion Control Toolkit in Rust) - April 2021](https://flott-motion.org/news/last-month-in-flott-april-2021/)
- [Recent updates in IntelliJ Rust](https://blog.jetbrains.com/rust/2021/04/08/intellij-rust-updates-for-2021-1/)
- [Bevy 0.5](https://bevyengine.org/news/bevy-0-5/)

### Observations/Thoughts

- [将一个底层 actor system ，接口化 Rust async/await, part 1](https://uazu.github.io/blog/20210406.html)
- [A Tour of Safe Tracing GC Designs in Rust](https://manishearth.github.io/blog/2021/04/05/a-tour-of-safe-tracing-gc-designs-in-rust/)
- [How I Used Rust + Lunatic to Build a TelNet Chat Server with WebAssembly](https://www.hackernoon.com/how-i-used-rust-lunatic-to-build-a-telnet-chat-server-with-webassembly-rb3l33cg)
- [Eliminating Data Races in Firefox - 技术报告](https://hacks.mozilla.org/2021/04/eliminating-data-races-in-firefox-a-technical-report/)
- [First-class IO](https://blog.sunfishcode.online/first-class-io/)
- [The modern packager's 安全噩梦](https://blogs.gentoo.org/mgorny/2021/02/19/the-modern-packagers-security-nightmare/)
- [Ordering Requests 去加速 I/O](https://pkolaczk.github.io/disk-access-ordering/)
- [检查异常小文章 in Rust](https://users.rust-lang.org/t/an-essay-of-checked-exceptions-in-rust/57769)
- [奇怪架构就不应开始](https://blog.yossarian.net/2021/02/28/Weird-architectures-werent-supported-to-begin-with)
- \[video] [I tried learning OpenGL in 7 days - using Rust](https://youtu.be/KEQIWqSq42k)

### Rust Walkthroughs

- [How we built our Python Client that's mostly Rust](https://www.fluvio.io/blog/2021/03/python-client/)
- [Hello world with KAS GUI](https://kas-gui.github.io/tutorials/hello.html)
- [How to create small Docker images for Rust](https://kerkour.com/blog/rust-small-docker-image/)
- [Oxidizing the Kubernetes Operator](https://www.pavel.cool/rust/rust-kubernetes-operators/)
- [Sending tuples from Node to Rust and back](https://www.fluvio.io/blog/2021/04/node-bindgen-tuples/)
- [Getting started with Kafka and Rust: Part 1](https://dev.to/abhirockzz/getting-started-with-kafka-and-rust-part-1-4hkb)
- [A Beginner's Guide to Handling Errors in Rust](https://dev.to/seanchen1991/a-beginner-s-guide-to-handling-errors-in-rust-40k2)
- [Using Seahorn](https://project-oak.github.io/rust-verification-tools/using-seahorn/)
- [Asynchronous streams in Rust (part 1) - Futures, buffering 和神秘的编译错误信息](https://gendignoux.com/blog/2021/04/01/rust-async-streams-futures-part1.html)
- \[series] [what would sqlite look like if written in rust? — part 3](https://medium.com/the-polyglot-programmer/what-would-sqlite-look-like-if-written-in-rust-part-3-edd2eefda473)
- \[video] [return a value from a function in rust](https://www.youtube.com/watch?v=YNSg7g46Hso)
- \[video] [crust of rust: atomics and memory ordering](https://youtu.be/rMGWeSjctlY)
- \[video] [async/await in rust: introduction](https://youtu.be/FNcXf-4CLH0)
- \[video] [openvehiclediag rust live coding with macchina's a0!!](https://youtu.be/zjAe-uvKMJ4)
- \[video] [series] [Easy Rust - learn to program in Rust with simple English](https://youtube.com/playlist?list=PLfllocyHVgsRwLkTAhG0E-2QxCf-ozBkk)

### Miscellaneous

- [best-of-ml-rust: A ranked list of awesome machine learning Rust libraries](https://github.com/e-tony/best-of-ml-rust)
- [Rust in the Android platform](https://security.googleblog.com/2021/04/rust-in-android-platform.html)
- [David Tolnay - thank you](https://www.reddit.com/r/rust/comments/mify2o/david_tolnay_thank_you/)
- [My "shiny future"](https://smallcultfollowing.com/babysteps/blog/2021/04/02/my-shiny-future/)

# Crate of the Week

这周的箱子是[rs-pbrt](https://crates.io/crates/rs_pbrt)，与 PBRT 那本书（第 3 版）的 C ++代码相对应。

谢谢[Jan Walter](https://users.rust-lang.org/t/crate-of-the-week/2704/900)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [dotenv-linter has several good first issues](https://github.com/dotenv-linter/dotenv-linter/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 313 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-03-29..2021-04-05

- [修复 stack overflow detection on FreeBSD 11.1+](https://github.com/rust-lang/rust/pull/83771)
- [不允许 the use of high byte registes as operands on `x86_64`](https://github.com/rust-lang/rust/pull/83853)
- [resolve/expand: 缓存 intermediate results of `#[derive]` expansion](https://github.com/rust-lang/rust/pull/82907)
- [尽早 panic， 当 `TrustedLen` 检查出 `length > usize::MAX`](https://github.com/rust-lang/rust/pull/83726)
- [建议 `box`/`pin`/`arc`ing receiver on method calls](https://github.com/rust-lang/rust/pull/83667)
- [在 optimization passes 之前，运行 LLVM coverage instrumentation passes](https://github.com/rust-lang/rust/pull/83666)
- [简化 logical operations CFG](https://github.com/rust-lang/rust/pull/83663)
- [移除 unneeded type resolving](https://github.com/rust-lang/rust/pull/83839)
- [unaligned_references: `align(N)` fields in `packed(N)` structs are fine](https://github.com/rust-lang/rust/pull/83605)
- [防止非常久的编译运行时 in `LateBoundRegionNameCollector`](https://github.com/rust-lang/rust/pull/83406)
- [减少，那么没有任何分配的 `Vec::reserve` calls 的影响](https://github.com/rust-lang/rust/pull/83357)
- [BTree: 不再两次 search arrays，to check `Ord`](https://github.com/rust-lang/rust/pull/83267)
- [stream the dep-graph to a file，而不是 storing it in-memory](https://github.com/rust-lang/rust/pull/82780)
- [implement `SourceIterator` and `InPlaceIterable` for `ResultShunt`](https://github.com/rust-lang/rust/pull/81619)
- [optimize jumps in `PartialOrd::le`](https://github.com/rust-lang/rust/pull/83819)
- [`ffi::c_str` removed bound checks on `as_bytes`, `to_bytes`](https://github.com/rust-lang/rust/pull/83609)
- [added `as_slice` method to `BinaryHeap` collection](https://github.com/rust-lang/rust/pull/82331)
- [use `#[inline(always)]` on trivial `UnsafeCell` methods](https://github.com/rust-lang/rust/pull/83858)
- [add `#[inline]` to `IpAddr` methods](https://github.com/rust-lang/rust/pull/83831)
- [不允许 octal format in Ipv4 string](https://github.com/rust-lang/rust/pull/83652)
- [constify methods of `std::net::SocketAddr`, `SocketAddrV4` and `SocketAddrV6`](https://github.com/rust-lang/rust/pull/82487)
- [constify some slice methods](https://github.com/rust-lang/rust/pull/83571)
- [stdsimd: add saturating abs/neg](https://github.com/rust-lang/stdsimd/pull/87)
- [hashbrown: make `RawTable::insert_no_grow` unsafe](https://github.com/rust-lang/hashbrown/pull/254)
- [cargo: add cargo config subcommand](https://github.com/rust-lang/cargo/pull/9302)
- [rustdoc: only look at blanket impls in `get_blanket_impls`](https://github.com/rust-lang/rust/pull/83681)
- [rustdoc: add unstable option to only emit shared/crate-specific files](https://github.com/rust-lang/rust/pull/83478)
- [rustdoc: don't enter an `infer_ctxt` in `get_blanket_impls` for impls that aren't blanket impls](https://github.com/rust-lang/rust/pull/82864)
- [rustdoc: highlight macros more efficiently](https://github.com/rust-lang/rust/pull/83793)
- [clippy: add `non_octal_unix_permissions` lint](https://github.com/rust-lang/rust-clippy/pull/7001)
- [clippy: don't lint `manual_map` in const functions](https://github.com/rust-lang/rust-clippy/pull/6976)
- [clippy: new Lint: `needless_for_each`](https://github.com/rust-lang/rust-clippy/pull/6706)
- [clippy: new Lint: `branches_sharing_code`](https://github.com/rust-lang/rust-clippy/pull/6463)
- [clippy: lint: `filter(Option::is_some).map(Option::unwrap)`](https://github.com/rust-lang/rust-clippy/pull/6342)
- [clippy: remove author requirement for `cargo_common_metadata`](https://github.com/rust-lang/rust-clippy/pull/7026)
- [Clippy going dark: adding a dark theme to Clippy's lint list](https://github.com/rust-lang/rust-clippy/pull/7030)
- [crates.io: topologically sort `db-dump.tar.gz`](https://github.com/rust-lang/crates.io/pull/3409)
- [parallelize tidy](https://github.com/rust-lang/rust/pull/82347)

## Rust Compiler Performance Triage

相当重要的一周[内存使用情况的改进][memory usage improvements]，由于使用的默认分配器（更新为最新的 jemalloc）的更新，发布版本的内存使用平均增加了约 20％，而检查版本的内存使用平均增加了 5％。总计时间的表现，在本周基本保持不变。

整理由 **@simulacrum**。修订范围：[4896450e..d32238](https://perf.rust-lang.org/?start=4896450e7e0a522486b4d3a8d360ac4e1d2072a0&end=d32238532138485c80db4f2cd596372bce214e00&absolute=false&stat=instructions%3Au)

[memory usage improvements]: https://perf.rust-lang.org/?start=4896450e7e0a522486b4d3a8d360ac4e1d2072a0&end=d32238532138485c80db4f2cd596372bce214e00&absolute=false&stat=max-rss

1 个退步，4 个改进，0 个混合

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Declarative macro metavariable expressions](https://github.com/rust-lang/rfcs/pull/3086)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: close] [RFC: Structural Records](https://github.com/rust-lang/rfcs/pull/2584)
- \[disposition: postpone] [Hygiene opt-out (escaping) for declarative macros 2.0](https://github.com/rust-lang/rfcs/pull/2498)
- \[disposition: postpone] [RFC: Delegation](https://github.com/rust-lang/rfcs/pull/2393)
- \[disposition: close] [RFC: `#[derive_no_bound(..)]` and `#[derive_field_bound(..)]`](https://github.com/rust-lang/rfcs/pull/2353)
- \[disposition: postpone] [RFC: Eager Macro Expansion](https://github.com/rust-lang/rfcs/pull/2320)
- \\[disposition: merge] [try_trait_v2: A new design for the `?` desugaring](https://github.com/rust-lang/rfcs/pull/3058)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Remove `T: Debug` bound on UnsafeCell Debug impl](https://github.com/rust-lang/rust/pull/83707)
- \[disposition: merge] [Turn old edition lint (anonymous-parameters) into warn-by-default on 2015](https://github.com/rust-lang/rust/pull/82918)
- \[disposition: merge] [Stabilize `rustdoc::bare_urls` lint](https://github.com/rust-lang/rust/pull/81764)
- \[disposition: merge] [跟踪问题: fNN::is_subnormal](https://github.com/rust-lang/rust/issues/79288)
- \[disposition: merge] [跟踪问题： feature(nonzero_leading_trailing_zeros)](https://github.com/rust-lang/rust/issues/79143)
- \[disposition: merge] [跟踪问题： `{BTreeMap,BTreeSet}::retain`](https://github.com/rust-lang/rust/issues/79025)
- \[disposition: merge] [跟踪问题： `#![feature(const_cell_into_inner)]`](https://github.com/rust-lang/rust/issues/78729)
- \[disposition: merge] [跟踪问题： `atomic_fetch_update`](https://github.com/rust-lang/rust/issues/78639)
- \[disposition: merge] [跟踪问题： feature: "option_insert"](https://github.com/rust-lang/rust/issues/78271)
- \[disposition: merge] [跟踪问题： `Duration` saturating operations](https://github.com/rust-lang/rust/issues/76416)
- \[disposition: merge] [跟踪问题： `Duration::{zero, is_zero} (#![feature(duration_zero)])`](https://github.com/rust-lang/rust/issues/73544)
- [disposition: close] [跟踪问题： FixedSizeArray trait](https://github.com/rust-lang/rust/issues/27778)

## New RFCs

- [RFC: Reserved prefixes in the 2021 edition](https://github.com/rust-lang/rfcs/pull/3101)

# Quote of the Week

可悲的是，本周没有引用。

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/mmvkrl/this_week_in_rust_385/)</small>
