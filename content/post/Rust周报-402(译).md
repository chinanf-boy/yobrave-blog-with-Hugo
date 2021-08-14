---
title: "Rust周报 402(译)"
date: 2021-08-06T22:49:38+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-402"
css:
  [
    "/css/pre_btn.css",
    "https://www.ecorax.net/style.css",
    "https://www.ecorax.net/color/marrow.css",
  ]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-08-04
- [原文：402 期](https://this-week-in-rust.org/blog/2021/08/04/this-week-in-rust-402/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

### Official

- [Announcing Rust 1.54.0](https://blog.rust-lang.org/2021/07/29/Rust-1.54.0.html)
- [The push for GATs stabilization](https://blog.rust-lang.org/2021/08/03/GATs-stabilization-push.html)
- \[Inside] [rust compile august steering cycle](https://blog.rust-lang.org/inside-rust/2021/07/30/compiler-team-august-steering-cycle.html)

### Project/Tooling Updates

- [IntelliJ Rust Changelog #152](https://intellij-rust.github.io/2021/08/02/changelog-152.html)
- [What's new in IntelliJ Rust](https://blog.jetbrains.com/rust/2021/08/04/what-s-new-in-intellij-rust-for-the-2021-2-release-cycle/)
- [rust-analyzer Changelog #88](https://rust-analyzer.github.io/thisweek/2021/08/02/changelog-88.html)
- [GCC Rust Monthly Report #8 July 2021](https://thephilbert.io/2021/08/02/gcc-rust-monthly-report-8-july-2021/)
- [rustc_codegen_gcc: Progress Report #2](https://blog.antoyo.xyz/rustc_codegen_gcc-progress-report-2)
- [Rust on Espressif chips](https://mabez.dev/blog/posts/esp-rust-espressif/)
- [ConnectorX: accelerate data loading from databases to dataframes](https://github.com/sfu-db/connector-x)
- [This week in SixtyFPS (a Rust GUI toolkit)](https://sixtyfps.io/thisweek/2021-08-02.html)
- [This week in Fluvio 1: the programmable streaming platform](https://www.fluvio.io/news/this-week-in-fluvio-0001/)
- [This week in Datafuse #1](https://datafuselabs.github.io/weekly/2021-08-04-datafuse-weekly/)
- [This Week In TensorBase 14](https://tensorbase.io/thisweek/2021-08-04-tw_14/)

### Observations/Thoughts

- [15k inserts/s with Rust and SQLite](https://kerkour.com/blog/high-performance-rust-with-sqlite/)
- [Deep Learning in Rust with GPU using onnxruntime-rs](https://able.bio/haixuanTao/deep-learning-in-rust-with-gpu--26c53a7f)
- [Rewriting my mobile game in Rust targeting WASM](https://itnext.io/rewriting-my-mobile-game-in-rust-targeting-wasm-1f9f82751830)
- [怎么编写 超慢的 Rust code](https://renato.athaydes.com/posts/how-to-write-slow-rust-code.html)
- [Rust: First Thoughts](https://dev.to/mapoulos/rust-first-thoughts-7l0)
- [5 Reasons Why You Should Start Using Rust for Personal Projects](https://www.bexxmodd.com/post/6/)
- [一场值得铭记的 Borrowck 战斗](https://jstrong.dev/posts/2021/borrowck-battle-to-remember/)
- \[audio] [open source security episode 282 - the security of rust: who left all this awesome in here?](https://opensourcesecurity.io/2021/08/01/episode-282-the-security-of-rust-who-left-all-this-awesome-in-here/)

### Rust Walkthroughs

- [Async Rust 打地基: A Simple Web Server](https://ibraheem.ca/writings/a-simple-web-server/)
- [Implementing Base64 from scratch with Rust](https://dev.to/tiemen/implementing-base64-from-scratch-in-rust-kb1)
- [Improvements for #\[doc\] attributes in Rust](https://blog.guillaume-gomez.fr/articles/2021-08-03+Improvements+for+%23%5Bdoc%5D+attributes+in+Rust)
- [How to deploy Rust on Heroku (with Docker)](https://kerkour.com/blog/deploy-rust-on-heroku-with-docker/)
- [Rust #7: Command-Line interfaces](https://dev.to/cthutu/rust-7-command-line-interfaces-4084)
- [Adding our own custom statement to Rust language](https://dev.to/xphoniex/adding-our-own-custom-statement-to-rust-language-30lc)
- [Core dump for Rust](https://dev.to/jcarlosv/core-dump-for-rust-10nm)
- [Zero to Production in Rust #9: Naive Newsletter Delivery](https://www.lpalmieri.com/posts/naive-newsletter-delivery/)
- [Interacting with data from FFI in Rust](https://blog.guillaume-gomez.fr/articles/2021-07-29+Interacting+with+data+from+FFI+in+Rust)
- [How I built End-to-End Encrypted Messaging in 51 lines of Rust, using the Ockam crate](https://github.com/ockam-network/ockam/tree/develop/documentation/use-cases/end-to-end-encryption-with-rust#readme)
- \[PT] [resumo: closure no rust](https://dev.to/henrybarreto/resumo-closure-no-rust-4gal)
- \[ZH] [tokio internals - 源码解读和设计分析](https://tony612.github.io/tokio-internals)

### Miscellaneous

- [Rust is the most loved language, SIX YEARS IN A ROW. StackOverflow Survey 2021 is out!](https://www.reddit.com/r/rust/comments/owll2j/rust_is_the_most_loved_language_six_years_in_a/)
- [Rust Module of the Week!](https://www.reddit.com/r/rust/comments/owtiuf/rust_module_of_the_week/)
- [University of Illinois at Urbana-Champaign Graduate (Ralf Jung) receives ACM Doctoral Dissertation Award](https://www.acm.org/media-center/2021/july/dissertation-award-2020)
- [Implementing a BLT parser by hand in Rust (vs pest and combine): OpenTally dev log](https://yingtongli.me/blog/2021/07/30/blt-parser.html)
- [Rust on RISC-V BL602: Is It Sunny?](https://lupyuen.github.io/articles/adc)
- [Rust Design FAQ for C++ Programmers](https://cppfaq.rs)
- [🦀 Role-Based Access Control (RBAC) Guide in Rust](https://docs.osohq.com/rust/guides/roles/getting-started.html)
- [betterCode Rust Conference announced (October 13)](https://rust.bettercode.eu/)

## Crate of the Week

本周的箱子是[sycamore](https://crates.io/crates/sycamore)，一个使用 WebAssembly 制作 Web 应用程序的箱子。

谢谢[Luke Chu](https://users.rust-lang.org/t/crate-of-the-week/2704/941)的自我建议。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Module of the Week

本周推出的是[Rust Module of the Week](https://motw.rs)和[std::fs Part 1](https://motw.rs/blog/2021/08/01/stdfs-part-1/)。欢迎投稿和反馈[here](https://github.com/slyons/rust-module-of-the-week).

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

- [vandenheuvel/relp - A faster implementation of Markowitz' pivot rule in LU factorization](https://github.com/vandenheuvel/relp/issues/15)
- [vandenheuvel/relp - Parsing the LP file format](https://github.com/vandenheuvel/relp/issues/30)
- [ockam-network/ockam - Make Rust Errors more idiomatic](https://github.com/ockam-network/ockam/issues/1655)
- [ockam-network/ockam - File Transfer over end-to-end encrypted secure channels](https://github.com/ockam-network/ockam/issues/1624)

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

324 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-07-26..2021-08-02

- [`#[derive(Default)]` on enums with a `#[default]` attribute](https://github.com/rust-lang/rust/pull/86735)(RFC)[#3107](https://rust-lang.github.io/rfcs/3107-derive-enum-default.html))
- [fix issue with autofix for ambiguous associated function from Rust 2021 prelude when struct is generic](https://github.com/rust-lang/rust/pull/87557)
- [add flag to configure `large_assignments` lint](https://github.com/rust-lang/rust/pull/86450)
- [make const `panic!("..")` work in Rust 2021](https://github.com/rust-lang/rust/pull/86998)
- [suggest removing unnecessary `&mut` as help message](https://github.com/rust-lang/rust/pull/87453)
- [suggest `;` on parse error where applicable](https://github.com/rust-lang/rust/pull/87436)
- [fix invalid suggestions for non-ASCII characters in byte constants](https://github.com/rust-lang/rust/pull/87659)
- [tweak opaque type mismatch error](https://github.com/rust-lang/rust/pull/87673)
- [bail on any found recursion when expanding opaque types](https://github.com/rust-lang/rust/pull/87546)
- [polonius: compute subset errors everywhere](https://github.com/rust-lang/polonius/pull/156)
- [MIR borrowck does not generate lifetime variables for `'static` lifetimes during opaque type resolution](https://github.com/rust-lang/rust/pull/87483)
- [tweak borrowing suggestion in `for` loop](https://github.com/rust-lang/rust/pull/87559)
- [remove unsound `TrustedRandomAccess` implementations](https://github.com/rust-lang/rust/pull/85874)
- [BTree: lazily locate leaves in rangeless iterators](https://github.com/rust-lang/rust/pull/86031)
- [partially stabilize `const_slice_first_last`](https://github.com/rust-lang/rust/pull/86593)
- [stabilize `core::task::ready!`](https://github.com/rust-lang/rust/pull/81050)
- [stabilize `const_fn_transmute`, `const_fn_union`](https://github.com/rust-lang/rust/pull/85769)
- [implement `fold()` on `array::IntoIter` to improve `flatten().collect()` perf](https://github.com/rust-lang/rust/pull/87431)
- [optimize `fmt::PadAdapter::wrap`](https://github.com/rust-lang/rust/pull/87052)
- [remove `P: Unpin` bound on `impl Future for Pin`](https://github.com/rust-lang/rust/pull/81363)
- [futures: use `futuresordered` in `join_all`](https://github.com/rust-lang/futures-rs/pull/2412)
- [clippy: cover `Result` on `map_flatten` lint](https://github.com/rust-lang/rust-clippy/pull/7522)
- [clippy: fix `while_let_on_iterator`](https://github.com/rust-lang/rust-clippy/pull/7520)

### Rust Compiler Performance Triage

表现平静的一周，没有大的变化。退步仅限于几个基准。

分流完成 **@simulacrum**.修订范围：[998cfe5..3354a44](https://perf.rust-lang.org/?start=998cfe5aad7c21eb19a4bca50f05a13354706970&end=3354a44d2fa8d5ba6b8d6b40d2596de2c8292ec1&absolute=false&stat=instructions%3Au)

2 个退步，0 个改进，0 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-08-03.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [Stabilize Cargo's weak-dep-features and namespaced-features.](https://github.com/rust-lang/rfcs/pull/3143)
- [RFC: Introduce concat_bytes!() to join \[u8\] and byte str analogous to concat! for str](https://github.com/rust-lang/rfcs/pull/2509)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize `Vec<T>::shrink_to`](https://github.com/rust-lang/rust/pull/86879)
- \[disposition: merge] [impl Default, Copy, Clone for std::io::Sink and Empty](https://github.com/rust-lang/rust/pull/86744)
- \[disposition: merge] [impl Pattern for char array](https://github.com/rust-lang/rust/pull/86336)
- \[disposiiton: merge] [Weaken guarantee around advancing underlying iterators in zip](https://github.com/rust-lang/rust/pull/83791)

### New RFCs

- [RFC: Backtrace in core](https://github.com/rust-lang/rfcs/pull/3156)

# Quote of the Week

可悲的是，没有引文。

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/oy7hvm/this_week_in_rust_402/)</small>
