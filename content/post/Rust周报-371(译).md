---
title: "Rust周报 371(译)"
date: 2021-01-02T13:08:01+08:00
tags: ["week"]
description: "螃蟹-Rust周报-371"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-12-30
- [原文：371 期](https://this-week-in-rust.org/blog/2020/12/30/this-week-in-rust-371/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- \[Inside] [欢迎 cjgillot and nadrieril to compiler-contributors](https://blog.rust-lang.org/inside-rust/2020/12/28/cjgillot-and-nadrieril-for-compiler-contributors.html)
- \[Inside] [1.49.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2020/12/29/1.49.0-prerelease.html)

### Project/Tooling Updates

- [IntelliJ Rust Changelog #138](https://intellij-rust.github.io/2020/12/28/changelog-138.html)
- [Rust Analyzer Changelog #57](https://rust-analyzer.github.io/thisweek/2020/12/28/changelog-57.html)
- [Redox OS 0.6.0](https://www.redox-os.org/news/release-0.6.0/)

### Observations/Thoughts

- [Call Site Dependency 注射情况](https://matklad.github.io/2020/12/28/csdi.html)
- [瞧瞧 tokio 1.0 API Changes](https://leshow.github.io/post/udp_tokio_1_0/)
- [Memory-Safety Challenge Considered Solved? An In-Depth Study with All Rust CVEs（通用漏洞披露）](https://arxiv.org/abs/2003.03296)
- [45,000+ lines of Rust code later: An update on the 记录 & 调试工具 (rd)](https://github.com/sidkshatriya/me/blob/master/003-Rd-makes-significant-advances.md)
- [Cloning A Reference and Method Call Syntax in Rust](https://www.fpcomplete.com/blog/cloning-reference-method-calls/)
- [可以运行的 PNGs](https://djharper.dev/post/2020/12/26/executable-pngs/)
- [Why mongodump is fast](https://windsoilder.github.io/why_mongodump_is_fast.html)

### Rust Walkthroughs

- [Concurrency in modern programming languages: Rust](https://dev.to/deepu105/concurrency-in-modern-programming-languages-rust-19co)
- [Building distributed GraphQL backend using Rust and Apollo Federation](https://dev.to/rkudryashov/building-distributed-graphql-backend-using-rust-and-apollo-federation-50bm)
- [提高代码质量 using `matches` macro! in Rust](https://blog.knoldus.com/enhance-code-quality-using-matches-macro-in-rust/)
- [ClickOnce for Rust Apps](https://taggartsoftware.medium.com/clickonce-for-rust-apps-f96873feb8f1)
- [Closures in Rust](https://zhauniarovich.com/post/2020/2020-12-closures-in-rust/)
- [通过 process-based 测试隔离，不要让错误分散到整个套件](https://blog.cyplo.dev/posts/2020/12/fail-and-fork/)
- [三角形 From Scratch](https://rust-tutorials.github.io/triangle-from-scratch/opening_a_window/win32.html)
- \[video] \[series] [(Live Coding) Advent of Code 2020 in Rust](https://youtube.com/playlist?list=PLoSY6azqHO7BpQo8jWKi4cFIobJo-TCzU)

### Miscellaneous

- [Redox OS 0.6 Released With Many Fixes, Rewritten Kernel Memory Manager](https://www.phoronix.com/scan.php?page=news_item&px=Redox-OS-0.6-Released)
- [The more things change...](https://smallcultfollowing.com/babysteps/blog/2020/12/30/the-more-things-change/)
- [Min const generics 的稳定版本已经合并到 master! It will reach stable on March 25, 2021 as part of Rust 1.51](https://www.reddit.com/r/rust/comments/kl1e24/min_const_generics_stabilization_has_been_merged/)

# Crate of the Week

这周的箱子是[autograd](https://github.com/raskr/rust-autograd)，是用于机器学习应用程序的 differentiable operations and tensors 的库。

谢谢[Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/864)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [withoutboats/heck - kebab case 并没有将 numbers 当成单独的 word?](https://github.com/withoutboats/heck/issues/18)
- [jplatte/js_int has several good first issues](https://github.com/jplatte/js_int/issues?q=is:issue+is:open+label:%22good+first+issue%22)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 275 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-12-21..2020-12-28

- [stabilize `min_const_generics`](https://github.com/rust-lang/rust/pull/79135) (Huzzah!)
- [利用 PGO for rustc linux dist builds](https://github.com/rust-lang/rust/pull/80262)
- [建议 fn ptr 而不是 fn item ，还有建议使用 `Fn` trait bounds 而不是 the unique closure type](https://github.com/rust-lang/rust/pull/80284)
- [实现一个编译器诊断 for move async mistake](https://github.com/rust-lang/rust/pull/80160)
- [根据 code block edition modifiers，正确高亮 特定-edition 关键字 in code blocks,](https://github.com/rust-lang/rust/pull/80226)
- [prevent caching normalization results with a cycle](https://github.com/rust-lang/rust/pull/80246)
- [fix ICE when lookup method in trait for type that have bound vars](https://github.com/rust-lang/rust/pull/80170)
- [remove `DefPath` from `Visibility` 和 请求才计算](https://github.com/rust-lang/rust/pull/80099)
- [\`rustc_query_system : reduce dependency graph memory usage](https://github.com/rust-lang/rust/pull/79589)
- [add `impl Div<NonZeroU'*`> for u\`\* which cannot panic](https://github.com/rust-lang/rust/pull/79134)
- [弃用 原子型 `compare_and_swap` 方法](https://github.com/rust-lang/rust/pull/79261)
- [stabilize `core::slice::fill`](https://github.com/rust-lang/rust/pull/79213)
- [stabilize `deque_range`](https://github.com/rust-lang/rust/pull/79022)
- [use `clone_from` from `hashbrown::`{`HashMap`, `HashSet`}](https://github.com/rust-lang/rust/pull/80400)
- [futures: perf: pack the state and future of unfolds in the same memory](https://github.com/rust-lang/futures-rs/pull/2283)
- [cargo: stabilize `RUSTC_WORKSPACE_WRAPPER`](https://github.com/rust-lang/cargo/pull/8976)
- [rustdoc: stabilise `--default-theme` command line option](https://github.com/rust-lang/rust/pull/79642)

## Rust Compiler Performance Triage

- [2020-12-24](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-24.md):
  3 个退步, 5 个进步
  本周大事件是，关于 rustc (on x86_64-unknown-linux-gnu) PGO 的落地进程。我们期待其他平台能跟随我们的脚步，但需要更详尽的调查报告, 尤其是跨编译平台。我们同时期望 LLVM PGO 的加入.

分类由 @simulacrum 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-24.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [Stabilize slice::strip_prefix and slice::strip_suffix](https://github.com/rust-lang/rust/pull/77853)
- [Tracking issue for stable SIMD in Rust](https://github.com/rust-lang/rust/issues/48556)

## New RFCs

- [New trait: core::convert::IntoUnderlying](https://github.com/rust-lang/rfcs/pull/3046)
- [#\[target_feature(..)\] In Trait Methods](https://github.com/rust-lang/rfcs/pull/3042)

# Quote of the Week

> 这是 Rust 设计中的常见主题：为了减少代码壮大时的漏洞，只允许您使用作者故意声明的功能。

– [2e71828 on rust-users](https://users.rust-lang.org/t/why-explicit-const-fn-token-needed/53006/2)

Thanks to [Kornel](https://users.rust-lang.org/t/twir-quote-of-the-week/328/980) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/knhni9/this_week_in_rust_371/)</small>
