---
title: "Rust周报 396(译)"
date: 2021-06-24T23:16:15+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-395"
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
- 日期：2021-06-23
- [原文：396 期](https://this-week-in-rust.org/blog/2021/23/06/this-week-in-rust-396/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

本周没有时事通讯或研究文章。

### Official

- [Announcing Rust 1.53.0](https://blog.rust-lang.org/2021/06/17/Rust-1.53.0.html)
- \[Inside] [rust compiler june steering cycle](https://blog.rust-lang.org/inside-rust/2021/06/23/compiler-team-june-steering-cycle.html)

### Project/Tooling Updates

- [rust-analyzer Changelog #82](https://rust-analyzer.github.io/thisweek/2021/06/21/changelog-82.html)
- [IntelliJ Rust Changelog #149](https://intellij-rust.github.io/2021/06/21/changelog-149.html)
- [rustymind - Parse and visualize 脑电破 with Rust](https://github.com/junjunjd/rustymind)
- [This Week In TensorBase 8](https://tensorbase.io/thisweek/2021-06-23-tw_8/)
- [Supporting Miguel Ojeda's Work on Rust in the Linux Kernel](https://www.memorysafety.org/blog/supporting-miguel-ojeda-rust-in-linux/)
- [rustc_codegen_gcc: Progress Report #1](https://blog.antoyo.xyz/rustc_codegen_gcc-progress-report-1)

### Observations/Thoughts

- [Walking through "The Java Tutorials" with Rust - boxed trait objects and the search for inheritance](https://rust-java-tutorials.netlify.app/blog/5-trait-objects-2/)
- [WABT: A wonderful CLI for manipulating Wasm](https://blog.knoldus.com/wabt-a-wonderful-cli-for-manipulating-wasm/)
- [wasm-bindgen making Rust and JavaScript interoperability easy](https://blog.knoldus.com/wasm-bindgen-making-rust-and-javascript-interoperability-easy/)
- [Type-checked keypaths in Rust](https://www.cmyr.net/blog/keypaths.html)
- [Exploring ways to make async Rust easier](https://carllerche.com/2021/06/17/six-ways-to-make-async-rust-easier/)
- [Reading Back What You Wrote in Rust](https://www.morsecodist.io/blog/rust-writer-ownership)
- [First Rust Project: A Chess Engine](https://www.reddit.com/r/rust/comments/o3k6yu/first_rust_project_a_chess_engine/)
- [Rust vs C++ for game development](https://blog.logrocket.com/rust-vs-c-for-game-development/)
- [Skipping Tests in Rust](https://plume.benboeckel.net/~/JustAnotherBlog/skipping-tests-in-rust)
- \[ZH] [build a gameboy emulator in rust](https://yodalee.me/2020/12/2020_rust_gameboy/)
- \[video] [why the future of the cloud will be built on rust - oliver gould, buoyant](https://youtu.be/BWL4889RKhU)

### Rust Walkthroughs

- [Rust and AWS Lambda](https://mitchgollub.com/rust-and-aws-lambda/)
- [Deserializing Binary Data Files in Rust](https://adventures.michaelfbryan.com/posts/deserializing-binary-data-files/)
- [又一个时髦的 Rust CLI](https://dev.to/jeikabu/yet-another-snazzy-rust-cli-k4i)
- [Build an API in Rust (Part 2)](https://dev.to/naruhodo/build-an-api-in-rust-part-2-f11)
- [多态性 in Rust](https://oswalt.dev/2021/06/polymorphism-in-rust/)
- [Getting started with MongoDB and Redis in Rust](https://romankudryashov.com/blog/2021/06/mongodb-redis-rust/)
- [Making My Website Part 1: Monitoring On A Raspberry Pi](https://www.rotoclone.zone/blog/posts/raspberry-pi-monitoring)
- \[ZH] [Develop WebAssembly Program in Rust](https://yodalee.me/2021/05/1helloworld/)
- \[video] [Rust Fuzzing #3: How to write (better) Rust fuzz targets?](https://youtu.be/MiDFvrqjM2E)
- \[video] [Building a Web Application with Rust - Part III - Database Manager](https://youtu.be/u-bjMHQ22TI)
- \[video] [Building a Web Application with Rust - Part IV - HTTP Server](https://youtu.be/rJB0PLwipRI)

### Miscellaneous

- [Rust is not a Company](https://blog.m-ou.se/rust-is-not-a-company/)
- [Google Wants To See Rust Code In The Linux Kernel, Contracts The Main Developer](https://www.phoronix.com/scan.php?page=news_item&px=Google-Wants-Rust-In-Kernel)
- [Rust is the most wanted language by Godot Engine users](https://www.reddit.com/r/rust/comments/o5p267/rust_is_the_most_wanted_language_by_godot_engine/)

## Crate of the Week

本周的箱子是[serde-encrypt](https://github.com/laysakura/serde-encrypt), 一个，为所有的`Serialize`实现，添加‘加密’的库

谢谢[Sho Nakatani](https://users.rust-lang.org/t/crate-of-the-week/2704/926)提名。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

- [cargo - SearchIndexer takes time indexing \\target on windows](https://github.com/rust-lang/cargo/issues/8694)
- [cargo - Ability to specify the output name for a bin target different from the crate name](https://github.com/rust-lang/cargo/issues/1706)
- [cargo - Using alternative registries names in text output](https://github.com/rust-lang/cargo/issues/6691)
- [cargo - A dependency on path = "." should have a good error message](https://github.com/rust-lang/cargo/issues/9518)

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

301 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-06-07..2021-06-14

- [use `AttrVec` for `Arm`, `FieldDef`, and `Variant`](https://github.com/rust-lang/rust/pull/86385)
- [prefer `partition_point` to look up assoc items](https://github.com/rust-lang/rust/pull/86392)
- [lint for unused borrows as part of `UNUSED_MUST_USE`](https://github.com/rust-lang/rust/pull/86426)
- [miri: report an error if a `#[no_mangle]`/`#[export_name = ...]` function has the same symbol name as a built-in shim](https://github.com/rust-lang/miri/pull/1832)
- [fix span calculation in format strings](https://github.com/rust-lang/rust/pull/86104)
- [stabilize `span_open()` and `span_close()`](https://github.com/rust-lang/rust/pull/86136)
- [stabilize `ops::ControlFlow` (just the type)](https://github.com/rust-lang/rust/pull/85608)
- [linear interpolation](https://github.com/rust-lang/rust/pull/85925)
- [add functions `Duration::try_from_secs_`{`f32`, \`f64'}](https://github.com/rust-lang/rust/pull/82179)
- [specialize `io::Bytes::size_hint` for more types](https://github.com/rust-lang/rust/pull/86202)
- [optimize `Eq` implementation for paths](https://github.com/rust-lang/rust/pull/86179)
- [integrate binary search codes of `binary_search_by` and `partition_point`](https://github.com/rust-lang/rust/pull/85406)
- [futures: introduce `stream::select_with_strategy`](https://github.com/rust-lang/futures-rs/pull/2450)
- [cargo: don't allow config env to modify vars set by cargo](https://github.com/rust-lang/cargo/pull/9579)
- [cargo: avoid quadratic complexity when splitting output into lines](https://github.com/rust-lang/cargo/pull/9586)
- [rustdoc: fix ICE when using `#[doc(keyword = "...")]` on non-items](https://github.com/rust-lang/rust/pull/86401)
- [rustdoc: account for const-unstable functions](https://github.com/rust-lang/rust/pull/86473)
- [clippy: fix wrong config option being suggested for deprecated `wrong_pub_self_convention` lint](https://github.com/rust-lang/rust-clippy/pull/7382)
- [clippy: improve panic message on "Found multiple rlibs" error in compile-test](https://github.com/rust-lang/rust-clippy/pull/7380)
- [clippy: add `macro_braces` lint to check for irregular brace use in certain macros](https://github.com/rust-lang/rust-clippy/pull/7299)
- [clippy: check for unbalanced tick pairs in `doc_markdown` lint](https://github.com/rust-lang/rust-clippy/pull/7357)
- [clippy: move `from-iter-instead-of-collect` to pedantic](https://github.com/rust-lang/rust-clippy/pull/7375)

### Rust Compiler Performance Triage

在较小的基准测试（例如 helloworld）上的一些小退步，可能集中在少数情况下，生成更多 IR。

分流完成 **@simulacrum**.修订范围：[d192c80..3912083](https://perf.rust-lang.org/?start=d192c80d2284ba6b5146bb3da586354c3762c72b&end=3912083821c5072f700a75589c8af6a9d3e20a21&absolute=false&stat=instructions%3Au)

2 个退步，1 个改进，0 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-06-22.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [Type-changing struct update syntax](https://github.com/rust-lang/rfcs/pull/2528)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: close] [RFC: Add delete and delete_by methods to Iterator](https://github.com/rust-lang/rfcs/pull/2475)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Redefine ErrorKind::Other and stop using it in std.](https://github.com/rust-lang/rust/pull/85746)
- \[disposition: merge] [When using process::Command on Windows, environment variable names must be case-preserving but case-insensitive](https://github.com/rust-lang/rust/pull/85270)
- \[disposition: merge] [Tracking Issue for std::io::Seek::rewind()](https://github.com/rust-lang/rust/issues/85149)
- \[disposition: merge] [Support forwarding caller location through trait object method call](https://github.com/rust-lang/rust/pull/81360)
- \[disposition: merge] [Tracking issue for ops::Bound::cloned()](https://github.com/rust-lang/rust/issues/61356)

### New RFCs

- [Stabilize Cargo's weak-dep-features and namespaced-features.](https://github.com/rust-lang/rfcs/pull/3143)

# Quote of the Week

> 最后，我可以适当地命名我的不安全函数。
>
> `unsafe fn e͙̤͎̪͒x̲͓̞̤͍̻̺̂͗͛͆͡t̜̣͊̓ͩ̍̑e̩͖͙͎̼̖͉ͮṇ̨͖̎̓ͅd̗̼͕ͫ̅_̲̦̥̙̙͍͂́l͙͙̦̞̠̃͌͒i̹̘͍̳̊ͪͦͤ͒̊͋f̨ͥ̄̌ḛ̜͗̉̃̎̂̔̐t̩̲̘͕͉̺̫̓͗́i̹̤̭ͭ͆̔ͪͤ͢m̹̤̜̗̫̩͍ͨe̝͒ͣ<'b>(r: R<'b>) -> R<'static>`

– [Freeky on r/rust](https://www.reddit.com/r/rust/comments/o1yy1p/announcing_rust_1530/h2488f5)

Thanks to [Vincent de Phily](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1063) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/o6q7rw/this_week_in_rust_396/)</small>
