---
title: "Rust周报 353(译)"
date: 2020-08-27T22:47:57+08:00
tags: ["week"]
description: "螃蟹-Rust周报-353"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-08-26
- [原文：353 期](https://this-week-in-rust.org/blog/2020/08/26/this-week-in-rust-353/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community（Rust 社区更新）

### Official（官方）

### Tooling（工具）

- [给予 IntelliJ Rust 插件帮助](https://kobzol.github.io/rust/intellij/2020/07/31/contributing-0-setup.html)
- [IntelliJ Rust Changelog #129](https://intellij-rust.github.io/2020/08/24/changelog-129.html)
- [Rust Analyzer Changelog #39](https://rust-analyzer.github.io/thisweek/2020/08/24/changelog-39.html)

### Newsletters（时讯）

- [This Week in Veloren 81](https://veloren.net/devblog-81/)
- [嵌入式工作组 Newsletter - 25](https://rust-embedded.github.io/blog/newsletter-25/)

### Observations/Thoughts（观察/思考）

- [通过 Rusoto ，和 IAM Roles 用于服务器账号，在 Rust-based Kubernetes 应用访问 Amazon Web Services](https://dev.to/pnehrer/a-story-of-rusty-containers-queues-and-the-role-of-assumed-identity-kl2)
- [书接上文: 裸机 Rust 的泛型](https://www.ecorax.net/as-above-so-below-1/)
- [关于 Rust vs OCaml 的首次想法](https://blog.darklang.com/first-thoughts-on-rust-vs-ocaml/)
- [safe FFI bindings in Rust 的问题](https://www.abubalay.com/blog/2020/08/22/safe-bindings-in-rust)
- [That's so Rusty!](https://dev.to/imaculate3/that-s-so-rusty-3akm)
- [Profiling 并不总那么有科幻感](https://www.justanotherdot.com/posts/profiling-doesnt-always-have-to-be-fancy.html)
- [为什么我会喜欢 Piston, 一个 Rust 游戏引擎](https://kai.coding.blog/why-i-like-piston)
- [CXX 争论](https://steveklabnik.com/writing/the-cxx-debate)
- \[视频] [Bending the curve: A personal tutor at your fingertips](https://youtu.be/Z6X7Ada0ugE)

### Learn Standard Rust

- [为什么我不能提前 return，在一个 if 表达式， in Rust?](https://www.christopherbiscardi.com/why-can-t-i-early-return-in-an-if-statement-in-rust)
- [用上 Rust's Lifetime，可以在 Runtime 期间，少流点血喔](https://blog.knoldus.com/bleed-less-during-runtime-with-rusts-lifetime/)
- [A Javascript Developer's 备忘录 for Rust](https://tndl.me/blog/2020/rust-javascript-cheatsheet/)
- \[视频] [RustConf 2020 - Macros for a More Productive Rust](https://youtu.be/dZiWkbnaQe8)
- \[视频] [RustConf 2020 - Rust for Non-Systems Programmers](https://youtu.be/BBvcK_nXUEg)

### Learn More Rust

- [Async 的不同等级，in Rust](https://www.fpcomplete.com/blog/different-levels-async-rust/)
- [怎么运行 Rust on Arduino Uno](https://dev.to/creativcoder/how-to-run-rust-on-arduino-uno-40c0)
- [让我们构建一个一体二进制文件 gRPC server-client，with Rust in 2020 - Part 1](https://dev.to/tjtelan/let-s-build-a-single-binary-grpc-server-client-with-rust-in-2020-part-1-3cnk)
- [编写 Test Case 生成器，for a Programming Language](https://fitzgeraldnick.com/2020/08/24/writing-a-test-case-generator.html)
- [Day 12: 编写 web 应用 with actix-web - 100DaysOfRust](https://dev.to/0xbf/day11-write-web-app-with-actix-web-100dayofrust-1lkn)
- [Kernel printing with Rust](https://not-matthias.github.io/kernel-printing-with-rust/)
- [动画运行 in Amethyst](https://mtigley.dev/posts/running-animation/)
- \[PL] [CrabbyBird #0 Pierwsza przygoda z Rustem i Godotem](https://postacnormalna.pl/pierwsza-przygoda-z-rustem-i-godotem/)
- \[视频] [Build a Smart Bookmarking Tool with Rust and Rocket Video Series](https://www.youtube.com/playlist?list=PLzIwronG0sE56c6hDYOKW3-rPxmIyttoe)
- \[视频] [RustConf 2020 - Error Handling Isn't All About Errors](https://youtu.be/rAF8mLI0naQ)
- \[视频] [RustConf 2020 - Under a Microscope: Exploring Fast and Safe Rust for Biology](https://youtu.be/2b8InauuRqw)
- \[视频] [RustConf 2020 - My First Rust Project: Starting a 2D game with Amethyst](https://youtu.be/GFi_EdS_s_c)
- \[视频] [RustConf 2020 - Controlling Telescope Hardware with Rust](https://youtu.be/xlVnp7VOxRE)

### Project Updates（项目更新）

- [Rustsim 组织成立为 Dimforge 公司](https://www.dimforge.com/blog/2020/08/18/rustsim-becomes-dimforge/)
- [宣布 Rapier 物理引擎](https://www.dimforge.com/blog/2020/08/25/announcing-the-rapier-physics-engine/)
- [defmt, 高效 Rust 日志框架，for 嵌入式设备](https://ferrous-systems.com/blog/defmt/)
- [Bevy 展望](https://bevyengine.org/news/scaling-bevy/)
- [Nushell 的一年](http://www.nushell.sh/blog/2020/08/23/year_of_nushell.html)

### Miscellaneous（杂项）

- [Rust-style futures in C](https://axelforsman.tk/2020/08/24/rust-style-futures-in-c.html)
- [移植一个 Golang and Rust 命令行工具到 D 语言](https://blog.pingfrommorocco.com/2020/08/porting-golang-and-rust-cli-tool-to-d.html)
- [How to Read First Impression Posts](https://www.possiblerust.com/community/how-to-read-first-impression-posts)
- \[音频] [The Virtual World - Embedded Rust & Ferrous Systems - James Munns](https://anchor.fm/the-virtual-world/episodes/Embedded-Rust--Ferrous-Systems---James-Munns-eidv76)
- \[音频] [Rust GameDev Podcast - Interview with Herbert Wolverson (Bracket-Lib)](https://rustgamedev.com/episodes/interview-with-herbert-wolverson-bracket-lib)
- \[视频] [Before Main: How Executables Work on Linux](https://youtu.be/jR2hUhjcAXI)
- \[视频] [RustConf 2020 - Opening Keynote](https://youtu.be/IwPRu5FhfIQ)
- \[视频] [RustConf 2020 - How to Start a Solo Project that You'll Stick With](https://youtu.be/yv6L_xmjw5I)
- \[视频] [RustConf 2020 - Closing Keynote](https://youtu.be/RNsEsZbXE-4)

# 周箱

This week's crate is [pdf](https://github.com/pdf-rs/pdf), 读取 PDF 文件。

Thanks to [S3bk](https://users.rust-lang.org/t/crate-of-the-week/2704/806) for the suggestion!

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [Rusty Celery 有几个 issues ，标记为 "Help Wanted"](https://github.com/rusty-celery/rusty-celery/issues?q=label%3A%22Status%3A+Help+Wanted%22)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

292 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-08-17..2020-08-24

- [为同样的 layout sizes，移除 fast path in reallocation](https://github.com/rust-lang/rust/pull/75621)
- [（缺失的文档示例）missing doc examples lint 提升](https://github.com/rust-lang/rust/pull/75776)
- [将 missing_fragment_specifier 提格为重大错误](https://github.com/rust-lang/rust/pull/75516)
- [polymorphize: 若任何参数在一个 predicate 上使用，则表示全部参数都在使用](https://github.com/rust-lang/rust/pull/75595)
- [使 `OnceCell<T>` 对 dropck 透明化](https://github.com/rust-lang/rust/pull/75648)
- [don't panic in `Vec::shrink_to_fit`](https://github.com/rust-lang/rust/pull/75677)
- [improve codegen for `align_offset`](https://github.com/rust-lang/rust/pull/75600)
- [添加：`Arc::new_cyclic`](https://github.com/rust-lang/rust/pull/75505)
- [新的 zeroed slice](https://github.com/rust-lang/rust/pull/75171)
- [make `<*const T>::is_null` const fn](https://github.com/rust-lang/rust/pull/74940)
- [稳定化：`ptr_offset_from`](https://github.com/rust-lang/rust/pull/74238)
- [use `min_specialization` in libcore](https://github.com/rust-lang/rust/pull/73565)
- [对 浮点数 bitcasts（位转换）和 classification（分类）方法进行 const 化](https://github.com/rust-lang/rust/pull/72449)
- [compiler-builtins: 添加 mips/mips64 compiler-rt 回馈，所以 libgcc 不是必要的](https://github.com/rust-lang/compiler-builtins/pull/341)
- [pin-utils: 弃用 unsafe pin projection macros](https://github.com/rust-lang/pin-utils/pull/33)
- [git2: 修复 悬挂指针 in format_email](https://github.com/rust-lang/git2-rs/pull/614)
- [git2: 添加对 zlib-ng 的支持](https://github.com/rust-lang/git2-rs/pull/612)
- [cargo: 移除不必要的 allocations](https://github.com/rust-lang/cargo/pull/8641)
- [rust-bindgen: 生成 unnamed enums, 这样他们就可以被其他成员引用啦](https://github.com/rust-lang/rust-bindgen/pull/1882)

## Rust 编译器性能分类

- [2020-08-24](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-08-24.md):
  1 个性能退化, 4 个提升。

  本周包括一个重要的速度提升，优化现实 crates 的构建速度 (up to 5%) ，原因是 [更新为 LLVM 11 ](https://github.com/rust-lang/rust/pull/73526#issuecomment-679374070)。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [更新 intra-doc link RFC ，去配合具体实现](https://github.com/rust-lang/rfcs/pull/2975)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [稳定化： deque_make_contiguous](https://github.com/rust-lang/rust/pull/74559)
- \[处置: 合并] [跟踪问题： hint::spin_loop (renamed sync::atomic::spin_loop_hint)](https://github.com/rust-lang/rust/issues/55002)

## New RFCs

_No new RFCs were proposed this week._

# 本周最佳语录

> Rust 对我来说，是一只非比寻常的野兽。它是 _更_ 庞大 和 _更_ 具能力的语言。然而, 我会发现，在多种方面, 它在我解决问题的路上，布上了相当多的荆棘藤蔓。我常常发现我自己在一个问题上感到困惑，那就是如何能够一锤定音地解决一个‘问题’。当我了解关于解决某问题的惯用方式，我常会被它的'天才'所震惊到，同时对由我提出的解决方案是如此困难，而感到少许的垂头丧气 :-).

- [mikekchar on /r/rust](https://reddit.com/r/rust/comments/id8n8d/are_some_of_you_coming_from_javascript_ts/g27d3ni/)

Thanks to [Stephan Sokolow](https://users.rust-lang.org/t/twir-quote-of-the-week/328/931) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/ih8uai/this_week_in_rust_353/)</small>
