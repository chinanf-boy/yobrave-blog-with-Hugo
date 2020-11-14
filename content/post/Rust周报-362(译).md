---
title: "Rust周报 362(译)"
date: 2020-10-29T22:54:11+08:00
tags: ["week"]
description: "螃蟹-Rust周报-362"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-10-28
- [原文：362 期](https://this-week-in-rust.org/blog/2020/10/28/this-week-in-rust-362/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# RustFest Global

[RustFest schedule](https://rustfest.global/schedule)上线啦！RustFest 提供[ _免费门票，截止日期为 11 月 1 日_ ](https://rustfest.global/tickets)。全时区，所有人都可以使用！

# Updates from Rust Community

本周没有新闻通讯。

### Official

- \[内部][core 队员变更](https://blog.rust-lang.org/inside-rust/2020/10/23/Core-team-membership.html)

### Tooling

- [Rust Analyzer Changelog #48](https://rust-analyzer.github.io/thisweek/2020/10/26/changelog-48.html)
- [Knurling-rs Changelog #3](https://ferrous-systems.com/blog/knurling-changelog-3/)

### Observations/Thoughts

- [斗争进行中：Rust's Expressive Type System](https://thefuntastic.com/blog/fighting-rusts-type-system)
- [XMHell: 处理 38GB， UTF-16 XML 文件地狱](http://usethe.computer/posts/14-xmhell.html)
- [（一个快速游戏制作聚会）LudumDare 47 - The Island](https://blog.kuviman.com/2020/10/18/ludumdare47.html)
- [食谱管理程序 - Part 3 - Parsing and more Druid](https://bheisler.github.io/post/recipe-manager-part-3-parsing-and-more-druid/)
- [通过 OIBITs（别称：auto traits），模拟（默认方法）specialization ](https://pwychowaniec.com/en/posts/imitating-specialization-with-oibits/)
- [Flask Creator Armin Ronacher 采访](https://evrone.com/armin-ronacher-interview)
- [妙探寻凶游戏重构](https://gregstoll.wordpress.com/2020/10/22/clue-solver-now-in-rust-with-more-accurate-simulations/)

### Learn Rust

- [Rust for a Gopher Lesson 1](https://levpaul.com/posts/rust-lesson-1/)
- [Rust for a Gopher Lesson 2](https://levpaul.com/posts/rust-lesson-2/)
- [用 AssemblyLift 构建 "todo 清单" 🚀🔒](https://dev.to/dotxlem/build-a-todo-list-backend-with-assemblylift-1ak3)
- [听说，你想要面向对象的 Rust](https://blog.darrien.dev/posts/so-you-want-to-object/)
- \[系列] [a web app in rust](https://dev.to/krowemoh/series/9410)
- [向 IntelliJ Rust 插件提供帮助: 实现一个 refactoring](https://kobzol.github.io/rust/intellij/2020/10/19/contributing-4-introduce-constant-refactoring.html)
- [5 倍速： Rust Docker Builds with cargo-chef](https://www.lpalmieri.com/posts/fast-rust-docker-builds)
- [编写一个简单的 AWS Lambda Custom Runtime in Rust](http://jamesmcm.github.io/blog/2020/10/24/lambda-runtime/#en)
- [来了来了，他来了!：Is Rust Web Yet? Yes, and it's freaking fast!](http://www.arewewebyet.org/)
- \[视频] [(live coding) audio adventures in rust: local files playback & library interface](https://youtu.be/-tj7ODHX93o)

### Project Updates

- [介绍 Ungrammar](https://rust-analyzer.github.io//blog/2020/10/24/introducing-ungrammar.html)
- 一组新的维护者掌管了[deps.rs 项目](https://github.com/deps-rs/deps.rs)，并复兴了[deps.rs 页面](https://deps.rs)，使网站和为 README 生成的徽章可以再次使用。

### Miscellaneous

- [沙盒 Rust 开发 with Rust Analyzer](https://www.grepular.com/Sandbox_Rust_Development_with_Rust_Analyzer)
- \[音频] [安全头条: 邀请 Carl Lerche，聊聊关于 Tokio special](https://blog.firosolutions.com/2020/10/tokio_special_with_carl_lerche/)

# Crate of the Week

这周的箱子是[rust-gpu](https://github.com/EmbarkStudios/rust-gpu) 来自 Embark Studios，可将 Rust 代码编译到 Vulkan 图形着色器中（并带有其他类型的着色器）。

谢谢[Vlad Frolov](https://users.rust-lang.org/t/crate-of-the-week/2704/831)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [heed - Create two different libraries: heed and heedx](https://github.com/Kerollmops/heed/issues/51)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 400 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-10-19..2020-10-26

- [调整 `if let` 建议，更自由，且不要 ICE](https://github.com/rust-lang/rust/pull/77283)
- [减少在'match arms have incompatible types' 错误中的 diagram mess](https://github.com/rust-lang/rust/pull/78255)
- [调整 match arm 分号移除建议，为 futures 做准备](https://github.com/rust-lang/rust/pull/78214)
- [解释被推断的闭包返回类型，是哪里的](https://github.com/rust-lang/rust/pull/78235)
- [重写 `collect_tokens` 实现，去使用一个偏平化的 buffer](https://github.com/rust-lang/rust/pull/77250)
- [修复：trait solving ICEs](https://github.com/rust-lang/rust/pull/77720)
- [停止'const'中，union field 的 promoting](https://github.com/rust-lang/rust/pull/77526)
- [确保 statics 类型，是有人居住的（比如空的 enum 是没人居住）](https://github.com/rust-lang/rust/pull/78324)
- [rustc_mir: 跟踪在 `SourceScopeData`的 inlined 被调用者](https://github.com/rust-lang/rust/pull/68965)
- [对 const value interning 优化，for ZST types](https://github.com/rust-lang/rust/pull/78061)
- [在解析期间，只计算 visibilities（可见度） 一次](https://github.com/rust-lang/rust/pull/78077)
- [mir-opt: 禁用 MatchBranchSimplification](https://github.com/rust-lang/rust/pull/78151)
- [implement `TryFrom` between `NonZero` types](https://github.com/rust-lang/rust/pull/77339)
- [添加： `Pin::static_ref`, `static_mut`](https://github.com/rust-lang/rust/pull/77726)
- [支持，自定义 allocators in `Box`](https://github.com/rust-lang/rust/pull/77187)
- [hashbrown: 通过一个 allocator，对 RawTable, HashSet and HashMap 参数化](https://github.com/rust-lang/hashbrown/pull/133)
- [rustdoc: 大大改善给小移动设备屏幕的显示](https://github.com/rust-lang/rust/pull/78084)
- [clippy: 添加 linter 给 for loop，单个元素](https://github.com/rust-lang/rust-clippy/pull/6109)
- [clippy: 添加 lint for `&mut Mutex::lock`](https://github.com/rust-lang/rust-clippy/pull/6103)
- [clippy: 添加 new lint for 并没有执行 Drop 得 `ManuallyDrop` 值](https://github.com/rust-lang/rust-clippy/pull/6181)
- [clippy: lint 不必要的 int-to-int and float-to-float casts](https://github.com/rust-lang/rust-clippy/pull/6187)

## Rust Compiler Performance Triage

- [2020-10-27](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-27.md)：0 个性能退化，2 个改进，3 个混合

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-10-27.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [解构-分配语句](https://github.com/rust-lang/rfcs/pull/2909)
- [RFC: 读进 未初始化的 buffers](https://github.com/rust-lang/rfcs/pull/2930)
- [RFC: 将 aarch64-unknown-linux-gnu 晋升为 Tier-1 Rust target](https://github.com/rust-lang/rfcs/pull/2959)

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [YieldSafe auto trait](https://github.com/rust-lang/rfcs/pull/2890)
- [可变的 tuples](https://github.com/rust-lang/rfcs/pull/2775)
- [RFC：match 语法，匹配获得 pointer-to-field](https://github.com/rust-lang/rfcs/pull/2666)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [crate name 上的条件化 `rustc_bootstrap`](https://github.com/rust-lang/rust/pull/77802)
- \[处置：合并] [考虑具有 ManuallyDrop 类型的 union 字段，它的 assignments（分配） 的安全](https://github.com/rust-lang/rust/pull/78068>)
- \[处置：合并] [定义 `fs::hard_link`，不去跟随 symlinks。](https://github.com/rust-lang/rust/pull/78026)
- \[处置：合并] [泛型类型上的 repr(transparent)，跳过 "exactly one non-zero-sized field" 的检查](https://github.com/rust-lang/rust/issues/77841)
- \[处置：合并] [重命名/弃用 LayoutErr，以支持 LayoutError](https://github.com/rust-lang/rust/pull/77691)
- \[处置：合并] [跟随问题：raw_ref_macros](https://github.com/rust-lang/rust/issues/73394)

## New RFCs

- [RFC: 计划让 core 和 std's panic 相同。](https://github.com/rust-lang/rfcs/pull/3007)

# Quote of the Week

> 很多开发人员在谈到 Rust 时，不仅仅是语言的设计和细节（当然，相当好），还经常忽略的是：Rust 的超能力是结合了它惊喜的社区和生态系统，以及那些创造和构造它的令人惊叹的友好的人

– [Johann Andersson on twitter](https://mobile.twitter.com/repi)

llogiq is pretty pleased with his own suggestion and unanimously voted for it.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/jk35ha/this_week_in_rust_362/)</small>
