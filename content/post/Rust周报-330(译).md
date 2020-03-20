---
title: "Rust周报 330(译)"
date: 2020-03-20T11:39:31+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-330"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-03-17
- [原文：330 期](https://this-week-in-rust.org/blog/2020/03/17/this-week-in-rust-330/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.42.0](https://blog.rust-lang.org/2020/03/12/Rust-1.42.html)。🎉🎈
- [ripgrep 12 发布](https://github.com/BurntSushi/ripgrep/releases/tag/12.0.0)。
- [在 Dropbox 重写我们同步引擎的核心](https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine)。
- [docs.rs 现在允许您选择 build targets](https://blog.rust-lang.org/2020/03/15/docs-rs-opt-into-fewer-targets.html)。
- [Redox OS —— pkgar 简介](https://www.redox-os.org/news/pkgar-introduction/)。
- [减小`Option<T>`尺寸，这通过将成员添加到`T`完成](https://www.reddit.com/r/rust/comments/fimbo3/reducing_the_size_of_optiont_by_adding_members_to/)？
- [开箱即用的动态调度](https://llogiq.github.io/2020/03/14/ootb.html)。
- [parallel-stream](https://blog.yoshuawuyts.com/parallel-stream/)。
- [优化，没有或有](https://oribenshir.github.io/afternoon_rusting/blog/copy-on-write)？
- [Rust All Hands 回顾展](https://blog.rust-lang.org/inside-rust/2020/03/18/all-hands-retrospective.html)。
- [如何编写 Rust 箱子文档的指南](https://blog.guillaume-gomez.fr/articles/2020-03-12+Guide+on+how+to+write+documentation+for+a+Rust+crate)。
- [C＃程序员检查 Rust —— 第 2 部分](https://treit.github.io/rust,/c%23,/programming/2020/03/15/StartingRustPart2.html)。
- [Traits，动态调度和 upcasting](https://articles.bchlr.de/traits-dynamic-dispatch-upcasting)。
- [Rust 引用](https://blog.thoughtram.io/references-in-rust/)。
- [Rust pt 解析库 第 2 部分 —— 测试实用程序](https://blog.frondeus.pl/parser-2/)。
- [将数据集从 CSV 加载到 NDArray](https://shahinrostami.com/posts/programming/rust-notebooks/loading-datasets-from-csv-into-ndarray/)。
- [宣布 Rust Search Extension v0.8](https://www.reddit.com/r/rust/comments/fg5wo1/announcing_rustsearchextension_v08_the_ultimate/)。
- [Async 面试 7：没船](https://smallcultfollowing.com/babysteps/blog/2020/03/10/async-interview-7-withoutboats/)。
- [rust-analyzer changelog 16](https://rust-analyzer.github.io/thisweek/2020/03/16/changelog-16.html)。
- [IntelliJ Rust 更新日志 118](https://intellij-rust.github.io/2020/03/16/changelog-118.html)。
- [推迟 RustFest 荷兰](https://blog.rustfest.eu/postponing-rustfest-nl)。
- [Rust Latam 2020（墨西哥）被取消](https://rustlatam.org/index.html#cancel)。

# 周箱

这周的箱子是[beef](https://github.com/maciejhirsz/beef)，一种替代的，内存紧凑型，Clone on Write（CoW）实现。

谢谢[弗拉德·弗罗洛夫（Vlad Frolov）](https://users.rust-lang.org/t/crate-of-the-week/2704/740)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [This Week in Rust 正在寻找新的维护者](https://blog.rust-lang.org/inside-rust/2020/03/13/twir-new-lead.html)。
- [swc 项目需要社区的一些帮助](https://swc-project.github.io/blog/2020/03/16/roadmap-and-call-for-help)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 309 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-03-09..2020-03-16

- [更改`DIBuilderCreateEnumerator`签名，以匹配 LLVM 9](https://github.com/rust-lang/rust/pull/69734)
- [添加，与 miri allocations 相对应的 LLVM 全局变量的支持，应命名为`alloc123`](https://github.com/rust-lang/rust/pull/69155)
- [在 debuginfo 中发出基于 1 的列号](https://github.com/rust-lang/rust/pull/69357)
- [改善 expression & attribute 解析](https://github.com/rust-lang/rust/pull/69760)
- [解决：修复 fresh binding disambiguation 中的两个问题](https://github.com/rust-lang/rust/pull/70006)
- [不要将本地变量，存储在立即被 resume 参数覆盖的 generators 中](https://github.com/rust-lang/rust/pull/69716)
- [让`PlaceRef`仅拿着一个 lifetime](https://github.com/rust-lang/rust/pull/69714)
- [采用`TypeRelating`，用于实例化查询响应](https://github.com/rust-lang/rust/pull/69591)
- [性能：重复使用一个`Vec`，in mir simplification](https://github.com/rust-lang/rust/pull/68551)
- [详尽检查`Matrix::push`：递归扩展 or-patterns](https://github.com/rust-lang/rust/pull/69891)
- [miri：使用一个 seesion 变量，而不是始终检查环境变量](https://github.com/rust-lang/rust/pull/69888)
- [`panic_bounds_check`：使用 caller_location，比如 `PanicFnLangItem`](https://github.com/rust-lang/rust/pull/69850)
- [检查 output 是否为立即值](https://github.com/rust-lang/rust/pull/69836)
- [档`vec::IntoIter` drop 时的 panics，修复内存泄漏](https://github.com/rust-lang/rust/pull/69828)
- [优化`catch_unwind`，去匹配 C++ try/catch](https://github.com/rust-lang/rust/pull/67502)
- [使 `mem::discriminant` 为 const](https://github.com/rust-lang/rust/pull/69825)
- [允许`AllocRef`中的 zero-sized 类型](https://github.com/rust-lang/rust/pull/69799)
- [`mem::zeroed`/`uninit`：在不允许 zero-initialization 的类型上，panics](https://github.com/rust-lang/rust/pull/66059)
- [添加`Display`和`Error` impls for `proc_macro::LexError`](https://github.com/rust-lang/rust/pull/68899)
- [impl `Error` for `TryReserveError`](https://github.com/rust-lang/rust/pull/69792)
- [impl `nth`，`last`和`count` for `iter::Copied`](https://github.com/rust-lang/rust/pull/69625)
- [添加 undo_leak，去重设 `RefCell`借用状态](https://github.com/rust-lang/rust/pull/69528)
- [impl `Copy` for `IoSlice`](https://github.com/rust-lang/rust/pull/69403)
- [稳定 `integer`{`to`，`from`}`_`{`be`，`le`，`ne`}`_bytes`方法 为 const ](https://github.com/rust-lang/rust/pull/69373)
- [impl `From<&mut str>` for `String`](https://github.com/rust-lang/rust/pull/69661)
- [hashbrown：优化`Clone`实现](https://github.com/rust-lang/hashbrown/pull/146)
- [futures：将`once_cell`，用于 sound `&'static Waker`实例](https://github.com/rust-lang/futures-rs/pull/2095)
- [cargo：避免 rustc output 的大量缓冲](https://github.com/rust-lang/cargo/pull/7838)
- [cargo：clippy 整合的更改](https://github.com/rust-lang/cargo/pull/7533)
- [cargo：为 git 子模块，添加“正在更新”状态](https://github.com/rust-lang/cargo/pull/7989)
- [docs.rs：允许箱子选择，建立单个目标](https://github.com/rust-lang/docs.rs/pull/632)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [允许取得 &mut OsStr](https://github.com/rust-lang/rust/pull/70048)。
- \[处置：合并] [`is_x86_feature_detected!("avx512f")` 构建失败 on beta and nightly](https://github.com/rust-lang/rust/issues/68905)。
- \[处置：合并] [`impl From<[T; N]> for Vec<T>`](https://github.com/rust-lang/rust/pull/68692).
- \[处置：合并] [修改 Rc/Arc::from_raw() 关注 unsafety](https://github.com/rust-lang/rust/pull/68099).

## 新的 RFC

- [按 return 分配](https://github.com/rust-lang/rfcs/pull/2884).

# 本周引用句

> 我想出了一个聪明的 qotw(本周引用句) 必杀，贴在那提醒我实际写下来，然，正当写贴文时，(我)忘记了，是真的...呜呜

> 译者：然，你还是上榜了。

– [Christopher Durham confessing to rust-users](https://users.rust-lang.org/t/the-confessional-thread-parts-of-rust-that-i-still-dont-get-after-all-this-time/39022/14)

Thanks to [Jules Kerssemakers](https://users.rust-lang.org/t/twir-quote-of-the-week/328/835) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/flb5tn/this_week_in_rust_330/).</small>
