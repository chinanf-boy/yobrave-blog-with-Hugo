---
title: "Rust周报 384(译)"
date: 2021-04-01T22:22:51+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-384"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-03-31
- [原文：384 期](https://this-week-in-rust.org/blog/2021/03/31/this-week-in-rust-384/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- [Announcing Rust 1.51.0](https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html)
- \[Foundation] [introducing mark rousskov](https://foundation.rust-lang.org/posts/2021-03-25-introducing-mark-rousskov/)
- \[Foundation] [introducing nell shamrell-harrington](https://foundation.rust-lang.org/posts/2021-03-25-introducing-nell-shamrell-harrington/)

### Project/Tooling Updates

- [rust-analyzer changelog #70](https://rust-analyzer.github.io/thisweek/2021/03/29/changelog-70.html)
- [IntelliJ Rust Changelog #144](https://intellij-rust.github.io/2021/03/29/changelog-144.html)
- [Knurling-rs Financial Update and Call for Funding](https://ferrous-systems.com/blog/knurling-financial-update/)
- [Ockam | End-to-end encrypted messaging and mutual authentication between distributed applications](https://github.com/ockam-network/ockam)
- [Announcing the Deno Company](https://deno.com/blog/the-deno-company)

### Observations/Thoughts

- [Using Rust 极致腐蚀 Python run-times](https://www.vortexa.com/insight/using-rust-to-corrode-insane-python-run-times)
- [The current state of Rust web frameworks](https://blog.logrocket.com/the-current-state-of-rust-web-frameworks/)
- [GhostCell: Separating Permissions from Data in Rust](http://plv.mpi-sws.org/rustbelt/ghostcell/)
- [Using const generics in slipstream](https://vorner.github.io/2021/03/28/const-generic-slipstreem.html)
- [Rust iterators tips and tricks](https://robinmoussu.gitlab.io/blog/post/2021-03-25_rust_iterators_tips_and_tricks/)

### Rust Walkthroughs

- [Pin and suffering](https://fasterthanli.me/articles/pin-and-suffering)
- [将 Rust 嵌入进 Zephyr Firmware using C-bindgen](https://www.jaredwolff.com/embedding-rust-into-zephyr-using-cbindgen/)
- [Parser combinators in Rust](https://doma.dev/blog/parsing-stuff-in-rust/)
- [Grids in Rust, part 2: const generics](https://blog.adamchalmers.com/grids-2/)
- [Ergonomic error handling with Rust](https://dev.to/senyeezus/ergonomic-error-handling-with-rust-13bj)
- [Implementing SHA2 (256/512) algorithm with Rust const generics](https://dev.to/dandyvica/implementing-sha2-256-512-algorithm-with-rust-const-generics-5ap)
- [使用 GNU 调试器分析 Rust 中的内存分配](https://dev.to/ignaciojvig/analisando-alocacoes-de-memoria-em-rust-utilizando-gnu-debugger-34kb)
- [Testing an embedded application](https://ferrous-systems.com/blog/test-embedded-app/)
- [Using Const Generics To Model An Electronics Graph](https://mkhan45.github.io/2021/03/28/Using-const-generics-to-model-an-electronics-graph.html)
- [Rust's Module System Explained](https://aloso.github.io/2021/03/28/module-system.html)
- \[series] [working with the trust-dns-resolver crate](https://dev.to/basman/series/11934)

### Papers and Research Projects

- \[Video] [safer rust: program verification with creusot](https://www.youtube.com/watch?v=BPt987BRdDw)

### Miscellaneous

- [Linus Torvalds weighs in on Rust language in the Linux kernel](https://arstechnica.com/gadgets/2021/03/linus-torvalds-weighs-in-on-rust-language-in-the-linux-kernel/)
- [Ownership Concept Diagram](https://www.reddit.com/r/rust/comments/mgh9n9/ownership_concept_diagram/)

# Crate of the Week

这周的箱子是[tide-acme](https://github.com/http-rs/tide-acme)，一个使用“Let's Encrypt for Tide”，自动 HTTPS 认证的箱子。

谢谢[Josh Triplett](https://users.rust-lang.org/t/crate-of-the-week/2704/894)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [AWS Rust lambdas and Bioinformatics](https://umccr.org/blog/aws-bioinformatics-rust/)
- [darpi-rs/darpi is looking for users and contributors](https://github.com/darpi-rs/darpi)
- [RoaringBitmap/roaring-rs seeks a review of this Pull Request](https://github.com/RoaringBitmap/roaring-rs/pull/92)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 327 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-03-22..2021-03-29

- [coverage bug fixes and optimization support](https://github.com/rust-lang/rust/pull/83307)
- [禁止 custom inner attributes in expressions and statements](https://github.com/rust-lang/rust/pull/83488)
- [`GenericParam` does not need to be a HIR owner](https://github.com/rust-lang/rust/pull/83424)
- [remove assignments to ZST places，而不是 marking ZST return place as unused](https://github.com/rust-lang/rust/pull/83177)
- [run analyses before thir-tree dumps](https://github.com/rust-lang/rust/pull/83050)
- [import small cold functions](https://github.com/rust-lang/rust/pull/82980)
- [implement `feature(const_generics_defaults)`](https://github.com/rust-lang/rust/pull/75384)
- [稳定化：`debug_non_exhaustive`](https://github.com/rust-lang/rust/pull/83041)
- [简化：encoder and decoder](https://github.com/rust-lang/rust/pull/83273)
- [remove (lots of) dead code](https://github.com/rust-lang/rust/pull/83185)
- [use `TrustedRandomAccess` for in-place iterators where possible](https://github.com/rust-lang/rust/pull/79846)
- [instruct LLVM that `binary_search` returns a valid index](https://github.com/rust-lang/rust/pull/81354)
- [make `NonNull::as_ref` (and friends) return refs with unbound lifetimes](https://github.com/rust-lang/rust/pull/80771)
- [add function `core::iter::zip`](https://github.com/rust-lang/rust/pull/82917)
- [恢复 reverting of stabilizing `integer::BITS`](https://github.com/rust-lang/rust/pull/82565)
- [generalize and inline `slice::fill` specializations](https://github.com/rust-lang/rust/pull/83245)
- [add `Result::into_err` where the Ok variant is the never type](https://github.com/rust-lang/rust/pull/83421)
- [remove `Option::`{`unwrap_none`, `expect_none`}](https://github.com/rust-lang/rust/pull/83349)
- [futures: add `AsyncSeekExt::stream_position`](https://github.com/rust-lang/futures-rs/pull/2380)
- [cargo: default macOS targets to unpacked debuginfo](https://github.com/rust-lang/cargo/pull/9298)
- [rustdoc: sidebar trait items 顺序](https://github.com/rust-lang/rust/pull/83051)
- [docs.rs: stop displaying and serving authorship information](https://github.com/rust-lang/docs.rs/pull/1322)

## Rust Compiler Performance Triage

整个星期忙碌但表现不错。尽管存在一些性能下降，但它们大多很小，而性能提升却不胜枚举。也许最有趣的消息不是提高编译器性能，而是在 LLVM 级别引入 no-alias 优化。在某些情况下，这会稍微影响优化的构建时间性能，但应使某些工作负载在编译后，能更快地运行。

分流由 **@rylev**。修订范围：[f24ce9b0..9b6339e4](https://perf.rust-lang.org/?start=f24ce9b0140d9be5a336954e878d0c1522966bb8&end=9b6339e4b9747d473270baa42e77e1d2fff39bf4&absolute=false&stat=instructions%3Au)

2 个退步，5 个改进，3 个混合

其中 1 个汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Declarative macro metavariable expressions](https://github.com/rust-lang/rfcs/pull/3086)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Raw Keywords](https://github.com/rust-lang/rfcs/pull/3098)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Add strong_count mutation methods to Rc](https://github.com/rust-lang/rust/pull/83476)
- \[disposition: merge] [Turn old edition lint (anonymous-parameters) into warn-by-default on 2015](https://github.com/rust-lang/rust/pull/82918)
- \[disposition: merge] [reduce threads spawned by ui-tests](https://github.com/rust-lang/rust/pull/81942)
- \[disposition: merge] [稳定化： `peekable_peek_mut`](https://github.com/rust-lang/rust/pull/81938)
- \[disposition: merge] [稳定化： `rustdoc::bare_urls` lint](https://github.com/rust-lang/rust/pull/81764)
- \[disposition: merge] [Adding diesel to the cargotest suite](https://github.com/rust-lang/rust/pull/81507)
- \[disposition: merge] [稳定化： `cmp_min_max_by`](https://github.com/rust-lang/rust/pull/81047)
- \[disposition: merge] [Allow qualified paths in struct construction (both expressions and patterns)](https://github.com/rust-lang/rust/pull/80080)
- \[disposition: merge] [跟踪问题：RFC 2457, "Allow non-ASCII identifiers"](https://github.com/rust-lang/rust/issues/55467)

## New RFCs

- [RFC: Add a standard trait for getting many &mut to places](https://github.com/rust-lang/rfcs/pull/3100)
- [RFC: `cargo`-`miri` integration](https://github.com/rust-lang/rfcs/pull/3099)
- [Raw Keywords](https://github.com/rust-lang/rfcs/pull/3098)
- [rustdoc URL conflict resolution](https://github.com/rust-lang/rfcs/pull/3097)

# Quote of the Week

> 尽管存在所有负面影响，但我必须说，我的确非常喜欢 Rust 所采用的 poll-based 的方法。遇到的大多数问题并不是由于错误而引起的，而是因为没有其他语言真正将这一原理推到了如此远的地步。编程语言设计首先是“艺术性”工作，而不是技术性的，并且几乎不可能预见设计选择的后果。

– [tomaka on medium](https://tomaka.medium.com/a-look-back-at-asynchronous-rust-d54d63934a1c)

Thanks to [Michael Howell](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1028) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/mhkhmw/this_week_in_rust_384/)</small>
