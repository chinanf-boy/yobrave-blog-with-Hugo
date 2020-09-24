---
title: "Rust周报 356(译)"
date: 2020-09-18T12:03:53+08:00
tags: ["week"]
description: "螃蟹-Rust周报-356"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-09-16
- [原文：356 期](https://this-week-in-rust.org/blog/2020/09/16/this-week-in-rust-356/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community（Rust 社区更新）

### Newsletters（时讯）

本周没有时讯

### Official（官方）

- [发起 2020 Rust 状态调查](https://blog.rust-lang.org/2020/09/10/survey-launch.html)
- [WG-prioritization 团队，呼吁参与](https://blog.rust-lang.org/2020/09/14/wg-prio-call-for-contributors.html)

### Tooling（工具）

- [Rust Analyzer Changelog #42](https://rust-analyzer.github.io/thisweek/2020/09/14/changelog-42.html)

### Observations/Thoughts（观察/思考）

- [哪些解析方法?](https://tratt.net/laurie/blog/entries/which_parsing_approach.html)
- [挑战 LR Parsing](https://rust-analyzer.github.io//blog/2020/09/16/challeging-LR-parsing.html)
- [从对 Http4k, Ktor (Kotlin) 和 Actix v2, v3 (Rust) Microservices 的基准测试中，学到什么](https://matej.laitl.cz/bench-rust-kotlin-microservices/)
- [Rust 中没有 Namespaces，可以是一个 Feature](https://samsieber.tech/posts/2020/09/registry-structure-influence/)
- [构建 devserver: 一个超少的 Rust Server](https://ianjk.com/devserver/)
- [驯服 nalgebra's Rustdoc](https://jack.wrenn.fyi/blog/rustdocing-nalgebra/)
- [Rust 在科学 和不断变化的需求的应用](https://amanjeev.com/blog/rust-in-science-and-ever-changing-requirements)
- [From @Test to #[test]: 一个关于 Java 和 Rust 之间测试的小故事](https://mateuscosta.me/testing-between-java-and-rust)

### Learn Standard Rust

- [用一个 API，收集数据](https://davidmaceachern.com/posts/collecting-data-from-an-api)
- [SQLite 文件解析器 第一部分: The Header](https://wiredforge.com/blog/sqlite-parser-pt-1/index.html)
- [Rust 面向数据设计的介绍](https://jamesmcm.github.io/blog/2020/07/25/intro-dod/)
- [Rust for Java developers](https://blog.codecentric.de/en/2020/09/rust-for-java-developers/)
- [用 zbus 为桌面应用增色](https://belmoussaoui.com/article/13-oxidizing-portals)

### Learn More Rust

- [实现 Records in x7](https://dpbriggs.ca/blog/Implementing-Method-Calls-In-x7)
- [让我们构建一体 gRPC server-client 二进制文件 with Rust in 2020 - 第四部分](https://dev.to/tjtelan/let-s-build-a-single-binary-grpc-server-client-with-rust-in-2020-part-4-3k9f)
- [制造一个语言 - 第三部分: 定义 variables](https://arzg.github.io/lang/3/)
- [用 httpmock 进行 Rust HTTP 测试](https://alexliesenfeld.com/posts/2020/rust-http-testing-with-httpmock/)

### Project Updates

- [宣布 CCS811 室内空气质量传感器](https://blog.eldruin.com/ccs811-indoor-air-quality-sensor-driver-in-rust/).
- [OpenPGP 用 Rust 实现: 命名为 Sequoia 项目](https://lwn.net/SubscriberLink/830902/b751810a99460a39/)
- [AssemblyLift v0.2 预览: RPC-based IO 模块](https://dev.to/dotxlem/assemblylift-v0-2-preview-rpc-based-io-modules-2d38)
- [宣布 Actix Web v3.0](https://paper.dropbox.com/published/Announcing-Actix-Web-v3.0-QOXXb1lXgTubzXHzUq9ONY5)

### Miscellaneous（杂项）

- [你的语言糟透了, 但没有关系](https://matklad.github.io//2020/09/13/your-language-sucks.html)
- [Rust 在 2020 9 月 TIOBE Index，排在第 18 位](https://www.tiobe.com/tiobe-index/)
- [一些 Github Action "Recipes"（食谱）for Rust](https://shift.click/blog/github-actions-rust/)
- [编写一个 x86 启动加载器 in Rust，这样可以启动 vmlinux](https://vmm.dev/en/rust/krabs.md)
- \[video] [GOTO 2020 - Next-Generation Programming: Rust & Elm - Richard Feldman](https://youtu.be/ukVqQGbxM9A)

# Call for Blog Posts

The Rust Core Team 渴望社区的新鲜血液!
如你还没有加入进来, [阅读官方的博文](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html) 并提交一篇博文 - 那么它会在这里出现!
Here are the wonderful submissions since the call for blog posts:

- [Rust in 2021](https://matklad.github.io/2020/09/12/rust-in-2021.html)
- [Rust 2021](https://hsivonen.fi/rust2021/)

# 周箱

This week's crate is [gitoxide](https://github.com/Byron/gitoxide), an idiomatic, modern, lean, fast, safe & pure Rust （git 实现）。

Thanks to [Vlad Frolov](https://users.rust-lang.org/t/crate-of-the-week/2704/812) for the suggestion!

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_No issues were proposed for CfP_.

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

336 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-09-07..2020-09-14

- [添加 rust-dev 组件，以支持 rustc development](https://github.com/rust-lang/rust/pull/76332)
- [对 spans 正确地编进一个虚假的 location 和 non-root `SyntaxContext`](https://github.com/rust-lang/rust/pull/76658)
- [添加 `const_item_mutation` lint](https://github.com/rust-lang/rust/pull/75573)
- [更多建设性建议 for boxed trait objects ，而不是 impl Trait on non-coerceable（不可强制性的） tail expressions](https://github.com/rust-lang/rust/pull/75608)
- [添加 help note ，当使用 type in place of const](https://github.com/rust-lang/rust/pull/75611)
- [绝对不要对 `&mut` of a non-ZST 进行进阶（promote）](https://github.com/rust-lang/rust/pull/75585)
- [chalk: 简化 lowering](https://github.com/rust-lang/chalk/pull/602)
- [inliner: emit storage markers for introduced arg temporaries](https://github.com/rust-lang/rust/pull/76123)
- [启用`SimplifyArmIdentity` MIR 优化 at `mir-opt-level=1`](https://github.com/rust-lang/rust/pull/76308)
- [稳定化： `doc_alias`](https://github.com/rust-lang/rust/pull/75740)
- [稳定化： `core::future::`{`pending`,`ready`}](https://github.com/rust-lang/rust/pull/74328)
- [添加 全面的方法 for `Duration`](https://github.com/rust-lang/rust/pull/76114)
- [添加 `slice::array_chunks_mut`](https://github.com/rust-lang/rust/pull/75021)
- [消除 mut reference UB in `Drop` impl for `Rc<T>`](https://github.com/rust-lang/rust/pull/76530)
- [`BTreeMap` mutable iterators 不应该获取任一 reference，去访问 nodes during iteration](https://github.com/rust-lang/rust/pull/73971)
- [`BTreeMap`: 移动 reference 到 map's root，from `NodeRef`](https://github.com/rust-lang/rust/pull/74437)
- [添加 `drain_filter` 方法到 `HashMap` 和 `HashSet`](https://github.com/rust-lang/rust/pull/76458)
- [arch: AVX512F](https://github.com/rust-lang/stdarch/pull/896)
- [添加 `MaybeUninit::assume_init_drop`](https://github.com/rust-lang/rust/pull/76484)
- [移除 内部和不稳定的 `MaybeUninit::UNINIT`](https://github.com/rust-lang/rust/pull/76527)
- [cargo: 修复 新 feature resolver 的不确定性](https://github.com/rust-lang/cargo/pull/8701)

## Rust 编译器性能分类

- [2020-09-08](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-08.md):
  0 个性能退化, 2 个提升。

本周有几个 compile-time 性能退化。第一个是
[#70793](https://github.com/rust-lang/rust/pull/70793), 其添加了一些
specializations 到标准库，为了提升 runtime 性能。第二个是
[#73996](https://github.com/rust-lang/rust/pull/73996), 其添加了一个 option 到
diagnostics 代码，用来打印唯一 types 和 traits 的名字，而不是完整路径。 第三个是
[#75200](https://github.com/rust-lang/rust/pull/75200), 它重构了
`BTreeMap` 部分代码，避免了可变引用的别名化。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [eRFC: 添加 JSON 后端到 Rustdoc](https://github.com/rust-lang/rfcs/pull/2963)

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [[RFC]: 可移植 SIMD Libs Project Group](https://github.com/rust-lang/rfcs/pull/2977)
- [从任意表达式，获取类型](https://github.com/rust-lang/rfcs/pull/2706)
- [添加常用性，友善的 tuples](https://github.com/rust-lang/rfcs/pull/2702)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [添加 `[T; N]: TryFrom<Vec<T>>` (不稳定)](https://github.com/rust-lang/rust/pull/76310)
- \[处置: 合并] [Write 实现，for 一些不可变性 ref structs](https://github.com/rust-lang/rust/pull/76275)
- \[处置: 合并] [允许 ’无人居住'的 enums ，转成 ints](https://github.com/rust-lang/rust/pull/76199)
- \[处置: 合并] [稳定化： 一些 Result 方法 as const](https://github.com/rust-lang/rust/pull/76136)
- \[处置: 合并] [稳定化： 一些 Option 方法 as const](https://github.com/rust-lang/rust/pull/76135)
- \[处置: 合并] [稳定化： move_ref_pattern](https://github.com/rust-lang/rust/pull/76119)
- \[处置: 合并] [明确记录 Option 做出的 size 保证 ](https://github.com/rust-lang/rust/pull/75454)
- \[处置: 合并] [稳定化： intra-doc links](https://github.com/rust-lang/rust/pull/74430)
- \[处置: 合并] [target-feature 1.1: 闭包应该继承 target-feature 注解吗?](https://github.com/rust-lang/rust/issues/73631)
- \[处置: 合并] [might_permit_raw_init: 还要检查合计的字段](https://github.com/rust-lang/rust/pull/71274)

## New RFCs

- [rustdoc edit links](https://github.com/rust-lang/rfcs/pull/2985)

# 本周最佳语录

> 当你的结构中存在一个 `<'a>` 生命周期注释, 那么这个生命周期表示，引用在你结构之外的值。但如果说，你尝试引用在你结构之内的值，你会发现，一旦编译器察觉你 **lied（欺骗）** 它，反手就给你一个编译错误。

- [Alice Ryhl on rust-users](https://users.rust-lang.org/t/how-to-resolve-error-e0499-cannot-borrow-as-mutable-more-than-once-at-a-time-in-this-case/48815/3)

Thanks to [Tom Phinney](https://users.rust-lang.org/t/twir-quote-of-the-week/328/939) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/iu3ge0/this_week_in_rust_356/)</small>
