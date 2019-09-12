---
title: "Rust周报 303(译)"
date: 2019-09-12T10:57:01+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-303'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-09-10

[原文：本周 Rust(螃蟹) 303](https://this-week-in-rust.org/blog/2019/09/10/this-week-in-rust-303/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust 如何优化 async/await II：程序分析](https://tmandry.gitlab.io/blog/posts/optimizing-await-2/)。
- [在 ESP32 上的 Rust](https://mabez.dev/blog/posts/esp32-rust/)。
- [Linux.Fe2O3：一个 Rust 病毒](https://www.guitmz.com/linux-fe2o3-rust-virus/)。
- [改善一个箱子的编译时间](http://antoyo.ml/compilation-time-dependencies)。
- [hyper 0.13 alpha 支持 async/await](https://seanmonstar.com/post/187493499882/hyper-alpha-supports-asyncawait)。
- [ Rust 编写操作系统：2019 年 8 月更新](https://os.phil-opp.com/status-update/2019-09-09/)。
- [大型组织中的 Rust - 会议记录](https://users.rust-lang.org/t/rust-in-large-organizations-meeting/32059)。
- [Futures 并发](https://blog.yoshuawuyts.com/futures-concurrency/)。

# 本周的箱子

本周的箱子是[viu](https://github.com/atanunq/viu)，终端图像查看器。

谢谢[威利卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/617)建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- [请求帮助，为 GCC 实现一个独立的 Rust 前端](https://users.rust-lang.org/t/call-for-help-implementing-an-independent-rust-frontend-for-gcc/32163)。
- [Rusoto：寻找维护者](https://github.com/rusoto/rusoto/issues/1496)。

如果你是一个 Rust 项目的所有者，并且正在寻找贡献者，请[在这里][guidelines]提交任务。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并了][merged] 303 个请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-09-02..2019-09-09

- [在测试 vxWorks 时，支持静态和动态链接模式](https://github.com/rust-lang/rust/pull/63789)
- [给出，参数的计数模式不匹配的变体](https://github.com/rust-lang/rust/pull/64161)
- [AST passes 使用 hygiene](https://github.com/rust-lang/rust/pull/63919)
- [来自 proc 宏的，账号文档注释，没有 spans](https://github.com/rust-lang/rust/pull/63930)
- [在无法访问的调用中，对函数名称，减少错误提示范围](https://github.com/rust-lang/rust/pull/64229)
- [提前路径解析](https://github.com/rust-lang/rust/pull/64120)
- [or-patterns：统一在 AST＆Fix / Cleanup 解析中，使用`PatKind::Or`](https://github.com/rust-lang/rust/pull/64111)
- [允许在 compiletest 中，检查 run-pass 执行输出](https://github.com/rust-lang/rust/pull/63825)
- [Rust 2018：把 NLL 迁移模式 定为重要错误](https://github.com/rust-lang/rust/pull/63565)
- [为（某些）移动跟踪，扩展 Polonius fact 生成](https://github.com/rust-lang/rust/pull/62800)
- [polonius：完成初始化计算](https://github.com/rust-lang/polonius/pull/110)
- [libc：删除 WASI Core API](https://github.com/rust-lang/libc/pull/1461)
- [使用 wasi 箱子，到 Core API](https://github.com/rust-lang/rust/pull/63676)
- [使用 unicode-xid 箱子，而不是 libcore](https://github.com/rust-lang/rust/pull/62848)
- [添加`Result::cloned`{，`_err`和`Result::copied`{，`_err`}](https://github.com/rust-lang/rust/pull/63166)
- [稳定化 `bind_by_move_pattern_guards` 在 Rust 1.39.0](https://github.com/rust-lang/rust/pull/63118)
- [稳定化 `checked_duration_since` 为 1.38.0](https://github.com/rust-lang/rust/pull/62860)
- [稳定化 `pin_into_inner` 在 1.39.0](https://github.com/rust-lang/rust/pull/63985)
- [`Rev::rposition`从错误的一端，算起](https://github.com/rust-lang/rust/pull/63549)
- [覆盖`StepBy::{try_fold, try_rfold}`](https://github.com/rust-lang/rust/pull/64121)
- [添加 Iterator 比较方法，也就是采用一个 comparison 函数](https://github.com/rust-lang/rust/pull/62205)
- [添加方法，可以从`bool`转换到`Option<T>`](https://github.com/rust-lang/rust/pull/64255)
- [Cargo：将`--all`重命名为`--workspace`](https://github.com/rust-lang/cargo/pull/7241)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

_本周没有批准 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [处置：合并][rfc，一个能获得原生 reference 的 operator ]（<https://github.com/rust-lang/rfcs/pull/2582>）。

### [跟踪问题和 PR](https://github.com/rust-lang/rust/labels/final-comment-period)

- [处置：合并][稳定化 `vec::new` 和 `string::new`，作为 `const fn`s]（<https://github.com/rust-lang/rust/pull/64028>）。
- [处置：合并][稳定化 `param_attrs` 在 rust 1.39.0]（<https://github.com/rust-lang/rust/pull/64010>）。
- [处置：合并][稳定化 weak_ptr_eq]（<https://github.com/rust-lang/rust/pull/61797>）。

## 新的 RFC

- [添加转换方法，从`bool`到`Option<T>`](https://github.com/rust-lang/rfcs/pull/2757).

# 活动预告

### 亚太地区

- [9 月 30 日。台湾台北-Rust Taiwan Meetup](https://www.facebook.com/events/2110177005945081/).

# 本周引用句

> ，Rust 编译器基本上就是 30 年来，试图教一台计算机，如何看待作为 C 开发人员时我们所担心的事情。

- [james munns（@bitshiftmask）在 twitter 上](https://mobile.twitter.com/bitshiftmask/status/1170043794387083268)

多亏了[llogiq](https://users.rust-lang.org/t/twir-quote-of-the-week/328/699)提交了这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_本周《 Rust》的编辑：[nasa42](https://github.com/nasa42)，[llogiq](https://github.com/llogiq)和[Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/czizge/this_week_in_rust_302/).</small>
