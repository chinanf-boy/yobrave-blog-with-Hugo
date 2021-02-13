---
title: "Rust周报 338(译)"
date: 2020-05-16T23:12:22+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-338"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-05-12
- [原文：338 期](https://this-week-in-rust.org/blog/2020/05/12/this-week-in-rust-338/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rust 1.43.1](https://blog.rust-lang.org/2020/05/07/Rust.1.43.1.html)
- [Rust 并发：single-writer 原则。](https://medium.com/@polyglot_factotum/rust-concurrency-the-single-writer-principle-applied-aada2cdc6fb0?source=friends_link&sk=cafc8dcf8babf4ec95b1b62ccde7e54b)
- [This Month in Rust OSDev（2020 年 4 月）](https://rust-osdev.com/this-month/2020-04/)
- [一个 no_std Rust 二进制文件](https://fasterthanli.me/blog/2020/a-no-std-rust-binary/)
- [io_uring 的注意事项](https://boats.gitlab.io/blog/post/io-uring/)
- [no_std async/await —— 即将稳定](https://ferrous-systems.com/blog/stable-async-on-embedded/)
- [“try fn” - Result 的不特殊性](https://dev.to/cad97/try-fn-without-special-casing-result-4m5b)
- [time_it：Rust 宏中的一个案例研究](https://notes.iveselov.info/programming/time_it-a-case-study-in-rust-macros)
- [动态样式表和 Yew](https://conradludgate.com/posts/yew-css/)
- [Rust 异步编程的实用介绍](http://jamesmcm.github.io/blog/2020/05/06/a-practical-introduction-to-async-programming-in-rust/#en)
- [FFI 中的 Rust 闭包](http://adventures.michaelfbryan.com/posts/rust-closures-in-ffi/)
- [从 Results 的迭代器中，收集(collect)许多错误(errors)](https://tarquin-the-brave.github.io/blog/posts/collecting-all-the-errors/)。
- [自动何里化 Rust 函数](https://peppe.rs/posts/auto-currying_rust_functions/)
- [Rust 使用泛型， 将 bits 转换为整数](https://dev.to/citizen_stig/converting-bits-to-integers-in-rust-using-generics-2nfg)
- [Rust Assembly 放大镜](https://www.justanotherdot.com/posts/magnifying-glasses-for-rust-assembly.html)
- [更多 Rust 和 Load Balancer 冒险](https://medium.com/@bparli/more-rust-and-load-balancer-adventures-fad07f4fb095)
- [用 Rust 移植朝鲜语词典](https://digitalnk.com/blog/2020/05/08/porting-north-korean-dictionaries-with-rust/)
- [Rust 验证工具](https://alastairreid.github.io/rust-verification-tools/)
- [系列合集- Rust 从零到生产](https://www.lpalmieri.com/posts/2020-05-10-announcement-zero-to-production-in-rust/)
- [对 Rust-Analyzer 贡献，让我学到了...](https://dev.to/bnjjj/what-i-learned-contributing-to-rust-analyzer-4c7e)
- [Rust char 和 Go rune 有什么区别？](https://www.christianfscott.com/rust-chars-vs-go-runes/)
- [Rust 编写 Wayland 合成器](https://wiki.alopex.li/WritingAWaylandCompositorInRust)
- [Rust 中的耗牛剃须条件编译（Yak shaving conditional compilation）](https://bitshifter.github.io/2020/05/07/conditional-compilation-in-rust/)
- [Oxidize 全球研讨会和 CfP 公告](https://ferrous-systems.com/blog/oxidize-global-workshop-and-cfp-announcement/)
- [在 Rust 代码中编写 Python —— 第 3 部分](https://blog.m-ou.se/writing-python-inside-rust-3/)
- [Rust FFI —— 构建 ASN1 编/解码器](https://sjames.github.io/articles/2020-04-26-rust-ffi-asn1-codec/)
- \[视频] [用 Actix 和 Juniper 构建一个简单的图形 API](https://youtu.be/7v7ERnrC4fo)
- \[视频] [Named Field Init(命名字段初始化) in c, c++20, zig, rust, & d](https://www.youtube.com/watch?v=c-NyXKbqmQc)

# 周箱

这周的箱子是[cargo-workspaces](https://github.com/pksunkara/cargo-workspaces)，用来管理您的货物工作区的 cargo 子命令。

谢谢[帕万·库玛·桑卡拉](https://users.rust-lang.org/t/crate-of-the-week/2704/768)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [s3rename：原子 renames 和异步 destructors](https://github.com/jamesmcm/s3rename/issues/16)
- [sedregex：添加对转译命令 y/ 和 tr/ 的支持](https://gitlab.com/mexus/sedregex/-/issues/4)
- [clap：使用 DisableHelpSubcommand 时，Usage 建议 help 子命令](https://github.com/clap-rs/clap/issues/1463)
- [displaydoc：添加`thiserror`属性的支持](https://github.com/yaahc/displaydoc/issues/15)
- [GitUI 正在寻找贡献者](https://github.com/extrawurst/gitui/issues)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 375 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-05-04..2020-05-11

- [在 float-to-int 转换中，定义 UB（未定义行为），以覆盖边缘](https://github.com/rust-lang/rust/pull/71269)
- [改善 Apple 平台的 bitcode 生成](https://github.com/rust-lang/rust/pull/71970)
- [不要强迫 rustc 为 LTO 构建，进行代码生成](https://github.com/rust-lang/cargo/pull/8192)
- [对 LLVM bitcode 发出 sections 时，像 Windows 一样正确处理 UEFI targets](https://github.com/rust-lang/rust/pull/71881)
- [防止深度递归代码的编译器，堆栈溢出](https://github.com/rust-lang/rust/pull/55617)
- [解决：稍微放松新的绑定歧义（binding disambiguation），修复性能退化](https://github.com/rust-lang/rust/pull/71846)
- [升级 chalk，并使用 chalk-solve/chalk-ir/chalk-rust-ir](https://github.com/rust-lang/rust/pull/69406)
- [报告无法移动提升的 MIR 中的错误](https://github.com/rust-lang/rust/pull/71587)
- [简化 `tcx.alloc_map` API](https://github.com/rust-lang/rust/pull/71508)
- [仅在类型是已知时，才建议删除最后一个表达式中的分号](https://github.com/rust-lang/rust/pull/71894)
- [在推断变量上，跳过尝试 - 运行`coerce_unsized`](https://github.com/rust-lang/rust/pull/69530)
- [统一所有快照（snapshot）类型的撤消日志（undo log）](https://github.com/rust-lang/rust/pull/69464)
- [降低在`check_match`中，`TypedArena`的创建](https://github.com/rust-lang/rust/pull/71975)
- [收缩 `LocalDecl`](https://github.com/rust-lang/rust/pull/71942)
- [添加：`remove_current_as_list`至`LinkedList`的`CursorMut`](https://github.com/rust-lang/rust/pull/71878)
- [添加：`Arc::`{`incr`，`decr`}`_strong_count`](https://github.com/rust-lang/rust/pull/70733)
- [添加 Option 以强制展开表（Force Unwind Tables）](https://github.com/rust-lang/rust/pull/69984)
- [让 `BTreeMap::new`和`BTreeSet::new` const](https://github.com/rust-lang/rust/pull/71839)
- [`Btreemap` iter 交织在一起](https://github.com/rust-lang/rust/pull/71510)
- [添加：`core::future::`{`pending`，`ready`}](https://github.com/rust-lang/rust/pull/70834)
- [futures：重构 - 以减少不安全和重复代码的数量](https://github.com/rust-lang/futures-rs/pull/2128)
- [cargo ：更新 LTO calculations 中的断言](https://github.com/rust-lang/cargo/pull/8226)
- [cargo ：尝试从 http.debug 中，删除 secrets](https://github.com/rust-lang/cargo/pull/8222)
- [cargo features：允许 activated_features_unverified 传达不存在的信息](https://github.com/rust-lang/cargo/pull/8194)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2585：FC 用于 unsafe blocks in unsafe fn](https://github.com/rust-lang/rfcs/pull/2585)
- [RFC 2904：主要变更提案](https://github.com/rust-lang/rfcs/pull/2904)

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC： Cargo 工作区信息 重复](https://github.com/rust-lang/rfcs/pull/2906)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化: saturating_abs 和 saturating_neg](https://github.com/rust-lang/rust/pull/71886)
- \[处置：合并] [调整和稳定化：AtomicN::fetch_update](https://github.com/rust-lang/rust/pull/71843)
- \[处置：合并] [impl From<Cow> for Box, Rc, and Arc](https://github.com/rust-lang/rust/pull/71447)
- \[处置：合并] [稳定化：fn-like proc macros in expression（表达式, pattern（模式 和 statement（声明 positions（等位置](https://github.com/rust-lang/rust/pull/68717)
- \[处置：合并] [跟踪问题： Weak::into_raw/from_raw & similar](https://github.com/rust-lang/rust/issues/60728)
- \[处置：克隆] [跟踪问题： non_static_type_id](https://github.com/rust-lang/rust/issues/41875)

## 新的 RFC

- [不要警告类似的 ASCII-only idents](https://github.com/rust-lang/rfcs/pull/2923)
- [RFC —— cargo 模板](https://github.com/rust-lang/rfcs/pull/2922)

# 本周引用句

> 所有权是纯概念的：在反汇编程序中，你是看不到所谓的所有权痕迹的。

– [Jay Oster on rust-users](https://users.rust-lang.org/t/what-is-the-formal-definition-of-ownership/41984/7)

Thanks to [Daniel H-M](https://users.rust-lang.org/t/twir-quote-of-the-week/328/868) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), [srikwit](https://github.com/srikwit), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/gikfuy/this_week_in_rust_338/).</small>
