---
title: "Rust周报 361(译)"
date: 2020-10-23T22:59:34+08:00
tags: ["week"]
description: "螃蟹-Rust周报-359"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-10-21
- [原文：361 期](https://this-week-in-rust.org/blog/2020/10/21/this-week-in-rust-361/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- [将 issues 标记为 regressions](https://blog.rust-lang.org/2020/10/20/regression-labels.html)
- \[内部] [lang team RFC 大整理 和 项目协议](https://blog.rust-lang.org/inside-rust/2020/10/16/Backlog-Bonanza.html)

### Tooling

- [Rust-Analyzer Changelog #47](https://rust-analyzer.github.io/thisweek/2020/10/19/changelog-47.html)
- [IntelliJ Rust Changelog #133](https://intellij-rust.github.io/2020/10/19/changelog-133.html)

### Observations/Thoughts

- [无畏并发: Clojure, Rust, Pony, Erlang and Dart 是怎么做到这一步的。](https://sites.google.com/a/athaydes.com/renato-athaydes/posts/fearlessconcurrencyhowclojurerustponyerlanganddartletyouachievethat)
- [震惊 Result\<>?: 关于文件解析上的一个测试，Rust 快过 Python ](http://www.coralbark.net/blog/technology/2020/10/shock-result-rust-faster-than-python-in-one-test-of-file-parsing/)
- [构建一个 Recipe 管理器 - Part 2 - Druid 经验报告](https://bheisler.github.io/post/recipe-manager-part-2-druid-experience-report/)
- [不, C++ 还没有切掉它](https://da-data.blogspot.com/2020/10/no-c-still-isnt-cutting-it.html)
- [Rust's move/copy/drop 语义的一个陷阱，和 对数据进行 0 处理](https://benma.github.io/2020/10/16/rust-zeroize-move.html)
- [证明：1 + 1 = 10 in Rust](https://tavianator.com/2020/one_plus_one.html)
- [学习 std::io::Error](https://matklad.github.io/2020/10/15/study-of-std-io-error.html)
- [与 Rust's Traits 玩耍](https://samwho.dev/blog/fun-with-rust-traits/)

### Learn Simple Rust

- [Arrays, vectors 和 slices in Rust](https://hashrust.com/blog/arrays-vectors-and-slices-in-rust/)
- [构建你自己的 Error Type: Part 1](https://yaah.dev/building-your-own-error-type)
- [Lifetimes in Rust](https://blog.thoughtram.io/lifetimes-in-rust/)
- [Piece by Piece: 编写 Readable Rust Code](https://impl.dev/posts/write-readable-rust-code/)
- [那些个 out 参数 in Rust，会是符合常理的吗?](https://steveklabnik.com/writing/are-out-parameters-idiomatic-in-rust)
- [非-泛型 Inner 函数](https://www.possiblerust.com/pattern/non-generic-inner-functions)
- [创建一个 Snake 复刻版 in Rust, 使用 Bevy](https://mbuffett.com/posts/bevy-snake-tutorial/)
- [创建自己的 PineTime Watch Face in Rust... 并发布上 crates.io](https://lupyuen.github.io/pinetime-rust-mynewt/articles/watchface)
- [Either Types for Rust](https://dev.to/sirech/either-types-for-rust-46k4)
- [Rust syntax: 什么是问号?](https://dev.to/nickymeuleman/rust-syntax-what-the-questionmark-2n58)
- [Public Trait 上的'私有'方法](https://jack.wrenn.fyi/blog/private-trait-methods/)
- [学习 Rust，用 Benford's Law 呀](https://gliderkite.github.io/posts/learn-rust-with-benford/)
- [怎么编写卫生的（Hygienic） Rust Macros](https://gist.github.com/Koxiaet/8c05ebd4e0e9347eb05f265dfb7252e1)
- \[视频] [rust linz, october 2020 - valentin tolmer - how not to rely on inheritance](https://youtu.be/m6Gee5kNe7U)

### Learn More Rust

- [构建一个 runtime reflection system for Rust 🦀️ (Part 2)](https://www.osohq.com/post/runtime-reflection-pt-2)
- [Compile Rust for Raspberry Pi ARM](https://medium.com/swlh/compiling-rust-for-raspberry-pi-arm-922b55dbb050)
- [基本的非堵塞 IO，using epoll in Rust](https://zupzup.org/epoll-with-rust/)
- [调试 async generator errors in Rust](https://meltware.com/2020/10/21/rust-async-nonsense.html)
- \[视频] [(live coding) audio adventures in rust: spotify integration](https://youtu.be/5q4NB9WdYIo)
- \[视频] [rust linz, october 2020 - matthias heiden - writing a kernel driver with rust](https://youtu.be/wREGR7QQHco)

### Project Updates

- [宣布 Tokio 0.3 和通往 1.0 的路](https://tokio.rs/blog/2020-10-tokio-0-3)
- [oso, 开源策略引擎，可用于账户授权管理 written in Rust](https://github.com/osohq/oso)，已发布[0.7.0 版本，关于 their authorization library for Rust projects!](https://docs.rs/oso/0.7.0/oso/)
- ⚡️[Dotenv-linter v2.2.0: 寻找和修复在 .env 文件的问题](https://evrone.com/dotenv-linter-v220)
- [0.3.0 版本的 cargo-wipe 发布](https://github.com/mihai-dinculescu/cargo-wipe)

### Miscellaneous

- [RustFest Global 2020，它来了](https://blog.rustfest.eu/a-new-look)
- [ICU4X 项目公开](https://github.com/unicode-org/icu4x/wiki/ICU4X-Project-Announcement)
- [Kata 容器，用 Rust 重写项目，获得了极速加成](https://www.zdnet.com/article/kata-containers-rewritten-in-rust-and-gets-a-major-speed-boost/)
- [zig 各种各样的想法 (and rust)](https://scattered-thoughts.net/writing/assorted-thoughts-on-zig-and-rust/)
- [Flask Creator Armin Ronacher 采访](https://evrone.com/armin-ronacher-interview)
- [一份使用 Rust actix-web 和 chrome 启动 🚀 的食谱](https://itnext.io/a-recipe-for-starting-actix-web-server-and-launch-chrome-b792987935a)
- [Sailfish OS 3.4 版本加入了实验性 Rust 支持, 以 64-bit ARM 为最终目的](https://www.phoronix.com/scan.php?page=news_item&px=Sailfish-OS-3.4-Released)
- [入门 Datalog & Rust ，用于问题分析](https://hexgolems.com/2020/10/getting-started-with-ddlog/)
- [三个开源 Sonos 项目: 高效的嵌入式开发 in Rust](https://tech-blog.sonos.com/posts/three-open-source-sonos-projects-in-rust/)

# Call for Blog Posts

Rust 核心团队希望获得社区的意见！如果您还没有，[read the official blog](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)并提交博客文章-它会显示在这里！自征集博客以来，以下是精彩的投稿：

# Crate of the Week

这周的箱子是[icu4x](https://github.com/unicode-org/icu4x)，这是 Unicode 联盟，在资源受限环境中，处理 i18n 的官方工具。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/828)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [GitUI: Good First Issue](https://github.com/extrawurst/gitui/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- [this-week-in-rust: Very light font can be difficult to read](https://github.com/rust-lang/this-week-in-rust/issues/708)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 398 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-10-12..2020-10-19

- [让 set_span 选择使用 `mut self`](https://github.com/rust-lang/rust/pull/78047)
- [resolve: 更为改善 "try using the enum's variant" 诊断](https://github.com/rust-lang/rust/pull/77855)
- [`min_const_generics` 诊断改善](https://github.com/rust-lang/rust/pull/77825)
- [确保 arenas 不会分配为大过`HUGE_PAGE`](https://github.com/rust-lang/rust/pull/78058)
- [让 `ObligationForest` 更高效](https://github.com/rust-lang/rust/pull/77908)
- [添加： `std::thread::available_concurrency`](https://github.com/rust-lang/rust/pull/74480)
- [将 `shrink_to_fit` 从 default `ToString::to_string` 实现中移除](https://github.com/rust-lang/rust/pull/77997)
- [添加 `str::`{`Split`, `RSplit`, `SplitN`, `RSplitN`, `SplitTerminator`, `RSplitTerminator`, `SplitInclusive`}`::as_str` 方法](https://github.com/rust-lang/rust/pull/75265)
- [liballoc: `VecDeque`: 添加二叉树搜寻函数](https://github.com/rust-lang/rust/pull/77751)
- [BTreeMap: 修复 gdb provider on `BTreeMap` ，with ZST（零大小类型的）keys or values](https://github.com/rust-lang/rust/pull/77788)
- [hashbrown: 当使用 `ProbeSeq`，移除 unwrap 的需求，](https://github.com/rust-lang/hashbrown/pull/208)

## Rust Compiler Performance Triage

- [2020-10-21](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-21.md)：4 个性能退化，7 个改进，0 个混合

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-21.md)更多信息。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: 将 aarch64-unknown-linux-gnu 晋升为 Tier-1 Rust target](https://github.com/rust-lang/rfcs/pull/2959)
- [YieldSafe auto trait](https://github.com/rust-lang/rfcs/pull/2890)
- [访问 traits' 关联函数，还有来自 trait objects 的常量](https://github.com/rust-lang/rfcs/pull/2886)
- [可变的 tuples](https://github.com/rust-lang/rfcs/pull/2775)
- [RFC：match 语法，匹配获得 pointer-to-field](https://github.com/rust-lang/rfcs/pull/2666)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [允许 `RUSTC_BOOTSTRAP` 左右 crate name](https://github.com/rust-lang/rust/pull/77802)
- \[处置：合并] [停止'const'中，union field 的 promoting](https://github.com/rust-lang/rust/pull/77526)
- \[处置：合并] [passes: `check_attr` on more targets](https://github.com/rust-lang/rust/pull/77015)
- \[处置：合并] [稳定化 `Poll::is_ready` 和 `is_pending` as const](https://github.com/rust-lang/rust/pull/76227)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 的确，很多东西都需要一个“足够智能的编译器”，但现在 2020 了，如果您的编译器没有在床上为您提供早餐，则需要提高您的期望。

- [Jubilee on the Rust Zulip](https://rust-lang.zulipchat.com/#narrow/stream/257879-project-portable-simd/topic/The.20movemasquerade/near/212794818)

Thanks to [Josh Triplett](https://users.rust-lang.org/t/twir-quote-of-the-week/328/949) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/jg7hkt/this_week_in_rust_361/)</small>
