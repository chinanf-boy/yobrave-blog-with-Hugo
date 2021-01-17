---
title: "Rust周报 373(译)"
date: 2021-01-17T12:19:15+08:00
tags: ["week"]
description: "螃蟹-Rust周报-373"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-01-13
- [原文：373 期](https://this-week-in-rust.org/blog/2021/01/13/this-week-in-rust-373/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

### Newsletters

- [This Month in Rust GameDev #17 - December 2020](https://rust-gamedev.github.io/posts/newsletter-017/)
- [This Month in Rust OSDev (December 2020)](https://rust-osdev.com/this-month/2020-12/)

### Project/Tooling Updates

- [rust-analyzer Changelog #59](https://rust-analyzer.github.io/thisweek/2021/01/11/changelog-59.html)
- [Knurling-rs Changelog #12](https://ferrous-systems.com/blog/knurling-changelog-12/)
- [GCC Rust – How it can be achieved](https://www.embecosm.com/2021/01/12/gcc-rust-how-it-can-be-achieved/)
- [Open Source Security, Inc. Announces Funding of GCC Front-End for Rust](https://opensrcsec.com/open_source_security_announces_rust_gcc_funding)
- [Progress report on rustc_codegen_cranelift (Dec 2020)](https://bjorn3.github.io/2021/01/07/progress-report-dec-2020.html)

### Observations/Thoughts

- [XML parsing in Rust](https://simplabs.com/blog/2020/12/31/xml-and-rust/)
- [8 倍速，parsing baseball files in Rust instead of Python!](https://gregstoll.wordpress.com/2021/01/10/parsing-baseball-files-in-rust-instead-of-python-for-an-8x-speedup/)
- [Rust and Haskell 哲学](https://www.fpcomplete.com/blog/philosophies-rust-haskell/)
- [Maybe you don't need Rust and WASM to speed up your JS](https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html)
- [简化 字节序文件的解析器 in Rust with Omnom and type inference](https://www.parsed.uk/articles/Simplifying_EndianSpecific_file_parsers_in_Rust_with_Omnom_and_type_inference)
- [Rust's SemVer Snares: repr(transparent) Super-Cut](https://jack.wrenn.fyi/blog/semver-snares-transparent/)
- [混用的价值](https://www.cs.ucy.ac.cy/~eliasathan/papers/tops20.pdf)
- \[音频] [the virtual world: embedded rust part 2 - james munns](https://anchor.fm/the-virtual-world/episodes/Embedded-Rust-part-2---James-Munns-eooog5)

### Rust Walkthroughs

- [Setting a Rust Executable's Icon in Windows](https://www.anthropicstudios.com/2021/01/05/setting-a-rust-windows-exe-icon/)
- [The Little Book of Rust Books](https://lborb.github.io/book/title-page.html)
- [Rust Design Patterns](https://rust-unofficial.github.io/patterns/)
- [Hecto: Build your own text editor in Rust](https://www.philippflenker.com/hecto/)
- [CLI Shell 补全命令 in Rust](https://dev.to/kbknapp/cli-shell-completions-in-rust-37g1)
- [动态的 Aligned Types?](https://dev.to/cad97/dynamically-aligned-types-360i)
- [打磨 Rust - Temporary Value Dropped While Borrowed](https://mrtact.medium.com/polishing-rust-42d9131d1c3)
- [测试硬件 Using Rust Firmware and Rust Based CLI](https://www.jaredwolff.com/testing-hardware-using-rust/)
- [Exposing a Rust Library to Other Languages](https://sixtyfps.io/blog/expose-rust-library-to-other-languages.html)
- [Replacing FastAPI with Rust: Part 3 - Trying Actix](https://dev.to/dbanty/replacing-fastapi-with-rust-part-3-trying-actix-32lp)
- \[video] [learning rust by following the "too many linked lists" tutorial (episode 1)](https://youtu.be/aNv_oqveuCE)
- \[video] [rust parser and state machine](https://youtu.be/2aI6bJk76xM)

### Miscellaneous

- [Rust Language Cheat Sheet](https://cheats.rs/)
- [Another Rust-y OS: Theseus joins Redox in pursuit of safer, more resilient systems](https://www.theregister.com/2021/01/14/rust_os_theseus/)
- \[video] [osdi '20 - redleaf: isolation and communication in a safe operating system](https://youtu.be/MKjliJWzs6w)
- \[video] [read a paper: theseus--an os written in rust](https://youtu.be/NzmbDU13Ki8)

# Crate of the Week

这周的箱子是[fast-float](https://github.com/aldanor/fast-float-rust)，提供提供解析 floats 的方法，*非常*快速。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/868)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [ZcashFoundation/zebra - Create test to catch duplicate dependencies](https://github.com/ZcashFoundation/zebra/issues/1582)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 320 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-01-04..2021-01-11

- [use correct span for structured suggestion](https://github.com/rust-lang/rust/pull/80801)
- [rustc_parse: better spans for synthesized？ token streams](https://github.com/rust-lang/rust/pull/80784)
- [ast: 移除 values 上的一些"覆盖层" in key-value attributes](https://github.com/rust-lang/rust/pull/80441)
- [resolve: scope visiting doesn't need an `Ident`](https://github.com/rust-lang/rust/pull/80782)
- [resolve/expand: improve attribute expansion on macro definitions and calls](https://github.com/rust-lang/rust/pull/80563)
- [优化 DST field access](https://github.com/rust-lang/rust/pull/80200)
- [允许 references to 位于一个 feature gate 之后的 interior mutable data](https://github.com/rust-lang/rust/pull/80418)
- [fixed const_generics error help](https://github.com/rust-lang/rust/pull/80714)
- [use an empty `TokenCursorFrame` stack when capturing tokens](https://github.com/rust-lang/rust/pull/80830)
- [重复数据删除 Solution enum in chalk-recursive](https://github.com/rust-lang/chalk/pull/674)
- [优化 some `fs::metadata` calls](https://github.com/rust-lang/rust/pull/80756)
- [优化 some path lookups in the generic `fs::copy` implementation](https://github.com/rust-lang/rust/pull/80755)
- [implement `From<char>` for `u64` and `u128`](https://github.com/rust-lang/rust/pull/79502)
- [稳定化： `slice::strip_prefix` and `slice::strip_suffix`](https://github.com/rust-lang/rust/pull/77853)
- [add `[T; N]::each_ref` and `[T; N]::each_mut`](https://github.com/rust-lang/rust/pull/75490)
- [futures: perf: avoid an Option in the `Map*` futures](https://github.com/rust-lang/futures-rs/pull/2306)
- [backtrace: 如果 DWARF 仅有 line numbers，使用 symbol table](https://github.com/rust-lang/backtrace-rs/pull/401)
- [cargo: 稳定化： -Zfeatures and -Zpackage-features](https://github.com/rust-lang/cargo/pull/8997)
- [rustdoc: 修复 macros 2.0 和内置 derives 在 wrong path 显示](https://github.com/rust-lang/rust/pull/77862)
- [docs.rs: 修复 N+1 queries when fetching crate details](https://github.com/rust-lang/docs.rs/pull/1239)
- [docs.rs: 修复 performance regression in all releases-views](https://github.com/rust-lang/docs.rs/pull/1237)
- [clippy: new lint: vec_init_then_push](https://github.com/rust-lang/rust-clippy/pull/6538)

## Rust Compiler Performance Triage

- [2020-01-12](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-12.md):
  1 个退步, 2 个进步, 3 个 Mixed
  总体来说, 有意义尽管安静的一周。增量编译工作组的这些 [changes](https://github.com/rust-lang/rust/issues/76896) 带来的性能优化，具体关于 debug 模式下，inlining 是怎样控制的。不幸的是, 出于担忧，changes 可能会被 reversed。

分类由 @rylev 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-01-12.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Serve crates-io registry over HTTP as static files，可选择性下载](https://github.com/rust-lang/rfcs/pull/2789)
- [Infallible promotion](https://github.com/rust-lang/rfcs/pull/3027)
- [RFC: Add `target_abi` configuration](https://github.com/rust-lang/rfcs/pull/2992)
- [RFC: Plan to make core and std's panic identical](https://github.com/rust-lang/rfcs/pull/3007)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Allow "artifact dependencies" on bin, cdylib, and staticlib crates](https://github.com/rust-lang/rfcs/pull/3028)
- [RFC: Pointer metadata & VTable](https://github.com/rust-lang/rfcs/pull/2580)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: 合并] [跟踪问题：`panic_any`](https://github.com/rust-lang/rust/issues/78500)
- [跟踪问题：stable SIMD in Rust](https://github.com/rust-lang/rust/issues/48556)

## New RFCs

- [Add the boxed!() macro to "de-magic" box syntax](https://github.com/rust-lang/rfcs/pull/3057)
- [try_trait_v2: A new design for the ? desugaring](https://github.com/rust-lang/rfcs/pull/3058)
- [Add language support for C-compatible bit-fields](https://github.com/rust-lang/rfcs/pull/3064)

# Quote of the Week

> Rust 优先考虑安全性而不是便利性。Rust 不希望您犯一些愚蠢的小错误，以至于浪费大量的调试时间，这最终使它更加便利。

– [@Joe232 on rust-users](https://users.rust-lang.org/t/rust-does-not-support-and-operator/53851/7)

Thanks to [Jacob Pratt](https://users.rust-lang.org/t/twir-quote-of-the-week/328/986) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://this-week-in-rust.org/blog/2021/01/13/this-week-in-rust-373/)</small>
