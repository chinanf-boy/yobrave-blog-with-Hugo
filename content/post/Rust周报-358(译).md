---
title: "Rust周报 358(译)"
date: 2020-10-01T13:38:35+08:00
tags: ["week"]
description: "螃蟹-Rust周报-358"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-09-30
- [原文：358 期](https://this-week-in-rust.org/blog/2020/09/30/this-week-in-rust-358/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有新闻通讯。

### Official

- \[Inside] [宣布可移植的 SIMD 项目组](https://blog.rust-lang.org/inside-rust/2020/09/29/Portable-SIMD-PG.html)

### Tooling

- [Rust Analyzer Changelog #44](https://rust-analyzer.github.io/thisweek/2020/09/28/changelog-44.html)
- [Knurling-rs Changelog #2](https://ferrous-systems.com/blog/knurling-changelog-2/)

### Observations/Thoughts

- [基准测试第二章: Actix 对 Rocket v0.4 and v0.5-dev](https://matej.laitl.cz/bench-actix-rocket/)
- [优化之旅 - Rust Code 极速](https://aspenuwu.me/posts/rust-optimization.html)
- [重新回顾那 'smaller Rust'](https://without.boats/blog/revisiting-a-smaller-rust/)
- [A Future for Rust Debugging](https://nbaksalyar.github.io/2020/05/19/rust-debug.html)
- [以开源的形式，学习 Rust](https://bitsbybrad.com/2020-09-29-learning-rust/)
- [所以你想要 即时重载 Rust](https://fasterthanli.me/articles/so-you-want-to-live-reload-rust)
- [Drop order in Rust: 相当棘手](https://vojtechkral.github.io/blag/rust-drop-order/)

### Learn Simple Rust

- [Rust 1.46.0 对 const_fn 有什么新的影响?](https://blog.knoldus.com/whats-new-in-rust-1-46-0/)
- [Rust: expression vs statement（表达式 VS 陈述句）](https://dev.to/nickymeuleman/rust-expression-vs-statement-2h7g)
- [To Box or not to Box -- 我的 Rust 首次重构](https://medium.com/@KevinHoffman/to-box-or-not-to-box-my-first-real-rust-refactor-db467119c4c7)
- [Bevy #2: Space Shooter - The Player](https://dev.to/ethanyidong/bevy-2-space-shooter-the-player-3e7d)
- [Cucumber in Rust - Beginner's Tutorial](https://www.florianreinhard.de/2020-08-16/cucumber-in-rust-beginners-tutorial/)
- [Data Types in Rust](https://edfloreshz.blog/data-types-in-rust)
- \[video] [rust 101](https://www.youtube.com/watch?v=wNzXj4eddDo&feature=youtu.be)

### Learn More Rust

- [Are we observable yet? Rust 观测（日志记录） - 从零到生产 #4](https://www.lpalmieri.com/posts/2020-09-27-zero-to-production-4-are-we-observable-yet/)
- [初始阶段: 更多 State Machine Patterns in Rust](https://deislabs.io/posts/a-fistful-of-states/)
- [OS in Rust: 可运行在 bare metal 的文件: Part-1](https://blog.knoldus.com/os-in-rust-an-executable-that-runs-on-bare-metal-part-1/)
- [OS in Rust: 可运行在 bare metal 的文件: Part-2](https://blog.knoldus.com/os-in-rust-an-executable-that-runs-on-bare-metal-part-2/)
- [构建一个 Discord 聊天机器人 with Rust and Serenity](https://developers.facebook.com/blog/post/2020/09/30/build-discord-bot-with-rust-and-serenity/)
- [将 EBU R128 audio loudness 分析程序，从 C 移植到 Rust – 移植细节](https://coaxion.net/blog/2020/09/porting-ebu-r128-audio-loudness-analysis-from-c-to-rust-porting-details/)
- [构建一个 runtime 影子系统 for Rust 🦀️ (Part 1)](https://www.osohq.com/post/rust-reflection-pt-1)
- [Rusty-PID: 将 TSic sensor 从 C 移植到 Rust](https://nitschinger.at/Rusty-PID-Porting-the-TSic-sensor-from-C-to-Rust/)
- [Playing Codenames in Rust with word vectors](https://rolisz.ro/2020/09/26/playing-codenames-in-rust-with-word-vectors/)
- [Type-level Programming in Rust](https://willcrichton.net/notes/type-level-programming/)
- [多线程 with Wgpu and Rayon](https://sotrh.github.io/learn-wgpu/intermediate/tutorial13-threading/#threading-build-rs)
- [我的烟花会闪烁 (或 我是怎样意外发现 buffer 重新生成的)](https://blog.darrien.dev/posts/flicker-free-fireworks/)
- \[audio] [the rustacean station podcast - webassembly on the server with krustlet](https://rustacean-station.org/episode/030-krustlet/)
- \[video] [riot summit 2020 - safer & simpler embedded programs with rust on riot](https://www.youtube.com/watch?v=LvfCSnOM1Hs&feature=youtu.be)
- \[video] [one day build - anachro spi pt 2](https://www.youtube.com/watch?time_continue=69&v=2vk9H9-O_pI&feature=emb_logo)
- \[video] [rusty usb gadgets make barking beaglebones](https://www.youtube.com/watch?v=NgdWeR1CvI8&feature=emb_logo)

### Project Updates

- [Krustlet v0.5.0 Release](https://github.com/deislabs/krustlet/releases/tag/v0.5.0)
- [oso, 开源策略引擎，可用于账户授权管理 written in Rust](https://github.com/osohq/oso)， 加上[一个账户授权管理实现 for Rust projects!](https://docs.rs/oso/0.6.0-alpha/oso/)
- [Rust on the ESP32 & ESP8266 - 构建生态](https://mabez.dev/blog/posts/esp-rust-ecosystem/)
- [Miri 最近（或许）发生了什么](https://www.ralfj.de/blog/2020/09/28/miri.html)
- [进度报告 on rustc_codegen_cranelift (9 月 2020)](https://bjorn3.github.io/2020/09/28/progress-report-sep-2020.html)

### Miscellaneous

- [让你的 Electron 应用‘火箭发射’ with Rust](https://blog.logrocket.com/supercharge-your-electron-apps-with-rust/)
- [怎样制造一个 💡?](https://rust-analyzer.github.io/blog/2020/09/28/how-to-make-a-light-bulb.html)
- [向往 principled reactive UI](https://raphlinus.github.io/rust/druid/2020/09/25/principled-reactive-ui.html)
- [构建更快，更快的解释器 in Rust](https://blog.cloudflare.com/building-even-faster-interpreters-in-rust/)
- [AMD 受雇在 New Radeon Driver Tooling 上工作，Written In Rust](https://www.phoronix.com/scan.php?page=news_item&px=AMD-Hiring-Radeon-Rust)
- [Rust programming language 利用漏洞的缓解行为](https://rcvalle.blog/2020/09/16/rust-lang-exploit-mitigations/)
- [自制字面量 in Rust](https://www.5snb.club/posts/2020/09/25/custom-literals-in-rust.html)

# Call for Blog Posts

Rust 核心团队希望获得社区的意见！如果您还没有，[read the official blog](https://blog.rust-lang.org/2020/09/03/Planning-2021-Roadmap.html)并提交博客文章-它会显示在这里！自征集博客以来，以下是精彩的投稿：

- [Rust 2021: GUI](https://raphlinus.github.io/rust/druid/2020/09/28/rust-2021.html)
- [Rust 2021: 保持在 web 领域的统治地位, easy funding, easier learning](https://www.reddit.com/r/rust/comments/j1ihax/rust_2021_maintain_dominance_on_the_web_easy/)
- [Rust 2021: 更简单地集成到现有代码库](https://www.reddit.com/r/rust/comments/j06zc9/rust_2021_easier_to_integrate_into_existing/)
- [Rust 2021: Continue](https://www.reddit.com/r/rust/comments/izk75l/rust_2021_continue/)
- [My Rust 2021 roadmap](https://raphlinus.github.io/rust/druid/2020/09/28/rust-2021.html)
- [Rust 2021 | Features and Trait Bounds in Macros](https://blog.carminecrystal.com/rust-2021-features-and-trait-bounds-in-macros.html)
- [Rust 2021: Quality, frictionless tooling](https://swatinem.de/blog/rust-2021/)
- [My Rust 2021 roadmap: crates, concision, and community](http://jamesmcm.github.io/blog/2020/09/24/rust2021/#en)
- [Rust 2021 Roadmap Wishlist](https://aldaronlau.com/rust-2021/)
- [Rust in 2021: We've done a lot, more to be done](https://popzxc.github.io/rust-2021)
- [Rust in 2021: 权衡 the Type System for，绝对可高的 Message Buffers](https://christian.amsuess.com/blog/website/2020-09-24_rust_2021/)
- [Rust 2021](https://blog.coderspirit.xyz/blog/2020/09/26/rust-2021/)
- [Rust 2021: Minor major improvements](https://blog.thomasheartman.com/posts/rust-2021)
- [Rust 2021](https://beyermatthias.de/blog/2020/09/28/rust-2021/)
- [My Rust 2021](https://blog-dry.com/entry/2020/09/29/135738)

# Crate of the Week

这周的箱子是[fs-err](https://crates.io/crates/fs-err)，一个 filesystem errors 的简易库。

谢谢[Emerentius](https://users.rust-lang.org/t/crate-of-the-week/2704/821)的建议！

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

- [time-rs: 支持 #![no_std] targets， without 全局分配](https://github.com/time-rs/time/issues/249)
- [time-rs: OffsetDateTime::replace_time?](https://github.com/time-rs/time/issues/256)

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[here][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 370 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-09-21..2020-09-28

- [返回的值，现在为 128 bits in registers](https://github.com/rust-lang/rust/pull/76986)
- [添加： `asm!` support for MIPS](https://github.com/rust-lang/rust/pull/76839)
- [diagnostics: 改善 closure/generic 参数的不匹配](https://github.com/rust-lang/rust/pull/76711)
- [避免不必要的分配 at `rustc_errors`](https://github.com/rust-lang/rust/pull/76846)
- [添加 fast path for match checking](https://github.com/rust-lang/rust/pull/76918)
- [在 normalization 期间，缓存 types ](https://github.com/rust-lang/rust/pull/76928)
- [修复 #76244 的性能退化](https://github.com/rust-lang/rust/pull/76913)
- [使用更少的 metadata 编码 for proc-macro crates](https://github.com/rust-lang/rust/pull/76897)
- [可以更少对本地 LLVM 缓存动手动脚](https://github.com/rust-lang/rust/pull/77126)
- [引入一个新的 flag ，以便启用 experimental/unsound mir opts](https://github.com/rust-lang/rust/pull/76899)
- [MIR pass 去移除'不需要 drop 的类型'上，那些不需要的 drops](https://github.com/rust-lang/rust/pull/76673)
- [添加优化，避免 load of address](https://github.com/rust-lang/rust/pull/76683)
- [miri: 更多的信息化 deallocation error messages](https://github.com/rust-lang/rust/pull/77047)
- [miri: 添加 API for capturing backtrace](https://github.com/rust-lang/miri/pull/1559)
- [`DroplessArena`: 从 memory chunk 的结尾，分配 objects](https://github.com/rust-lang/rust/pull/77014)
- [允许不稳定的 `assume` intrinsic（内部函数） in const contexts](https://github.com/rust-lang/rust/pull/76973)
- [添加： `array::from_ref`](https://github.com/rust-lang/rust/pull/77074)
- [添加 `#[track_caller]` 到更多会 panic 的 `Cell` 函数](https://github.com/rust-lang/rust/pull/77055)
- [让 `Pin`的部分方法，变为 unstably const](https://github.com/rust-lang/rust/pull/76655)
- [复原：稳定化`const_type_id` ](https://github.com/rust-lang/rust/pull/77083)
- [复原：添加 `Atomic::from_mut`](https://github.com/rust-lang/rust/pull/76967)
- [添加 `cfg(target_has_atomic_equal_alignment)`，并对 `Atomic::from_mut`使用它](https://github.com/rust-lang/rust/pull/76965)
- [让 `[].as_`\[`mut_`\]`ptr_range()` 变为 (unstably) const](https://github.com/rust-lang/rust/pull/77097)
- [log: impl `Log` for `Box<Log>`](https://github.com/rust-lang/log/pull/414)

## Rust Compiler Performance Triage

- [2020-09-28](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-28.md)：0 个性能退化，1 个改进，3 个混合

本周最重要的变化是，对上周分类报告讨论中，性能退化的回应。好奇的读者可能对[#77058](https://github.com/rust-lang/rust/issues/77058)感兴趣，其中：从一个结构中，删除单个字段，使一个看似无关的基准测试的 wall-times 减少了 25％，或者[#76986](https://github.com/rust-lang/rust/issues/76986)，ABI change 应该是一个明显的胜利，但结果却好坏参半。

见[完整报告](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-09-28.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [对 assignment 解构](https://github.com/rust-lang/rfcs/pull/2909)
- [RFC: 仅实现 glob imports](https://github.com/rust-lang/rfcs/pull/2782)
- [从'外部进程'中，获取 cargo registry tokens ](https://github.com/rust-lang/rfcs/pull/2730)
- [RFC: 允许 \_ in type aliases](https://github.com/rust-lang/rfcs/pull/2524)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [stabilize slice_ptr_range.](https://github.com/rust-lang/rust/pull/77111)
- \[处置: 合并] [make rawfd implement the rawfd traits](https://github.com/rust-lang/rust/pull/76969)
- \[处置: 合并] [fix debug implementations of some of the hashmap and btreemap iterator types](https://github.com/rust-lang/rust/pull/75377)
- \[处置: 合并] [tracking issue for slice_partition_at_index](https://github.com/rust-lang/rust/issues/55300)

## New RFCs

- [\[RFC\] 一个基于 stack 的新 vector](https://github.com/rust-lang/rfcs/pull/2990)
- [RFC: 添加 `target` configuration](https://github.com/rust-lang/rfcs/pull/2991)
- [RFC: 添加 `target_abi` configuration](https://github.com/rust-lang/rfcs/pull/2992)
- [添加 async stream rfc](https://github.com/rust-lang/rfcs/pull/2996)

# Quote of the Week

> Rust 有个近乎于降头的玩意 (虽然不止一个, 但这个很重要): 不高效的代码是十分显眼的。有经验的开发者讨厌那些不高效的代码出现。甚至像老鼠见到猫似的，对 `Arc<RefCell<T>>` 尽而远之, 但在使用 Python 时，却对此类情形视若无睹。

- [Esteban Kuber on rust-users](https://users.rust-lang.org/t/failed-to-contribute-due-to-difficulty-in-understanding-rust/49148/6)

Thanks to [Jon G Stødle](https://users.rust-lang.org/t/twir-quote-of-the-week/328/945) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/j2yfcu/this_week_in_rust_358/)</small>
