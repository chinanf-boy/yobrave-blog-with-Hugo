---
title: "Rust周报 346(译)"
date: 2020-07-10T14:49:32+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-346"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-07-07
- [原文：346 期](https://this-week-in-rust.org/blog/2020/07/08/this-week-in-rust-346/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/021-twir-346/)

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rustup 1.22.0](https://blog.rust-lang.org/2020/07/06/Rustup-1.22.0.html)
- [标准库实现：所有权「Ownership」](https://blog.rust-lang.org/inside-rust/2020/07/02/Ownership-Std-Implementation.html)
- [编译器团队 2020-2021 年，路线图会议纪要](https://rust-lang.github.io/compiler-team/minutes/design-meeting/2020-05-29-Roadmap-2020-2021/)
- [回到古老的技巧..（或 Rust 中的婴儿学步的阶段）](https://donsbot.wordpress.com/2020/07/04/back-to-old-tricks-or-baby-steps-in-rust/)
- [Rust 中的小 strings](https://fasterthanli.me/articles/small-strings-in-rust)
- [选择 一项 Rust Web 框架，2020 edition](https://www.lpalmieri.com/posts/2020-07-04-choosing-a-rust-web-framework-2020-edition/)
- [Rust 编写 Interpreters：指南](https://pliniker.github.io/post/rust-hosted-langs/)
- [让一个 Kernel 模块转成 Rust 所带来的：好的，坏的和丑陋的](https://immunant.com/blog/2020/06/kernel_modules/)
- [Bad Apple！！以及我如何为任务管理器编写一个 Rust 视频播放器！！](https://www.azabani.com/2020/06/29/bad-apple-for-taskmgr.html)
- [Boa 发布 v0.9 版，并利用 Rust 量化](https://boa-dev.github.io/2020/07/03/boa-release-09.html)
- [RiB（Rust in Blockchain）新闻稿#13](https://rustinblockchain.org/newsletters/2020-07-01-stuck-inside-hacking-away/)
- [我从将 C 密码库移植到 Rust 中，学到的 7 件事](https://sharpend.io/7-things-I-learned-from-porting-a-c-crypto-library-to-rust/)
- [Rust GameDev 月刊#11 中（2020 年 6 月）](https://rust-gamedev.github.io/posts/newsletter-011/)
- [Rust 配 AWS Lambda](https://blog.knoldus.com/aws-lambda-with-rust/)
- [用 Rust 写一个 4K 的成功介绍](https://www.codeslow.com/2020/07/writing-winning-4k-intro-in-rust.html)
- [Ringbahn II：中央状态机](https://without.boats/blog/ringbahn-ii/)
- [Tide 上的 Bastion：第二部分](https://blog.bastion.rs/2020/06/14/bastion-floating-on-tide-part-2.html)
- [把 Godot 移植到 Rust（P1）](https://paytonrules.com/post/games-in-rust-with-godot-part-one/)
- [图像衰减服务](https://fasterthanli.me/articles/image-decay-as-a-service)
- [IntelliJ 变更日志 #125](https://intellij-rust.github.io/2020/06/29/changelog-125.html)
- [抽象出正确性](https://fasterthanli.me/articles/abstracting-away-correctness)
- [Rust 的 渲染](https://www.zerotoga.me/dev/renderinginrust)
- [Rust fuzzing —— 超级英雄式的代码审查](https://blog.firosolutions.com/2020/07/superhero-rust-fuzzing/)
- [什么是悬挂的指针？](https://medium.com/swlh/what-is-a-dangling-pointer-2773d49cf86c)
- [简单的 Rocket 网络框架教程 | POST 请求](https://frogtok.com/simple-rocket-web-framework-tutorial-part-2in/)
- [操作系统进阶：系统调用](http://osblog.stephenmarz.com/ch7.html)
- [分配 API、分配器和虚拟内存](https://notes.iveselov.info/programming/allocation-api-and-allocators)
- [Cargo \[features\] 举例说明](https://dev.to/rimutaka/cargo-features-explained-with-examples-194g)
- [嵌入式 Rust 中的并发模式](https://ferrous-systems.com/blog/embedded-concurrency-patterns/)
- [WebAssembly 和 Rust 入门](https://blog.logrocket.com/getting-started-with-webassembly-and-rust/)
- [如何在 Rust 中，编写一个 Stack](https://dev.to/virtualkirill/how-to-write-a-stack-in-rust-3d4o)
- [在 Rust 中实现 WebSockets](http://subhojit777.in/implementing-websockets-in-rust/)
- [rust-analyzer 变更日志 32](https://rust-analyzer.github.io/thisweek/2020/07/06/changelog-32.html)
- [Rust for JavaScript 开发人员 —— 函数和控制流](http://www.sheshbabu.com/posts/rust-for-javascript-developers-functions-and-control-flow/)
- [Rust：新的 LLVM](https://willcrichton.net/notes/rust-the-new-llvm/)
- [使用 Rust 和 WebAssembly 处理视频源中的像素](https://dev.to/fallenstedt/using-rust-and-webassembly-to-process-pixels-from-a-video-feed-4hhg)
- [带有 Rust 和 React 的 WebAssembly（使用 create React app）](https://dev.to/lokesh007/webassembly-with-rust-and-react-using-create-react-app-67)
- \[葡萄牙语] [aprendendo rust: 01 - hello world](<[https://dev.to/pehdepano/learn-rust-01-hello-world-35p4](https://dev.to/pehdepano/aprendendo-rust-01-hello-world-35p4)>)
- \[音频] [mun](<[https://rustacean-station.org/session/020-mun/](https://rustacean-station.org/episode/020-mun/)>)
- \[音频] [rust and machine learning #3 with alec mocatta (ep. 109)](https://datascienceathome.com/rust-and-machine-learning-3-with-alec-mocatta-ep-109/)
- \[视频] [authentication service in actix - part 1: configuration](<[https://www.youtube.com/watch？vv=AH2P7Vc0N9s](https://www.youtube.com/watch?v=AH2P7Vc0N9s)>)
- \[视频] [rust fltk gui tutorial]([https://www.youtube.com/watch？vv=ygP4egJtmzw 型](https://www.youtube.com/watch?v=ygP4egJtmzw))

# 本周最佳箱子

本周的箱子是[suckit](https://github.com/skallwar/suckit)，递归下载一个网站的工具。

多谢[Martin Schmidt](https://users.rust-lang.org/t/crate-of-the-week/2704/786)这个建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会突出一些来自 Rust 社区的任务供您挑选和开始！

其中一些任务可能还有导师，请访问任务页面了解更多信息。

_没有为 CfP 提出任何问题_.

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# 来自 Rust Core 的更新

308 个请求在[上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-06-29..2020-07-06

- [添加`format_args_capture` feature](https://github.com/rust-lang/rust/pull/73670)
- [不要为`#[target_feature]`函数，实现 Fn\* tratis](https://github.com/rust-lang/rust/pull/73306)
- [修复了 wasm32，因一个 NodeJS 版本碰撞而损坏的问题](https://github.com/rust-lang/rust/pull/73885)
- [控制 crates 之间，`macro_rules!` tokens 的一致性](https://github.com/rust-lang/rust/pull/73569)
- [实现`slice_strip` feature](https://github.com/rust-lang/rust/pull/73414)
- [让 `likely`和`unlikely` const 化，由 feature `const_unlikely` 看守](https://github.com/rust-lang/rust/pull/73778)
- [利用`unlikely`，优化 checked_ops 的 fast path](https://github.com/rust-lang/rust/pull/73938)
- [提供有关重复 lang item 错误的详细信息。](https://github.com/rust-lang/rust/pull/73449)
- [去除`TypeckTables::empty(None)`，并将 hir_owner 设为 non-optional。](https://github.com/rust-lang/rust/pull/73751)
- [从 Arc::try_unwrap 中，删除不必要的 release](https://github.com/rust-lang/rust/pull/74025)
- [将所有外来`SourceFile`，序列化（serialize）到 proc-宏 crate metadata](https://github.com/rust-lang/rust/pull/73706)
- [稳定化：`#[track_caller]`.](https://github.com/rust-lang/rust/pull/72445)
- [如果可用的话，使用 WASM 的 saturating casts](https://github.com/rust-lang/rust/pull/73724)
- [使用`Span`，在 or-patterns 中，标识不可访问的子模式](https://github.com/rust-lang/rust/pull/73973)
- [更新 rust-lang/llvm-项目子模块，以涵盖最近合并的 AVR 修复代码](https://github.com/rust-lang/rust/pull/73658)
- [mir opt：通过 SimplifyArmIdentity pass 修复 mis-optimization 和其他 issues](https://github.com/rust-lang/rust/pull/73949)
- [添加`.collect()` —— 让`Box<str>`到`String`](https://github.com/rust-lang/rust/pull/72688)
- [impl `From<char>` for`String`](https://github.com/rust-lang/rust/pull/73466)
- [linker：生成 ELFs 时，默认创建`GNU_EH_FRAME` header](https://github.com/rust-lang/rust/pull/73564)
- [解决：**不允许** 通过闭包/异步代码块，执行带标签的中断/继续（break/continue）](https://github.com/rust-lang/rust/pull/73726)
- [船载 rust analyzer ](https://github.com/rust-lang/rust/pull/72978)
- [chalk：添加 type outlives 目标](https://github.com/rust-lang/chalk/pull/551)
- [chalk：允许打印 lifetime 占位符](https://github.com/rust-lang/chalk/pull/557)
- [chalk：支持 ADT](https://github.com/rust-lang/chalk/pull/524)
- [hashbrown：添加 RawTable::erase 和 remove](https://github.com/rust-lang/hashbrown/pull/171)
- [hashbrown：暴露 RawTable::try_with_capacity](https://github.com/rust-lang/hashbrown/pull/174)
- [hashbrown：提高 RawIter 的可重用性](https://github.com/rust-lang/hashbrown/pull/175)
- [libc：添加在 Android 上缺少的一堆常量和函数](https://github.com/rust-lang/libc/pull/1795)
- [libc：添加更多 WASI libc 定义。](https://github.com/rust-lang/libc/pull/1811)
- [libc：声明`seekdir`和`telldir` for WASI。](https://github.com/rust-lang/libc/pull/1804)
- [stdarch：修复或让整数比较（integer comparisons）相等](https://github.com/rust-lang/stdarch/pull/872)
- [cargo：编写 GNU tar 文件，支持长名称。](https://github.com/rust-lang/cargo/pull/8453)
- [crates.io：使用 default 分支别名，而不是“master”](https://github.com/rust-lang/crates.io/pull/2601)
- [clippy：添加了限制 lint —— pattern-type-mismatch](https://github.com/rust-lang/rust-clippy/pull/4841)
- [clippy：给出`Option::map_or`(`_else`) 建议到 `if let Some { y } else { x }`](https://github.com/rust-lang/rust-clippy/pull/5301)
- [rustfmt：不要在参数上，重复 const 关键字](https://github.com/rust-lang/rustfmt/pull/4294)
- [rustfmt：不要删除 extern fn items 上的 fn headers（例如 async）](https://github.com/rust-lang/rustfmt/pull/4291)
- [rustfmt：在 trait where 子句和 open block 之间，获取注释](https://github.com/rust-lang/rustfmt/pull/4292)

## Rust 编译器性能分类

- [2020 年 7 月 7 日](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-07-07)。在一个 rollup 上，一个不重要的性能回归；六个改进，两个在 rollups。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 以下是本周批准实施的 RFC：

_本周没有批准任何 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在就表达你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC:添加新的`#[instruction_set(...)]`属性，支持每个函数指令集的更改](https://github.com/rust-lang/rfcs/pull/2867)
- [内联`const`表达式和模式](https://github.com/rust-lang/rfcs/pull/2920)
- [内联汇编](https://github.com/rust-lang/rfcs/pull/2873)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [稳定化： const mem::forget](https://github.com/rust-lang/rust/pull/73887)
- \[处置：合并] [稳定化：const fn 内，对`&[T]`的 casts 与 coercions (转换与强制)](https://github.com/rust-lang/rust/pull/73862)
- \[处置：合并] [mv std libs to std/](https://github.com/rust-lang/rust/pull/73265)
- \[处置：合并] [稳定化：`transmute` in constants and statics ，但不是 const fn](https://github.com/rust-lang/rust/pull/72920)
- \[处置：合并] [稳定化：const_type_id feature](https://github.com/rust-lang/rust/pull/72488)
- \[处置：合并] [接受 tuple.0.0 作为 tuple 索引语法 (take 2)](https://github.com/rust-lang/rust/pull/71322)

## 新的 RFC

- [RFC:IndexGet 和 IndexSet](https://github.com/rust-lang/rfcs/pull/2953)

# 本周最佳语录

> Rust 就像是一个未来感十足的激光枪，带有一个智能脚步探测器，当它识别出你的脚时，它就会打开(枪)保险。

– [u/goofbe on reddit](https://www.reddit.com/r/rust/comments/hiyfhq/linus_torvalds_the_kernel_team_is_looking_at/fwk12r6/)

Thanks to [Synek317](https://users.rust-lang.org/t/twir-quote-of-the-week/328/898) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/hnkws3/this_week_in_rust_346/)</small>
