---
title: "Rust周报 309(译)"
date: 2019-10-24T17:55:15+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-309'
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-10-22

[原文：本周 Rust(螃蟹) 309](https://this-week-in-rust.org/blog/2019/10/22/this-week-in-rust-309/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [我使用生成器，制作了一个 Rust 的 NES 模拟器](https://kyle.space/posts/i-made-a-nes-emulator/)。
- [rustc 把时间花在了哪些地方](https://wiki.alopex.li/WhereRustcSpendsItsTime)。
- [进度：2019 年编译器路线图](https://internals.rust-lang.org/t/2019-roadmap-progress/10862/7)。
- [进度：const 泛型更新](https://github.com/rust-lang/rust/issues/44580#issuecomment-544155666)。
- [异步析构函数](https://boats.gitlab.io/blog/post/poll-drop/)。
- [使用 Rust 和 WebAssembly 的微型静态全文搜索引擎](https://endler.dev/2019/tinysearch/)。
- [MicroRust：在 BBC micro:bit 上，通过 Rust 探索微控制器的世界](https://droogmic.github.io/microrust/)。
- [在 Linux 中，处理进程终止](https://iximiuz.com/en/posts/dealing-with-processes-termination-in-Linux/)。
- [嵌入式 WG 的操作系统教程重写，对 Raspberry Pi 4 的添加支持](https://github.com/rust-embedded/rust-raspi3-OS-tutorials/tree/rewrite_for_v2)。
- [运动控制历险记：简单的自动化序列](http://adventures.michaelfbryan.com/posts/simple-automation-sequences/)
- [编程 Servo ：运送信息端口（通过一个 detour{绕行}进入 Spectre）](https://medium.com/programming-servo/programming-servo-shipping-message-ports-via-a-detour-into-spectre-c96683ac0b8)。
- [嵌入式 Rust 中的 Rotary 编码器](https://leshow.github.io/post/rotary_encoder_hal/)。

# 本周箱子

这周的箱子是[grubbnet](https://github.com/dooskington/grubbnet)，一个用于网络应用程序和游戏的 TCP 客户端/服务器库。

谢谢[Dooskington](https://users.rust-lang.org/t/crate-of-the-week/2704/650)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

总是想为开源项目做出贡献，但不知道从哪里开始？每周我们都会强调一些来自 Rust 社区的任务，供您挑选并开始！

其中一些任务也可能会有指导者，请访问任务页，了解更多信息。

- [Clippy：传递可变引用](https://github.com/rust-lang/rust-clippy/issues/353)。
- [rust-bindgen：添加 --symbol-prefix 标志](https://github.com/rust-lang/rust-bindgen/issues/1375)。
- [good first issue][spirit: 为 spirit 写一个教程](https://github.com/vorner/spirit/issues/42)。Spirit 是使创建和配置 unix 守护程序更容易的助手。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

[在上周合并][merged]了共有 353 个拉取请求

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-10-14..2019-10-21

- [稳定化： proc 宏生成`macro_rules` items](https://github.com/rust-lang/rust/pull/64035)
- [对所有零大小的数组，从`needs_drop`返回`false`](https://github.com/rust-lang/rust/pull/65389)
- [优化 `LexicalResolve::expansion`](https://github.com/rust-lang/rust/pull/65260)
- [删除自定义`PartialEq` impls for `LocalInternedString`](https://github.com/rust-lang/rust/pull/65426)
- [优化 `BitIter`](https://github.com/rust-lang/rust/pull/65425)
- [优化 dropck](https://github.com/rust-lang/rust/pull/64595)
- [更多符号清理](https://github.com/rust-lang/rust/pull/65545)
- [避免`expand_pattern()`中，不必要的'土地'分配](https://github.com/rust-lang/rust/pull/65463)
- [避免从`TokenTree`到`TokenStream`的不必要转换](https://github.com/rust-lang/rust/pull/65455)
- [expand：简化派生的扩展](https://github.com/rust-lang/rust/pull/65252)
- [Fix：约束 trait ，以找到方法的建议](https://github.com/rust-lang/rust/pull/65242)
- [语法：为 intersection- / and-patterns `p1 @ p2`添加解析器恢复](https://github.com/rust-lang/rust/pull/65410)
- [减少虚假的，未使用生命周期警告](https://github.com/rust-lang/rust/pull/64603)
- [当唯一的区别是大小写时，请注意建议](https://github.com/rust-lang/rust/pull/65398)
- [使用结构化建议，来限制范围](https://github.com/rust-lang/rust/pull/65192)
- [Fix: 零大小的未初始化框](https://github.com/rust-lang/rust/pull/65174)
- [添加，重叠的 ranges 到无法到达的模式 lint，的检查](https://github.com/rust-lang/rust/pull/64007)
- [为依赖图，使用更多细粒度的锁](https://github.com/rust-lang/rust/pull/63756)
- [Fix: `canonicalize_const_var`泄漏了推断变量](https://github.com/rust-lang/rust/pull/65652)
- [mir-opt：改进 SimplifyLocals 传递，以便可以删除未使用的 const](https://github.com/rust-lang/rust/pull/65624)
- [使用显式泛型参数，改进 APIT 的错误消息](https://github.com/rust-lang/rust/pull/65614)
- [删除不可访问的单元元组，比较 binop 的代码生成](https://github.com/rust-lang/rust/pull/65605)
- [避免使用 ICE，当`include!`被 stdin 箱子使用时](https://github.com/rust-lang/rust/pull/65603)
- [impl `AsRef<[T]>` for `List<T>`](https://github.com/rust-lang/rust/pull/65444)
- [hashbrown：删除大量`#[inline]`注解](https://github.com/rust-lang/hashbrown/pull/119)
- [在调试版本中，始终内联`mem::`{`size_of`，`align_of`](https://github.com/rust-lang/rust/pull/65016)
- [避免`CString::new`中的，重新分配](https://github.com/rust-lang/rust/pull/65551)
- [`BTreeSet`的 symmetric_difference 和 union 优化](https://github.com/rust-lang/rust/pull/65226)
- [cargo：允许`--all-features`在虚拟工作区的根目录中](https://github.com/rust-lang/cargo/pull/7525)
- [rustup 安装：添加`--profile`标志，以覆盖配置文件](https://github.com/rust-lang/rustup.rs/pull/2075)

## 批准的 RFC

经过 Rust 的[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)后，Rust 的变化。这些是本周批准实现的 RFC：


_本周未批准任何 RFC。_

## 最终评论期

每周[团队](https://www.rust-lang.org/team.html)宣布正在做出决定的 RFC 和关键 PR 的“最终评论期”。现在表达你的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处理：合并] [关注问题： todo! macro](https://github.com/rust-lang/rust/issues/59277)。
- \[处理：合并] [关注问题： floats ↔ bytes 转换](https://github.com/rust-lang/rust/issues/60446)。
- \[处理：合并] [稳定化： rfc 2451, re-rebalance coherence](https://github.com/rust-lang/rust/issues/63599)。
- \[处理：合并:] [[rustdoc] 稳定化 cfg（doctest）](https://github.com/rust-lang/rust/pull/63803)。
- \[处理：合并] [稳定化： 嵌套的 self receivers in 1.40.0](https://github.com/rust-lang/rust/pull/64325)。
- \[处理：合并] [稳定化： `option::flatten`](https://github.com/rust-lang/rust/pull/64747)。
- \[处理：合并] [稳定化： `const_constructor`](https://github.com/rust-lang/rust/pull/65188)。

## 新的 RFC

- [标准 lazy 类型](https://github.com/rust-lang/rfcs/pull/2788)。
- [通过 HTTP，将 crates-io 注册表作为静态文件服务](https://github.com/rust-lang/rfcs/pull/2789)。

# 本周引用句

> Rust 帮助我掌握，在 C++编写时就应该知道的概念。

- [Alexander Clarke 在 Microsoft 安全响应中心博客上](https://msrc-blog.microsoft.com/2019/10/16/an-interns-experience-with-rust/)。

多谢[mmmmib](https://users.rust-lang.org/t/twir-quote-of-the-week/328/712)这个建议！

[请提交引用句并为下周投票！](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/d6920w/this_week_in_rust_304/).</small>
