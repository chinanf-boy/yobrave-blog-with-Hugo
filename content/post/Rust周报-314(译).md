---
title: "Rust周报 314(译)"
date: 2019-11-29T10:28:22+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-314'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-11-26

[原文：本周 Rust(螃蟹) 314](https://this-week-in-rust.org/blog/2019/11/26/this-week-in-rust-314/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Tokio 路线图到 1.0](https://tokio.rs/blog/2019-11-tokio-0-2/)。
- [每六周运输一次编译器](https://www.pietroalbini.org/blog/shipping-a-compiler-every-six-weeks/)。
- [nightly rust 版本下，在常数中的`if`和`match`](https://blog.rust-lang.org/inside-rust/2019/11/25/const-if-match.html)。
- [迈向，反应式 UI 的统一理论](https://raphlinus.github.io/ui/druid/2019/11/22/reactive-ui.html)。
- [测量错误处理库](https://blog.yoshuawuyts.com/error-handling-survey/)。
- [将 librsvg 移植到 Rust：重构 Length 类型](https://people.gnome.org/~federico/blog/refactoring-the-length-type.html)。
- [通过将 C 转换为 Rust 获得的经验教训](https://immunant.com/blog/2019/11/rust2020/)。
- [在 Rust 中，是如何 panic 的](https://www.ralfj.de/blog/2019/11/25/how-to-panic-in-rust.html)。
- [整洁的 Rust 技巧：将 Rust 闭包传递给 C](https://blog.seantheprogrammer.com/neat-rust-tricks-passing-rust-closures-to-c)。
- [将 gnome-shell's styles 移至 Rust](https://people.gnome.org/~federico/blog/moving-gnome-shell-styles-to-rust.html)。
- [Async-awaitifying 一个 Rust CLI 应用](https://zupzup.org/async-awaitify-rust-cli/)。
- [为 PineTime 的触摸控制器，构建 Rust 驱动程序](https://medium.com/@ly.lee/building-a-rust-driver-for-pinetimes-touch-controller-cbc1a5d5d3e9)。
- [RustFest Barcelona 谈话录音，现已推出](https://blog.rustfest.eu/this-week-in-rustfest-barcelona-videos)。
- [Cryptowatch 赞助了 Rust GUI 库 iced 的开发](https://blog.cryptowat.ch/2019/11/25/sponsoring-rust-gui-library-iced/)。

### ＃Rust2020

查找位于＃Rust2020 的所有帖子[读 Rust](https://readrust.net/rust-2020/)。

# 周箱

这周的箱子是[rerast](https://github.com/google/rerast)，基于规则的 Rust 代码转换工具。

谢谢[扬·里默（Jan Riemer）](https://users.rust-lang.org/t/crate-of-the-week/2704/674)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- \[寻求品测] [time v0.2 pre-release 回馈](https://github.com/time-rs/time/issues/190)。
- \[good first issue] [what: shared os behaviour](https://github.com/imsnif/what/issues/17)。
- [what：在所有接口上，监听](https://github.com/imsnif/what/issues/16)。
- [crates.io：carols10cents 将指导 11 月和 12 月的多个问题](https://github.com/rust-lang/crates.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AE-mentor)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 260 个拉取请求，[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-11-18..2019-11-25

- [稳定化：`!`](https://github.com/rust-lang/rust/pull/65355)
- [稳定化：`cfg(doc)`](https://github.com/rust-lang/rust/pull/61351)
- [debuginfo：`std::collections::Hash*`支持，在 Windows 调试器中](https://github.com/rust-lang/rust/pull/66597)
- [打印未初始化`Vec`时，使 gdb pretty-printing 更健壮](https://github.com/rust-lang/rust/pull/66576)
- [生成 DWARF 地址范围，以加快查找速度](https://github.com/rust-lang/rust/pull/66532)
- [fix 循环，当 debug-printing 不透明类型时](https://github.com/rust-lang/rust/pull/66594)
- [解决：在 resolution 过程中，将派生助手置于最高优先级](https://github.com/rust-lang/rust/pull/66529)
- [删除 AST 中，特定节点的 pretty printing](https://github.com/rust-lang/rust/pull/66575)
- [指向类型错误上，`let`分配中的类型](https://github.com/rust-lang/rust/pull/66539)
- [建议在需要时，调用异步闭包](https://github.com/rust-lang/rust/pull/66239)
- [建议用`#[repr(C)]`代替`#[repr(C, packed, ...)]`](https://github.com/rust-lang/rust/pull/66206)
- [添加一些生命周期错误的建议](https://github.com/rust-lang/rust/pull/58281)
- [用一个`SmallVec` for `Candidate::match_pairs`](https://github.com/rust-lang/rust/pull/66540)
- [miri：添加`acos`，`asin`和`atan`外部函数](https://github.com/rust-lang/miri/pull/1067)
- [mir-opt：以更优化的方式，询问`?`](https://github.com/rust-lang/rust/pull/66282)
- [mir-opt：默认，打开`ConstProp`](https://github.com/rust-lang/rust/pull/66074)
- [miri：支持在 panic 后 unwinding](https://github.com/rust-lang/miri/pull/693)
- [将 MIR 中的 statics，作为 const pointers 处理](https://github.com/rust-lang/rust/pull/66587)
- [延迟一个`is_local_ever_initialized`的调用](https://github.com/rust-lang/rust/pull/66537)
- [减小`hir::Expr`的尺寸，通过 boxing 更多`hir::InlineAsm`](https://github.com/rust-lang/rust/pull/66515)
- [使用 proc-macro 随处 derive HashStable](https://github.com/rust-lang/rust/pull/66279)
- [去掉 libstd 的`compiler_builtins_lib`功能](https://github.com/rust-lang/rust/pull/66538)
- [std::error::Chain：删除 `Copy`](https://github.com/rust-lang/rust/pull/66511)
- [use `drop_in_place` in `array::IntoIter::drop`](https://github.com/rust-lang/rust/pull/65821)
- [稳定化：`Result::map_or_else`](https://github.com/rust-lang/rust/pull/66322)
- [libc：弃用 vfork](https://github.com/rust-lang/libc/pull/1574)
- [libc：为 sparc-unknown-linux-gnu 添加初始支持](https://github.com/rust-lang/libc/pull/1567)
- [cargo：在注册表中，扩展箱子名称安全性问题的文档](https://github.com/rust-lang/cargo/pull/7616)
- [cargo：默认情况下，打开新的 lock 文件格式](https://github.com/rust-lang/cargo/pull/7579)
- [cargo：稳定 install-upgrade](https://github.com/rust-lang/cargo/pull/7560)
- [rustdoc：稳定`edition`注解](https://github.com/rust-lang/rust/pull/66238)
- [rustdoc：在单引号代码块中，保留空格](https://github.com/rust-lang/rust/pull/65613)
- [measureme：通过使用 parking_lot::Mutex 和避免在 write_atomic 中分配堆，优化 FileSerializationSink](https://github.com/rust-lang/measureme/pull/88)

## 批准的 RFC

对 Rust 的更改，请遵循 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： `std::{rc,sync}::weak::{weak_count, strong_count}`](https://github.com/rust-lang/rust/pull/65778)。
- \[处置：合并] [追踪问题：多余的浮点对数常量](https://github.com/rust-lang/rust/issues/50540)。
- \[处置：合并] [impl debug for maybeuninit](https://github.com/rust-lang/rust/pull/65013)。
- \[处置：关闭] [修复 soundness bug 18510，通过只中止 safe extern "c" 函数的 unwind](https://github.com/rust-lang/rust/pull/64315)。

## 新的 RFC

- [Box error alias](https://github.com/rust-lang/rfcs/pull/2820)。

# 本周引用句

> 我之前说过，这里再说一遍：如果有人将 Rust 视为是对 C ++的批评，则应也有人，将其视为一种建设性的批评。

–[在/r/rust 上的 llogiq](https://www.reddit.com/r/rust/comments/dyr8ps/rust_from_a_cc_point_of_view_viceversa/f835w7h)

Thanks to [Dmitry Kashitsyn](https://users.rust-lang.org/t/twir-quote-of-the-week/328/741) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/e2ivns/this_week_in_rust_314/).</small>
