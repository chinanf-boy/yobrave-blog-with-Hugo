---
title: "Rust周报 352(译)"
date: 2020-08-21T00:07:53+08:00
tags: ["week"]
description: "螃蟹-Rust周报-352"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-08-18
- [原文：352 期](https://this-week-in-rust.org/blog/2020/08/18/this-week-in-rust-352/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/028-twir-352/)

# Updates from Rust Community（Rust 社区更新）

### Official（官方）

- [为 Rust's future 打好地基](https://blog.rust-lang.org/2020/08/18/laying-the-foundation-for-rusts-future.html)

### Tooling（工具）

- [Rust Analyzer Changelog #38](https://rust-analyzer.github.io/thisweek/2020/08/17/changelog-38.html)

### Newsletters（时讯）

- [嵌入式工作组 Newsletter - 24](https://rust-embedded.github.io/blog/newsletter-24/)

### Observations/Thoughts（观察/思考）

- [为什么 Rust 挺合适嵌入式软件](https://tweedegolf.nl/blog/39/why-rust-is-a-great-fit-for-embedded-software)
- [为什么 Rust's Unsafe 就能行](https://jam1.re/blog/why-rusts-unsafe-works)
- [Rust RwLock 和 Mutex 性能怪癖](https://fy.blackhats.net.au/blog/html/2018/10/19/rust_rwlock_and_mutex_performance_oddities.html)
- [2020 最激动人心的旅程](https://medium.com/@knidarkness/the-most-exciting-journey-of-2020-6262d6c6f03)
- [丝滑般的 resize 测试](https://raphlinus.github.io/rust/gui/2019/06/21/smooth-resize-test.html)
- ["Rust 并没有一个稳定的(stable) ABI"](https://people.gnome.org/~federico/blog/rust-stable-abi.html)
- [Rust 回顾](https://dev.to/yujiri8/rust-review-515p)
- [Rust vs C++: 一个 JS/TS 开发者的角度](https://www.reddit.com/r/rust/comments/icdape/rust_vs_c_a_jsts_developers_perspective/)
- [比较 Unsafety](https://flak.tedunangst.com/post/comparative-unsafety)
- [Code Smell: 具体抽象](https://matklad.github.io/2020/08/15/concrete-abstraction.html)
- [抵制 Glob 形式（::\*）的导入](https://drs.is/post/against-globs/)

### Learn Standard Rust

- [Lifetimes in Rust](https://hashrust.com/blog/lifetimes-in-rust/)
- [Learning Rust: 编译器可是你的朋友](https://ferrous-systems.com/blog/the-compiler-is-your-friend/)
- [我是一名 Java, C#, C or C++ 开发者, 是时候搞搞 Rust 啦](https://fasterthanli.me/articles/i-am-a-java-csharp-c-or-cplusplus-dev-time-to-do-some-rust)
- [令人沮丧? 不是说你, it's Rust](https://fasterthanli.me/articles/frustrated-its-not-you-its-rust)
- [Async 独角兽，love Rust](https://blog.kdubovikov.ml/articles/rust/async-unicorns-love-rust)
- [到底是谁构建 the Builder?](https://matklad.github.io/2020/08/12/who-builds-the-builder.html)
- [入门 Rust](https://serokell.io/blog/rust-guide)
- [Rust 初学者 – Get Started with the Most Loved Programming Language](https://www.freecodecamp.org/news/rust-getting-started-with-the-most-loved-programming-language/)
- [WebAssembly in Rust，迈出第一步](https://aralroca.com/blog/first-steps-webassembly-rust)
- [变量和内存管理](https://www.warambil.com/variables-and-memory-management-in-rust)
- [WebAssembly 但不带浏览器，第一部分](https://alexene.dev/2020/08/17/webassembly-without-the-browser-part-1.html)
- [我到底是怎么变成，停止与 Borrow Checker 斗争，并爱上 Dirty Structs 的](https://medium.com/adobetech/how-i-learned-to-stop-fighting-the-borrow-checker-and-learned-to-love-dirty-structs-b6c5fe91b1dd)
- [Software Development Languages: Rust](https://www.fosskers.ca/en/blog/rust-software-dev)
- \[ES] [trait objects para hacer dynamic dispatch en rust](https://emanuelpeg.blogspot.com/2020/08/trait-objects-para-hacer-dynamic.html#.XzSf1yK4C00.reddit)
- \[ES] [que es ownership en rust?](https://emanuelpeg.blogspot.com/2020/08/que-es-ownership-en-rust.html#.XzyW-R5KFe0.reddit)
- \[ES] [que es ownership en rust? parte 2](https://emanuelpeg.blogspot.com/2020/08/que-es-ownership-en-rust-parte-2.html#.XzybavgXG4M.reddit)
- \[PT] [aprendendo rust: 07 - regiões da memória usadas pela rust](https://dev.to/pehdepano/aprendendo-rust-07-regioes-da-memoria-usadas-pela-rust-208k)

### Learn More Rust

- [Linux Packages For Rust (2/3) - 使用 Custom Actions 和 Docker Container Images，配合 Github Actions 进行构建](https://ebbflow.io/blog/vending-linux-2)
- [给个临时 opt-in ，用在 shared mutation](https://ryhl.io/blog/temporary-shared-mutation/)
- [RISC-V OS using Rust: 输入设备](https://blog.stephenmarz.com/2020/08/03/risc-v-os-using-rust-input-devices/)
- [Rusty Chains: 基础区块链实现 Written in Pure Rust](https://hackernoon.com/rusty-chains-a-basic-blockchain-implementation-written-in-pure-rust-gk2m3uri)
- [Error 复原，使用上 parser combinators (using nom)](https://www.eyalkalderon.com/nom-error-recovery/)
- [我的第一份智能合约，in Rust on Elrond VM](https://hiddentao.com/archives/2020/07/17/my-first-smart-contract-in-rust-on-elrond-vm)
- [编写一个 Emacs 模块 in Rust](https://dev.to/rfaulhaber/writing-an-emacs-module-in-rust-3pg5)
- [探索 Azure CosmosDB with Rust - Part 2](https://dev.to/mindflavor/exploring-azure-cosmosdb-with-rust-part-2-32c0)
- [一场激烈的旅行： Mender 客户端架构 using Rust](https://mender.io/blog/a-whirlwind-tour-of-the-mender-client-architecture-using-rust)

### Project Updates（项目更新）

- [在 VSCode 一键即可，就能在你的嵌入式设备上运行 Rust](https://ferrous-systems.com/blog/run-rust-on-your-embedded-device-from-vscode/)
- [Control Flow Guard for Clang/LLVM and Rust](https://msrc-blog.microsoft.com/2020/08/17/control-flow-guard-for-clang-llvm-and-rust/)
- [Cranelift 现在可以编译 rustc 啦 - 编译过程大约 7x 快过 LLVM!](https://www.reddit.com/r/rust/comments/iat25g/cranelift_can_now_compile_rustc_giving_nearly_7x/)
- [Nightly stdlib 现在对所有关键字稳文档化!](https://www.reddit.com/r/rust/comments/ia1vlc/nightly_stdlib_docs_now_document_all_keywords/)
- [来点奖励，开发能更快](https://opencollective.com/clap/updates/faster-development-with-tiny-bounties)

### Miscellaneous（杂项）

- [RustFest 全球啦](https://blog.rustfest.eu/rustfest-goes-global)
- [Oxide: Rust 本质](https://arxiv.org/abs/1903.00982)
- [为什么我不再相信纯函数式编程](https://dev.to/yujiri8/why-i-don-t-believe-in-pure-functional-programming-anymore-gin)
- [Rust 对 SSI 和 IAM 软件有啥好处](https://dev.to/jolocomdev/engineering-safer-and-more-secure-solutions-for-digital-identity-and-access-management-with-rust-2e39)
- [Using Long Paths in Windows and Rust](https://gal.hagever.com/posts/windows-long-paths-in-rust/)
- [Stackage for Rust](https://www.snoyman.com/blog/2020/08/stackage-for-rust)
- [为啥我们 Astropad 跨平台使用的是 Rust](https://astropad.com/why-rust/)
- [用 Rust 重写 Pushpin's 连接管理器](https://blog.fanout.io/2020/08/11/rewriting-pushpins-connection-manager-in-rust/)
- \[audio] [arewepodcastyet - 06 jonathan turner](https://soundcloud.com/arewepodcastyet/awpy-06-jonathan-turner)

# Crate of the Week

This week's crate is [cargo-c](https://github.com/lu-zero/cargo-c), 一个 cargo 子命令，构建和安装 C-ABI 兼容性的动态/静态库

Thanks to [Zicklag](https://users.rust-lang.org/t/crate-of-the-week/2704/799) for the suggestion!

[Submit your suggestions and votes for next week][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [RustFest Global 2020 CFP](https://cfp.rustfest.eu/events/2020)

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

345 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-08-10..2020-08-17

- [当发起 trait impl 诊断，使用现有的 `infcx`](https://github.com/rust-lang/rust/pull/75363)
- [检测 JS-style `===` and `!==` 并恢复](https://github.com/rust-lang/rust/pull/75321)
- [检测合适的 `for foo of bar` JS 语法](https://github.com/rust-lang/rust/pull/75320)
- [将 stack size 检测，移动到 `const_eval` machine](https://github.com/rust-lang/rust/pull/75338)
- [添加 `array` lang item 和 `[T; N]::map(f: FnMut(T) -> S)`](https://github.com/rust-lang/rust/pull/75212)
- [移除优化的 `is_ascii` 的分支](https://github.com/rust-lang/rust/pull/74562)
- [打造 `str::from_utf8_unchecked`](https://github.com/rust-lang/rust/pull/75157)
- [以困难的方式去遵循 `BTreeMap`的最小节点长度](https://github.com/rust-lang/rust/pull/75105)
- [BTreeMap: 清除 `into_kv_mut` 的合法使用](https://github.com/rust-lang/rust/pull/75195)
- [hashbrown: impl `FusedIterator` and `size_hint` for `DrainFilter`](https://github.com/rust-lang/hashbrown/pull/188)
- [rustdoc: `rustc_const_unstable` is used on the item，不要打印 "const" 关键字 on non-nightly build](https://github.com/rust-lang/rust/pull/74936)

## Rust 编译器性能分类

- [2020-08-17](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-08-17.md).
  4 性能回退, 3 提升, 4 个混合事项.

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置: 合并] [稳定化：Range[Inclusive]::is_empty](https://github.com/rust-lang/rust/pull/75132)
- \[处置: 合并] [稳定化：ptr_offset_from](https://github.com/rust-lang/rust/pull/74238)

## New RFCs

_No new RFCs were proposed this week._

# 本周最佳语录

> 正如 Dave Herman 常跟我说的, “使用宏的时刻，是你毫无办法”。如果你还能找到其他，或是 Rust 给了你建议的方法，先选它们，后才是宏。

- [Patrick Walton on twitter](https://twitter.com/pcwalton/status/1294676975575896064)

Thanks to [Nixon Enraght-Moony](https://users.rust-lang.org/t/twir-quote-of-the-week/328/926) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/icwq65/this_week_in_rust_352/)</small>
