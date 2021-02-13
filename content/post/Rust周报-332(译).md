---
title: "Rust周报 332(译)"
date: 2020-04-04T22:15:50+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-332"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-03-31
- [原文：332 期](https://this-week-in-rust.org/blog/2020/03/31/this-week-in-rust-332/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust 编写 OS：async/await](https://os.phil-opp.com/async-await/)。
- [rustc-dev-guide 概述](https://blog.rust-lang.org/inside-rust/2020/03/26/rustc-dev-guide-overview.html)。
- [Tokio：通过自动协作任务生成，来减少尾延迟](https://tokio.rs/blog/2020-04-preemption/)。
- [介绍 R2，Rust 路由器](https://r2.rs/blog/)。
- [Goodbye, docs team](https://blog.rust-lang.org/inside-rust/2020/03/27/goodbye-docs-team.html)。
- [Traits 工作组 2020 冲刺-1 总结](https://blog.rust-lang.org/inside-rust/2020/03/28/traits-sprint-1.html)。
- [Specs 和 Legion，两种非常不同的 ECS 方法](https://csherratt.github.io/blog/posts/specs-and-legion/)。
- [减少 librsvg 中的内存消耗，第 4 部分：Bézier 路径的紧凑内存模型](https://people.gnome.org/~federico/blog/reducing-memory-consumption-in-librsvg-4.html)。
- [Rust 中的状态机](https://blog.yoshuawuyts.com/state-machines/)。
- [宏 vs 重命名](https://rust-analyzer.github.io/blog/2020/03/30/macros-vs-rename.html)。
- [Rust 模式匹配的更高级方面](https://notes.iveselov.info/programming/refs-and-pattern-matching-in-rust)。
- [什么构成一个漏洞](https://boats.gitlab.io/blog/post/vulnerabilities/)？
- [关于泛型和关联类型](https://thomashartmann.dev/blog/on-generics-and-associated-types/)。
- [rust-analyzer changelog 18](https://rust-analyzer.github.io/thisweek/2020/03/30/changelog-18.html)。
- [IntelliJ Rust 更新日志 119](https://intellij-rust.github.io/2020/03/30/changelog-119.html)。
- [Rust in blockchain 10](https://rustinblockchain.org/newsletters/2020-04-01-keep-calm-and-hack-more/)。

# 周箱

这周的箱子是[async-recursion](https://github.com/dcchut/async-recursion)，这是一个允许在异步函数中，递归的一个宏。

谢谢[Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/744)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [rust：实现用于 usize/isize 的转换 traits，搭配一个可移植的 lint](https://github.com/rust-lang/rust/issues/70460)。
- [This Week in Rust 正在寻找新的维护者](https://blog.rust-lang.org/inside-rust/2020/03/13/twir-new-lead.html)。（如果您有兴趣，请[填写此表格](https://docs.google.com/forms/d/e/1FAIpQLScJUYdkpLwQc_4zn3oxpVLdT3IHtKlYEBAzd6lgSgE3vsTOtA/viewform)）。
- [RustConf 2020 CFP 现已开放](https://cfp.rustconf.com/events/rustconf-2020)。我们希望在 RustConf 收到您的来信！
- [dotenv-linter 正在寻找贡献者](https://twitter.com/mgrachev/status/1241700876244434951)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 468 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-03-23..2020-03-30

- [允许，对非自动 traits 进行否决 impls](https://github.com/rust-lang/rust/pull/68004)
- [解析器：恢复`...`，作为一种模式，建议`..`](https://github.com/rust-lang/rust/pull/70417)
- [清理调试选项](https://github.com/rust-lang/rust/pull/70297)
- [尽可能晚地执行重复表达式 lengths](https://github.com/rust-lang/rust/pull/69981)
- [发出不匹配的`fn`类型建议时，修复周期错误](https://github.com/rust-lang/rust/pull/69936)
- [修复，无效占位符类型错误的小小问题](https://github.com/rust-lang/rust/pull/70369)
- [修复，错误的模式警告“unreachable pattern”](https://github.com/rust-lang/rust/pull/70413)
- [解决 where 子句中，不良的占位符类型](https://github.com/rust-lang/rust/pull/70294)
- [调整链式操作的诊断](https://github.com/rust-lang/rust/pull/69878)
- [删除 const eval loop 检测器](https://github.com/rust-lang/rust/pull/70087)
- [正确规范化常数](https://github.com/rust-lang/rust/pull/70319)
- [性能：避免 number 读取较小时，在依赖图上，分配一个 set](https://github.com/rust-lang/rust/pull/69778)
- [重构 object file handling](https://github.com/rust-lang/rust/pull/70384)
- [`#[track_caller]` on `core::ops::`{`Index`，`IndexMut`}](https://github.com/rust-lang/rust/pull/70234)
- [添加`Result<Result<T, E>, E>::flatten -> Result<T, E>`](https://github.com/rust-lang/rust/pull/70140)
- [添加 copy 绑定到，原子和数字的内在函数](https://github.com/rust-lang/rust/pull/70101)
- [`OsStr`上的 ASCII 方法](https://github.com/rust-lang/rust/pull/69937)
- [添加`Wake` trait，给`Waker`s 的安全建造](https://github.com/rust-lang/rust/pull/68700)
- [`impl From<[T; N]> for Vec<T>`](https://github.com/rust-lang/rust/pull/68692)
- [`fold_self`和`try_fold_self` for Iterators](https://github.com/rust-lang/rust/pull/65222)
- [fix `TryEnterCriticalSection` 返回类型](https://github.com/rust-lang/rust/pull/70510)
- [regex：为`c_char`添加 fast path](https://github.com/rust-lang/regex/pull/658)
- [regex：改善`escape_into`的分配](https://github.com/rust-lang/regex/pull/655)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [跟踪问题： `{f32,f64}::to_int_unchecked` 方法](https://github.com/rust-lang/rust/issues/67058)。

## 新的 RFC

- [添加一个`trustme`关键字，去定义不安全代码块](https://github.com/rust-lang/rfcs/pull/2893)。
- [documentation 中的代码块中的文档](https://github.com/rust-lang/rfcs/pull/2894)。
- [YieldSafe auto trait](https://github.com/rust-lang/rfcs/pull/2890)。

# 本周报价

> Meta-Comment：我是作为一名完全不参与 rust 项目的人，开始这个话题的。看到那回复的本心非常令人放心。即使知道 Rust 社区有多棒，但考虑到‘菜鸟’问题，我仍然准备了至少一小部分的自尊心。结果是我没有任何不愉快的感觉。太奇妙了。任何对社区文化产生影响的人都应该得到份荣誉：这种奇妙并非没有原因 —— 它必然是许多人，沿正确方向，慢慢推动社区，走过一段悠久历史的。谢谢。

– [Ben on Zulip](https://rust-lang.zulipchat.com/#narrow/stream/122653-zulip/topic/new-user.20friction.20from.20stream.20naming.20conventions/near/191422121)

Thanks to [Josh Triplett](https://users.rust-lang.org/t/twir-quote-of-the-week/328/842) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ftl9l3/this_week_in_rust_332/).</small>
