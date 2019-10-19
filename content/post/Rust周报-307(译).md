---
title: "Rust周报 307(译)"
date: 2019-10-10T23:09:19+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-304'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-10-08

[原文：本周 Rust(螃蟹) 307](https://this-week-in-rust.org/blog/2019/10/08/this-week-in-rust-307/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [宣布 Inside Rust 博客](https://blog.rust-lang.org/2019/10/03/inside-rust-blog.html)。
- [Async 基础更新：完善的时间](https://blog.rust-lang.org/inside-rust/2019/10/07/AsyncAwait-WG-Focus-Issues.html)。
- [通过 cargo-audit 0.9 确保 Rust 项目的安全：依赖树，core advisories，未维护的箱子](https://blog.rust-lang.org/inside-rust/2019/10/03/Keeping-secure-with-cargo-audit-0.9.html)。
- [为 Rust 设计一个 COM 库](https://msrc-blog.microsoft.com/2019/10/08/designing-a-com-library-for-rust/)。
- [Tonic：gRPC 已进入 async/await 状态](https://luciofran.co/tonic-grpc-has-come-to-async-await/)。
- [带 async/await 的 reqwest alpha 已发布](https://seanmonstar.com/post/188220739932/reqwest-alphaawait)。
- [在 Rust 中，编写操作系统 - 2019 年 9 月更新](https://os.phil-opp.com/status-update/2019-10-06/)。
- [静态断言 1.0 发布](https://nikolaivazquez.com/posts/programming/rust-static-assertions-1_0/)。
- [所有权和 impl Trait](https://tech.fpcomplete.com/rust/ownership-and-impl-trait)。
- [在 Rust 中，编写 HTTP 服务器（第 1 部分）](https://curiosityoverflow.xyz/posts/linda/)。
- [运动控制历险记：通信系统第 1 部分](http://adventures.michaelfbryan.com/posts/comms-part-1/)。
- [在 Visual Studio Code 上，使用 Rust 和 Apache Mynewt 编码 nRF52](https://medium.com/@ly.lee/coding-nrf52-with-rust-and-apache-mynewt-on-visual-studio-code-9521bcba6004)。
- [本月在 Rust GameDev 2 中-2019 年 9 月](https://rust-gamedev.github.io/2019/10/05/newsletter-002.html)。
- [嵌入式工作组新闻通讯 19](https://rust-embedded.github.io/blog/newsletter-19/)。
- [Rust 现在有超过 100000 次提交](https://github.com/rust-lang/rust)。
- \[pdf] [利用Rust类型进行模块化规格和验证](http://pm.inf.ethz.ch/publications/getpdf.php?bibname=Own&id=AstrauskasMuellerPoliSummers19b.pdf)。

# 本周的箱子

这周的箱子是[algebraics](https://crates.io/crates/algebraics)，用于无穷精度计算的，纯 Rust 代数数字库。

谢谢[雅各布·利夫舍（Jacob Lifshay）](https://users.rust-lang.org/t/crate-of-the-week/2704/629)和[维康特](https://users.rust-lang.org/t/crate-of-the-week/2704/639)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- [EmbarkStudios 的 Hacktoberfest 问题](https://github.com/search?q=user:EmbarkStudios+label:hacktoberfest+state:open)。
- [rustc：不带 span 的 derive 弃用警告](https://github.com/rust-lang/rust/issues/56195)。
- [async-std：添加`task::yield_now`](https://github.com/async-rs/async-std/issues/290)。
- [async-std：添加`sync::CondVar`](https://github.com/async-rs/async-std/issues/217)。
- [async-std：添加`path::{Path,PathBuf}`](https://github.com/async-rs/async-std/issues/183)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了，共有 338 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-09-30..2019-10-07

- [链接可执行文件时，仅添加清理程序运行时](https://github.com/rust-lang/rust/pull/64780)
- [LLVM / wasm：修复了 ret 合法化和 sjlj 之间的冲突](https://github.com/rust-lang/llvm-project/pull/25)
- [LLVM / wasm：恢复每个备忘录(memop)的存储默认值](https://github.com/rust-lang/llvm-project/pull/24)
- [当遇到链式操作时，使用 heuristics 从不良的 turbofish 中恢复](https://github.com/rust-lang/rust/pull/64909)
- [使访 visit projection iterative](https://github.com/rust-lang/rust/pull/65056)
- [确定 re-export collection 的确定性](https://github.com/rust-lang/rust/pull/65043)
- [重复数据闭包类型错误](https://github.com/rust-lang/rust/pull/64937)
- [根据运算符的优先级，支持类型不匹配问题的修复](https://github.com/rust-lang/rust/pull/64933)
- [语法：在没有类型建议的情况下，改进参数](https://github.com/rust-lang/rust/pull/64959)
- [Polonius：interning 时使用 fx hasher](https://github.com/rust-lang/polonius/pull/131)
- [提取 async fn 生成器的期望返回类型](https://github.com/rust-lang/rust/pull/64999)
- [async/await：改善未发送错误](https://github.com/rust-lang/rust/pull/64895)
- [const-prop：尝试执行多态性提升(polymorphic promoted)的 MIR 时，修复 ICE](https://github.com/rust-lang/rust/pull/65066)
- [const-prop：正确处理无法传播的 locals](https://github.com/rust-lang/rust/pull/64991)
- [还有更多`ObligationForest`改善](https://github.com/rust-lang/rust/pull/64805)
- [避免`chain()`在`find_constraint_paths_between_regions()`](https://github.com/rust-lang/rust/pull/64801)
- [优化 integral 模式匹配](https://github.com/rust-lang/rust/pull/65089)
- [proc_macro API：公开`macro_rules` hygiene](https://github.com/rust-lang/rust/pull/64690)
- [弃用`#![plugin]`和`#[plugin_registrar]`](https://github.com/rust-lang/rust/pull/64675)
- [元数据：一些箱子加载清理](https://github.com/rust-lang/rust/pull/65026)
- [解引用 non-Copy 原始指针时，不进行 ICE](https://github.com/rust-lang/rust/pull/65011)
- [修复，泛型数据流可视化中的 zebra-striping](https://github.com/rust-lang/rust/pull/64974)
- [不要将 zero-sized 的数组的借用，标记为间接可变](https://github.com/rust-lang/rust/pull/64967)
- [拒绝不在父级 impl 中，对 items 专用化](https://github.com/rust-lang/rust/pull/64564)
- [为 raw_dylib 添加 feature gate](https://github.com/rust-lang/rust/pull/63948)
- [稳定化，多处的，宏](https://github.com/rust-lang/rust/pull/63931)
- [语法：在`meta`匹配器中，支持现代 attribute 语法](https://github.com/rust-lang/rust/pull/63674)
- [采用`PlaceBuilder`，避免大量`slice → vec → slice`转换](https://github.com/rust-lang/rust/pull/64922)
- [用`try_fold`代替`try_for_each`，减少编译时间](https://github.com/rust-lang/rust/pull/64885)
- [稳定化`UdpSocket::peer_addr`](https://github.com/rust-lang/rust/pull/64728)
- [稳定化`Option::as_deref`和`Option::as_deref_mut`](https://github.com/rust-lang/rust/pull/64708)
- [稳定化`todo!(..)`巨集](https://github.com/rust-lang/rust/pull/61879)
- [hashbrown：添加`RustcVacantEntry::insert_entry`](https://github.com/rust-lang/hashbrown/pull/118)
- [`BTreeSet` `intersection`，`is_subset`和`difference`优化](https://github.com/rust-lang/rust/pull/64820)
- [Impl `Clone::clone_from` for `LinkedList`](https://github.com/rust-lang/rust/pull/64975)
- [内联 {`min`，`max`}`_value`，即使在调试版本中](https://github.com/rust-lang/rust/pull/64941)
- [cargo：支持命名 profile](https://github.com/rust-lang/cargo/pull/6989)（RFC 2678）
- [cargo：在存档中，禁止保留 mtimes](https://github.com/rust-lang/cargo/pull/7465)
- [rustup：清除错误消息](https://github.com/rust-lang/rustup.rs/pull/2035)
- [rustbuild：使所有 alt 构建器，都生成启用并行的编译器](https://github.com/rust-lang/rust/pull/64722)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：

_本周未批准任何 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC 文档](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和公关](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [稳定化 proc macros 对 `macro_rules` items 的生成](https://github.com/rust-lang/rust/pull/64035)。
- \[处理：合并] [稳定化 `slice::repeat` (feature `repeat_generic_slice`)](https://github.com/rust-lang/rust/pull/64877)。

## 新的 RFC

- [可变参数的元组](https://github.com/rust-lang/rfcs/pull/2775)。
- [diagnostics 的范围打印](https://github.com/rust-lang/rfcs/pull/2777)。
- [最初的 cargo-plugin-fields](https://github.com/rust-lang/rfcs/pull/2776)。

# Rust 工作

- [中国，杭州，Nervos 的高级区块链工程师（可远程](https://angel.co/company/nervos-1/jobs/589230-senior-blockchain-engineer)。

# 本周引用句

> “Rust 编译太慢了，在仍编译箱子期间，我就能修复 bug 了”

–[rust-users 的 Rustafarian](https://users.rust-lang.org/t/twir-quote-of-the-week/328/705)

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
