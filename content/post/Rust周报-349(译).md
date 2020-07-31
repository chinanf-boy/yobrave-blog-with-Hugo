---
title: "Rust周报 349(译)"
date: 2020-07-31T20:36:01+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-349"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-07-28
- [原文：349 期](https://this-week-in-rust.org/blog/2020/07/28/this-week-in-rust-349/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/024-twir-349/)

# Rust 社区的更新

### 官方

- [开展，核心团队议程](https://blog.rust-lang.org/inside-rust/2020/07/27/opening-up-the-core-team-agenda.html)
- [Rust 的 CI 正在转向 GitHub Actions](https://blog.rust-lang.org/inside-rust/2020/07/23/rust-ci-is-moving-to-github-actions.html)

### 工具

- [IntelliJ Rust 更新日志＃127](https://intellij-rust.github.io/2020/07/27/changelog-127.html)
- [Rust Analyzer Changelog ＃35](https://rust-analyzer.github.io/thisweek/2020/07/27/changelog-35.html)

### 观察/想法

- [深入了解 Rust 编程语言](https://about.gitlab.com/blog/2020/07/21/rust-programming-language/)
- [关于较小 Rust 的注意事项](https://without.boats/blog/notes-on-a-smaller-rust/)
- [Rust at FP Complete，2020 年更新](https://www.fpcomplete.com/insights/rust-at-fpco-2020/)
- [为什么 Rust 模块系统，可能是难以理解](https://dev.to/dotxlem/why-the-rust-module-system-might-be-hard-to-understand-2l)
- [让 Rust 在 2020 年再发一枪](https://sharpend.io/giving-rust-another-shot-in-2020/)

### 学习

- [Rust 使用'英语'简单解释](https://github.com/Dhghomon/easy_rust)
- [Rust 中的（几种）高级变量类型](https://rust.graystorm.com/2020/07/20/a-few-advanced-variable-types-in-rust/)
- [Tokio 和 async Rust 教程](https://tokio.rs/tokio/tutorial)
- [Rust 中面向数据设计，简介](http://jamesmcm.github.io/blog/2020/07/25/intro-dod/#en)
- [通过将 Python 思维转换到 Rust —— 学习 Rust](https://towardsdatascience.com/learning-rust-by-converting-python-to-rust-259e735591c6)
- [Rust 从头开始编写文件系统](https://blog.carlosgaldino.com/writing-a-file-system-from-scratch-in-rust.html)
- [Rust 的内存安全 —— 第 1 部分](https://hashrust.com/blog/memory-safey-in-rust-part-1/)
- [使用 Rusoto 和 Serde，分析 GitHub TB 级别的压缩文档数据](https://matthewkmayer.github.io/blag/public/post/rusty-von-humboldt/)
- [Rust 的大小关系](https://github.com/pretzelhammer/rust-blog/blob/master/posts/sizedness-in-rust.md)
- [今年七月，Rust 编写的数据库项目](https://alex-dukhno.github.io/2020-07-26-This-July-in-my-Database-project-written-in-rust/)
- [Rust 中的 Cell，RefCell 和内部可变性（Interior Mutability）](https://badboi.dev/rust/2020/07/17/cell-refcell.html)
- [Rust 中的 命令行自动补全算法](https://dev.to/yujiri8/cli-autocompletion-algorithm-in-rust-47jl)
- [可扩展，概念证明的权限系统：使用 accumulators](https://dev.to/johndriscoll/compressing-authority-1kph)
- [从 C＃到 Rust：代码基础](https://dev.to/sebnilsson/from-c-to-rust-code-basics-40cj)
- [Rust 和 WebAssembly 的 Hello World](https://blog.nodraak.fr/2020/07/rust-wasm-2-hello-world/)
- [交互式 ‘弦’ 图（使用 Rust 进行数据分析）](https://shahinrostami.com/posts/programming/rust-notebooks/chord-diagrams/)
- [Rust 计算斐波纳契数的一些（许多）方法](https://dev.to/jculverhouse/some-number-of-ways-to-calculate-a-fibonacci-number-in-rust-d78)
- [用 Rust 编写一个简单的查询系统](https://pnevyk.github.io/posts/query-system-in-rust/)
- [带有 Rust 和 Diesel 的 JSONB Data](https://vasilakisfil.social/blog/2020/05/09/rust-diesel-jsonb/)
- [Enum 或 Trait Object](https://www.possiblerust.com/guide/enum-or-trait-object)
- [Rayon 并行流（Parallel Stream）处理](https://morestina.net/blog/1432/parallel-stream-processing-with-rayon)
- [Compile Time CUDA 设备检查](https://m-decoster.github.io/2020/07/24/compile-time-cuda/)
- [使用 Rust，进行 AVR 的 Async/Await](https://lights0123.com/blog/2020/07/25/async-await-for-avr-with-rust/)
- [使用 Rust 和 WebAssembly，在 48 小时内制作游戏](https://ianjk.com/rust-gamejam/)
- \[葡萄牙语] [aprendendo rust: 04 - comentários, documentação e tipos de variáveis primitivas](https://dev.to/pehdepano/aprendendo-rust-04-comentarios-documentacao-e-tipos-de-variaveis-primitivas-1jb6)
- \[英国] [пошук в глибину на прикладі задачі ханойської вежі](https://dev.to/yaroslavpodorvanov/-3n3b)
- \[视频] [utility ai (with rust example) - how-to](https://www.youtube.com/watch?v=M0Sx_M61ILU&feature=youtu.be)
- \[视频] [writing a guide to slice data in rust](https://www.twitch.tv/videos/691303613)
- \[视频] [learning rust gamedev patterns](https://www.twitch.tv/videos/691311447)
- \[视频] [run any web container for free on google cloudrun (example in rust/warp)](https://www.youtube.com/watch?v=SMTVwISbQtE)
- \[视频] [technologieplauscherl: memory ownership in c# and rust](https://www.youtube.com/watch?v=20GNFE0462w)
- \[视频] [fltk rust tutorial: create a media player using the vlc crate](https://www.youtube.com/watch?time_continue=289&v=enxqU3bhCEs&feature=emb_logo)
- \[视频] [rust at speed - building a fast concurrent database](https://youtu.be/s19G6n0UjsM)
- \[法语] \[视频] [Développement Web Rust & Rocket](https://www.youtube.com/playlist?list=PLMWEEzYqZ0ekOG6_G4q_GXPpVHWrIH--x)
- \[葡萄牙语] \[视频] [Hoje sai o data tables em RUST](https://www.twitch.tv/videos/688423082)

### 项目更新

- [Ballista 分布式计算：一年后](https://andygrove.io/2020/07/ballista-one-year-on/)
- [使用 Nix 跨平台编译为 Redox](https://www.redox-os.org/news/redox-plus-nix-0/)
- [公开声明：您现在可以在 Redox OS 上，使用 GDB 调试程序啦](https://www.redox-os.org/news/public-announcement-gdb/)
- [Rocket 现在可以在 Stable Rust 上编译](https://www.reddit.com/r/rust/comments/hviz2q/rocket_can_now_compile_on_stable_rust/)

### 杂项

- [ANSSI —— 使用 Rust 开发安全应用程序的编程规则](https://www.ssi.gouv.fr/uploads/2020/06/anssi-guide-programming_rules_to_develop_secure_applications_with_rust-v1.0.pdf)
- [在 5 种最主要的语言受欢迎度列表中，Rust 现在是排名前 20 位的语言](https://www.reddit.com/r/rust/comments/hz7dfp/rust_is_now_a_top_20_language_in_all_of_the_5/)
- [站在 Linkerd 最先进的 Rust 代理背后的是，Linkerd2-proxy](https://linkerd.io/2020/07/23/under-the-hood-of-linkerds-state-of-the-art-rust-proxy-linkerd2-proxy/)
- [性能比较：Rust，PyO3 和 Python](https://medium.com/the-innovation/performance-comparison-rust-vs-pyo3-vs-python-6480709be8d)
- [优化 Rust ：顺时针三角形](https://wapl.es/rust/2020/07/25/optimising-with-cmp-and-ordering.html)

# 周箱

这周的箱子是[polyfuse](https://github.com/ubnt-intrepid/polyfuse)，一个用于使用异步代码编写 FUSE 文件系统的库。

谢谢[伊万·科兹克（Ivan Kozik）](https://users.rust-lang.org/t/crate-of-the-week/2704/795)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

_没有针对 CfP 提出任何问题_。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 347 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-07-20..2020-07-27

- [AVR：在构造函数指针（pointers to functions）时，正确地设置指针地址空间](https://github.com/rust-lang/rust/pull/73270)
- [检测 turbofish(::<>) 缺少尖括号](https://github.com/rust-lang/rust/pull/74687)
- [序列化 span hygiene 数据](https://github.com/rust-lang/rust/pull/72121)
- [proc_macro：添加 API，用于跟踪对环境变量的访问](https://github.com/rust-lang/rust/pull/74653)
- [正确处理未排序的 泛型参数](https://github.com/rust-lang/rust/pull/74676)
- [检查默认类型时，完全标准化 bounds](https://github.com/rust-lang/rust/pull/74670)
- [禁止 const 泛型中的 non-static lifetimes](https://github.com/rust-lang/rust/pull/74051)
- [在类型默认值内，不能匿名常量中，使用泛型参数](https://github.com/rust-lang/rust/pull/74487)
- [添加一个差异系统，用于在多个 mir 优化](https://github.com/rust-lang/rust/pull/74715)
- [优化掉`BitAnd`和`BitOr`，如果可能的话](https://github.com/rust-lang/rust/pull/74491)
- [使更多原始整数方法，变为 const](https://github.com/rust-lang/rust/pull/73858)
- [impl Default for ranges](https://github.com/rust-lang/rust/pull/73197)
- [从`BTreeMap::drain_filter`中，消除不必要的不 ​​ 安全行为](https://github.com/rust-lang/rust/pull/74677)
- [hashbrown：将'探测逻辑(probing logic)'重构为外部迭代器](https://github.com/rust-lang/hashbrown/pull/181)
- [rustlings：增加在 repl.it 上，运行 rustlings 的能力](https://github.com/rust-lang/rustlings/pull/471)

## Rust 编译器性能分类

- [2020-07-28](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-07-28.md)。2 次性能回归，1 次改进，没有汇总。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [内联汇编](https://github.com/rust-lang/rfcs/pull/2873)
- [新增一个`#[instruction_set(...)]`属性，用于支持每个功能的指令集更改](https://github.com/rust-lang/rfcs/pull/2867)

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC：“ C unwind” ABI](https://github.com/rust-lang/rfcs/pull/2945)

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： vec::leak 作为一个方法](https://github.com/rust-lang/rust/pull/74605)
- \[处置：合并] [添加 `slice::array_chunks` 到 std](https://github.com/rust-lang/rust/pull/74373)

## 新的 RFC

- [RFC：将 JSON 后端添加到 Rustdoc](https://github.com/rust-lang/rfcs/pull/2963)
- [RFC：命名的参数](https://github.com/rust-lang/rfcs/pull/2964)
- [建立一个新的 error handling 项目组](https://github.com/rust-lang/rfcs/pull/2965)

# Quote of the Week

Sadly, 本周并没有引用句。

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/i094wo/this_week_in_rust_349/)</small>
