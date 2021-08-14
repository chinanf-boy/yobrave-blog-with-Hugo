---
title: "Rust周报 403(译)"
date: 2021-08-13T22:57:31+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-403"
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
- 日期：2021-08-10
- [原文：403 期](https://this-week-in-rust.org/blog/2021/08/10/this-week-in-rust-403/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。
Rust\*公开开发[on GitHub](https://github.com/rust-lang/this-week-in-rust).如果您在本周的问题中发现任何错误，[please submit a PR](https://github.com/rust-lang/this-week-in-rust/pulls).

## Updates from Rust Community

### Official

- [The push for GATs stabilization](https://blog.rust-lang.org/2021/08/03/GATs-stabilization-push.html)
- \[Inside] [lang team august update](https://blog.rust-lang.org/inside-rust/2021/08/04/lang-team-aug-update.html)

### Newsletters

- [This Month in Rust GameDev #24 - July 2021](https://gamedev.rs/news/024/)
- [This Month in Rust OSDev (July 2021)](https://rust-osdev.com/this-month/2021-07/)
- [The Monthly Oxide #5](https://mgattozzi.substack.com/p/the-monthly-oxide-5)
- [Rust Module of the Week: std::fs (Part 2): Dirs, Dirs, Dirs](https://motw.rs/blog/2021/08/08/stdfs-part-2-dirs-dirs-dirs/)

### Project/Tooling Updates

- [Rustdoc 会在源码页面，添加 定义链接 !](https://www.reddit.com/r/rust/comments/oz50qk/rustdoc_will_now_add_jump_to_definition_links_in/)
- [rust-analyzer Changelog #89](https://rust-analyzer.github.io/thisweek/2021/08/09/changelog-89.html)
- [rust-analyzer Financial Report #3](https://rust-analyzer.github.io/blog/2021/08/03/financial-report-3.html)
- [Whats New in IntelliJ Rust for the 2021.2 Release Cycle](https://blog.jetbrains.com/rust/2021/08/04/what-s-new-in-intellij-rust-for-the-2021-2-release-cycle/)
- [SixtyFPS weekly report for 8th of August 2021](https://sixtyfps.io/thisweek/2021-08-09.html)
- [How do Mina nodes communicate? Implementing bin_prot in Rust](https://medium.com/chainsafe-systems/how-do-mina-nodes-communicate-5a10b80fa253)
- [Trunk v0.10 – v0.13](https://trunkrs.dev/blog/v10-v13/)
- [Bevy 第一个生日](https://bevyengine.org/news/bevys-first-birthday/)
- [Progress report on rustc_codegen_cranelift (July 2021)](https://bjorn3.github.io/2021/08/05/progress-report-july-2021.html)
- [\[upcoming\] Volt - A rust-based package manager that's up to 12x faster than Yarn](https://www.reddit.com/r/rust/comments/oymdoj/upcoming_volt_a_rustbased_package_manager_thats/)

### Observations/Thoughts

- [On Collecting Result Types in Rust](https://diaries.vercel.app/posts/collecting-result/)
- [Rust in Production: Qovery](https://serokell.io/blog/rust-in-production-qovery)
- [How to write really slow Rust code - Part 2](https://renato.athaydes.com/posts/how-to-write-slow-rust-code-part-2.html)
- [Slitter: a slab allocator that trusts but verifies (in Rust, for C)](https://engineering.backtrace.io/2021-08-04-slitter-a-slab-allocator-that-trusts-but-verifies/)
- [当 零成本抽象 不再 零成本](https://blog.polybdenum.com/2021/08/09/when-zero-cost-abstractions-aren-t-zero-cost.html)

### Rust Walkthroughs

- [Rust cli example: Ferris fetches Go gopher postcards](https://dev.to/uggla/rust-cli-example-ferris-fetches-go-gopher-postcards-3gb5)
- [A Little Bit About PRNG Stuff](https://lokathor.github.io/prng/)
- [Rust's Vector](https://blog.frankel.ch/start-rust/9/)
- [Interacting with data from FFI in Rust](https://blog.guillaume-gomez.fr/articles/2021-07-29+Interacting+with+data+from+FFI+in+Rust)
- [Loading a Rust library as a Lua module in Neovim](https://blog.kdheepak.com/loading-a-rust-library-as-a-lua-module-in-neovim.html)
- [Adding Rust-Stable libstd Support for Xous](https://www.crowdsupply.com/sutajio-kosagi/precursor/updates/adding-rust-stable-libstd-support-for-xous)
- [Rust BDD tests with Cucumber](https://dev.to/rogertorres/rust-bdd-with-cucumber-4p68)
- [So you want to write a GUI framework](https://www.cmyr.net/blog/gui-framework-ingredients.html)
- [Tauri with Standard Svelte or SvelteKit](https://medium.com/@cazanator/tauri-with-standard-svelte-or-sveltekit-ad7f103c37e7)
- \[JP] [rust で web バックエンド開発をはじめる](https://developers.cyberagent.co.jp/blog/archives/31110/)
- \[video] [explaining rust analyzer 08: mini rowan, green and red trees](https://youtu.be/n5LDjWIAByM)

### Research

- [CVE-2021-29922 – rust standard library “net” – 不合适的 Input Validation of octal literals in rust 1.52.0 std::net ，导致不确定的 SSRF & RFI vulnerabilities.](https://sick.codes/sick-2021-015)
- [将 Typestates 改装到 Rust](https://github.com/rustype/typestate-rs/blob/main/paper/sblp21.pdf)

### Miscellaneous

- [SIMD usage in C++, C# and RUST](https://vksegfault.github.io/posts/simd-usage-cpp-csharp-rust/)
- [RIP 16-bit crate IDs](https://www.reddit.com/r/rust/comments/p1t32e/media_rip_16bit_crate_ids/)
- [最爱的 Rust 命令行工具?](https://www.reddit.com/r/rust/comments/oygrp1/your_favorite_rust_cli_utility_i_have_my_top_10/)
- [Go, Rust "net" library 受到 critical IP address validation vulnerability 影响](https://www.bleepingcomputer.com/news/security/go-rust-net-library-affected-by-critical-ip-address-validation-vulnerability/)
- [Microsoft Rust intro says "Rust is known to leak memory"](https://www.reddit.com/r/rust/comments/p0bu4a/microsoft_rust_intro_says_rust_is_known_to_leak/)

## Crate of the Week

本周的箱子是[ockam](https://crates.io/crates/ockam)，为我们其他人，实现"与传输无关"的端到端加密的箱子。

谢谢[staticassert](https://users.rust-lang.org/t/crate-of-the-week/2704/943)的自荐。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Module of the Week

继续[Rust Module of the Week](https://motw.rs)，这周是[std::fs Part 2: Dirs, Dirs, Dirs](https://motw.rs/blog/2021/08/08/stdfs-part-2-dirs-dirs-dirs/)。欢迎投稿和反馈[here](https://github.com/slyons/rust-module-of-the-week).

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

- [rust-lang/this-week-in-rust - Feature request: Dark theme for the website](https://github.com/rust-lang/this-week-in-rust/issues/2274)
- [Stranger6667/jsonschema-rs - Implement the uuid format validator](https://github.com/Stranger6667/jsonschema-rs/issues/266)
- [Stranger6667/jsonschema-rs - Implement the duration format validator](https://github.com/Stranger6667/jsonschema-rs/issues/265)
- [Stranger6667/jsonschema-rs - Option to turn off processing of the format keyword](https://github.com/Stranger6667/jsonschema-rs/issues/261)

其中一些任务，可能还有可用的导师，请访问任务页面了解更多信息。

如果您是 Rust 项目所有者并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

324 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-08-02..2021-08-09

- [fill out remaining parts of C-unwind ABI](https://github.com/rust-lang/rust/pull/86155)
- [CTFE: throw unsupported error when partially overwriting a pointer](https://github.com/rust-lang/rust/pull/87248)
- [proc macro spans: make columns 1 based](https://github.com/rust-lang/rust/pull/87712)
- [improve diagnostics for wrongly ordered keywords in function declaration](https://github.com/rust-lang/rust/pull/87235)
- [replace `HirId`s with `LocalDefId`s in `AccessLevels` tables](https://github.com/rust-lang/rust/pull/87568)
- [add `config.toml` options for enabling overflow checks in rustc and std](https://github.com/rust-lang/rust/pull/87784)
- [use zeroed allocations in the mir interpreter instead eagerly touching the memory](https://github.com/rust-lang/rust/pull/87777)
- [only compute `is_freeze` for layout-constrained ADTs](https://github.com/rust-lang/rust/pull/87737)
- [allow generic SIMD array element type](https://github.com/rust-lang/rust/pull/87716)
- [properly find owner of closure in THIR unsafeck](https://github.com/rust-lang/rust/pull/87645)
- [make `wrapping_neg()` use `wrapping_sub()`, `#[inline(always)]`](https://github.com/rust-lang/rust/pull/87150)
- [stabilize `Vec<T>::shrink_to`](https://github.com/rust-lang/rust/pull/86879)
- [`impl Default, Copy, Clone for std::io::Sink` and `Empty`](https://github.com/rust-lang/rust/pull/86744)
- [change environment variable getters to error recoverably](https://github.com/rust-lang/rust/pull/86183)
- [add `core::stream::from_iter`](https://github.com/rust-lang/rust/pull/81797)
- [futures: implement `Default` for `OptionFuture`](https://github.com/rust-lang/futures-rs/pull/2471)
- [clippy: don't emit `too_many_lines` for closures](https://github.com/rust-lang/rust-clippy/pull/7534)
- [clippy: add xor case to manual swap lint](https://github.com/rust-lang/rust-clippy/pull/7506)

### Rust Compiler Performance Triage

表现平静的一周，没有大的变化。退步仅限于几个基准测试。

分流完成 **@simulacrum**.修订范围：[998cfe5..3354a44](https://perf.rust-lang.org/?start=998cfe5aad7c21eb19a4bca50f05a13354706970&end=3354a44d2fa8d5ba6b8d6b40d2596de2c8292ec1&absolute=false&stat=instructions%3Au)

2 个退步，0 个改进，0 个混合；其中 1 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-08-03.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [RFC: Overconstraining and omitting unsafe in impls of unsafe trait methods](https://github.com/rust-lang/rfcs/pull/2316)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [tracking issue for unsafecell::raw_get](<https://github.com/rust-lang/rust/issues/66358>)

### New RFCs

- [RFC: let-expression](https://github.com/rust-lang/rfcs/pull/3159)

# Quote of the Week

We regrettably lack nominations,  
so as I can't choose fresh quotations,  
at last nor this time,  
I'll offer this rhyme  
to quell all discombombulations.

– 一个非常抱歉的 llogiq（freestyle）

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/p2701i/this_week_in_rust_403/)</small>
