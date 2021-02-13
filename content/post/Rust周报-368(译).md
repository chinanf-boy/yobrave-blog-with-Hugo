---
title: "Rust周报 368(译)"
date: 2020-12-11T17:20:23+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-368"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-12-09
- [原文：368 期](https://this-week-in-rust.org/blog/2020/12/09/this-week-in-rust-368/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- [The Foundation 交流会](https://blog.rust-lang.org/2020/12/07/the-foundation-conversation.html)

### Newsletters

- [This Month in Rust GameDev #16 - November 2020](https://rust-gamedev.github.io/posts/newsletter-016/)
- [RiB Newsletter #18 - On to the Ribbles](https://www.reddit.com/r/rust/comments/k6cka7/rib_newsletter_18_on_to_the_ribbles/)

### Tooling

- [Rust Analyzer Changelog #54](https://rust-analyzer.github.io/thisweek/2020/12/07/changelog-54.html)
- [Knurling-rs Changelog #9](https://ferrous-systems.com/blog/knurling-changelog-9/)
- [IntelliJ Rust: Updates for 2020.3](https://blog.jetbrains.com/clion/2020/12/intellij-rust-updates-for-2020-3/)

### Observations/Thoughts

- [Monads and GATs in Nightly Rust](https://www.fpcomplete.com/blog/monads-gats-nightly-rust/) --> [ruanyifeng 解释 Monads](https://ruanyifeng.com/blog/2015/07/monad.html)
- [消除 零 for 几何代数 in Rust](https://fanf.dreamwidth.org/134024.html)
- [On 泛型 和 关联类型](https://blog.thomasheartman.com/posts/on-generics-and-associated-types)
- [自适应 请求并发。 大规模化的弹性观察能力。](https://vector.dev/blog/adaptive-request-concurrency/)
- [Rust 压缩库](https://blog.logrocket.com/rust-compression-libraries/)
- [Rust 让 跨平台编译，简单到如同小孩的玩意](https://www.marcoieni.com/2020/12/rust-makes-cross-compilation-childs-play/)
- [使用 builder 模式，去定义测试场景](https://jmmv.dev/2020/12/builder-pattern-for-tests.html)
- [测量 内存使用 in Rust](https://rust-analyzer.github.io/blog/2020/12/04/measuring-memory-usage-in-rust.html)
- [切换用户，节省时间: Async 支持 in Goose](https://www.tag1consulting.com/blog/saving-time-switching-users-async-support-goose)
- [为什么 Rust 的用意，是去替代 C](https://evrone.com/rust-vs-c)

### Rust Walkthroughs

- [实时视频处理 with Rust, FFmpeg and OpenCV](https://subvisual.com/blog/posts/real-time-video-processing-with-rust-ffmpeg-opencv/)
- [合并 k 排序数组 in Rust](https://dev.to/creativcoder/merge-k-sorted-arrays-in-rust-1b2f)
- [Make A Language - Part Thirteen: Whitespace & Events](https://arzg.github.io/lang/13/)
- [单元测试一个 console app (a text editor)](https://jmmv.dev/2020/12/unit-testing-a-console-app.html)
- [Rust and Async (on embedded devices)](https://blog.drogue.io/rust-and-async/)
- [避免重复 Strings in Rust](https://www.fpcomplete.com/blog/avoiding-duplicating-strings-rust/)
- [OS in Rust: Custom target to build kernel for bare metal: Part-3](https://blog.knoldus.com/os-in-rust-custom-target-to-build-kernel-for-a-bare-metal-part-3/)
- [OS in Rust: Building kernel for custom target: Part-4](https://blog.knoldus.com/os-in-rust-building-kernel-for-custom-target-part-4/)
- \[视频] [introduction to rust part 2](https://youtu.be/lLWchWTUFOQ)

### Project Updates

- [rust-gpu v0.2](https://github.com/EmbarkStudios/rust-gpu/releases/tag/v0.2)
- [Interior Mutability in Rust: 了解 The Cell Type](https://ibraheem.ca/posts/rust-interior-mutability-understanding-cell)

### Miscellaneous

- [Safe 交互能力 between Rust and C++ with CXX](https://www.infoq.com/news/2020/12/cpp-rust-interop-cxx/)
- [扩展 Fuchsia's open source model](https://opensource.googleblog.com/2020/12/expanding-fuchsias-open-source-model.html)
- [Miri 现在可以检测 数据竞态了](https://www.reddit.com/r/rust/comments/k75tez/miri_can_now_detect_data_races/)

# Crate of the Week

这周的箱子是[breadx](https://github.com/not-a-seagull/breadx)，是 X-windows 协议的实现，采用 100％安全，且 mutex-free 的 Rust。

谢谢[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/851)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

- [Triox - Good First Issues](https://github.com/AaronErhardt/Triox/labels/good%20first%20issue)
- [libssh2 - Pull Request Needs Windows Reviewer](https://github.com/libssh2/libssh2/pull/517)

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 279 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-11-30..2020-12-07

- [添加 wasm32 支持，to inline asm](https://github.com/rust-lang/rust/pull/78684)
- [提升 attribute 的 message error spans](https://github.com/rust-lang/rust/pull/79509)
- [chalk: 总是将 Invariant 关联到 non-General inference vars](https://github.com/rust-lang/chalk/pull/659)
- [修复由 match 详尽性裂缝，引起的性能问题](https://github.com/rust-lang/rust/pull/79680)
- [传递 Symbols 而不是 Idents in doctree](https://github.com/rust-lang/rust/pull/79623)
- [调整 diagnostics on shadowing lifetimes/labels](https://github.com/rust-lang/rust/pull/79620)
- [避免 panic_bounds_check in `fmt::write`](https://github.com/rust-lang/rust/pull/78122)
- [修复，从 `io::copy` specialization 而来，不正确`io::Take`的限制结果](https://github.com/rust-lang/rust/pull/79650)
- [`std::io`: use sendfile for UnixStream](https://github.com/rust-lang/rust/pull/79600)
- [cargo: 稍微优化 \`cargo vendor](https://github.com/rust-lang/cargo/pull/8937)
- [cargo: 添加 "--workspace" 到 update 命令](https://github.com/rust-lang/cargo/pull/8725)
- [rustdoc: JSON 后端，实验性 impl](https://github.com/rust-lang/rust/pull/79539)

## Rust Compiler Performance Triage

- [2020-12-08](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-08.md)：0 个退步，2 改进，1 混合

分类由 @simulacrum 完成。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-12-08.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: Plan to make core and std's panic identical](https://github.com/rust-lang/rfcs/pull/3007)
- [RFC: Add `target_abi` configuration](https://github.com/rust-lang/rfcs/pull/2992)
- [添加 secret types rfc](https://github.com/rust-lang/rfcs/pull/2859)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [rustdoc: 稳定化 --default-theme 命令行选项](https://github.com/rust-lang/rust/pull/79642)
- \[处置：合并] [implement `From<char>` for u64 and u128.](https://github.com/rust-lang/rust/pull/79502)
- \[处置：合并] [稳定化 `unsafe_cell_get_mut`](https://github.com/rust-lang/rust/pull/79485)
- \[处置：合并] [Move `{f32,f64}::clamp` to core](https://github.com/rust-lang/rust/pull/79473)
- \[处置：合并] [稳定化：all stable methods of `Ipv4Addr`, `Ipv6Addr` and `IpAddr` as const](https://github.com/rust-lang/rust/pull/79342)
- \[处置：合并: ] [确认 `[CONST; N]` is stable](https://github.com/rust-lang/rust/pull/79270)
- \[处置：合并] [弃用 atomic compare_and_swap method](https://github.com/rust-lang/rust/pull/79261)
- \[处置：合并] [稳定化：`core::slice::fill`](https://github.com/rust-lang/rust/pull/79213)
- \[处置：关闭] [通过添加 mapping 支持，让 matches! 更有用，](https://github.com/rust-lang/rust/pull/79188)
- \[处置：合并] [passes: 在泛型 参数上，禁止无效 attrs](https://github.com/rust-lang/rust/pull/79073)
- \[处置：合并] [稳定化：deque_range](https://github.com/rust-lang/rust/pull/79022)
- \[处置：关闭] [应用 `unused_doc_comments` lint 到 inner items](https://github.com/rust-lang/rust/pull/78367)
- \[处置：合并] [重命名 `overlapping_patterns` lint](https://github.com/rust-lang/rust/pull/78242)
- \[处置：合并] [稳定化：or_insert_with_key](https://github.com/rust-lang/rust/pull/78083)
- \[处置：关闭] [添加`Default`的内置实现 for function definition and… ](https://github.com/rust-lang/rust/pull/77688)
- \[处置：合并] [将 `-1` 作为可用标记 for file descriptors](https://github.com/rust-lang/rust/pull/74699)
- \[处置：合并] [稳定化：the Wake trait](https://github.com/rust-lang/rust/pull/74304)
- \[处置：合并] [跟踪问题：map_ok and map_err method for `poll<option<result<t, e>>>`](https://github.com/rust-lang/rust/issues/63514)

## New RFCs

_本周没有提议新的 RFC。_

# Quote of the Week

> 编写 Rust 对我而然，是编译器耐心地引导我的一个循序渐进的过程，让我朝着，本应该一开始就编写的那个程序前进。最后，功劳则都是我的。

– [@felixwatts on Discord](https://discord.com/channels/442252698964721669/448238009733742612/783395725991084074)

Thanks to [Joshua Nelson](https://users.rust-lang.org/t/twir-quote-of-the-week/328/972) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ka8fvg/this_week_in_rust_368/)</small>
