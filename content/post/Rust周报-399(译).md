---
title: "Rust周报 399(译)"
date: 2021-07-17T19:56:02+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-399"
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
- 日期：2021-07-14
- [原文：399 期](https://this-week-in-rust.org/blog/2021/07/14/this-week-in-rust-399/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

## Updates from Rust Community

### Official

### Newsletters

- [This Month in Rust GameDev #23 - June 2021](https://gamedev.rs/news/023/)
- [This Month in Rust OSDev (June 2021)](https://rust-osdev.com/this-month/2021-06/)

### Project/Tooling Updates

- [Announcing Arti, a pure-Rust Tor implementation](https://blog.torproject.org/announcing-arti)
- [Programmatic stream filtering using WebAssembly](https://www.infinyon.com/blog/2021/06/smartstream-filters/)
- [Filecoin Rust implementation "Forest" project update](https://medium.com/chainsafe-systems/forest-growth-d26998a3da61)
- [Mina Rust implementation update: Web 3.0 with Rust x Wasm](https://medium.com/chainsafe-systems/mina-wasm-benefits-for-web-3-0-3d25991c3b75)
- [This Week In TensorBase 11](https://tensorbase.io/thisweek/2021-07-14-tw_11/)
- [Rust Analyzer Changelog #85](https://rust-analyzer.github.io/thisweek/2021/07/12/changelog-85.html)

### Observations/Thoughts

- [(Risp (in (Rust) (Lisp)))](https://stopachka.essay.dev/post/5/risp-in-rust-lisp)
- \[series] [learning rust #6: understanding ownership in rust](https://hamatti.org/posts/learning-rust-6-ownership/)
- \[series] [why and how we wrote a compiler in rust: part 2](https://bnjjj.medium.com/why-and-how-we-wrote-a-compiler-in-rust-blog-post-series-2-x-the-stack-548dad1919d0)
- \[audio] [what's new in rust 1.52 and 1.53](https://rustacean-station.org/episode/034-rust-1.52-1.53/)

### Rust Walkthroughs

- [Inline In Rust](https://matklad.github.io//2021/07/09/inline-in-rust.html)
- [Using WebAssembly threads from C, C++ and Rust](https://web.dev/webassembly-threads/)
- [Host a wasm module on Raspberry Pi easily Part 1](https://blog.knoldus.com/host-a-wasm-module-on-raspberry-pi-easily-part-1/)
- [Hello, Video Codec! - Demystify video codecs by writing one in ~100 lines of Rust](https://medium.com/tempus-ex/hello-video-codec-9937f64835bd)
- [Learning Idiomatic Rust with FizzBuzz](https://www.fotonixx.com/posts/rust-fizzbuzz/)
- [Rust + Tauri + Svelte Tutorial](https://jbarszczewski.com/rust-tauri-svelte-tutorial)
- [Rust Nibbles : Gazebo - Gazebo 库的介紹](https://developers.facebook.com/blog/post/2021/07/06/rust-nibbles-gazebo-dupe/)
- [A Rust controller for Kubernetes](https://blog.frankel.ch/start-rust/6/)
- [First steps with Docker + Rust](https://dev.to/rogertorres/first-steps-with-docker-rust-30oi)
- \[series] [writing an rpg using rg3d - #1 - character controller](https://rg3d.rs/tutorials/2021/07/09/rpg-tutorial1.html)
- \[series] [rust #4: options and results (part 2)](https://dev.to/cthutu/rust-4-options-and-results-part-2-5aca)
- \[series] [basic crud with rust using tide - refactoring](https://dev.to/pepoviola/basic-crud-with-rust-using-tide-refactoring-2meb)
- \[video] [end-to-end encrypted messaging in rust, with ockam by mrinal wadhwa](https://www.youtube.com/watch?v=jKvIeQFZKLc)
- \[video] \[series] [Building a Web Application with Rust - Part IX - Deploying on Kubernetes](https://www.youtube.com/watch?v=bK542nqn8I0)
- \[video] \[series] [ULTIMATE Rust Lang Tutorial! - Smart Pointers Part 1](https://www.youtube.com/watch?v=m76sRj2VgGo)
- \[video] \[series] [Implementing Hazard Pointers in Rust (part 2)](https://www.youtube.com/watch?v=_LK7qvBWNYo)

### Papers

- [Is Rust Used Safely by Software Developers?](https://arxiv.org/abs/2007.00752)

### Miscellaneous

- [Introducing hyperfunctions: new SQL functions to simplify working with time-series data in PostgreSQL](https://blog.timescale.com/blog/introducing-hyperfunctions-new-sql-functions-to-simplify-working-with-time-series-data-in-postgresql/?utm_source=timescaledb&utm_medium=social&utm_campaign=hyperfunctions-1-0-release&utm_content=blog-introducing-hyperfunctions)

## Crate of the Week

本周的箱子是[endbasic](https://www.endbasic.dev)，友好的 DOS / BASIC 仿真环境，在小型硬件和网络上运行。

谢谢[Julio Merino](https://users.rust-lang.org/t/crate-of-the-week/2704/935)建议。

[Submit your suggestions and votes for next week][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献但不知道从哪里开始？每周我们都会重点介绍来自 Rust 社区的一些任务，供您挑选并开始使用！

其中一些任务可能还有可用的导师，请访问任务页面了解更多信息。

**Synth**

- [Specify collections on import](https://github.com/getsynth/synth/issues/45)
- [Add tests for examples (i.e. bank_db)](https://github.com/getsynth/synth/issues/44)
- [Implemented a converter for timestamptz](https://github.com/getsynth/synth/issues/35)
- [Feature: Doc template generator](https://github.com/getsynth/synth/issues/31)

**Forest**

- [Cleanup net peers output](https://github.com/ChainSafe/forest/issues/1184)
- [FOREST_CONFIG_PATH env var](https://github.com/ChainSafe/forest/issues/1191)

如果您是 Rust 项目所有者，并且正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

254 个拉取请求是[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-07-05..2021-07-12

- [改善 opaque pointers support](https://github.com/rust-lang/rust/pull/86873)
- [recover from `&dyn mut` ... parse errors](https://github.com/rust-lang/rust/pull/86812)
- [improve error reporting for modifications behind `&` references](https://github.com/rust-lang/rust/pull/86815)
- [do not suggest adding a semicolon after ?](https://github.com/rust-lang/rust/pull/87061)
- [use `#[track_caller]` in const panic diagnostics](https://github.com/rust-lang/rust/pull/87000)
- [query-ify global limit attribute handling](https://github.com/rust-lang/rust/pull/86674)
- [support forwarding caller location through trait object method call](https://github.com/rust-lang/rust/pull/81360)
- [shrink the deprecated span](https://github.com/rust-lang/rust/pull/86320)
- [report an error if resolution of closure call functions failed](https://github.com/rust-lang/rust/pull/86249)
- [stabilize `RangeFrom` patterns in 1.55](https://github.com/rust-lang/rust/pull/83918)
- [account for capture kind in auto traits migration](https://github.com/rust-lang/rust/pull/86869)
- [stop generating `alloca`s & `memcmp` for simple short array equality](https://github.com/rust-lang/rust/pull/85828)
- [inline `Iterator as IntoIterator`](https://github.com/rust-lang/rust/pull/84560)
- [optimize unchecked indexing into `chunks` and 'chunks_mut\`](https://github.com/rust-lang/rust/pull/86823)
- [add `Integer::log` variants](https://github.com/rust-lang/rust/pull/80918)
- [special case for integer log10](https://github.com/rust-lang/rust/pull/869309)
- [cargo: unify cargo and rustc's error reporting](https://github.com/rust-lang/cargo/pull/9655)
- [rustdoc: fix rendering of reexported macros 2.0 and fix visibility of reexported items](https://github.com/rust-lang/rust/pull/86841)

### Rust Compiler Performance Triage

主要是安静的一周；改善大于退步。

分流完成 **@simulacrum**.修订范围：[9a27044f4..5aff6dd](https://perf.rust-lang.org/?start=9a27044f42ace9eb652781b53f598e25d4e7e918&end=5aff6dd07a562a2cba3c57fc3460a72acb6bef46&absolute=false&stat=instructions%3Au)

1 退步，4 改进，0 混合；其中 0 个在汇总中

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-07-13.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [RFC: I/O Safety](https://github.com/rust-lang/rfcs/pull/3128)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在达成决定的 RFC 和关键 PR 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Move assert_matches to an inner module](https://github.com/rust-lang/rust/pull/86947)
- \[disposition: merge] [Stabilize arbitrary_enum_discriminant](https://github.com/rust-lang/rust/pull/86860)
- \[disposition: close] [regression: infallible residual could not convert error](https://github.com/rust-lang/rust/issues/86831)
- \[disposition: merge] [Document iteration order of retain functions](https://github.com/rust-lang/rust/pull/86790)
- \[disposition: merge] [Partially stabilize const_slice_first_last](https://github.com/rust-lang/rust/pull/86593)
- \[disposition: merge] [Stabilize const_fn_transmute, const_fn_union](https://github.com/rust-lang/rust/pull/85769)
- \[disposition: merge] [Allow leading pipe in matches!() patterns.](https://github.com/rust-lang/rust/pull/85272)
- \[disposition: close] [Add expr202x macro pattern](https://github.com/rust-lang/rust/pull/84364)
- \[disposition: merge] [Remove P: Unpin bound on impl Future for Pin](https://github.com/rust-lang/rust/pull/81363)
- \[disposition: merge] [Stabilize core::task::if_ready!](https://github.com/rust-lang/rust/pull/81050)
- \[disposition: merge] [Tracking Issue for IntoInnerError::into_parts etc. (io_into_inner_error_parts)](https://github.com/rust-lang/rust/issues/79704)
- \[disposition: close] [Implement RFC 2500 Needle API (Part 1)](https://github.com/rust-lang/rust/pull/76901)

### New RFCs

- [RFC: map_or_default in Option and Result](https://github.com/rust-lang/rfcs/pull/3148)
- [Cargo feature migrations](https://github.com/rust-lang/rfcs/pull/3146)

# Quote of the Week

> Rust 的开始：呃，为什么编译器阻止我做这可怕的事情
>
> Rust 的成长：呃，为什么编译器不阻止我做这可怕的事情了

– [qDot on twitter](https://twitter.com/qDot/status/1412536312150716416)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1074) for the self-suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

*This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman).*

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/oki5o8/this_week_in_rust_399/)</small>
