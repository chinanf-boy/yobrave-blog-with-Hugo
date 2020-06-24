---
title: "Rust周报 344(译)"
date: 2020-06-24T17:04:12+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-344"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-06-23
- [原文：344 期](https://this-week-in-rust.org/blog/2020/06/23/this-week-in-rust-344/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

退房[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/019-twir-344/)

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Rust 1.44.1](https://blog.rust-lang.org/2020/06/18/Rust.1.44.1.html)
- [Rust 编写 Non-Trivial 宏](http://adventures.michaelfbryan.com/posts/non-trivial-macros/)
- [用一个 CLI 深掘 Rust](https://kbknapp.dev/rust-cli/)
- [用于数据密集型计算的 Rust](https://materialize.io/rust-for-data-intensive-computation/)
- [3K，60fps，130ms：使用 Rust 实现](https://blog.tonari.no/why-we-love-rust?ref=twtr)
- [Rust 并发：一个'消息传递' bug 的原型。](https://medium.com/@polyglot_factotum/rust-concurrency-the-archetype-of-a-message-passing-bug-817b60efd8f8?source=friends_link&sk=ad32b77d42eda3dd28a26671282271df)
- [如何设计 Rust 的 Panic 弹性](https://towardsdatascience.com/how-to-design-for-panic-resilience-in-rust-55d5fd2478b9)
- [GitHub Action 用于二进制箱子安装](https://svartalf.info/posts/2020-04-10-github-action-for-binary-crates-installation/)
- [使用 Github Action 处理 Rust 膨胀](https://tomforb.es/managing-rust-bloat-with-github-actions/)
- [Rust 和 WebAssembly：多人棋盘游戏](http://www.mattkeeter.com/projects/pont/)
- [我对 unsafe {} 感到不舒服](https://djugei.github.io/bad-at-unsafe/)
- [SIMD 库计划](https://vorner.github.io/2020/05/08/simd-library-plans.html)
- [加快 Rust 编译时间的技巧](https://endler.dev/2020/rust-compile-times/)
- [Rust Analyzer Changelog ＃30](https://rust-analyzer.github.io/thisweek/2020/06/22/changelog-30.html)
- [Rust 和 Substrate 构建区块链：针对开发人员的循序渐进指南](https://hackernoon.com/building-a-blockchain-in-rust-and-substrate-a-step-by-step-guide-for-developers-kc223ybp)
- [Dart and Rust：一篇异步故事](https://dev.to/sunshine-chain/rust-and-dart-the-async-story-3adk)
- [解码一份证书<certificate>](https://dev.to/wayofthepie/decode-a-certificate-5903)
- [OneSignal：Rust 四年](https://onesignal.com/blog/4-years-of-rust-at-onesignal/)
- [Rust 是如何让我们监控每分钟 30k API 调用](https://blog.bearer.sh/how-rust-lets-us-monitor-30k-api-calls-min/)
- [如何在 Rust 中使用 C ++ 多态性<polymorphism>](https://medium.com/swlh/how-to-use-c-polymorphism-in-rust-76e1d1a88ed1)
- [在 Rust 中实现类型安全的 printf](http://willcrichton.net/notes/type-safe-printf/)
- [面向 Node 开发人员的 Rust 简介](https://dev.to/tindleaj/introduction-to-rust-for-node-developers-3j05)
- [想要从危险代码手中，拯救世界的编程语言](https://www.protocol.com/rust-programming-safety-security)
- [使用 Proptest 在 Rust 中，进行基于属性<Property-based>的测试](https://blog.logrocket.com/property-based-testing-in-rust-with-proptest/)
- [CNCF : 使用 Rust](https://www.cncf.io/blog/2020/06/22/rust-at-cncf/)
- [Rust 的庞大编译单元](https://pingcap.com/blog/rust-huge-compilation-units)
- [RustHorn：Rust 程序的基于 CHC 的验证](https://link.springer.com/chapter/10.1007%2F978-3-030-44914-8_18)
- [发行不会崩坏的 Linux 二进制文件](https://saarw.github.io/dev/2020/06/18/shipping-linux-binaries-that-dont-break-with-rust.html)
- [ Struct 中，Rust Lifetimes 的一些示例](https://dev.to/frankmeza/some-examples-of-rust-lifetimes-in-a-struct-3m53)
- [x86_64-unknown-linux-musl Target 的 Static PIE 和 ASLR](https://harald.hoyer.xyz/rust-static-pie/)
- [三个字节，为一个整数](https://dev.to/wayofthepie/three-bytes-to-an-integer-13g5)
- [使用 Rust，删除 Gitignored 杂物](https://www.forrestthewoods.com/blog/using-rust-to-delete-gitignored-cruft/)
- [Rust 之旅 —— 第 8 章 —— 智能指针](https://tourofrust.com/chapter_8_en.html)
- [线程本地存储 —— 制作自己的可执行打包程序 P.13](https://fasterthanli.me/blog/2020/thread-local-storage/)
- [使用 Rust 的 RISC-V OS —— 第 11 章](http://osblog.stephenmarz.com/ch11.html)
- [从零到生产 ＃2：通过构建电子邮件通讯来学习](https://www.lpalmieri.com/posts/2020-06-21-zero-to-production-2-learn-by-building-an-email-newsletter/)
- \[视频] [crust of rust: smart pointers and interior mutability](https://www.youtube.com/watch?v=8O0Nt9qY_vo)
- \[视频] [cs 196 at illinois](https://www.youtube.com/channel/UCRA18QWPzB7FYVyg0WFKC6g/videos)
- \[视频] [ask me anything with felix klock](https://www.youtube.com/watch?v=jGgQmnPH0dQ&feature=youtu.be&t=28792)
- \[视频] [rust stream: the guard pattern and interior mutability](https://www.youtube.com/watch?v=lmEKIvLh9D4&feature=youtu.be)

# 周箱

这周的箱子是[diskonaut](https://github.com/imsnif/diskonaut)，一个磁盘资源管理器。

谢谢[亚兰·德雷维肯宁（Aram Drevekenin）](https://users.rust-lang.org/t/crate-of-the-week/2704/781)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

- [GitUI 正在寻找贡献者](https://github.com/extrawurst/gitui/issues)
- [Ruma：/account/whoami 应该使用 UserId](https://github.com/ruma/ruma/issues/54)

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 325 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-06-15..2020-06-22

- [添加`asm!()`，支持 hexagon](https://github.com/rust-lang/rust/pull/73214)
- [启用 LLVM zlib](https://github.com/rust-lang/rust/pull/72696)
- [添加方法，从一个 null-terminated 的 `Vec<u8>`到一个`CString`](https://github.com/rust-lang/rust/pull/73139)
- [允许多个`asm!`选项组，并报告重复选项的错误](https://github.com/rust-lang/rust/pull/73227)
- [诊断使用不兼容的 sanitizers](https://github.com/rust-lang/rust/pull/73347)
- [加载的箱子，不允许非 ASCII 标识符名称](https://github.com/rust-lang/rust/pull/73305)
- [导出`#[inline]` 函数，要带 extern 标记](https://github.com/rust-lang/rust/pull/73034)
- [修复 reborrowing 时的 autoderef](https://github.com/rust-lang/rust/pull/72280)
- [进一步的调整，在返回位置上，涉及`dyn Trait`和`impl Trait`的生命周期错误](https://github.com/rust-lang/rust/pull/72804)
- [实现 crate-level-only 的 lints 检查。](https://github.com/rust-lang/rust/pull/73300)
- [实现新的 gdb/lldb 漂亮打印机](https://github.com/rust-lang/rust/pull/72357)
- [改善诊断：`let x += 1`](https://github.com/rust-lang/rust/pull/71976)
- [使`need_type_info_err`更保守点](https://github.com/rust-lang/rust/pull/73027)
- [充分 ty::Error 的所有使用，延迟一个 span bug](https://github.com/rust-lang/rust/pull/70551)
- [让新的参数建议，更有针对性](https://github.com/rust-lang/rust/pull/73320)
- [新颖的结构匹配是违规<violations>，而不是`bug`](https://github.com/rust-lang/rust/pull/73446)
- [仅显示实际应用的其他方法 receiver 候选者](https://github.com/rust-lang/rust/pull/73382)
- [在“use”建议中，偏好可访问的路径](https://github.com/rust-lang/rust/pull/72623)
- [防止攻击者操纵 SGX enclave 中，所用到的 FPU 标签字](https://github.com/rust-lang/rust/pull/73471)
- [projection bound 验证<validation>](https://github.com/rust-lang/rust/pull/72788)
- [对一个实现了 Drop，C-like 枚举转换时，报告错误](https://github.com/rust-lang/rust/pull/72331)
- [specialization 不健全](https://github.com/rust-lang/rust/pull/71420)
- [在其余的 rustc 箱子中，使用 min_specialization](https://github.com/rust-lang/rust/pull/72707)
- [添加`ToString for char`的 specialization](https://github.com/rust-lang/rust/pull/73465)
- [适用于 ADTs 时，建议使用`?Sized`](https://github.com/rust-lang/rust/pull/73261)
- [在 aarch64-unknown-linux-gnu 上，支持 sanitizers](https://github.com/rust-lang/rust/pull/73058)
- [若预先检查了 slice len<长度> 时，省略 bounds check 测试](https://github.com/rust-lang/rust/pull/73362)
- [弱 trait 选择失败，尝试建议 解引用](https://github.com/rust-lang/rust/pull/72456)
- [对 bug! 宏，使用 track caller 程序](https://github.com/rust-lang/rust/pull/73373)
- [除 const-fns 外，在所有常量上下文中，禁止可变引用](https://github.com/rust-lang/rust/pull/72934)
- [linker：MSVC 支持将静态库链接，看成一整个存档](https://github.com/rust-lang/rust/pull/72785)
- [linker：永不传递`-no-pie`到 non-gnu linkers](https://github.com/rust-lang/rust/pull/73384)
- [lint：使用不透明类型，将 projections 标准化](https://github.com/rust-lang/rust/pull/73287)
- [添加一个 lint，捕捉冲突的`extern`fn 声明。](https://github.com/rust-lang/rust/pull/70946)
- [内存访问健全性检查：中止而不是 panic](https://github.com/rust-lang/rust/pull/73054)
- [pretty/mir：const 值枚举，不带变体](https://github.com/rust-lang/rust/pull/73442)
- [将`ObligationCause`存在堆上](https://github.com/rust-lang/rust/pull/72962)
- [chalk：添加闭包](https://github.com/rust-lang/chalk/pull/519)
- [chalk：忽略 auto traits 的顺序](https://github.com/rust-lang/chalk/pull/531)
- [修复：负值问题](https://github.com/rust-lang/rust/pull/72486)
- [稳定化：Option::zip](https://github.com/rust-lang/rust/pull/72938)
- [稳定化： vec::Drain::as_slice](https://github.com/rust-lang/rust/pull/72584)
- [如果可能，尽量用`Ipv4Addr::from<[u8; 4]>`](https://github.com/rust-lang/rust/pull/73389)
- [core/time：add Duration methods for zero](https://github.com/rust-lang/rust/pull/72790)
- [弃用 wrapping_offset_from](https://github.com/rust-lang/rust/pull/73580)
- [impl PartialEq<Vec<B>> for &[A], &mut [A]](https://github.com/rust-lang/rust/pull/71660)
- [hashbrown：避免创建容量为 1 的小 tables](https://github.com/rust-lang/hashbrown/pull/162)
- [stdarch：添加 AVX 512f gather<合>，scatter<散> 和 compare<比较> 的 intrinsics<内部函数>](https://github.com/rust-lang/stdarch/pull/866)
- [cargo：添加环境变量 CARGO_PKG_LICENSE](https://github.com/rust-lang/cargo/pull/8325)
- [cargo：减少从 git 依赖项获取的数据](https://github.com/rust-lang/cargo/pull/8363)
- [cargo：修复> doctests 不与 --target=HOST 一起运行](https://github.com/rust-lang/cargo/pull/8358)
- [cargo：修复> 与顺序有关的 feature resolution。](https://github.com/rust-lang/cargo/pull/8395)
- [cargo：修复> '过分热心'的`clean -p`，保留名称](https://github.com/rust-lang/cargo/pull/8398)
- [cargo：用 -Zdoctest-xcompile 支持 linker。](https://github.com/rust-lang/cargo/pull/8359)
- [rustfmt：避免使用 Symbol::intern](https://github.com/rust-lang/rustfmt/pull/4268)
- [rustfmt：确保空 match 代码块上的 idempotency<幂等性>](https://github.com/rust-lang/rustfmt/pull/4271)

## Rust 编译器性能分类

- [2020-06-23](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-06-23)。这周有很多改进，并且没有回归，这很好。但是，我们经常看到对汇总产生明显的性能影响，这是一个值得关注的问题。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [impl `From<char>` for String](https://github.com/rust-lang/rust/pull/73466)
- \[处置：合并] [稳定化：leading_trailing_ones](https://github.com/rust-lang/rust/pull/73032)
- \[处置：合并] [添加：`TryFrom<{int}>` for `NonZero{int}`](https://github.com/rust-lang/rust/pull/72717)
- \[处置：合并] [稳定化：`#[track_caller]`](https://github.com/rust-lang/rust/pull/72445)
- \[处置：合并] [添加：Windows system error 代码，这些代码应该对应 `io::errorkind::timedout`](https://github.com/rust-lang/rust/pull/71756)
- \[处置：合并] [跟踪问题：rfc 2344, "allow `loop` in constant evaluation"](https://github.com/rust-lang/rust/issues/52000)
- \[处置：合并] [跟踪问题：`option::deref`, `result::deref`, `result::deref_ok`, and `result::deref_err`](https://github.com/rust-lang/rust/issues/50264)

## 新的 RFC

- [RFC：“C unwind” ABI](https://github.com/rust-lang/rfcs/pull/2945)

# 本周引用句

> Rust 的美丽在于开发社区做出的无数决定，这些决定不断使您感到自己可以吃下十份蛋糕，结果就是，你真的可以全部吃掉。

– [Jake McGinty et al on the tonari blog](https://blog.tonari.no/why-we-love-rust)

Thanks to [llogiq](https://users.rust-lang.org/t/twir-quote-of-the-week/328/896) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust]()</small>
