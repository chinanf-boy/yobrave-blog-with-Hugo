---
title: "Rust周报 354(译)"
date: 2020-09-05T22:33:02+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-354"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-09-04
- [原文：354 期](https://this-week-in-rust.org/blog/2020/09/04/this-week-in-rust-354/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community（Rust 社区更新）

### Official（官方）

- [宣 Rust 1.46.0](https://blog.rust-lang.org/2020/08/27/Rust-1.46.0.html)

### Tooling（工具）

- [Rust Analyzer Changelog #40](https://rust-analyzer.github.io/thisweek/2020/08/31/changelog-40.html)
- [给予 IntelliJ Rust 插件帮助: Writing an intention](https://kobzol.github.io/rust/intellij/2020/08/25/contributing-2-subst-assoc-type-int.html)

### Newsletters（时讯）

- [Rust 区块链月刊 #15 - Turbofish in the Blocksea](https://rustinblockchain.org/newsletters/2020-09-02-turbofish-in-the-blocksea/)

### Observations/Thoughts（观察/思考）

- [我们应该把系统编程语言的未来，压在 Rust 身上吗?](https://edfloreshz.blog/should-we-trust-rust-with-the-future-of-systems-programming)
- [Optionality（可选性） in the type systems of Julia and Rust](https://andreaskroepelin.de/blog/sum_types/)
- [从 quick-error 迁移到 SNAFU: 关于改进错误处理流程的故事](https://dev.to/e_net4/migrating-from-quick-error-to-snafu-a-story-on-revamped-error-handling-in-rust-58h9)
- [去使用那些 Traits 吧](https://prateeknischal.github.io/go-use-those-traits/)
- [Starframe devlog: 架构](https://moletrooper.github.io/blog/2020/08/starframe-1-architecture/)
- [将事件链（Event Chaining）作为一种解耦方法 in Entity-Component-System](https://www.jojolepro.com/blog/2020-08-20_event_chaining/)
- [Rust 序列化功能: 啥是已经准备好放入生产环境了呢?](https://blog.logrocket.com/rust-serialization-whats-ready-for-production-today/)
- [rust vs 脚本语言; 一个小的案例研究](https://www.linkedin.com/pulse/rust-goodness-case-study-matthew-sherborne)
- \[DE] [Entwicklung: Warum Rust die Antwort auf miese Software und Programmierfehler ist](https://www.heise.de/hintergrund/Entwicklung-Warum-Rust-die-Antwort-auf-miese-Software-und-Programmierfehler-ist-4879795.html)
- \[视频] [Is Rust Used Safely by Software Developers?](https://youtu.be/iOBXVOAbpdY)

### Learn Standard Rust

- [Ownership（所有权）, 第一部分](https://www.thomascountz.com/2018/07/09/ownership-in-rust-part-1)
- [Ownership, 第二部分](https://www.thomascountz.com/2018/07/11/ownership-in-rust-part-2)
- [Learning Rust 1: 安装与读取一个文件](https://dev.to/jbachhardie/learning-rust-1-install-things-and-read-a-file-5613)
- [Learning Rust 2: 生出一个小数据库](https://dev.to/jbachhardie/learning-rust-2-a-tiny-database-is-born-eef)
- [That's so Rusty: Ownership](https://dev.to/imaculate3/that-s-so-rusty-ownership-493c)

### Learn More Rust

- [As above, so below: 裸机 Rust 泛型 2/2](https://www.ecorax.net/as-above-so-below-2/)
- [Halite III 机器人开发套件](https://sgolem.com/halite-iii-bot-development-kit-in-rust)
- [从零到生产 #3.5: HTML forms, 数据库, 集成测试](https://www.lpalmieri.com/posts/2020-08-31-zero-to-production-3-5-html-forms-databases-integration-tests/)
- [Objective-C 配 Rust](https://belkadan.com/blog/2020/08/Objective-Rust/)
- [通过使用 Rocket 框架，构建 web 应用](https://blog.logrocket.com/rust-web-apps-using-rocket-framework/)
- [编写一个异步 MQTT Broker - 第三部分](https://hassamuddin.com/blog/rust-mqtt/channels/)
- [多线程池](https://pkolaczk.github.io/multiple-threadpools-rust/)
- [类型导向元编程](https://willcrichton.net/notes/type-directed-metaprogramming-in-rust/)
- [编译时期间，生成静态 arrays](https://dev.to/rustyoctopus/generating-static-arrays-during-compile-time-in-rust-10d8)
- [让我们构建一体 gRPC server-client 二进制文件 with Rust in 2020 - 第二部分](https://dev.to/tjtelan/let-s-build-a-single-binary-grpc-server-client-with-rust-in-2020-part-2-1i2e)
- [如何使用 Rust + WebAssembly，制造无服务器，机器学习和数据可视化的云台](https://www.freecodecamp.org/news/rust-webassembly-serverless-tencent-cloud/)
- [烟花 for your terminal](https://blog.darrien.dev/posts/fireworks-for-your-terminal/)
- [无服务器，数据抓取 with Rust and AWS SES](http://jamesmcm.github.io/blog/2020/08/29/rust-ses/#en)
- [数据分析，奥运历史](https://datacrayon.com/posts/programming/rust-notebooks/box-plots-at-the-olympics/)
- [修复 include_bytes!](https://jack.wrenn.fyi/blog/include-transmute/)
- \[PL] [CrabbyBird #1 O tym, jak animować postać gracza](https://postacnormalna.pl/animacja-kraboptaka/)
- \[视频] [FLTK Rust: Creating a music player with customized widgets](https://youtu.be/okdFx6tv7ds)

### Project Updates（项目更新）

- [我的数据库项目 8 月回顾](https://alex-dukhno.github.io/2020-08-29-This-August-in-my-Database-project-written-in-rust-copy/)
- [使用 Rust for Kentik's 新的综合监测代理](https://www.kentik.com/blog/using-rust-for-kentiks-new-synthetic-network-monitoring-agent/)
- [AWS 介绍 Bottlerocket: 面向 Rust 的 Linux 容器](https://www.zdnet.com/article/aws-introduces-bottlerocket-a-rust-language-oriented-linux-for-containers/)
- [将`cargo test` 用于嵌入式测试 with `panic-probe`](https://ferrous-systems.com/blog/cargo-test-with-panic-probe/)
- [Headcrab: 2020 8 月进展报告 ](https://headcrab.rs/2020/08/31/august-update.html)
- [Rust Analyzer 2020[..6] 财政报告](https://rust-analyzer.github.io/blog/2020/08/20/financial-report.html)

### Miscellaneous（杂项）

- [清扫工件，可以避免构建缓存的肿胀](https://www.justanotherdot.com/posts/avoid-build-cache-bloat-by-sweeping-away-artifacts.html)
- [const_fn 让 mandelbrots 图像变得太过简单了吧](https://www.reddit.com/r/rust/comments/ijpxz2/const_fn_makes_it_too_easy_to_do_mandelbrots/)
- [Linux 开发者继续走在，添加 Rust 代码到内核的路上](https://www.phoronix.com/scan.php?page=news_item&px=Linux-Kernel-Rust-Path-LPC2020)
- [支持 Linux kernel development](https://lwn.net/SubscriberLink/829858/281103f9c6fd0dc2/)
- \[video] [LPC 2020 - LLVM MC](https://youtu.be/FFjV9f_Ub9o)
- [重构 Rust 转译 from C](https://immunant.com/blog/2020/09/transpiled_c_safety/)

# 周箱

This week's crate is [GlueSQL](https://github.com/gluesql/gluesql), 一个 SQL 数据库引擎，带有 WebAssembly 支持。

Thanks to [Taehoon Moon](https://users.rust-lang.org/t/crate-of-the-week/2704/807) for the suggestion!

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [Database 正在找人帮忙](https://github.com/alex-dukhno/database/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)
- [Docs.rs 正找寻帮助 - 添加一个 changelog](https://github.com/rust-lang/docs.rs/issues/1013)
- [Gooseberry 由几个 good first issues，可以提供指导](https://github.com/out-of-cheese-error/gooseberry/labels/good%20first%20issue)
- [Diskonaut - 选择性删除，不带确认?](https://github.com/imsnif/diskonaut/issues/68)
- [Diskonaut - 功能: 仅展示 "(x = Small files)" 说明，当屏幕上只有小文件的话](https://github.com/imsnif/diskonaut/issues/15)
- [Diskonaut - 功能: 错误报告，带有简洁的栈回溯](https://github.com/imsnif/diskonaut/issues/18)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

326 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-08-24..2020-08-31

- [当指向闭包的 upvars（捕获变量）时，选择指向 move-related span](https://github.com/rust-lang/rust/pull/75933)
- [若由`catch_unwind`捕获到外部异常，中止](https://github.com/rust-lang/rust/pull/70212)
- [优化积分（integrals）的 `if` 条件，变为整数（integer）的开关](https://github.com/rust-lang/rust/pull/75370)
- [如果`mem::ManuallyDrop::new` 并没有使用的话，选择建议 `mem::forget`](https://github.com/rust-lang/rust/pull/75912)
- [改善错误信息，当打字错误 in `format!`](https://github.com/rust-lang/rust/pull/75779)
- [允许 `AllocRef` 内，不同 alignment 的重新分配。](https://github.com/rust-lang/rust/pull/75687)
- [添加一些 avx512f 内在函数 for mask, rotation, shift](https://github.com/rust-lang/stdarch/pull/884)
- [让 `Ordering` 方法变为 const](https://github.com/rust-lang/rust/pull/75463)
- [稳定化： {`Range`, `RangeInclusive`}`::is_empty`](https://github.com/rust-lang/rust/pull/75132)
- [摆脱 bounds check in `slice::chunks_exact()` 和相关的函数](https://github.com/rust-lang/rust/pull/75936)
- [stdarch: avx512](https://github.com/rust-lang/stdarch/pull/887)
- [hashbrown: 让 `with_hasher` 函数变为 const fn](https://github.com/rust-lang/hashbrown/pull/195)
- [hashbrown: 实现 `replace_entry_with`](https://github.com/rust-lang/hashbrown/pull/190)
- [clippy: 将一个 lint 添加给一个异步代码块/闭包，而其是能产出一个可以自我 awaitable 的类型](https://github.com/rust-lang/rust-clippy/pull/5909)
- [使用 `rustc_lexer` for rustdoc 语法高亮](https://github.com/rust-lang/rust/pull/75775)
- [如果 modules 和 primitives 都在 intra-doc links 范围内，则报告一个模拟两可](https://github.com/rust-lang/rust/pull/75815)
- [rustdoc: 通过 `doc(cfg)`，改善 crate features 的 渲染](https://github.com/rust-lang/rust/pull/75330)
- [docs.rs: 将元数据解析到一个库](https://github.com/rust-lang/docs.rs/pull/1000)

## Rust 编译器性能分类

- [2020-08-24](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-08-24.md): 1 个性能退化, 4 个提升。

  本周包括一个重要的速度提升，优化现实 crates 的构建速度 (up to 5%) ，原因是 [更新为 LLVM 11 ](https://github.com/rust-lang/rust/pull/73526#issuecomment-679374070)。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: 命名的参数](https://github.com/rust-lang/rfcs/pull/2964)
- [eRFC: 添加 JSON 后端 to Rustdoc](https://github.com/rust-lang/rfcs/pull/2963)
- [RFC: 读取进未初始化缓冲](https://github.com/rust-lang/rfcs/pull/2930)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [添加 `#[cfg(panic = '...')]`](https://github.com/rust-lang/rust/pull/74754)
- \[处置: 合并] [允许 Weak::as_ptr 和它的朋友 for unsized T](https://github.com/rust-lang/rust/pull/74160)
- \[处置: 合并] [更新 stdarch](https://github.com/rust-lang/rust/pull/73166)
- \[处置: 合并] [跟踪问题：#[doc(alias = "...")]](https://github.com/rust-lang/rust/issues/50146)

## New RFCs

_No new RFCs were proposed this week._

# 本周最佳语录

> 当你问题的答案，包括了 "variance"，你大概要有次不好的遭遇。

- [trentj on rust-users](https://users.rust-lang.org/t/in-this-mesh-class-whats-wrong-with-my-use-of-lifetimes/47946/4)

Thanks to [Michael Bryan](https://users.rust-lang.org/t/twir-quote-of-the-week/328/937) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/imoogj/this_week_in_rust_354/)</small>
