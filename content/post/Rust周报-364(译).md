---
title: "Rust周报 364(译)"
date: 2020-11-14T18:02:52+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-364"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-11-11
- [原文：364 期](https://this-week-in-rust.org/blog/2020/11/11/this-week-in-rust-364/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [内部] [Rust compiler，PGO（按配置优化）](https://blog.rust-lang.org/inside-rust/2020/11/11/exploring-pgo-for-the-rust-compiler)

### Newsletters

- [This Month in Rust OSDev (October 2020)](https://rust-osdev.com/this-month/2020-10/)
- [This Month in Rust GameDev #15 - October 2020](https://rust-gamedev.github.io/posts/newsletter-015/)

### Tooling

- [Rust-Analyzer Changelog #50](https://rust-analyzer.github.io/thisweek/2020/11/09/changelog-50.html)
- [用 OKteto 进行 Kubernetes 化，开发 & 发布 Your Rust Application](https://okteto.com/blog/getting-started-with-okteto-and-rust/)

### Observations/Thoughts

- [Rust 光追器, 一次更新 (and SIMD)](https://siliconsprawl.com/2020/11/06/simd-ray-tracer.html)
- [Rust 的 emit=asm 功能可能会被误解](https://siliconsprawl.com/2020/11/09/rust-emit-asm.html)
- [静态分析器配置: Clippy for Rust, part 1](https://medium.com/monocodus/a-survey-into-static-analyzers-configurations-clippy-for-rust-part-1-5de50fd9326)
- [为啥说 Rust 是游戏开发的未来](https://thefuntastic.com/blog/why-rust-is-the-future-game-dev?)
- [Rust 是一个 ’丰满‘的高级语言](https://omarabid.com/rust-high-level-language)
- [40 毫秒 bug](https://vorner.github.io/2020/11/06/40-ms-bug.html)
- [后处理型的宏 in Rust](https://gist.github.com/est31/8d0465997ea920c5ba917cbbf80a822d)
- [权衡性，嵌入式数据](https://nickb.dev/blog/a-quick-tour-of-trade-offs-embedding-data-in-rust)
- [Why Developers Love Rust](https://ibraheem.ca/posts/why-devs-love-rust)

### Rust Walkthroughs

- [Make a Language - Part Nine: Function Calls](https://arzg.github.io/lang/9/)
- [构建一个天气站 UI](https://blog.kdubovikov.ml/articles/rust/ui/weather-station-ui)
- [获取图像输出 from our Custom RISC-V Operating System in Rust](https://blog.stephenmarz.com/2020/11/11/risc-v-os-using-rust-graphics/)
- [Build your own: GPG](https://andrewhalle.github.io/build-your-own/gpg)
- [Rpi 4 遇见 Flutter 与 Rust](https://dev.to/charliefoxtrot/rpi-4-meets-flutter-and-rust-23ma)
- [AWS Lambda + Rust](https://dev.to/rad_val_/aws-lambda-rust-292g)
- [Orchestration（编排） in Rust](https://dev.to/elasticrash/orchestration-in-rust-549b)
- [Rocket Tutorial 02: Minimalist API](https://dev.to/davidedelpapa/rocket-tutorial-02-minimalist-api-2kl6)
- [简单 IO 分析 using Rust (throughput, ...)](https://dev.to/martichou/get-simple-io-stats-using-rust-throughput-47m4)
- [Type-Safe 离散事件仿真 in Rust](https://dev.to/elshize/type-safe-discrete-simulation-in-rust-3n7d)
- [系列] [a gemini client in rust](https://dev.to/krowemoh/series/9524)
- [处理一系列 Items with Iterators in Rust](https://blog.knoldus.com/processing-a-series-of-items-with-iterators-in-rust/)
- [Active Directory（管理网络目录权限）的日志汇集 Using Rust](https://blog.knoldus.com/compilation-of-active-directory-logs-using-rust/)
- \[FR] [the rust programming language (translated in french)](https://jimskapt.github.io/rust-book-fr/)

### Project Updates

- [新的 doc 注释控制实现 in rustdoc](https://blog.guillaume-gomez.fr/articles/2020-11-11+New+doc+comment+handling+in+rustdoc)

### Miscellaneous

- [Rust vs Go](https://bitfieldconsulting.com/golang/rust-vs-go)
- [我是这样学习汇编的：通过编写大量的操蛋的编译器 in Rust](https://github.com/pretzelhammer/rust-blog/blob/master/posts/too-many-brainfuck-compilers.md)

# Crate of the Week

这周的箱子是[postfix-macros](https://github.com/est31/postfix-macros)，这是一个聪明的技巧箱子，可以在 stable Rust 中，使用 postfix 宏。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/841)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [time-rs: `localtime_r`的调用可能不合理](https://github.com/time-rs/time/issues/293)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 333 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-11-02..2020-11-09

- [实现 tuples 的解构分配](https://github.com/rust-lang/rust/pull/78748)
- [反转 matches 的 binding 顺序，以允许绑定`@` 之后的 subbinding of copyable fields](https://github.com/rust-lang/rust/pull/78638)
- [修复 or-patterns 里，无法执行的 sub-branch detection](https://github.com/rust-lang/rust/pull/78167)
- [将 post order walk 转为一个 iterative approach](https://github.com/rust-lang/rust/pull/78607)
- [用 initial-exec TLS model，编译 rustc crates ](https://github.com/rust-lang/rust/pull/78201)
- [让一些`std::io` 函数，`const`化](https://github.com/rust-lang/rust/pull/78811)
- [稳定化：`Poll::is_ready` 和 `is_pending` as const](https://github.com/rust-lang/rust/pull/76227)
- [稳定化：`hint::spin_loop`](https://github.com/rust-lang/rust/pull/76097)
- [简化 `Cell::get_mut` 实现](https://github.com/rust-lang/rust/pull/78735)
- [futures: 添加 `StreamExt::cycle`](https://github.com/rust-lang/futures-rs/pull/2252)
- [futures: 添加 `TryStreamExt::try_buffered`](https://github.com/rust-lang/futures-rs/pull/2245)
- [cargo: 避免 new feature resolver，一些额外的下载](https://github.com/rust-lang/cargo/pull/8823)

## Rust Compiler Performance Triage

- [2020-11-10](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-10.md)：1 个退步，2 个改进，2 个混合

本周仍是改进的。也许最大的亮点是[使用 initial-exec TLS model](https://github.com/rust-lang/rust/pull/78201)，去编译 rustc 箱子的举动，减少了对`_tls_get_addr`的调用，从而缩短了编译时间。

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-10.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [处置：合并] [稳定化：clamp](https://github.com/rust-lang/rust/pull/77872)
- [处置：合并] [[android] 向 libstd 添加对 android 的文件描述符所有权标记的支持。](https://github.com/rust-lang/rust/pull/74860)
- [处置：合并] [implement Error for & (impl Error)](https://github.com/rust-lang/rust/pull/75180)
- [处置：合并] [添加对 unsafe_code lint，关于 no_mangle 的检查](https://github.com/rust-lang/rust/pull/72209)
- [处置：合并] [跟踪问题：从 `bool` 转换到 `option<t>` 的方法](https://github.com/rust-lang/rust/issues/64260)

## New RFCs

- [User/ardavis/checked cfg](https://github.com/rust-lang/rfcs/pull/3013)
- [添加 const-ub RFC](https://github.com/rust-lang/rfcs/pull/3016)
- [添加 `must_not_await_lint` RFC](https://github.com/rust-lang/rfcs/pull/3014)

# Quote of the Week

> 没有不好的程序员，只有不够先进的编译器

– [Esteban Kuber on twitter](https://twitter.com/ekuber/status/1319476290395664384)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/957) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/jslo80/this_week_in_rust_364/)</small>
