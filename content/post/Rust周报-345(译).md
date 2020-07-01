---
title: "Rust周报 345(译)"
date: 2020-07-01T20:37:12+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-345"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-06-30
- [原文：345 期](https://this-week-in-rust.org/blog/2020/06/30/this-week-in-rust-345/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/019-twir-345/)

# Rust 社区的更新

## 新闻和博客文章

- [async in Rust 实用指南](https://blog.logrocket.com/a-practical-guide-to-async-in-rust/)
- [安全 Rust 准则 —— ANSSI（法国国家网络安全局）](https://anssi-fr.github.io/rust-guide/)
- [使用 VSCode 在 AWS EC2 上，更快地进行 Rust 开发](https://dev.to/rimutaka/faster-rust-development-on-aws-ec2-with-vscode-4hno)
- [Rust 验证工具](https://alastairreid.github.io/rust-verification-tools/)
- [用 Rust 检查 ARM vs X86 内存模型](https://www.nickwilcox.com/blog/arm_vs_x86_memory_model/)
- [磁盘空间和 LTO 的改进](https://blog.rust-lang.org/inside-rust/2020/06/29/lto-improvements.html)
- [Rust 构建更快的 CouchDB View 服务器](https://www.garrensmith.com/blogs/fortuna-rs-couchdb-view-server)
- [使用 SQLx 和 Postgres 实现一个作业队列](https://cetra3.github.io/blog/implementing-a-jobq-sqlx/)
- [Rust + Actix + CosmosDB（MongoDB）教程 api](https://dev.to/jbarszczewski/rust-actix-cosmosdb-mongodb-tutorial-api-17i5)
- [极其简单的 Rust Rocket 框架教程](https://frogtok.com/extremely-simple-rust-rocket-framework-tutorial/)
- [使用 Rust 和 Rocket 构建智能书签工具](https://developers.facebook.com/blog/post/2020/06/03/build-smart-bookmarking-tool-rust-rocket/)
- [一个 Future 就是一个暂停的调度程序](https://nikhilism.com/post/2020/futures-suspending-scheduler/)
- [为 Raspberry Pi 跨平台构建 Rust GStreamer 插件](https://www.collabora.com/news-and-blog/blog/2020/06/23/cross-building-rust-gstreamer-plugins-for-the-raspberry-pi/)
- [xi-editor 回顾](https://raphlinus.github.io/xi/2020/06/27/xi-retrospective.html)
- [Rust 编写的数据库项目，本月报告](https://alex-dukhno.github.io/2020-06-27-This-June-in-my-Database-project-written-in-rust/)
- [Rust 编译缓慢的较多原因](https://pingcap.com/blog/reasons-rust-compiles-slowly)
- [在 RISC-V 上，修复 Rust 的测试套件](https://www.codethink.co.uk/articles/2020/fixing-rusts-test-suite-on-risc-v/)
- [Rust - Protobuf 代码生成](https://dev.to/elshize/protobuf-code-generation-in-rust-1e35)
- [使用 Rust 和 OpenCV 跟踪眼中心位置](https://www.blog.nodrama.io/rust-opencv-eye-center-localisation/)
- [使用 rust，blurz，读取一个 BLE 设备](https://dev.to/lcsfelix/using-rust-blurz-to-read-from-a-ble-device-gmb)
- [rust-analyzer 变更日志 ＃31](https://rust-analyzer.github.io/thisweek/2020/06/29/changelog-31.html)
- [IntelliJ Rust 变更日志 ＃125](https://intellij-rust.github.io/2020/06/29/changelog-125.html)
- \[视频] [manipulating ports, virtual ports and pseudo terminals - rust wrocław webinar](https://www.youtube.com/watch?v=_cYz03jS7tk&feature=youtu.be)
- \[视频] [rust stream: iterators](https://www.youtube.com/watch?v=lQt0adYPdfQ&feature=youtu.be)

# 周箱

这周的箱子是[print_bytes](https://crates.io/crates/print_bytes)，该库可将任意 bytes，尽可能无损地打印到 stream 中。

谢谢[dylni](https://users.rust-lang.org/t/crate-of-the-week/2704/784)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

- [Database in Rust 正在寻找贡献者](https://github.com/alex-dukhno/database/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [Gooseberry：将 kb_dir 设置在用户更易于访问的位置](https://github.com/out-of-cheese-error/gooseberry/issues/8)
- [Ruma：添加 directory 和 profile 查询端点](https://github.com/ruma/ruma/issues/79)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 339 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-06-22..2020-06-29

- [将 leak-check 移到，coherence，candidate eval 过程](https://github.com/rust-lang/rust/pull/72493)
- [建议`'_`时，在返回类型中，考虑使用多个 impl/dyn Trait](https://github.com/rust-lang/rust/pull/73496)
- [调整 binop errors](https://github.com/rust-lang/rust/pull/73674)
- [当一个函数缺少 async 关键字时，添加一条更清晰的提示消息](https://github.com/rust-lang/rust/pull/73672)
- [允许动态链接那些 iOS / tvOS targets](https://github.com/rust-lang/rust/pull/73516)
- [总是捕获`macro_rules!` 参数的 tokens ](https://github.com/rust-lang/rust/pull/73293)
- [更改 heuristic，以确定 range 字面](https://github.com/rust-lang/rust/pull/73639)
- [检查，non-conflicting generator 保存的 locals 之间的分配](https://github.com/rust-lang/rust/pull/73244)
- [const prop：在每个 block 的末尾，擦除所有 block-only locals](https://github.com/rust-lang/rust/pull/73757)
- [发出 generator variants 的 line info](https://github.com/rust-lang/rust/pull/73460)
- [解释，由于涉及`self`的方法调用，而发生的移动错误（move errors）](https://github.com/rust-lang/rust/pull/73708)
- [修复 ARM 内联汇编的保留寄存器的处理](https://github.com/rust-lang/rust/pull/73588)
- [改进了编译器错误消息 —— 关于错误的泛型参数顺序](https://github.com/rust-lang/rust/pull/72271)
- [单态化（monomorphization）期间发生溢出时，指向 call span](https://github.com/rust-lang/rust/pull/73601)
- [提供一些，moved value errors 的建议](https://github.com/rust-lang/rust/pull/73534)
- [self contained 链接项](https://github.com/rust-lang/rust/pull/72738)
- [进行 obligation 删除重复数据，以避免出现故障的`ExistentialMismatch`](https://github.com/rust-lang/rust/pull/73485)
- [显示将溢出 const evaluation 或传播的值和计算](https://github.com/rust-lang/rust/pull/73513)
- [稳定化：`#![feature(const_if_match)]`和`#![feature(const_loop)]`](https://github.com/rust-lang/rust/pull/72437)
- [const eval 内的指针相等性 —— 有个法子](https://github.com/rust-lang/rust/pull/73398)
- [const propagator 无法跟踪引用](https://github.com/rust-lang/rust/pull/73613)
- [链接到私有 item 时，发出警告](https://github.com/rust-lang/rust/pull/72771)
- [`improper_ctypes_definitions` lint](https://github.com/rust-lang/rust/pull/72700)
- [添加：Windows system error 代码，这些代码应该对应 `io::ErrorKind::TimedOut`](https://github.com/rust-lang/rust/pull/71756)
- [errors：在 JSON emitter 中，使用`-Z terminal-width`](https://github.com/rust-lang/rust/pull/73763)
- [proc_macro：停止 flattening 具有 dummy spans 的 groups](https://github.com/rust-lang/rust/pull/73102)
- [rustc_lint：仅当一个 lint 需要它时，才去查询`typeck_tables_of`](https://github.com/rust-lang/rust/pull/73743)
- [rustdoc：使用 crate 筛选，修复 doc 别名](https://github.com/rust-lang/rust/pull/73644)
- [chalk：.chalk 文件语法编写器](https://github.com/rust-lang/chalk/pull/430)
- [chalk：添加方法，以将 ADT 的 repr 数据，取到 ChalkDatabase](https://github.com/rust-lang/chalk/pull/523)
- [chalk：涉及泛型时，修复内置的`Fn` impls](https://github.com/rust-lang/chalk/pull/541)
- [chalk：修复 generic bound 内，关联类型的 coherence 问题](https://github.com/rust-lang/chalk/pull/538)
- [miri：在 Windows 上实现 rwlocks](https://github.com/rust-lang/miri/pull/1461)
- [miri：提供我们自己的 —— CTFE 指针比较 —— 内在函数的实现](https://github.com/rust-lang/miri/pull/1459)
- [原始 BTreeMap / BTreeSet iterators 上的 min/max 的简写](https://github.com/rust-lang/rust/pull/73627)
- [添加`TryFrom<{int}>` for `NonZero{int}`](https://github.com/rust-lang/rust/pull/72717)
- [为`std::thread::panicking`添加一个 fast path。](https://github.com/rust-lang/rust/pull/72617)
- [添加 `[T]::partition_point` ](https://github.com/rust-lang/rust/pull/73577)
- [添加不稳定`core::mem::variant_count`内在函数](https://github.com/rust-lang/rust/pull/73418)
- [在 stdio 结构中，添加了 io 转发方法](https://github.com/rust-lang/rust/pull/72705)
- [稳定化：`leading_trailing_ones`](https://github.com/rust-lang/rust/pull/73032)
- [`impl PartialEq<Vec<B>> for &[A], &mut [A]`](https://github.com/rust-lang/rust/pull/71660)
- [`Hash::write_iN` 转 `Hash::write_uN`](https://github.com/rust-lang/rust/pull/73800)
- [libc：为 solarish OSes，添加辅助的 socket data accessor 函数](https://github.com/rust-lang/libc/pull/1792)
- [libc：FreeBSD：machine 寄存器结构](https://github.com/rust-lang/libc/pull/1791)
- [libc：添加 wexecv，wexecve，wexecvp，wexecvpe](https://github.com/rust-lang/libc/pull/1796)
- [cargo：增加对`workspace.metadata`表格的支持](https://github.com/rust-lang/cargo/pull/8323)
- [cargo：添加环境变量 CARGO_PKG_LICENSE_FILE](https://github.com/rust-lang/cargo/pull/8387)
- [cargo：在“cargo install”中，启用“ --target-dir”](https://github.com/rust-lang/cargo/pull/8391)
- [cargo：在 Compilation 结构中，公开内置的 cdylib 工件](https://github.com/rust-lang/cargo/pull/8418)
- [cargo：改善对 non-`master`主分支的支持](https://github.com/rust-lang/cargo/pull/8364)
- [docs.rs：当目标重定向（target-redirect），crate 不存在时，不要惊慌](https://github.com/rust-lang/docs.rs/pull/859)
- [docs.rs：改进执行测试](https://github.com/rust-lang/docs.rs/pull/861)
- [clippy：lint iterator.map(|x| x)](https://github.com/rust-lang/rust-clippy/pull/5694)
- [clippy：新 lint：建议用`ptr::read`，代替`mem::replace(..., uninitialized())`](https://github.com/rust-lang/rust-clippy/pull/5695)
- [clippy：clippy-driver：如果存在 --rustc，则将所有参数传递给 rustc](https://github.com/rust-lang/rust-clippy/pull/5178)
- [clippy：cmp_owned：处理，没有对称实现 PartialEq](https://github.com/rust-lang/rust-clippy/pull/5701)
- [rustfmt： #![macro_use] 不要使用重新排序模块声明](https://github.com/rust-lang/rustfmt/pull/4284)
- [rustfmt：除非提供 --force 标志，否则请勿重新格式化 errors](https://github.com/rust-lang/rustfmt/pull/4256)

## Rust 编译器性能分类

- [2020-06-30](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-06-30)。三个性能退化，其中两个在 rollups 中；有两项改进，一项在 rollup。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC：删除重复 Cargo 工作区信息](https://github.com/rust-lang/rfcs/pull/2906)

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [内联`const`表达式和模式](https://github.com/rust-lang/rfcs/pull/2920)
- [内联汇编](https://github.com/rust-lang/rfcs/pull/2873)

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [impl `From<char>` for String](https://github.com/rust-lang/rust/pull/73466)
- \[处置：合并] [移动 std libs 到 std/](https://github.com/rust-lang/rust/pull/73265)
- \[处置：合并] [稳定化： `transmute` 在 constants 和 statics ，但不在 const fn](https://github.com/rust-lang/rust/pull/72920)
- \[处置：合并] [添加 `.collect()`，可以将 `Box<str>` 变为 String](https://github.com/rust-lang/rust/pull/72688)
- \[处置：合并] [稳定化： const_type_id feature](https://github.com/rust-lang/rust/pull/72488>)

## 新的 RFC

- [本地库的 Linking modifiers](https://github.com/rust-lang/rfcs/pull/2951)
- [分层匿名 life-time](https://github.com/rust-lang/rfcs/pull/2949)
- [便携式压缩的 SIMD vector 类型](https://github.com/rust-lang/rfcs/pull/2948)
- [crates.io token 作用域](https://github.com/rust-lang/rfcs/pull/2947)

# 本周最佳语录

> 引用，是一个锋利的工具，大约有三种不同的方法来使用这把锋利的工具。
>
> 1.  不要给程序员锋利的工具。他们可能会犯错误，或是割断手指。_这是 Java/Python/Perl/Ruby/PHP。。。所用的方法。_
> 2.  给程序员所有他们想要的锋利工具。他们是专业人士，如果他们割断手指，那是他们自己的错。_这是 C/C++ 给出的方法。_
> 3.  给程序员一些锋利的工具，但要在上面，加上防护装置，这样他们就不会不小心割掉手指。_这是 Rust 的方法。_
>
> 生命周期注释是引用的安全保护。Rust 的引用是没有同步（synchronization），也没有引用计数的 —— 这就是它们的锋利之处。第 1 类语言的引用（通常*是*有同步和引用计数）是“迟钝”的：他们的效率与第 2 类和第 3 类语言是*相当*不能比的，但它们不会割到你，且可以工作；只会让你慢一点。
>
> 所以，坦白地说，我喜欢生命周期注释，既有保护，也可以快。

– [trentj on rust-users](https://users.rust-lang.org/t/when-do-you-find-lifetime-annotations-helpful/44434/6)

Thanks to [Ivan Tham](https://users.rust-lang.org/t/twir-quote-of-the-week/328/897) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/hisn3e/this_week_in_rust_345/)</small>
