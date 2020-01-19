---
title: 'Rust周报 304(译)'
date: 2019-09-19T22:15:46+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-304'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-09-17

[原文：本周 Rust(螃蟹) 304](https://this-week-in-rust.org/blog/2019/09/17/this-week-in-rust-304/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [即将发布的 docs.rs 变化](https://blog.rust-lang.org/2019/09/18/upcoming-docsrs-changes.html)。
- [Rust 的 GitHub Actions](https://svartalf.info/posts/2019-09-16-github-actions-for-rust/)。
- [Rustconf 2019 视频](https://www.youtube.com/playlist?list=PL85XCvVPmGQhDOUIZBe6u388GydeACbTt)。
- [改进了 Rust 和 C2Rust 中的 C 变量](https://immunant.com/blog/2019/09/variadics/)。
- [Oreboot：Coreboot 减去 C，Google 的一次演讲](https://osfc.io/uploads/talk/paper/23/Oreboot.pdf)。
- [宣布 awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/)。
- [运动控制中的冒险](http://adventures.michaelfbryan.com/posts/announcing-adventures-in-motion-control/)。

# 本周的箱子

本周的箱子是[texture-synthesis](https://github.com/EmbarkStudios/texture-synthesis)，一个通过选择示例，生成纹理的程序。

谢谢[威利卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/621)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- [Rustup 需要你的帮助（测试一个新功能）](https://www.reddit.com/r/rust/comments/d5hbdu/rustup_needs_your_help_testing_a_new_feature/)。
- [Rustup 需要你的帮助（测试一个新功能，第二部分）](https://www.reddit.com/r/rust/comments/d5kxr6/rustup_needs_your_help_testing_a_new_feature_part/)。
- [通知：寻找维护者](https://github.com/notify-rs/notify/issues/209)。Notify 是 Rust 的跨平台文件系统通知库。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了有 282 个请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-09-09..2019-09-16

- [rustc：允许使用 wasm32-wasi 的 cdylib 箱子类型](https://github.com/rust-lang/rust/pull/64188)
- [隐藏 --cfg 解析期间，发出的诊断信息](https://github.com/rust-lang/rust/pull/64467)
- [改善`alloc::format!`的卫生](https://github.com/rust-lang/rust/pull/64060)
- [清理内置宏的卫生](https://github.com/rust-lang/rust/pull/64469)
- [解决：为宏调整一些“找不到”的措辞](https://github.com/rust-lang/rust/pull/64483)
- [如果箱子中没有 main 函数，提供一个 span](https://github.com/rust-lang/rust/pull/64290)
- [def_collector：不要对未命名字段的属性进行 ICE 操作](https://github.com/rust-lang/rust/pull/64457)
- [允许 impls 引用错误重叠](https://github.com/rust-lang/rust/pull/64474)
- [降低：延长 await 周围的临时寿命](https://github.com/rust-lang/rust/pull/64292)
- [收缩`ObligationCauseCode`](https://github.com/rust-lang/rust/pull/64302)
- [check_match：重构 + 改进，默认绑定模式的非详尽诊断](https://github.com/rust-lang/rust/pull/64271)
- [fn ptr 是结构匹配](https://github.com/rust-lang/rust/pull/64431)
- [rustc_mir：用缓冲区 -Zdump-mir 输出，替代不断地纠缠内核](https://github.com/rust-lang/rust/pull/64344)
- [std：添加一个`backtrace`模块](https://github.com/rust-lang/rust/pull/64154)
- [稳定化`Vec::new`和`String::new`，作为`const fn`](https://github.com/rust-lang/rust/pull/64028)
- [稳定化 weak_ptr_eq](https://github.com/rust-lang/rust/pull/61797)
- [将`abs`，`wrapping_abs`，`overflowing_abs`变为 const 函数](https://github.com/rust-lang/rust/pull/63786)
- [采用`try_fold`，而不是手动携带累加器](https://github.com/rust-lang/rust/pull/64473)
- [改善`BTreeSet::Intersection::size_hint`](https://github.com/rust-lang/rust/pull/64383)
- [cargo：不要将 libstd 构建为`dylib`](https://github.com/rust-lang/cargo/pull/7353)
- [rustup：更新到最近可行的 nightly 版本](https://github.com/rust-lang/rustup.rs/pull/1997)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

- [RFC 2582：RFC - 获取一个原始引用的操作](https://github.com/rust-lang/rfcs/pull/2582)。

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并:] [`#[cfg(accessible(..) / version(..))]`](https://github.com/rust-lang/rfcs/pull/2523)。
- \[处置：推迟] [Cargo 版本化](https://github.com/rust-lang/rfcs/pull/2182)。

### [跟踪问题和 PR](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并:] [稳定化`str::len`，`[T]::len`和`str::as_bytes` 作为 const fn](https://github.com/rust-lang/rust/pull/63770)。
- \[处置：合并] [稳定化 `param_attrs` in rust 1.39.0](https://github.com/rust-lang/rust/pull/64010)。
- \[处置：关闭] [暴露 linux syscall 接口](https://github.com/rust-lang/rust/pull/63745)。

## 新的 RFC

_本周没有提出新的 RFC。_

# 即将举行的活动

### 网上

- [9 月 25 日。Rust Community Team Meeting on Discord](https://discordapp.com/channels/442252698964721669/443773747350994945)。

### 亚太地区

- [9 月 25 日，杭州，CN - Blockchain Hangzhou - - In Rust We Trust](https://www.meetup.com/Rust-in-Blockchain-Hangzhou/events/264778357/)。
- [9 月 28 日，台北，TW - Rust 台湾聚会](https://www.facebook.com/events/2110177005945081/)。

如果您正在组织 Rust 活动，请将其添加到[日历][calendar]，就能在此提及。请记住也要添加到活动的链接。可试着电子邮件到[Rust 社区小组][community]。

[calendar]: https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com
[community]: mailto:community-team@rust-lang.org

# 本周引用句

> 好吧，让我告诉你：除非你的代码比 ICE 酷，否则编译器不会漏掉任何东西。Rust 伴随着我们在路上的每一步，当我们离落入（安全）陷阱太近的时候，温和地抓着我们的手；只要我们拼出禁言：`unsafe`，它也会轻轻地放手，因为它知道，我们清楚自己在做什么。

- [Daniel H-M on rust-users](https://users.rust-lang.org/t/looking-for-a-deeper-understanding-of-phatomdata/32477/4)

多谢了[Cerberuser](https://users.rust-lang.org/t/twir-quote-of-the-week/328/700)的这个建议！

[请提交引用句，并投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
