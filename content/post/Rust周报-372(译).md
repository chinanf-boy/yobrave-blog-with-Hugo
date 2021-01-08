---
title: "Rust周报 372(译)"
date: 2021-01-09T01:04:14+08:00
tags: ["week"]
description: "螃蟹-Rust周报-372"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-01-06
- [原文：372 期](https://this-week-in-rust.org/blog/2021/01/06/this-week-in-rust-372/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Announcing Rust 1.49.0](https://blog.rust-lang.org/2020/12/31/Rust-1.49.0.html)
- [mdBook security advisory](https://blog.rust-lang.org/2021/01/04/mdbook-security-advisory.html)

### Newsletters

- [RiB Newsletter #19 - Rust and smart contracts](https://www.reddit.com/r/rust/comments/ks5ivd/rib_newsletter_19_rust_and_smart_contracts/)

### Project/Tooling Updates

- [Rust Analyzer Changelog #58](https://rust-analyzer.github.io/thisweek/2021/01/04/changelog-58.html)
- [Rust Search Extension Changelog v1.1](https://rust.extension.sh/changelog/#v1-1-2021-01-07)
- [Rust Design Patterns 成书啦](https://www.reddit.com/r/rust/comments/kowtqn/rust_design_patterns_now_also_as_a_book/)
- [Pijul - How to survive?](https://pijul.org/posts/2021-01-05-how-to-survive/)
- [RustFFT 5.0 has been released!](https://users.rust-lang.org/t/rustfft-5-0-has-been-released/53709)
- [napi 1.0 released](https://napi.rs)
- [Insta 有了一个新的网站和文档](https://insta.rs/) 和一个 [Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=mitsuhiko.insta)
- [Isahc 1.0 和回顾](https://stephencoakley.com/2020/12/29/isahc-1.0-and-retrospective)
- [slotmap 1.0 has been released! Copy 限制移除, no_std 支持 and more](https://www.reddit.com/r/rust/comments/kq6lt2/slotmap_10_has_been_released_copy_restriction/)
- [libbpf-rs: eBPF for the Rust ecosystem](https://dxuuu.xyz/libbpf-rs.html)

### Observations/Thoughts

- [开发一个数据库上的 反射 (2020 edition)](<https://alex-dukhno.github.io/2020-12-31-Reflecting-on-developing-a-database-(2020-edition)>)
- [bore(1) + nonymous: 课程编写一个 DNS query tool 和 `#![no_std]` DNS library](https://www.azabani.com/2021/01/03/nonymous-bore.html)
- [探索 RustFFT's SIMD Architecture](https://users.rust-lang.org/t/exploring-rustffts-simd-architecture/53780)
- [了解 Yew 第一部分](https://dev.to/rusty_sys_dev/understanding-yew-part-1-3cfn)
- [将 options/results 塞进 iterators](https://dev.to/elshize/transposing-options-results-with-iterators-aj3)
- [Dark side of POSIX APIs](https://vorner.github.io/2021/01/03/dark-side-of-posix-apis.html)
- [Redesigning coca's Storage Abstraction](https://gist.github.com/teryror/7b9a23fd0cd8dcfbcb6ebd34ee2639f8)
- [Generic associated types encode higher-order functions on types](https://willcrichton.net/notes/gats-are-hofs/)
- [Rust's SemVer Snares: Sizedness and Size（尺寸很重要）](https://jack.wrenn.fyi/blog/semver-snares-size/)
- [Why using WebAssembly and Rust together improves Node.js performance](https://developer.ibm.com/articles/why-webassembly-and-rust-together-improve-nodejs-performance/)

### Rust Walkthroughs

- [Building a runtime reflection system for Rust 🦀️ (Part 3)](https://www.osohq.com/post/runtime-reflection-pt-3)
- [Writing a Kubernetes CRD（自定义资源定义） Controller in Rust](http://technosophos.com/2019/08/07/writing-a-kubernetes-controller-in-rust.html)
- [Adding FFI Support in x7](https://dpbriggs.ca/blog/Adding-FFI-Support-In-x7)
- [递归的 Iterators in Rust](https://fasterthanli.me/articles/recursive-iterators-rust)
- [Writing a Prometheus MPD Exporter（监控模型）](https://beyermatthias.de/blog/2021/01/03/writing-a-prometheus-mpd-exporter/)
- [Rust Programming Language Tutorial - How to Build a To-Do List App](https://www.freecodecamp.org/news/how-to-build-a-to-do-app-with-rust/)
- [Diving into Rust with a CLI](https://dev.to/kbknapp/diving-into-rust-with-a-cli-4gap)
- [Creating a GUI for a Rust application](https://dev.to/henrybarreto/creating-a-gui-for-a-rust-application-2h1g)
- [Zero to Production #6.5: An Introduction To Property-Based Testing In Rust](https://www.lpalmieri.com/posts/an-introduction-to-property-based-testing-in-rust/)
- [Holiday Hacking - 监测我的心率 while playing Call of Duty](https://jcdav.is/2021/01/04/Holiday-Hacking-COD-HR/)
- [Introducing Rustybot (part 1 of n)](https://objectdisoriented.evokewonder.com/posts/introducing-rustybot-part-1/)
- [Introducing Rustybot (part 2 of n)](https://objectdisoriented.evokewonder.com/posts/introducing-rustybot-part-2/)
- [Extracting Files From an Archive Format I Understand Way Too Much](https://jam1.re/blog/extracting-files-from-an-archive-format-i-understand-way-too-much)
- \[series] [ebpf networking in rust](https://dev.to/kbknapp/series/10570>)
- \[video] [fltk rust: use fluid (rad tool) with rust](https://youtu.be/k_P0wG3-dNk>)

### Miscellaneous

- [Rust 1.49.0 Released With 64-bit ARM Linux Support Rated Tier-1](https://www.phoronix.com/scan.php?page=news_item&px=Rust-1.49-Released)
- [Rust will drop official support for Windows XP](https://www.reddit.com/r/rust/comments/knpvv9/rust_will_drop_official_support_for_windows_xp/)
- [Rust is the second most used language for Advent of Code, after Python](https://www.reddit.com/r/rust/comments/knyoej/rust_is_the_second_most_used_language_for_advent/)
- [Rust grew 94% on O'Reilly online learning this year](https://www.reddit.com/r/rust/comments/kp1piy/rust_grew_94_on_oreilly_online_learning_this_year/)
- [Rust is now overall faster than C in benchmarks](https://www.reddit.com/r/rust/comments/kpqmrh/rust_is_now_overall_faster_than_c_in_benchmarks/)

# Crate of the Week

这周的箱子是[nom-supreme](https://crates.io/crates/nom-supreme)，用于 nom 解析器的工具箱，特别是用于出色的错误处理解析。

谢谢[Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/864)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [rust-unofficial/patterns has a few good first issues](https://github.com/rust-unofficial/patterns/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

322 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-12-28..2021-01-04

- [add edition 2021](https://github.com/rust-lang/rust/pull/79576)
- [sync `rustc_codegen_cranelift`](https://github.com/rust-lang/rust/pull/80408)
- [diag: 打印 enum variant 而不是 enum type](https://github.com/rust-lang/rust/pull/80613)
- [建议重命名或转义的修复，non-snake-case identifiers 与 keywords 起冲突](https://github.com/rust-lang/rust/pull/80592)
- [支持 const parents 模式 in `type_of`](https://github.com/rust-lang/rust/pull/80551)
- [parse const generics defaults](https://github.com/rust-lang/rust/pull/80547)
- [miri: make size/align_of_val work for dangling raw ptrs](https://github.com/rust-lang/rust/pull/80491)
- [panic implementation 加层类型接口](https://github.com/rust-lang/rust/pull/80260)
- [移除所有 `doc_comment!{}` hacks by using `#[doc = expr]` where needed](https://github.com/rust-lang/rust/pull/79150)
- [make `copy`(`_nonoverlapping`) const](https://github.com/rust-lang/rust/pull/79684)
- [add `Iterator::intersperse`](https://github.com/rust-lang/rust/pull/79479)
- [add fallible `Box`, `Arc`, and `Rc` allocator APIs](https://github.com/rust-lang/rust/pull/80310)
- [do not create dangling `&T` in `Weak<T>::drop`](https://github.com/rust-lang/rust/pull/80488)
- [de-stabilize unsized raw ptr methods for `Weak`](https://github.com/rust-lang/rust/pull/80422)

## Rust Compiler Performance Triage

- [2020-01-05](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-05.md):
  0 Regressions, 2 Improvements, 2 Mixed
  比较安静的一周，其中有个大意外，来自 rustc 对磁盘缓存的 serializes
  and deserializes 的方式，获得了 `ctfe`
  (const function) 压力测试的基准。

分类由@rylev 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-05.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [Stabilize split_inclusive](https://github.com/rust-lang/rust/pull/77858)
- [Tracking issue for stable SIMD in Rust](https://github.com/rust-lang/rust/issues/48556)

## New RFCs

- [弃用 the authors field](https://github.com/rust-lang/rfcs/pull/3052)

# Quote of the Week

> “能工作”的代码，你要考虑这样的 UB 情况：您掷硬币 1 次，硬币正面朝上，您得出结论，它永远不会朝上。

– @mirashii on the community discord

Thanks to [Michael Bryan](https://users.rust-lang.org/t/twir-quote-of-the-week/328/981) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/k5nsab/this_week_in_rust_367/)</small>
