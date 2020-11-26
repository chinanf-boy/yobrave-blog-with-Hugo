---
title: "Rust周报 365(译)"
date: 2020-11-21T00:24:55+08:00
tags: ["week"]
description: "螃蟹-Rust周报-365"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-11-18
- [原文：365 期](https://this-week-in-rust.org/blog/2020/11/18/this-week-in-rust-365/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Announcing Rust 1.48.0](https://blog.rust-lang.org/2020/11/19/Rust-1.48.html)
- \[内部] [source-based 代码覆盖率 in nightly](https://blog.rust-lang.org/inside-rust/2020/11/12/source-based-code-coverage.html)

### Newsletters

### Tooling

- [IntelliJ Rust Changelog #135](https://intellij-rust.github.io/2020/11/16/changelog-135.html)
- [Rust-Analyzer Changelog #51](https://rust-analyzer.github.io/thisweek/2020/11/16/changelog-51.html)
- [Knurling-rs Changelog #6](https://ferrous-systems.com/blog/knurling-changelog-6/)

### Observations/Thoughts

- [ECS 规划者想法, Part 1](https://ratysz.github.io/article/scheduling-1/)
- [生成一个 config 文件模板, for CLI tools in Rust](https://tarquin-the-brave.github.io/blog/posts/generating-config-reference-rust-cli/)
- [Rust in 2021](https://dev.to/tjtelan/rust-in-2021-5p6)
- [Anonymous Sum Types(各类错误类型合集) for Rust Error Handling](https://jam1.re/blog/anonymous-sum-types-for-rust-errors)
- [C 标准库不是没有依赖](https://prilik.com/blog/post/c-is-not-dependency-free/)
- [Trait 实现的'可见性'](https://jack.wrenn.fyi/blog/private-trait-impls/)

### Rust Walkthroughs

- [SQLite 文件解析器 Pt. 2: The Header... continues](https://freemasen.com//blog/sqlite-parser-pt-2/index.html)
- [Rust from a Gopher - Lessons 7, 8 & 9](https://levpaul.com/posts/rust-lesson-7-8-9/)
- [编写一个嵌入式显示驱动 in Rust](https://nitschinger.at/Writing-an-embedded-display-driver-in-Rust/)
- [Rocket Tutorial 03: Proper routing](https://dev.to/davidedelpapa/rocket-tutorial-03-proper-routing-4ch3)
- [Intro to Yew, a Rust Frontend Framework](https://dev.to/fllstck/intro-to-yew-a-rust-frontend-framework-20hb)
- [Ownership 谜题 with Rust, Async, and Hyper](https://www.fpcomplete.com/blog/ownership-puzzle-rust-async-hyper/)
- [Make A Language - Part Ten: Starting Again](https://arzg.github.io/lang/10/)
- [Make A Language - Part Eleven: Refinements](https://arzg.github.io/lang/11/)
- [OS in Rust: 构建'Custom target'的内核 for a bare metal: Part-3](https://blog.knoldus.com/os-in-rust-custom-target-to-build-kernel-for-a-bare-metal-part-3/)
- [创建俄罗斯方块游戏复刻 in Rust, with Bevy (Part 1)](https://corbamico.github.io/2020/11/12/tetris-1/)
- \[PL] [crabbybird #3 generowanie świata gry – cześć i](https://postacnormalna.pl/crabbybird-3-generowanie-swiata-gry-czesc-i/)
- \[视频] [crust of rust: sorting algorithms](https://youtu.be/h4RkCyJyXmM)
- \[视频] [(live coding) audio adventures in rust: ui with actix, webview, and react](https://youtu.be/vmvq9jKBlGc)

### Project Updates

- [Tgfx/wgpu 生态大蓝图](https://gfx-rs.github.io/2020/11/16/big-picture.html)
- [xd(1): 二进制查看器,赋予 ♥♪ ♫♥ ，人类可读](https://www.azabani.com/2020/11/15/xd.html)
- [Fwumious Wabbit: 非常快的逻辑回归 (+more) in Rust](https://andraztori.medium.com/speed-is-a-feature-introducing-fwumious-wabbit-1cc9573ea7be)
- [Rust for Mod 游戏](https://jam1.re/blog/rust-for-game-modding)
- [reacty_yew: 通过 Typescript type definitions，将 React 组件，生成 Yew 组件](https://www.hobofan.com/blog/2020-11-10-reacty_yew/)
- [Servo's 新家](https://blog.servo.org/2020/11/17/servo-home/)

### Miscellaneous

- [Dog Fight — Python VS Golang VS Rust for JSON 处理](https://medium.com/swlh/dog-fight-python-vs-golang-vs-rust-for-json-processing-33c1ffe15ab9)
- [构建一个 SMS 警告系统 over the weekend with Rust and Zero-Cost](https://towardsdatascience.com/build-an-sms-alert-system-for-canada-covid-19-cases-over-the-weekend-with-rust-and-zero-cost-235bb59ec5d)
- [构建一个可扩展的交易机器人 With Rust Over the Weekend](https://medium.com/swlh/build-a-scalable-trading-bot-with-rust-over-the-weekend-9fd781940360)
- [Oh No! 我的数据分析正朝着 Rust-y 前进](https://www.crowdstrike.com/blog/data-science-test-drive-of-rust-programming-language/)
- [Ownership 易用性](https://arxiv.org/abs/2011.06171)

# Crate of the Week

这周的箱子是[lingua](https://github.com/pemistahl/lingua-rs)，一种基于 ngrams 的自然语言检测器。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/841)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [gfx-rs/naga - DirectX IR](https://github.com/gfx-rs/naga/issues/5)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 299 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-11-09..2020-11-16

- [启用 LLVM Polly via llvm-args](https://github.com/rust-lang/rust/pull/78566)
- [实现 解构分配 for structs and slices](https://github.com/rust-lang/rust/pull/78836)
- [在解构分配中， `_` 一个表达式, 可以弃用那个值](https://github.com/rust-lang/rust/pull/79016)
- [添加： asm register information for SPIR-V](https://github.com/rust-lang/rust/pull/78950)
- [添加： `#[cfg(panic = '...')]`](https://github.com/rust-lang/rust/pull/74754)
- [resolve: 瓦解 `macro_rules` scope chains ](https://github.com/rust-lang/rust/pull/78826)
- [不要用不兼容属性，inline C variadics, cold functions, functions](https://github.com/rust-lang/rust/pull/78966)
- [在 validation 期间，标准化 function type ](https://github.com/rust-lang/rust/pull/78969)
- [省略一些暂时性的 vectors](https://github.com/rust-lang/rust/pull/77990)
- [不收集 tokens for doc comments](https://github.com/rust-lang/rust/pull/78782)
- [chalk: variance](https://github.com/rust-lang/chalk/pull/609)
- [lower intrinsics calls: forget, size*of, unreachable, wrapping\_*](https://github.com/rust-lang/rust/pull/79049)
- [将 likely/unlikely 参数，移出 invisible unsafe block](https://github.com/rust-lang/rust/pull/79058)
- [将 `io::copy` 专用于 `copy_file_range`, `splice` or `sendfile`](https://github.com/rust-lang/rust/pull/75272)
- [提升 `BinaryHeap` 性能](https://github.com/rust-lang/rust/pull/78857)
- [BTreeMap: 修复 pointer provenance rules in underfullness](https://github.com/rust-lang/rust/pull/78631)
- [实现 BTreeMap::retain 和 BTreeSet::retain](https://github.com/rust-lang/rust/pull/79026)
- [cargo: 提升近完整构建的性能](https://github.com/rust-lang/cargo/pull/8837)
- [rustfmt: 为 std, external crates, 和 other imports，创建 groups 选项， ](https://github.com/rust-lang/rustfmt/pull/4445)

## Rust Compiler Performance Triage

- [2020-11-10](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-10.md)：1 个退步，2 个改进，2 个混杂

混杂的一周中，改进仍然胜过退步。也许最大的亮点是编译 rustc 箱子的举动，[with the initial-exec TLS model](https://github.com/rust-lang/rust/pull/78201)，减少了对`_tls_get_addr`的调用，从而缩短了编译时间。

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-10.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [rfc: -c export-executable-symbols](https://github.com/rust-lang/rfcs/pull/2841)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [处置: 合并] [Add `PartialEq<char>` for proc_macro::Punct](https://github.com/rust-lang/rust/pull/78636)
- [处置: 合并] [Implement PartialEq for proc_macro::Ident == strings](https://github.com/rust-lang/rust/pull/78634)
- [处置: 合并] [稳定化： refcell_take](https://github.com/rust-lang/rust/pull/78608)
- [处置: 合并] [稳定化： alloc::Layout const functions](https://github.com/rust-lang/rust/pull/78305)
- [处置: 合并] [Impl Default for PhantomPinned](https://github.com/rust-lang/rust/pull/77893)
- [处置: 合并] [稳定化： const_int_pow](https://github.com/rust-lang/rust/pull/76829)
- [处置: 合并] [稳定化： `IpAddr::is_ipv4` and `is_ipv6` as const](https://github.com/rust-lang/rust/pull/76226)
- [处置: 合并] [稳定化： the backtrace feature.](https://github.com/rust-lang/rust/pull/72981)
- [处置: 合并] [跟踪问题：将 `bool` 转换成 `Option<T>`的方法](https://github.com/rust-lang/rust/issues/64260)

## New RFCs

- [允许指定隐含的 lib dependency 的功能](https://github.com/rust-lang/rfcs/pull/3020)

# Quote of the Week

这次，我们有两个引用句：

> 我只是花了 8 个小时找到一个可变性错误，现在我想成为猫女。

–[@castle_vanity on twitter](https://twitter.com/castle_vanity/status/1327352639303135239)，回应到 C ++程序员描述为肌肉发达的健美运动员，而 Rust 程序员描述为猫女 的帖子

谢谢[Maximilian Goisser](https://users.rust-lang.org/t/twir-quote-of-the-week/328/966)的建议。

> 代码人，所写的，先是给编译器的问题，然后是给予修改该代码的故事。

– [Esteban Kuber on /r/rust](https://www.reddit.com/r/rust/comments/jslo80/this_week_in_rust_364/gc2iuyo)

[llogiq](https://users.rust-lang.org/t/twir-quote-of-the-week/328/967) is mightily pleased with his suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/jx6vfl/this_week_in_rust_365/)</small>
