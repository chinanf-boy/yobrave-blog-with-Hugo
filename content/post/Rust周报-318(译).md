---
title: "Rust周报 318(译)"
date: 2019-12-28T11:40:52+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-318"
css: ["/css/main.css", "/css/stylesheet.css"]
series: "Rust周报-中文"
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-12-24

[原文：本周 Rust(螃蟹) 318](https://this-week-in-rust.org/blog/2019/12/24/this-week-in-rust-318/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.40.0](https://blog.rust-lang.org/2019/12/19/Rust-1.40.0.html)。🎉🎈
- [Rust 之危](http://cliffle.com/p/dangerust/)。
- [宣布 Tokio-Compat](https://tokio.rs/blog/2019-12-compat/)。
- [Haskell 和 Rust 中的 async exceptions](https://tech.fpcomplete.com/blog/async-exceptions-haskell-rust)。
- [actix-web v2.0 发布](https://github.com/actix/actix-web/releases/tag/web-v2.0.0)。
- [宣布正式的 MongoDB Rust 驱动程序](https://www.mongodb.com/blog/post/announcing-the-official-mongodb-rust-driver)。
- [JetBrains- Rustlings 课程改编](https://blog.jetbrains.com/blog/2019/12/19/rustlings-course-adaptation/)。
- [在 Rust 中，编写 BPF 代码](https://blog.redsift.com/labs/writing-bpf-code-in-rust/)。
- [在 Rust 箱子中，测试 no_std 兼容性](https://blog.dbrgn.ch/2019/12/24/testing-for-no-std-compatibility/)。
- [源代码链接：将 C headers 合并到 Rust 模块中](https://immunant.com/blog/2019/12/header_merging/)。
- [使用 WASM 和 Cloudflare 的无服务器 Rust](https://tech.fpcomplete.com/blog/serverless-rust-wasm-cloudflare)。
- [使用 Rust，将 JavaScript 应用程序移植到 WebAssembly（第 1 部分）](https://slowtec.de/posts/2019-12-20-porting-javascript-to-rust-part-1.html)。
- [深入探讨：编译的 Rust p1](https://blog.ryanlevick.com/down-the-stack-part-1/)。
- [Formatting 编译器树](https://blog.rust-lang.org/inside-rust/2019/12/23/formatting-the-compiler.html)。
- [Streams 并发](https://blog.yoshuawuyts.com/streams-concurrency/)。
- [在 Rust 中，写一个 seqlock](https://pitdicker.github.io/Writing-a-seqlock-in-Rust/)。
- [Vishay 的 VEML6030 和 VEML7700 环境光传感器的平台驱动程序](https://blog.eldruin.com/veml6030-ambient-light-sensor-driver-in-rust/)。
- [PCA9685 16-channel，PWM LED/servo 电机控制器驱动器](https://blog.eldruin.com/pca9685-pwm-led-servo-controller-driver-in-rust/)。
- [祝贺，编译器团队成员 matthewjasper 和 wesleywiser](https://blog.rust-lang.org/inside-rust/2019/12/19/jasper-and-wiser-full-members-of-compiler-team.html)。

# 周箱

这周的箱子是[cargo-scout](https://github.com/o0Ignition0o/cargo-scout)，一个 cargo 子命令，仅在箱子的更改代码上，运行 clippy（在 git diff 之后）。

谢谢[Philipp Krones](https://users.rust-lang.org/t/crate-of-the-week/2704/694)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- \[good first issue] [simdjson: flattend json access for the tape](https://github.com/simd-lite/simdjson-rs/issues/91)。
- \[good first issue] [rsynth: 用 jack 后端，添加对系统专有事件(event)的支持](https://github.com/PieterPenninckx/rsynth/issues/50)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 334 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-12-16..2019-12-23

- [format the world](https://github.com/rust-lang/rust/pull/67540)
- [重构：expr 和 stmt 的 解析 + 升级 recovery](https://github.com/rust-lang/rust/pull/66994)
- [添加一个 raw “address of” 运算符](https://github.com/rust-lang/rust/pull/64588)
- [改善无效分配(invalid assignment)的诊断](https://github.com/rust-lang/rust/pull/67538)
- [使用结构化建议，来消除方法调用的歧义](https://github.com/rust-lang/rust/pull/67127)
- [修复：对 Drop impls 过于严格的检查](https://github.com/rust-lang/rust/pull/67059)
- [保存 LTO 导入信息，并在尝试重复使用 build products 时，进行检查](https://github.com/rust-lang/rust/pull/67020)
- [合并 `ast::Mutability`和`mir::Mutability`](https://github.com/rust-lang/rust/pull/67355)
- [合并 `TraitItem`和`ImplItem into`AssocItem`](https://github.com/rust-lang/rust/pull/67131)
- [指示未推断类型的，类型参数的来源](https://github.com/rust-lang/rust/pull/67285)
- [在一个 arena 上，分配 HIR "p1/4"](https://github.com/rust-lang/rust/pull/66931)
- [在 const eval 中，添加更简单的入口点，提供常见用法](https://github.com/rust-lang/rust/pull/66877)
- [chalk：修复，coinductive 的不合理](https://github.com/rust-lang/chalk/pull/272)
- [chalk：将 ids 移入“type”家族](https://github.com/rust-lang/chalk/pull/309)
- [const prop 应该完成，向‘用户定义变量’的传播](https://github.com/rust-lang/rust/pull/67130)
- [miri：使用 Result 返回类型，支持 main 函数](https://github.com/rust-lang/miri/pull/1125)
- [实现 `LineWriter::write_vectored`](https://github.com/rust-lang/rust/pull/67270)
- [将 `PartialEq`和`Eq`添加到`Cursor`](https://github.com/rust-lang/rust/pull/67233)
- [让 `ptr::slice_from_raw_parts` 为 const fn（在 feature flag 后面）](https://github.com/rust-lang/rust/pull/67462)
- [稳定化：`std::{rc,sync}::Weak::{weak_count, strong_count}`](https://github.com/rust-lang/rust/pull/65778)
- [stdarch：使用更多的`simd_*`内部函数](https://github.com/rust-lang/stdarch/pull/790)
- [futures.rs：让`AtomicWaker::new()` 为 const fn](https://github.com/rust-lang/futures-rs/pull/2007)
- [cargo：修复，复写的备用 registry token](https://github.com/rust-lang/cargo/pull/7708)
- [rustup：在 override 文件中，支持本地工具链名称](https://github.com/rust-lang/rustup/pull/2141)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [把 apple 32bit targets 降级为 tier 3](https://github.com/rust-lang/rfcs/pull/2837)。
- \[处置：合并] [宣布 safe-transmute 项目组](https://github.com/rust-lang/rfcs/pull/2835)。

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> 当不安全性出现问题时，会发生不健全(unsoundness)的情况。

– [Alice Ryhl on rust-users](https://users.rust-lang.org/t/learn-rust-the-dangerous-way-the-unsafe-first-tutorial/35806/39)

Thanks to [Daniel H-M](https://users.rust-lang.org/t/twir-quote-of-the-week/328/764) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/egabxs/this_week_in_rust_318/).</small>
