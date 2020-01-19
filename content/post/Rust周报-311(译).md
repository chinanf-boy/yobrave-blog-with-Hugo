---
title: "Rust周报 311(译)"
date: 2019-11-07T10:04:45+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-311'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-11-05

[原文：本周 Rust(螃蟹) 311](https://this-week-in-rust.org/blog/2019/11/05/this-week-in-rust-311/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [完成向新借用检查器的过渡](https://blog.rust-lang.org/2019/11/01/nll-hard-errors.html)。
- [C ++ WinRT 的作者对 Windows Runtime 的 Rust 支持](https://kennykerr.ca/2019/11/05/rust/)。
- [你可能不想要`.into_iter().cloned()`](https://www.reddit.com/r/rust/comments/dp3s25/psa_you_probably_didnt_want_into_itercloned/)。
- [Clippy 正在删除其插件界面](https://blog.rust-lang.org/inside-rust/2019/11/04/Clippy-removes-plugin-interface.html)。
- [Rust 并发模式：condvars 和 locks](https://medium.com/@polyglot_factotum/rust-concurrency-patterns-condvars-and-locks-e278f18db74f)。
- [如何使您的 C 代码库吃上螃蟹：用 Rust 重写键盘固件 keymap](https://about.houqp.me/posts/rusty-c/)。
- [编写 bump 分配器时，请始终向下](https://fitzgeraldnick.com/2019/11/01/always-bump-downwards.html)。
- [运动控制历险记：初始运动系统](http://adventures.michaelfbryan.com/posts/initial-motion-system/)。
- [2019-10-24 编译器团队会议](https://blog.rust-lang.org/inside-rust/2019/10/30/compiler-team-meeting.html)。

### ＃Rust2020

查找位于＃Rust2020 [Read Rust](https://readrust.net/rust-2020/)的所有帖子。

# 周箱

这周的箱子是[displaydoc](https://github.com/yaahc/displaydoc)，一个程序派生宏，通过 doc 注释的字符串-插值，来实现`Display`。

谢谢[威利·卡普勒](https://users.rust-lang.org/t/crate-of-the-week/2704/652)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [宣布 safety-dance ：从流行的箱子中，删除不必要的不安全代码](https://github.com/rust-secure-code/safety-dance)。
- [RFC：使 Cargo 在已编译的二进制文件中，嵌入依赖项的版本](https://github.com/rust-lang/rfcs/pull/2801)。
- \[good first issue] [cargo-sweep: cargo-sweep 能不带上 rustup 工作吗](https://github.com/holmgr/cargo-sweep/issues/26)？
- \[good first issue] [rubble: 添加一个函数，用来读取到 rubble-nrf52 的设备地址](https://github.com/jonas-schievink/rubble/issues/89)。
- \[good first issue] [rubble: 不要放弃，即使错过了初始发送窗口「initial transmit window」](https://github.com/jonas-schievink/rubble/issues/77)。
- \[good first issue] [rubble: 当 event is missed，llcp updates 就不会应用](https://github.com/jonas-schievink/rubble/issues/74)。
- \[good first issue] [rubble: log 缓存溢出，位于 nrf52832](https://github.com/jonas-schievink/rubble/issues/69)。
- \[good first issue] [rubble: 试用 `scroll` 或 `zerocopy`，用来 pdus 的 de/encoding{解/编码}](https://github.com/jonas-schievink/rubble/issues/53)。
- \[good first issue] [rubble: 只响应 ll_version_ind 一次](https://github.com/jonas-schievink/rubble/issues/49)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了共有 217 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-10-28..2019-11-04

- [通过 Rust 代码允许外部异常 unwind，通过 FFI 允许 Rust panics unwind](https://github.com/rust-lang/rust/pull/65646)
- [扩展：在 proc 宏输入中，提供 Feature gate 的 out-of-line 模块](https://github.com/rust-lang/rust/pull/66078)
- [在函数原型上，忽略`#[inline]`的 Lint](https://github.com/rust-lang/rust/pull/65294)
- [改进 “尝试使用一个预期类型的变体” 提示](https://github.com/rust-lang/rust/pull/65562)
- [使用 heuristics ，恢复对缺失`;`的解析](https://github.com/rust-lang/rust/pull/65640)
- [指向本地类似命名的元素，并调整对变量的引用](https://github.com/rust-lang/rust/pull/65421)
- [`impl` item 的自定义 lifetime 错误，不符合`trait`](https://github.com/rust-lang/rust/pull/65068)
- [添加 lint 和 测试，类型周围不必要的括号](https://github.com/rust-lang/rust/pull/65112)
- [用`ConstValue::Placeholder`，正确处理类型标志](https://github.com/rust-lang/rust/pull/65643)
- [对 type aliases 中的不必要 bounds，使用结构化建议](https://github.com/rust-lang/rust/pull/65914)
- [save-analysis：记录 async fn 返回类型中的，async desugaring](https://github.com/rust-lang/rust/pull/65936)
- [将 CrateMetadata 的 source_map_import_info ，从 RwLock 切换到 Once](https://github.com/rust-lang/rust/pull/65979)
- [不要将`eval_always`用于 miri queries，来自 Codegen 的使用](https://github.com/rust-lang/rust/pull/65927)
- [rustc：使用 `IndexVec<DefIndex, T>`代替 Vec<T>](https://github.com/rust-lang/rust/pull/65825)
- [当所需的升级失败时，使`promote_consts`发出错误](https://github.com/rust-lang/rust/pull/65946)
- [在`BinaryHeap`上，实现 ordered/sorted 的迭代器](https://github.com/rust-lang/rust/pull/65091)
- [使`*`{`const`，`mut`}`T>::offset_from` 为 const fn](https://github.com/rust-lang/rust/pull/63810)
- [稳定化：`float_to_from_bytes`feature](https://github.com/rust-lang/rust/pull/66002)
- [hashbrown：介绍`ahash-compile-time-rng` feature](https://github.com/rust-lang/hashbrown/pull/125)
- [cargo：添加 --filter-platform 到 `cargo metadata`](https://github.com/rust-lang/cargo/pull/7376)
- [cargo：Fix `cargo fix` 不显示颜色](https://github.com/rust-lang/cargo/pull/7550)
- [chalk：删除延迟的文字](https://github.com/rust-lang/chalk/pull/270)
- [chalk：添加 TypeName::Error 变体](https://github.com/rust-lang/chalk/pull/269)
- [chalk：输出多个解决方案](https://github.com/rust-lang/chalk/pull/263)
- [rustdoc：稳定化`cfg(doctest)`](https://github.com/rust-lang/rust/pull/63803)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处理：合并] [宣布 ffi-unwinding project group](https://github.com/rust-lang/rfcs/pull/2797)。
- \[处理：推迟] [签入 registry index commits](https://github.com/rust-lang/rfcs/pull/2474)。

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [稳定化 --extern ：不带一个 path 得标志](https://github.com/rust-lang/rust/pull/64882)。
- \[处理：合并] [将 derive helpers 完全整合到 name resolution](https://github.com/rust-lang/rust/pull/64694)。
- \[处理：合并] [让 vec::truncate(n) 的 语义与 slices 一致](https://github.com/rust-lang/rust/pull/64432)。
- \[处理：合并] [将 ptr::drop_in_place 用于 vecdeque::truncate 和 vecdeque::clear](https://github.com/rust-lang/rust/pull/65933)。

## 新的 RFC

- [添加方法 Result::into_ok](https://github.com/rust-lang/rfcs/pull/2799)。
- [使 Cargo 在编译的二进制文件中，嵌入依赖项版本](https://github.com/rust-lang/rfcs/pull/2801)。
- [Vec::recycle](https://github.com/rust-lang/rfcs/pull/2802)。
- [目标层「Target tier」策略](https://github.com/rust-lang/rfcs/pull/2803)。
- [[T]::rejoin](https://github.com/rust-lang/rfcs/pull/2806)。

# 本周引用句

> 我最终还是成功地完成了编辑工作 —— 有没有人发现，在公共论坛上提出问题的过程，组织得足够好，足以解决问题？

– [David Mason on rust-users](https://users.rust-lang.org/t/std-phantomdata-and-unused-fields-in-structs/34271/3)

多谢了[丹尼尔 H-M](https://users.rust-lang.org/t/twir-quote-of-the-week/328/725)这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
