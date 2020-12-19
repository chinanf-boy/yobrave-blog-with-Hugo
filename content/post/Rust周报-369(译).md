---
title: "Rust周报 369(译)"
date: 2020-12-19T23:06:54+08:00
tags: ["week"]
description: "螃蟹-Rust周报-369"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-12-16
- [原文：369 期](https://this-week-in-rust.org/blog/2020/12/16/this-week-in-rust-369/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [关于 non-poisoning Mutex 和 RwLock 实现的调查](https://blog.rust-lang.org/2020/12/11/lock-poisoning-survey.html)
- [Foundation Conversation 下一站](https://blog.rust-lang.org/2020/12/14/Next-steps-for-the-foundation-conversation.html)
- [Rust Survey 2020 Results](https://blog.rust-lang.org/2020/12/16/rust-survey-2020.html)
- \[内部] [changes to rust compiler team](https://blog.rust-lang.org/inside-rust/2020/12/14/changes-to-compiler-team.html)

### Newsletters

- [This Month in Rust OSDev (November 2020)](https://rust-osdev.com/this-month/2020-11/)

### Tooling

- [IntelliJ Rust Changelog #137](https://intellij-rust.github.io/2020/12/14/changelog-137.html)
- [Rust Analyzer Changelog #55](https://rust-analyzer.github.io/thisweek/2020/12/14/changelog-55.html)
- [Knurling-rs Changelog #10](https://ferrous-systems.com/blog/knurling-changelog-10/)
- [These Months in explaine.rs](https://jrvidal.github.io/explaine.rs/blog/these-months-in-explainers.html)
- [Cargo2nix 0.9.0 release notes](https://github.com/cargo2nix/cargo2nix/releases/tag/v0.9.0)

### Observations/Thoughts

- [FFI-Safe 多态性: Thin Trait Objects](https://adventures.michaelfbryan.com/posts/ffi-safe-polymorphism-in-rust/)
- [Adding BPF target support to the Rust compiler](https://confused.ai/posts/rust-bpf-target)
- [Why Rust 有一个美好未来 in the Cloud](https://www.qovery.com/blog/why-rust-has-a-bright-future-in-the-cloud)
- [Closures: Magic Functions](https://rustyyato.github.io/rust/syntactic/sugar/2019/01/17/Closures-Magic-Functions.html)
- [Notes on cross-compiling Rust](https://john-millikin.com/notes-on-cross-compiling-rust)
- [Polymorphism in Rust: Enums vs Traits](https://www.mattkennedy.io/blog/rust_polymorphism/)
- [Beyond R and Python: Rust for Science](https://scie.nz/rust/)
- [Pointers 是复杂的 II, 或者说: 我们需要更好的语言规范](https://www.ralfj.de/blog/2020/12/14/provenance.html)
- [Serde tricks: 来自重构 rspotify 的学习经验](https://0x709394.me/Serde-tricks)
- [Notes On Lock Poisoning](https://matklad.github.io/2020/12/12/notes-on-lock-poisoning.html)
- [我在尽我之能，尝试写出最快的排序算法... in Rust](https://danielvz.cl/blog/fast-rust.html)
- [Still Rusting - One Year Later](https://deislabs.io/posts/still-rusting-one-year-later/)
- [6 大原则：构建健全，灵活的共享数据 Apps with Rust & MongoDB](https://developer.mongodb.com/article/six-principles-building-robust-flexible-shared-data-applications)
- \[视频] [The Unsafe Chronicles: Exhibit A: Aliasing Boxes](https://youtu.be/EY7Wi9fV5bk)

### Rust Walkthroughs

- [Make A Language - Part Fourteen: Comments](https://arzg.github.io/lang/14/)
- [Make A Language - Part Fifteen: Markers](https://arzg.github.io/lang/15/)
- [Rust, Python and Fish](https://benjamin.computer/posts/2020-12-12-rust-python.html)
- [国际象棋游戏 in Rust using Bevy](https://caballerocoll.com/blog/bevy-chess-tutorial/)
- [Rust on the BBC micro:bit](https://blog.drogue.io/rust-and-microbit/)
- [Developing 智能合约 with ink!](https://dev.to/yangwao/developing-smart-contracts-with-ink-4g72)
- [Learn SixtyFPS: 记忆游戏教程 (Rust)](https://sixtyfps.io/blog/memory-game-tutorial.html)
- [Aiming for 类型的正确性](https://fasterthanli.me/articles/aiming-for-correctness-with-types)
- [Zero to Production in Rust #6: Using Types 去确保 域名不变原则](https://www.lpalmieri.com/posts/2020-12-11-zero-to-production-6-domain-modelling/)
- [分发 Rust Analyzer with Nix and Cargo2nix](https://github.com/cargo2nix/cargo2nix/tree/master/examples/4-independent-packaging)
- \[PL] [crabbybird #4 generowanie świata gry – cześć ii](https://postacnormalna.pl/crabbybird-4-generowanie-swiata-gry-czesc-ii/)
- \[视频] [how oso built a runtime reflection library for rust](https://youtu.be/J7Aosp1Uauo)
- \[视频] [implementing rust's vec from scratch](https://youtu.be/3OL95gZgPWA)
- \[RU] \[video] [Rust: Not as hard as you think / Russian Rust Online Meetup](https://www.youtube.com/watch?v=yCrc5BwZrtw)

### Project Updates

- [These Months in explaine.rs](https://jrvidal.github.io/explaine.rs/blog/these-months-in-explainers.html)
- [Sequoia PGP](https://www.sequoia-pgp.org/)发布 [version 1.0](https://sequoia-pgp.org/blog/2020/12/16/202012-1.0/)
- [将设备链接到区块链 with Léger](http://www.cyrilfougeray.com/2020/12/14/leger-rust-wallet-1.html)

### Miscellaneous

- [信号组 Calls are powered by Rust](https://www.reddit.com/r/rust/comments/kdo06l/signal_group_calls_are_powered_by_rust/)
- [Rust's Option in One Figure](https://www.reddit.com/r/rust/comments/kdfb9k/rusts_option_in_one_figure/)
- [Authors of "Programming Rust 2nd Edition" 有幽默感](https://www.reddit.com/r/rust/comments/kcou9c/authors_of_programming_rust_2nd_edition_have_a/)
- [Rotating the compiler team leads](https://smallcultfollowing.com/babysteps/blog/2020/12/11/rotating-the-compiler-team-leads/)
- [Debug Rust on PineCone BL602 with VSCode and GDB](https://lupyuen.github.io/articles/debug)
- \[RU] \[audio] [SitCast#32 - Эх, Rust, да ещё Rust…](https://www.youtube.com/watch?v=w99C9heBWHE&feature=youtu.be)

# Crate of the Week

这周的箱子是[thermite](https://github.com/raygon-renderer/thermite)，一个 SIMD 数组结构算法库。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/857)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [scaphandre: several help wanted issues](https://github.com/hubblo-org/scaphandre/issues)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

有 300 个拉取请求[在上周合并] [merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-12-07..2020-12-14

- [fixes to Rust coverage](https://github.com/rust-lang/rust/pull/79818)
- [在增量模式中，正确 re-use def path hash](https://github.com/rust-lang/rust/pull/79721)
- [add some `core::cmp::Ordering` helpers](https://github.com/rust-lang/rust/pull/79656)
- [构成一些 `MaybeUninit` 方法](https://github.com/rust-lang/rust/pull/79621)
- [Windows TLS: `ManuallyDrop` instead of `mem::forget`](https://github.com/rust-lang/rust/pull/79893)
- [使用 `is_write_vectored`，去优化 `write_vectored` 实现 for `BufWriter`](https://github.com/rust-lang/rust/pull/78768)
- [通过使用 `Pin`，强制 no-move rule of `ReentrantMutex`，和 fix UB in stdio](https://github.com/rust-lang/rust/pull/77801)
- [hashbrown: enable specialization with aHash](https://github.com/rust-lang/hashbrown/pull/207)
- [future: `SinkExt::feed`](https://github.com/rust-lang/futures-rs/pull/2155)
- [futures-util: 从 pin-project 迁移到 pin-project-lite](https://github.com/rust-lang/futures-rs/pull/2273)
- [cargo: 对一个目录 rerun-if-changed](https://github.com/rust-lang/cargo/pull/8973)
- [cargo: 处理 fs issue in `cargo publish`](https://github.com/rust-lang/cargo/pull/8950)
- [clippy: add MSRV to more lints](https://github.com/rust-lang/rust-clippy/pull/6424)
- [rustfmt: 在一个空 where 子句后，不强行添加一个新行](https://github.com/rust-lang/rustfmt/pull/4557)

## Rust Compiler Performance Triage

- [2020-12-15](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-15.md)：6 个退步，1 个改进，2 个混合

这周，有相当多的小的退步。大部分要么是针对变更的修复，这些变更在前几周获得了较大的性能胜利，要么是较小的性能损失，因为已经有了计划来弥补这些损失。

分类由 @rylev 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-15.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: 添加 `target_abi` 配置](https://github.com/rust-lang/rfcs/pull/2992)
- [added secret types rfc](https://github.com/rust-lang/rfcs/pull/2859)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [implement `from<char>` for u64 and u128.](https://github.com/rust-lang/rust/pull/79502)
- \[处置：合并] [稳定化：`unsafe_cell_get_mut`](https://github.com/rust-lang/rust/pull/79485)
- \[处置：合并] [move `{f32,f64}::clamp` to core](https://github.com/rust-lang/rust/pull/79473)
- \[处置：合并] [稳定化：all stable methods of `ipv4addr`, `ipv6addr` and `ipaddr` as const](https://github.com/rust-lang/rust/pull/79342)
- \[处置：合并] [确认`[CONST; N]`是稳定](https://github.com/rust-lang/rust/pull/79270)
- \[处置：合并] [弃用 atomic compare_and_swap method](https://github.com/rust-lang/rust/pull/79261)
- \[处置：合并] [稳定化：`core::slice::fill`](https://github.com/rust-lang/rust/pull/79213)
- \[处置：关闭] [made matches! more useful by adding mapping support](https://github.com/rust-lang/rust/pull/79188)
- \[处置：合并] [稳定化：`#![feature(min_const_generics)]`](https://github.com/rust-lang/rust/pull/79135)
- \[处置：合并] [添加 `impl Div<NonZeroU{0}> for u{0}`，这不能 panic](https://github.com/rust-lang/rust/pull/79134)
- \[处置：合并] [passes: 禁止在泛型参数上的无效 attrs](https://github.com/rust-lang/rust/pull/79073)
- \[处置：合并] [稳定化：deque_range](https://github.com/rust-lang/rust/pull/79022)
- \[处置：合并] [rename `overlapping_patterns` lint](https://github.com/rust-lang/rust/pull/78242)
- \[处置：合并] [稳定化：or_insert_with_key](https://github.com/rust-lang/rust/pull/78083)
- \[处置：关闭] [添加 `Default` 内置实现 for function definition and… ](https://github.com/rust-lang/rust/pull/77688)
- \[处置：合并] [mark `-1` as an available niche for file descriptors](https://github.com/rust-lang/rust/pull/74699)
- \[处置：合并] [稳定化：the Wake trait](https://github.com/rust-lang/rust/pull/74304)
- \[处置：合并] [跟踪问题：map_ok and map_err method for `Poll<Option<Result<T, E>>>`](https://github.com/rust-lang/rust/issues/63514)

## New RFCs

- [Add min_target_api_version cfg predicate](https://github.com/rust-lang/rfcs/pull/3036)
- [Cargo: providing artifacts (for artifact dependencies) via build.rs](https://github.com/rust-lang/rfcs/pull/3035)

# Quote of the Week

> 工程并不是要“不犯错误”。工程学是关于设计确保错误更少发生的系统。
>
> Rust 就是这样的系统。

– [amos on his blog](https://fasterthanli.me/articles/aiming-for-correctness-with-types)

Thanks to [Joshua Nelson](https://users.rust-lang.org/t/twir-quote-of-the-week/328/972) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://this-week-in-rust.org/blog/2020/12/16/this-week-in-rust-369/)</small>
