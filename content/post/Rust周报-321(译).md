---
title: "Rust周报 321(译)"
date: 2020-01-16T21:38:29+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-321"
css: ["/css/main.css", "/css/stylesheet.css"]
series: "Rust周报-中文"
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2020-01-14

[原文：本周 Rust(螃蟹) 321](https://this-week-in-rust.org/blog/2020/01/14/this-week-in-rust-321/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [虚幻引擎中的 Rust 代码](https://ejmahler.github.io/rust_in_unreal/)。
- [简介- Roguelike 教程](http://bfnightly.bracketproductions.com/rustbook/chapter_0.html)。
- [迈向 Rust 基础](https://smallcultfollowing.com/babysteps/blog/2020/01/09/towards-a-rust-foundation/)。
- [Way Cooler 验尸](http://way-cooler.org/blog/2020/01/09/way-cooler-post-mortem.html)。
- [Why Rust? I have a GC](https://llogiq.github.io/2020/01/10/rustvsgc.html)！
- [rust-analyzer changelog 7](https://rust-analyzer.github.io/thisweek/2020/01/13/changelog-7.html).
- [本月 Rust gamedev 5- 2019 年 12 月](https://rust-gamedev.github.io/posts/newsletter-005/).
- [RDBC 正迁往东京](https://andygrove.io/2020/01/rust-database-connectivity-rdbc/).
- [用 Rust 和 Z3 合成 loop-free程序](https://fitzgeraldnick.com/2020/01/13/synthesizing-loop-free-programs.html).
- [ESP32 上，集装箱型构建 for Rust](https://dev.to/mtnmts/containerized-builds-for-rust-on-the-esp32-e8m).
- [在 Rust 内核中，实现协同调度](https://ryan-jacobs1.github.io/2020/01/06/scheduler.html)。

# 一周一箱

这个星期的箱子是[cxx](https://github.com/dtolnay/cxx)，一个通过顾及两面，安全构建 C++ FFI 的库。

多亏了[Ehsan M. Kermani](https://users.rust-lang.org/t/crate-of-the-week/2704/702)的建议！

[提交下周的建议和投票][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务可能还提供了导师，请访问任务页以获取更多信息。

- \[good first issue] [sqlx: 添加一个Encode 和 Decode 的 proc macro derive，用来支持 _仅_ 1-arity 元组结构](https://github.com/launchbadge/sqlx/issues/34)和导师一起。
- [帮助将 hyper 和 body image futio 移植到 async-std](https://users.rust-lang.org/t/twir-call-for-participation/4821/288).

如果您是 Rust 项目的所有者并正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust 芯更新

311 个请求是[上周合并][merged]的

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-01-06..2020-01-13

- [准备 LLVM 10 升级](https://github.com/rust-lang/rust/pull/67900)
- [允许在目标规范中，指定 LLVM 参数](https://github.com/rust-lang/rust/pull/68059)
- [不需要`allow_internal_unstable`除非`staged_api`已启用](https://github.com/rust-lang/rust/pull/68114)
- [更多地减少 error handling 多样性](https://github.com/rust-lang/rust/pull/67770)
- [介绍`X..`, `..X`，和`..=X` range 模式](https://github.com/rust-lang/rust/pull/67258)
- [禁`...X` pats、强化测试并改进诊断](https://github.com/rust-lang/rust/pull/68120)
- [遇到链式对比时，添加建议](https://github.com/rust-lang/rust/pull/68108)
- [仔细处理多个错误修复建议](https://github.com/rust-lang/rust/pull/67880)
- [简化`into_key_slice_mut`](https://github.com/rust-lang/rust/pull/67725)
- [`Option::{expect,unwrap}`以及`Result::{expect, expect_err, unwrap, unwrap_err}`，有`#[track_caller]`](https://github.com/rust-lang/rust/pull/67887)
- [添加`HashSet::get_or_insert_owned`](https://github.com/rust-lang/rust/pull/67358)
- [让`Layout::new` const](https://github.com/rust-lang/rust/pull/66254)
- [构成更多的`alloc::Layout`](https://github.com/rust-lang/rust/pull/67494)
- [futures mpsc：拆分 bounded 和 unbounded 实现](https://github.com/rust-lang/futures-rs/pull/1326)
- [区分 rustdoc 中的私有项和隐藏项](https://github.com/rust-lang/rust/pull/67875)
- [rustbuild: 添加`llvm-skip-rebuild` flag 到 `x.py`](https://github.com/rust-lang/rust/pull/68074)

## 批准的 RFC

生锈后会生锈[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 这些是本周批准实施的 RFC：

_本周没有批准招标书。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [招标书](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [欢迎 the asm project group](https://github.com/rust-lang/rfcs/pull/2836)。
- \[处置：合并] [弃用 专注于 numeric constants 的 stdlib 模块，并 move 那些 constants 到 associated consts](https://github.com/rust-lang/rfcs/pull/2700).

### [跟踪问题和减贫战略](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化`#![feature(slice_patterns)]`，在 1.42.0 中](https://github.com/rust-lang/rust/pull/67712).
- \[处置：合并] [添加 from<vec<nonzerou8>> for cstring](https://github.com/rust-lang/rust/pull/64069).
- \[处置：合并] [放松 hashmap/hashset 的 bounds](https://github.com/rust-lang/rust/pull/67642).
- \[处置：合并] [稳定化`ptr::slice_from_raw_parts[_mut]`](https://github.com/rust-lang/rust/pull/68234).
- \[处置：合并] [稳定化 debug_map_key_value feature](https://github.com/rust-lang/rust/pull/68200).
- \[处置：合并] [跟踪问题： core::iter::once_with()](https://github.com/rust-lang/rust/issues/57581).
- \[处置：合并] [跟踪问题： `manuallydrop::take`](https://github.com/rust-lang/rust/issues/55422).

## 新的 RFC

- [内联程序集](https://github.com/rust-lang/rfcs/pull/2850).

# 本周报价

> @ZiCog: 是否有人在 Rust 对标 C 的某些问题上，有个'无禁止, unsafe or not'之类的答案?
>
> @kornel: 通过 c2rust，pipe C 版本  :slight_smile:
>
> @ZiCog: 呀! 这么说现在，Rust 打败了 Clang 和 GCC!

– [ZiCog and Kornel on rust-users](https://users.rust-lang.org/t/clippy-driving-me-to-insanity-insisting-on-iterators/36796/19)

Thanks to [Jan Riemer](https://users.rust-lang.org/t/twir-quote-of-the-week/328/769) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/epinfr/this_week_in_rust_321/).</small>
