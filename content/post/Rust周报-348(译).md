---
title: "Rust周报 348(译)"
date: 2020-07-23T21:11:35+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-348"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-07-21
- [原文：348 期](https://this-week-in-rust.org/blog/2020/07/21/this-week-in-rust-348/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/023-twir-348/)

# Rust 社区的更新

## 新闻和博客文章

- [crates.io 安全咨文](https://blog.rust-lang.org/2020/07/14/crates-io-security-advisory.html)
- [宣布 Rust 1.45.0](https://blog.rust-lang.org/2020/07/16/Rust-1.45.0.html)
- [Trait 工作组 2020 第三冲刺总结](https://blog.rust-lang.org/inside-rust/2020/07/17/traits-sprint-3.html)
- [2020 年最值得学习的编程语言（Rust Lang）](https://frogtok.com/useful-and-best-programming-languages-to-learn-in-2020/)
- [了解如何用 Rust，制作推箱子游戏！](https://sokoban.iolivia.me/c01-00-intro.html)
- [详细说明 Rust 的模块系统](http://www.sheshbabu.com/posts/rust-module-system/)
- [查看 Rust features 的状态](https://notes.iveselov.info/programming/checking-status-of-rust-features)
- [Programming Servo：随处可见](https://medium.com/programming-servo/programming-servo-just-hanging-around-d8f660c33df2?source=friends_link&sk=6efbf13743aec335bd11834c2df71783)
- [使用 Rust ，对终极 Tic Tac Toe 的高效描述](https://www.minimax.dev/docs/ultimate/efficient-representation/)
- [下一个算法：回溯 n 个皇后问题](https://rust.graystorm.com/2020/07/16/next-algorithm-backtracking-into-the-n-queens-problem/)
- [RSoC：改进驱动程序和内核 —— 第 3 部分（主要是 io_uring）](https://redox-os.org/news/io_uring-3/)
- [用 Rust 编写异步 MQTT Broker —— 第 2 部分](https://hassamuddin.com/blog/rust-mqtt/ping-pong/)
- [Rust 闭包：`move`闭包，返回`impl Fn`](https://notes.iveselov.info/programming/rust-closures-combining-move-and-fn)
- [用 Rust 编写内核驱动程序](https://not-matthias.github.io/kernel-driver-with-rust/)
- [用 Rust 重写 FORTRAN 软件](https://mckeogh.tech/post/shallow-water/)
- [用 Rust 构建和调试高吞吐量守护程序](https://brokenco.de/2020/07/15/high-throughput-in-rust.html)
- [为什么甚至未使用的数据也需要有效](https://www.ralfj.de/blog/2020/07/15/unused-data.html)
- [响应式 IDE 的三种架构](https://rust-analyzer.github.io/blog/2020/07/20/three-architectures-for-responsive-ide.html)
- [包装和'售出' Rust 软件 —— Windows](https://ebbflow.io/blog/vending-win)
- [异步 Rust，但不那么吓人](https://dev.to/dotxlem/async-rust-but-less-intimidating-2c13)
- [Rust Analyzer Changelog ＃34](https://rust-analyzer.github.io/thisweek/2020/07/20/changelog-34.html)
- [基准测试 Rust＆Go 的 gRPC](https://medium.com/@Rustling_gopher/benchmarking-grpc-in-rust-go-184545e7688a)
- [Rust 中的函数重载](https://medium.com/swlh/function-overloading-in-rust-d591aff64a03)
- [几何约束求解器第 1 部分：代数表达式](http://adventures.michaelfbryan.com/posts/constraints-part-1-expressions/?utm_source=reddit&utm_medium=social&utm_campaign=constraint-solver-1-expression-trees)
- [Haskell::From(Rust) I：中缀表示法和 Currying](https://seanchen1991.github.io/posts/haskell-from-rust-i/)
- [如何用 Rust 编写队列](https://dev.to/virtualkirill/how-to-write-a-queue-in-rust-12m9)
- [实现一个工作流程图](https://milchdealer.github.io/2020/07/19/Implementing-a-workflow-graph.html)
- [在 Rust 中，实现`flat_map`](https://www.eltonpinto.me/blog/posts/implementing_flatmap_in_rust/)
- [IntelliJ Rust 0.3：新的宏扩展引擎](https://blog.jetbrains.com/clion/2020/07/intellij-rust-0-3-new-macro-expansion-engine/)
- [关于底层的那些东东 pt.1 —— 引导至“Hello Rust！”](https://micouy.github.io/posts/low-level-pt-1/)
- [我对 Rust 下的赌注，来事了](https://nbsoftsolutions.com/blog/my-bet-on-rust-has-been-vindicated.html)
- [单一所有权和 RAII 的下一步](https://vale.dev/blog/raii-next-steps)
- [Popol：Rust 的最小非阻塞 I/O](https://cloudhead.io/popol/)
- [后端 Web 开发中的 Rust 与 Go](https://qvault.io/2020/07/17/rust-vs-go-in-backend-web-development/)
- [2020 年，'运输下' Const Generics](https://without.boats/blog/shipping-const-generics/)
- [两个漂亮的 Rust 程序](https://matklad.github.io//2020/07/15/two-beautiful-programs.html)
- \[日本] [tcp が遅すぎる？quic を使おう！](https://medium.com/nttlabs/quic-with-rust-9cf9b44596ad)
- \[西班牙文] [rust para embebidos](https://dev.to/iddar/rust-para-embebidos-4agn)
- \[葡萄牙语] [aprendendo rust: 03 - variáveis](https://dev.to/pehdepano/aprendendo-rust-03-variaveis-57a8)
- \[葡萄牙语] \[视频] [Curso Rust 🦀 - Aula 4 - strings, match, sorteio, quizz](https://www.twitch.tv/videos/681897847)
- \[视频] [boiled down crate 🦀: oncecell](https://www.youtube.com/watch?v=YBG8QTO8fNI&feature=youtu.be)
- \[视频] [rust: what is ownership and borrowing](https://www.youtube.com/watch?v=79phqVpE7cU)

# 周箱

这周的箱子是[pre](https://github.com/aticu/pre)，用于声明和检查， precondition（前提条件）保证 的库，对不安全的函数有用。

谢谢[Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/792)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [zbus 正在寻找贡献者](https://gitlab.freedesktop.org/zeenix/zbus/-/issues)
- [just：添加可扩展配方，和 justfile 属性](https://github.com/casey/just/issues/604)
- [libpnet：icmp 中的 Segfault 发送](https://github.com/libpnet/libpnet/issues/449)
- [rust：在 window 上，fs::remove_dir_all 用于大目录，很少成功](https://github.com/rust-lang/rust/issues/29497)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 394 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-07-13..2020-07-20

- [不要尝试获取，已错误的 trait impls 的'祖先'(ancestors)](https://github.com/rust-lang/rust/pull/74516)
- [只跳过 foreign(外部) unstable traits 的 impls](https://github.com/rust-lang/rust/pull/74534)
- [不要将`()`，分配到`!` MIR locals](https://github.com/rust-lang/rust/pull/74411)
- [一些`Symbol`相关改进](https://github.com/rust-lang/rust/pull/74357)
- [use `ArrayVec` in `SparseBitSet`](https://github.com/rust-lang/rust/pull/74310)
- [将`SymbolName::name`更改为一个`&str`](https://github.com/rust-lang/rust/pull/74214)
- [强制让 static symbol，有序](https://github.com/rust-lang/rust/pull/74203)
- [减少在 const eval 中，大量的 interning 和`layout_of` calls](https://github.com/rust-lang/rust/pull/74202)
- [添加 `Arguments::as_str()`](https://github.com/rust-lang/rust/pull/74056)
- [`impl Index<RangeFrom> for CStr`](https://github.com/rust-lang/rust/pull/74021)
- [向 raw（和 NonNull）slices，添加（unchecked）索引方法](https://github.com/rust-lang/rust/pull/73986)
- [让一些`Option`方法，变为 const](https://github.com/rust-lang/rust/pull/73930)
- [在 range iter impls 中，更自由地用`step_unchecked`](https://github.com/rust-lang/rust/pull/73490)
- [添加`core::task::ready!`宏](https://github.com/rust-lang/rust/pull/70817)
- [backtrace：在 Miri 上，使用 noop 后端](https://github.com/rust-lang/backtrace-rs/pull/360)
- [stdarch：更新和改进 wasm32 SIMD 内部函数](https://github.com/rust-lang/stdarch/pull/874)
- [stdarch：实现 AVX512f 浮点数比较](https://github.com/rust-lang/stdarch/pull/869)
- [stdarch：更详细地构筑所有 x86 `rustc_args_required_const`内在函数](https://github.com/rust-lang/stdarch/pull/876)
- [使`unreachable_unchecked` 变为 const fn](https://github.com/rust-lang/rust/pull/74459)
- [cargo：修复重命名目录中，build scripts 的'新鲜度'检查](https://github.com/rust-lang/cargo/pull/8497)
- [crates.io：使用安全的 RNG，生成 API 令牌，并存储哈希值](https://github.com/rust-lang/crates.io/pull/2637)
- [将 Ayu 主题添加到 rustdoc](https://github.com/rust-lang/rust/pull/71237)
- [clippy：`unnecessary_sort_by`：如果 key borrows，避免进行 lint](https://github.com/rust-lang/rust-clippy/pull/5756)

## Rust 编译器性能分类

- [2020-07-21](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-07-21.md)。灾难性的一周。至少 7 次性能退化。3 项改进。这些汇总带来了大量的浮躁情绪。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC：“C unwind” ABI](https://github.com/rust-lang/rfcs/pull/2945)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： core::future::{pending,ready}](https://github.com/rust-lang/rust/pull/74328)
- \[处置：合并] [让更多的原语整数方法，变为 const](https://github.com/rust-lang/rust/pull/73858)
- \[处置：合并] [为 panic::Location，派生常用的 traits](https://github.com/rust-lang/rust/pull/73583)

## 新的 RFC

- [为了支持专有功能，添加`oneof`配置命令](https://github.com/rust-lang/rfcs/pull/2962)
- [RFC：将 aarch64-unknown-linux-gnu 升级为 Tier-1 Rust 目标](https://github.com/rust-lang/rfcs/pull/2959)
- [添加 Drop::poll_drop_ready ，可用于异步析构函数](https://github.com/rust-lang/rfcs/pull/2958)
- [稳定化： Cargo 的 new feature resolver](https://github.com/rust-lang/rfcs/pull/2957)
- [添加 partial-closure-args RFC](https://github.com/rust-lang/rfcs/pull/2956)

# 本周最佳语录

> `unsafe` Rust 总是与 UB(未定义行为) 调情，但从不"进去"。

– [Ralf Jung on Zulip](https://rust-lang.zulipchat.com/#narrow/stream/136281-t-lang.2Fwg-unsafe-code-guidelines/topic/Language.20UB.20vs.20library.20UB/near/204212193)

Thanks to [HeroicKatora](https://users.rust-lang.org/t/twir-quote-of-the-week/328/913) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/hvjf4i/this_week_in_rust_348/)small>
