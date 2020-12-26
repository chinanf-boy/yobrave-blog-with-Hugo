---
title: "Rust周报 370(译)"
date: 2020-12-27T00:15:43+08:00
tags: ["week"]
description: "螃蟹-Rust周报-370"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-12-23
- [原文：370 期](https://this-week-in-rust.org/blog/2020/12/23/this-week-in-rust-370/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有官方博客文章或新闻通讯。

### Project/Tooling Updates

- [Rust Analyzer Changelog #56](https://rust-analyzer.github.io/thisweek/2020/12/21/changelog-56.html)
- [Knurling-rs Changelog #11](https://ferrous-systems.com/blog/knurling-changelog-11/)
- [Bevy 0.4](https://bevyengine.org/news/bevy-0-4/)
- [Announcing Tokio 1.0](https://tokio.rs/blog/2020-12-tokio-1-0)
- [hyper 0.14](https://seanmonstar.com/post/638320652536922112/hyper-v014)
- [RustFFT 5.0.0.experimental-1: Now faster than FFTW!](https://users.rust-lang.org/t/rustfft-5-0-0-experimental-1-now-faster-than-fftw/53049)
- [Allsorts Font Shaping Engine Year in Review](https://yeslogic.com/blog/allsorts-rust-font-shaping-engine-2020-review/)

### Observations/Thoughts

- [Looking back on 2020](http://smallcultfollowing.com/babysteps/blog/2020/12/18/looking-back-on-2020/)
- [I rewrote a Clojure tool in Rust](https://timofreiberg.github.io/clojure-vs-rust/)
- [🦀 Rust Reviewed: 是合理的炒作吗? 🦀](https://dev.to/somedood/rust-reviewed-is-the-hype-justified-1pa1)
- [Three things I wish I'd known learning Rust](https://www.darkcoding.net/software/three-things-i-wish-id-known-learning-rust/)
- [Rust in a KDE Project](https://jbbgameich.github.io/misc/2020/12/21/rust-in-a-kde-project.html)
- [First 3 Months of Rust](https://www.reddit.com/r/rust/comments/khrt69/first_3_months_of_rust/)
- [How rust changed and saved my life](https://www.reddit.com/r/rust/comments/khlln4/how_rust_changed_and_saved_my_life/)
- [Rust 后端应用的构建问题 in 2020](https://blog.0xfa.be/building-a-backend-app-in-rust/)
- [接触 (当前的) Rust 类型系统上的限制 with asynchronous programming](https://gendignoux.com/blog/2020/12/17/rust-async-type-system-limits.html)
- \[音频] [Rust Gamedev Podcast - interview with fedor logachev](https://rustgamedev.com/episodes/interview-with-fedor-logachev)

### Rust Walkthroughs

- [Build your own async primitive](https://tweedegolf.nl/blog/50/build-your-own-async-primitive)
- [Make A Language - Part Sixteen: Refactoring](https://arzg.github.io/lang/16/)
- [Make A Language - Part Seventeen: Crates](https://arzg.github.io/lang/17/)
- [Make A Language - Part Eighteen: Errors](https://arzg.github.io/lang/18/)
- [一个简单的神经网络 (\<200LoC, Rust)](https://explog.in/notes/funnn.html)
- [Rocket Tutorial 05: 强制邮件的唯一性](https://dev.to/davidedelpapa/rocket-tutorial-05-enforcing-uniqueness-of-emails-136j)
- [终端复用器 with Rust, Async, and Actors - Part 2](https://implaustin.hashnode.dev/how-to-write-a-terminal-multiplexer-with-rust-async-and-actors-part-2)
- [Learning Rust: static trait bounds](https://codeandbitters.com/static-trait-bound/)
- [Async: What is blocking?](https://ryhl.io/blog/async-what-is-blocking/)
- [安排计划 in Rust](https://blog.knoldus.com/schedule-the-program-in-rust/)
- \[视频] [generic associated types - learn rust](https://www.youtube.com/watch?v=JwG-Wa7dOBU&feature=youtu.be)
- \[视频] [series] [Rust Tutorial](https://youtube.com/playlist?list=PLLqEtX6ql2EyPAZ1M2_C0GgVd4A-_L4_5)

### Miscellaneous

- [A Potential Rust Learning Project Group](https://internals.rust-lang.org/t/a-potential-rust-learning-project-group/13620)
- [Watch all of RustFest Global](https://blog.rustfest.eu/watch-all-of-rustfest)
- [When to use Rust?](https://www.reddit.com/r/rust/comments/kgw8bz/when_to_use_rust/)
- [Hyper 支持, 已合并到 curl master](https://www.reddit.com/r/rust/comments/kgcye2/hyper_support_is_merged_to_curl_master/)
- [Just wanted to say thanks to the Rust community!](https://www.reddit.com/r/rust/comments/kfiaqn/just_wanted_to_say_thanks_to_the_rust_community/)

# Crate of the Week

这周的箱子是[RustFFT](https://github.com/ejmahler/RustFFT)， 一种*快速*的傅立叶变换库，名不虚传。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/863)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [The CCC Rustaceans are looking for artwork for badges](https://users.rust-lang.org/t/rc3-assembly-ccc-congress/50283/3)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 292 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-12-14..2020-12-21

- [默认跳过 `dsymutil` for compiler bootstrap](https://github.com/rust-lang/rust/pull/80213)
- [implement if-let match guards](https://github.com/rust-lang/rust/pull/79051)
- [or_patterns: 实现 `:pat` 专用版本行为](https://github.com/rust-lang/rust/pull/80100)
- [improve and fix diagnostics（诊断） of exhaustiveness（详尽性） checking](https://github.com/rust-lang/rust/pull/80104)
- [优雅地处理，误按 `->` as `=>` in function return type](https://github.com/rust-lang/rust/pull/77035)
- [处理 desugaring in impl trait bound suggestion](https://github.com/rust-lang/rust/pull/80211)
- [在 break 表达式中，当错误拼写 值 lable 时，强化错误信息](https://github.com/rust-lang/rust/pull/80023)
- [always run intrinsics lowering pass](https://github.com/rust-lang/rust/pull/80040)
- [mir-opt: allow debuginfo to be generated for a constant or a Place](https://github.com/rust-lang/rust/pull/73210)
- [在 impl blocks 数量上，将 quadratic time 转换为 linear time](https://github.com/rust-lang/rust/pull/78317)
- [`MaybeUninit::copy`/`clone_from_slice`](https://github.com/rust-lang/rust/pull/79607)
- [稳定化：`unsafe_cell_get_mut`](https://github.com/rust-lang/rust/pull/79485)
- [move {`f32`, `f64`}`::clamp` to `core`](https://github.com/rust-lang/rust/pull/79473)
- [稳定化：all stable methods of `Ipv4Addr`, `Ipv6Addr` and `IpAddr` as const](https://github.com/rust-lang/rust/pull/79342)
- [稳定化：`or_insert_with_key`](https://github.com/rust-lang/rust/pull/78083)
- [add fast futex-based（快速同步（互斥）机制） thread parker for Windows](https://github.com/rust-lang/rust/pull/77618)
- [优化：`bool`'s `PartialOrd` impl](https://github.com/rust-lang/rust/pull/80035)
- [修复溢出错误，当将 ZST `Vec` 转换到 `VecDeque`](https://github.com/rust-lang/rust/pull/80003)
- [use pointer type in `AtomicPtr::swap` implementation](https://github.com/rust-lang/rust/pull/80236)
- [stdarch: 将代码，从 constify macros 移出](https://github.com/rust-lang/stdarch/pull/973)
- [稳定化： cargo's new feature resolver](https://github.com/rust-lang/rfcs/pull/2957)

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [稳定化： Cargo's new feature resolver](https://github.com/rust-lang/rfcs/pull/2957)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [Infallible promotion](https://github.com/rust-lang/rfcs/pull/3027)
- \[处置：推迟] [Opt-in Stable Trait VTables](https://github.com/rust-lang/rfcs/pull/2955)
- \[处置：合并] [RFC: Serve crates-io registry over HTTP as static files](https://github.com/rust-lang/rfcs/pull/2789)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： Arc::{increment,decrement}\_strong_count](https://github.com/rust-lang/rust/pull/79285)
- \[处置：合并] [稳定化： `#![feature(min_const_generics)]`](https://github.com/rust-lang/rust/pull/79135)
- \[处置：合并] [Add `impl Div<NonZeroU{0}> for u{0}` which cannot panic](https://github.com/rust-lang/rust/pull/79134)

## New RFCs

- [Primitive enum conversion reform](https://github.com/rust-lang/rfcs/pull/3040)
- [Rust 2021 Roadmap](https://github.com/rust-lang/rfcs/pull/3037)

# Quote of the Week

> 在优化之前，我花了一些时间才让事情工作。这场旅程最重要的突破是，我意识到我所有的 python 变量都是`Rc<RefCell<_>>`，因此我必须尽可能，让变量变得不那么复杂，而这已经是一个很大的优化。如果 1/10 的 Rust 变量必须如此复杂，那会感觉不好，但也表示有 90％ 变得更好。因此，如果有 1/50 的机会，使代码简单读取并维护，那就去做吧！

– [Eh2406 on /r/rust](https://www.reddit.com/r/rust/comments/kdayix/i_need_some_advice_about_heap_usage_with_rust/gfvtcwx)

Thanks to [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/977) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/kj9mcb/this_week_in_rust_370/)</small>
