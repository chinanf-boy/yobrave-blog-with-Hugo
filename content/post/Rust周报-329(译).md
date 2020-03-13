---
title: "Rust周报 329(译)"
date: 2020-03-13T11:19:14+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-329"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-03-10
- [原文：329 期](https://this-week-in-rust.org/blog/2020/03/10/this-week-in-rust-329/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [builder pattern 的替代方法，初始化结构模式](https://xaeroxe.github.io/init-struct-pattern/)。
- [Bottlerocket 是一种新的基于 Linux 的操作系统，几乎将所有新组件都使用了 Rust](https://aws.amazon.com/blogs/aws/bottlerocket-open-source-os-for-container-hosting/)。
- [Rust pt 解析库 P1](https://blog.frondeus.pl/parser-1/)。
- [是的，我还在学习 Rust](https://llogiq.github.io/2020/03/07/learning.html)。
- [我刚刚为 rust-analyzer 做出了第一个开源贡献](https://avishay.dev/2020/03/04/oss-contribution/)。
- [Nannou 更新 —— WebGPU，捕获帧等](https://nannou.cc/posts/nannou_v0.13)。
- [C＃程序员调查 Rust —— 第 1 部分](https://treit.github.io/programming,/rust,/c%23/2020/03/06/StartingRust.html)。
- [我对 Rust 和.NET 的探索](https://ericsink.com/entries/dotnet_rust.html)。
- [cfg(doctest)是稳定的，你应该使用它](https://blog.guillaume-gomez.fr/articles/2020-03-07+cfg%28doctest%29+is+stable+and+you+should+use+it)。
- [ExpressJS 与 Actix-Web：性能和运行成本比较](https://medium.com/@maxsparr0w/performance-of-node-js-compared-to-actix-web-37f20810fb1a)。
- [rust-analyzer changelog 15](https://rust-analyzer.github.io/thisweek/2020/03/09/changelog-15.html)。
- [本月 Rust gamedev 7 —— 2020 年 2 月](https://rust-gamedev.github.io/posts/newsletter-007/)。
- [2020 RustConf CFP 现已开放](https://blog.rust-lang.org/2020/03/10/rustconf-cfp.html)。

# 周箱

这周的箱子是[plotly](https://github.com/igiagkiozis/plotly)，plotly. 由 js 支持的绘图库。

谢谢[Ioannis Giagkiozis](https://users.rust-lang.org/t/crate-of-the-week/2704/736)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [offst：将 Android 版本添加到 CI](https://github.com/freedomlayer/offst/issues/271)。Offst 是一种去中心化的支付系统。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 302 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-03-02..2020-03-09

- [允许'if'表达式上的属性](https://github.com/rust-lang/rust/pull/69201)
- [CTFE 的 const 限制](https://github.com/rust-lang/rust/pull/67260)
- [调用`OptimizerLastEPCallbacks`，在`PreLinkThinLTO`里](https://github.com/rust-lang/rust/pull/69665)
- [解决在`DiagnosticBuilder::into_diagnostic`的一个泄露](https://github.com/rust-lang/rust/pull/69628)
- [在一个 pat 上下文中，遇到一个 Item 时，指向 item def](https://github.com/rust-lang/rust/pull/67741)
- [改进具有循环依赖关系的箱子链接](https://github.com/rust-lang/rust/pull/69371)
- [mir-interpret：添加方法，从内存中，读取宽字符串](https://github.com/rust-lang/rust/pull/69326)
- [稳定化：与`assoc_int_consts`相关的 int / float 常数](https://github.com/rust-lang/rust/pull/68952)
- [添加`Layout::dangling()`，返回一个 well-aligned 的 `NonNull<u8>`](https://github.com/rust-lang/rust/pull/69794)
- [修复并测试，`into_iter`期间，panic 状态下，`BTreeMap`的泄露](https://github.com/rust-lang/rust/pull/69776)
- [hashbrown：添加`HashMap::get_key_value_mut`](https://github.com/rust-lang/hashbrown/pull/145)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [修正 rc/arc::from_raw() 文档，考虑不安全性 regarding unsafety](https://github.com/rust-lang/rust/pull/68099)。
- \[处置：合并] [`is_x86_feature_detected!("avx512f")` 构建失败， on nightly 版本](https://github.com/rust-lang/rust/issues/68905)。
- \[处置：合并] [impl `copy` for `ioslice`](https://github.com/rust-lang/rust/pull/69403)。

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> 我不知道如何调试 Rust，因为在两年的 Rust 使用中，我没有那种低级的 bug。

– [papaf on hacker news](https://news.ycombinator.com/item?id=22514233)

Thanks to [zrk](https://users.rust-lang.org/t/twir-quote-of-the-week/328/826) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/fhcuec/this_week_in_rust_329/).</small>
