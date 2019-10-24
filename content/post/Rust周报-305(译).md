---
title: 'Rust周报 305(译)'
date: 2019-09-26T17:01:18+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-305'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-09-24

[原文：本周 Rust(螃蟹) 305](https://this-week-in-rust.org/blog/2019/09/24/this-week-in-rust-305/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [LLVM：缩小差距 - Rust 和 C / C ++之间的跨语言 LTO](http://blog.llvm.org/2019/09/closing-gap-cross-language-lto-between.html)。
- [Weld：使用 Rust 和 LLVM 将 numpy，scikit 和 pandas 加速多达 100 倍](https://notamonadtutorial.com/weld-accelerating-numpy-scikit-and-pandas-as-much-as-100x-with-rust-and-llvm-12ec1c630a1)。
- [声明式内存管理](https://amos.me/blog/2019/declarative-memory-management/)。
- [泛型新类型：一种解决 orphan 规则的方法](https://blog.eizinger.io/8593/generic-newtypes-a-way-to-work-around-the-orphan-rule)。
- [Async 构建器](https://blog.yoshuawuyts.com/async-finalizers/)。
- [Adventures in motion control：顶层基础架构](http://adventures.michaelfbryan.com/posts/top-level-infrastructure/)。
- [使用 Apache Mynewt 和 Embedded Rust 在 STM32 L476 上，构建 NB-IoT GPS 跟踪器](https://medium.com/@ly.lee/build-an-nb-iot-gps-tracker-on-stm32-l476-with-apache-mynewt-and-embedded-rust-8c095a925546)。
- [导航到 Rust OSS 社区](https://yaah.dev/getting-involved)。

# 本周的箱子

本周的箱子是[runtime](https://github.com/mun-lang/runtime)，是面向实验性的热加载的运行时。

谢谢[维克兰特](https://users.rust-lang.org/t/crate-of-the-week/2704/628)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

_没有针对 CfP 提出任何问题_。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了，共有 278 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-09-16..2019-09-23

- [更加一致地推断 const](https://github.com/rust-lang/rust/pull/64679)
- [解析泛型参数中的 assoc 类型范围，并提供自定义诊断](https://github.com/rust-lang/rust/pull/64676)
- [更新到 LLVM 9.0.0](https://github.com/rust-lang/rust/pull/64634)
- [rustbuild：箱子 doc 文件的 Copy 次数更少](https://github.com/rust-lang/rust/pull/64613)
- [发出的 lint 无法到达时，指向原始 span ](https://github.com/rust-lang/rust/pull/64592)
- [在 generator witnesses 中，记录较少的调整类型，避免 MIR 构造中的 spurious drops](https://github.com/rust-lang/rust/pull/64584)
- [更多`ObligationForest`改进](https://github.com/rust-lang/rust/pull/64545)
- [用`state_for_location`更换成`DataflowResultsCursor`](https://github.com/rust-lang/rust/pull/64532)
- [以正确的顺序加载 proc 宏元数据](https://github.com/rust-lang/rust/pull/64528)
- [各个`ObligationForest`改进](https://github.com/rust-lang/rust/pull/64500)
- [收缩`SubregionOrigin`](https://github.com/rust-lang/rust/pull/64394)
- [保存分析：处理函数/方法时，嵌套 typeck 表](https://github.com/rust-lang/rust/pull/64250)
- [增加`cmp::{min_by, min_by_key, max_by, max_by_key}`](https://github.com/rust-lang/rust/pull/64047)
- [稳定化`param_attrs`，在 Rust 1.39.0 中](https://github.com/rust-lang/rust/pull/64010)
- [确保内联常数不可变](https://github.com/rust-lang/rust/pull/63955)
- [增强了跨平台编译 doctest 的能力](https://github.com/rust-lang/cargo/pull/6892)
- [添加 `std_detect::detect::features()`API，该 API 返回 target-features 的迭代器，并拒绝 feature-detection 宏中的不稳定 features](https://github.com/rust-lang/stdarch/pull/739)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

_本周未批准任何 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处理：推迟] [带有外部定义的 existential types](https://github.com/rust-lang/rfcs/pull/2492)。
- \[处理：推迟] [custom self types](https://github.com/rust-lang/rfcs/pull/2362)。
- \[处理：推迟] [cargo 版本](https://github.com/rust-lang/rfcs/pull/2182)。
- \[处理：关闭] [基于项目的示例，cargo 项目](https://github.com/rust-lang/rfcs/pull/2517)。

### [跟踪问题和 PR](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [稳定化某些位置上的宏](https://github.com/rust-lang/rust/pull/63931)。
- \[处理：合并] [稳定化 `option::as_deref` 和 `option::as_deref_mut`](https://github.com/rust-lang/rust/pull/64708)。
- \[处理：合并] [稳定化 mem::take (mem_take)](https://github.com/rust-lang/rust/pull/64716)。
- \[处理：合并: ] [RFC 2008 的跟踪问题：面向 Future 的枚举/结构，带有 #[non_exhaustive] 属性](https://github.com/rust-lang/rust/issues/44109)。
- \[处理：合并] [支持 adts 的 repr(simd) 包含一个数组字段](https://github.com/rust-lang/rust/pull/63531)。
- \[处理：合并] [语法: 支持现代属性语法，在 `meta` matcher](https://github.com/rust-lang/rust/pull/63674)。
- \[处理：合并] [将 `\r\n` -> `\n`，位置在 include_str! 宏](https://github.com/rust-lang/rust/pull/63681)。
- \[处理：关闭] [退步: 无法确定属性宏`test`的 resolution](https://github.com/rust-lang/rust/issues/56375)。
- \[处理：关闭] [暴露 linux syscall 接口](https://github.com/rust-lang/rust/pull/63745)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 即将举行的活动

### 亚太地区

- [9 月 28 日，TW，台北-Rust 台湾聚会](https://www.facebook.com/events/2110177005945081/)。
- [10 月 7 日，新西兰奥克兰 - Rust AKL-Rust 简介（第 2 部分，共 3 部分）](https://www.meetup.com/rust-akl/events/259481147/)。

如果您正在组织 Rust 活动，请将其添加到[日历][calendar]，就能在此提及。请记住也要添加到活动的链接。可试着电子邮件到[Rust 社区小组][community]。

[calendar]: https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com
[community]: mailto:community-team@rust-lang.org

# 本周引用句

> 我不喜欢把 Rust 归类为“更安全的 C++” —— 它远不止这些。
>
> 最近这说法比较多。但它忽略了一个事实，即 Rust 已经积极地打开了系统编程的大门，迎接来自像 JavaScript 语言的人们，而这，是 C 和 C++ 从来没有做过的。

\-[Benjamin Fry @推特上](https://twitter.com/benj_fry/status/1173754548453699584)

多谢了[斯维尔约翰比尔克](https://users.rust-lang.org/t/twir-quote-of-the-week/328/703)的这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
