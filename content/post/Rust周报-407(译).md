---
title: "Rust周报 407(译)"
date: 2021-09-10T17:49:28+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-407"
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
- 日期：2021-09-08
- [原文：407 期](https://this-week-in-rust.org/blog/2021/09/08/this-week-in-rust-407/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls)

## Updates from Rust Community

### Official

- \[Inside] [splitting the const generics features](https://blog.rust-lang.org/inside-rust/2021/09/06/Splitting-const-generics.html)
- \[Inside] [1.55.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/09/07/1.55.0-prerelease.html)

### Newsletters

- [This Month in Rust GameDev #25 - August 2021](https://gamedev.rs/news/025/)
- [This Month in Rust OSDev (August 2021)](https://rust-osdev.com/this-month/2021-08/)

### Project/Tooling Updates

- [rust-analyzer Changelog #93](https://rust-analyzer.github.io/thisweek/2021/09/06/changelog-93.html)
- [This week in Fluvio #5: the programmable streaming platform](https://www.fluvio.io/news/this-week-in-fluvio-0005/)
- [rustc_codegen_gcc: Progress Report #3](https://blog.antoyo.xyz/rustc_codegen_gcc-progress-report-3)
- [This week in Datafuse #6](https://datafuselabs.github.io/weekly/2021-09-08-datafuse-weekly/)
- [Announcing Relm4 v0.1](https://aaronerhardt.github.io/blog/posts/announcing_relm4/)
- [SixtyFPS (GUI crate) weekly report for 6th of September 2021](https://sixtyfps.io/thisweek/2021-09-06.html)

### Observations/Thoughts

- [Why Rust for offensive security](https://kerkour.com/blog/why-rust-for-offensive-security/)
- [Had a blast porting one of my serverless applications from Go to Rust - some things I learned](https://twitter.com/mlafeldt/status/1433414474589954048)
- [Broken Encapsulation](https://blog.sunfishcode.online/broken-encapsulation/)
- [Faster Top Level Domain Name Extraction with Rust](https://tech.marksblogg.com/rdns-domain-name-tld-extract-rust.html)
- [Rust programs written entirely in Rust](https://blog.sunfishcode.online/rust-programs-entirely-in-rust/)
- [Fast Rust Builds](https://matklad.github.io/2021/09/04/fast-rust-builds.html)
- [Virtual Machine Dispatch Experiments in Rust](https://pliniker.github.io/post/dispatchers/)
- [Rust Verification Tools - Retrospective](https://project-oak.github.io/rust-verification-tools/2021/09/01/retrospective.html)
- [How to avoid lifetime annotations in Rust (and write clean code)](https://kerkour.com/blog/rust-avoid-lifetimes/)
- [Using SIMD acceleration in Rust to create the world's fastest `tac`](https://neosmart.net/blog/2021/using-simd-acceleration-in-rust-to-create-the-worlds-fastest-tac/)
- [Overview of the Rust cryptography ecosystem](https://kerkour.com/blog/rust-cryptography-ecosystem/)
- [Rustacean Principles](https://smallcultfollowing.com/babysteps//blog/2021/09/08/rustacean-principles/)
- [Writing software that's reliable enough for production](https://pythonspeed.com/fil/docs/fil4prod/reliable.html)
- [Plugins in Rust: Getting Started](https://nullderef.com/blog/plugin-start/)
- [A Gopher's Foray into Rust](https://thespblog.net/a-gophers-foray-into-rust/)
- [Building a reliable and tRUSTworthy web service](https://holmusk.dev/blog/2021-05-29-using-rust.html)
- \[audio] [the rustacean station podcast - rust in curl](https://rustacean-station.org/episode/035-daniel-stenberg/)

### Rust Walkthroughs

- [The Why and How of Rust Declarative Macros](https://blog.lanesawyer.dev/27848/the-why-and-how-of-rust-declarative-macros)
- [Build a secure access tunnel to a service inside of a Remote Private Network, using Rust](https://github.com/ockam-network/ockam/tree/develop/documentation/use-cases/secure-remote-access-tunnels#readme)
- [Rust on RISC-V BL602: Rhai Scripting](https://lupyuen.github.io/articles/rhai)
- [Rudroid - Writing the World's worst Android Emulator in Rust](https://fuzzing.science/page/rudroid-worlds-worst-android-emulator/)
- [Hexagonal architecture in Rust #3](https://alexis-lozano.com/hexagonal-architecture-in-rust-3/)
- [Hexagonal architecture in Rust #4](https://alexis-lozano.com/hexagonal-architecture-in-rust-4/)
- [Explaining How Memory Management in Rust Works by Comparing with JavaScript](https://spin.atomicobject.com/2021/08/30/memory-management-in-rust/)
- [Postgres Extensions in Rust](https://depth-first.com/articles/2021/08/25/postgres-extensions-in-rust/)
- [Let's overtake go/fasthttp with rust/warp](https://medium.com/@glebpomykalov/lets-overtake-go-fasthttp-with-rust-hyper-b2d1004914f)
- [How we built our Python Client that's mostly Rust](https://dev.to/infinyon/how-we-built-our-python-client-that-s-mostly-rust-3p63)
- [Combining Rust and C++ code in your Bela project](https://eriknatanael.com/blog/combining-rust-and-cpp-code-in-your-bela-project)
- [Data-oriented, clean&hexagonal architecture softwware in Rust - through an example project](https://dpc.pw/data-oriented-cleanandhexagonal-architecture-software-in-rust-through-an-example)
- [Let's build an LC-3 Virtual Machine](https://www.rodrigoaraujo.me/posts/lets-build-an-lc-3-virtual-machine/)
- [How to think of unwrap](https://owengage.com/writing/2021-08-30-how-to-think-of-unwrap/)
- [Learning Rust: Interfacing with C](https://piware.de/post/2021-08-27-rust-and-c/)
- [How to build a job queue with Rust and PostgreSQL](https://kerkour.com/blog/rust-job-queue-with-postgresql/)
- \[ID] [belajar rust - 02: instalasi rust](https://dev.to/zimerasystems/belajar-rust-02-instalasi-rust-pf)
- \[video] [crust of rust: async/await](https://youtu.be/ThjvMReOXYM)
- \[video] [concurrency in rust - sharing state](https://youtu.be/mupwF9jbVZ4)
- \[video] [setting up an arduino project using rust](https://www.youtube.com/watch?v=d9PxFlFFZuk)

### Miscellaneous

- [Unity files patent for ECS in game engines that would probably affect many Rust ECS crates, including Bevy's](https://www.reddit.com/r/rust/comments/pjtpkj/unity_files_patent_for_ecs_in_game_engines_that/)
- [Rust 2021 celebration and thanks](https://github.com/rust-lang/rust/issues/88623)
- [Rust on RISC-V BL602: Rhai Scripting](https://lupyuen.github.io/articles/rhai)
- [Wanted: Rust sync web framework](https://diziet.dreamwidth.org/9336.html)
- \[audio] [rust 2021 edition](https://youtu.be/q0aNduqb2Ro)

## Crate of the Week

遗憾的是，本周我们没有提名。尽管如此，我还是给出[gradient](https://github.com/mazznoer/gradient-rs)，一个命令行工具，用于从 SVG 中提取 gradoents，显示和操作它们。

[Please submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

- [Rust for the Polyglot Programmer - a guide in need of review by and feedback from the Rust Community](https://www.chiark.greenend.org.uk/%7Eianmdlvl/rust-polyglot/)
- [Survey - How People Use Rust](https://t.co/gCj6NRNftT?amp=1)

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

300 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-08-30..2021-09-06

- [introduce `let...else`](https://github.com/rust-lang/rust/pull/87688)
- [update const generics feature gates](https://github.com/rust-lang/rust/pull/88369)
- [allow `~const` bounds on trait assoc functions](https://github.com/rust-lang/rust/pull/88418)
- [emit specific warning to clarify that `#[no_mangle]` should not be applied on foreign statics or functions](https://github.com/rust-lang/rust/pull/86376)
- [fix 2021 dyn suggestion that used code as label](https://github.com/rust-lang/rust/pull/88657)
- [warn when `[T; N].into_iter()` is ambiguous in the new edition](https://github.com/rust-lang/rust/pull/88503)
- [detect bare blocks with type ascription that were meant to be a struct literal](https://github.com/rust-lang/rust/pull/88598)
- [use right span in prelude collision suggestions with macros](https://github.com/rust-lang/rust/pull/88501)
- [improve structured tuple struct suggestion](https://github.com/rust-lang/rust/pull/88631)
- [move global analyses from lowering to resolution](https://github.com/rust-lang/rust/pull/88597)
- [`fmt::Formatter::pad`: don't call `chars().count()` more than one time](https://github.com/rust-lang/rust/pull/88560)
- [add `carrying_add`, `borrowing_sub`, `widening_mul`, `carrying_mul` methods to integers](https://github.com/rust-lang/rust/pull/85017)
- [stabilize `UnsafeCell::raw_get`](https://github.com/rust-lang/rust/pull/88551)
- [stabilize `Iterator::intersperse`](https://github.com/rust-lang/rust/pull/88548)
- [stabilize `std::os::unix::fs::chroot`](https://github.com/rust-lang/rust/pull/88177)
- [compiler-builtins: optimize `memcpy`, `memmove` and `memset`](https://github.com/rust-lang/compiler-builtins/pull/405)
- [futures: add `TryStreamExt::try_forward`, remove `TryStream` bound from `StreamExt::forward`](https://github.com/rust-lang/futures-rs/pull/2469)
- [futures: correcting overly restrictive lifetimes in vectored IO](https://github.com/rust-lang/futures-rs/pull/2484)
- [cargo: stabilize 2021 edition](https://github.com/rust-lang/cargo/pull/9800)
- [cargo: improve error message when unable to initialize git index repo](https://github.com/rust-lang/cargo/pull/9869)
- [clippy: add the `derivable_impls` lint](https://github.com/rust-lang/rust-clippy/pull/7570)
- [rustdoc: clean up handling of lifetime bounds](https://github.com/rust-lang/rust/pull/88604)
- [rustdoc: don't panic on ambiguous inherent associated types](https://github.com/rust-lang/rust/pull/88573)
- [rustdoc: box `GenericArg::Const` to reduce enum size](https://github.com/rust-lang/rust/pull/88574)
- [rustdoc: display associated types of implementors](https://github.com/rust-lang/rust/pull/88490)

### Rust Compiler Performance Triage

忙碌的一周，有很多不同的变化，但最终只有少数被认为是称得上重要的

分流完成 **@pnkfelix**.修订范围：[fe379..69c4a](https://perf.rust-lang.org/?start=fe37929e4cba2c5c21e6805805769630c736bc3d&end=69c4aa2901ffadf69deaf91b2f90604bcbc2eb36&absolute=false&stat=instructions%3Au)

3 个退步，1 个改进，3 个混合；其中 0 个在汇总中 总共进行了 57 次比较

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-09-07.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: close] [Proposal: Else clauses for for and while loops](https://github.com/rust-lang/rfcs/pull/3163)
- \[disposition: merge] [Scrape code examples from examples/ directory for Rustdoc](https://github.com/rust-lang/rfcs/pull/3123)
- \[disposition: merge] [Rust-lang crate ownership policy](https://github.com/rust-lang/rfcs/pull/3119)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Deprecate array::IntoIter::new](https://github.com/rust-lang/rust/pull/88611)
- \[disposition: merge] [Partially stabilize array_methods](https://github.com/rust-lang/rust/pull/88353)
- \[disposition: merge] [Tracking issue Iterator map_while](https://github.com/rust-lang/rust/issues/68537)

### New RFCs

- [Add RFC float-next-up-down](https://github.com/rust-lang/rfcs/pull/3173)

# Quote of the Week

> 在 Rust 中，健全性绝不仅仅是一种约定。

– [@H2CO3 on rust-users](https://users.rust-lang.org/t/rationale-behind-fn-fnmut-and-fnonce-design/64355/11)

Thanks to [Riccardo D'Ambrosio](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1097) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/pkoc2q/this_week_in_rust_407/)</small>

> 爷爷，上去后，不要老吃面包啦！🕯️ 