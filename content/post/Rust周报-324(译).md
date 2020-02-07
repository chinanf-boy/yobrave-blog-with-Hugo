---
title: "Rust周报 324(译)"
date: 2020-02-07T13:57:05+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-324"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">


- [this-week-in-rust](<(https://this-week-in-rust.org)>)
- 日期：2020-02-04
- [原文：324 期](https://this-week-in-rust.org/blog/2020/02/04/this-week-in-rust-324/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- 🎈🎉[宣布 Rust 1.41.0](https://blog.rust-lang.org/2020/01/30/Rust-1.41.0.html)。🎉🎈
- [为什么 Discord，从 Go 切换到 Rust](https://blog.discordapp.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f)。
- [Rust 编写操作系统：2020 年 1 月更新](https://os.phil-opp.com/status-update/2020-02-01/)。
- [用 Rust 测量钢琴键的 space-time 行为](https://jitter.company/blog/2020/01/28/measuring-space-time-behaviours-of-piano-keys-with-rust/)。
- [建立自己的 executor](https://stjepang.github.io/2020/01/31/build-your-own-executor.html)。
- [针对 Raspberry Pi，在 Linux 上交叉编译 Rust](https://chacin.dev/blog/cross-compiling-rust-for-the-raspberry-pi/)。
- [2020 Rust 活动主线](https://blog.rust-lang.org/2020/01/31/conf-lineup.html)。
- [使用 Bastion 编写 AWS Lambda 函数](https://blog.bastion.rs/2020/02/01/writing-aws-lambda-functions-with-bastion.html)。
- [rust-search-extension：在浏览器的地址栏中，搜索标准文档，箱子，错误代码和属性](https://www.reddit.com/r/rust/comments/eymfxu/announcing_rustsearchextension_v07_search_std/)。
- [嵌入式工作组的新闻咨询 23](https://rust-embedded.github.io/blog/newsletter-23/)。
- [Rust Analyzer 变更日志 10](https://rust-analyzer.github.io/thisweek/2020/02/03/changelog-10.html)。
- [IntelliJ Rust 更新日志 115](https://intellij-rust.github.io/2020/02/04/changelog-115.html)。
- [Rust 区块链新闻 8：展望 2020](https://rustinblockchain.org/2020/02/05/rib-newsletter-8-looking-forward-to-2020/)。
- [宣布 async-std v1.5.0](https://github.com/async-rs/async-std/releases/tag/v1.5.0)。
- [宣布 Tide 0.6.0](https://github.com/http-rs/tide/releases/tag/v0.6.0)。

# 周箱

这周的箱子是[faux](https://github.com/nrxus/faux)，Rust 的 trait-less 模拟库。

谢谢[Vikrant](https://users.rust-lang.org/t/crate-of-the-week/2704/715)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [serde_cbor 箱子正在寻找维护者](https://github.com/pyfisch/cbor/issues/179)。
- [Diesel：寻找愿意对提交的 PR，进行一些代码审查的人](https://github.com/diesel-rs/diesel/issues/1186)。
- [time：实现一个函数，它会返回本地 UTC 偏移量](https://github.com/time-rs/time/issues/203#issuecomment-581175875)。寻找 linked gist 的代码审查。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 291 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-01-27..2020-02-03

- [使用 AddressSanitizer 检测 use-after-scope（范围外的错误）](https://github.com/rust-lang/rust/pull/68572)
- [在 Windows 上，添加对 Control Flow Guard 的支持](https://github.com/rust-lang/rust/pull/68180)
- [添加对启用 LLVM time-trace（时间追踪）功能的支持](https://github.com/rust-lang/rust/pull/68720)
- [在适当的时候，建议去定义类型的参数](https://github.com/rust-lang/rust/pull/68447)
- [不建议重复的 bounds](https://github.com/rust-lang/rust/pull/68763)
- [parser：避免重新包装 NtItem](https://github.com/rust-lang/rust/pull/68769)
- [parser：在语法上，允许`self`在所有`fn` contexts 内](https://github.com/rust-lang/rust/pull/68764)
- [check_match：提取通用逻辑](https://github.com/rust-lang/rust/pull/68571)
- [rustc_span：选择从`macro_backtrace`中，返回一个`impl Iterator`，而不是有一个`Vec`](https://github.com/rust-lang/rust/pull/68407)
- [采用`BufWriter`，用于 emitting MIR](https://github.com/rust-lang/rust/pull/68460)
- [将 opt-level 从 2 改回 3](https://github.com/rust-lang/rust/pull/67878)
- [收缩`Nonterminal`](https://github.com/rust-lang/rust/pull/67340)
- [在关联类型时，避免 exponential 行为](https://github.com/rust-lang/rust/pull/68772)
- [删除 generator witness 中的重复类型](https://github.com/rust-lang/rust/pull/68672)
- [添加一个 early-exit 到 `QueryNormalizer::fold_ty`](https://github.com/rust-lang/rust/pull/68606)
- [添加一个`raw-addr-of`变种，到`mir_raw_fat_ptr`](https://github.com/rust-lang/rust/pull/68778)
- [优化`core::ptr::align_offset`](https://github.com/rust-lang/rust/pull/68787)
- [将数字型 consts，移到关联的 consts（步骤 1）](https://github.com/rust-lang/rust/pull/68325)
- [添加`Iterator::map_while`](https://github.com/rust-lang/rust/pull/66577)
- [添加`BTreeMap::remove_entry`](https://github.com/rust-lang/rust/pull/68378)
- [稳定化 `debug_map_key_value`](https://github.com/rust-lang/rust/pull/68200)
- [稳定化 `ptr::slice_from_raw_parts`（`_mut`）](https://github.com/rust-lang/rust/pull/68234)
- [稳定化 `core::iter::once_with()`](https://github.com/rust-lang/rust/pull/68800)
- [futures：允许在没有 std 的情况下，使用 async-await 宏](https://github.com/rust-lang/futures-rs/pull/1891)
- [cargo：用 crossbeam_channel 换 std::sync::mpsc 通道](https://github.com/rust-lang/cargo/pull/7844)
- [cargo：稳定化 config-profile](https://github.com/rust-lang/cargo/pull/7823)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 这些是本周批准实施的 RFC：

_本周没有批准招标书。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

_目前没有任何问题处于最后评论期。_

## 新的 RFC

_本周没有提出新的招标书。_

# 本周引用句

> 人们对自行车车棚的颜色争论不休，因为尽管这是一个毫无意义的决定 —— 但这仍然是一个必须做出的决定。而 这个 null(空) 选择是一个非常糟糕的选择 —— 如果你不喷油漆，它就会生锈(Rust)。而且没有“默认颜色”，所以你不能只说“随便上色就好啦”——不！你必须选择一种颜色。
>
> 甚至看到有人争论油漆的**图案**？其实。图案没有比颜色重要，不像颜色 —— 它可以有一个 null 选项(就是没有图案)。存在默认值。纯色。而且，由于会有个默认项，甚至不会有人考虑使用其他东西，因为你为什么要浪费时间和金钱在一个自行车棚的图案上？
>
> 根据我个人的经验，当存在一个默认项，且默认项足够好时，没有人会讨论如何从中再"拉"出一个自行车绷。他们只在某个具体问题上，涉及到这个默认项，且是在无论什么原因，你就是不喜欢默认项，觉得不符合你的需求的时候，才会提及。当你确实有一个具体的理由，说这个默认值不符合，这时你需要’衍生/其他图案...' —— 你就会去想这个问题。因为你必须这么做(不喜欢啊，那它就不应该在我的世界里)。而如果库不支持"它" —— 您就换库啊。
>
> 因为你必须，也想这么做。

> 译者：可能是在说，当你想(这个东西是不符合)，就去做(符合自己的东西)，Just do it.

– [/u/someboddy on /r/rust](https://www.reddit.com/r/rust/comments/exbbes/argh_is_googles_opinionated_derivebased_argument/fgdxvt7)

Thanks to [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/804) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42) and [llogiq](https://github.com/llogiq)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ezqkbg/this_week_in_rust_324/).</small>
