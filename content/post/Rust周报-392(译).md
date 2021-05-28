---
title: "Rust周报 392(译)"
date: 2021-05-28T22:22:08+08:00
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
- 日期：2021-05-26
- [原文：392 期](https://this-week-in-rust.org/blog/2021/26/05/this-week-in-rust-392/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有官方博客文章，新闻通讯或研究论文。

### Project/Tooling Updates

- [rust-analyzer Changelog #78](https://rust-analyzer.github.io/thisweek/2021/05/24/changelog-78.html)
- [This Week In TensorBase 4](https://tensorbase.io/thisweek/2021-05-26-tw_4/)
- [rustc_codegen_gcc can now run libcore’s tests and pass most of them!](https://blog.antoyo.xyz/rustc_codegen_gcc-run-core-tests)
- [Parcel 2 beta 3](https://v2.parceljs.org/blog/beta3/)
- [Announcing lettre 0.10.0-rc.1](https://lettre.rs/post/lettre-0-10-0-rc-1/)
- [Announcing typed-sql beta! Zero-cost ORM with fast compile times](https://www.reddit.com/r/rust/comments/njbt9s/announcing_typedsql_beta_zerocost_orm_with_fast/)
- [Announcing Valuable, a library for object-safe value inspection](https://tokio.rs/blog/2021-05-valuable)

### Observations/Thoughts

- [Why and how we wrote a compiler in Rust (blog post series 1/X): the context](https://bnjjj.medium.com/why-and-how-we-wrote-a-compiler-in-rust-blog-post-series-1-x-the-context-e2f83b10edb9)
- [2D Web Rendering with Rust](https://medium.com/lagierandlagier/2d-web-rendering-with-rust-4401cf133f31)
- [快速同步/搜索 和空间优化的复制算法 written in Rust, the gun-db data replication model](https://mateusfreira.github.io/@mateusfreira-a-fast-to-sync-search-and-space-optimized-replication-algorithm-written-in-rust-the-Nun-db-data-replication-model/)
- [Adventures in rustc Forking](https://jam1.re/blog/adventures-in-rustc-forking)
- [Baseline implementations should be predictable](https://pvk.ca/Blog/2021/05/14/baseline-implementations-should-be-predictable/)
- [Naming Your Lifetimes](https://www.possiblerust.com/pattern/naming-your-lifetimes)
- [Rucredstash(AWS 安全身份管理) release & Rust experience from a Haskeller](https://psibi.in/posts/2021-05-22-credstash.html)

### Rust Walkthroughs

- [Creating an Infinite Mixture Model in Rust with the rv crate](https://redpoll.ai/blog/imm-with-rv-12/)
- [Debug rust application inside container](https://blog.erebe.dev/blog/debug-rust-aplication-inside-container/index.html)
- [Write Rust lints without forking Clippy](https://www.trailofbits.com/post/write-rust-lints-without-forking-clippy)
- [Zig Makes Rust Cross-Compilation Just Work](https://actually.fyi/posts/zig-makes-rust-cross-compilation-just-work/)
- [Routing traffic in Rust using eBPF](https://www.infinyon.com/blog/2021/05/ebpf-routing-rust/)
- [How to to_string in Rust](https://loige.co/how-to-to-string-in-rust/)
- [Building small desktop apps with Ember.js and Tauri](https://dev.to/mitchartemis/building-small-desktop-apps-with-ember-js-and-tauri-3o28)
- [Coming to Rust from Django](https://meesha.blog/2021/coming-to-rust-from-django.html)
- [Structural Typing in Rust](https://beachape.com/blog/2021/05/25/structural-typing-in-rust/)
- [Idiomatic Rust? Implementing binary search](https://shane-o.dev/blog/binary-search-rust)
- \[ZH] [Practice of web crawling with async Rust (使用 Rust 做异步数据采集的实践)](https://blog.budshome.com/budshome/shi-yong-rust-zuo-yi-bu-shu-ju-cai-ji-de-shi-jian)
- \[video] [Lock-Free to Wait-Free Simulation in Rust](https://youtu.be/Bw8-vvtA-E8)

### Miscellaneous

- [Rust Web Development - MEAP](https://www.manning.com/books/rust-web-development)
- [Fuchsia OS partially written in Rust has shipped](https://www.reddit.com/r/rust/comments/nldg5c/fuchsia_os_partially_written_in_rust_has_shipped/)

# Crate of the Week

这周的箱子是[typed-index-collections](https://github.com/zheland/typed-index-collections)，一个制作 Vecs 的箱子，带自定义类型的索引。

谢谢[Tim](https://users.rust-lang.org/t/crate-of-the-week/2704/913)提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

_没有针对 CfP 提出任何问题_。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 280 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-05-17..2021-05-24

- [implement more `Iterator` methods on `core::iter::Repeat`](https://github.com/rust-lang/rust/pull/85338)
- [override `clone_from` for some types](https://github.com/rust-lang/rust/pull/85176)
- [stabilize `const_fn_unsize`](https://github.com/rust-lang/rust/pull/85078)
- [implement the new desugaring from `try_trait_v2`](https://github.com/rust-lang/rust/pull/84767)
- [impl `FromStr` for `proc_macro::Literal`](https://github.com/rust-lang/rust/pull/84717)
- [stabilize `extended_key_value_attributes`](https://github.com/rust-lang/rust/pull/83366)
- [fix auto-hide for implementations and implementors](https://github.com/rust-lang/rust/pull/85575)
- [add `rustc_mir::interpret::Machine::enforce_abi()`](https://github.com/rust-lang/rust/pull/85557)
- [check for more things in THIR unsafeck](https://github.com/rust-lang/rust/pull/85555)
- [suppress spurious errors inside `async fn`](https://github.com/rust-lang/rust/pull/85393)
- [avoid zero-length `memcpy` in formatting](https://github.com/rust-lang/rust/pull/85391)
- [always produce sub-obligations when using cached projection result](https://github.com/rust-lang/rust/pull/85382)
- [CTFE core engine allocation & memory API improvemenets](https://github.com/rust-lang/rust/pull/85376)
- [CTFE `get_alloc_extra_mut`: also provide ref to `MemoryExtra`](https://github.com/rust-lang/rust/pull/85578)
- [fix missing lifetimes diagnostics](https://github.com/rust-lang/rust/pull/85375)
- [suggest borrowing if a trait implementation is found for `&`/`&mut T`](https://github.com/rust-lang/rust/pull/85369)
- [remove `InPlaceIterable` marker from `Peekable` due to unsoundness](https://github.com/rust-lang/rust/pull/85340)
- [extend `rustc_on_implemented` to improve more `?` error messages](https://github.com/rust-lang/rust/pull/85596)ippy / pull / 7264）
- [cargo: add `cargo:rustc-link-arg-bin` flag](https://github.com/rust-lang/cargo/pull/9486)
- [rustdoc: don't hide inherent implementations by default](https://github.com/rust-lang/rust/pull/85602)
- [clippy: fix ICE in `implicit_return`](https://github.com/rust-lang/rust-clippy/pull/7242)
- [clippy: fix invalid syntax in `from_iter_instead_of_collect` suggestion](https://github.com/rust-lang/rust-clippy/pull/7264)
- [clippy: fix `needless_borrow` suggestion](https://github.com/rust-lang/rust-clippy/pull/7105)
- [clippy: fix `redundant_closure` for `vec![]` macro in a closure with arguments](https://github.com/rust-lang/rust-clippy/pull/7263)
- [clippy: don't lint `multiple_inherent_impl` with generic arguments](https://github.com/rust-lang/rust-clippy/pull/7089)
- [clippy: early return from `LintPass` registration when collecting metadata](https://github.com/rust-lang/rust-clippy/pull/7253)
- [clippy: adding the default lint level to the metadata collection](https://github.com/rust-lang/rust-clippy/pull/7246)

## Rust Compiler Performance Triage

一个安静的星期。一些 PR 也有性能运行，但是尽管如此，更改仍被合并。同样，我们仍然存在某些基准噪声的问题。

分流由 **@rylev**。修订范围：[25a277..cdbe2](https://perf.rust-lang.org/?start=25a277f03df7e44643ddfcc240d034409cb2f505&end=cdbe2888979bb8797b05f0d58a6f6e60753983d2&absolute=false&stat=instructions%3Au)

2 个退步，2 个改进，1 个混合 0 个汇总

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-05-25.md)。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [A new prelude for the 2021 edition (trait-only edition)](https://github.com/rust-lang/rfcs/pull/3114)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

* \[disposition: merge] [RFC: 2021 Edition](https://github.com/rust-lang/rfcs/pull/3085)
* \[disposition: merge] [RFC: Overconstraining and omitting unsafe in impls of unsafe trait methods](https://github.com/rust-lang/rfcs/pull/2316)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [rustc: Allow safe #[target_feature] on wasm](https://github.com/rust-lang/rust/pull/84988)
- \[disposition: merge] [Show test type during prints](https://github.com/rust-lang/rust/pull/84863)
- \[disposition: merge] [Tracking Issue for VecDeque binary search functions](https://github.com/rust-lang/rust/issues/78021)
- \[disposition: merge] [Tracking issue for WebAssembly SIMD support](https://github.com/rust-lang/rust/issues/74372)
- \[disposition: merge] [Use try_reserve in Vec's io::Write](https://github.com/rust-lang/rust/pull/84612)

## New RFCs

- [ArrayBuilder struct for safe/efficient dynamic array initialisation](https://github.com/rust-lang/rfcs/pull/3131)
- [RFC: I/O Safety](https://github.com/rust-lang/rfcs/pull/3128)
- [A Cargo profile option trim-path to sanitise absolute paths](https://github.com/rust-lang/rfcs/pull/3127)

# Quote of the Week

好的，您想要它。我们来看完整的 meta：

> 这次有两个箱子和一个引用句，虽然不多，但是还可以。继续保持下去，伙计们！

– [llogiq on reddit](https://www.reddit.com/r/rust/comments/ngp41e/this_week_in_rust_391/gysis5e)

Thanks to [Patrice Peterson](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1051) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/nly298/this_week_in_rust_392/)</small>
