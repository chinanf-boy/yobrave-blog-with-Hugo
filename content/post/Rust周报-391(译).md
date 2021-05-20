---
title: "Rust周报 391(译)"
date: 2021-05-21T00:04:48+08:00
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
- 日期：2021-05-19
- [原文：391 期](https://this-week-in-rust.org/blog/2021/19/05/this-week-in-rust-391/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯或研究论文。

### Official

- [Announcing Rustup 1.24.2](https://blog.rust-lang.org/2021/05/17/Rustup-1.24.2.html)
- [Six Years of Rust](https://blog.rust-lang.org/2021/05/15/six-years-of-rust.html)

### Project/Tooling Updates

- [rust-analyzer Changelog #77](https://rust-analyzer.github.io/thisweek/2021/05/17/changelog-77.html)
- [IntelliJ Rust Changelog #147](https://intellij-rust.github.io/2021/05/18/changelog-147.html)
- [GCC Rust Weekly Status Report 15](https://thephilbert.io/2021/05/14/gcc-rust-weekly-status-report-15/)
- [MoonZoon Dev News (3): Signals, React-like Hooks, Optimizations](https://dev.to/martinkavik/moonzoon-dev-news-3-signals-react-like-hooks-optimizations-39lp)
- [Alacritty Version 0.8.0](https://github.com/alacritty/alacritty/releases/tag/v0.8.0)
- [Micromath 2.0.0: approximation-based embedded arithmetic, 2D/3D vector, quarternion, and statistics library（算术运算）](https://www.reddit.com/r/rust/comments/nekdbc/ann_micromath_200_approximationbased_embedded/)
- [This Week In TensorBase 3](https://tensorbase.io/thisweek/2021-05-19-tw_3/)

### Observations/Thoughts

- [Scylla Developer Hackathon: Rust Driver](https://www.scylladb.com/2021/02/17/scylla-developer-hackathon-rust-driver/)
- [Plugins in Rust: The Technologies](https://nullderef.com/blog/plugin-tech/)
- [gRPC load-balancing in Rust](https://truelayer.com/blog/grpc-load-balancing-in-rust)
- [Verifying vectorized Rust revisited（Rust 验证工具的思考）](https://project-oak.github.io/rust-verification-tools/2021/05/15/verifying-vectorized-code2.html)
- [Routes to Discovering Rust](https://blog.abor.dev/p/timclicks)
- [How we utilized fuzzing to improve security in the TezEdge node，created an open-source CI tool for Rust code fuzzing](https://medium.com/tezedge/how-we-utilized-fuzzing-to-improve-security-in-the-tezedge-node-and-created-an-open-source-ci-tool-92ffbd804db1)
- [Boost productivity with Rust](https://dev.to/pancy/boost-productivity-with-rust-anf)
- [Building 'Outer Wonders for Linux'](https://utopixel.games/en/blog/building-outer-wonders-for-linux/)
- [Behind the scenes of '1Password for Linux'](https://dteare.medium.com/behind-the-scenes-of-1password-for-linux-d59b19143a23)
- [Writing Pythonic Rust](http://www.cmyr.net/blog/rust-python-learnings.html)
- [Upgradable parking_lot::RwLock might not be what you expect](https://morestina.net/blog/1739/upgradable-parking_lotrwlock-might-not-be-what-you-expect)
- [Why Rust for Embedded Development?](https://blog.knoldus.com/why-rust-for-embedded-development/)

### Rust Walkthroughs

- [身份认证机制 in Rust web applications](https://dev.to/ddtkey/authorization-mechanisms-in-rust-web-applications-27ag)
- [Understanding Rust Privacy and Visibility Model](https://iximiuz.com/en/posts/rust-privacy-and-visibility/)
- [Things you can't do in Rust (and what to do instead)](https://blog.logrocket.com/what-you-cant-do-in-rust-and-what-to-do-instead/)
- [State Management With WebAssembly and Rust](https://dev.to/seanwatters/state-management-with-webassembly-rust-5a1g)
- [Implementing 'Linked List' in Rust](https://dev.to/felixfaisal/implementing-linked-list-in-rust-3and)
- [How to use gRPC with Rust Tonic and Postgres database with examples](https://dev.to/steadylearner/how-to-use-grpc-with-rust-tonic-and-postgres-database-with-examples-3dl7)
- [Generating pre-signed S3 URLs in Rust](https://dev.to/rtyler/generating-pre-signed-s3-urls-in-rust-27gd)
- [A simple user input collection, validation, and conversion library in Rust](https://dev.to/jahwi/a-simple-user-input-collection-validation-and-conversion-library-in-rust-34cj)
- [How to make a cryptocurrency Telegram bot with Rust and Teloxide](https://dev.to/steadylearner/how-to-make-a-telegram-bot-with-rust-teloxide-m60)
- [‘Infinite Mixture Model’ in Rust with RV 0.12（统计工具）](https://redpoll.ai/blog/imm-with-rv-12/)
- [Optimizing HashMaps even more](https://blog.yoshuawuyts.com/optimizing-hashmaps-even-more/)
- [Inventing the Service trait](https://tokio.rs/blog/2021-05-14-inventing-the-service-trait)
- [Rust Macros Rule: DRY warp Routes](https://shivjm.blog/rust-macros-rule-dry-warp-routes/)
- [Error Handling in Rust - A Deep Dive](https://www.lpalmieri.com/posts/error-handling-rust/)
- \[DE] [speicherverwaltung in rust](https://jo-so.de/2021-01/Speicher-Rust.html)
- \[ES] [cómo utilizar rust web framework warp](https://dev.to/steadylearner/como-utilizar-rust-web-framework-warp-n3c)
- \[PT] [o que é dyn no rust?](https://dev.to/henrybarreto/o-que-e-dyn-no-rust-4ol9)
- \[ZH] [practice of rendering markdown to html in rust (rust web 开发中，将 markdown 渲染为 html 的实践)](https://blog.budshome.com/budshome/rust-zhong-jiang-markdown-xuan-ran-wei-html)
- \[ZH] \[series] [Build GraphQL services based on Async Rust using actix-web + async-graphql + rbatis + postgresql / mysql (基于 actix-web + async-graphql + rbatis + postgresql / mysql 构建异步 Rust GraphQL 服务) - Part 4](<https://blog.budshome.com/budshome/ji-yu-actix-web-+-async-graphql-+-rbatis-+-postgresql---mysql-gou-jian-yi-bu-rust-graphql-fu-wu-(4)---bian-geng-fu-wu-,yi-ji-xiao-zhong-gou>)
- \[video] [the rust borrow checker - a deep dive @ rust dc, april 20 2021 w/ nell shamrell-harrington](https://youtu.be/Ys7ma3au5m0)

### Miscellaneous

- [James Munns on the state and the future of embedded & safety-critical Rust | Emergence Podcast](https://www.youtube.com/watch?v=SNUklwUi_M4)
- [Rust 2021 edition to arrive in October with 'more consistent panic' and other new features](https://www.theregister.com/2021/05/13/rust_2021_edition/)
- [SpaceX about the Rust Programming Language!](https://www.reddit.com/r/rust/comments/ndm4ne/spacex_about_the_rust_programming_language/)

# Crate of the Week

这周的箱子是[arraygen](https://docs.rs/arraygen)，派生 proc 宏，可从结构，生成数组。

谢谢[José Manuel Barroso Galindo](https://users.rust-lang.org/t/crate-of-the-week/2704/911)提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

_没有针对 CfP 提出任何问题_。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 333 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-05-10..2021-05-17

- [add auto traits and clone trait migrations，for](https://github.com/rust-lang/rust/pull/84730)（RFC[#2229](https://rust-lang.github.io/rfcs/2229-capture-disjoint-fields.html)）
- [insignificant destructors for RFC #2229](https://github.com/rust-lang/rust/pull/84152)
- [add `asm!()` support for PowerPC](https://github.com/rust-lang/rust/pull/84732)
- [add `asm!()` support for PowerPC64](https://github.com/rust-lang/rust/pull/85279)
- [add support for const operands and options to `global_asm!`](https://github.com/rust-lang/rust/pull/84107)
- [recover from invalid struct item syntax](https://github.com/rust-lang/rust/pull/84793)
- [fix diagnostic for cross crate private tuple struct constructors](https://github.com/rust-lang/rust/pull/85068)
- [fix suggestions for missing return type lifetime specifiers](https://github.com/rust-lang/rust/pull/85050)
- [suggest adding a type parameter for impls](https://github.com/rust-lang/rust/pull/85041)
- [fix stack overflow when checking for structural recursion](https://github.com/rust-lang/rust/pull/85012)
- [implement span quoting for proc-macros](https://github.com/rust-lang/rust/pull/84278)
- [handle more span edge cases in generics diagnostics](https://github.com/rust-lang/rust/pull/83759)
- [improve diagnostics for GATs](https://github.com/rust-lang/rust/pull/82272)
- [show macro name in 'this error originates in macro' message](https://github.com/rust-lang/rust/pull/82069)
- [store `VariantIdx` to distinguish enum variants](https://github.com/rust-lang/rust/pull/85195)
- [remove `CrateNum` parameter for queries that only work on local crate](https://github.com/rust-lang/rust/pull/85178)
- [adjust target search algorithm for rustlib path](https://github.com/rust-lang/rust/pull/85152)
- [don't suggest adding `'static` lifetime to arguments](https://github.com/rust-lang/rust/pull/85240)
- [improve error message for non-exhaustive matches on non-exhaustive enums](https://github.com/rust-lang/rust/pull/85233)
- [allow `async {}` expressions in const contexts](https://github.com/rust-lang/rust/pull/85353)
- [warn about unused pub fields in non-pub structs](https://github.com/rust-lang/rust/pull/85324)
- [fix unused attributes on `macro_rules`](https://github.com/rust-lang/rust/pull/85312)
- [box `Impl.blanket_impl` to reduce size](https://github.com/rust-lang/rust/pull/85311)
- [`#[inline(always)]` on basic pointer methods](https://github.com/rust-lang/rust/pull/85218)
- [make `unchecked_`{`add`, `sub`, `mul`} inherent methods unstably const](https://github.com/rust-lang/rust/pull/85096)
- [BTree: no longer copy keys and values before dropping them](https://github.com/rust-lang/rust/pull/84904)
- [`str::is_char_boundary` - slight optimization](https://github.com/rust-lang/rust/pull/84751)
- [futures-macro: improve diagnostics on type mismatch](https://github.com/rust-lang/futures-rs/pull/2433)
- [futures: implement `try_chunks`](https://github.com/rust-lang/futures-rs/pull/2438)
- [futures: change `SelectAll` iterators to return stream instead of `StreamFuture`](https://github.com/rust-lang/futures-rs/pull/2431)
- [futures: expose iterators from `SelectAll`](https://github.com/rust-lang/futures-rs/pull/2428)
- [futures: `SelectAll::clear`](https://github.com/rust-lang/futures-rs/pull/2430)
- [futures: `FuturesUnordered::clear`](https://github.com/rust-lang/futures-rs/pull/2415)
- [futures: change `StreamExt::scan` to pass state to closure by value](https://github.com/rust-lang/futures-rs/pull/2427)
- [futures: abortable streams](https://github.com/rust-lang/futures-rs/pull/2410)
- [cargo: improve performance of git status check in `cargo package`](https://github.com/rust-lang/cargo/pull/9478)
- [rustdoc: minimize amount of fake DefIds used in rustdoc](https://github.com/rust-lang/rust/pull/85067)
- [clippy: add `needless_bitwise_bool` lint](https://github.com/rust-lang/rust-clippy/pull/7133)
- [clippy: new lint: `unused_async`](https://github.com/rust-lang/rust-clippy/pull/7225)
- [clippy: move `inconsistent_struct_constructor` to `pedantic`](https://github.com/rust-lang/rust-clippy/pull/7193)
- [clippy: `needless_collect` enhancements](https://github.com/rust-lang/rust-clippy/pull/7188)
- [clippy: `while_let_on_iterator` improvements](https://github.com/rust-lang/rust-clippy/pull/6966)
- [clippy: add `Sized` trait for `wrong_self_convention` lint test](https://github.com/rust-lang/rust-clippy/pull/7222)
- [clippy: `match_single_binding`: fix invalid suggestion when match scrutinee has side effects](https://github.com/rust-lang/rust-clippy/pull/7095)
- [clippy: trigger `wrong_self_convention` only if it has implicit self](https://github.com/rust-lang/rust-clippy/pull/7215)
- [clippy: stop linting ‘else if let’ pattern in `option_if_let_else` lint](https://github.com/rust-lang/rust-clippy/pull/7216)
- [clippy: fix false positives about generic args](https://github.com/rust-lang/rust-clippy/pull/7223)
- [clippy: fix a `manual_unwrap_or` false positive with deref coercion](https://github.com/rust-lang/rust-clippy/pull/7233)

## Rust Compiler Performance Triage

本周基准测试结果中，有很多噪音。我们正在讨论（[zulip archive](https://zulip-archive.rust-lang.org/247081tcompilerperformance/06104coercionsdebugnoise.html)，[live zulip](https://rust-lang.zulipchat.com/#narrow/stream/247081-t-compiler.2Fperformance/topic/coercions-debug.20noise)）如何最好地更新基准测试集合，以消除反复出现的嘈杂情况。除此之外，对一些单独的基准，进行了一些重大改进。

内存使用情况（[max-rss](https://perf.rust-lang.org/?start=2021-05-11&end=2021-05-18&absolute=true&stat=max-rss)）似乎基本持平。除了`tuple-stess`表明较一周前，内存增加了 4％。

分流由 **@pnkfelix**。修订范围：[382f..25a2](https://perf.rust-lang.org/?start=382f748f23979e37e3e012b090e5a0313463f182&end=25a277f03df7e44643ddfcc240d034409cb2f505&absolute=false&stat=instructions%3Au)

5 个退步，7 个改进，2 个汇总中的 1 个

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-05-18.md)。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [RFC: 2021 Edition](https://github.com/rust-lang/rfcs/pull/3085)
- \[disposition: postpone] [Allow Overloading || and &&](https://github.com/rust-lang/rfcs/pull/2722)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [stabilize const_fn_unsize](https://github.com/rust-lang/rust/pull/85078)
- \[disposition: merge] [rustc: Allow safe #[target_feature] on wasm](https://github.com/rust-lang/rust/pull/84988)
- \[disposition: merge] [stabilize int_error_matching](https://github.com/rust-lang/rust/pull/84910)
- \[disposition: merge] [Show test type during prints](https://github.com/rust-lang/rust/pull/84863)
- \[disposition: merge] [stabilize member constraints](https://github.com/rust-lang/rust/pull/84701)
- \[disposition: merge] [Move UnwindSafe, RefUnwindSafe, AssertUnwindSafe to core](https://github.com/rust-lang/rust/pull/84662)
- \[disposition: merge] [Use try_reserve in Vec's io::Write](https://github.com/rust-lang/rust/pull/84612)
- \[disposition: merge] [Add functions `Duration::try_from_secs_{f32, f64}`](https://github.com/rust-lang/rust/pull/82179)
- \[disposition: close] [Allow unused variables with todo!](https://github.com/rust-lang/rust/pull/79850)

## New RFCs

- [Pinned synchronization primitives](https://github.com/rust-lang/rfcs/pull/3124)

# Quote of the Week

> 我经常将 Rust 视为开发编程语言的过程和社区，而不仅是编程语言本身。

– [throwaway894345 on hacker news](https://news.ycombinator.com/item?id=27120691)

Thanks to [Krishna Sundarram](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1050) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ngp41e/this_week_in_rust_391/)</small>
