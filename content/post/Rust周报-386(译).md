---
title: "Rust周报 386(译)"
date: 2021-04-16T20:01:04+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-385"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2021-04-14
- [原文：386 期](https://this-week-in-rust.org/blog/2021/04/14/this-week-in-rust-386/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有论文/研究项目。

### Official

- [Brainstorming Async Rust's Shiny Future](https://blog.rust-lang.org/2021/04/14/async-vision-doc-shiny-future.html)
- \[Foundation] [introducing florian gilcher](https://foundation.rust-lang.org/posts/2021-04-08-introducing-florian-gilcher/)
- \[Foundation] [introducing peixin hou](https://foundation.rust-lang.org/posts/2021-04-08-introducing-peixin-hou/)

### Newsletters

- [This Month in Rust GameDev #20 - March 2021](https://gamedev.rs/news/020/)

### Project/Tooling Updates

- [Progress report on rustc_codegen_cranelift (April 2021)](https://bjorn3.github.io/2021/04/13/progress-report-april-2021.html)
- [IntelliJ Rust: Updates for 2021.1](https://blog.jetbrains.com/rust/2021/04/08/intellij-rust-updates-for-2021-1/)
- [IntelliJ Rust Changelog #145](https://intellij-rust.github.io/2021/04/12/changelog-145.html)
- [rust-analyzer Changelog #72](https://rust-analyzer.github.io/thisweek/2021/04/12/changelog-72.html)
- [Ballista has been donated to the Apache Arrow project](https://www.reddit.com/r/rust/comments/mo63t3/ballista_has_been_donated_to_the_apache_arrow/)

### Observations/Thoughts

- [Rust in Production: MeiliSearch](https://serokell.io/blog/rust-in-production-meilisearch)
- [Rust 是给专业人士的](https://gregoryszorc.com/blog/2021/04/13/rust-is-for-professionals/)
- [Rust 是 async 型语言 ？是，还是不是](https://morestina.net/blog/1686/rust-async-is-colored)
- [Using Rust for 科学型计算应用: Learning from Past Experiences](https://blog.esciencecenter.nl/using-rust-for-scientific-numerical-applications-learning-from-past-experiences-798665d9f9f0)
- [PlaintDB Servers - another milestone reached](https://dev.to/ecton/plaintdb-serves-another-milestone-reached-kl3)
- [Why Rust for Robots?](https://dev.to/tangramvision/why-rust-for-robots-4nmd)
- [Integrating const-generics to nalgebra 0.26](https://www.dimforge.com/blog/2021/04/12/integrating-const-generics-to-nalgebra/)
- \[podcast] [building with rust: tim mcnamara on rust in action](https://anchor.fm/building-with-rust/episodes/Building-with-Rust-Tim-McNamara-on-Rust-in-Action-eugoal/a-a1ptlh) [\[transcript\]](https://github.com/seanchen1991/building-with-rust/blob/main/transcripts/002.md)

### Rust Walkthroughs

- [构建 端对端 加密信息应用, with the Ockam crate, in this step by step guide.](https://github.com/ockam-network/ockam/tree/develop/documentation/guides/rust/get-started#readme)
- [Introducing easy-cast](https://kas-gui.github.io/blog/easy-cast.html)
- [Why Rust strings seem hard](https://www.brandons.me/blog/why-rust-strings-seem-hard)
- [Rust shenanigans: 返回类型的多态性](https://loige.co/rust-shenanigans-return-type-polymorphism/)
- [Writing Neovim plugins in Rust](https://blog.usejournal.com/a-detailed-guide-to-writing-your-first-neovim-plugin-in-rust-a81604c606b1)
- [一个 零成本 linked list in Rust](https://aloso.github.io/2021/04/12/linked-list.html)
- [Integrating Rust into Python](https://www.vortexa.com/insight/integrating-rust-into-python)
- [Setting Up a gRPC Protobuf Server With Tonic](https://dev.to/transienterror/setting-up-a-grpc-protobuf-server-with-tonic-218e)
- [Getting started with Kafka and Rust: Part 2](https://dev.to/abhirockzz/getting-started-with-kafka-and-rust-part-2-354f)
- [Rust lib error management, multiple enum approach](http://www.tglman.com/posts/rust_lib_error_management.html)
- [Asynchronous streams in Rust (part 2) - Cancelling expired requests](https://gendignoux.com/blog/2021/04/08/rust-async-streams-futures-part2.html)
- \[series] [engaging warp: rest api with rust](https://dev.to/rogertorres/series/12179)
- \[ZH] \[series] [Build GraphQL services based on Async Rust using tide + async-graphql + mongodb (基于 Async Rust 构建 GraphQL 服务，使用 tide + async-graphql + mongodb) - Part 1](<https://blog.budshome.com/budshome/gou-jian-rust-yi-bu-graphql-fu-wu-:ji-yu-tide-+-async-graphql-+-mongodb(1)--qi-bu-ji-crate-xuan-ze>)
- \[video] [flocking boids in rust: with piston vs tetra vs amethyst vs bevy](https://youtu.be/e0n9v565HR4)

### Miscellaneous

- [Rust, not Firefox, 才是 Mozilla's greatest industry contribution](https://www.techrepublic.com/article/rust-not-firefox-is-mozillas-greatest-industry-contribution/)
- [AWS's Shane Miller to head the newly created Rust Foundation](https://www.zdnet.com/article/awss-shane-miller-to-head-the-newly-created-rust-foundation/)
- [\[RFC\] Rust support for Linux kernel](https://lkml.org/lkml/2021/4/14/1023)
- [A look at LLVM - comparing clamp implementations](https://secret.club/2021/04/09/std-clamp.html)
- [Tokio-uring 设计协议](https://www.reddit.com/r/rust/comments/mmz1sg/tokiouring_design_proposal/)
- [Google is now writing low-level Android code in Rust](https://arstechnica.com/gadgets/2021/04/google-is-now-writing-low-level-android-code-in-rust/)
- [Rust in the Linux kernel](https://security.googleblog.com/2021/04/rust-in-linux-kernel.html)

# Crate of the Week

这周的箱子是[dipa](https://docs.rs/dipa)，用于导出 Rust 数据结构的增量编码的箱子（对同结构数据下的不同值，做出差异化描述，减少数据量）。

尽管缺少提议，llogiq 对他的选择感到非常满意。

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区中的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 329 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-04-05..2021-04-12

- [allow specifying alignment for functions](https://github.com/rust-lang/rust/pull/81234)
- [修复 handling of `--output-format json` flag](https://github.com/rust-lang/rust/pull/82497)
- [不要告诉用户 to use a nightly flag on the stable channel](https://github.com/rust-lang/rust/pull/84055)
- [改善 trait/impl method 差异错误](https://github.com/rust-lang/rust/pull/84014)
- [交代 `ExprKind::Block` when suggesting .into() and deref](https://github.com/rust-lang/rust/pull/83952)
- [let `#[allow(unstable_name_collisions)]` work for things other than function](https://github.com/rust-lang/rust/pull/81922)
- [add `bad_asm_style` to `HardwiredLints`](https://github.com/rust-lang/rust/pull/84068)
- [改善 debuginfo for closures and async functions on Windows MSVC](https://github.com/rust-lang/rust/pull/83941)
- [use `AnonConst` for `asm!` constants](https://github.com/rust-lang/rust/pull/83916)
- [add `FromIterator` and `IntoIterator` impls for `ThinVec`](https://github.com/rust-lang/rust/pull/83821)
- [add `strong_count` mutation methods to `Rc`](https://github.com/rust-lang/rust/pull/83476)
- [use a `SmallVec` in `impl_or_trait_item`](https://github.com/rust-lang/rust/pull/83932)
- [use `FromStr` trait for number option parsing](https://github.com/rust-lang/rust/pull/82483)
- [减少由 ui-tests 产生的线程](https://github.com/rust-lang/rust/pull/81942)
- [core: disable `ptr::swap_nonoverlapping_one`'s block optimization on SPIR-V](https://github.com/rust-lang/rust/pull/83019)
- [稳定化： `cmp_min_max_by`](https://github.com/rust-lang/rust/pull/81047)
- [稳定化： `peekable_peek_mut`](https://github.com/rust-lang/rust/pull/81938)
- [稳定化： `duration_saturating_ops`](https://github.com/rust-lang/rust/pull/84090)
- [稳定化： `atomic_fetch_update` methods on `AtomicBool` and `AtomicPtr`](https://github.com/rust-lang/rust/pull/84085)
- [fix `HashMap`/`HashSet` LLDB pretty-printer after hashbrown](https://github.com/rust-lang/rust/pull/83920)
- [futures: move `try_fold`, `try_for_each`, and `try_for_each_concurrent` to `StreamExt`](https://github.com/rust-lang/futures-rs/pull/2342)
- [futures: add `stream::Peekable::`{`next_if`, `next_if_eq`}](https://github.com/rust-lang/futures-rs/pull/2379)
- [fix perf regression in `rustdoc::bare_urls`](https://github.com/rust-lang/rust/pull/84034)
- [rustdoc: cleanup handling of associated items for intra-doc links](https://github.com/rust-lang/rust/pull/83849)
- [rustdoc: sort search index items for compression](https://github.com/rust-lang/rust/pull/83835)
- [rustdoc: store intra-doc links in Cache instead of on items directly](https://github.com/rust-lang/rust/pull/83833)
- [rustdoc: use `ThinVec` in a few places](https://github.com/rust-lang/rust/pull/83828)
- [rustdoc: merge idents when generating source content](https://github.com/rust-lang/rust/pull/83992)
- [clippy: fix false positive in `single_component_path_imports` lint](https://github.com/rust-lang/rust-clippy/pull/6905)
- [clippy: fix `explicit_into_iter_loop`](https://github.com/rust-lang/rust-clippy/pull/6982)
- [clippy: consider mutability on `useless_vec` suggestions](https://github.com/rust-lang/rust-clippy/pull/7036)
- [clippy: fix `missing_panics_doc` not detecting `assert_eq!` and `assert_ne!`](https://github.com/rust-lang/rust-clippy/pull/7029)

## Rust Compiler Performance Triage

整个星期都很安静。

整理由 **@simulacrum** 完成。修订范围：[d322385..5258a74](https://perf.rust-lang.org/?start=d32238532138485c80db4f2cd596372bce214e00&end=5258a74c887f8ae14717e1f98b652b470877ce4e&absolute=false&stat=instructions%3Au)

1 个退步，0 个改进，0 个混合

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC: -C export-executable-symbols](https://github.com/rust-lang/rfcs/pull/2841)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[disposition: merge] [RFC: 保留前缀 prefixes in the 2021 edition](https://github.com/rust-lang/rfcs/pull/3101)
- \[disposition: merge] [try_trait_v2: A new design for the ? desugaring](https://github.com/rust-lang/rfcs/pull/3058)
- \[disposition: merge] [add const-ub RFC](https://github.com/rust-lang/rfcs/pull/3016)
- \[disposition: merge] [Target tier policy](https://github.com/rust-lang/rfcs/pull/2803)
- \[disposition: postpone] [RFC: Custom DSTs](https://github.com/rust-lang/rfcs/pull/2594)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Cautiously add IntoIterator for arrays by value](https://github.com/rust-lang/rust/pull/84147)
- \[disposition: merge] [Stabilize Duration::MAX](https://github.com/rust-lang/rust/pull/84120)
- \[disposition: merge] [Stabilize `impl From<[(K, V); N]> for HashMap`](https://github.com/rust-lang/rust/pull/84111)
- \[disposition: merge] [Allow setting `target_family` to multiple values, and implement `target_family="wasm"`](https://github.com/rust-lang/rust/pull/84072)
- \[disposition: merge] [Stabilize pat2015 but leave :pat2021 gated](https://github.com/rust-lang/rust/pull/83386)
- \[disposition: merge] [Update BARE_TRAIT_OBJECT and ELLIPSIS_INCLUSIVE_RANGE_PATTERNS to errors in Rust 2021](https://github.com/rust-lang/rust/pull/83213)
- \[disposition: merge] [Tracking Issue for 'ordering helpers'](https://github.com/rust-lang/rust/issues/79885)
- \[disposition: merge] [Tracking issue for array::from_ref and array::from_mut](https://github.com/rust-lang/rust/issues/77101)
- \[disposition: merge] [Tracking issue for x86 bittest intrinsics](https://github.com/rust-lang/rust/issues/59414)
- \[disposition: merge] [Tracking issue for RFC 2457, "Allow non-ASCII identifiers"](https://github.com/rust-lang/rust/issues/55467)

## New RFCs

- [`#[derive(Default)]` on enums with a `#[default]` attribute #3107](https://github.com/rust-lang/rfcs/pull/3107)
- [添加 :value macro 捕获指示符](https://github.com/rust-lang/rfcs/pull/3106)

# Quote of the Week

> 我每天实际看到的\[rust\] 是，我可以调用那些其他人编写的代码，且不会感到意外。

```rust
async fn verify_signature(token: &Jwt) -> Result<Claims, VerificationError>
```

> 查看上面的代码段：
>
> - 我知道我的 JWT token 不可变, just accessed ( `&` );
> - 我知道该函数将会执行一些 I/O ( `async` ) 的事情;
> - 我知道该函数可能会失败 ( `Result` );
> - 我知道它的失败结果 ( `VerificationError` ).

– [Luca Palmieri on Twitter](https://twitter.com/algo_luca/status/1380928103019597827)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1031) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/mr4eg0/this_week_in_rust_386/)</small>
