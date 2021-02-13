---
title: "Rust周报 340(译)"
date: 2020-05-29T00:25:48+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-340"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-05-27
- [原文：340 期](https://this-week-in-rust.org/blog/2020/05/27/this-week-in-rust-340/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[这周的 _This Week in Rust Podcast_ ](https://rustacean-station.org/episode/016-twir-340/)

# Rust 社区的更新

## 新闻和博客文章

- [为 Windows 98 SE 及更高版本，编译 Rust 二进制文件：一段旅程](https://seri.tools/blog/compiling-rust-for-legacy-windows/)
- [从零到生产＃0：前言](https://www.lpalmieri.com/posts/2020-05-24-zero-to-production-0-foreword/)
- [一些使用 Rust 的大型项目](https://blog.knoldus.com/some-extensive-projects-working-with-rust/)
- [在 Rust 代码中编写 Python —— 第 4 部分](https://blog.m-ou.se/writing-python-inside-rust-4/)
- [用 Rust 绘制 SVG 图形](https://cetra3.github.io/blog/drawing-svg-graphs-rust/)
- [设计 Rust Unleash API 客户端](https://medium.com/cognite/designing-the-rust-unleash-api-client-6809c95aa568)
- [用 Rust 编写， NES 上 Conway's Game of Life](https://gridbugs.org/conways-game-of-life-on-the-nes-in-rust/)
- [如何组织 Rust 测试](https://blog.logrocket.com/how-to-organize-your-rust-tests/)
- [Just：我如何组织大型 Rust 计划](https://rodarmor.com/blog/tour-de-just)
- [将 Qt 事件集成到 Actix 和 Rust 中](https://www.rubdos.be/corona/qt/rust/tokio/actix/2020/05/23/actix-qt.html)
- [Docker 中的 Actix-Web：如何构建小型且安全的镜像(images)](https://dev.to/sergeyzenchenko/actix-web-in-docker-how-to-build-small-and-secure-images-2mjd)
- [Angular，Rust，WebAssembly，Node.js，Serverless 和 ... 新的 Azure 静态 Web 应用程序！](https://dev.to/azure/angular-rust-webassembly-node-js-serverless-and-the-new-azure-static-web-apps-cnb)
- [Chromium 项目发现我们大约 70％的严重安全漏洞，为内存安全问题](https://www.chromium.org/Home/chromium-security/memory-safety)
- [将 AV-Metrics 集成到 AV1 编码器 —— rav1e](https://dev.to/vibhoothi/integration-of-av-metrics-into-rav1e-the-av1-encoder-5h8h)
- [技术面试奇幻漂流](https://blog.mgattozzi.dev/oxidizing-the-technical-interview/)
- [将 K-D Forests 移植到 Rust](https://tavianator.com/porting-k-d-forests-to-rust/)
- [实践中的 Rust 宏规则](https://dev.to/sassman/rust-macro-rules-in-practice-40ne)
- [Rust：将重物丢到另一个线程中，可以使您的代码快 10000 倍](https://abramov.io/rust-dropping-things-in-another-thread)
- [Rust's Runtime](https://blog.mgattozzi.dev/rusts-runtime/)
- \[音频] [Tech Except!ons: What Microsoft has to do with Rust? With Ryan Levick](https://anchor.fm/tech-exceptions/episodes/What-Microsoft-has-to-do-with-Rust--on-this-episode-with-Ryan-Levick-eec75h)
- \[视频] \[Russian] [rust: not as hard as you think - meta/conf: backend meetup 2020](https://www.youtube.com/watch?v=n3kyvMVck_M)
- \[视频] [3 Part Video for Beginners to Rust Programming on Iteration](https://tim.mcnamara.nz/post/618982870485172224/rust-iteration)
- \[视频] [Bringing WebAssembly outside the web with WASI by Lin Clark](https://www.youtube.com/watch?v=fh9WXPu0hw8)
- \[视频] [Microsoft's 安全系统编程语言](https://mybuild.microsoft.com/sessions/61de34c5-b111-4ece-928f-541854875862?source=sessions)
- \[视频] [Rust, WebAssembly, and the future of Serverless by Steve Klabnik](https://www.youtube.com/watch?v=CMB6AlE1QuI)

# 周箱

这周的箱子是[cargo-asm](https://github.com/gnzlbg/cargo-asm)，是一个 cargo 子命令，用于显示一个函数的汇编结果。对于性能相关分析很有用。

谢谢[特雷弗·斯皮特里（Trevor Spiteri）](https://users.rust-lang.org/t/crate-of-the-week/2704/769)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [pijama：容易的问题](https://github.com/christianpoveda/pijama/issues?q=is%3Aissue+is%3Aopen+label%3AE-easy)
- [mdbx-rs：添加对更多编译时间选项的支持](https://github.com/Kerollmops/mdbx-rs/issues/1)
- [ruma：用 strum derives 替换 impl_enum!](https://github.com/ruma/ruma-events/issues/90)
- [time-rs：改进的解析/格式流程](https://github.com/time-rs/time/issues/236)
- [http-types：Request::query 应该匹配 Tide 的行为](https://github.com/http-rs/http-types/issues/154)
- [http-types：Status 应有 TryInto<StatusCode/>](https://github.com/http-rs/http-types/issues/155)
- [http-types：暴露 Request 构造函数的简写方法](https://github.com/http-rs/http-types/issues/156)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

359 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-05-18..2020-05-25

- [更新到 LLVM 10](https://github.com/rust-lang/rust/pull/67759)
- [llvm：向用户公开微小的代码模型](https://github.com/rust-lang/rust/pull/72397)
- [启用 ARM TME（事务性存储器扩展）](https://github.com/rust-lang/rust/pull/72438)
- [实现新`asm!`语法](https://github.com/rust-lang/rust/pull/69171) from [RFC＃2850](TODO)
- [始终为`#![no_builtins]`生成 object code](https://github.com/rust-lang/rust/pull/72325)
- [在检查 tokens 是否“相等”之前，先中断 tokens](https://github.com/rust-lang/rust/pull/72306)
- [当函数实际上具有“self”参数时，发出更好的诊断](https://github.com/rust-lang/rust/pull/72308)
- [在表达式(expression)，模式(pattern)和语句位置(statement positions)中，稳定化 fn-like proc 宏](https://github.com/rust-lang/rust/pull/68717)
- [采用`once_cell`箱子，而不是自定义数据结构](https://github.com/rust-lang/rust/pull/72256)
- [简单的 NRVO](https://github.com/rust-lang/rust/pull/72205)
- [删除 ReScope](https://github.com/rust-lang/rust/pull/72362)
- [在结构匹配检查（structural match checking）过程中，详尽检查`ty::Kind`](https://github.com/rust-lang/rust/pull/72153)
- [将 borrow-of-packed-field 不安全检查，移出循环](https://github.com/rust-lang/rust/pull/72269)
- [在 liveness checking 期间，修复`InlineAsmOperand`表达式被访问两次](https://github.com/rust-lang/rust/pull/72537)
- [chalk：清理箱子结构，并为 SLG/递归 solvers 添加功能](https://github.com/rust-lang/chalk/pull/459)
- [检查由 generator 捕获的 non-`Send`/`Sync` upvars](https://github.com/rust-lang/rust/pull/71923)
- [支持`FnDef`和 无参数闭包之间的 coercion（强制转换），反之亦然](https://github.com/rust-lang/rust/pull/71599)
- [更懒惰的，normalization of constants ](https://github.com/rust-lang/rust/pull/71973)
- [miri：在 Windows 上，为动态符号（dynamic symbols）准备 Dlsym 系统](https://github.com/rust-lang/miri/pull/1424)
- [在`mem::Discriminant<T>`中，采用`T`的判别式（discriminant）类型，而不是`u64`](https://github.com/rust-lang/rust/pull/70705)
- [修复 generator transform 中的判别式类型](https://github.com/rust-lang/rust/pull/72502)
- [`impl From<Cow>` for `Box`，`Rc`和`Arc`](https://github.com/rust-lang/rust/pull/71447)
- [减少`size_of<HashMap>`的另一种尝试](https://github.com/rust-lang/hashbrown/pull/159)
- [非空的，初始`Vec`大小改为 4，而不是 1](https://github.com/rust-lang/rust/pull/72227)
- [使`std::char`函数和常数与`char`关联](https://github.com/rust-lang/rust/pull/71854)
- [稳定化：`saturating_abs`和`saturating_neg`](https://github.com/rust-lang/rust/pull/71886)
- [添加 `len`和`slice_from_raw_parts` 到 `NonNull<[T]>`](https://github.com/rust-lang/rust/pull/71940)
- [添加 fast-path 优化 到`Ipv4Addr::fmt`](https://github.com/rust-lang/rust/pull/72399)
- [`impl Ord for proc_macro::LineColumn`](https://github.com/rust-lang/rust/pull/72446)
- [cargo：在更新之前，尝试安装确切的版本](https://github.com/rust-lang/cargo/pull/8022)
- [cargo：自动更新`patch`，如果无法进行更新，则会提供更好的错误](https://github.com/rust-lang/cargo/pull/8248)
- [cargo：添加选项，以剥离二进制文件](https://github.com/rust-lang/cargo/pull/8246)
- [rustfmt：从父目录合并 configs](https://github.com/rust-lang/rustfmt/pull/4179)
- [rustfmt：模块解析失败时，改进错误消息](https://github.com/rust-lang/rustfmt/pull/4198)
- [rustfmt：在宏定义中，解析‘逗号分隔’的分支](https://github.com/rust-lang/rustfmt/pull/4173)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_上周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [跟踪问题： `std::io::{bufreader, bufwriter}::capacity`](https://github.com/rust-lang/rust/issues/68833)
- \[处置：合并] [impl `From<[T; N]>` for `Box<[T]>`](https://github.com/rust-lang/rust/pull/71095)
- \[处置：合并] [实现 PartialOrd 和 Ord for SocketAddr\*](https://github.com/rust-lang/rust/pull/72239)
- \[处置：合并] [稳定化：AtomicN::fetch_min and AtomicN::fetch_max](https://github.com/rust-lang/rust/pull/72324)
- \[处置：合并] [帮 RangeFrom 解决溢出行为](https://github.com/rust-lang/rust/pull/72368)
- \[处置：合并] [impl Step for char (让 `Range*<char>` 可迭代)](https://github.com/rust-lang/rust/pull/72413)
- \[处置：合并] [稳定化： core::panic::Location::caller](https://github.com/rust-lang/rust/issues/72448)
- \[处置：合并] [稳定化：str_strip feature](https://github.com/rust-lang/rust/pull/72466)

## 新的 RFC

_本周没有提议新的 RFC。_

# 本周引用句

> 在 C 语言中 patterns 编程，正是都是 Rust 的类型。

– [Kornel Lesiński on rust-users](https://users.rust-lang.org/t/how-has-learning-and-working-in-rust-influenced-how-you-think-about-writing-software/42836/3)

Thanks to [trentj](https://users.rust-lang.org/t/twir-quote-of-the-week/328/876) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/grs1ql/this_week_in_rust_340/).</small>
