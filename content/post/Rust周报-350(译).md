---
title: "Rust周报 350(译)"
date: 2020-08-07T00:21:23+08:00
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-350"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-08-04
- [原文：350 期](https://this-week-in-rust.org/blog/2020/08/04/this-week-in-rust-350/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

查看[本周的 _This Week in Rust Podcast_](https://rustacean-station.org/episode/026-twir-350/)

# Rust 社区的更新

### 官方

- [宣布 Rust 1.45.1](https://blog.rust-lang.org/2020/07/30/Rust-1.45.1.html)
- [宣布 Rust 1.45.2](https://blog.rust-lang.org/2020/08/03/Rust-1.45.2.html)

### 工具

- [Rust Analyzer Changelog ＃36](https://www.reddit.com/r/rust/comments/i2wic3/rustanalyzer_changelog_36/)
- [IntelliJ Rust：2020.2 版本的更新](https://blog.jetbrains.com/clion/2020/08/intellij-rust-updates-for-the-2020-2-release/)
- [Headcrab：2020 年 7 月进度报告](https://headcrab.rs/2020/07/31/july-update.html)

### 时事通讯

- [Rust OSDev 月刊（2020 年 7 月）](https://rust-osdev.com/this-month/2020-07/)

### 观察/思考

- [Go vs Rust：编写 CLI 工具](https://cuchi.me/posts/go-vs-rust)
- [如何在 2020 年，加快 Rust 编译器的速度](https://blog.mozilla.org/nnethercote/2020/08/05/how-to-speed-up-the-rust-compiler-some-more-in-2020/)
- [云（Cloud）上，Rust TLS 和 Postgres 的奇怪故事](https://dev.to/pnehrer/a-curious-tale-of-rust-tls-and-postgres-in-the-cloud-434k)

### 学习标准 Rust

- [学习 Rust：心态和期望](https://ferrous-systems.com/blog/mindsets-and-expectations/)
- [了解 Rust 借用检查器](https://blog.logrocket.com/introducing-the-rust-borrow-checker/)
- [Rust 错误处理 —— 初学者指南](http://www.sheshbabu.com/posts/rust-error-handling/)
- [Rust Hashmaps 教程](https://frogtok.com/very-simple-guide-to-rust-hashmaps/)
- [Rust：什么是“内存安全”，真的吗？](https://tiemoko.com/blog/blue-team-rust/)
- [如何使用 Rust 编译器作为你自用的集成测试框架](https://blog.logrocket.com/using-the-rust-compiler-as-your-integration-testing-framework/)
- [一个全面的教程 —— Rust 初学者](https://towardsdatascience.com/a-comprehensive-tutorial-to-rust-operators-for-beginners-11554b2c64d4)
- [关于无符号（Unsigned）、有符号整数（Signed Integers）和 Casting（转换）in Rust](https://towardsdatascience.com/unsinged-signed-integers-and-casting-in-rust-9a847bfc398f)
- [Rust 的内存安全性 —— 第 2 部分](https://hashrust.com/blog/memory-safety-in-rust-part-2/)
- [Rust 汇编的友好简介](https://lfn3.net/2020/08/03/a-gentle-intro-to-assembly-with-rust/)
- [通过使用`non exhaustive`enums，防止 Future 版本中的破坏性代码更改](https://blog.knoldus.com/prevent-breaking-code-changes-in-future-releases-using-non-exhaustive-enums-in-rust/)
- [Stacks 的 一堆（Heaping）帮助](https://deislabs.io/posts/a-heaping-helping-of-stacks/)
- [Python 使用者之 Rust 1：Why 和 When？](https://dygalo.dev/blog/rust-for-a-pythonista-1/)
- \[PT] [aprendendo rust: 05 - funções](https://dev.to/pehdepano/aprendendo-rust-05-funcoes-3j72)
- \[RU] [rust: работа с потоками](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-rust-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D0%B0%D0%BC%D0%B8-56b2a31d2846)
- \[video] [learning rust by working through the rustlings exercises](https://egghead.io/playlists/learning-rust-by-solving-the-rustlings-exercises-a722)

### 了解更多 Rust

- [为 Rust 项目创建 Linux 包（1/2）](https://ebbflow.io/blog/vending-linux-1)
- [Raspberry Pi 上的 Rust 操作系统开发教程](https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials#operating-system-development-tutorials-in-rust-on-the-raspberry-pi)
- [用 Rust 逆向工程一个 USB 设备](https://gill.net.in/posts/reverse-engineering-a-usb-device-with-rust/)
- [A Simple Crud on Rust (With Rocket.rs and Diesel.rs)](https://medium.com/swlh/a-simple-crud-on-rust-with-rocket-rs-and-diesel-rs-e885672cb23d)
- [实施标准化 Rust Representer 的一些经验教训](https://seanchen1991.github.io/posts/rust-representer/)
- [Rust 中的倒计时问题](https://amitdev.github.io/posts/2020-07-27-countdown-rust/)
- [用 Rust 探索 Azure cosmsdb 第 1 部分](https://dev.to/mindflavor/exploring-azure-cosmosdb-with-rust-part-1-1ki7)
- [使用 Warp 和 Diesel 构建 Rust Web API](https://dev.to/szymongib/building-rust-web-api-with-warp-and-diesel-1d7c)
- [Rust 与 Kafka 合作的微服务](https://medium.com/digitalfrontiers/microservices-in-rust-with-kafka-2b671295b24e)
- [使用 Rust 的 Risc-V 操作系统：图形](https://blog.stephenmarz.com/2020/07/24/risc-v-os-using-rust-graphics/)
- [Rust Traits：定义行为](https://youtu.be/rAl-9HwD858)
- [用 Rust 编写和发布 Python 模块](https://dygalo.dev/blog/rust-for-a-pythonista-1/)
- \[视频] [hypercore protocol in rust](<[https://www.youtube.com/watch？v=2JCblJf9hFg&list=PL7sG5SCUNyeYx8wnfMOUpsh7rM_g0w_cu](https://www.youtube.com/watch?v=2JCblJf9hFg&list=PL7sG5SCUNyeYx8wnfMOUpsh7rM_g0w_cu)>)
- \[视频] [reasonable coding 030 - hotstuff, a composable, no-nonsense document compiler (part 1)](https://www.youtube.com/watch?v=kURv5ZbkEss)

### 项目更新

- [Rust 语言备忘单 2019->2020](https://github.com/ralfbiedert/cheats.rs/issues/100)

### 其他

- [RustFest 的视频记录技术](https://estada.ch/2020/7/30/video-recording-technology-at-rustfest/)
- \[音频] [the state of rust 2 with alex chrichton](<[https://anchor.fm/the-virtual-world/eps/Ep-7--the-State-of-Rust-2-with-Alex-Crichton-ehjpsq](https://anchor.fm/the-virtual-world/episodes/Ep-7--The-State-of-Rust-2-with-Alex-Crichton-ehjpsq)>)
- \[音频] [the state of rust with steve klabnik](<[https://anchor.fm/the-virtual-world/eps/Ep-6--the-State-of-Rust-with-Steve-Klabnik-ehf8mk](https://anchor.fm/the-virtual-world/episodes/Ep-6--The-State-of-Rust-with-Steve-Klabnik-ehf8mk)>)
- \[视频] [rusty days 2020 - all videos]([https://www.youtube.com/playlist？列表=PLf3u8NhoEikhTC5radGrmmqdkOK xMDoZ](https://www.youtube.com/playlist?list=PLf3u8NhoEikhTC5radGrmmqdkOK-xMDoZ))

# 本周最佳箱子

本周的箱子是[partial-io](https://lib.rs/crates/partial-io)，一组辅助程序，用于测试部分、中断的，和将会阻塞的 I/O 操作。

多谢[Kornel](https://users.rust-lang.org/t/crate-of-the-week/2704/796)这个建议！

[提交下周的建议和投票][submit_crate]!

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会突出一些来自 Rust 社区的任务供您挑选和开始！

其中一些任务可能还有导师，请访问任务页面了解更多信息。

_没有为 CfP 提出任何问题_.

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# 来自 Rust Core 的更新

326 个请求在[上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-07-27..2020-08-03

- [在裸函数参数上，压制 debuginfo](https://github.com/rust-lang/rust/pull/74105)
- [将`ParamEnv`转换到`Reveal::All`时，规范化所有不透明类型](https://github.com/rust-lang/rust/pull/65989)
- [在为大型 if 表达式进行类型检查和构建 MIR 时，确保栈](https://github.com/rust-lang/rust/pull/74708)
- [用一个 iterative 的算法代替递归算法](https://github.com/rust-lang/rust/pull/74983)
- [修复：给 trait objects 的`#[track_caller]`垫片](https://github.com/rust-lang/rust/pull/74784)
- [让闭包和 generators 成为`must_use`类型](https://github.com/rust-lang/rust/pull/74869)
- [`BTreeMap::drain_filter`在迭代期间，不应该接触 root](https://github.com/rust-lang/rust/pull/74762)
- [添加：`str::`(`r`)`split_once`](https://github.com/rust-lang/rust/pull/74707)
- [添加：`Vec::spare_capacity_mut`](https://github.com/rust-lang/rust/pull/75015)
- [添加：`slice::array_chunks`](https://github.com/rust-lang/rust/pull/74373)
- [稳定化：`const_type_id`](https://github.com/rust-lang/rust/pull/72488)
- [稳定化：`Vec::leak`作为一种方法](https://github.com/rust-lang/rust/pull/74605)
- [稳定化：`Result::as_deref`和`as_deref_mut`](https://github.com/rust-lang/rust/pull/74948)
- [让`Option::unwrap`为不稳定 const](https://github.com/rust-lang/rust/pull/74956)
- [让`mem::size_of_val`和`mem::align_of_val`为不稳定 const](https://github.com/rust-lang/rust/pull/74930)
- [backtrace-rs：包括源代码列号（如果可用）](https://github.com/rust-lang/backtrace-rs/pull/367)

## Rust 编译器性能分类

- [2020 年 8 月 3 日](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-08-03.md). 8 个性能退化，2 个改进，其中 1 个在汇总上。上个星期的一个突出抱怨。

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 以下是本周批准实施的 RFC：

- [RFC:“C unwind”ABI](https://github.com/rust-lang/rfcs/pull/2945)

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在就表达你的意见。

### [RFC 公司](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最终评论期。_

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

_目前没有跟踪问题或 PRs 处于最终评论期。_

## 新的 RFC

- [Procedural vtables 和 wide ptr 元数据](https://github.com/rust-lang/rfcs/pull/2967)
- [2021 版，及以后](https://github.com/rust-lang/rfcs/pull/2966)

# 本周最佳语录

> *Empowering（进阶）*是描述 2020 年 Rust 的完美词汇。曾经作为艰难的冒险，并有很多陷阱的 Rust，现在却变成了美丽的东西，它甚至可以提升你的精神。至少在我看来，这就是它对我的帮助。

- [Mathias Lafeldt on his blog](https://sharpend.io/giving-rust-another-shot-in-2020/)

Thanks to [Henrik Tougaard](https://users.rust-lang.org/t/twir-quote-of-the-week/328/915) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/i4a3e0/this_week_in_rust_350/)</small>
