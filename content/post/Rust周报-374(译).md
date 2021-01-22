---
title: "Rust周报 374(译)"
date: 2021-01-23T00:25:28+08:00
tags: ["week"]
description: "螃蟹-Rust周报-374"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-01-20
- [原文：374 期](https://this-week-in-rust.org/blog/2021/01/20/this-week-in-rust-374/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- \[Inside] [rustdoc performance improvements](https://blog.rust-lang.org/inside-rust/2021/01/15/rustdoc-performance-improvements.html)
- \[Inside] [changes to the rustdoc team](https://blog.rust-lang.org/inside-rust/2021/01/19/changes-to-rustdoc-team.html)

### Newsletters

- [This Month in Rust GameDev #17 - December 2020](https://rust-gamedev.github.io/posts/newsletter-017/)

### Project/Tooling Updates

- [IntelliJ Rust Changelog #139](https://intellij-rust.github.io/2021/01/18/changelog-139.html)
- [rust-analyzer Changelog #60](https://rust-analyzer.github.io/thisweek/2021/01/18/changelog-60.html)
- [Knurling-rs Changelog #13](https://ferrous-systems.com/blog/knurling-changelog-13/)
- [This week in Ballista #1](https://ballistacompute.org/thisweek/2021/01/17/this-week-in-ballista-1/)
- [Deno in 2020](https://deno.land/posts/deno-in-2020)
- [async-std v1.9.0](https://github.com/async-rs/async-std/releases/tag/v1.9.0)
- \[video] [penrose 0.2.0 overview](https://www.youtube.com/watch?v=opLOzofmawI&feature=youtu.be)

### Observations/Thoughts

- [Cryptoxide perf (SHA2 / Blake2)](https://vincenthz.github.io/cryptoxide-performance/)
- [About variadics in Rust(元组的泛型)](https://gist.github.com/PoignardAzur/aea33f28e2c58ffe1a93b8f8d3c58667)
- [Rust in Production: 1Password](https://serokell.io/blog/rust-in-production-1password)
- [Unconditional loops are unconditionally awesome](https://brson.github.io/2021/01/17/rust-unconditional-loops)
- [Rust is a hard way to make a web API](https://macwright.com/2021/01/15/rust.html)
- [Writing a better Line Iterator in Rust](https://dev.to/mineichen/writing-a-better-line-iterator-in-rust-443m)
- [实现跨进程 Sanakirja locks](https://pijul.org/posts/2021-01-15-sanakirja-locks/)
- [future::join and const-eval](https://blog.yoshuawuyts.com/future-join-and-const-eval/)
- [来啦来啦，我的使用感受：I used Rust in production for 6 months!](https://www.qovery.com/blog/i-use-rust-in-production-for-6-months-heres-my-feedback)
- \[video] [learning rust with "too many linked lists" (episode 2) - pop & drop](https://youtu.be/LX9GeWWJRNU)
- \[video] [std::process::exit is evil - a rust bug fixing story](https://youtu.be/zQC8T71Y8e4)

### Rust Walkthroughs

- [OS in Rust: 运行我们的自定义内核 on an emulator: Part-5](https://blog.knoldus.com/os-in-rust-running-our-custom-kernel-on-an-emulator-part-5/)
- [Polishing Rust: Boxing and Unboxing Results](https://mrtact.medium.com/polishing-rust-30eeac3c4bf3)
- [高效的自定义形状 in QtQuick with Rust](https://carlschwan.eu/2021/01/20/efficient-custom-shapes-in-qtquick-with-rust/)
- [科学型计算 in Rust](https://aftix.xyz/home/bacon/)
- [Rust GUI: 介绍 a.k.a. Rust GUI 库现状 (as of January 2021)](https://dev.to/davidedelpapa/rust-gui-introduction-a-k-a-the-state-of-rust-gui-libraries-as-of-january-2021-40gl)
- [How to Fetch a Web API with Rust 🦀](https://dev.to/hb/how-to-fetch-a-web-api-with-rust-1390)
- [Replacing FastAPI with Rust: Part 4 - A Solution](https://dev.to/dbanty/replacing-fastapi-with-rust-part-4-a-solution-2kf9)
- [Getting started with Rust and Redis](https://dev.to/itnext/getting-started-with-rust-and-redis-4h79)
- [How To Write A REST Client In Rust](https://www.lpalmieri.com/posts/how-to-write-a-rest-client-in-rust-with-reqwest-and-wiremock/)
- \[video] [rust live coding - tower deep dive](https://youtu.be/16sU1q8OeeI)

### Miscellaneous

- [Rust/WebAssembly on AWS Lambda@Edge](https://markentier.tech/posts/2021/01/rust-wasm-on-aws-lambda-edge/)
- \[video] [(live coding) zola, a static site generator. migrating my blog & reviewing zola's source code.](https://youtu.be/vezfR5ggEkc)

# Crate of the Week

这周的箱子是[dotenv-linter](https://github.com/dotenv-linter/dotenv-linter)，用于`.env`文件的 linter。

谢谢[Grachev Mikhail](https://users.rust-lang.org/t/crate-of-the-week/2704/869)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [magic-wormhole/magic-wormhold.rs](https://github.com/magic-wormhole/magic-wormhole.rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 391 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-01-11..2021-01-18

- [默认使用 correct ABI for wasm32](https://github.com/rust-lang/rust/pull/79998)
- [当闭包没有 trait bound 的时候，improve diagnostics](https://github.com/rust-lang/rust/pull/80635)
- [加强涉及 `?` operator 的 type inference errors](https://github.com/rust-lang/rust/pull/80517)
- [explain method-call move errors in loops](https://github.com/rust-lang/rust/pull/80324)
- [让 CTFE 能够检查 undefined behavior](https://github.com/rust-lang/rust/pull/78407)
- [将一个 func 拆分为 cold/hot parts, 减少 rustc binary 大小](https://github.com/rust-lang/rust/pull/80042)
- [suggest `_` and `..` if a pattern has too few fields](https://github.com/rust-lang/rust/pull/80017)
- [suggest `async {}` for `async || {}`](https://github.com/rust-lang/rust/pull/76580)
- [do not suggest invalid code in pattern with loop](https://github.com/rust-lang/rust/pull/80941)
- [add allow-by-default lint on implicit ABI in extern function pointers and items](https://github.com/rust-lang/rust/pull/76219)
- [reintroduce `hir::ExprKind::If`](https://github.com/rust-lang/rust/pull/79328)
- [移除多余的 `def_id` lookups](https://github.com/rust-lang/rust/pull/80232)
- [通过 fixed-size buffer，序列化 incr comp structures to file ](https://github.com/rust-lang/rust/pull/80463)
- [将 type inhabitedness 转进一个 query，用来修复`exhaustive_patterns` perf](https://github.com/rust-lang/rust/pull/79670)
- [box `Item::Attributes`](https://github.com/rust-lang/rust/pull/80802)
- [resolve: 简化 collection of traits in scope](https://github.com/rust-lang/rust/pull/80765)
- [使用 `Once` 而不是 `Mutex` to manage capture resolution](https://github.com/rust-lang/rust/pull/80736)
- [一贯避免构造 optimized MIR when not doing codegen](https://github.com/rust-lang/rust/pull/80718)
- [add benchmark and fast path for `BufReader::read_exact`](https://github.com/rust-lang/rust/pull/80201)
- [添加 `MaybeUninit` 方法 `array_assume_init`](https://github.com/rust-lang/rust/pull/80600)
- [change `BinaryHeap::append` rebuild heuristic](https://github.com/rust-lang/rust/pull/77435)
- [不要专门的内部函数，实现 `ptr::write`](https://github.com/rust-lang/rust/pull/80290)
- [introduce {`Ref`, `RefMut`}`::try_map' for optional projections in`RefCell`](https://github.com/rust-lang/rust/pull/78455)
- [重新稳定化：`Weak::as_ptr` and friends for unsized T](https://github.com/rust-lang/rust/pull/80764)
- [add `Iterator::intersperse_with`](https://github.com/rust-lang/rust/pull/80567)
- [`TrustedRandomAaccess` specialization 不正确地组成 嵌套的 `iter::Zips`](https://github.com/rust-lang/rust/pull/80670)
- [移除`VecDeque::`{`front`/`back`}(`_mut`) 中接触不到的 panic](https://github.com/rust-lang/rust/pull/80834)
- [add `NonZeroU`n`::is_power_of_two`](https://github.com/rust-lang/rust/pull/81107)
- [稳定化：`split_inclusive`](https://github.com/rust-lang/rust/pull/77858)
- [稳定化：the `poll_map` feature](https://github.com/rust-lang/rust/pull/80968)
- [add `as_rchunks` (and friends) to slices](https://github.com/rust-lang/rust/pull/78818)
- [hashbrown: hide allocator details and default to `Global`](https://github.com/rust-lang/hashbrown/pull/227)
- [hashbrown: 导出 `AllocError`，就像 `Allocator`一样](https://github.com/rust-lang/hashbrown/pull/223)
- [regex: implement `regex::Replacer` for `String`, `&String`, `Cow<'a, str>`, `&Cow<'a, str>`](https://github.com/rust-lang/regex/pull/728)
- [futures: 通过指定更多 its types，修复 type-inference in `sink::unfold()`](https://github.com/rust-lang/futures-rs/pull/2311)
- [clippy: roadmap for 2021](https://github.com/rust-lang/rust-clippy/pull/6462)

## Rust Compiler Performance Triage

- [2020-01-12](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-12.md):
  1 个退步, 2 个进步, 3 个 Mixed
  总体来说, 有意义尽管安静的一周。增量编译工作组的这些 [changes](https://github.com/rust-lang/rust/issues/76896) 带来的性能优化，具体关于 debug 模式下，inlining 是怎样控制的。不幸的是, 出于担忧，changes 可能会被 reversed。

分类由@rylev 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-12.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Allow "artifact dependencies" on bin, cdylib, and staticlib crates](https://github.com/rust-lang/rfcs/pull/3028)
- [RFC: Pointer metadata & VTable](https://github.com/rust-lang/rfcs/pull/2580)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: 合并] [移除特定的要求：强制对称和传递 PartialEq impls](https://github.com/rust-lang/rust/pull/81198)
- \[disposition: 合并] [稳定化：`core::slice::fill_with`](https://github.com/rust-lang/rust/pull/81048)
- \[disposition: 合并] [稳定化：`unsigned_abs`](https://github.com/rust-lang/rust/pull/80959)
- \[disposition: 合并] [添加 Box::downcast() for dyn Any + Send + Sync](https://github.com/rust-lang/rust/pull/80945)
- \[disposition: 合并] [[T; N]`iterator`core::array::IntoIter`](https://github.com/rust-lang/rust/pull/80470)
- \[disposition: 合并] [实现缺失的 `asmut<str>` for `str`](https://github.com/rust-lang/rust/pull/80279)
- \[disposition: 合并] [稳定化：`cargo test -- --include-ignored`](https://github.com/rust-lang/rust/pull/80053)
- \[disposition: 合并] [rustc: 稳定化：`-Zrun-dsymutil` as `-Csplit-debuginfo`](https://github.com/rust-lang/rust/pull/79570)
- \[disposition: 合并] [稳定化：Arc::{increment,decrement}\_strong_count](https://github.com/rust-lang/rust/pull/79285)
- \[disposition: 合并] [implement io::Seek for io::Empty](https://github.com/rust-lang/rust/pull/78044)
- \[disposition: 合并] [稳定化：`seek::stream_position` (feature `seek_convenience`)](https://github.com/rust-lang/rust/pull/70904)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 为什么我在泛型闭包参数名称中，使用字母“o”？[...]我最近意识到，由于 Rust 使用管道来封装参数块，因此使用'o'可使该块看起来像是 TIE 战斗机（|o|《星球大战》里的一种星际战斗机）。我不是一个非常严肃的人。

– [Tim Keating on medium](https://mrtact.medium.com/polishing-rust-30eeac3c4bf3)

Thanks to [Edoardo Morandi](https://users.rust-lang.org/t/twir-quote-of-the-week/328/990) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/k5nsab/this_week_in_rust_367/)</small>
