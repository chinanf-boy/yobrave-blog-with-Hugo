---
title: "Rust周报 400(译)"
date: 2021-07-22T20:42:47+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-400"
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
- 日期：2021-07-21
- [原文：400 期](https://this-week-in-rust.org/blog/2021/07/21/this-week-in-rust-400/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

### 400 期啦

<details>

<summary>感谢 所有</summary>


We are so happy to have reached issue 400 of _This Week in Rust_! To mark this occasion, we would like to introduce you to your editors who put these issues together for you every week!

### Current Editors

**Nell Shamrell-Harrington**


Hello everyone! I'm Nell Shamrell-Harrington ([nellshamrell](https://github.com/nellshamrell/) on GitHub). I've served as lead editor of This Week in Rust for a little over a year now. Currently, I work as a Principal Engineer at Microsoft, prior to that I was on the Rust team at Mozilla. I also am a member of the Rust Foundation Board of Directors. My greatest joy in editing This Week in Rust is seeing how dedicated Rustaceans are to teaching and passing on what they have learned. We are a community where personal maturity and empathy are as important as technical excellence. When I'm not working, I'm often caring for and playing with my three pet bunnies - Lucy, Leia, and Noah!

**Andre Bogus**

Greetings, Rustaceans! I'm Andre 'llogiq' Bogus, and I've been editing TWiR since 2016. I currently work with [synth](https://getsynth.com), my third Job using Rust. I am one of the first clippy maintainers, a mod team member, a [Rust bard](https://twitter.com/llogiq) and I have several crates to my name. I'm always amused with the quotes you folks suggest, and like being on top of the merged PRs, so I know what's coming in the next Rust versions. Besides Rust, I like making music, biking, skateboarding and spending time with my wife, three kids and cat.

**Colton Donnelly**

Good morning to all of you fellow Rustaceans! I'm Colton Donnelly (usually under the screen name cdmistman), and I've been editing TWiR since May 2020. I'm currently a co-op working on the [Alan](https://alan-lang.org) programming language, which uses Rust in the runtime - this is the second time I've had an internship using Rust! I've really enjoyed reading all of your Rust blog posts and articles over the past year (and practicing my speed-reading while I'm at it), it's been awesome seeing how much knowledge y'all like to share. When I'm not coding, I'm usually playing games with friends or binge-watching shows.

### Past Editors

Thank you so much to all who have edited This Week in Rust over the years!

- [emberian](https://github.com/emberian)
- [brson](https://github.com/brson)
- [nasa42](https://github.com/nasa42)
- [Flavsditz](https://github.com/Flavsditz)
- [srikwit](https://github.com/srikwit)
- [mdinger](https://github.com/mdinger)
- [BurntSushi](https://github.com/BurntSushi)

### Thank YOU

And a special thank you to all who have contributed to This Week in Rust and every single one of our subscribers and readers! Here is to many more issues!

</details>

## Updates from Rust Community

本周没有新闻稿或报纸。

### Official

- [Rust 2021 public testing period](https://blog.rust-lang.org/2021/07/21/Rust-2021-public-testing.html)

### Project/Tooling Updates

- [IntelliJ Rust Changelog #151](https://intellij-rust.github.io/2021/07/19/changelog-151.html)
- [rust-analyzer Changelog #86](https://rust-analyzer.github.io/thisweek/2021/07/19/changelog-86.html)
- [Announcing tokio-uring: io-uring support for Tokio](https://tokio.rs/blog/2021-07-tokio-uring)
- [Franzplot: a teaching software (re)written in Rust](https://gfx-rs.github.io/stories/franzplot.html)
- [wgpu: release of v0.9 and the future](https://gfx-rs.github.io/2021/07/16/release-0.9-future.html)
- [Allsorts: Font Shaping Engine 0.6 Release](https://yeslogic.com/blog/allsorts-rust-font-shaping-engine-0-6/)
- [This Week In TensorBase 12](https://tensorbase.io/thisweek/2021-07-21-tw_12/)
- [cargo-ui: Introducing cargo-ui, a GUI for cargo](https://sixtyfps.io/blog/introducing-cargo-ui.html)
- [Quickwit: A highly cost-efficient search engine in Rust](https://quickwit.io/blog/quickwit-first-release/)

### Observations/Thoughts

- [Compiling Rust is NP-hard](https://niedzejkob.p4.team/rust-np/)
- [How we improved the performance of our Rust app](https://www.poor.dev/blog/performance/)
- [Making Rust Float Parsing Fast: libcore Edition](https://www.reddit.com/r/rust/comments/omelz4/making_rust_float_parsing_fast_libcore_edition/)
- [Adventures in Rust and 负载权衡](https://bparli.medium.com/adventures-in-rust-and-load-balancers-73a0bc61a192)
- [Faster (and smaller) uploads in Discourse with Rust, WebAssembly and MozJPEG](https://blog.discourse.org/2021/07/faster-user-uploads-on-discourse-with-rust-webassembly-and-mozjpeg)

### Rust Walkthroughs

- [How to implement worker pools in Rust](https://kerkour.com/blog/rust-worker-pool/)
- [Run rust wasm in electron app](https://domtac.github.io/rust/webassembly/electron/2021/07/20/Run-rust-in-electron.html)
- [Host a Wasm module easily on Raspberry Pi Part 2](https://blog.knoldus.com/host-a-wasm-module-easily-on-raspberry-pi-part-2/)
- [Rust and the JVM](https://blog.frankel.ch/start-rust/7/)
- [Smart Pointers in Rust: What, why and how?](https://dev.to/rogertorres/smart-pointers-in-rust-what-why-and-how-oma)
- [Lazy async operations in Rust](https://joshchoo.com/writing/rust-lazy-async-operations)
- [05 - Basic CRUD with rust using tide - front-end with tera](https://javierviola.com/post/05-basic-crud-with-rust-using-tide-front-end-with-tera/)
- [Rust #5: Naming conventions](https://dev.to/cthutu/rust-5-naming-conventions-3cjf)
- [Leader election in rust the journey towards implementing nun-db leader election](https://mateusfreira.github.io/@mateusfreira-leader-election-rust-the-journey-towards-nun-db-leader-election-implementation/)
- [Novel way to Develop, Test, and Document C libraries from Rust](https://wasmer.io/posts/novel-way-to-develop--test-and-document-c-libraries-from-rust)
- [Rust + Tauri + Svelte Tutorial](https://jbarszczewski.com/rust-tauri-svelte-tutorial)
- [Static Integer Types](https://tratt.net/laurie/blog/entries/static_integer_types.html)
- [Serializing data faster](https://devblog.arcana.rs/serializing-data-faster)
- [series] [basic crud api with rust and tide](<https://dev.to/pepoviola/series/13592>)
- [series]  Rust 实现 ICMP
  - [I. Implementing ICMP in Rust](https://dev.to/xphoniex/i-implementing-icmp-in-rust-296o)
  - [II. Implementing ICMP in Rust](https://dev.to/xphoniex/ii-implementing-icmp-in-rust-3bk5)
- \[series] \[video] [Explaining rust-analyzer](https://youtube.com/playlist?list=PLhb66M_x9UmrqXhQuIpWC5VgTdrGxMx3y)

### Miscellaneous

- [A GPIO driver in Rust](https://lwn.net/Articles/863459/)
- [计算机科学家 证明： safety claims of the programming language Rust](https://www.eurekalert.org/pub_releases/2021-07/su-cs071521.php)
- [JetBrains The State of Developer Ecosystem 2021: Rust](https://www.reddit.com/r/rust/comments/olqarw/jetbrains_the_state_of_developer_ecosystem_2021/)

## Crate of the Week

本周的板条箱[dylint](https://github.com/trailofbits/dylint)，一个用于从动态库运行 Rust lint 的工具。

[George Hahn](https://users.rust-lang.org/t/crate-of-the-week/2704/938)谢谢你的建议。

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

## Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，让您挑选并开始！

有些任务可能还有导师，请访问任务页以获取更多信息。

- [Knurling-rs user survey](https://forms.office.com/r/aMfHG79N9K)
- [Rust.Tokyo 2021](https://www.papercall.io/rusttokyo2021)
- [Helix editor icon/logo brainstorm](https://github.com/helix-editor/helix/issues/283)
- [Ockam welcomes new contributors!](https://github.com/ockam-network/ockam/discussions/1081)
- [Forest - Cleanup net peers output](https://github.com/ChainSafe/forest/issues/1184)
- [Forest - FOREST_CONFIG_PATH env var](https://github.com/ChainSafe/forest/issues/1191)

如果你是一个生锈的项目业主，并正在寻找贡献者，请提交任务[here][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

## Updates from Rust Core

收到了 280 个拉取请求[merged in the last week][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2021-07-12..2021-07-19

- [handle non-integer const generic parameters in debuginfo type names](https://github.com/rust-lang/rust/pull/87082)
- [warn about useless assignments of variables/fields to themselves](https://github.com/rust-lang/rust/pull/87129)
- [suggest a path separator if a stray colon is found in a match arm](https://github.com/rust-lang/rust/pull/87101)
- [add diagnostics for mistyped inclusive range](https://github.com/rust-lang/rust/pull/87071)
- [various diagnostics clean ups/tweaks](https://github.com/rust-lang/rust/pull/87225)
- [compute a better `lint_node_id` during expansion](https://github.com/rust-lang/rust/pull/87146)
- [TAIT: infer all inference variables in opaque type substitutions via `InferCx`](https://github.com/rust-lang/rust/pull/87200)
- [remove refs from `Pat` slices](https://github.com/rust-lang/rust/pull/87140)
- [shrink the `CrateStore` dynamic interface](https://github.com/rust-lang/rust/pull/87117)
- [loop over all opaque types instead of looking at just the first one with the same DefId](https://github.com/rust-lang/rust/pull/87107)
- [cache expansion hash globally](https://github.com/rust-lang/rust/pull/87044)
- [perf: noise and variance](https://github.com/rust-lang/rustc-perf/pull/902)
- [some perf optimizations and logging](https://github.com/rust-lang/rust/pull/87203)
- [update Rust Float-Parsing to use the Eisel-Lemire algorithm](https://github.com/rust-lang/rust/pull/86761)
- [stabilize `[T; N]::map(_)`](https://github.com/rust-lang/rust/pull/87174)
- [split \`MaybeUninit::write' into new feature gate and stabilize it](https://github.com/rust-lang/rust/pull/86344)
- [mark Option::insert as `must_use`](https://github.com/rust-lang/rust/pull/87196)
- [added `Arc::try_pin`](https://github.com/rust-lang/rust/pull/85579)
- [hashbrown: replace some custom unsafe code with `array::map`](https://github.com/rust-lang/hashbrown/pull/281)
- [hashbrown: optimize `find`](https://github.com/rust-lang/hashbrown/pull/279)
- [cargo: deduplicate compiler diagnostics](https://github.com/rust-lang/cargo/pull/9675)
- [cargo: add `d` as an alias for doc](https://github.com/rust-lang/cargo/pull/9680)
- [clippy: fix false positives and document `branches_sharing_code` lint](https://github.com/rust-lang/rust-clippy/pull/7462)
- [clippy: new lint: `self_named_constructor`](https://github.com/rust-lang/rust-clippy/pull/7403)
- [clippy: add `Arc` to `redundant_allocation`](https://github.com/rust-lang/rust-clippy/pull/7308)
- [clippy: fix ICE in `is_integer_const`](https://github.com/rust-lang/rust-clippy/pull/7473)

### Rust Compiler Performance Triage

安静的一周；进步大于退步。

分诊人 **@simulacrum**. 修订范围：[9a27044f4..5aff6dd](https://perf.rust-lang.org/?start=9a27044f42ace9eb652781b53f598e25d4e7e918&end=5aff6dd07a562a2cba3c57fc3460a72acb6bef46&absolute=false&stat=instructions%3Au)

1 次退步，4 次改善，0 次混合；汇总中有 0 个

[Full report here](https://github.com/rust-lang/rustc-perf/blob/master/triage/2021-07-13.md).

### Approved RFCs

Rust 的变化遵循 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs).这些是本周批准实施的 RFC：

- [RFC: let-else statements](https://github.com/rust-lang/rfcs/pull/3137)

### Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PRs 的“最终评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [Stabilize Cargo's weak-dep-features and namespaced-features.](https://github.com/rust-lang/rfcs/pull/3143)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[disposition: merge] [Stabilize arbitrary_enum_discriminant](https://github.com/rust-lang/rust/pull/86860)
- \[disposition: close] [regression: infallible residual could not convert error](https://github.com/rust-lang/rust/issues/86831)
- \[disposition: merge] [Allow reifying intrinsics to fn pointers.](https://github.com/rust-lang/rust/pull/86699)
- \[disposition: merge] [Commit to not supporting IPv4-in-IPv6 addresses](https://github.com/rust-lang/rust/pull/86335)
- \[disposition: merge] [Stabilize core::task::if_ready!](https://github.com/rust-lang/rust/pull/81050)
- \[disposition: close] [Implement RFC 2500 Needle API (Part 1)](https://github.com/rust-lang/rust/pull/76901)

### New RFCs

- [Scoped threads in the standard library, take 2](https://github.com/rust-lang/rfcs/pull/3151)

# Quote of the Week

> 小贴士：每当你怀疑 `Pin` 是不是解决方案的时候，那它不是

– [@SkiFire13 on the official Rust Discord](https://discord.com/channels/442252698964721669/448238009733742612/866312170890330122)

Thanks to [Kestrer](https://users.rust-lang.org/t/twir-quote-of-the-week/328/1071) for the self-suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/op4ezk/this_week_in_rust_400/)</small>
