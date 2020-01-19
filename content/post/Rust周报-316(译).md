---
title: "Rust周报 316(译)"
date: 2019-12-15T17:01:31+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-316'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-12-10

[原文：本周 Rust(螃蟹) 316](https://this-week-in-rust.org/blog/2019/12/10/this-week-in-rust-316/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [如何在 2019 年，最后一次加速 Rust 编译器](https://blog.mozilla.org/nnethercote/2019/12/11/how-to-speed-up-the-rust-compiler-one-last-time-in-2019/)。
- [Formatting 对于嵌入式 Rust 来说，是不合理的昂贵](https://jamesmunns.com/blog/fmt-unreasonably-expensive/)。
- [1Password X Manager 的某些部分已用 Rust 重写](https://blog.1password.com/1passwordx-december-2019-release/)。
- [宣布具有完整异步/等待支持的 hyper v0.13](https://seanmonstar.com/post/189594157852/hyper-v013)。
- [阻塞内部异步代码](https://stjepang.github.io/2019/12/04/blocking-inside-async-code.html)。
- [宣布 docs.rs 团队](https://blog.rust-lang.org/inside-rust/2019/12/09/announcing-the-docsrs-team.html)。
- [编写最慢的快速排序](https://chasewilson.dev/blog/slowest-quicksort/)。
- [Rust 库中的健全性错误：不能与'em 一起生活，活着不能没有'em](https://docs.rs/dtolnay/0.0.7/dtolnay/macro._03__soundness_bugs.html)。
- [Rust 中 3.5 KB 的，微小 Windows 可执行文件](https://www.codeslow.com/2019/12/tiny-windows-executable-in-rust.html)。
- [Embark 内部的 Rust](https://medium.com/embarkstudios/inside-rust-at-embark-b82c06d1d9f4)。
- [Tokio 0.2 - Rust 崩溃课程](https://www.snoyman.com/blog/2019/12/rust-crash-course-09-tokio-0-2)。
- [推广 基于 autoref 的规范](https://lukaskalbertodt.github.io/2019/12/05/generalized-autoref-based-specialization.html)。
- [A rusty radio：Si4703 FM 收音机 receiver 驱动程序](https://blog.eldruin.com/si4703-fm-radio-receiver-driver-in-rust/)。

### ＃Rust2020

查找位于＃Rust2020 的所有帖子[读 Rust](https://readrust.net/rust-2020/)。

# 周箱

这周的箱子是[StaticVec](https://github.com/slightlyoutofphase/staticvec)，是 nightly-only const 泛型支持的，固定大小 vec 板箱子。

谢谢[ABagOfChips](https://users.rust-lang.org/t/crate-of-the-week/2704/682)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [我们需要您的帮助，在`rustup`1.21.0 发布之前](https://www.reddit.com/r/rust/comments/e7rer9/we_need_your_help_before_rustup_1210_can_be/)。
- [smallvec：为 IntoIter `IntoIter<A: Array>`实现 Clone where A：Clone](https://github.com/servo/rust-smallvec/issues/178)。
- [mundane：在功能标记后面，记录 items](https://github.com/google/mundane/issues/22)。
- [crates.io：carols10cents 将指导 11 月和 12 月的多个问题](https://github.com/rust-lang/crates.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AE-mentor)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 247 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-12-02..2019-12-09

- [实现`#[track_caller]`属性](https://github.com/rust-lang/rust/pull/65881)（RFC＃[2091 年](https://rust-lang.github.io/rfcs/2091-inline-semantic.html)）
- [语法：统一 AST 中的 macro 和 attribute 参数](https://github.com/rust-lang/rust/pull/66935)
- [stdarch：将 CRC32 detection 添加到 arm32](https://github.com/rust-lang/stdarch/pull/830)
- [fix `TypedArena`为递归分配，返回错误的指针](https://github.com/rust-lang/rust/pull/67003)
- [制造`ForeignItem`，一个`Item`的别名](https://github.com/rust-lang/rust/pull/67114)
- [删除 address parser 中的 boxed 闭包](https://github.com/rust-lang/rust/pull/67085)
- [rustc：从 -Z span_free_formats 中，隐藏 HirId 的 fmt::Debug 输出](https://github.com/rust-lang/rust/pull/66850)
- [使`process_obligations()`贪婪（算法）](https://github.com/rust-lang/rust/pull/66408)
- [用值检查 break 时，检查 break target 可用性](https://github.com/rust-lang/rust/pull/66863)
- [在多个`expected...found` notes，包括一个 span ](https://github.com/rust-lang/rust/pull/67011)
- [在推断为，非复制类型参数(arg)的 async fn 上，不进行 ICE](https://github.com/rust-lang/rust/pull/67004)
- [使 try_mark_previous_green 知道 cycles](https://github.com/rust-lang/rust/pull/66846)
- [在 const fn 中，为 mut refs 添加 feature gate](https://github.com/rust-lang/rust/pull/66606)
- [将 unused_labels 从 allow 更改为 warn](https://github.com/rust-lang/rust/pull/66325)
- [在`exact_div`上，显示 signed 操作的标志](https://github.com/rust-lang/rust/pull/66148)
- [chalk：将 sure_answer_recursive 转换为迭代，而不是递归](https://github.com/rust-lang/chalk/pull/281)
- [处理分散的函数，前往它们的 return place](https://github.com/rust-lang/rust/pull/66827)
- [清理`BodyCache`](https://github.com/rust-lang/rust/pull/66991)
- [删除匹配检查中，顶层 or-pattern 的 hack](https://github.com/rust-lang/rust/pull/66967)
- [const-prop：fix ICE 计算 enum 判别式（discriminant）](https://github.com/rust-lang/rust/pull/66960)
- [miri：调整和使用`OsStr`接口](https://github.com/rust-lang/miri/pull/1099)
- [仅在 const eval 期间，记住 const fn calls](https://github.com/rust-lang/rust/pull/66866)
- [miri：添加标志，以忽略内存泄漏](https://github.com/rust-lang/miri/pull/1106)
- [更好的方法，来忽略 miri 中的测试](https://github.com/rust-lang/miri/pull/1105)
- [无效的`SetDiscriminant`，代码生成"unreachable"](https://github.com/rust-lang/rust/pull/67054)
- [codegen：迁移至`LLVM`{`Get`，`Set`}`ValueName2`](https://github.com/rust-lang/rust/pull/67033)
- [更新最小外部 LLVM 为 7](https://github.com/rust-lang/rust/pull/66973)
- [使用 Polonius，实现非法的子集关系错误](https://github.com/rust-lang/rust/pull/67016)
- [将`ExitStatusExt`添加到 prelude](https://github.com/rust-lang/rust/pull/67041)
- [将`bool::then_*`改名为`bool::to_option_*`,并在适当的地方使用](https://github.com/rust-lang/rust/pull/65195)
- [添加`{f32,f64}::approx_unchecked_to<Int>`不安全的方法](https://github.com/rust-lang/rust/pull/66841)
- [添加测试，当`cargo new`时，`NAME`环境变量](https://github.com/rust-lang/cargo/pull/7667)
- [cargo：删除`--offline`空索引错误](https://github.com/rust-lang/cargo/pull/7655)
- [cargo：加一个`--offline` hint](https://github.com/rust-lang/cargo/pull/7654)
- [rustdoc：更少的 minification](https://github.com/rust-lang/rust/pull/66828)
- [rustfmt：默认情况下，切换到非递归模式](https://github.com/rust-lang/rustfmt/pull/3938)
- [rustup：若更新，输出工具链的先前版本](https://github.com/rust-lang/rustup/pull/2143)
- [rustup：解决潜在的未来冲击（x.yyy.zz）](https://github.com/rust-lang/rustup/pull/2132)
- [crates.io：将审计流程添加到 publish，yank 和 unyank 公告](https://github.com/rust-lang/crates.io/pull/1700)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处理：合并] [提出，formatting macros 的暗含名字的参数](https://github.com/rust-lang/rfcs/pull/2795)。

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [强力反对 error::description](https://github.com/rust-lang/rust/pull/66919)。
- \[处理：合并] [稳定化： `core::panic` 模块](https://github.com/rust-lang/rust/pull/66771)。
- \[处理：合并] [稳定化： result::map_or](https://github.com/rust-lang/rust/pull/66570)。
- \[处理：合并] [使 layout::new 为 const](https://github.com/rust-lang/rust/pull/66254)。
- \[处理：合并] [稳定化：在内联模块上的 attribute macros](https://github.com/rust-lang/rust/pull/64273)。

## 新的 RFC

- [将 Apple 32bit targets 降级为 Tier 3 ](https://github.com/rust-lang/rfcs/pull/2837)。
- [将`std::net`，移动到`core:.net`](https://github.com/rust-lang/rfcs/pull/2832)。
- [Cargo 报告 future-incompat](https://github.com/rust-lang/rfcs/pull/2834)。
- [宣布 safe-transmute 项目组](https://github.com/rust-lang/rfcs/pull/2835)。
- [介绍 ASM 项目组](https://github.com/rust-lang/rfcs/pull/2836)。

# 本周引用句

> 当我使用 Rust 时，感觉好像我真的细细考虑该程序，而不是浪费我的一半精力，通过必要的’仪式‘手段，来阻止该语言的 panic。

– [/u/rime-frost on reddit](https://www.reddit.com/r/rust/comments/e8tms0/rust_is_fun/faei257/)

Thanks to [ssokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/755) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/e9t7cl/this_week_in_rust_316/).</small>
