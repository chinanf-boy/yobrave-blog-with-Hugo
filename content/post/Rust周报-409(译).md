---
title: "Rust周报 409(译)"
date: 2021-09-25T22:32:44+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-409"
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
- 日期：2021-09-22
- [原文：409 期](https://this-week-in-rust.org/blog/2021/09/22/this-week-in-rust-409/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls)

## Updates from Rust Community

### Official

### RustConf 2021 (大会视频来啦，可惜差不多都是油管上的)

- [Project Update: Lang Team by Niko Matsakis](https://youtu.be/ylOpCXI2EMM)
- [Project Update: Libs Team by Mara Bos](https://youtu.be/DnYQKWs_7EA)
- [Move Constructors: Is it Possible? by Miguel Young de la Sota](https://youtu.be/UrDhMWISR3w)
- [The Importance of Not Over-Optimizing in Rust by Lily Mara](https://youtu.be/CV5CjUlcqsw)
- [Identifying Pokemon Cards by Hugo Peixoto](https://youtu.be/BLy_YF4nmqQ)
- [Fuzz Driven Development by Midas Lambrichts](https://youtu.be/qUu1vJNg8yo)
- [Writing the Fastest GDBT Library in Rust by Isabella Tromba](https://youtu.be/D1NAREuicNs)
- [Whoops! I Rewrote it in Rust by Brian Martin](https://youtu.be/m-Qg3OoPIdc)
- [How I Used Rust to Become Extremely Offline by Luke Westby](https://youtu.be/b0I4vP2CP88)
- [Supercharging Your Rust Code With Five Little-Known Attributes by Jackson Lewis](https://youtu.be/8d7DqeYXq7A)
- [Compile-Time Social Coordination by Zac Burns](https://youtu.be/4_Jg-rLDy-Y)
- [Hacking rustc: Contributing to the Compiler by Esteban Kuber](https://youtu.be/9H9SO2u6Q20)
- [This Week in Rust: 400 Issues and Counting! by This Week in Rust's very own Lead Editor Nell Shamrell-Harrington!](https://youtu.be/OZPXhmy-wVw)

### Project/Tooling Updates

- [rust-analyzer Changelog #95](https://rust-analyzer.github.io/thisweek/2021/09/20/changelog-95.html)
- [Rome will be rewritten in Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)
- [SixtyFPS (GUI crate) weekly report 19th of September](https://sixtyfps.io/thisweek/2021-09-20.html)
- [Introducing SeaORM: An async & dynamic ORM for Rust](https://www.sea-ql.org/SeaORM/blog/2021-09-20-introducing-sea-orm)
- [wgpu 联盟带上 Deno](https://gfx-rs.github.io/2021/09/16/deno-webgpu.html)
- [Mesa 中的 Rust 代码试验，正在进行中](https://www.phoronix.com/scan.php?page=news_item&px=Mesa-Rust-2021-Experiment)
- [Goscript is now language feature complete](https://www.reddit.com/r/rust/comments/pqiiw1/goscript_is_now_language_feature_complete/)
- [An update on Memory Safety in Chrome](https://security.googleblog.com/2021/09/an-update-on-memory-safety-in-chrome.html?m=1)
- [This week in Databend #8](https://datafuselabs.github.io/weekly/2021-09-22-databend-weekly/)

### Observations/Thoughts

- [How to use Vectors in Rust?](https://blog.knoldus.com/how-to-use-vectors-in-rust/)
- [Message Passing in Rust Threads is very helpful](https://blog.knoldus.com/message-passing-in-rust-threads-is-very-helpful/)
- [New project: ‘Wheel of Fortune’（一款角色扮演类游戏） solver! (and Rust is still faster than Python)](https://gregstoll.wordpress.com/2021/09/18/new-project-wheel-of-fortune-solver-and-rust-is-still-faster-than-python/)
- [Rustacean Principles](https://smallcultfollowing.com/babysteps/blog/2021/09/08/rustacean-principles/)
- [Rustacean Principles, Continued](https://smallcultfollowing.com/babysteps//blog/2021/09/16/rustacean-principles-continued/)
- [全栈 Rust](https://www.justinm.one/blog/2021/09/11/fullstackrust/)
- [Rust 的可学习性](https://epage.github.io/blog/2021/09/learning-rust/)
- [The Rust Programming Language for 游戏工具](https://research.activision.com/publications/2021/09/the-rust-programming-language-for-game-tooling)
- [Reality Check for Cloudflare Wasm Workers and Rust](https://nickb.dev/blog/reality-check-for-cloudflare-wasm-workers-and-rust)
- [Rust on the MOS 6502: Beyond Fibonacci](https://gergo.erdi.hu/blog/2021-09-18-rust_on_the_mos_6502__beyond_fibonacci/)
- [Rocket: A Web Framework for Rust](https://tech.marksblogg.com/rocket-rust-web-framework.html)
- [Oxidizing Kraken: Improving Kraken Infrastructure Using Rust](https://blog.kraken.com/post/7964/oxidizing-kraken-improving-kraken-infrastructure-using-rust/)
- [棘手的兼容性问题 - recent changes to `std::io::ErrorKind`](https://diziet.dreamwidth.org/9894.html)
- \[audio] [flutter/rust roundtable - flying high with flutter #24](https://youtu.be/SsZUicpnpVE)
- \[audio] [rustacean station: from zero to production with luca palmieri](https://rustacean-station.org/episode/036-luca-palmieri/)
- \[audio] [arewepodcastyet 08 with jon ferdinand ronge gjenset](https://soundcloud.com/arewepodcastyet/awpy-08-jon-ferdinand-ronge-gjengset)
- \[audio] [rustacean station: rust code coverage with daniel mckenna](https://rustacean-station.org/episode/037-daniel-mckenna/)
- \[video] [rust4ml @ rust dc w/ vlad orlov](https://youtu.be/FiEbgZlBXhk)
- \[video] [in-kernel, fast-path packet processing with af_xdp @ rust dc w/ collins huff](https://youtu.be/Gv-nG6F_09I)

### Rust Walkthroughs

- [怎样对应用的所有层的交流信息，实现端对端的加密](https://github.com/ockam-network/ockam/tree/develop/documentation/use-cases/end-to-end-encrypt-all-application-layer-communication)
- [Rust on ESP32](https://kerkour.com/blog/rust-on-esp32)
- [怎么在树莓派上，编译 Rust and LLVM for ESP32](https://kerkour.com/blog/compile-rust-for-esp32-xtensa-on-raspberry-pi-aarch64/)
- [Optimize Rust binaries size with cargo and Semver](https://oknozor.github.io/blog/optimize-rust-binary-size/)
- [Combining Axum, Hyper, Tonic, and Tower for hybrid web/gRPC apps: Part 2](https://www.fpcomplete.com/blog/axum-hyper-tonic-tower-part2)
- [Combining Axum, Hyper, Tonic, and Tower for hybrid web/gRPC apps: Part 3](https://www.fpcomplete.com/blog/axum-hyper-tonic-tower-part3)
- [Combining Axum, Hyper, Tonic, and Tower for hybrid web/gRPC apps: Part 4](https://www.fpcomplete.com/blog/axum-hyper-tonic-tower-part4/)
- [First steps with an Arduino board（类树莓派产品） and Rust](https://hoj-senna.github.io/HShhss/texts/001arduino1.html)
- [Full-stack Rust: 一个完整的教程示例](https://blog.logrocket.com/full-stack-rust-a-complete-tutorial-with-examples/)
- [设计 状态机 in Rust](https://dev.to/senyeezus/designing-state-machines-in-rust-252k)
- [Optimizing a JavaScript library with WebAssembly, 一个失败的尝试！](https://dev.to/antoniovdlc/optimising-a-javascript-library-with-webassembly-a-failed-attempt-48le)
- \[series] [url shortener with rust, svelte, & aws](https://dev.to/mileswatson/series/14520)
- \[CN] [string in rust](https://dev.to/daniel1in/string-in-rust-34d7)
- \[video] [from python to rust - all episodes](https://www.youtube.com/watch?v=7odJDwhjCXQ&list=PLEIv4NBmh-GsWGE9mY3sF9c5lgh5Z_jLr&ab_channel=BedroomBuilds)
- \[video] [1 problem, 16 programming languages (c++ vs rust vs haskell vs python vs apl...)](https://youtu.be/UVUjnzpQKUo)
- \[video] [explaing rust analyzer 15: error resilient parsing](https://youtu.be/0HlrqwLjCxA)
- \[video] [getting started with rust 🦀 2021: 6. library api design overhaul, async and more](https://www.youtube.com/watch?v=J_yGWdgeGQM)
- \[video] [series] [Rust for Java Developers](https://youtube.com/playlist?list=PL7r-PXl6ZPcD63DS2djSiz4SlXkaTfobc)

### Miscellaneous

- [Do Developers Read Compiler Error Messages?](https://neverworkintheory.org/2021/09/20/do-developers-read-compiler-error-messages.html)
- [Alpine: System change proposal: Rust in main](https://www.reddit.com/r/rust/comments/pqs2dh/alpine_system_change_proposal_rust_in_main/)
- [Rust Adds Support For The Motorola M68000 Processors](https://www.phoronix.com/scan.php?page=news_item&px=Rust-Adds-Motorola-M68k)
- [Godbolt（给出各种语言源码的汇编源码）探险 without crate limitations, in Visual Studio Code](https://saveriomiroddi.github.io/Rust-lulz-godbolt-assembly-exploring-without-crate-limitations-in-visual-studio-code)
- [其他编程语言中，你有想念的库吗?](https://www.reddit.com/r/rust/comments/pm4xe9/what_libraries_do_you_miss_from_other_languages/)
- [Rust for Rustaceans is off to the printer!](https://www.reddit.com/r/rust/comments/pp0nfa/rust_for_rustaceans_is_off_to_the_printer/)
- [GCC codegen now under rust-lang organization](https://www.reddit.com/r/rust/comments/ppf83d/gcc_codegen_now_under_rustlang_organization/)
- [Rust in Qemu, host support matrix](https://www.reddit.com/r/rust/comments/ppya5y/rust_in_qemu_host_support_matrix/)
- [Chrome - Borrowing Trouble: The Difficulty Of A C++ Borrow Checker](https://docs.google.com/document/u/1/d/e/2PACX-1vSt2VB1zQAJ6JDMaIA9PlmEgBxz2K5Tx6w2JqJNeYCy0gU4aoubdTxlENSKNSrQ2TXqPWcuwtXe6PlO/pub)
- \[picture] [my rust project was featured in one of europe's biggest computer magazines (heise c't)](https://www.reddit.com/r/rust/comments/pskqhk/media_my_rust_project_was_featured_in_one_of/)
- \[video] [wrote a neat little maze solver. largest solved so far is 125k x 125k. here's a smaller 512x512](https://www.reddit.com/r/rust/comments/pl7n8a/media_wrote_a_neat_little_maze_solver_largest/?utm_source=share&utm_medium=web2x&context=3)

## Crate of the Week

本周的箱子是[flowistry](https://github.com/willcrichton/flowistry)，一个 VS 代码扩展，用于可视化代码中的数据流。

[Willi Kappler](https://users.rust-lang.org/t/crate-of-the-week/2704/963)谢谢你的建议！

[Please submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做出贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择并开始！

其中一些任务也可能有可用的导师，请访问任务页面了解更多信息。

- [ockam-network/ockam - Ockam TCP Transport using smoltcp](https://github.com/ockam-network/ockam/issues/1804)
- [ockam-network/ockam - File Transfer over end-to-end encrypted secure channels](https://github.com/ockam-network/ockam/issues/1624)

如果您是 Rust 项目的所有者，并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

共收到 256 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-09-13..2021-09-20

- [添加 ARMv6K Nintendo 3DS Tier 3 target](https://github.com/rust-lang/rust/pull/88529)
- [添加对 m68k 的初始支持](https://github.com/rust-lang/rust/pull/88321)
- [在 intercrate 模式下，禁用 evaluation cache](https://github.com/rust-lang/rust/pull/88994)
- [use a separate interner type for `UniqueTypeId`](https://github.com/rust-lang/rust/pull/87867)
- [accept `m!{ .. }.method()` and `m!{ .. }?` statements](https://github.com/rust-lang/rust/pull/88690)
- [recover from `Foo(a: 1, b: 2)`](https://github.com/rust-lang/rust/pull/88729)
- [emit clearer diagnostics for parens around for loop heads](https://github.com/rust-lang/rust/pull/86422)
- [make diagnostics clearer for `?` operators](https://github.com/rust-lang/rust/pull/86382)
- [improve error message for type mismatch in generator arguments](https://github.com/rust-lang/rust/pull/88911)
- [improve error message for missing trait in trait impl](https://github.com/rust-lang/rust/pull/88894)
- [add a separate error for `dyn Trait` in `const fn`](https://github.com/rust-lang/rust/pull/89021)
- [suggest replacing an inexisting field for an unmentioned field](https://github.com/rust-lang/rust/pull/87960)
- [suggest better place to add call parentheses for method expressions wrapped in parentheses](https://github.com/rust-lang/rust/pull/89055)
- [suggest removing bad parens in `(recv.method)()`](https://github.com/rust-lang/rust/pull/88841)
- [suggest removing `#![feature]` for library features that have been stabilized](https://github.com/rust-lang/rust/pull/89012)
- [don't lint about missing code examples in derived traits](https://github.com/rust-lang/rust/pull/88735)
- [point at argument instead of call for their obligations](https://github.com/rust-lang/rust/pull/88719)
- [reuse existing shared `Lrc` for `MatchImpl` parent](https://github.com/rust-lang/rust/pull/89000)
- [fast reject for `NeedsNonConstDrop`](https://github.com/rust-lang/rust/pull/88965)
- [通过使用一个 on-disk hash table，简化 lazy `DefPathHash` decoding](https://github.com/rust-lang/rust/pull/82183)
- [avoid codegen for `Result::into_ok` in `lang_start`](https://github.com/rust-lang/rust/pull/88988)
- [use `<[T; N]>::map` in `Sharded` instead of `SmallVec` and unsafe code](https://github.com/rust-lang/rust/pull/89069)
- [introduce a fast path that avoids the `debug_tuple` abstraction when deriving `Debug` for unit-like enum variants](https://github.com/rust-lang/rust/pull/88832)
- [make `UnsafeCell::get_mut` const](https://github.com/rust-lang/rust/pull/88722)
- [`const` `drop`](https://github.com/rust-lang/rust/pull/88558)
- [don't inline `OnceCell` initialization closures](https://github.com/rust-lang/rust/pull/89031)
- [allow `panic!("{}", computed_str)` in `const fn`](https://github.com/rust-lang/rust/pull/88954)
- [fix potential race in `AtomicU64` time monotonizer](https://github.com/rust-lang/rust/pull/89017)
- [futures: fix Unusable `Sink` implementation on `Scan`](https://github.com/rust-lang/futures-rs/pull/2499)
- [clippy: change `while_let_on_iterator` suggestion to use `by_ref()`](https://github.com/rust-lang/rust-clippy/pull/7690)
- [clippy: improve accuracy of `mut_key`](https://github.com/rust-lang/rust-clippy/pull/7640)
- [clippy: new lint: `same_name_method`](https://github.com/rust-lang/rust-clippy/pull/7653)

### Rust Compiler Performance Triage

美好的一周：进步多于退步。

分诊由 **@pnkfelix**. 修订范围：[9f85cd6f2..7743c9f](https://perf.rust-lang.org/?start=9f85cd6f2ab2769c16e89dcdddb3e11d9736b351&end=7743c9fadd64886d537966ba224b9c20e6014a59&absolute=false&stat=instructions%3Au)

2 次退步，4 次改进，8 次混合；他们中的某某在汇总中

共进行了 44 次比较

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-09-21.md)

### Approved RFCs

跟随 Rust [RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs). 以下是本周批准实施的 RFC：

- [RFC: Supertrait item shadowing](https://github.com/rust-lang/rfcs/pull/2845)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PRs 的“最终评论期”。现在就表达你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize RFC 2345: Allow panicking in constants](https://github.com/rust-lang/rust/issues/89006)
- \[disposition: merge] [Perform type inference in range pattern](https://github.com/rust-lang/rust/pull/88090)
- \[disposition: close] [Disable unused_must_use for statically known bools](https://github.com/rust-lang/rust/pull/88028)
- \[disposition: merge] [Decide whether asm! and/or global_asm! should be exported from the prelude.](https://github.com/rust-lang/rust/issues/87228)
- \[disposition: merge] [Make #[derive(A, B, ...)] cfg-eval its input only for A, B, ... and stabilize feature(macro_attributes_in_derive_output)](https://github.com/rust-lang/rust/pull/87220)
- \[disposition: merge] [Make `*const (), *mut ()` okay for FFI](https://github.com/rust-lang/rust/pull/84267)

### New RFCs

- [\[Help wanted\] First draft of patchfile RFC](https://github.com/rust-lang/rfcs/pull/3177)
- [Multiple artifact deps on the same crate with different names, for different targets](https://github.com/rust-lang/rfcs/pull/3176)

# Quote of the Week

> 多年来，该项目的压力已经伤害了很多人，我认为可能唯一的恢复途径，就是与之保持一定距离。

– [Graydon Hoare on twitter](https://twitter.com/graydon_pub/status/1437521319722029056)

Thanks to [mmmmib](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1107) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ptjwmc/this_week_in_rust_409/)</small>
