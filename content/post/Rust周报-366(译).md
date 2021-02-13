---
title: "Rust周报 366(译)"
date: 2020-11-26T20:13:21+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-366"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-11-25
- [原文：366 期](https://this-week-in-rust.org/blog/2020/11/25/this-week-in-rust-366/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

### Official

- \[内部] [Error Handling 项目组在做什么呢](https://blog.rust-lang.org/inside-rust/2020/11/23/What-the-error-handling-project-group-is-working-on.html)

### Newsletters

### Tooling

- [Rust Analyzer Changelog #52](https://rust-analyzer.github.io/thisweek/2020/11/23/changelog-52.html)
- [Knurling-rs Changelog #7](https://ferrous-systems.com/blog/knurling-changelog-7/)

### Observations/Thoughts

- [FlatBuffer as 序列化，未知的 IDL（接口与类型定义语言）](https://adsharma.github.io/flattools-11222020.html)
- [WTF is Rust? 插图版](https://dev.to/egghead/wtf-is-rust-the-illustrated-notes-564p)
- [从第一行 Rust 开始](https://dev.to/arschles/first-lines-of-rust-ofe)
- [加速我的 JS 模板编译器 Benchpress](https://blog.nodebb.org/optimizing-benchpress/)
- [println 变为可爱型的 pwintln UwU](https://lfcode.ca/blog/pwintln-uwu)

### Rust Walkthroughs

- [Hands-on Rust: 通过 2D 游戏开发，高效学习](https://pragprog.com/titles/hwrust/hands-on-rust/)
- [对 Embedded C and Rust 的 CBOR IoT 数据序列化](https://www.jaredwolff.com/cbor-for-embedded-c-and-rust/)
- [与 Yew 的基本交互](https://dev.to/fllstck/basic-interactions-with-yew-3pa3)
- [Testing your crate C-API](https://dev.to/luzero/testing-your-crate-c-api-19nc)
- [Rocket Tutorial 03 part II: Proper Testing](https://dev.to/davidedelpapa/rocket-tutorial-03-part-ii-proper-testing-6h)
- [Select（IO 多路复用机制） Syscall in Rust](https://dev.to/pjam/select-syscall-in-rust-mm)
- [FBSim: football-playing AI agents in Rust](https://iantayler.com/2020/11/22/fbsim-football-playing-ai-agents-in-rust/)
- [Building a Recipe Manager - Part 5 - 数据完整性](https://bheisler.github.io/post/recipe-manager-part-5-data-integrity/)
- [对 STM32WLE 的 Bootstrapping 支持，with the Embedded Rust ecosystem](https://jitter.company/blog/2020/11/23/bootstrapping-support-for-the-stm32wle-with-the-embedded-rust-ecosystem/)
- [食谱：Calling Swift Closures from Asynchronous Rust Code](https://www.nickwilcox.com/blog/recipe_swift_rust_callback/)
- \[视频] [a cool generic concurrency primitive in rust](https://youtu.be/eLNAMEoKAAc)
- \[视频] [creative coding in rust: re-creating a retro screensaver](https://youtu.be/d9lsT4kJo44)
- \[视频] [(live coding) audio adventures in rust: packaging actix + react app as macos bundle](https://youtu.be/2u362vR167c)
- \[视频] [prototype (rust tutorial) - design patterns](https://www.youtube.com/watch?v=lL0PmeYWqiU&feature=youtu.be)

### Project Updates

- [cargo-mobile: Rust on mobile 简单化!](https://dev.brainiumstudios.com/2020/11/24/cargo-mobile.html)
- [欢迎 RustFest Project](https://blog.rustfest.eu/rustfest-project-announcement)
- [Levenshtein Heuristic in Poi（两个字符串的最小单字符变化）](https://advancedresearch.github.io/blog/2020-11-21-levenshtein-heuristic-in-poi)

### Miscellaneous

- [强化 memory safety in Rust: 探索 CHERI 功能 for a safe language](https://nw0.github.io/cheri-rust.pdf)
- [Why AWS loves Rust, and how we'd like to help](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/#)
- [Why Work in Blockchain? - 从 C++ 到 Rust Developer 的旅程](https://medium.com/centrality/why-work-in-blockchain-journey-from-c-to-rust-developer-eddbc9ccdc3d)
- [Flash 动画永存 at the Internet Archive \[通过 ruffle.rs, 一个 Flash 仿真器 written in Rust，能编译到 WASM\]](https://www.reddit.com/r/rust/comments/jxfhnp/flash_animations_live_forever_at_the_internet/)
- \[视频] [how to create an awesome rust github project](https://www.youtube.com/watch?v=meAz2RQMHvM)

# Crate of the Week

这周的箱子是[cargo-intraconv](https://crates.io/crates/cargo-intraconv)，一个 cargo 子命令，用于将 rust 文档中的链接，转换为新的稳定的 intra-doc-links 格式。

谢谢[Alexis Bourget](https://users.rust-lang.org/t/crate-of-the-week/2704/849)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [oapth - Meta issue for `clean` method](https://github.com/c410-f3r/oapth/issues/5)
- [uom - Fix issues with uom CI 流程](https://github.com/iliekturtles/uom/issues/223)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 345 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-11-16..2020-11-23

- [不要 inline naked functions](https://github.com/rust-lang/rust/pull/79192)
- [修复 exhaustiveness（详尽），情况是 a byte string literal is used at slice type](https://github.com/rust-lang/rust/pull/79072)
- [Arena: 使用 specialization ，避免复制数据](https://github.com/rust-lang/rust/pull/78569)
- [将'列号'支持添加到 Backtrace](https://github.com/rust-lang/rust/pull/79002)
- [添加支持：custom allocators in `Vec`](https://github.com/rust-lang/rust/pull/78461)
- [将 `slice::to_vec` 变为不使用 `extend_from_slice`](https://github.com/rust-lang/rust/pull/79186)
- [对 atomic Ordering 收紧 bounds，in `std::sys::unix::weak::Weak`](https://github.com/rust-lang/rust/pull/79039)
- [将 `#[cold]` 属性，添加到 `std::process::abort` and `alloc::alloc::handle_alloc_error`](https://github.com/rust-lang/rust/pull/79172)
- [impl `Default` for `PhantomPinned`](https://github.com/rust-lang/rust/pull/77893)
- [添加：`trailing_zeros` and `leading_zeros` to non zero types](https://github.com/rust-lang/rust/pull/79114)
- [添加：`f`{`32`, `64`}`::is_subnormal`](https://github.com/rust-lang/rust/pull/76941)
- [添加：`core::slice::fill_with`](https://github.com/rust-lang/rust/pull/79222)
- [implement `Index` and `IndexMut` for arrays](https://github.com/rust-lang/rust/pull/74989)
- [make `as`{`_mut`,}`_slice` on `array::IntoIter` public](https://github.com/rust-lang/rust/pull/79194)
- [稳定化：`refcell_take`](https://github.com/rust-lang/rust/pull/78608)
- [稳定化：`clamp`](https://github.com/rust-lang/rust/pull/77872)
- [stabilise `then`](https://github.com/rust-lang/rust/pull/79299)
- [稳定化：`IpAddr::is_ipv4` and `is_ipv6` as const](https://github.com/rust-lang/rust/pull/76226)
- [稳定化：`alloc::Layout` const functions](https://github.com/rust-lang/rust/pull/78305)
- [futures: stream: unzip operator](https://github.com/rust-lang/futures-rs/pull/2263)
- [cargo: 允许 resolver="1" ，这样可以显式使用 old resolver behavior](https://github.com/rust-lang/cargo/pull/8857)
- [rustdoc: 给出一个更好的错误，when rustdoc tests fail](https://github.com/rust-lang/rust/pull/78752)
- [semverver: 通过使用 .rmeta 而不是 .rlib 文件，加速编排操作](https://github.com/rust-lang/rust-semverver/pull/138)
- [measureme: 硬件性能计数器支持 (via `rdpmc`)](https://github.com/rust-lang/measureme/pull/143)

## Rust Compiler Performance Triage

- [2020-11-24](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-24.md)：1 个退步，2 个改进，2 个混合

这周我们看到了[#79237](https://github.com/rust-lang/rust/pull/79237)的着陆，它本身没有成功，但为在 macOS 上支持 split debuginfo 打开了大门。这最终会是巨大的成功，因为我们可以避免重新收集 debuginfo 的同时，保留对 lldb 和 Rust backtraces 的支持。[#79361](https://github.com/rust-lang/rust/issues/79361)跟踪 rustc 标志的稳定性，但尚未 100% 明确，向稳定版本的用户推出该产品。

分类由 @jyn514 和 @simulacrum 完成。

4 个退步，4 个改进，2 个混合结果。其中 5 个汇总。

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-24.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

_在最终评论期内，目前没有任何跟踪问题或 PR。_

## New RFCs

- [添加一种新语法，去声明，一个 trait 必须总是 object-safe 的](https://github.com/rust-lang/rfcs/pull/3022)

# Quote of the Week

> 我知道有关编译器内部的信息，但在我看来，好像 90％的时间都花在了漂亮的 LayoutError 上。

– [Vadzim Dambrouski on github](https://github.com/rust-lang/rust/issues/75992#issuecomment-716622473)

Thanks to [mmmmib](https://users.rust-lang.org/t/twir-quote-of-the-week/328/968) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/k17f0k/this_week_in_rust_366/)</small>
