---
title: "Rust周报 341(译)"
date: 2020-06-05T13:26:58+08:00
categories: ["Rust"]
tags: ["week"]
description: "螃蟹-Rust周报-341"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-06-02
- [原文：341 期](https://this-week-in-rust.org/blog/2020/06/02/this-week-in-rust-341/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

本周没有 _This Week in Rust_ 播客，下周的节目将涵盖本周和下周。

# 我们与你一起

自从我们上一期报道以来，关于美国民权话语的新闻很多，这是由明尼阿波利斯警察局的一名警察杀害 George Floyd 引起的。我们与黑人社区，我们的黑人兄弟姐妹，不管是现在还是以后都永远站在一起。

我们认为，这不是政治立场的站位问题，而是基本人权和平等的重大问题。

我们相信，Rustaceans 不管对社区，还是世界其他地方，都是负有责任义务 —— 确保人们都感到舒适和受到欢迎，不管他们来自哪里。在我们自己的社区，《Rust 行为准则》明确规定，我们打算让每个人都感到安全，但这份热心不应只适用于我们。

正如我们支持 Rustaceans 一样，我们也赞成人类是一个整体。而现在正是这个社会时代前进的时候了。我们支持那些冒着自身危险，支持 George Floyd, Breonna Taylor, Ahmaud Aubery，以及所有在警察手中面临不公正待遇的人。我们与抗议者站在一起，希望世界变得更好。

如果你想表达你的支持，[这是一个资源管理网站](https://blacklivesmatters.carrd.co/). 我们鼓励你们大声说出来，因为多一个声音，就更接近一个更美好的世界。

# Rust 社区的更新

## 新闻和博客文章

- [RustConf 2020 注册已开放](https://rustconf.com/)
- [2020 年贡献者调查](https://blog.rust-lang.org/inside-rust/2020/05/27/contributor-survey.html)
- [回顾 2018 年 rust-lang.org 网站重新设计](https://blog.rust-lang.org/inside-rust/2020/05/26/website-retrospective.html)
- [Rust Disaasembly（逆汇编）：第 1 部分](https://giordi91.github.io/post/disassemlbyrust1/)
- [模糊测试 Sequoia-PGP](https://blog.hackeriet.no/fuzzing-sequoia/)
- [异步世界中的 Mutex](https://kitsu.me/posts/2020_06_01_mutex_in_async_world)
- [Diesel 中的自定义类型](https://kitsu.me/posts/2020_05_24_custom_types_in_diesel)
- [Rust 中新指令集的自动向量化](https://www.nickwilcox.com/blog/autovec2/)
- [飞行控制器内，Embedded Rust 的现状](https://gist.github.com/tstellanova/81c963f556522447dd007a0c3a84ebc3)
- [（模拟鸟群）三维 boids 在完美的协调中游动；在 Rust 中实现 boids 群集算法](https://www.reddit.com/r/rust/comments/gsldbi/3d_boids_swimming_along_in_perfect_harmony/)
- [Coverage Marks](https://ferrous-systems.com/blog/coverage-marks/)
- [Ringbahn：一种安全、符合人体工程学的 Rust IO-使用 API](https://boats.gitlab.io/blog/post/ringbahn/)
- [rust-analyzer changelog #26](https://rust-analyzer.github.io/thisweek/2020/05/25/changelog-26.html)
- [作为一名 Java 程序员，我为什么喜欢学习 Rust](https://opensource.com/article/20/5/rust-java)
- [助力 to Rust](https://blog.elinvynia.com/posts/2020-05-26-contributing-to-rust.html)
- [查看用于 WebAssembly 的关键 Rust 箱子](https://blog.knoldus.com/get-a-look-on-key-rust-crates-for-webassembly/)
- [10 种最受欢迎的编程语言：Rust、TypeScript 等](https://insights.dice.com/2020/05/29/10-most-loved-programming-languages-rust-typescript-more/)
- [用 Rust 创造一颗红宝石（Ruby Gem）](https://richardpatching.com/2020/05/22/creating-a-ruby-gem-with-rust.html)
- [设计 Rust release API 客户端](https://medium.com/cognite/designing-the-rust-unleash-api-client-6809c95aa568)
- [如何用 Rust 构建一个 WebSocket 服务器](https://blog.logrocket.com/how-to-build-a-websocket-server-with-rust/)
- [在分布式游戏对象上，调用函数](https://dev.to/autodidaddict/invoking-functions-on-distributed-game-objects-37b1)
- [IPv6 与 Rust](https://blog.apnic.net/2020/06/02/ipv6-and-rust/)
- [Rust 可是一种高级语言](https://llogiq.github.io/2020/05/30/hi.html)
- [Rust 中的排序算法](https://dev.to/jlkiri/sorting-algorithms-in-rust-1386)
- [Programming Servo：集成流](https://medium.com/@polyglot_factotum/programming-servo-integrating-readablestream-1a7faebeeed7?source=friends_link&sk=e297efa0a9e9d59d59233f3ec7038b1c)
- [To Rust or not to Rust（仿 To Be or not to Be）](https://oldmill.cz/2020-05-31-to-rust-or-not.html)
- \[西班牙语] [aprende rust en español](<[https://dev.to/robertohertasm/aprende-rust-en-espanol-1pea](https://dev.to/robertohuertasm/aprende-rust-en-espanol-1pea)>)
- \[视频] [一个 rust & wasm tutorial 构建比特币 bitcoin 基础设施. rust 初学者友好!](https://www.youtube.com/watch?v=qaykNPHJcyw)
- \[视频] [crust of rust: iterators](https://www.youtube.com/watch?v=yozQ9C69pNs&feature=emb_logo)
- \[视频] [Rust and Tell Berlin - may 2020](https://www.youtube.com/watch?v=rpilJV-eIVw&feature=emb_logo)

# 一周一箱

这个星期的箱子是[Jql](https://github.com/yamafaktory/jql) —— JSON 查询语言 CLI 工具。

多谢[Davy Duperron](https://users.rust-lang.org/t/crate-of-the-week/2704/775)这个建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会强调 Rust 社区的一些任务，供您选择并开始！

其中一些任务可能还提供了导师，请访问任务页以获取更多信息。

- [ruma-events：添加预定义的，推送通知规则](https://github.com/ruma/ruma-events/issues/105)
- [ruma-events：添加帮助程序，以构造丰富答案的回馈](https://github.com/ruma/ruma-events/issues/81)
- [ruma-events：为 PushCondition::RoomMemberCount::is 创建一个独有类型](https://github.com/ruma/ruma-events/issues/104)
- [在 Rust 中编写数据库管理系统。火焰（flame）从灰烬（ashes）中诞生](https://alex-dukhno.github.io/2020-05-30-Writing-database-management-system-in-Rust.-When-the-flame-is-born-from-the-ashes/)

如果您是 Rust 项目的所有者并正在寻找贡献者，请提交任务[在这里][guidelines].

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 更新

442 个请求[上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-05-25..2020-06-01

- [在不安全 fn 中，实现不安全块](https://github.com/rust-lang/rust/pull/71862)（RFC [#2585 个](https://rust-lang.github.io/rfcs/2585-unsafe-block-in-unsafe-fn.html))
- [穷尽性检查：解决类型规范化问题](https://github.com/rust-lang/rust/pull/72506)
- [建议使用`std::mem::drop`函数，而不是显式析构函数调用](https://github.com/rust-lang/rust/pull/72383)
- [添加一个 lint：反对 引用(references)到压缩字段(packed fields)](https://github.com/rust-lang/rust/pull/72270)
- [避免设置错误的 obligation，导致关联类型范围（span） 不匹配](https://github.com/rust-lang/rust/pull/72807)
- [解释：建议`where`语法尾随逗号](https://github.com/rust-lang/rust/pull/72715)
- [修复 diagnostics(诊断)：在元组和元组结构中的`@ ..`绑定模式](https://github.com/rust-lang/rust/pull/72677)
- [chalk：惰性请求隐藏不透明类型](https://github.com/rust-lang/chalk/pull/478)
- [miri: 同步原语清理](https://github.com/rust-lang/miri/pull/1441)
- [`from_u32_unchecked`：检查有效性，并在 Wtf8 中修复 UB](https://github.com/rust-lang/rust/pull/72683)
- [impl `total_cmp` for `f32`, `f64`](https://github.com/rust-lang/rust/pull/72568)
- [覆盖 `Box::<[T]>::clone_from`](https://github.com/rust-lang/rust/pull/72499)
- [添加 `Extend::`{`extend_one`, `extend_reserve`}](https://github.com/rust-lang/rust/pull/72162)
- [使指针偏移的方法/内部函数 为 const](https://github.com/rust-lang/rust/pull/71500)
- [`impl From<[T; N]> for Box<[T]>`](https://github.com/rust-lang/rust/pull/71095)
- [`weak-into-raw`的稳定化](https://github.com/rust-lang/rust/pull/72288)
- [解决 Arc/Weak 相互作用中的 UB，第 2 部分](https://github.com/rust-lang/rust/pull/72533)
- [稳定化：`str_strip` feature](https://github.com/rust-lang/rust/pull/72466)
- [`impl Step for char`（让`Range*<char>` iterable）](https://github.com/rust-lang/rust/pull/72413)
- [添加：`Peekable::next_if`](https://github.com/rust-lang/rust/pull/72310)
- [多个小提升`Ipv6Addr::Display`](https://github.com/rust-lang/rust/pull/72407)
- [`SocketAddr`朋友们现在可以正确地填充它的内容了](https://github.com/rust-lang/rust/pull/72398)
- [为 SocketAddr\* 实现 PartialOrd 和 Ord](https://github.com/rust-lang/rust/pull/72239)
- [调整并稳定化：`Atomic`N`::fetch_update`](https://github.com/rust-lang/rust/pull/71843)
- [稳定化：`Atomic`N`::fetch_`{`min`, `max`}](https://github.com/rust-lang/rust/pull/72324)
- [stdarch：添加 64 位整数 AVX512f 比较，和测试它们所需的内部函数](https://github.com/rust-lang/stdarch/pull/856)
- [stdarch：添加 64 位 AVX512f le 和 ge 比较](https://github.com/rust-lang/stdarch/pull/861)
- [libm：使用宏进行更多的除法/数组（division/array）检查](https://github.com/rust-lang/libm/pull/244)

## Rust 编译器性能分类

这是一个新的部分，包含每周检查 rustc 性能变化的结果。

- [2020 年 6 月 2 日](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020.md#2020-06-02)

## 批准的 RFC

生锈后会生锈[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs). 这些是本周批准实施的 RFC：

- [转换到 rust analyzer 作为我们的正式 LSP（语言服务器协议）实现](https://github.com/rust-lang/rfcs/pull/2912)

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在作出决定的 RFC 和关键 PR 的“最后评论期”。现在就发表你的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_目前没有 RFC 处于最后评论期。_

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并:] [`impl AsRef<[T]>` for `vec::IntoIter<T>`](https://github.com/rust-lang/rust/pull/72583)
- \[处置：合并] [添加： raw_ref macros](https://github.com/rust-lang/rust/pull/72279)
- \[处置：合并] [跟踪问题： `std::io::{bufreader, bufwriter}::capacity`](https://github.com/rust-lang/rust/issues/68833)

## 新的 RFC

- [将 lang 团队的主要变更建议，添加为“pre-RFC”步骤](https://github.com/rust-lang/rfcs/pull/2936)
- [Unsafe statics](https://github.com/rust-lang/rfcs/pull/2937)
- [请求创建 pipes with fd ，而不是 0,1,2 ](https://github.com/rust-lang/rfcs/pull/2939)

# 本周报价

> Rust 能开启热血重构 —— 创造巨大的更改，之后与编译器一起工作，让项目恢复到工作状态。

– [Pankaj Chaudhary on Knoldus Blog](https://blog.knoldus.com/some-extensive-projects-working-with-rust)

Thanks to [Maxim Vorobjov](https://users.rust-lang.org/t/twir-quote-of-the-week/328/880) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/gvwvep/this_week_in_rust_341/)</small>
