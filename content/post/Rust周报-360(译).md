---
title: "Rust周报 360(译)"
date: 2020-10-15T20:22:02+08:00
tags: ["week"]
description: "螃蟹-Rust周报-360"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-10-14
- [原文：360 期](https://this-week-in-rust.org/blog/2020/10/14/this-week-in-rust-360/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Announcing Rust 1.47.0](https://blog.rust-lang.org/2020/10/08/Rust-1.47.html)

### Newsletters

- [Rust GameDev 月刊 #14](https://rust-gamedev.github.io/posts/newsletter-014/)

### Tooling

- [Rust Analyzer Changelog #46](https://rust-analyzer.github.io/thisweek/2020/10/12/changelog-46.html)
- [关于 rust 代码覆盖率的两个视频 in VSCode](https://www.marcoieni.com/2020/10/2-videos-about-rust-code-coverage-in-vscode/)

### Observations/Thoughts

- [美好背后的 Rust](http://dtrace.org/blogs/bmc/2020/10/11/rust-after-the-honeymoon/)
- [构建最快的 RaptorQ (RFC6330) Codec in Rust](https://www.cberner.com/2020/10/12/building-fastest-raptorq-rfc6330-codec-rust/)
- [通过开源和在线代码预览，学习 Rust](https://loige.co/learning-rust-through-open-source-and-live-code-reviews/)
- [制作一个 Canvas Based 游戏的错误， with Rust and WebAssembly](https://dev.to/fallenstedt/making-a-canvas-based-game-with-rust-and-webassembly-2l46)
- [Cranelift 新后端, Part 1: Instruction Selection](https://hacks.mozilla.org/2020/10/a-new-backend-for-cranelift-part-1-instruction-selection/)
- [Optional parameters in Rust](https://vidify.org/blog/rust-parameters/)
- [构建一个 async-compatible actor system](https://github.com/Diggsey/posts/blob/master/actor-systems/README.md)
- \[视频] [contract as code as contract: using rust to unify specification and implementation](https://youtu.be/EmSjZbSzA3A)

### Learn Simple Rust

- [Iterators in Rust](https://blog.thoughtram.io/iterators-in-rust/)
- [Learn Rust Together Part 5: Structs and Enums!](https://www.youtube.com/watch?v=Iy5pvVPZT50)
- [Snake 游戏](https://blog.scottlogic.com/2020/10/08/lets-build-snake-with-rust.html)
- [That's so Rusty! 无畏并发](https://dev.to/imaculate3/fearless-concurrency-5fk8)
- [制作一个简单的计算器 in Rust](https://dev.to/yjdoc2/making-a-simple-calculator-in-rust-d65)
- [容易出错的 iteration 模式](https://morestina.net/blog/1607/fallible-iteration)
- \[视频] [3. #everyonecancontribute cafe: gitpod & learning rust](https://youtu.be/ewDAOLTto-A)

### Learn More Rust

- [发布一个 Rust HTTP server 到 DigitalOcean App Platform](https://pretired.dazwilkin.com/posts/201008/)
- [Make A Language - Part Eight: Function Definitions](https://arzg.github.io/lang/8/)
- [Supercharge your Electron apps with Rust](https://blog.logrocket.com/supercharge-your-electron-apps-with-rust/)
- \[中文] [使用 Amethyst Engine 實作小行星遊戲](https://yodalee.me/2020/06/introduction/)
- \[视频] [rust ffi: microsoft flight simulator sdk part 1](https://youtu.be/jNNz4h3iIlw)
- \[视频] [fuzz testing popular rust library in 5 min using cargo-fuzz / libfuzzer](https://youtu.be/W0ZRZyljKjo)

### Project Updates

- [用 Rust 的 Hyper 为 Curl 加速](https://daniel.haxx.se/blog/2020/10/09/rust-in-curl-with-hyper/)
- [内存安全的 'curl'，给出一个更安全的网络](https://www.abetterinternet.org/post/memory-safe-curl/)
- [Version 0.7 of calloop](https://smithay.github.io/calloop-v-0-7.html)

### Miscellaneous

- [Collect in Rust, 对 Haskell 和 Scala 的思考](https://www.fpcomplete.com/blog/collect-rust-traverse-haskell-scala/)
- [证明 1 + 1 = 2 in Rust](https://gist.github.com/gretingz/bc194c20a2de2c7bcc0f457282ba2662)
- [程序之美?](http://jamesmcm.github.io/blog/2020/10/11/programming-projects/#en)
- [发现 Rust 是一份痛苦之后，我回到了 C++ 。](https://www.reddit.com/r/rust/comments/ja5aoe/getting_back_to_c_after_rust_is_a_pain/)

# Call for Blog Posts

Rust 核心团队希望获得社区的意见！如果您还没有，[read the official blog](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)并提交博客文章-它将显示在这里！自征集博客以来，以下是精彩的投稿：

# Crate of the Week

这周的箱子是[paste](https://crates.io/crates/paste)，用于连接 identifiers 的宏（否则，只能是 nightly）。

谢谢[mark-i-m](https://users.rust-lang.org/t/crate-of-the-week/2704/825)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

- [创建一个 Rust-客户端 for SirixDB](https://dev.to/sirixdb/create-a-rust-client-during-hacktoberfest-5al4)
- [the-way: 高亮参数 in shell snippet when copying](https://github.com/out-of-cheese-error/the-way/issues/75)
- [the-way: 用 arboard 替换 copy_to_clipboard 代码](https://github.com/out-of-cheese-error/the-way/issues/76)

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 409 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-10-05..2020-10-12

- [resolve: 改善 "try using the enum's variant"](https://github.com/rust-lang/rust/pull/77341)
- [修复： `LitKind`'s byte buffer 使用 refcounted slice](https://github.com/rust-lang/rust/pull/77560)
- [如果可能的话，使用 `Body` 替换 `(Body, DefId)` ](https://github.com/rust-lang/rust/pull/77552)
- [perf: `UninhabitedEnumBranching` 避免 n²](https://github.com/rust-lang/rust/pull/77597)
- [修复：span for unicode 转译（字符）建议](https://github.com/rust-lang/rust/pull/77587)
- [impl `advance_by`, `advance_back_by` for `iter::Chain`](https://github.com/rust-lang/rust/pull/77594)
- [添加：`PartialEq` impls for `Vec` ↔ `slice`](https://github.com/rust-lang/rust/pull/74194)
- [stdsimd: 使用 xor ，去 impl `Neg::neg` for floats](https://github.com/rust-lang/stdsimd/pull/31)

## Rust Compiler Performance Triage

- [2020-10-13](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-13.md)：0 个性能退化，3 个改进，3 个混合

总体而言，这是相当忙碌的一周，但没有需要解决的主要问题。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-13.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: 将 aarch64-unknown-linux-gnu 晋升为 Tier-1 Rust target](https://github.com/rust-lang/rfcs/pull/2959)
- [可以从 trait objects，访问 traits' 关联函数和常量](https://github.com/rust-lang/rfcs/pull/2886)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：union with 'manuallydrop' 字段 和 'impl drop for union'](https://github.com/rust-lang/rust/pull/77547)
- \[处置：合并] [union field accesses in 'const' 是不允许的](https://github.com/rust-lang/rust/pull/77526)
- \[处置：合并] [passes: `check_attr` on more targets](https://github.com/rust-lang/rust/pull/77015)
- \[处置：合并] [resolve: 不要把不存在的 crate `meta` 放进 prelude](https://github.com/rust-lang/rust/pull/75802)
- \[处置：推迟] [跟踪问题：关于 coercions, generics, 和 copy type ergonomics 的实验](https://github.com/rust-lang/rust/issues/44619)

## New RFCs

# Quote of the Week

> 仅仅因为 Rust 允许您安全地编写超酷的，无分配操作，零复制的算法，并不意味着您编写的每个算法都应该是超酷的，零复制，且无分配操作的。

- [trentj on rust-users](https://users.rust-lang.org/t/feeling-rust-is-so-difficult/29962/15)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/948) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/jbh0ci/this_week_in_rust_360/)</small>
