---
title: "Rust周报 408(译)"
date: 2021-09-17T21:01:20+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-408"
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
- 日期：2021-09-15
- [原文：408 期](https://this-week-in-rust.org/blog/2021/09/15/this-week-in-rust-408/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls)

## Updates from Rust Community

### Official

- [Announcing Rust 1.55.0](https://blog.rust-lang.org/2021/09/09/Rust-1.55.0.html)
- \[video] [rustconf 2021 video stream](https://www.youtube.com/watch?v=pLdCcolQsxA)

### Newsletters

### Project/Tooling Updates

- [Announcing Sycamore v0.6.0: Faster and faster with plenty of fixes and features…](https://sycamore-rs.netlify.app/news/announcing-v0.6.0)
- [SixtyFPS (GUI crate) weekly report 12th of September](https://sixtyfps.io/thisweek/2021-09-13.html)
- [This week in Databend #7](https://datafuselabs.github.io/weekly/2021-09-15-databend-weekly/)
- [Introducing DHCProto](https://leshow.github.io/post/dhcproto/)
- [IntelliJ Rust Changelog #155](https://intellij-rust.github.io/2021/09/13/changelog-155.html)
- [Rust Analyzer Changelog #94](https://rust-analyzer.github.io/thisweek/2021/09/13/changelog-94.html)
- [Introducing Matchbox](https://johanhelsing.studio/posts/introducing-matchbox)

### Observations/Thoughts

- [Building Cloudflare Images in Rust and Cloudflare Workers](https://blog.cloudflare.com/building-cloudflare-images-in-rust-and-cloudflare-workers/)
- [Zenoh performance: a stroll in Rust async wonderland](https://zenoh.io/blog/2021-07-13-zenoh-performance-async/)
- \[audio] [rust game dev podcast - interview with remco and basz](https://rustgamedev.com/episodes/interview-with-remco-and-basz)

### Rust Walkthroughs

- [How to Write and Compile Shellcode in Rust](https://kerkour.com/blog/shellcode-in-rust/)
- [How to implement HTTP Long Polling in Rust](https://kerkour.com/blog/rust-http-long-polling/)
- [An experimental Diesel-based CRUD for Rocket](https://tweedegolf.nl/blog/61/an-experimental-diesel-based-crud-for-rocket)
- [Rust cli example #2: Ferris hunts errors](https://dev.to/uggla/rust-cli-example-2-ferris-hunts-errors-116b)
- [Test Cases in Rust are simple to write](https://blog.knoldus.com/test-cases-in-rust-are-simple-to-write/)
- [Full-stack sum types with TypeScript, Rust and Postgres](https://vincepergolizzi.com/programming/2021/09/08/full-stack-sum-types-with-typescript-rust-and-postgres.html)
- [Tokio stack overview: Runtime](https://dev.to/rogertorres/rust-tokio-stack-overview-runtime-9fh)
- \[video] [Java 开发人员的 Rust -简介[Beginners]](https://www.youtube.com/watch?v=iFdh4sPC5Tg)
- \[video] [fltk rust: a new basics tutorial](https://www.youtube.com/watch?v=S1NSsHZs6hI)
- \[video] [rust for linux](https://www.youtube.com/watch?v=VlSkZYBeK8Q)

### Miscellaneous

- [Native Rust support on Cloudflare Workers](https://blog.cloudflare.com/workers-rust-sdk/)
- [Launching Porta Ecosystem Grants](https://portanetwork.medium.com/launching-porta-ecosystem-grants-to-grow-its-network-7f82262d4260)
- [LLVM internals, part 3: from bitcode to IR](https://blog.yossarian.net/2021/09/14/LLVM-internals-part-3-from-bitcode-to-IR)

## Crate of the Week

本周的板条箱是[qcell](https://github.com/uazu/qcell)，它有个类型，其工作方式，类似于编译时的`RefCell`。

[Soni L.](https://users.rust-lang.org/t/crate-of-the-week/2704/952)谢谢你的建议！

[Please submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做出贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择并开始！

其中一些任务也可能有可用的导师，请访问任务页面了解更多信息。

- [getsynth/synth - Allow unbounded numbers](https://github.com/getsynth/synth/issues/145)
- [OpenSUSE Rust Usage Survey](https://survey.opensuse.org/)
- [RustFest CFP is open](https://rustfest.world/say-hello-rustfest-global-2021)

如果您是 Rust 项目的所有者，并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

共收到 278 个请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-09-06..2021-09-13

- [fix ICE for functions with more than 65535 arguments](https://github.com/rust-lang/rust/pull/88733)
- [detect stricter constraints on gats where clauses in impls vs trait](https://github.com/rust-lang/rust/pull/88336)
- [ignore derived `Clone` and `Debug` implementations during dead code analysis](https://github.com/rust-lang/rust/pull/85200)
- [fix non-capturing closure return type coercion](https://github.com/rust-lang/rust/pull/88147)
- [suggest items be borrowed in `for i in items[x..]`](https://github.com/rust-lang/rust/pull/88578)
- [suggest wrapping expr in parentheses on invalid unary negation](https://github.com/rust-lang/rust/pull/88757)
- [improve error message when `_` is used for in/inout `asm` operands](https://github.com/rust-lang/rust/pull/88209)
- [emit suggestion when passing byte literal to `format!` macro](https://github.com/rust-lang/rust/pull/87441)
- [use smaller spans for some structured suggestions](https://github.com/rust-lang/rust/pull/87915)
- [use more correct span data in `for` loop desugaring](https://github.com/rust-lang/rust/pull/88214)
- [use `FxHashSet` instead of `Vec` for well formed tys](https://github.com/rust-lang/rust/pull/88771)
- [`mmap` the incremental data instead of reading it](https://github.com/rust-lang/rust/pull/83214)
- [`BTreeMap`/`BTreeSet::from_iter`: use bulk building to improve the performance](https://github.com/rust-lang/rust/pull/88448)
- [add `proc_macro::Span::`{`before`, `after`}](https://github.com/rust-lang/rust/pull/86165)
- [hashbrown: `insert_unique_unchecked` operation](https://github.com/rust-lang/hashbrown/pull/293)
- [clippy: add new lint `iter_not_returning_iterator`](https://github.com/rust-lang/rust-clippy/pull/7610)

### Rust Compiler Performance Triage

本周相当繁忙，在几个基准上有一些重大改进。一些更大的汇总结果出现了，部分是从一次临时 CI 停机中恢复，此后 CI 继续出现故障。这可能是我们的结果中，出现不寻常汇总的原因。

分诊由 **@simulacrum**. 修订范围：[69c4aa290..9f85cd6](https://perf.rust-lang.org/?start=69c4aa2901ffadf69deaf91b2f90604bcbc2eb36&end=9f85cd6f2ab2769c16e89dcdddb3e11d9736b351&absolute=false&stat=instructions%3Au)

退步 2 次，改进 2 次，混合 4 次；其中 2 个在汇总中

共进行了 31 次比较

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-09-14.md).

### Approved RFCs

锈蚀之后会发生变化[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs). 以下是本周批准实施的 RFC：

- [Rust-lang crate ownership policy](https://github.com/rust-lang/rfcs/pull/3119)
- [Scrape code examples from examples/ directory for Rustdoc](https://github.com/rust-lang/rfcs/pull/3123)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PRs 的“最终评论期”。现在就表达你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: close] [Disable unused_must_use for statically known bools](https://github.com/rust-lang/rust/pull/88028)
- \[disposition: merge] [Make #[derive(A, B, ...)] cfg-eval its input only for A, B, ... and stabilize feature(macro_attributes_in_derive_output)](https://github.com/rust-lang/rust/pull/87220)
- \[disposition: merge] [Make `*const (), *mut ()` okay for FFI](https://github.com/rust-lang/rust/pull/84267)
- \[disposition: merge] [Tracking issue Iterator map_while](https://github.com/rust-lang/rust/issues/68537)

### New RFCs

_本周没有提出新的 RFC。_

# Quote of the Week

> Edition!

– [Niko and Daphne Matsakis on YouTube](https://www.youtube.com/watch?v=q0aNduqb2Ro)

Thanks to [mark-i-m](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1102) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/pp4s9j/this_week_in_rust_408/)</small>
