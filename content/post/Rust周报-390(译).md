---
title: "Rust周报 390(译)"
date: 2021-05-14T20:43:24+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-390"
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
- 日期：2021-05-12
- [原文：390 期](https://this-week-in-rust.org/blog/2021/12/05/this-week-in-rust-390/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [The Plan for the Rust 2021 Edition](https://blog.rust-lang.org/2021/05/11/edition-2021.html)
- [Announcing Rust 1.52.1](https://blog.rust-lang.org/2021/05/10/Rust-1.52.1.html)
- [Announcing Rust 1.52.0](https://blog.rust-lang.org/2021/05/06/Rust-1.52.0.html)

### Newsletters

- [This Month in Rust GameDev #21 - April 2021](https://gamedev.rs/news/021/)
- [RiB Newsletter #23 - Rewriting in Rust?](https://www.reddit.com/r/rust/comments/n5xhku/rib_newsletter_23_rewriting_in_rust/)

### Project/Tooling Updates

- [rust-analyzer Changelog #76](https://rust-analyzer.github.io/thisweek/2021/05/10/changelog-76.html)
- [Knurling-rs changelog #24: three releases, `defmt-test` supports more items and a nasty issue](https://ferrous-systems.com/blog/knurling-changelog-24/)
- [This Week In TensorBase 2](https://tensorbase.io/thisweek/2021-05-10-tw_2/)
- [Naga：shader translation 基准测试](https://gfx-rs.github.io/2021/05/09/dota2-msl-compilation.html)
- [Announcing egui 0.12 - the simple GUI library](https://www.reddit.com/r/rust/comments/n9f6vt/announcing_egui_012_the_simple_gui_library/)
- [GCC Rust Weekly Status Report 14](https://thephilbert.io/2021/05/10/gcc-rust-weekly-status-report-14/)
- [Integrating Rust Into the Android Open Source Project](https://security.googleblog.com/2021/05/integrating-rust-into-android-open.html)
- [A New AWS SDK for Rust - Alpha Launch](https://aws.amazon.com/blogs/developer/a-new-aws-sdk-for-rust-alpha-launch/)
- [Gleam v0.15 released!](https://gleam.run/news/gleam-v0.15-released/)
- [IsomorphicDB. The Road ahead](https://isomorphicdb.io/blog/2021/05/11/IsomorphicDB-The-Road-ahead/)
- [My first Rust crate, pretend](https://sfietkonstantin.github.io/2021/05/10/First-Crate-Pretend.html)

### Observations/Thoughts

- [Rust on the Frontend and Backend](https://blog.abor.dev/p/moonzoon)
- [Why we should consider Rust for Embedded Developement?](https://blog.knoldus.com/why-rust-for-embedded-development/)
- [Aiming for idiomatic Rust](https://shane-o.dev/blog/aiming-for-idiomatic-rust)
- [Optimizing 7000 CPUs Away with Rust](https://medium.com/tenable-techblog/optimizing-700-cpus-away-with-rust-dc7a000dbdb2)
- [Improving our development confidence and productivity with Bors](https://www.fluvio.io/blog/2021/05/bors-confident-merges/)
- [Increasing the level of parallelism in DataFusion 4.0](https://medium.com/@danilheres/increasing-the-level-of-parallelism-in-datafusion-4-0-d2a15b5a2093)
- [My second impression of Rust and why I think it's the best general-purpose language!](https://deepu.tech/my-second-impression-of-rust/)
- [Incrementally porting a small Python project to Rust](https://blog.waleedkhan.name/port-python-to-rust/)
- \[video] [rust verification workshop 2021 - ferrite: a rust edsl for message-passing protocol verification](https://youtu.be/6dcf3tOPOwo)
- \[video] [rust verification workshop 2021 - rustbelt: a quick dive into the abyss](https://youtu.be/iAs0gZ8o0oQ)
- \[video] [rust verification workshop 2021 - polonius](https://youtu.be/H54VDCuT0J0)
- \[video] [rust verification workshop 2021 - rust interest in safety- and mission-critical environments](https://youtu.be/_DM36e2A9dg)
- \[video] [rust verification workshop 2021 - leveraging compiler intermediate representation for multi- and cross-language verification](https://youtu.be/0DcIn7kiNxM)

### Rust Walkthroughs

- [BABE – 共识算法 and How to Implement it](https://blog.knoldus.com/babe-consensus-algorithm-and-how-to-implement-it-in-our-runtime/)
- [Pallets（构建运行时的核心） in Substrate（区块链开发框架） and using them in runtime.](https://blog.knoldus.com/pallets-in-substrate-and-using-them-in-runtime/)
- [How to deploy Rust web app with DigitalOcean](https://dev.to/steadylearner/how-to-deploy-rust-web-app-with-digitalocean-h2o)
- [Learning Rust #4: Parsing JSON with strong types](https://dev.to/hamatti/learning-rust-4-parsing-json-with-strong-types-575m)
- [How to use Rust web framework Warp](https://dev.to/steadylearner/how-to-use-rust-warp-web-framework-2b4e)
- [Ray Tracing in One Weekend](https://misterdanb.github.io/raytracinginrust/)
- [Procedural Macros: Error handling](https://blog.turbo.fish/proc-macro-error-handling/)
- [Speeding up algorithms with arena allocators](https://mnwa.medium.com/speeding-up-algorithms-with-arena-allocators-d72d06f23607)
- [Building a REST and Web Socket API with Actix and Rust](https://agmprojects.com/blog/building-a-rest-and-web-socket-api-with-actix.html)
- [Building Rust binaries in CI that work with older GLIBC](https://kobzol.github.io/rust/ci/2021/05/07/building-rust-binaries-in-ci-that-work-with-older-glibc.html)
- \[ZH] [series] [Build GraphQL services based on Async Rust using tide + async-graphql + mongodb (基于 Async Rust 构建 GraphQL 服务，使用 tide + async-graphql + mongodb) - Part 4](<https://blog.budshome.com/budshome/gou-jian-rust-yi-bu-graphql-fu-wu-:ji-yu-tide-+-async-graphql-+-mongodb(4)--bian-geng-fu-wu-,yi-ji-di-er-ci-zhong-gou>)
- \[ZH] [series] [Build GraphQL services based on Async Rust using actix-web + async-graphql + rbatis + postgresql / mysql (基于 actix-web + async-graphql + rbatis + postgresql / mysql 构建异步 Rust GraphQL 服务) - Part 3](<https://blog.budshome.com/budshome/ji-yu-actix-web-+-async-graphql-+-rbatis-+-postgresql---mysql-gou-jian-yi-bu-rust-graphql-fu-wu-(3)---zhong-gou>)
- \[video] [graphs in rust: what is a graph? representing them in rust](https://youtu.be/3DLrUNbKhjQ)
- \[video] [rust verification workshop 2021 - peeking at compiler-internal data (for fun and profit)](https://youtu.be/SKmd5A-1cSE)
- \[video] [rust verification workshop 2021 - verifying that rust programs don't crash](https://youtu.be/vMGilPbIotw)
- \[video] [rust verification workshop 2021 - crux-mir: symbolic testing for rust](https://youtu.be/0mocaSR9f_M)
- \[video] [rust verification workshop 2021 - rustv: semi-automatic verification of unsafe rust programs](https://youtu.be/bikmlNlwAYo)
- \[video] [rust verification workshop 2021 - towards automatic verification of unsafe rust with constrained horn solvers](https://youtu.be/yJQZ7sG8xSM)
- \[video] [rust verification workshop 2021 - prusti - deductive verification for rust](https://youtu.be/C9TTioH5JUg)
- \[video] [rust verification workshop 2021 - creusot: a prototype tool for verification of rust software](https://youtu.be/b8sBtmzq0FM)
- \[video] [rust verification workshop 2021 - hacspec: succinct, executable, verifiable specifications for high-assurance cryptography](https://youtu.be/k7_BcWwvz7k)

### Miscellaneous

- [Building Rust binaries in CI that work with older GLIBC](https://kobzol.github.io/rust/ci/2021/05/07/building-rust-binaries-in-ci-that-work-with-older-glibc.html)
- [Rust 不断创新](https://aws.amazon.com/blogs/opensource/innovating-with-rust/)
- [What can C++ do that Rust can't? (2021 edition)](https://www.reddit.com/r/rust/comments/n7rjfk/what_can_c_do_that_rust_cant_2021_edition/)
- \[video] [the rust borrow checker—a deep dive @ rust dc, april 20, 2021 w/ nell shamrell-harrington](https://youtu.be/Ys7ma3au5m0)

# Crate of the Week

这周的箱子是[tokio-console](https://github.com/tokio-rs/console)，类似于“top”的实用程序，用于查看您的任务运行情况。

谢谢[Simon Farnsworth](https://users.rust-lang.org/t/crate-of-the-week/2704/910)提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [advent_of_code_traits - Improve the efficiency of the default `run` method](https://github.com/drmason13/advent_of_code_traits/issues/3)
- [compress-tools-rs - Cannot statically compile on Windows due to linking failure, exit code 1120](https://github.com/OSSystems/compress-tools-rs/issues/57)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 324 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-05-03..2021-05-10

- [fix duplicate unknown lint errors](https://github.com/rust-lang/rust/pull/85053)
- [improve diagnostics for functions in `struct` definitions](https://github.com/rust-lang/rust/pull/76808)
- [ensure failing promoteds in const/static bodies are handled correctly](https://github.com/rust-lang/rust/pull/85112)
- [implement Native link modifiers](https://github.com/rust-lang/rust/pull/83507)（RFC[#2951](https://rust-lang.github.io/rfcs/2951-native-link-modifiers.html)）
- [deduplicate native libs before they are passed to the linker](https://github.com/rust-lang/rust/pull/84794)
- [retain data in vectorized registers for longer](https://github.com/rust-lang/rust/pull/84915)
- [only compute Obligation `cache_key` once in register_obligation_at](https://github.com/rust-lang/rust/pull/84923)
- ["const" initialized thread locals in rustc](https://github.com/rust-lang/rust/pull/84833)
- [streamline `try_start` code](https://github.com/rust-lang/rust/pull/84806)
- [simplify `chdir` implementation and minimize unsafe block](https://github.com/rust-lang/rust/pull/84712)
- [optimize `BufWriter`](https://github.com/rust-lang/rust/pull/79930)
- [provide `io::Seek::rewind`](https://github.com/rust-lang/rust/pull/85146)
- [stablize {`HashMap`, `BTreeMap`}`::into_`{`keys`, `values`}](https://github.com/rust-lang/rust/pull/84328)
- [futures: add FuturesUnordered::into_iter, make iter_pin_ref public](https://github.com/rust-lang/futures-rs/pull/2423)
- [regex: fix compilation with pattern feature](https://github.com/rust-lang/regex/pull/772)
- [datafrog: speed up Relation::merge](https://github.com/rust-lang/datafrog/pull/29)
- [cargo: improve two error messages](https://github.com/rust-lang/cargo/pull/9472)
- [rustdoc: fix source code line number display and make it clickable again](https://github.com/rust-lang/rust/pull/85148)
- [compiletest: add `needs-unwind` and beginning of support for testing `panic=abort` std](https://github.com/rust-lang/rust/pull/84734)
- [clippy: fix stack overflow issue in `redundant_pattern_matching`](https://github.com/rust-lang/rust-clippy/pull/7170)
- [clippy: fix `eval_order_dependence` async false positive](https://github.com/rust-lang/rust-clippy/pull/7174)
- [clippy: fix `unused_unit` macro false positive](https://github.com/rust-lang/rust-clippy/pull/7167)
- [clippy: fix `needless_quesiton_mark` false positive](https://github.com/rust-lang/rust-clippy/pull/7165)
- [clippy: for `to_*` variant don't lint in trait impl taking `self` when non-`Copy` type](https://github.com/rust-lang/rust-clippy/pull/7182)
- [clippy: fix `unnecessary_filter_map` false positive](https://github.com/rust-lang/rust-clippy/pull/7175)
- [clippy needless_collect: Lint cases with type annotations for indirect usage and recognize `BinaryHeap`](https://github.com/rust-lang/rust-clippy/pull/7163)

## Rust Compiler Performance Triage

总体上变化不大 —— 除了 PR 的 libcore 的编译时间提高了 2 倍之外，退步和改进都很小[#83278](https://github.com/rust-lang/rust/issues/83278)。

分流由 **@pnkfelix**。修订范围：[7a0f..382f](https://perf.rust-lang.org/?start=7a0f1781d04662041db5deaef89598a8edd53717&end=382f748f23979e37e3e012b090e5a0313463f182&absolute=false&stat=instructions%3Au)

2 个退步，3 个改进，0 个混合
0 个在 rollups

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-05-11.md)。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: Reserved prefixes in the 2021 edition](https://github.com/rust-lang/rfcs/pull/3101)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [disposition: merge] [A new prelude for the 2021 edition (trait-only edition)](https://github.com/rust-lang/rfcs/pull/3114)
- [disposition: postpone] [Allow Overloading || and &&](https://github.com/rust-lang/rfcs/pull/2722)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [stabilize const_fn_unsize](https://github.com/rust-lang/rust/pull/85078)
- \[disposition: merge] [FCP poll for ErrorKind::OutOfMemory](https://github.com/rust-lang/rust/issues/84916)
- \[disposition: merge] [impl FromStr for proc_macro::Literal](https://github.com/rust-lang/rust/pull/84717)
- \[disposition: merge] [stabilize member constraints](https://github.com/rust-lang/rust/pull/84701)
- \[disposition: merge] [Uplift the invalid_atomic_ordering lint from clippy to rustc](https://github.com/rust-lang/rust/pull/84039)
- \[disposition: merge] [Stabilize "RangeFrom" patterns](https://github.com/rust-lang/rust/pull/83918)
- \[disposition: merge] [Stabilize extended_key_value_attributes](https://github.com/rust-lang/rust/pull/83366)
- \[disposition: merge] [Add functions `Duration::try_from_secs_{f32, f64}`](https://github.com/rust-lang/rust/pull/82179)

## New RFCs

- [Scrape code examples from examples/ directory for Rustdoc](https://github.com/rust-lang/rfcs/pull/3123)

# Quote of the Week

> 除非您花费数周的时间进行 Rust 构建，不然你会对 Rust 无感。最初的陡峭学习曲线可能会令人沮丧或充满挑战，具体取决于您如何看待它，但是一旦过去，那就很难不喜欢它了。毕竟，会如同拥有超能力一般 💗

– [Deepu K Sasidharan on their blog](https://deepu.tech/my-second-impression-of-rust)

Thanks to [Phlopsi](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1047) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/nb4s14/this_week_in_rust_390/)</small>
