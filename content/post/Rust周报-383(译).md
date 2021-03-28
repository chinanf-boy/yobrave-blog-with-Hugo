---
title: "Rust周报 383(译)"
date: 2021-03-28T10:45:47+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-380"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-03-24
- [原文：383 期](https://this-week-in-rust.org/blog/2021/03/24/this-week-in-rust-383/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Building a shared vision for Async Rust](https://blog.rust-lang.org/2021/03/18/async-vision-doc.html)
- \[Inside] [1.51.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/03/23/1.51.0-prerelease.html)
- \[Foundation] [introducing bobby holley](https://foundation.rust-lang.org/posts/2021-03-18-introducing-bobby-holley/)
- \[Foundation] [introducing tyler mandry](https://foundation.rust-lang.org/posts/2021-03-18-introducing-tyler-mandry/)

### Newsletters

### Project/Tooling Updates

- [rust-analyzer Changelog #69](https://rust-analyzer.github.io/thisweek/2021/03/22/changelog-69.html)

### Observations/Thoughts

- [Rust's 可持续性的最大威胁](https://kerkour.com/blog/the-biggest-threat-to-rust-sustainability/)
- [Safe Systems Programming in Rust](https://cacm.acm.org/magazines/2021/4/251364-safe-systems-programming-in-rust/fulltext)
- [The GPIO war（对抗借用检查者）: macro bunkers for typestate explosions](https://www.ecorax.net/macro-bunker-1/)
- [A look back at asynchronous Rust](https://tomaka.medium.com/a-look-back-at-asynchronous-rust-d54d63934a1c)
- [Rust as an App Language](https://www.ikiapps.com/programming/2019/07/26/is-rust-good-for-apps)
- [How often does Rust change?](https://steveklabnik.com/writing/how-often-does-rust-change)
- [Serving a single file over HTTP with Rust and Go](https://vadosware.io/post/serving-a-single-file-over-http-with-rust-and-go/)
- [Typestate Pattern 案例（通过将枚举的每个字段类型，分别实现泛型函数。而其中每个枚举类型返回下一个枚举类型的泛型函数，以完成泛型函数带有不同枚举字段的链式调用。） - The Typestate Pattern itself](https://www.novatec-gmbh.de/en/blog/the-case-for-the-typestate-pattern-the-typestate-pattern-itself/)
- \[ZH] [rust in embedded world](https://zhuanlan.zhihu.com/p/352945545)
- \[video] [cheaply writing a fast interpreter - neil mitchell](https://youtu.be/V8dnIw3amLA)

### Rust Walkthroughs

- [Introduction to Apache Arrow with Rust](https://bit.ly/apache-arrow-with-rust)
- [如何执行 shellcodes from memory in Rust](https://kerkour.com/blog/rust-execute-from-memory/)
- [Beginner's Guide to Rust Pattern Matching](https://doma-dev.medium.com/pattern-matching-in-rust-and-other-imperative-languages-7cf1c6abf4a1)
- [Writing a PostgreSQL Pretty Printer in Rust: Part 1.5](https://blog.urth.org/2021/03/21/writing-a-postgres-sql-pretty-printer-in-rust-part-1-5/)
- [Calling .NET APIs from Rust](https://ericsink.com/entries/lousygrep.html)
- [The magical applications of Zero-Sized Types in Rust](https://www.hardmo.de/article/2021-03-14-zst-proof-types.md)
- [Rust and Rocket - Zero to Deploy](https://dev.to/alexmercedcoder/rust-rocket-zero-to-deploy-578o)
- [Learning to Fly: Let's simulate evolution in Rust! (pt 3)](https://pwy.io/en/posts/learning-to-fly-pt3/)
- [Building an OpenStreetMap app in Rust, Part VI](https://blogg.bekk.no/building-an-openstreetmap-app-in-rust-part-vi-8cfc8c3f7798)
- [Tutorial: Writing a tiny Entity Component System in Rust](https://ianjk.com/ecs-in-rust/)
- [Implementing RAII guards in Rust](https://aloso.github.io/2021/03/18/raii-guards.html)
- \[JP] [[tech] Actix web で HttpOnly な Cookie を設定する 🍪](https://dev.to/nikaera/tech-actix-web-httponly-cookie-182)
- \[video] [the four-part "overview of the rust programming language" for beginners is now complete](https://www.youtube.com/watch?v=gesNaLkUJeA&list=PLP2yfE2-FXdQmXLvrQ5QN64enbF_KCYQW)

### Papers and Research Projects

_本周没有论文或研究项目_

### Miscellaneous

- [使用 Bastion & Kafka 进行流传输 - near consumer native correlation](https://vertexclique.com/streaming-with-bastion-and-kafka/)
- [Performance comparison: counting words in Python, Go, C++, C, AWK, Forth, and Rust](https://benhoyt.com/writings/count-words/)
- [Linus Torvalds on where Rust will fit into Linux](https://www.zdnet.com/article/linus-torvalds-on-where-rust-will-fit-into-linux/)
- [Rust: 将 LLVM source-base code coverage 与 GitLab 集合](https://www.collabora.com/news-and-blog/blog/2021/03/24/rust-integrating-llvm-source-base-code-coverage-with-gitlab/)

# Crate of the Week

这周的箱子是[egg](https://egraphs-good.github.io)，这是一个使用电子图，来提供一种新的方式来构建程序优化器和合成器的项目。

谢谢[Daniel Nugent](https://users.rust-lang.org/t/crate-of-the-week/2704/891)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [dotenv-linter has many good first issues](https://github.com/dotenv-linter/dotenv-linter/issues/390)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 389 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-03-15..2021-03-22

- [enable mutable noalias for LLVM >= 12](https://github.com/rust-lang/rust/pull/82834) (Fingers crossed)
- [用 `register_tool`，允许 registering tool lints](https://github.com/rust-lang/rust/pull/83216)
- [more precise spans for HIR paths](https://github.com/rust-lang/rust/pull/83092)
- [`const_evaluatable_checked`: stop eagerly erroring in `is_const_evaluatable`](https://github.com/rust-lang/rust/pull/82707)
- [miri: 改善 错误信息 of calling unsupported non-"C"/"system"-ABI foreign function](https://github.com/rust-lang/miri/pull/1745)
- [让 source-based code coverage 与 MIR inlining 兼容](https://github.com/rust-lang/rust/pull/83080)
- [stabilize `or_patterns` (RFC 2535, 2530, 2175)](https://github.com/rust-lang/rust/pull/79278)
- [stabilize `feature(osstring_ascii)`](https://github.com/rust-lang/rust/pull/80193)
- [stabilize `slice::IterMut::as_slice`](https://github.com/rust-lang/rust/pull/82771)
- [stabilize `assoc_char_funcs` and `assoc_char_consts`](https://github.com/rust-lang/rust/pull/82919)
- [implement `String::remove_matches`](https://github.com/rust-lang/rust/pull/71780)
- [add a check for ASCII characters in `to_upper` and `to_lower`](https://github.com/rust-lang/rust/pull/81358)
- [fix invalid slice access in `String::retain`](https://github.com/rust-lang/rust/pull/82554)
- [构成 copy related functions](https://github.com/rust-lang/rust/pull/83091)
- [add `as_str` method for split whitespace str iterators](https://github.com/rust-lang/rust/pull/82570)
- [`Vec::dedup_by` optimization](https://github.com/rust-lang/rust/pull/82191)
- [修复 溢出的长度 in `Vec<ZST>` to `VecDeque`](https://github.com/rust-lang/rust/pull/83244)
- [implement `TrustedLen` and `TrustedRandomAccess` for `Range<integer>`, `array::IntoIter`, `VecDequeue`'s iterators](https://github.com/rust-lang/rust/pull/81607)
- [cargo: allow cargo update to operate with the `--offline` flag](https://github.com/rust-lang/cargo/pull/9279)
- [cargo: 重构 feature handling, and improve error messages](https://github.com/rust-lang/cargo/pull/9290)
- [rustdoc: reduce GC work during search](https://github.com/rust-lang/rust/pull/83077)
- [rustfmt: fix issue 'double spaces between struct field prefix and identity when using long attributes](https://github.com/rust-lang/rustfmt/pull/4747)

## Rust Compiler Performance Triage

整个星期忙碌但表现不错。尽管存在一些性能下降，但它们大多都很小，而性能提升却不胜枚举。也许最有趣的消息不是提高编译器性能，而是在 LLVM 级别引入 no-alias 优化。在某些情况下，这会稍微影响优化的构建时间性能，但应使某些工作负载，在编译后能更快地运行。

分流由 **@rylev**。修订范围：[f24ce9b0..9b6339e4](https://perf.rust-lang.org/?start=f24ce9b0140d9be5a336954e878d0c1522966bb8&end=9b6339e4b9747d473270baa42e77e1d2fff39bf4&absolute=false&stat=instructions%3Au)

2 个退步，5 个改进，3 个混合

其中 1 个汇总

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [Adds must_not_suspend_lint RFC](https://github.com/rust-lang/rfcs/pull/3014)
- [adds async stream rfc](https://github.com/rust-lang/rfcs/pull/2996)
- [Make the authors field optional](https://github.com/rust-lang/rfcs/pull/3052)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: Declarative macro metavariable expressions](https://github.com/rust-lang/rfcs/pull/3086)
- [RFC: Hidden trait implementations](https://github.com/rust-lang/rfcs/pull/2529)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize bufreader_seek_relative](https://github.com/rust-lang/rust/pull/82992)
- \[disposition: merge] [Add IEEE 754 compliant fmt/parse of -0, infinity, NaN](https://github.com/rust-lang/rust/pull/78618)
- \[disposition: merge] [Implement indexing slices with pairs of `core::ops::Bound<usize>`](https://github.com/rust-lang/rust/pull/77704)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 这里，我只是说，
> 我已经对
> feature 分支进行 变基（rebase）
> 与 master 分支做对抗
>
> 还有
> 你可能已经
> 对那些这个的，做修复工作
>
> 原谅我，
> 差异是如此微不足道
> 这么小小... "."

– [Jubilee on rust-lang zulip](https://rust-lang.zulipchat.com/#narrow/stream/257879-project-portable-simd/topic/2021-03-08.20Meeting/near/231384678)

Thanks to [Josh Triplett](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1020) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/mcng4u/this_week_in_rust_383/)</small>
