---
title: "Rust周报 347(译)"
date: 2020-07-15T10:52:19+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-347"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-07-14
- [原文：347 期](https://this-week-in-rust.org/blog/2020/07/14/this-week-in-rust-347/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/022-twir-347/)

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rustup 1.22.1](https://blog.rust-lang.org/2020/07/08/Rustup-1.22.1.html)
- [语言团队设计会议：通往成员之路](https://blog.rust-lang.org/inside-rust/2020/07/09/lang-team-path-to-membership.html)
- [Rust 社区缓和的观点](https://www.reddit.com/r/rust/comments/hnfnti/where_is_the_rust_community_allowed_to_talk_about/fxf65nf/)
- [Programming Servo：鸟瞰](https://medium.com/programming-servo/programming-servo-the-birds-eyes-view-201d28220b9a?source=friends_link&sk=b8610f254bf6faf8b81c81729c1b3498)
- [更快的整数解析（Rust port）](https://rust-malaysia.github.io/code/2020/07/11/faster-integer-parsing.html)
- [学习 Rust：让我们构建一个解析器](https://codeandbitters.com/lets-build-a-parser/)
- [nnnoiseless：将音频代码，从 C 移植到 rust](https://jneem.github.io/nnnoiseless/)
- [新调试器的灵魂](https://nbaksalyar.github.io/2020/07/12/soul-of-a-new-debugger.html)
- [Rust 中的 String interners](https://dev.to/cad97/string-interners-in-rust-797)
- [Rust 的 Target Feature vs Target CPU](https://www.nickwilcox.com/blog/target_cpu_vs_target_feature/)
- [Rust 及其孤儿（Orphan）规则](https://blog.mgattozzi.dev/orphan-rules/)
- [异步访谈＃8：Stjepan Glavina](https://smallcultfollowing.com/babysteps/blog/2020/07/09/async-interview-8-stjepan-glavina/)
- [在 Rust 中使用 RabbitMQ](https://www.zupzup.org/rmq-in-rust/)
- [创建一个自定义目标](https://rust-embedded.github.io/embedonomicon/custom-target.html)
- [静态，Sized，高阶的多态性](http://blog.ielliott.io/sized-hkts/)
- [摆脱 Rust futures 的麻烦](https://fasterthanli.me/articles/getting-in-and-out-of-trouble-with-rust-futures)
- [Rust Analyzer 变更日志＃33](https://rust-analyzer.github.io/thisweek/2020/07/13/changelog-33.html)
- [IntelliJ Rust 更新日志＃126](https://intellij-rust.github.io/2020/07/13/changelog-126.html)
- [Rust OSDev 月刊（2020 年 6 月）](https://rust-osdev.com/this-month/2020-06/)
- [跨平台编译 Rust， 从 ARM 到 x86-64](https://burgers.io/cross-compile-rust-from-arm-to-x86-64)
- [用 Rustler，为 Elixir 编写 Rust NIF](https://simplabs.com/blog/2020/06/25/writing-rust-nifs-for-elixir-with-rustler/)
- [几何约束 求解器第 1 部分：代数表达式](http://adventures.michaelfbryan.com/posts/constraints-part-1-expressions/)
- [观察，Rust 异步内存访问](https://blog.haoxp.xyz/posts/async-memory-access/)
- [构建 Canrun：用于 Rust 的静态类型，逻辑编程库（第 1 部分）](https://esimmler.com/building-canrun-part-1/)
- [在 Rust Wasm build 中，寻找非确定性错误](https://dev.to/gnunicorn/hunting-down-a-non-determinism-bug-in-our-rust-wasm-build-4fk1)
- [在 Rust 中实现 Clipper Chip 密码](https://blog.yossarian.net/2020/03/09/Implementing-the-Clipper-chip-cipher-in-Rust)
- [Linux 开发人员可能会讨论，在内核中允许 Rust 代码](https://www.phoronix.com/scan.php?page=news_item&px=Linux-Plumbers-2020-Rust)
- [Rust 和 WebAssembly 中的机器学习](https://www.secondstate.io/articles/machine-learning/)
- [从 TypeScript 迁移到 Rust / WebAssembly](https://nicolodavis.com/blog/typescript-to-rust/)
- [RSoC：改进 驱动程序和内核 —— 第 1 部分（更大的 io_uring）](https://www.redox-os.org/news/io_uring-1/)
- [从零开始的 Rust 和 WebAssembly：带 Strings 的 Hello World](https://depth-first.com/articles/2020/07/07/rust-and-webassembly-from-scratch-hello-world-with-strings/)
- [适用于 JavaScript 开发人员的 Rust —— 模式匹配和枚举](http://www.sheshbabu.com/posts/rust-for-javascript-developers-pattern-matching-and-enums/)
- [令人惊讶的是，Rust 作为服务器语言是真的棒](https://stu2b50.dev/posts/rust-is-surpris76171)
- [实现标准化 Rust，描述人员的一些经验](https://dev.to/seanchen1991/some-learnings-from-implementing-a-normalizing-rust-representer-2l12)
- [在 Rust 中，子类化 GTK 小部件](https://www.figuiere.net/technotes/notes/tn002/)
- \[西班牙文] [rust es orientado a objeto?](https://emanuelpeg.blogspot.com/2020/07/rust-es-orientado-objeto.html#.XwsegbMr_EQ.reddit)
- \[音频] [fuzzing rust with shnatsel podcast](https://medium.com/@social_62682/fuzzing-rust-with-shnatsel-podcast-e1fa0dbc28a)
- \[视频] [rust loops part 1: loop, break, continue](https://www.youtube.com/watch?v=zVX2qJFHDXA&feature=youtu.be)
- \[视频] [hitting a bug in the rust compiler - while writing a boring link checker](https://www.youtube.com/watch?time_continue=4&v=DArJCR0HDL8&feature=emb_logo)
- \[视频] [two sum problem - leet code + rust](https://www.youtube.com/watch?v=CMlHbAGkXjA&list=PLK_g1a_cAfaZuTXzDoQUAFEHCalKSCv9G&index=2)
- \[视频] [rust + webassembly - edgexr @ netlight](https://www.youtube.com/watch?v=dmbqpg5BuBY)
- \[视频] [rust meetup - adding wasm support to a native application (gamedev edition)](https://www.youtube.com/watch?v=7YQGwb4_AvA)

# 周箱

这周的箱子是[nnnoiseless](https://jneem.github.io/nnnoiseless)，是从 C 移植的，用于消除音频噪声的过滤器。

谢谢[mmmmib](https://users.rust-lang.org/t/crate-of-the-week/2704/790)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [rust_gpiozero 正在寻找贡献者](https://github.com/rahul-thakoor/rust_gpiozero/issues/11)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 273 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-07-06..2020-07-13

- [收缩`ParamEnv`，变为 16 个字节](https://github.com/rust-lang/rust/pull/73978)
- [稳定化：const `mem::forget`](https://github.com/rust-lang/rust/pull/73887)
- [typeck：将类型信息添加到 projection 中](https://github.com/rust-lang/rust/pull/73870)
- [clippy：给浮点运算操作，来点精确 lints](https://github.com/rust-lang/rust-clippy/pull/5443)
- [正确标记 match arm 的结束 span](https://github.com/rust-lang/rust/pull/74125)
- [只允许，enum 上的`repr(i128/u128)`](https://github.com/rust-lang/rust/pull/74109)
- [如果某类型没有实现`DerefMut`，就在侧边栏，隐藏来自 Deref 的`&mut self`方法](https://github.com/rust-lang/rust/pull/74107)
- [仅在`windows-msvc`目标上添加 CFGuard](https://github.com/rust-lang/rust/pull/74103)
- [添加：`VecDeque::range*`方法](https://github.com/rust-lang/rust/pull/74099)
- [添加：`read_exact_at`和`write_all_at`到 WASI 的`FileExt`](https://github.com/rust-lang/rust/pull/74076)
- [clippy：新的 lint：`match_like_matches_macro`](https://github.com/rust-lang/rust-clippy/pull/5769)
- [优化，`is_ascii` for `str` and `[u8]`](https://github.com/rust-lang/rust/pull/74066)
- [arch：在 avx512f set 中，添加`f32`与`f64` unaligned（未对齐）的 stores（储存） and loads（加载）](https://github.com/rust-lang/stdarch/pull/873)
- [hashbrown：添加`HashSet::drain_filter`方法](https://github.com/rust-lang/hashbrown/pull/179)

## Rust 编译器性能分类

- [2020-07-14](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-07-14.md)。检查了十二个修订版。零性能回归。一项改进。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [移除 trait `lengthatmost32`](https://github.com/rust-lang/rust/pull/74060)
- \[处置：合并] [稳定化：control-flow-guard codegen 选项](https://github.com/rust-lang/rust/pull/73893)
- \[处置：合并] [impl Default for ranges](https://github.com/rust-lang/rust/pull/73197)
- \[处置：合并] [跟踪问题：`core::{f32,f64}::consts::tau` ](https://github.com/rust-lang/rust/issues/66770)

## 新的 RFC

- [可选择，稳定的 Trait VTables](https://github.com/rust-lang/rfcs/pull/2955)

# 本周最佳语录

> Rust 所有权完全是一种类型系统假象。

— dodomorandi

> 我不知道这说的是什么意思。许多语言中的“所有权”在对我来说，是非常实际的事情。

– and [ZiCog on rust-users](https://users.rust-lang.org/t/twir-quote-of-the-week/328/900)

Thanks to [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/903) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/hrc4dt/this_week_in_rust_347/)</small>
