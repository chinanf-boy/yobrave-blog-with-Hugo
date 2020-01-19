---
title: "Rust周报 313(译)"
date: 2019-11-22T11:47:05+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-313'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-11-19

[原文：本周 Rust(螃蟹) 313](https://this-week-in-rust.org/blog/2019/11/19/this-week-in-rust-313/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Stacked borrows：Rust 的 aliasing 模型](https://www.ralfj.de/blog/2019/11/18/stacked-borrows-paper.html)。
- [使用 const 泛型，实现 ArrayVec](http://adventures.michaelfbryan.com/posts/const-arrayvec/)。
- [关于 Rust 中，错误处理的思考](https://lukaskalbertodt.github.io/2019/11/14/thoughts-on-error-handling-in-rust.html)。
- [了解 Serde](https://www.joshmcguigan.com/blog/understanding-serde/)。
- [rust-analyzer：Find 用法](https://rust-analyzer.github.io/2019/11/13/find-usages.html)。
- [Global executors](https://boats.gitlab.io/blog/post/global-executors/)。
- [Rust 基础架构团队：执行 GitHub 的操作](https://blog.rust-lang.org/inside-rust/2019/11/14/evaluating-github-actions.html)。
- [Rust bug 最小化模式](http://blog.pnkfx.org/blog/2019/11/18/rust-bug-minimization-patterns/)。
- [使用 PineTime 智能手表，在 IoT 中教授 Rust](https://medium.com/swlh/sneak-peek-of-pinetime-smart-watch-and-why-its-perfect-for-teaching-iot-81b74161c159)。

### ＃Rust2020

查找位于＃Rust2020 [Read Rust](https://readrust.net/rust-2020/)的所有帖子。

# 周箱

这周的箱子是[wasmtime](https://github.com/bytecodealliance/wasmtime)，这是 WebAssembly 的独立 JIT 风格的运行时。

谢谢[乔什·特里维特（Josh Triplett）](https://users.rust-lang.org/t/crate-of-the-week/2704/671)的建议！

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [治理工作组，呼吁参与](https://blog.rust-lang.org/inside-rust/2019/11/13/goverance-wg-cfp.html)。
- \[good first issue] [async-std: 添加 future::timeout](https://github.com/async-rs/async-std/issues/564)。
- [crates.io：carols10cents 将指导 11 月和 12 月的多个问题](https://github.com/rust-lang/crates.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AE-mentor)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了共有 252 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-11-11..2019-11-18

- [添加一个 callback，允许编译器使用者，覆盖查询](https://github.com/rust-lang/rust/pull/66297)
- [更新 LLVM 子模块](https://github.com/rust-lang/rust/pull/66318)
- [使用 def-site 上下文，扩展 source_util 宏](https://github.com/rust-lang/rust/pull/66349)
- [重新平衡一致性后，改善错误](https://github.com/rust-lang/rust/pull/66253)
- [移动`Session`字段，到`CrateStore`](https://github.com/rust-lang/rust/pull/66334)
- [有用性检查中，改进非穷举性处理](https://github.com/rust-lang/rust/pull/66330)
- [在有用性算法中，重构整数范围处理](https://github.com/rust-lang/rust/pull/66326)
- [从`.async` calls 中，删除一些堆栈框架](https://github.com/rust-lang/rust/pull/66398)
- [避免`get_query()`内，哈希化 key 两次](https://github.com/rust-lang/rust/pull/66013)
- [`unused_labels` lint 中，不用警告以`_`开头的标签](https://github.com/rust-lang/rust/pull/66419)
- [在冲突时，仅包含 gitignore 中“已经存在...” comment](https://github.com/rust-lang/cargo/pull/7570)
- [在未满足的 trait bound 的条件下，建议借用](https://github.com/rust-lang/rust/pull/65456)
- [将 derive helpers 完全集成到，名称解析中](https://github.com/rust-lang/rust/pull/64694)
- [将`ast::{ItemKind, ImplItemKind}::OpaqueTy`降低](https://github.com/rust-lang/rust/pull/66197)
- [添加一个 HIR pass，以检查 const `if`，`loop`等](https://github.com/rust-lang/rust/pull/66170)
- [Fix: MIR 降低评估顺序，和健全性 bug](https://github.com/rust-lang/rust/pull/65608)
- [将`ConstValue`分为两个枚举](https://github.com/rust-lang/rust/pull/66233)
- [fix 两个 OOM 问题，与`ConstProp`相关](https://github.com/rust-lang/rust/pull/66394)
- [使基于数据流的 const qualification 规范化](https://github.com/rust-lang/rust/pull/66385)
- [miri：在 FS accesses 中，使用新的 isize_max 方法](https://github.com/rust-lang/miri/pull/1056)
- [miri panic_unwind：fix SEH 平台的 hack](https://github.com/rust-lang/rust/pull/66466)
- [使 chalk-rust-ir 在类型家族上泛型化](https://github.com/rust-lang/chalk/pull/284)
- [chalk：重构 fold](https://github.com/rust-lang/chalk/pull/283)
- [chalk：实现`zip_binders`，并添加一些`dyn Trait`/`impl Trait`测试](https://github.com/rust-lang/chalk/pull/282)
- [添加：`Result::map_or`](https://github.com/rust-lang/rust/pull/66292)
- [fix：`HashSet::union`性能](https://github.com/rust-lang/rust/pull/66280)
- [添加`UnsafeCell::get`的 raw ptr 变体](https://github.com/rust-lang/rust/pull/66248)
- [提议`BTree`{`Map`，`Set`}`::`{`min`，`max`}](https://github.com/rust-lang/rust/pull/65637)
- [使`Vec::truncate(_)`的语义与 slices 一致](https://github.com/rust-lang/rust/pull/64432)
- [libc：添加让函数`const`的支持](https://github.com/rust-lang/libc/pull/1536)
- [cargo：解析`/proc/stat`时不要 panic](https://github.com/rust-lang/cargo/pull/7580)
- [稳定化： rustdoc 主题选项](https://github.com/rust-lang/rust/pull/54733)
- [rustup build：在执行操作之前，通过进行检查，来加快 clippy 速度](https://github.com/rust-lang/rustup/pull/2122)
- [rustup：重试下载](https://github.com/rust-lang/rustup/pull/2121)
- [rustup：修复/改善人类可读的单位](https://github.com/rust-lang/rustup/pull/2043)
- [measureme：在`RawEvent`仅使用 48 位编码时间戳，使用 32 位编码线程 ID，为了使其更小](https://github.com/rust-lang/measureme/pull/86)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [稳定化： result::map_or_else](https://github.com/rust-lang/rust/pull/66322)。
- \[处置: 合并] [扩大 format! temporaries](https://github.com/rust-lang/rust/pull/64856)。
- \[处置: 合并] [稳定化： cfg(doc)](https://github.com/rust-lang/rust/pull/61351)。

## 新的 RFC

- [一个宏：获取当前函数名称](https://github.com/rust-lang/rfcs/pull/2818)。

# 本周引用句

本周，我们有两个引用句：

> 告诉一个程序员已经有一个库，可以做 X 这件事，就像告诉一个词曲作者，已经有一首关于爱的歌。

– [PeteCordell on twitter](https://twitter.com/petecordell/status/428542622844477441)，[在最近的 Rust Gamedev 会议上的引用](https://www.youtube.com/watch?v=lpOg2nl3kr0)

> 我想 Museum 的目的，也是为了内存安全。

– [/u/xav_19 on /r/rust](https://www.reddit.com/r/rust/comments/dxh6pg/why_is_trpl_sold_in_the_gift_shop_at_the_spy/f7r8d3k?utm_source=share&utm_medium=web2x) 帖子：在华盛顿特区间谍博物馆的礼品店里，为什么会有“The Rust Programming Language”出售。

Thanks to [Matthieu M.](https://users.rust-lang.org/t/twir-quote-of-the-week/328/737) 和 [ZiCog](https://users.rust-lang.org/t/twir-quote-of-the-week/328/739) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/dz3uvq/this_week_in_rust_313/).</small>
