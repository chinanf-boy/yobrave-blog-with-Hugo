---
title: "Rust周报 378(译)"
date: 2021-02-21T00:10:21+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-378"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-02-17
- [原文：378 期](https://this-week-in-rust.org/blog/2021/02/17/this-week-in-rust-378/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- [Announcing Rust 1.50.0](https://blog.rust-lang.org/2021/02/11/Rust-1.50.0.html)

### Project/Tooling Updates

- [IntelliJ Rust changelog #141](https://intellij-rust.github.io/2021/02/15/changelog-141.html)
- [rust-analyzer changelog #64](https://rust-analyzer.github.io/thisweek/2021/02/15/changelog-64.html)
- [A big release for relm](https://relm.antoyo.xyz/big-release/)

### Observations/Thoughts

- [The XDG 基础目录规范 and Rust](https://blog.liw.fi/posts/2021/02/14/xdg-base-dirs-rust/)
- [Zero dependency images (of chaos) in Rust](https://state.smerity.com/smerity/state/01EYB6YQ5T2KFSC1PF55A3B8DG)
- [Examples of declarative style in Rust](https://radekvit.medium.com/examples-of-declarative-style-in-rust-9fae89c0fea)
- [Rust 2030 Christmas list: Better cfg](https://gist.github.com/PoignardAzur/8038f5ed7dc8d00e3e9472aca57fb35c)
- [For the Love of Macros](https://matklad.github.io/2021/02/14/for-the-love-of-macros.html)
- [The Tokio Upgrade from 0.2 to 1.x](https://fly.io/blog/the-tokio-1-x-upgrade/)
- [Cranelift, Part 2: Compiler Efficiency, CFGs, and a Branch Peephole Optimizer](https://cfallin.org/blog/2021/01/22/cranelift-isel-2/)
- \[audio] [building with rust: luca palmieri on truelayer and zero to production](https://anchor.fm/building-with-rust/episodes/Building-with-Rust-Luca-Palmieri-on-TrueLayer-and-Zero-to-Production-eq9rqs)
- \[audio] [chats with james 008 - yoshua wuyts](https://jamesmunns.com/podcast/008-yosh/)
- \[video] [rust 1.50 patch review](https://www.youtube.com/watch?v=C7BTIdkWreI&feature=youtu.be)

### Rust Walkthroughs

- [Actors with Tokio](https://ryhl.io/blog/actors-with-tokio/)
- [Building a microservice with Rust](https://medium.com/tenable-techblog/building-a-microservice-with-rust-23a4de6e5e14)
- [Rust is cool - Enums](https://thatgeoguy.ca/blog/2021/02/15/rust-is-cool-enums/)
- [Rust CLI Game of Life tutorial - Part 2](https://dev.to/jbarszczewski/rust-cli-game-of-life-tutorial-part-2-16j3)
- [Calling Rust from a Cloudflare Worker](https://dev.to/jldec/calling-rust-from-a-cloudflare-worker-17b4)
- [Validating JSON input with Rust web services](https://dev.to/vinted/validating-json-input-in-rust-web-services-5gp0)
- [What would SQLite look like if written in Rust? -- Part 1](https://dev.to/joaoh82/what-would-sqlite-look-like-if-written-in-rust-part-1-2np4)
- [Generalizing over Generics in Rust (Part 1) - AKA 高阶类型 in Rust](https://rustyyato.github.io/type/system,type/families/2021/02/15/Type-Families-1.html)
- [Procedural Macros: The Basics](https://blog.turbo.fish/proc-macro-basics/)
- [Building an OpenStreetMap app in Rust, Part II](https://blogg.bekk.no/building-an-openstreetmap-app-in-rust-part-ii-933ca8d0c48a)
- [Look, Ma! No JS! - Compiling Rust to WebAssembly](https://www.novatec-gmbh.de/en/blog/look-ma-no-js-compiling-rust-to-webassembly/)
- [Simple ray tracer written in Rust from scratch](https://github.com/dranikpg/simple-rays)
- [短示例合集 in Rust](https://www.fpcomplete.com/blog/short-circuit-sum-rust/)
- [Zero to Production in Rust, Part 7.1 - Skeleton And Principles For A Maintainable Test Suite](https://www.lpalmieri.com/posts/skeleton-and-principles-for-a-maintainable-test-suite/)
- [CCSS Devclub Rust Workshop（一站式 Rust 学习）](https://www.notion.so/CCSS-Devclub-Rust-Workshop-dccad2c1119d4af7bf78f3d3b4797603)
- \[video] [graphs in rust: let's build a maze!](https://youtu.be/UEAg4qCALb8)

### Miscellaneous

- [Cleora - an ultra fast graph embedding tool written in Rust](https://github.com/Synerise/cleora)
- [Cost-based query optimizations in multithreaded environments](https://vertexclique.com/cost-based-query-optimizations/)
- [Writing our own Cheat Engine: Exact Value scanning](https://lonami.dev/blog/woce-2/)
- [What would SQLite look like if written in Rust? — Part 1](https://medium.com/the-polyglot-programmer/what-would-sqlite-look-like-if-written-in-rust-part-1-4a84196c217d)

# Crate of the Week

尽管没有提名，本周的箱子还是[firestorm](https://crates.io/crates/firestorm)，一个快速的侵入式火焰图分析库。

无论如何，llogiq 对该建议感到非常满意。

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [Fuchsia - netstack3: Support stable interface IDs](https://bugs.fuchsia.dev/p/fuchsia/issues/detail?id=69644)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 340 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-02-01..2021-02-08

- [parser: fix panic in 'const impl' recovery](https://github.com/rust-lang/rust/pull/81876)
- [fix derived `PartialOrd` operators](https://github.com/rust-lang/rust/pull/81384)
- [borrowck: 将 visited map 重构为一个 bitset](https://github.com/rust-lang/rust/pull/81132)
- [添加相似的 `mut` 方法，for for loop](https://github.com/rust-lang/rust/pull/81466)
- [miri: Remove non-power-of-two SIMD vectors](https://github.com/rust-lang/miri/pull/1703)
- [chalk: add Movability to Generator](https://github.com/rust-lang/chalk/pull/685)
- [try `fast_reject::simplify_type` in coherence before doing full check（先执行一致性/统一检查，优化优化）](https://github.com/rust-lang/rust/pull/81744)
- [修复建议：introduce explicit lifetime](https://github.com/rust-lang/rust/pull/81995)
- [make suggestion of changing mutability of arguments 更广泛](https://github.com/rust-lang/rust/pull/81990)
- [optimize `Vec::retain`](https://github.com/rust-lang/rust/pull/81126)
- [make `Vec::split_at_spare_mut` public](https://github.com/rust-lang/rust/pull/81687)
- [`BTreeMap`: 解开 `Drop` implementation from `IntoIter`](https://github.com/rust-lang/rust/pull/81486)
- [直接在 heap，初始化 `BTree` nodes ](https://github.com/rust-lang/rust/pull/81494)
- [stabilize the `partition_point` feature](https://github.com/rust-lang/rust/pull/81012)
- [add `Box::into_inner`](https://github.com/rust-lang/rust/pull/80438)
- [stdsimd: add SIMD shuffles for `SimdType`{`2`, `4`, `8`, `16`, `32`, `64`}](https://github.com/rust-lang/stdsimd/pull/62)
- [stdsimd: add bitmasks and simplify mask API](https://github.com/rust-lang/stdsimd/pull/61)
- [libtest: allow multiple filters](https://github.com/rust-lang/rust/pull/81356)
- [cargo: change git dependencies to use `HEAD` by default ](https://github.com/rust-lang/cargo/pull/9133)
- [cargo: 发出警告 on env variable case mismatch](https://github.com/rust-lang/cargo/pull/9169)
- [crates.io: add `COM0` and `LPT0` to the list of 保留的 crate names](https://github.com/rust-lang/crates.io/pull/3271) (Windows users rejoice)
- [clippy: fix suggestions that need parens in `from_iter_instead_of_collect` lint](https://github.com/rust-lang/rust-clippy/pull/6657)
- [clippy: fix `missing_panics_doc` warning on `unreachable!`](https://github.com/rust-lang/rust-clippy/pull/6700)
- [clippy: fix `vec_init_then_push` false positives](https://github.com/rust-lang/rust-clippy/pull/6697)
- [clippy: downgrade `trivial_regex` to nursery](https://github.com/rust-lang/rust-clippy/pull/6696)
- [clippy: new lint: `bytes_nth`](https://github.com/rust-lang/rust-clippy/pull/6695)

## Rust Compiler Performance Triage

尽管安静的一周，但在 bootstrap 时间方面有了很大的改善，但大部分时间都是安静的，由于正在编译的代码发生了变化，因此使总数量减少了几个百分点，而 rustc_middle 减少了 10％。

分类由 @simulacrum 完成。修订范围：[ea09825..f1c47c7](https://perf.rust-lang.org/?start=ea098255f74923d69ea234ee526df6b9cecc3b9b&end=f1c47c79fe8438ed241630f885797eebef3a6cab&absolute=false&stat=instructions%3Au)

1 个退步，2 个改进，1 个混合

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Adds `must_not_suspend_lint` RFC](https://github.com/rust-lang/rfcs/pull/3014)
- [RFC: Checking conditional compilation at compile time](https://github.com/rust-lang/rfcs/pull/3013)
- [RFC: add the Freeze trait to libcore/libstd](https://github.com/rust-lang/rfcs/pull/2944)
- [Generic Pointer to Field](https://github.com/rust-lang/rfcs/pull/2708)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Make char and u8 methods const](https://github.com/rust-lang/rust/pull/82078)
- \[disposition: merge] [降阶 x86_64-rumprun-netbsd target](https://github.com/rust-lang/rust/issues/81514)
- \[disposition: merge] [`impl PartialEq<Punct> for char`; symmetry for #78636](https://github.com/rust-lang/rust/pull/80595)
- \[disposition: merge] [使 rustdoc lints 成为 a tool lint ，而不是 built-in](https://github.com/rust-lang/rust/pull/80527)
- \[disposition: merge] [Stabilize `unsafe_op_in_unsafe_fn` lint](https://github.com/rust-lang/rust/pull/79208)
- \[disposition: merge] [Add `NotSupported` to `std::io::ErrorKind`](https://github.com/rust-lang/rust/pull/78880)
- \[disposition: merge] [[librustdoc] Only split lang string on `,`, ` `, and `\t`](https://github.com/rust-lang/rust/pull/78429)
- \[disposition: merge] [Lint for unused borrows as part of `UNUSED_MUST_USE` ](https://github.com/rust-lang/rust/pull/76894)
- \[disposition: merge] [跟踪问题： str_split_once](https://github.com/rust-lang/rust/issues/74773)
- \[disposition: merge] [跟踪问题： ASCII methods on OsStr](https://github.com/rust-lang/rust/issues/70516)
- [disposition: close] [跟踪问题： `Option::expect_none(msg)` and `unwrap_none()`](https://github.com/rust-lang/rust/issues/62633)

## New RFCs

- [Add named path bases to cargo](https://github.com/rust-lang/rfcs/pull/3074)

# Quote of the Week

> 您是否看到有人用一只手杂耍了几件物品？这就是异步的意义。阻塞它就像书写一样（非异步）-每只手都需要不断地工作。如果您想以两倍的速度书写，则需要两只手同时书写。那就是多线程的。如果您玩杂耍，那么当物品离开您的手并悬停在空中时，您将无事可做。这就与网络 IO 类似 —— 您发出请求，只是在等待服务器响应。在此期间，您可能正在做一些事情，例如抓到另一个物品，然后再次扔回去。“ await”的意思就是 —— 我扔了起来，然后飞向空中，这时我想让现在的线程（或者说手）切换过来捕捉其他东西。

– [/u/OS6aDohpegavod4 on /r/rust](https://www.reddit.com/r/rust/comments/lia5fu/why_async_rust/gn2q25e/)

Thanks to [Jacob Pratt](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1002) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ln2zmo/this_week_in_rust_378/)</small>
