---
title: "Rust周报 389(译)"
date: 2021-05-06T20:06:42+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-389"
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
- 日期：2021-05-05
- [原文：388 期](https://this-week-in-rust.org/blog/2021/05/05/this-week-in-rust-388/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [Announcing Rustup 1.24.1](https://blog.rust-lang.org/2021/04/29/Rustup-1.24.1.html)
- /[Inside] [rustup 1.24.0 release incident report for 2021-04-27](https://blog.rust-lang.org/inside-rust/2021/04/28/rustup-1.24.0-incident-report.html)
- /[Inside] [1.52.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/05/04/1.52.0-prerelease.html)
- /[Inside] [core team update: may 2021](https://blog.rust-lang.org/inside-rust/2021/05/04/core-team-update.html)
- /[Foundation] [q12021 membership update](https://foundation.rust-lang.org/posts/2021-04-29-membership-update/)

### Newsletters

- [This Month in Rust OSDev (April 2021)](https://rust-osdev.com/this-month/2021-04/)

### Project/Tooling Updates

- [One Third Of 2021](https://isomorphicdb.io/blog/2021/05/05/One-Third-of-2021/)
- [This Week In TensorBase 1](https://tensorbase.io/thisweek/2021-05-01-tw_1/)
- [gfx/wgpu releases 0.8](https://gfx-rs.github.io/2021/04/30/release-0.8.html)
- [Last Month in Flott (运动控制 Toolkit in Rust) - May 2021](https://flott-motion.org/news/last-month-in-flott-may-2021/)
- [rust-analyzer Changelog #75](https://rust-analyzer.github.io/thisweek/2021/05/03/changelog-75.html)
- [GCC Rust Monthly Report #5 April 2021](https://thephilbert.io/2021/05/03/gcc-rust-monthly-report-5-april-2021/)
- [RustCrypto Release Announcements (`aead`, `cipher`, `crypto`, `elliptic-curve`, `ecdsa`, and more)](https://users.rust-lang.org/t/rustcrypto-release-announcements/59149)

### Observations/Thoughts

- [How Rust makes Rayon's data parallelism magical](https://developers.redhat.com/blog/2021/04/30/how-rust-makes-rayons-data-parallelism-magical/)
- [Making Generative Art with Rust](https://blog.abor.dev/p/making-generative-art-with-rust)
- [An Incomplete Explanation of the Proc Macro ，让我省了 4000 Lines of Rust](https://mbuffett.com/posts/incomplete-macro-walkthrough/)
- [最被低估，但有用的 Rust standard library type](https://dev.to/thepuzzlemaker/the-most-underrated-but-useful-rust-standard-library-type-59b1)
- [Guaranteed unique; Or, 为什么喂狗会很累。](https://dev.to/ecton/guaranteed-unique-or-why-dogfooding-can-be-taxing-2gcn)
- [The Great Rewriting in Rust](https://deprogrammaticaipsum.com/the-great-rewriting-in-rust/)
- [A story about async Rust and using !Send types](https://procmarco.netlify.app/blog/2021-05-04-a-story-about-async-rust-and-using-send-types/)
- [Compilers as Teachers](https://ferrous-systems.com/blog/compilers-as-teachers/)
- [Making Generative Art with Rust: 采访 Alexis André](https://blog.abor.dev/p/making-generative-art-with-rust)
- [Building on the Shoulders of Giants: Combining TensorFlow and Rust](https://www.crowdstrike.com/blog/how-crowdstrike-combines-tensorflow-and-rust-for-performance/)
- [Let's make everything iterable - Iterate over pagination result in the Rest API](https://0x709394.me/Let's-make%20everything%20iterable)
- \[video] [采访 niko matsakis, co-lead of the rust language team](https://youtu.be/alD0l_8W9Sc)

### Rust Walkthroughs

- [Introduction to gRPC in Rust](https://dev.to/rkudryashov/introduction-to-grpc-in-rust-4dgg)
- [I2C on the Pinephone](https://dev.to/pcvonz/i-c-on-the-pinephone-5090)
- [Late Night Confessions - Building a Website Using Rust, Rocket, Diesel, and Askama - Part 3](https://dev.to/pxjohnny/late-night-confessions-building-a-website-using-rust-rocket-diesel-and-askama-part-3-46i9)
- [Rust ownership and borrows - Fighting the borrow-checker](https://dev.to/daaitch/rust-ownership-and-borrows-fighting-the-borrow-checker-4ea3)
- [Running Rust on Android](https://blog.svgames.pl/article/running-rust-on-android)
- [使用 GDB and defmt ，调试 embedded programs](https://ferrous-systems.com/blog/gdb-and-defmt/)
- [Data Modelling in Rust p1](https://phazer99.blogspot.com/2021/05/data-modelling-in-rust.html)
- [Data Modelling in Rust p2](https://phazer99.blogspot.com/2021/05/data-modelling-in-rust-continued.html)
- [Embedding Rust code in Java Jar for distribution](https://www.fluvio.io/blog/2021/05/java-client/)
- [Late Night Confessions — Building a Website Using Rust, Rocket, Diesel, and Askama - Part 3](https://medium.com/perimeterx/late-night-confessions-building-a-website-using-rust-rocket-diesel-and-askama-part-3-3f9b7d511bde)
- 用 KAS GUI 做一个[Counter](https://kas-gui.github.io/tutorials/counter.html)和[Calculator](https://kas-gui.github.io/tutorials/calculator.html)
- \[ZH]\[series] [Build GraphQL services based on Async Rust using tide + async-graphql + mongodb (基于 Async Rust 构建 GraphQL 服务，使用 tide + async-graphql + mongodb) - Part 3](<https://blog.budshome.com/budshome/gou-jian-rust-yi-bu-graphql-fu-wu-:ji-yu-tide-+-async-graphql-+-mongodb(3)--zhong-gou>)
- \[ZH]\[series] [Build GraphQL services based on Async Rust using actix-web + async-graphql + rbatis + postgresql / mysql (基于 actix-web + async-graphql + rbatis + postgresql / mysql 构建异步 Rust GraphQL 服务) - Part 2](<https://blog.budshome.com/budshome/ji-yu-actix-web-+-async-graphql-+-rbatis-+-postgresql---mysql-gou-jian-yi-bu-rust-graphql-fu-wu-(2)---cha-xun-fu-wu>)
- \[video] [crust of rust: dispatch and fat pointers](https://youtu.be/xcygqF5LVmM)
- \[video] [ockam | oss community call | april 2021](https://www.youtube.com/watch?v=ndujK8lTTVY)

### Papers/Research Projects

- [New Variant of Buer Loader Written in Rust](https://www.proofpoint.com/us/blog/threat-insight/new-variant-buer-loader-written-rust)
- [Is it possible to write 免费成本，循环的 数据结构 in safe, stable Rust?](https://www.reddit.com/r/rust/comments/n420cg/is_it_possible_to_write_overheadfree_cyclic/)

### Miscellaneous

- [Rust's Most Unrecognized Contributor](https://brson.github.io/2021/05/02/rusts-most-unrecognized-contributor)
- [Facebook Joins the Rust Foundation](https://developers.facebook.com/blog/post/2021/04/29/facebook-joins-rust-foundation/)
- [A brief history of Rust at Facebook](https://engineering.fb.com/2021/04/29/developer-tools/rust/)
- [rustc 性能提升 from rust 1.46 to 1.51](https://www.reddit.com/r/rust/comments/n2lh7z/rustc_performance_improvement_from_rust_146_to_151/)
- [Microsoft joins Bytecode Alliance，推进 WebAssembly - aka the thing that lets you run compiled C/C++/Rust code in browsers](https://www.theregister.com/2021/04/28/microsoft_bytecode_alliance/)

# Crate of the Week

这周的箱子是[display_utils](https://docs.rs/display_utils)，能够`Display`的结构，简化字符串操作。

谢谢[kangalioo](https://users.rust-lang.org/t/crate-of-the-week/2704/908)提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

- [paru - Add -P --stats](https://github.com/Morganamilo/paru/issues/357)

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 322 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-04-26..2021-05-03

- [添加 feature-gated `#[no_coverage]` function attribute, 用来修复 derived Eq `0` coverage](https://github.com/rust-lang/rust/pull/84562)
- [给出一个更好的错误信息，when `std` or `core` are missing](https://github.com/rust-lang/rust/pull/84450)
- [对 unit enum variant when matched with a pattern，给出建议](https://github.com/rust-lang/rust/pull/84818)
- [避免为 each key type，都生成 `QueryMap::extend`](https://github.com/rust-lang/rust/pull/84805)
- [remove dead code in `rustc_session::Options`](https://github.com/rust-lang/rust/pull/84802)
- [move `iter_results` to `dyn FnMut` rather than a generic](https://github.com/rust-lang/rust/pull/84719)
- [miri: throw UB if f\*\_fast intrinsic called with non-finite value](https://github.com/rust-lang/miri/pull/1785)
- [miri: use `harness = false` instead of `#![feature(custom_test_frameworks)]`](https://github.com/rust-lang/miri/pull/1784)
- [LLVM: don't merge thread_local constants with non-thread_local constants](https://github.com/rust-lang/llvm-project/pull/105)
- [更严格：rejecting LLVM reserved registers in asm!](https://github.com/rust-lang/rust/pull/84658)
- [stabilize `vec_extend_from_within`](https://github.com/rust-lang/rust/pull/84642)
- [stabilize `ordering_helpers`](https://github.com/rust-lang/rust/pull/84523)
- [override `clone_from` method for `PathBuf` and `OsString`](https://github.com/rust-lang/rust/pull/84615)
- [简化 `Mutex::into_inner`](https://github.com/rust-lang/rust/pull/84650)
- [`i8` and `u8::to_string()` specialisation](https://github.com/rust-lang/rust/pull/82576)
- [reuse `sys::unix::cmath` on other platforms](https://github.com/rust-lang/rust/pull/84522)
- [add `ErrorKind::OutOfMemory`](https://github.com/rust-lang/rust/pull/84744)
- [add `std::os::unix::fs::chroot` to change the root directory of the current process](https://github.com/rust-lang/rust/pull/84716)
- [内联大量的 raw socket, fd and handle conversions](https://github.com/rust-lang/rust/pull/84541)
- [socket2: allow for niche optimization on Unix platforms](https://github.com/rust-lang/socket2/pull/222)
- [regex: 修复 lazy DFA false quits on ASCII text](https://github.com/rust-lang/regex/pull/768)
- [regex: 更新到最新的 memchr + upgrade to Rust 2018 + bump MSRV to Rust 1.41](https://github.com/rust-lang/regex/pull/767)
- [cargo: add report subcommand](https://github.com/rust-lang/cargo/pull/9438)
- [cargo: show transfer rate when fetching/updating registry index](https://github.com/rust-lang/cargo/pull/9395)
- [rustdoc: remove unnecessary `provided_trait_methods` field from Impl](https://github.com/rust-lang/rust/pull/84463)
- [rustdoc: shrink `doctree::Module`](https://github.com/rust-lang/rust/pull/84763)
- [datafrog: micro-optimize `binary_search`](https://github.com/rust-lang/datafrog/pull/30)
- [clippy: fix a false-positive inside const fn in `comparison_chain`](https://github.com/rust-lang/rust-clippy/pull/7118)
- [clippy: `implicit_return` improvements](https://github.com/rust-lang/rust-clippy/pull/6951)
- [clippy: `while_immutable_cond`: check condition for mutation](https://github.com/rust-lang/rust-clippy/pull/7144)
- [clippy: fix false negative in `iter_cloned_collect` with a large array](https://github.com/rust-lang/rust-clippy/pull/7138)

## Rust Compiler Performance Triage

安静的一周，无明显变化。

分流由 **@simulacrum**。修订范围：[537544..7a0f178](https://perf.rust-lang.org/?start=537544b1061467ee4b74ef7f552fab3d513e5caf&end=7a0f1781d04662041db5deaef89598a8edd53717&absolute=false&stat=instructions%3Au)

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-05-04.md)。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [Target tier policy](https://github.com/rust-lang/rfcs/pull/2803)
- [add const-ub RFC](https://github.com/rust-lang/rfcs/pull/3016)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [a new prelude for the 2021 edition (trait-only edition)](https://github.com/rust-lang/rfcs/pull/3114)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [FCP poll for ErrorKind::OutOfMemory](https://github.com/rust-lang/rust/issues/84916)
- \[disposition: merge] [impl FromStr for proc_macro::Literal](https://github.com/rust-lang/rust/pull/84717)
- \[disposition: merge] [rustdoc: Make "rust code block is empty" and "could not parse code block" warnings a lint (`INVALID_RUST_CODEBLOCKS`)](https://github.com/rust-lang/rust/pull/84587)
- \[disposition: merge] [Uplift the invalid_atomic_ordering lint from clippy to rustc](https://github.com/rust-lang/rust/pull/84039)
- \[disposition: merge] [Stabilize "RangeFrom" patterns](https://github.com/rust-lang/rust/pull/83918)
- \[disposition: merge] [Stabilize extended_key_value_attributes](https://github.com/rust-lang/rust/pull/83366)

## New RFCs

- [RFC: Preview for Unstable Features](https://github.com/rust-lang/rfcs/pull/3120)
- [Rust-lang crate ownership policy](https://github.com/rust-lang/rfcs/pull/3119)

# Quote of the Week

> 使用 R 或 Numpy 就像在跑车上驾驶一样。您只要转动车轮，踩下踏板并燃烧橡胶即可。Rust（和其他系统语言）就像是一艘太空飞船。您可以去一些地方，去做，在汽车上不敢想的事情。是的，他们更难驾驶，但可能性似乎是无限的！由于 Rust 生态系统仍在开发中，因此感觉太空飞船的零件，也就放在标有“需要组装”的工具箱中。

– [Erik Rose on rust-users](https://users.rust-lang.org/t/rust-for-data-first-problems/58887/16)

Thanks to [Phlopsi](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1047) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/n5xua0/this_week_in_rust_389/)</small>
