---
title: "Rust周报 343(译)"
date: 2020-06-17T22:10:45+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-343"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-06-16
- [原文：343 期](https://this-week-in-rust.org/blog/2020/06/16/this-week-in-rust-343/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

看看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/018-twir-343/)

# Rust 社区的更新

## 新闻和博客文章

- [2020 年大事件 —— 更新](https://blog.rust-lang.org/2020/06/10/event-lineup-update.html)
- [nightly 版本现提供新的 inline 汇编语法](https://blog.rust-lang.org/inside-rust/2020/06/08/new-inline-asm.html)
- [宣布 RustFest Global 2020🎉](https://blog.rustfest.eu/announcing-rustfest-2020)
- [RustConf 2020 注册已开放](https://rustconf.com/)
- [了解 Rust 生态系统](https://joeprevite.com/rust-lang-ecosystem)
- [您想学习 Rust，但不知道从哪里开始](https://towardsdatascience.com/you-want-to-learn-rust-but-you-dont-know-where-to-start-fc826402d5ba)
- [7 种强大的 Rust 驱动的命令行实用程序](https://towardsdatascience.com/awesome-rust-powered-command-line-utilities-b5359c38692)
- [Rust 驱动的命令行实用程序可提高您的生产率](https://towardsdatascience.com/rust-powered-command-line-utilities-to-increase-your-productivity-eea03a4cf83a)
- [Rust 中的 Errors：一次深入研究](https://www.halcyon.hr/posts/error-handling-in-rust/)
- [Hyper 陷阱](https://vorner.github.io/2020/04/13/hyper-traps.html)
- [STM32 Nucleo-F302R8 和 Rust 入门](https://blue42.net/code/rust/examples/embedded/nucleo-f30248/getting-started/post/)
- [微软：Rust 是安全系统编程行业的“最佳机会”](https://thenewstack.io/microsoft-rust-is-the-industrys-best-chance-at-safe-systems-programming/)
- [Rust 之旅：第 7 章 —— 面向对象的编程](https://tourofrust.com/chapter_7_en.html)
- [Rust Analyzer Changelog ＃29](https://rust-analyzer.github.io/thisweek/2020/06/15/changelog-29.html)
- [Rustls 安全回顾和审核报告](https://github.com/ctz/rustls/blob/master/audit/TLS-01-report.pdf)
- [NDArray 索引数组和 Mask 索引数组](https://shahinrostami.com/posts/programming/rust-notebooks/ndarray-index-arrays-and-mask-index-arrays/)
- [Ringbahn 的两个内存错误](https://without.boats/blog/two-memory-bugs-from-ringbahn/)
- [Dart 遇见 Rust：天堂造的干柴烈火](https://dev.to/sunshine-chain/dart-meets-rust-a-match-made-in-heaven-9f5)
- [C++ 开发者学习 Rust！](https://dev.to/rhymu8354/c-developer-learning-rust-2oal)
- [装满水的容器](https://dev.to/steadbytes/container-with-most-water-3ige)
- [Rust 中的泛型和编译时](https://pingcap.com/blog/generics-and-compile-time-in-rust/)
- [借助 Rust：改善您的 Phoenix 应用程序全栈的性能](https://dev.to/scorsi/improve-the-performances-of-our-phoenix-app-with-rust-4d7a)
- [改进 IDE for Rust / WinRT ](https://kennykerr.ca/2020/06/09/improving-the-ide-for-rust-winrt/)
- [我在 Rust 开源项目中的经验](https://javednissar.ca/getting-involved-in-rust-open-source/)
- [Rust 玩代号](https://rolisz.ro/2020/06/10/playing-codenames-with-rust/)
- [将你的好奇之心落于 Rust ](https://tim.mcnamara.nz/post/621040767010504704/spend-your-novelty-budget-on-rust)
- [Rust 编译器并不慢!!；O-0，we are。](https://blog.kodewerx.org/2020/06/the-rust-compiler-isnt-slow-we-are.html)
- [Rust 的尾调用优化故事](https://dev.to/seanchen1991/the-story-of-tail-call-optimizations-in-rust-35hf)
- \[音频] [arewepodcastyet - interview with tim mcnamara, author of rust in action](https://soundcloud.com/arewepodcastyet/awpy-05-tim-mcnamara-timclicks)
- \[视频] [rust notebooks (jupyter and evcxr) - getting started](https://www.youtube.com/watch?v=SZKEzNL9als)

# 周箱

这周的箱子是[safer_ffi](https://github.com/getditto/safer_ffi)，用于帮助编写安全的 FFI 代码的库。

谢谢[弗拉德·弗罗洛夫（Vlad Frolov）](https://users.rust-lang.org/t/crate-of-the-week/2704/780)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [gooseberry：在每个 page 中，添加相关的 tags](https://github.com/out-of-cheese-error/gooseberry/issues/3)
- [gooseberry：贡献通用规划](https://github.com/out-of-cheese-error/gooseberry/blob/master/CONTRIBUTING.md)
- [rust：`fs::remove_dir_all` 在 Windows 上的大型目录，很少成功](https://github.com/rust-lang/rust/issues/29497#issuecomment-573353391)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 354 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-06-08..2020-06-15

- [启用 AVR 作为一个 Tier 3 target upstream](https://github.com/rust-lang/rust/pull/69478)
- [为 x86_64-fortanix-unknown-sgx 启用 LVI 强化](https://github.com/rust-lang/rust/pull/72655)
- [添加`-Z span-debug`，以便更轻松地调试 proc 宏](https://github.com/rust-lang/rust/pull/72799)
- [添加方法，可以让一个 null-终止符 的 `Vec<u8>` 转为 一个`CString`](https://github.com/rust-lang/rust/pull/73139)
- [drop elaboration 后，检查常量中的 live drops](https://github.com/rust-lang/rust/pull/71824)
- [显示`FnMut`错误内，有关‘捕获变量’的信息](https://github.com/rust-lang/rust/pull/72598)
- [当 obligation 包含错误时，不要创建 impl candidates](https://github.com/rust-lang/rust/pull/73005)
- [强制 unwind invariants](https://github.com/rust-lang/rust/pull/73133)
- [解释，由于方法调用涉及`self`，而发生的 move 错误](https://github.com/rust-lang/rust/pull/72389)
- [修复`#[thread_local]` statics 作为`asm!`符号操作](https://github.com/rust-lang/rust/pull/73033)
- [修复：trait alias inherent impl 解析](https://github.com/rust-lang/rust/pull/72556)
- [简化的`default()`，转为`Default::default()`](https://github.com/rust-lang/rust/pull/73001)
- [正确处理 assembler 警告](https://github.com/rust-lang/rust/pull/73169)
- [在递归 ADT 上，提供间接的结构式建议](https://github.com/rust-lang/rust/pull/72740)
- [提供转换数值运算 LHS，而不是 unwrapping RHS 的建议](https://github.com/rust-lang/rust/pull/73195)
- [验证一个类型是否具有结构相等性（structural equality）](https://github.com/rust-lang/rust/pull/73066)
- [使存在的关联类型（existential associated types）与 variance Invariant 关联](https://github.com/rust-lang/rust/pull/71896)
- [建议在注释中，包括未使用的 asm 参数，以避免错误](https://github.com/rust-lang/rust/pull/73230)
- [在内部 doc 链接解析（doc link resolution）中，支持 proc 宏](https://github.com/rust-lang/rust/pull/73183)
- [跟踪 - 方法调用中的函数范围(span of function)，并在`#[track_caller]`使用它](https://github.com/rust-lang/rust/pull/73182)
- [在剩下的 rustc 箱子里，使用`min_specialization`](https://github.com/rust-lang/rust/pull/72707)
- [使用 shorthand linker strip 参数，以支持 MacOS](https://github.com/rust-lang/rust/pull/73138)
- [expand：expansion-time lints 的更精确位置](https://github.com/rust-lang/rust/pull/73178)
- [扩展对 HermitCore 的网络支持](https://github.com/rust-lang/rust/pull/73331)
- [为 Miri，修复 caller_location intrinsic](https://github.com/rust-lang/rust/pull/73277)
- [不正确的 ctypes：规范化返回类型和透明结构](https://github.com/rust-lang/rust/pull/72890)
- [在结构匹配检查期间（structural match checking），标准化 adt 字段](https://github.com/rust-lang/rust/pull/72897)
- [resolve：不建议从我们在 resolving 的同一模块中导入](https://github.com/rust-lang/rust/pull/72789)
- [structure_match：non-structural-match 类型的闭包](https://github.com/rust-lang/rust/pull/73353)
- [chalk：添加 FnOnce trait，并为 Function 类型提供 impl](https://github.com/rust-lang/chalk/pull/494)
- [chalk：Rust IR 中的 model 函数 ABI](https://github.com/rust-lang/chalk/pull/481)
- [chalk：递归求解器 factoring 和 privacy](https://github.com/rust-lang/chalk/pull/513)
- [chalk：重构 ProgramClauseData，以删除隐含变体](https://github.com/rust-lang/chalk/pull/514)
- [chalk：添加`Unsize` trait 的实现](https://github.com/rust-lang/chalk/pull/427)
- [miri：避免重复跟踪当前位置三次](https://github.com/rust-lang/rust/pull/72879)
- [移除 `RawVec::reserve_in_place`](https://github.com/rust-lang/rust/pull/72417)
- [稳定化：`Option::zip`](https://github.com/rust-lang/rust/pull/72938)
- [稳定化：`vec::Drain::as_slice`](https://github.com/rust-lang/rust/pull/72584)
- [impl `AsRef<[T]>` for `vec::IntoIter<T>`](https://github.com/rust-lang/rust/pull/72583)
- [std：在 wasm32 上，启用 atomic.fence emission](https://github.com/rust-lang/rust/pull/73036)
- [stdarch：修复 x86 extract_epi{8,16} 函数](https://github.com/rust-lang/stdarch/pull/868)
- [实现新的 gdb/lldb pretty-printers](https://github.com/rust-lang/rust/pull/72357)
- [cargo：添加环境变量，以标识二进制文件和箱子名称](https://github.com/rust-lang/cargo/pull/8270)
- [cargo：允许直接将一个 ’registry index url‘ 传递给`cargo install`](https://github.com/rust-lang/cargo/pull/8344)
- [cargo：修复不与`--target=HOST` 一起运行的 doctests](https://github.com/rust-lang/cargo/pull/8358)
- [cargo：在`config.json` `dl` 字段，支持`{prefix}`和`{lowerprefix}` markers](https://github.com/rust-lang/cargo/pull/8267)
- [crates.io：允许配置应用程序的域名](https://github.com/rust-lang/crates.io/pull/2543)
- [crates.io：修饰符/高亮显示语法：禁用积极的空格删减](https://github.com/rust-lang/crates.io/pull/2564)
- [doc：如果 impl block 具有关联的常量，则使其可折叠](https://github.com/rust-lang/rust/pull/71842)
- [docs.rs：为'上传的文档'加压缩](https://github.com/rust-lang/docs.rs/pull/780)
- [docs.rs：限制所提供文件的大小](https://github.com/rust-lang/docs.rs/pull/834)
- [clippy：宏使用建议](https://github.com/rust-lang/rust-clippy/pull/5279)
- [clippy：let_and_return：避免 “does not live long enough” 错误](https://github.com/rust-lang/rust-clippy/pull/5680)
- [rustfmt：在可见性 modifier 和 item name 之间，取用 comments](https://github.com/rust-lang/rustfmt/pull/4239)

## Rust 编译器性能分类

- [2020-06-16](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-06-16)

## 批准的 RFC

生锈后会生锈[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 这些是本周批准实施的 RFC：

_本周没有批准 RFCs。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [添加 Windows 系统 error codes ，且应 映射到 `io::errorkind::timedout` ](https://github.com/rust-lang/rust/pull/71756)
- \[处置：合并] [impl `PartialEq<Vec<B>> for &[A], &mut [A]`](https://github.com/rust-lang/rust/pull/71660)

## 新的 RFC

[RFC：将 Freeze trait 添加到 libcore/libstd](https://github.com/rust-lang/rfcs/pull/2944)

# 本周引用句

> 从前，有个勇者村，剧本应该是与恶龙斗争，而现在，(我们)作为村子的一部分，却要学会爱上这条龙。

– [turbinerneiter on Hacker News](https://news.ycombinator.com/item?id=23437950)

Thanks to [blonk](https://users.rust-lang.org/t/twir-quote-of-the-week/328/892) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/hactqu/this_week_in_rust_343/)</small>
