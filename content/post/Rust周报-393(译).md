---
title: "Rust周报 393(译)"
date: 2021-06-03T21:47:45+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-392"
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
- 日期：2021-06-02
- [原文：393 期](https://this-week-in-rust.org/blog/2021/02/06/this-week-in-rust-393/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有官方博客文章或研究论文。

### Newsletters

- [RiB Newsletter #24 - Bridges](https://www.reddit.com/r/rust/comments/nqt4ul/rib_newsletter_24_bridges/)

### Project/Tooling Updates

- [rust-analyzer Changelog #79](https://rust-analyzer.github.io/thisweek/2021/05/31/changelog-79.html)
- [GCC Rust Monthly Report #6 May 2021](https://thephilbert.io/2021/05/31/gcc-rust-monthly-report-6-may-2021/)
- [This Week In TensorBase 5](https://tensorbase.io/thisweek/2021-06-02-tw_5/)
- [Announcing tower-http](https://tokio.rs/blog/2021-05-announcing-tower-http)
- [Turning rusty tech into Rust ~ When you need to FTP but don’t want to](https://blog.abstractinvoke.com/05-07-unftp.html)

### Observations/Thoughts

- [面向对象编程概念 in Rust](https://blog.knoldus.com/object-oriented-programming-concepts-in-rust/)
- [My first cup of Rust](https://blog.frankel.ch/start-rust/1/)
- [解密：Mutability and References in Rust](https://dev.to/arunanshub/demystifying-mutability-and-references-in-rust-caf)
- [The simpler alternative to GCC-RS](https://shnatsel.medium.com/the-simpler-alternative-to-gcc-rs-90da2b3685d3)
- [Why I support GCC-rs](https://chorman64.medium.com/why-i-support-gcc-rs-dc69ebfffd60)
- [Taking Rust for a Test Drive](https://ferrous-systems.com/blog/rust-test-drive/)
- [A Polkadot（数字货币平台） 事后分析 - 24.05.2021](https://polkadot.network/a-polkadot-postmortem-24-05-2021/)
- [The Most Annoying Bug I've Had To Track Down](https://www.reddit.com/r/rust/comments/nqjyb7/the_most_annoying_bug_ive_had_to_track_down/)
- \[video] [There and back again - Our Rust adoption journey [Open Source North 2021 / Luca Palmieri]](https://youtu.be/1nKC505_uTU)

### Rust Walkthroughs

- [RESTful API in Sync & Async Rust](https://github.com/pretzelhammer/rust-blog/blob/master/posts/restful-api-in-sync-and-async-rust.md)
- [Rust Closures will make your life easy.](https://blog.knoldus.com/rust-closures-will-make-your-life-easy/)
- [Idiomatic Rust Binary Search Extended](https://c-hirsch.de/2020-05-30-idiomatic-rust-binary-search-extended)
- [The Relation between “Rust and Safe Programming” !!](https://blog.knoldus.com/lets-know-about-the-relation-between-rust-and-safe-programming/)
- [Tightness Driven（数据结构的紧密程度驱动） Development in Rust](https://www.ecorax.net/tightness/)
- [Writing a "hello world" Riscv Kernel with Nix in Rust](https://justin.restivo.me/posts/2021-05-30-nix-rust-riscv-toy-kernel.html)
- [Rust for Fsharpers and F# for Rustaceans](https://github.com/Dhghomon/rust-fsharp)
- [Creating a Deno plugin with Rust](https://alexandrempsantos.com/deno/creating-a-deno-plugin/)
- [How to use the Firebird database with Rust language](https://itnext.io/firebird-rust-92e9043261cc)
- [Reactive UI components in Rust](https://dev.to/seanwatters/reactive-ui-components-in-rust-290b)
- [Redis Streams in Action - Part 2 (Rust app to consume from the Twitter Streaming API)](https://dev.to/azure/redis-streams-in-action-part-2-rust-app-to-consume-from-the-twitter-streaming-api-1ji4)
- [How to make plugins system with Rust and WebAssembly](https://devblog.arcana.rs/how-to-make-plugins-system-with-rust-and-webassembly)
- [Getting started with ECS using Planck ECS](https://jojolepro.com/blog/2021-06-01_getting_started_with_ecs/)
- [Designing Rust bindings for REST APIs](https://plume.benboeckel.net/~/JustAnotherBlog/designing-rust-bindings-for-rest-ap-is)
- [WebRTC Video chat tutorial using Rust+WASM](https://charles-schleich.medium.com/webrtc-video-chat-tutorial-using-rust-wasm-fa340f7aeef9)

* \[ZH] [Take Web Screenshot & Make Watermark in Rust (Rust 中，对网址进行异步快照，并添加水印效果的实践)](https://blog.budshome.com/budshome/rust-zhong-,dui-wang-zhi-jin-xing-yi-bu-kuai-zhao-,bing-qie-tian-jia-shui-yin-xiao-guo-de-shi-jian)
* \[video] [A Firehose of Rust, for busy people who know some C++](https://youtu.be/IPmRDS0OSxM)

### Miscellaneous

- [New Rust book: Rust for Rustaceans by Jon Gjengset](https://www.reddit.com/r/rust/comments/nq3pxh/new_rust_book_rust_for_rustaceans_by_jon_gjengset/)
- [Just to say, thank you](https://www.reddit.com/r/rust/comments/nnioxj/just_to_say_thank_you/)

# Crate of the Week

本周的箱子是[rust-codegen-gcc](https://github.com/antoyo/rustc_codegen_gcc)，针对 GCC 的，‘基于 LLVM 的 Rust 编译器后端’的替代品。

谢谢[Josh Triplett](https://users.rust-lang.org/t/crate-of-the-week/2704/920)的建议

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

- [Backroll-rs is looking for contributors](https://www.reddit.com/r/rust/comments/npnl1p/help_wanted_with_backrollrs_new_networking_library/)

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

255 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-05-24..2021-05-31

- [post-monomorphization errors traces MVP](https://github.com/rust-lang/rust/pull/85633)
- [make closures inherit their parent's "safety context"](https://github.com/rust-lang/rust/pull/85607)
- [fix low-memory issue and lower tier platforms with no sysinfo](https://github.com/rust-lang/rustup/pull/2779)
- [fix bootstrap using host exe suffix for cargo](https://github.com/rust-lang/rust/pull/85590)
- [const-eval: disallow unwinding across functions that !fn_can_unwind()](https://github.com/rust-lang/rust/pull/85546)
- [deal with const_evaluatable_checked in ConstEquate](https://github.com/rust-lang/rust/pull/85481)
- [disallow shadowing const parameters](https://github.com/rust-lang/rust/pull/85478)
- [optimize proc macro bridge](https://github.com/rust-lang/rust/pull/85390)
- [fix incorrect suggestions for E0605](https://github.com/rust-lang/rust/pull/84968)
- [stabilize member constraints](https://github.com/rust-lang/rust/pull/84701)
- [E0599 suggestions and elision of generic argument if no canditate is found](https://github.com/rust-lang/rust/pull/84221)
- [a bit more polish on const eval errors](https://github.com/rust-lang/rust/pull/85767)
- [merge CrateDisambiguator into StableCrateId](https://github.com/rust-lang/rust/pull/85804)
- [do not try to build LLVM with Zlib on Windows](https://github.com/rust-lang/rust/pull/85762)
- [use u64 for the GroupWord on WebAssembly](https://github.com/rust-lang/hashbrown/pull/271)
- [don't hash `thir_body`](https://github.com/rust-lang/rust/pull/85729)
- [emit a hard error when a panic occurs during const-eval](https://github.com/rust-lang/rust/pull/85704)
- [don't sort a Vec before computing its DepTrackingHash](https://github.com/rust-lang/rust/pull/85702)
- [demote `ControlFlow::`{`from`, `into`}`_try` to `pub(crate)`](https://github.com/rust-lang/rust/pull/85645)
- [remove `Ipv6Addr::is_unicast_link_local_strict`](https://github.com/rust-lang/rust/pull/85819)
- [make `Step` trait safe to implement](https://github.com/rust-lang/rust/pull/83772)
- [fix unsoundness of `Debug` implementation for `linked_list::IterMut`](https://github.com/rust-lang/rust/pull/85814)
- [`Weak`'s type parameter may dangle on `drop`](https://github.com/rust-lang/rust/pull/85535)
- [add `TrustedRandomAccess` specialization for `Vec::extend()`](https://github.com/rust-lang/rust/pull/83770)
- [enable `Vec`'s calloc optimization for `Option<NonZero>`](https://github.com/rust-lang/rust/pull/85737)
- [prevent double `drop` in `Vec::dedup_by` if a destructor panics](https://github.com/rust-lang/rust/pull/85625)
- [fix pointer provenance in `<[T]>::copy_within`](https://github.com/rust-lang/rust/pull/85610)
- [add `String::extend_from_within`](https://github.com/rust-lang/rust/pull/85801)
- [add `inline` attr to `CString::into_inner` so it can optimize out `NonNull` checks](https://github.com/rust-lang/rust/pull/85719)
- [hashbrown: guard against allocations exceeding `isize::MAX`](https://github.com/rust-lang/hashbrown/pull/268)
- [futures: allow no limit for buffered stream combinators](https://github.com/rust-lang/futures-rs/pull/2429)
- [cargo: `cargo tree -e no-proc-macro` to hide procedural macro dependencies](https://github.com/rust-lang/cargo/pull/9488)
- [rustup: bring back `x86_64-sun-solaris` target to rustup](https://github.com/rust-lang/rust/pull/85252)
- [clippy: add `avoid_breaking_exported_api` config option](https://github.com/rust-lang/rust-clippy/pull/7187)
- [clippy: add lint `suspicious_splitn`](https://github.com/rust-lang/rust-clippy/pull/7292)
- [clippy: move `semicolon_if_nothing_returned` to `pedantic`](https://github.com/rust-lang/rust-clippy/pull/7268)
- [clippy: improve message for `not_unsafe_ptr_arg_deref` lint](https://github.com/rust-lang/rust-clippy/pull/7294)
- [clippy: fix ICE in `too_many_lines`](https://github.com/rust-lang/rust-clippy/pull/7287)
- [clippy: fix `allow` on some statement lints](https://github.com/rust-lang/rust-clippy/pull/7282)
- [clippy: fix `missing_docs_in_private_items` false negative](https://github.com/rust-lang/rust-clippy/pull/7281)
- [clippy: add the ability to invalidate caches to force metadata collection](https://github.com/rust-lang/rust-clippy/pull/7256)

## Rust Compiler Performance Triage

忙碌的一周，由于性能下降，有几个 PR 回退，但总体上是积极的一周。

分流完成 **@simulacrum**. 修订范围：[cdbe288..1160cf8](https://perf.rust-lang.org/?start=cdbe2888979bb8797b05f0d58a6f6e60753983d2&end=1160cf864f2a0014e3442367e1b96496bfbeadf4&absolute=false&stat=instructions%3Au)

3 个退步，3 个改进，5 个混合

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-06-01.md).

## Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [RFC: 2021 Edition](https://github.com/rust-lang/rfcs/pull/3085)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [RFC: Supertrait item shadowing](https://github.com/rust-lang/rfcs/pull/2845)
- \[disposition: merge] [Type-changing struct update syntax](https://github.com/rust-lang/rfcs/pull/2528)
- \[disposition: merge] [RFC: Introduce concat_bytes!() to join [u8] and byte str analogous to concat! for str](https://github.com/rust-lang/rfcs/pull/2509)
- \[disposition: merge] [RFC: Overconstraining and omitting unsafe in impls of unsafe trait methods](https://github.com/rust-lang/rfcs/pull/2316)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Re-add support for parsing (and pretty-printing) inner-attributes in match body](https://github.com/rust-lang/rust/pull/85193)

## New RFCs

- [Switch from travis to github actions.](https://github.com/rust-lang/rfcs/pull/3136)

# Quote of the Week

好的，你想要它。让我们来看看完整的元数据：

> 我最近获得了博士学位，在开发了 5 个不同版本的模拟器后，用 4 种不同的语言编写。最后一个版本是用纯粹的、安全的 rust 编写的，部分原因是因为 rust 对“安全”意义，有很强的保证，我能够利用它将通常的运行时错误，转化为编译时错误。这让我可以捕捉到通常需要数天或数周才能调试的错误，然后再进行相对简单的更正。\[...] 所以，再次感谢大家！

– [Cem Karan on rust-internals](https://internals.rust-lang.org/t/ot-thank-you-to-everyone-that-has-made-rust-possible/14777)

Thanks to [Josh Triplett](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1053) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/nr1mf8/this_week_in_rust_393/)</small>
