---
title: "Rust周报 320(译)"
date: 2020-01-10T10:26:30+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-320"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2020-01-07

[原文：本周 Rust(螃蟹) 320](https://this-week-in-rust.org/blog/2020/01/07/this-week-in-rust-320/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [将 Quake 3 转换为 Rust](https://immunant.com/blog/2020/01/quake3/)。
- [减少对 32 位 Apple 目标的支持](https://blog.rust-lang.org/2020/01/03/reducing-support-for-32-bit-apple-targets.html)。
- [学习 Rust 的危险方法：让编译器完成工作](http://cliffle.com/p/dangerust/6/)。
- [互斥锁(Mutexes)比自旋锁(spinlocks)更快](https://matklad.github.io/2020/01/04/mutexes-are-faster-than-spinlocks.html)。
- [在 Rust 中编写操作系统：2019 年 12 月更新](https://os.phil-opp.com/status-update/2020-01-07/)。
- [const 泛型进度更新](https://github.com/rust-lang/rust/issues/44580#issuecomment-570191702)。
- [Elastic 发布正式的 Elasticsearch Rust 客户端](https://github.com/elastic/elasticsearch-rs)。
- [异步生态系统中的 Backpressure](https://lucumr.pocoo.org/2020/1/1/async-pressure/)。
- [解释 Rust 中的 atomics](https://cfsamsonbooks.gitbook.io/explaining-atomics-in-rust/)。
- [宣布 ÄroRust —— 非官方的，Rust + 航空航天工作组](https://github.com/AeroRust)。
- [Rust Belt Rust 2019 的视频，现已发布](https://www.youtube.com/playlist?list=PLgC1L0fKd7UkVwjVlOySfMnn80Qs5TOLb)。
- [Rust 的 Result 类型入门](https://medium.com/@JoeKreydt/a-primer-on-rusts-result-type-66363cf18e6a)。

# 周箱

这周的箱子是[sqlx](https://crates.io/crates/sqlx)，现代的 SQL 客户端库。

谢谢[扬·里默（Jan Riemer）](https://users.rust-lang.org/t/crate-of-the-week/2704/698)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- \[good first issue] [bandwhich: 访问 network 接口时，更好的错误处理](https://github.com/imsnif/bandwhich/issues/73)。
- [bandwhich：在用户界面中，计算过去 N 秒的带宽，而不仅仅是 1](https://github.com/imsnif/bandwhich/issues/14)。
- [bandwhich：空格暂停显示](https://github.com/imsnif/bandwhich/issues/74)。
- [在 2020 年 5 月，与 Carol Nichols 和 Jake Goulding 一起，注册 Rust 培训](https://docs.google.com/forms/d/e/1FAIpQLSdIJy7JbftA27qJlxEgR9Q5o1MB3kXqnH3bthTJbg7KS-P0YQ/viewform)。
- [Rust 拉丁美洲 墨西哥 2020 年 CFP](https://cfp.rustlatam.org/events/rust-latam-mexico-2020)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 207 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-12-30..2019-01-06

- [使用函数属性“frame-pointer” 代替 “ no-frame-pointer-elim”](https://github.com/rust-lang/rust/pull/67748)
- [解析器：减少错误处理机制的多样性](https://github.com/rust-lang/rust/pull/67744)
- [在一个 arena 上分配 HIR p4/4](https://github.com/rust-lang/rust/pull/67032)
- [改善一些`Drop`相关的错误消息](https://github.com/rust-lang/rust/pull/67823)
- [为`proc_macro_server`添加符号规范化](https://github.com/rust-lang/rust/pull/67702)
- [建议在第一个参数为`self`时，调用方法](https://github.com/rust-lang/rust/pull/66913)
- [实现 uncommon_codepoints lint](https://github.com/rust-lang/rust/pull/67810)
- [性能：不要递归到，不需要 normalizing(规范化) 的类型](https://github.com/rust-lang/rust/pull/67808)
- [出于性能原因，还原“Add IntoFuture trait and await support”](https://github.com/rust-lang/rust/pull/67768)
- [确保我们在 MIR 内联过程中，处理 projections](https://github.com/rust-lang/rust/pull/67796)
- [miri：更新 panic 机制，以配合`#[track_caller]`变化](https://github.com/rust-lang/miri/pull/1137)
- [修复在 const 执行期间，涉及`Instance.ty`调用的 ICE](https://github.com/rust-lang/rust/pull/67800)
- [不再晋升 non-pattern const 函数](https://github.com/rust-lang/rust/pull/67531)
- [展开 ARM EHABI 时，更新屏障缓存(barrier chahe)](https://github.com/rust-lang/rust/pull/67779)
- [添加：`Iterator::try_find`](https://github.com/rust-lang/rust/pull/63177)
- [cargo：修复 CARGO_TARGET_triple_LINKER 环境变量](https://github.com/rust-lang/cargo/pull/7763)
- [crates.io：在箱子搜索中，允许多个关键字](https://github.com/rust-lang/crates.io/pull/1543)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2795：提议用于 formatting 宏的隐式命名参数](https://github.com/rust-lang/rfcs/pull/2795)。
- [RFC 2835：宣布安全传输项目组](https://github.com/rust-lang/rfcs/pull/2835)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [弃用 专注于 numeric constants 的 stdlib 模块，并 move 那些 constants 到 associated consts](https://github.com/rust-lang/rfcs/pull/2700)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：`#![feature(slice_patterns)]`在 1.42.0 中](https://github.com/rust-lang/rust/pull/67712).
- \[处置：合并] [稳定化：Condvar::wait_while 和 wait_timeout_while (之前是 wait_until, wait_timeout_until)](https://github.com/rust-lang/rust/pull/67076)。

## 新的 RFC

- [添加 llvm_asm！，和弃用 asm！](https://github.com/rust-lang/rfcs/pull/2843).
- [Supertrait item shadowing](https://github.com/rust-lang/rfcs/pull/2845).

# 本周报价

> _相对而言_，我的 Rust 程序就像《荒野猎人》里的 小李子，徒手杀死灰熊，宛如死去，被冻成一个巨大的冰块，惊喜的是！，实际上，他们还活着。
>
> 它们可以处理很多问题，它们在投入生产后几天或几周内遇到的错误往往要少得多。
>
> 我的 python 程序，otoh，就像 William Henry Harrison(是美国第九任总统，也是美国历史上执政时间最短的总统，只有一个月。)。就职日！令人兴奋！噢，外面的天似乎有点冷。呃哦 —— 肺炎。。。该死！

– [Jonathan Strong on reddit](https://www.reddit.com/r/rust/comments/ehup6r/reddit_on_rust/fcma8y2)

Thanks to [Jan Riemer](https://users.rust-lang.org/t/twir-quote-of-the-week/328/769) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/em9hct/this_week_in_rust_320/).</small>
