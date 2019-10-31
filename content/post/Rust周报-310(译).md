---
title: "Rust周报 310(译)"
date: 2019-10-31T23:02:52+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-310'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-10-29

[原文：本周 Rust(螃蟹) 310](https://this-week-in-rust.org/blog/2019/10/29/this-week-in-rust-310/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [征集：博客 2020 ](https://blog.rust-lang.org/2019/10/29/A-call-for-blogs-2020.html)。
- [为什么 trait 中的 async fn 很难](https://smallcultfollowing.com/babysteps/blog/2019/10/26/async-fn-in-traits-are-hard/)。
- [Rust 实现 Spark 的结果令人鼓舞](https://medium.com/@rajasekar3eg/fastspark-a-new-fast-native-implementation-of-spark-from-scratch-368373a29a5c)。
- [Nannou 授予 Mozilla 拨款， Rust 中的基础音频开发](https://nannou.cc/posts/moss_grant_announce)。
- [Rust 和 C ++上的浮点数密集型代码](https://www.reidatcheson.com/hpc/architecture/performance/rust/c++/2019/10/19/measure-cache.html)。
- [docs.rs 中断，事后评估](https://blog.rust-lang.org/inside-rust/2019/10/24/docsrs-outage-postmortem.html)。
- [rust-analyzer 的成本](https://rust-analyzer.github.io/2019/10/16/finance.html)。
- [为 Druid 构建小部件（一个 WIP 本机 Rust GUI 工具包）](https://pauljmiller.com/posts/druid-widget-tutorial.html)。
- [Ferris Fencing - 基于 RISC-V VM 的 Rust 游戏](http://www.ferrisfencing.org/)。
- [安全技术，在稳定的编译器进行专业化工作](https://github.com/dtolnay/case-studies/blob/master/autoref-specialization/README.md)。
- [仔细研究 Rust 的所有权](https://blog.thoughtram.io/ownership-in-rust/)。
- [Servo 编程：timer 不可思议的缩减](https://medium.com/programming-servo/programming-servo-the-incredibly-shrinking-timer-7283ae2a2669)。
- [履行 momo 的编译时承诺](https://llogiq.github.io/2019/10/28/momo-fast.html)。
- [运动控制历险记：初始运动系统](http://adventures.michaelfbryan.com/posts/initial-motion-system/)。
- [请欢迎 pnkfelix，作为编译器团队的共同负责人](https://blog.rust-lang.org/inside-rust/2019/10/24/pnkfelix-compiler-team-co-lead.html)。

# 周箱

可悲的是，没有周箱建议。

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- \[good first issue] [async-std: 使用 once_cell 替代了 lazy_static](https://github.com/async-rs/async-std/issues/406)。
- \[good first issue] [async-std: 添加 future::flatten](https://github.com/async-rs/async-std/issues/404)。
- \[good first issue] [async-std: 添加 stream::from_iter](https://github.com/async-rs/async-std/issues/400)。
- \[good first issue] [async-std: TCP smoke 测试](https://github.com/async-rs/async-std/issues/407)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了共有 347 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-10-21..2019-10-28

- [不要对完全无法展开`impl Trait`类型的，ICE](https://github.com/rust-lang/rust/pull/65777)
- [消除`intersect_opt`](https://github.com/rust-lang/rust/pull/65648)
- [Derive `Rustc{En,De}codable` for `TokenStream`](https://github.com/rust-lang/rust/pull/65641)
- [在 const 泛型中，禁止非`structural_match`类型](https://github.com/rust-lang/rust/pull/65627)
- [将 crate store 变成一个 resolver 输出](https://github.com/rust-lang/rust/pull/65625)
- [稍微简化 chalk-engine](https://github.com/rust-lang/chalk/pull/264)
- [使用启发式方法，去建议分配工作](https://github.com/rust-lang/rust/pull/65566)
- [为了某些义务，指向相关类型](https://github.com/rust-lang/rust/pull/65288)
- [Lockless `LintStore`](https://github.com/rust-lang/rust/pull/65193)
- [删除不必要的 trait bounds 和派生](https://github.com/rust-lang/rust/pull/65647)
- [更改 untagged_unions ，以不允许带有 drop 的 union 字段](https://github.com/rust-lang/rust/pull/62330)
- [miri：为 Memory 添加`write_bytes`方法，就能进行 bounds-检查和支持迭代器](https://github.com/rust-lang/rust/pull/65621)
- [可安全分发的对象](https://github.com/rust-lang/rust/pull/57545)
- [Fix: WASI sleep impl](https://github.com/rust-lang/rust/pull/65617)
- [稳定：`const_constructor`](https://github.com/rust-lang/rust/pull/65188)
- [稳定：`Option::flatten`](https://github.com/rust-lang/rust/pull/64747)
- [稳定：`#[non_exhaustive]`](https://github.com/rust-lang/rust/pull/64639)（RFC 2008）
- [使`is_power_of_two`成为一个 const 函数](https://github.com/rust-lang/rust/pull/65092)
- [为数组添加，按值 iterator ](https://github.com/rust-lang/rust/pull/62959)
- [添加 ：`Cow::`{`is_borrowed`，`is_owned`}`()`](https://github.com/rust-lang/rust/pull/65144)
- [添加 ： `[_]::`{`as_ptr_range`, `as_mut_ptr_range`}`()`](https://github.com/rust-lang/rust/pull/65806)
- [添加 ：{`String`，`Vec`}`::into_raw_parts()`](https://github.com/rust-lang/rust/pull/65705)
- [添加 ：`matches!( $expr, $pat ) -> bool`宏](https://github.com/rust-lang/rust/pull/65479)
- [解放在`write_bytes`上的`ExactSizeIterator`绑定](https://github.com/rust-lang/rust/pull/65704)
- [rustdoc：`-Z`选项转发到 rustc](https://github.com/rust-lang/rust/pull/65314)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处理：推迟] [signing registry index commits](https://github.com/rust-lang/rfcs/pull/2474)。

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [稳定化： --extern 标志，不用一个 path](https://github.com/rust-lang/rust/pull/64882)。
- \[处理：合并] [稳定化： cfg(doctest)](https://github.com/rust-lang/rust/pull/63803)。
- \[处理：合并] [fix：在 feature-detection macros 中的偶然稳定化](https://github.com/rust-lang/rust/pull/64534)。
- \[处理：合并] [@argsfile 实现，从命令行读取参数](https://github.com/rust-lang/rust/issues/63576)。
- \[处理：合并] [跟踪问题： todo! 宏](https://github.com/rust-lang/rust/issues/59277)。
- \[处理：合并] [跟踪问题： floats ↔ bytes 转换](https://github.com/rust-lang/rust/issues/60446)。
- \[处理：合并] [处于什么情况下，你能为 union 实现 copy ](https://github.com/rust-lang/rust/issues/65748)？

## 新的 RFC

- [提出，格式化宏的隐式命名参数](https://github.com/rust-lang/rfcs/pull/2795)。
- [宣布 FFI-unwinding 项目组](https://github.com/rust-lang/rfcs/pull/2797)。
- [环境变量沙箱](https://github.com/rust-lang/rfcs/pull/2794)。
- [添加 `[T]::as_ptr_range()`](https://github.com/rust-lang/rfcs/pull/2791)。
- [Subslice-offset —— 获取引用到切片的偏移量](https://github.com/rust-lang/rfcs/pull/2796)。

# 本周引用句

> …盆友，开始挖掘一个非常大的开源程序的源代码真是太奇怪了。这就像在一座巨大的大教堂里徘徊，而在这座大教堂里，一个由隐形工匠和建筑师组成的庞大团队，多年来一直对它不断地翻新、修复和维护，且他们大多通过贴在各个地方墙壁上的笔记和设计进行交流。

– [icefoxen on their wiki](https://wiki.alopex.li/WhereRustcSpendsItsTime)

多谢[拉尔夫·荣格](https://users.rust-lang.org/t/twir-quote-of-the-week/328/717)的这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
