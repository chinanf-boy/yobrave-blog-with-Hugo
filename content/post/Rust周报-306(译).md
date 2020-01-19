---
title: "Rust周报 306(译)"
date: 2019-10-04T15:35:58+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-306'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-10-01

[原文：本周 Rust(螃蟹) 305](https://this-week-in-rust.org/blog/2019/10/01/this-week-in-rust-306/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.38.0](https://blog.rust-lang.org/2019/09/26/Rust-1.38.0.html)。🎉🎈
- [Cargo 安全咨询](https://blog.rust-lang.org/2019/09/30/Security-advisory-for-cargo.html)。
- [Async-await 处于 beta](https://blog.rust-lang.org/2019/09/30/Async-await-hits-beta.html)。
- [Rust 引用类型的精确心智模型](https://docs.rs/dtolnay/0.0.6/dtolnay/macro._02__reference_types.html)。
- [对抗 Async 碎片](https://vorner.github.io/2019/09/29/figthting-the-async-fragmentation.html)。
- [使用 Rust 制作 RISC-V 操作系统](http://web.eecs.utk.edu/~smarz1/osblog/)。
- [Rust 中的插件](http://adventures.michaelfbryan.com/posts/plugins-in-rust/)。
- [用 Rust，构建 Azure IoT Edge 安全守护程序](https://msrc-blog.microsoft.com/2019/09/30/building-the-azure-iot-edge-security-daemon-in-rust/)。
- [运动控制历险记：FPS 计数器](http://adventures.michaelfbryan.com/posts/fps-counter/)。
- [因果分析 Rust 代码](https://llogiq.github.io/2019/09/25/coz.html)。
- [gfx-rs 2019 更新](https://gfx-rs.github.io/2019/10/01/update.html)。
- [宣布 Drone OS - 用 Rust 编写的实时应用程序的嵌入式操作系统](https://www.reddit.com/r/rust/comments/d999qo/announcing_drone_os_010/)。

# 本周的箱子

这周的箱子是[pin-project](https://crates.io/crates/pin-project)，一份程序宏衍生品，符合人体工程学且安全`Pin`预测。

谢谢[克里希纳（Krishna Sannasi）](https://users.rust-lang.org/t/crate-of-the-week/2704/636)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- [Vector：更新`stdin`源码使用线程，而不是使用 tokio 版本](https://github.com/timberio/vector/issues/932)。Vector 是一种高性能的可观察性的数据路由器。
- [mundane：启用所有功能的 docs.rs 文档构建](https://github.com/google/mundane/issues/21)。Mundane 是由 BoringSSL 支持的 Rust 密码库。
- [rustfm-scrobble：Hacktoberfest 的问题](https://github.com/bobbo/rustfm-scrobble/issues?q=is%3Aissue+is%3Aopen+label%3AHacktoberfest)。rustfm-scrobble 是 Rust 中的 Last.fm scrobble API 库。
- [Tokamak 正在寻找维护者](https://github.com/vertexclique/tokamak/issues/91)。Tokamak 是 Atom 的 Rust IDE。
- [Bastion 寻找维护者](https://github.com/bastion-rs/bastion/issues/32)。Bastion 是 Rust 应用程序的容错运行时

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了，共有 278 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-09-23..2019-09-30

- [安息吧，AST borrowck（借用检查员）（2012-2019）](https://github.com/rust-lang/rust/pull/64790)
- [修复在 ICE 期间，打印查询堆栈时的双重 panic](https://github.com/rust-lang/rust/pull/64799)
- [or-模式：将`PatKind/PatternKind::Or`推到 HIR＆HAIR 的顶层](https://github.com/rust-lang/rust/pull/64508)
- [修复 format macro expansions spans ，用宏生成](https://github.com/rust-lang/rust/pull/64793)
- [删除“需要类型注释（type annotation needed）”错误的全面沉默](https://github.com/rust-lang/rust/pull/64746)
- [在应该 panic 但不要 panic 的测试中，加入消息](https://github.com/rust-lang/rust/pull/64745)
- [滥用 ADT 时，指向定义](https://github.com/rust-lang/rust/pull/64691)
- [指向返回类型时，考虑 tail 表达式](https://github.com/rust-lang/rust/pull/64802)
- [obligation errors 会在可能的情况下，指出未完成的绑定](https://github.com/rust-lang/rust/pull/64151)
- [修复 类型别名中的隐式特征(impl trait in type aliases)的一致性检查](https://github.com/rust-lang/rust/pull/63934)
- [传播局部的`types.err`，进一步避免虚假的击倒错误](https://github.com/rust-lang/rust/pull/64674)
- [check_match：用`const A: i32 = 3`改进`let A = 2;`的诊断](https://github.com/rust-lang/rust/pull/64859)
- [当期望`()`的条件语句时，指向封闭的 match](https://github.com/rust-lang/rust/pull/64825)
- [为泛型`Graph`和`mir::Body`们，添加周期检测器](https://github.com/rust-lang/rust/pull/64622)
- [添加对 SIMD 类型，插入和提取（types, insert, 和 extract）的 const-eval 支持](https://github.com/rust-lang/rust/pull/64738)
- [实现基于数据流的 const 验证](https://github.com/rust-lang/rust/pull/64470)
- [优化`try_eval_bits`，避免布局查询](https://github.com/rust-lang/rust/pull/64673)
- [更好的`ObligationForest`改进](https://github.com/rust-lang/rust/pull/64627)
- [线程本地存储的，更具解释性的 panic 消息](https://github.com/rust-lang/rust/pull/64481)
- [稳定化`str::len`，`[T]::len`和`str::as_bytes`作为 const fn](https://github.com/rust-lang/rust/pull/63770)
- [保留`impl<T> From<!> for T`](https://github.com/rust-lang/rust/pull/62661)
- [从`slice::Iter`（`Mut`）`::try_fold`中删除手动展开](https://github.com/rust-lang/rust/pull/64600)
- [编译器内置：实现 bcmp](https://github.com/rust-lang/compiler-builtins/pull/315)
- [cargo：改进`--quiet`的测试输出](https://github.com/rust-lang/cargo/pull/7446)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

- [RFC 2523：`#[cfg(accessible(..) / version(..))]`](https://github.com/rust-lang/rfcs/pull/2523)。

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [支持的 rust 版本下限](https://github.com/rust-lang/rfcs/pull/2495)。
- \[处置：关闭] [基于项目的示例，用 cargo 项目](https://github.com/rust-lang/rfcs/pull/2517)。

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并:] [RFC 2008 的跟踪问题：#[non_exhaustive] attribute，面向 Future 的枚举/结构](https://github.com/rust-lang/rust/issues/44109)。
- \[处置：合并] [稳定化 `option::as_deref` 和 `option::as_deref_mut`](https://github.com/rust-lang/rust/pull/64708)。
- \[处置：合并] [稳定化 mem::take (mem_take)](https://github.com/rust-lang/rust/pull/64716)。
- \[处置：合并] [稳定化 `slice::repeat` (feature `repeat_generic_slice`)](https://github.com/rust-lang/rust/pull/64877)。

## 新的 RFC

- [RFC 1201 修订：Naked（裸体）函数更正](https://github.com/rust-lang/rfcs/pull/2774)。

# 本周引用句

可悲的是，本周没有提名。

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
