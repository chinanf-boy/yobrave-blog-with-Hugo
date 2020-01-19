---
title: 'Rust周报 301(译)'
date: 2019-09-04T14:07:11+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-301'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

2019 年 8 月 27 日

[原文：本周 Rust(螃蟹) 301](https://this-week-in-rust.org/blog/2019/08/27/this-week-in-rust-301/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls).

# 来自 Rust 社区的更新

## 新闻和博客文章

- [小 Rust 结构，应通过复制或借用传递](https://www.forrestthewoods.com/blog/should-small-rust-structs-be-passed-by-copy-or-by-borrow/)？
- [关于 Rust bloat 的思考](https://raphlinus.github.io/rust/2019/08/21/rust-bloat.html).
- [Rust GUI 生态系统概述](https://gitlab.com/z0mbie42/rust_gui_ecosystem_overview).
- [c2rust 简介](https://immunant.com/blog/2019/08/introduction-to-c2rust/).
- [Rust 中的异步堆栈跟踪](http://fitzgeraldnick.com/2019/08/27/async-stacks-in-rust.html).
- [小规模科学计算的案例研究 - Polsim](https://tinkering.xyz/polsim/).
- [Rust 中的内存管理：实体组件系统(ECS)](https://mmstick.keybase.pub/managing-memory-in-rust-ecs/).
- [实际上使用 Crev，或者，信任软件依赖性的问题](https://wiki.alopex.li/ActuallyUsingCrev).
- [2019 年 COSCUP “一切尽在 Rust”回顾](https://medium.com/coding-neutrino-blog/review-of-everything-in-rust-of-coscup-2019-54152467d1c6).

# 本周的箱子

本周的箱子是[include_flate](https://crates.io/crates/include_flate)，`include_bytes!`/`include_str`的变体，会在编译时压缩，和运行时延迟解压。

多亏了[威利·卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/606)提交了这个建议！

[提交你下周的建议和投票](https://users.rust-lang.org/t/crate-of-the-week/2704)！

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

_没有针对 CFP 提出任何问题_。

如果你是一个 Rust 项目的所有者，并且正在寻找贡献者，请[在这里](https://users.rust-lang.org/t/twir-call-for-participation/4821)提交任务。

# Rust Core 更新

[上周合并](https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-08-19..2019-08-26)221 个请求

- [稳定`async_await` - Rust 1.39.0](https://github.com/rust-lang/rust/pull/63209)
- [在一个项中，写下声明性宏时，只能在该宏内部访问](https://github.com/rust-lang/rust/pull/63624)
- [改进诊断：在错误的上下文中，中断/继续](https://github.com/rust-lang/rust/pull/63780)
- [内置宏，`apply_mark`用作审计 + 删除默认宏透明度](https://github.com/rust-lang/rust/pull/63823)
- [确保 MIRI 可以对指针值，执行位操作](https://github.com/rust-lang/rust/pull/63839)
- [为整数，使用更优化的`Ord`实现](https://github.com/rust-lang/rust/pull/63767)
- [修正在`iter::Chain::size_hint`的错误](https://github.com/rust-lang/rust/pull/63691)
- [为`ChunksExactMut`实现`nth_back`](https://github.com/rust-lang/rust/pull/63265)
- [避免`std::io::Take::read_to_end`的不必要保留](https://github.com/rust-lang/rust/pull/63216)
- [cargo：修复`error:`/`warning:`着色与 Rustc 不一致](https://github.com/rust-lang/cargo/pull/7294)
- [rustdoc：在内联文档中，支持`impl Trait`](https://github.com/rust-lang/rust/pull/61613)
- [Rust：用 MaybeUninit 替换 mem::uninitialized](https://github.com/rust-lang/rustup.rs/pull/1963)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

_本周没有批准任何 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)会宣布，正在作出决定的 RFC 和关键 PRS 的“最终评论期”。现在表达你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [hint::bench_black_box](https://github.com/rust-lang/rfcs/pull/2360).

### [跟踪问题和 PRS](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [构造 LinkedList 新函数](https://github.com/rust-lang/rust/pull/63684).
- \[处置：合并] [测试是否为所有 int 类型，实现了包装算术运算](https://github.com/rust-lang/rust/pull/63692)。

## 新的 RFC

_本周没有提出新的 RFC。_

# 本周引用句

> 正如李小龙练习截拳道，能囊括所有风格。Rust 就是一种不受任何一个范式的语言。与其把它放进一个固定的思想中，不如好好摸索一下。 Rust 不是 Haskell ，也不是 C。它与每种语言都有共同点，但同时还有属于自己的独有特点。**“Be Water, my friend”**

-[Alexander Nye on rust-users](https://users.rust-lang.org/t/idiomatic-rust-favors-functional-or-imperative-style/31720/2)

多亏了[路易斯·克鲁特](https://users.rust-lang.org/t/twir-quote-of-the-week/328/685)提交了这个建议！

[请提交引用句，并投票下周！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_本周《 Rust》的编辑：[nasa42](https://github.com/nasa42)，[llogiq](https://github.com/llogiq)和[Flavsditz](https://github.com/Flavsditz)._

[关于 r/rust 的讨论](https://www.reddit.com/r/rust/comments/cwmfb6/this_week_in_rust_301/).

### Like what you see? Subscribe!

Receive a weekly newsletter, every Tuesday. Easy to unsubscribe and no spam, promise.

- [past issues](https://this-week-in-rust.org/blog/archives/index.html)
- [atom feed](https://this-week-in-rust.org/atom.xml)
- [rss feed](https://this-week-in-rust.org/rss.xml)
- [source code](https://github.com/cmr/this-week-in-rust)

- [twitter](https://twitter.com/ThisWeekInRust)

- [privacy policy](https://this-week-in-rust.org/pages/privacy-policy.html)
- [cc-by-sa-4.0](http://creativecommons.org/licenses/by-sa/4.0/)
