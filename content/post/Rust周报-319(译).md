---
title: "Rust周报 319(译)"
date: 2020-01-03T10:42:33+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-319"
css: ["/css/main.css", "/css/stylesheet.css"]
series: "Rust周报-中文"
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-12-31

[原文：本周 Rust(螃蟹) 319](https://this-week-in-rust.org/blog/2019/12/31/this-week-in-rust-319/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust 重写 m4vgalib](http://cliffle.com/blog/m4vga-in-rust/)。
- [一项思想实验：在游戏引擎之外使用 ECS 模式](http://adventures.michaelfbryan.com/posts/ecs-outside-of-games/)。
- [Spinlocks 被认为是有害的](https://matklad.github.io//2020/01/02/spinlocks-considered-harmful.html)。
- [2020 年，ggez 的位置](https://wiki.alopex.li/TheStateOfGGEZ2020)。
- [内部可变性模式](https://pitdicker.github.io/Interior-mutability-patterns/)。
- [Clippy 应该关心'他们'从何而来](https://llogiq.github.io/2020/01/01/clippy.html)？
- [Rust 编写 AWS Lambda 函数](https://silentbyte.com/writing-aws-lambda-functions-in-rust)。
- [Rust lifetimes 和 iterators](https://blog.katona.me/2019/12/29/Rust-Lifetimes-and-Iterators/)。
- [Rocket 和多组形式](https://blog.krruzic.xyz/rocket-multipart/)。
- [Lyon 0.15.0- 新的 tessellator](https://nical.github.io/posts/new-tessellator.html)。
- [嵌入式 WG 的 Raspberry Pi OS 开发教程：教程 13 - 使用 QEMU 的内核单元，集成和控制台测试](https://github.com/rust-embedded/rust-raspi3-OS-tutorials/tree/master/13_integrated_testing)。
- [使用 Rust 和 Mynewt，优化 PineTime 的显示驱动程序](https://medium.com/@ly.lee/optimising-pinetimes-display-driver-with-rust-and-mynewt-3ba269ea2f5c)。
- [嵌入式 WG 新闻通讯 22](https://rust-embedded.github.io/blog/newsletter-22/)。
- [rust-analyzer changelog 5](https://rust-analyzer.github.io/thisweek/2019/12/30/changelog-5.html)。
- [Rust in blockchain 7 - 2019 年 12 月](https://rustinblockchain.org/2020/01/02/rust-in-blockchain-7-december-2019/)。

# 周箱

这周的箱子是[attohttpc](https://crates.io/crates/attohttpc)，一个微小的同步 HTTP 客户端库。

谢谢[Matěj Laitl](https://users.rust-lang.org/t/crate-of-the-week/2704/696)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_没有针对 CfP 提出任何问题_。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 184 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-12-23..2019-12-30

- [doc 注释：减少 attribute mimicking](https://github.com/rust-lang/rust/pull/67151)
- [要求内在函数具有 const 稳定性属性，以便能够在 constant contexts 中使用它们](https://github.com/rust-lang/rust/pull/67466)
- [稳定化：内联模块上的属性宏](https://github.com/rust-lang/rust/pull/64273)
- [标准化：`ident`](https://github.com/rust-lang/rust/pull/66670)
- [计算始终有效的常量时，解决较长的编译时间](https://github.com/rust-lang/rust/pull/67667)
- [避免 zero-size 类型的内存复制逻辑](https://github.com/rust-lang/rust/pull/67658)
- [确保，evaluating{执行} 或 validating「验证」 一个 constant{常数}，永远不 reads 一个 static ](https://github.com/rust-lang/rust/pull/67337)
- [调整错误(信息)：丢失关联的类型和类型参数](https://github.com/rust-lang/rust/pull/67268)
- [typeck：检查 range pats 时，记下其他端点](https://github.com/rust-lang/rust/pull/67287)
- [重构：借用检查区域诊断报告](https://github.com/rust-lang/rust/pull/67241)
- [各种 const eval 和 pattern match 的 ICE 修复](https://github.com/rust-lang/rust/pull/67192)
- [在 mir interpretation 中，修复 ICE](https://github.com/rust-lang/rust/pull/67546)
- [在 arena 上分配 HIR p2/4 -- Expr＆Pat](https://github.com/rust-lang/rust/pull/66936)
- [在 arena 上分配 HIR p3/4 -- Ty](https://github.com/rust-lang/rust/pull/66942)
- [初步实现`#![feature(bindings_after_at)]`](https://github.com/rust-lang/rust/pull/66296)
- [弃用`Error::description`](https://github.com/rust-lang/rust/pull/66919)
- [添加`IntoFuture` trait 和 await 的支持](https://github.com/rust-lang/rust/pull/65244)
- [不 ICE ：涉及闭包的生命周期错误](https://github.com/rust-lang/rust/pull/67687)
- [采用`NonNull`，于`slice::`{`Iter`，`IterMut`}](https://github.com/rust-lang/rust/pull/67588)
- [`IpAddr`实现补充，没有堆分配](https://github.com/rust-lang/rust/pull/67035)
- [稳定化：`matches!` macro](https://github.com/rust-lang/rust/pull/67659)
- [区分化：`todo!`和`unimplemented!`](https://github.com/rust-lang/rust/pull/67445)
- [fix：`Instance::resolve()`错误地返回专用实例](https://github.com/rust-lang/rust/pull/67662)
- [修整：构思错误的`BTreeMap::iter_mut`断言，并测试其可变性](https://github.com/rust-lang/rust/pull/67459)
- [清理 const-hack PRs，因为 const if / match 存在](https://github.com/rust-lang/rust/pull/67657)
- [hashbrown：impl `drain_filter` for `HashMap`](https://github.com/rust-lang/hashbrown/pull/135)
- [rustdoc：在文档中，显示常量值的实际值](https://github.com/rust-lang/rust/pull/66221)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

## 新的 RFC

- [-C export-executable-symbols](https://github.com/rust-lang/rfcs/pull/2841)。

# 本周报价

> Rust 有多个*独特的*，甚至不存在于其他语言中的范例，例如 lifetimes 和编译时间跟踪式的“独占访问”。与一开始就欢迎它们 —— 就像 @mbrubeck's[ _Rust：独特的视角_ ](https://limpet.net/mbrubeck/2019/02/07/rust-a-unique-perspective.html)所做的那样，不同。 Rust book 试图展示一种“像其他语言一样，但有（魔幻般的）编译时检查”的语言。而事实却是，Rust 的力量在于 non-`unsafe` Rust 比像 C 或 C++那样的语言来说，**拥有更少的表达能力**。
>
> 我认为 Rust 应该以这样一句话开头：“欢迎使用这种表达力较低的语言，它强制你去使用那些**保证 compile-time 是合理的**结构体。但是不要担心；一段时间后，您将习惯于‘它允许’的编码模式，然后几乎不会注意到弱弱的表达力，只会注意到大大的零成本安全性，这将使您**无畏地 hack**。"
>
> - 恕我直言，听起来并没有那么差，至少是诚实的。而我想，某些人会遇到的挣扎点，应该对改变编码方式/心理编码模式的拒绝。

– [Daniel H-M on rust-users](https://users.rust-lang.org/t/after-a-week-with-rust/35829/27)

Thanks to [Tom Phinney](https://users.rust-lang.org/t/twir-quote-of-the-week/328/768) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ej4eom/this_week_in_rust_319/).</small>
