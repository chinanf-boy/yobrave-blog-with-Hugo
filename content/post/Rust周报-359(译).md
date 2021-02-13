---
title: "Rust周报 359(译)"
date: 2020-10-08T14:03:46+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-359"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-10-07
- [原文：359 期](https://this-week-in-rust.org/blog/2020/10/07/this-week-in-rust-359/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- \[Inside] [1.47.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2020/10/06/1.47.0-prerelease.html)
- \[Inside] [1.47.0 second pre-release testing](https://blog.rust-lang.org/inside-rust/2020/10/06/1.47.0-prerelease.html)

### Newsletters

- [Rust OSDev (9, 2020) 月刊](https://rust-osdev.com/this-month/2020-09/)
- [Rust in Blockchain Newsletter #16 - Secure Enclaves（大致可翻译为：安全地带） à la Crab（法语：螃蟹）](https://rustinblockchain.org/newsletters/2020-09-30-secure-enclaves-a-la-crab/)
- [Dimforge #1 (10, 2020) 月刊](https://www.dimforge.com/blog/2020/10/01/this-month-in-dimforge/)

### Tooling

- [Rust Analyzer Changelog #45](https://rust-analyzer.github.io/thisweek/2020/10/05/changelog-45.html)
- [IntelliJ Rust Changelog #132](https://intellij-rust.github.io/2020/10/05/changelog-132.html)

### Observations/Thoughts

- [为什么我把 `use` 语句放得到处都是？](https://tarquin-the-brave.github.io/blog/posts/rust_use_statements/)
- [Rust + 树莓派 Tide Clock](https://thefuntastic.com/blog/rust-tide-clock)
- [现，赋予你编写 Slow Rust Code](https://blog.jonstodle.com/youre-allowed-to-write-slow-rust-code/)
- [Rust 遇上 the web - programming 范例的冲突](https://www.jakobmeier.ch/blogging/Rust_on_the_Web.html)
- [动态小组件 草图](https://www.cmyr.net/blog/druid-dynamism.html)
- [后感：创作 JS Library with Rust and Wasm](https://nickb.dev/blog/results-of-authoring-a-js-library-with-rust-and-wasm)
- [Ringbahn III: 深入 drivers](https://without.boats/blog/ringbahn-iii/)
- [Fast Thread Locals In Rust](https://matklad.github.io/2020/10/03/fast-thread-locals-in-rust.html)
- [Formicarium：集群智能](https://gliderkite.github.io/posts/formicarium/)

### Learn Simple Rust

- [Dancing Links In Rust](https://ferrous-systems.com/blog/dlx-in-rust/)
- [入门 nRF52840 in Rust](https://nitschinger.at/Getting-Started-with-the-nRF52840-in-Rust/)
- [That's so Rust!: 智能指针](https://dev.to/imaculate3/that-s-so-rusty-smart-pointers-245l)
- \[视频] [test-based and graphical user interfaces | rust project](https://youtu.be/dK9-oXptFcM)

### Learn More Rust

- [8 大方法：故障排除你的 Rust Build Times](https://medium.com/@jondot/8-steps-for-troubleshooting-your-rust-build-times-2ffc965fd13e)
- [基准测试 Apache Cassandra with Rust](https://pkolaczk.github.io/benchmarking-cassandra/)
- [操作系统开发教程：Rust on the 树莓派](https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials)
- [学习：Embedded Rust with Knurling-rs](https://ferrous-systems.com/blog/knurling-sessions-introduction/)
- [构建一个 天气站机器人](https://blog.kdubovikov.ml/articles/rust/building-a-weather-station-bot)
- [下一代 Rust Web Apps: Towards a Svelte Fulcro in Rust](https://blog.shortepic.com/blog/first/)
- [下一代 Rust Web Apps: TicTacToe in Valerie](https://blog.shortepic.com/blog/second/)
- [下一代 Rust Web Apps: Borrowing From Fulcro for your Rust WASM Spa](https://blog.shortepic.com/blog/third/)
- [制造一个语言 - 第四节: Backtracking](https://arzg.github.io/lang/4/)
- [制造一个语言 - 第五节: Binding Usages](https://arzg.github.io/lang/5/)
- [制造一个语言 - 第六节: Blocks](https://arzg.github.io/lang/6/)
- [制造一个语言 - 第七节: A REPL](https://arzg.github.io/lang/7/)
- \[音讯] [what we've learned porting our apps to windows - Astropad](https://astropad.com/what-weve-learned-porting-our-apps-to-windows/)
- \[视频] [build a discord bot with rust and Serenity](https://www.youtube.com/playlist?list=PLzIwronG0sE5lQCPFP69Ukgz4d9dngaSi)

### Project Updates

- [Headcrab: 9 月 2020 进度报告](https://headcrab.rs/2020/10/01/september-update.html)

### Miscellaneous

- [/r/rust 成为了 Rust 社区搭档， on Discord, Mozilla's Matrix, and Stack Overflow 作为"IRC-like" 实时聊天的场所](https://www.reddit.com/r/rust/comments/j6b03y/rrust_is_partnering_with_the_rust_communities_on/)
- [\[Mesa-dev\] Rust drivers in Mesa](https://lists.freedesktop.org/archives/mesa-dev/2020-October/224639.html)
- [设计一个新的 Rust Class at Stanford: Safety in Systems Programming](https://reberhardt.com/blog/2020/10/05/designing-a-new-class-at-stanford-safety-in-systems-programming.html)
- [内存安全的替代方案](https://github.com/finegeometer/articles/blob/master/memory-safety-alternative.md)

# Call for Blog Posts

Rust 核心团队希望获得社区的意见！如果您还没有，[read the official blog](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)并提交博客文章-它会显示在这里！自征集博客以来，以下是精彩的投稿：

- [Rust 2021: APIs, ORMS and standards](https://medium.com/@v.mishra/rust-2021-apis-orms-and-standards-bfdf3ddc15a0)
- [Rust 2021 - Stability](https://jackh726.github.io/rust/2020/10/01/rust-2021.html)
- [The Rust Organization in 2021](https://tmandry.gitlab.io/blog/posts/rust-2021-organization/)
- [Rust 2021](https://nikhilism.com/post/2020/rust-2021/)
- [Rust 2021: lowering barriers](https://gist.github.com/samsieber/e976664ba333fd8a0b5f3b0ba167cb76#file-rust-2021-md)
- [Rust 2021](https://markentier.tech/posts/2020/10/rust-2021/)
- [The Rust 2021 Experience - Year of the Macro](https://casualhacks.net/blog/2020-10-05/the-rust-2021-experience-macros/)
- [The Rust Project in 2021](https://tmandry.gitlab.io/blog/posts/rust-2021-project/)

# Crate of the Week

这周的箱子是[uniffi](https://github.com/mozilla/uniffi-rs)，是统一的 Rust ffi binding 生成器。

谢谢[mark-i-m](https://users.rust-lang.org/t/crate-of-the-week/2704/823)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [dotenv-linter: Hacktoberfest Issues](https://github.com/dotenv-linter/dotenv-linter/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest)
- [RustPython: \[CFP\] 实现 \_sre module in Rust](https://github.com/RustPython/RustPython/issues/2258)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 427 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-09-28..2020-10-05

- [LLVM: 处理 rtcGPR64RegClassID in AArch64RegisterBankInfo::getRegBankFromRegClass()](https://github.com/rust-lang/llvm-project/pull/77)
- [修复： AVR stack 损坏 bug](https://github.com/rust-lang/rust/pull/77441)
- [添加： `aarch64-unknown-linux-musl` 支持](https://github.com/rust-lang/rustup/pull/2493)
- [将 Apple SDKROOT 检测操作，推迟到 link time](https://github.com/rust-lang/rust/pull/77202)
- [格式强制为 posix-style quoting，on lld, independent of host platform](https://github.com/rust-lang/rust/pull/77543)
- [添加选项：传递一个自定义的 codegen backend from a driver](https://github.com/rust-lang/rust/pull/76474)
- [绕过 const_item_mutation ，如果 const's type has Drop impl](https://github.com/rust-lang/rust/pull/77251)
- [清除 diagnostics for 算术操作错误](https://github.com/rust-lang/rust/pull/76754)
- [删除重复以及归纳一些 (de/)serializer impls](https://github.com/rust-lang/rust/pull/77261)
- [expand: 在传递`NtIdent`s 到内置宏之前，停止标准化（normalizing）他们](https://github.com/rust-lang/rust/pull/77275)
- [修复：缺失的 diagnostic span for `impl Trait` with const generics, 还有添加对`min_const_generics` 和 `const_generics` 的多种测试](https://github.com/rust-lang/rust/pull/77439)
- [改善 rustdoc 错误，for 失败的 intra-doc link 解析操作](https://github.com/rust-lang/rust/pull/77469)
- [包括 scope id in SocketAddrV6::Display](https://github.com/rust-lang/rust/pull/77426)
- [library: 推进 编译器内置 "mem" feature](https://github.com/rust-lang/rust/pull/77284)
- [活跃分析（关于：unused 分析） for everybody](https://github.com/rust-lang/rust/pull/77281)
- [优化 `IntRange::from_pat`, 然后缩减 `ParamEnv`](https://github.com/rust-lang/rust/pull/77257)
- [翻修 const-checking diagnostics](https://github.com/rust-lang/rust/pull/77354)
- [可能会在任意 aligned 地址，references to ZSTs](https://github.com/rust-lang/rust/pull/77360)
- [移除 `#[rustc_allow_const_fn_ptr]`，和添加 `#![feature(const_fn_fn_ptr_basics)]`](https://github.com/rust-lang/rust/pull/77170)
- [resolve: 禁止 匿名的 const，搭配 non-static lifetimes](https://github.com/rust-lang/rust/pull/76739)
- [chalk: 添加 static lifetime](https://github.com/rust-lang/chalk/pull/617)
- [chalk: implement generators](https://github.com/rust-lang/chalk/pull/593)
- [chalk: 解析不透明的类型 without bounds](https://github.com/rust-lang/chalk/pull/619)
- [chalk: 修复在 recursive solving 期间，失败的 assertion](https://github.com/rust-lang/chalk/pull/613)
- [chalk: 添加基本的类型 with 多个类型参数的支持（情况分析）](https://github.com/rust-lang/chalk/pull/616)
- [`const_item_mutation` lint 不对 指针写入开发](https://github.com/rust-lang/rust/pull/77324)
- [miri: 检查所有的 syscall 参数都是 scalars（参数要够数，只多不少）](https://github.com/rust-lang/miri/pull/1570)
- [添加 Miri backtraces 的支持](https://github.com/rust-lang/backtrace-rs/pull/372)
- [更好的错误信息 for `async` blocks in a const-context](https://github.com/rust-lang/rust/pull/77415)
- [允许 `Abort` terminators in all const-contexts](https://github.com/rust-lang/rust/pull/77512)
- [const evaluatable: 改善 `TooGeneric` 的处理](https://github.com/rust-lang/rust/pull/77303)
- [实现多个 return terminator 优化](https://github.com/rust-lang/rust/pull/74839)
- [不启用 SimplifyArmIdentity mir-opt](https://github.com/rust-lang/rust/pull/77396)
- [让 `handle_alloc_error` 默认 panic (for no_std + liballoc)](https://github.com/rust-lang/rust/pull/76448)
- [将 `AllocRef::by_ref` 改为 `&self`， 而不是 `&mut self`](https://github.com/rust-lang/rust/pull/77289)
- [impl as_ne_bytes() for integers and floats](https://github.com/rust-lang/rust/pull/76610)
- [稳定化：`slice_ptr_range`](https://github.com/rust-lang/rust/pull/77111)
- [添加 sparc-unknown-linux-gnu target 需求的缺失定义](https://github.com/rust-lang/rust/pull/77282)
- [支持少于 8 elements 的 vectors for `simd_select_bitmask`](https://github.com/rust-lang/rust/pull/77504)
- [在一些平台上，unbox mutexes and condvars](https://github.com/rust-lang/rust/pull/77380)
- [使用 futex-based `thread::park`/`unpark` on Linux](https://github.com/rust-lang/rust/pull/76919)
- [使用更少的除法 in display u128/i128](https://github.com/rust-lang/rust/pull/76017)
- [修复一些 `HashMap` and `BTreeMap` iterator types 的 `Debug` 实现](https://github.com/rust-lang/rust/pull/75377)
- [添加 `Iterator::advancie_by` 和 `DoubleEndedIterator::advance_back_by`](https://github.com/rust-lang/rust/pull/76909)
- [后接入 LLVM apfloat 注释到 rustc_apfloat](https://github.com/rust-lang/rust/pull/77368)
- [cargo: 修复 dylib+rlib with LTO.](https://github.com/rust-lang/cargo/pull/8754)
- [抬起 drop-bounds lint from clippy](https://github.com/rust-lang/rust/pull/75699)
- [clippy: 添加 lint for inline assembly syntax style 优先](https://github.com/rust-lang/rust-clippy/pull/6092)
- [clippy: lint for invisible Unicode characters ，除 ZWSP 以外](https://github.com/rust-lang/rust-clippy/pull/6105)

## Rust Compiler Performance Triage

- [2020-10-05](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-05.md)：1 个性能退化，2 个改进，1 个混合

安静的一周。在综合基准上进行了相当大的性能退化，并进行了一些小改进。

[#77023](https://github.com/rust-lang/rust/issues/77023)是一个有趣的案例。它将 slice lengths 的不变量，在`len`函数内，编码为`assume` intrinsic。它似乎导致了较小的编译时速度降低，但是在`check`构建性能（用于生成代码质量的代理）没有提升。实际上，LLVM 文档 [特别不建议](https://llvm.org/docs/LangRef.html#llvm-assume-intrinsic) 过度使用`assume` intrinsic 的情况，比如 不变量不太可能对 optimizer 有很大帮助的时候，似乎就是这情况。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-05.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Destructuring assignment（解构赋值参数）](https://github.com/rust-lang/rfcs/pull/2909)
- [RFC: impl-only glob imports](https://github.com/rust-lang/rfcs/pull/2782)
- [RFC: 允许 \_ in type aliases](https://github.com/rust-lang/rfcs/pull/2524)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化：union with 'manuallydrop' fields 和 'impl drop for union'](https://github.com/rust-lang/rust/pull/77547)
- \[处置：合并] [装设 ci for aarch64-apple-darwin](https://github.com/rust-lang/rust/pull/75991)
- \[处置：合并] [提升 aarch64-pc-windows-msvc 到 tier 2 开发平台](https://github.com/rust-lang/rust/pull/75914)
- \[处置：合并] [resolve: 不要把 nonexistent crate `meta` 放到 prelude](https://github.com/rust-lang/rust/pull/75802)
- \[处置：合并] [跟踪问题： slice_partition_at_index](https://github.com/rust-lang/rust/issues/55300)

## New RFCs

- [Add 0000-vecdeque-binary-search.md: Binary search fns for VecDeque](https://github.com/rust-lang/rfcs/pull/2997)

# Quote of the Week

> [...] clippy 适用那些最终通过编译器时，在代码内部发现一定空白的人。😉

- 来自 Rust 调查，一名匿名者

Thanks to [blonk](https://users.rust-lang.org/t/twir-quote-of-the-week/328/947) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/j71tq7/this_week_in_rust_359/)</small>
