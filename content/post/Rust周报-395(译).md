---
title: "Rust周报 395(译)"
date: 2021-06-18T23:07:42+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-395"
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
- 日期：2021-06-16
- [原文：395 期](https://this-week-in-rust.org/blog/2021/16/06/this-week-in-rust-395/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

**强调**

主题：自杀，心理健康

哀悼 Rust 社区中，某人的去世。这是一个非常敏感的话题，很难真正为人命的损失伸张正义。我们能做的最重要的事情是提高人们对心理健康的认识。

如果您或您认识的人需要自杀预防热线，请访问<https://www.opencounseling.com/suicide-hotlines>获取您所在国家/地区的紧急情况和预防自杀热线电话号码。

[Open Source and Mental Health](https://www.redox-os.org/news/open-source-mental-health/)

### Official

- \[Inside] [1.53.0 pre-release testing](https://blog.rust-lang.org/inside-rust/2021/06/15/1.53.0-prelease.html)
- \[Inside] [please welcome boxy, léo lanteri thauvin and the8472 to compiler-contributors](https://blog.rust-lang.org/inside-rust/2021/06/15/boxyuwu-leseulartichaut-the8472-compiler-contributors.html)

### Newsletters

- [This Month in Rust GameDev #22 - May 2021](https://gamedev.rs/news/022/)

### Project/Tooling Updates

- [rust-analyzer Changelog #81](https://rust-analyzer.github.io/thisweek/2021/06/14/changelog-81.html)
- [AWS-SDK-Rust: CloudFormation, SageMaker, EC2, and SES](https://github.com/awslabs/aws-sdk-rust/releases/tag/v0.0.8-alpha)
- [Announcing Aya](https://confused.ai/posts/announcing-aya)
- [This Week In TensorBase 7](https://tensorbase.io/thisweek/2021-06-16-tw_7/)
- [Introducing cap-std, a capability-based version of the Rust standard library](https://blog.sunfishcode.online/introducing-cap-std/)
- [Wasmer 2.0, it's a big deal!](https://wasmer.io/posts/wasmer-2.0)
- [New crate announcement, `iterate`](https://www.reddit.com/r/rust/comments/nwdyip/new_create_announcement_iterate/)
- [ripgrep 13.0.0 release](https://github.com/BurntSushi/ripgrep/releases/tag/13.0.0)

### Observations/Thoughts

- [A few thoughts on Fuchsia security](https://blog.cr0.org/2021/06/a-few-thoughts-on-fuchsia-security.html)
- [On using Rust to implement shell history search/sync (interview with Ellie Huxtable)](https://console.dev/interviews/atuin-ellie-huxtable/)
- [Visualizing memory management in Rust](https://deepu.tech/memory-management-in-rust/)
- \[audio] [using rust with flutter](https://youtu.be/iQer8hUu0Es)

### Rust Walkthroughs

- [Embedded-Rust: Build & Flash binary to STM32F3DISCOVERY](https://blog.knoldus.com/embedded-rust-build-flash-binary-to-stm32f3discovery/)
- [Learning to Fly: Let's simulate evolution in Rust! (pt 4)](https://pwy.io/en/posts/learning-to-fly-pt4/)
- [Baby's first Rust with extra steps (XPC, launchd, and FFI)!](https://dstancu.net/macos/rust/ffi/xpc/ncurses/2021/06/15/rust-xpc-ffi.html)
- [加速 WebCola Graph Viz Library with Rust + WebAssembly](https://cprimozic.net/blog/speeding-up-webcola-with-webassembly/)
- [From NAND to Raytracer: Raytracing on the Hack computer (feat. Rust)](https://blog.alexqua.ch/posts/from-nand-to-raytracer/)
- [Cacao: Building macOS (and iOS) Apps in Rust](https://rymc.io/blog/2021/cacao-rs-macos-ios-rust/)
- [Build an API in Rust (Part 1)](https://dev.to/naruhodo/build-an-api-in-rust-part-1-5c4g)
- [Learn to Build a Parser in Rust for Fun and Profit](https://dev.to/pancy/learn-to-build-a-parser-in-rust-for-fun-and-profit-2id5)
- [Beginner's Guide to Running Rust on AWS Lambda](https://dev.to/nicholaschiasson/beginner-s-guide-to-running-rust-on-aws-lambda-277n)
- [A Command Line Key-Value Data Store using the Rust Programming Language.](https://dev.to/sirneij/a-command-line-key-value-data-store-using-the-rust-programming-language-33b6)
- [How to use casbin(访问控制模型库) authorization in your rust web-app (part 3)](https://dev.to/smrpn/how-to-use-casbin-authorization-in-your-rust-web-app-part-3-4g2f)
- [3 到 10 倍地加速输入信息的解析 by switching from serde to the nom library](https://medium.com/tezedge/speeding-up-incoming-message-parsing-by-3-to-10-times-by-switching-from-serde-to-the-nom-library-a74b04391bb4)
- \[ZH] \[series] [Build front-end web apps with Yew and WebAssembly in Rust -part 3: Assets & Refactor (Rust 和 Wasm 的融合，使用 yew 构建 web 前端（3）- 资源文件及小重构)](<https://blog.budshome.com/budshome/rust-he-wasm-de-rong-he-,shi-yong-yew-gou-jian-web-qian-duan-(3)--zi-yuan-wen-jian-ji-xiao-zhong-gou>)
- \[ZH] \[series] [Build front-end web apps with Yew and WebAssembly in Rust -part 4: GraphQL data & Parsing (Rust 和 Wasm 的融合，使用 yew 构建 web 前端（4）- 获取 GraphQL 数据并解析)](<https://blog.budshome.com/budshome/rust-he-wasm-de-rong-he-,shi-yong-yew-gou-jian-web-qian-duan-(4)--huo-qu-graphql-shu-ju-bing-jie-xi>)
- \[video] [building a web application with rust - part 1 - configuration](https://youtu.be/Wmq3etdwCbM)
- \[video] [building a web application with rust - part 2 - database setup](https://youtu.be/c9qSGUHgE1c)
- \[video] [lock-free to wait-free simulation in rust (part 2)](https://youtu.be/tNzCj8691LE)

### Research

### Miscellaneous

- [Meet the Rustaceans: A series of interviews with Facebook Rust engineers](https://developers.facebook.com/blog/post/2021/06/03/meet-rustaceans-neil-mitchell/)
- [Pop!\_OS uses a lot of Rust](https://www.reddit.com/r/rust/comments/nyd1qw/pop_os_uses_a_lot_of_rust/)
- \[video] [keynote: bryan cantrill - hardware/software co-design: the coming golden age](https://youtu.be/nY07zWzhyn4)

## Crate of the Week

本周有两个箱子：[nativeshell](https://github.com/nativeshell/nativeshell)为您提供 Rust 中的 Flutter 应用程序，而[static-rc](https://github.com/matthieu-m/static-rc)是一个编译时，引用计数的智能指针。

谢谢[Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/922)两个提名

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

- [boa-dev/boa has some good first issues](https://github.com/boa-dev/boa/labels/good%20first%20issue)
- [softprops/shiplift - We have too many unwrap() calls in the codebase](https://github.com/softprops/shiplift/issues/301)

如果您是 Rust 项目所有者，并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

289 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-06-07..2021-06-14

- [fix force-warns to allow dashes](https://github.com/rust-lang/rust/pull/86117)
- [suggest a trailing comma if a 1-tuple is expected and a parenthesized expression is found](https://github.com/rust-lang/rust/pull/86116)
- [do not suggest to add type annotations for unnameable types](https://github.com/rust-lang/rust/pull/86215)
- [`to_digit` simplification (less jumps)](https://github.com/rust-lang/rust/pull/85630)
- [multiple improvements to `RwLock`s](https://github.com/rust-lang/rust/pull/84687)
- [add `Ipv6Addr::is_unicast`](https://github.com/rust-lang/rust/pull/85791)
- [stabilize `wasm simd intrinsics`](https://github.com/rust-lang/rust/pull/86204)
- [stabilize `maybe_uninit_ref`](https://github.com/rust-lang/rust/pull/86273)
- [stabilize `simd_x86_bittest`](https://github.com/rust-lang/rust/pull/86233)
- [cargo: implement warning for ignored trailing arguments](https://github.com/rust-lang/cargo/pull/9561)
- [clippy: fix `while_let_on_iterator` suggestion in a closure](https://github.com/rust-lang/rust-clippy/pull/7262)
- [clippy: remove requirement of fully qualified path for `disallowed_method`/`type`](https://github.com/rust-lang/rust-clippy/pull/7345)
- [clippy: fix false positive on `semicolon_if_nothing_returned`](https://github.com/rust-lang/rust-clippy/pull/7326)
- [clippy: fix false positive in `default_numeric_fallback` with external macro expansion](https://github.com/rust-lang/rust-clippy/pull/7325)
- [clippy: `Vec` `extend` to `append`](https://github.com/rust-lang/rust-clippy/pull/7270)
- [BPF target support](https://github.com/rust-lang/rust/pull/79608)
- [support for force-warns](https://github.com/rust-lang/rust/pull/85788)
- [improve debugging experience for enums on windows-msvc](https://github.com/rust-lang/rust/pull/85292)
- [parser: ensure that all nonterminals have tokens after parsing](https://github.com/rust-lang/rust/pull/84995)
- [don't suggest unsized indirection in where-clauses](https://github.com/rust-lang/rust/pull/85979)
- [rustc: allow safe `#[target_feature]` on wasm](https://github.com/rust-lang/rust/pull/84988)
- [always go through the `expn_that_defined` query](https://github.com/rust-lang/rust/pull/86002)
- [perf: miscellaneous inlining improvements](https://github.com/rust-lang/rust/pull/85892)
- [perf: only compute the trait map once](https://github.com/rust-lang/rust/pull/85905)
- [stabilize `vecdeque_binary_search`](https://github.com/rust-lang/rust/pull/83362)
- [update standard library for `IntoIterator` implementation of arrays](https://github.com/rust-lang/rust/pull/85930)
- [clippy: don't warn about `cfg!(..)` as a constant in assertions](https://github.com/rust-lang/rust-clippy/pull/7319)
- [clippy: fix `needless_collect` with binding shadowing](https://github.com/rust-lang/rust-clippy/pull/7289)
- [clippy: add lint `manual_str_repeat`](https://github.com/rust-lang/rust-clippy/pull/7265)

### Rust Compiler Performance Triage

一些很好的改进，和一些退步。没有大的变化。

分流完成**@simulacrum**.修订范围：[1160cf..a50d721](https://perf.rust-lang.org/?start=1160cf864f2a0014e3442367e1b96496bfbeadf4&end=a50d72158e08e02cfc051b863017bdbd2c45b637&absolute=false&stat=instructions%3Au)

3 个退步，3 个改进，1 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-06-08.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

_本周没有 RFC 获得批准。_

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [disposition: close] [Add the boxed!() macro to "de-magic" box syntax](https://github.com/rust-lang/rfcs/pull/3057)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [disposition: merge] [Stabilize span_open() and span_close().](https://github.com/rust-lang/rust/pull/86136)
- [disposition: merge] [Redefine ErrorKind::Other and stop using it in std.](https://github.com/rust-lang/rust/pull/85746)
- [disposition: merge] [When using process::Command on Windows, environment variable names must be case-preserving but case-insensitive](https://github.com/rust-lang/rust/pull/85270)
- [disposition: merge] [Ignore derived Clone and Debug implementations during dead code analysis](https://github.com/rust-lang/rust/pull/85200)
- [disposition: merge] [Support forwarding caller location through trait object method call](https://github.com/rust-lang/rust/pull/81360)
- [disposition: merge] [Tracking issue for ops::Bound::cloned()](https://github.com/rust-lang/rust/issues/61356)

### New RFCs

- [RFC: fallible-allocation](https://github.com/rust-lang/rfcs/pull/3140)
- [Cargo alternative registry auth](https://github.com/rust-lang/rfcs/pull/3139)

# Quote of the Week

- 若是说手动管理内存就是拿着一把枪, 那么 the borrow checker 就是那个自动的保险栓，它可以防止你对着自己时走火。但它是粗糙的,并在谨慎方面犯了错误; 它假装您的脚模就在它规定的矩形框内，而不是详细的 3D 网格。如果你 _真的_ 想，试试'瞄准脚趾之间，而不打到自己' (例如, "此函数返回的值，必须在不超过 15 次连续调用此函数的情况下，保持活动状态"), 那么 unsafe 你可以尝试一下，但借用检查器的内置规则不够细化，无法帮助你, 尽管如此，如果你不小心，在声明之前，把手放在前面，它仍然会阻止你.

– [infogulch on Hacker News](https://news.ycombinator.com/item?id=27468885)

Thanks to [StyMaar](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1056) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/o1l0xo/this_week_in_rust_395/)</small>
