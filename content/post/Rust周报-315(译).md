---
title: "Rust周报 315(译)"
date: 2019-12-06T09:55:24+08:00
categories: ['Rust']
tags: ['week']
description: '螃蟹-Rust周报-315'
css: ['/css/main.css', '/css/stylesheet.css']
series: 'Rust周报-中文'
draft: false
---

<style>
a { color: #804d0f;}
</style>


[本周的螃蟹行情](https://this-week-in-rust.org/)

日期：2019-12-03

[原文：本周 Rust(螃蟹) 315](https://this-week-in-rust.org/blog/2019/12/03/this-week-in-rust-315/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [现在默认情况下，nightly 版本进行常数传播](https://blog.rust-lang.org/inside-rust/2019/12/02/const-prop-on-by-default.html)。
- [Redox 操作系统：真正的硬件突破，并专注于 rustc](https://www.redox-os.org/news/focusing-on-rustc/)。
- [使用 Rust 将 ML 投入生产：提速 25 倍](https://www.lpalmieri.com/posts/2019-12-01-taking-ml-to-production-with-rust-a-25x-speedup/)。
- [如何 RiiR](http://adventures.michaelfbryan.com/posts/how-to-riir/index.html)。
- [发起 2019 年 Rust 状况调查](https://blog.rust-lang.org/2019/12/03/survey-launch.html)。
- [宣布 http v0.2](https://seanmonstar.com/post/189439210962/http-v02)。
- [用 Rust 和 async/await 实现 pid1](https://tech.fpcomplete.com/rust/pid1)。
- [潮流：现在和未来](https://blog.yoshuawuyts.com/tide/)。
- [让我们用 Rust 语言加上 Wrap ，创建一个简单的身份验证服务器](https://blog.joco.dev/posts/warp_auth_server_tutorial)。
- [与 Future 融为一体 —— Rust 速成课程 8](https://www.snoyman.com/blog/2019/12/rust-crash-course-08-down-dirty-future)。
- [嵌入式 WG 新闻通讯 21](https://rust-embedded.github.io/blog/newsletter-21/)。

### ＃Rust2020

查找位于＃Rust2020 的所有帖子[读 Rust](https://readrust.net/rust-2020/)。

# 周箱

这周的箱子是[joinery](https://docs.rs/joinery)，用于泛型字符串连接的库。

谢谢[内森·韦斯特](https://users.rust-lang.org/t/crate-of-the-week/2704/677)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [heed：支持 Windows，并通过测试](https://github.com/Kerollmops/heed/pull/25)。Heed 是具有最小开销的，全类型 LMDB 包装器。
- [crates.io：carols10cents 将指导 11 月和 12 月的多个问题](https://github.com/rust-lang/crates.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AE-mentor)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 264 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2019-11-25..2019-12-02

- [在 1.41.0 中，稳定化嵌套的 self receivers](https://github.com/rust-lang/rust/pull/64325)
- [为 const function evaluations，添加 memoization](https://github.com/rust-lang/rust/pull/66294)
- [将 crc 和 crypto 添加到 arm 上的 target feature 白名单](https://github.com/rust-lang/rust/pull/66918)
- [sanitizers 的条件编译](https://github.com/rust-lang/rust/pull/66245)
- [添加对 sanitizers 重覆盖的支持，并跟踪未初始化内存的来源](https://github.com/rust-lang/rust/pull/66522)
- [async fn 的恢复，在完成后](https://github.com/rust-lang/rust/pull/66321)
- [在类型参数需要`Copy`限定时，使用结构化建议](https://github.com/rust-lang/rust/pull/66567)
- [diagnostic 输出的各种调整](https://github.com/rust-lang/rust/pull/66754)
- [为未实现的 trait，添加版本不匹配帮助消息](https://github.com/rust-lang/rust/pull/66561)
- [AST address-of](https://github.com/rust-lang/rust/pull/66671)
- [or-pattern 有用性检查的初始实现](https://github.com/rust-lang/rust/pull/66612)
- [polonius：使用占位符借用的非法子集关系错误](https://github.com/rust-lang/polonius/pull/137)
- [修复函数签名中预测，导致的不透明类型](https://github.com/rust-lang/rust/pull/66178)
- [简化内存分类](https://github.com/rust-lang/rust/pull/66246)
- [删除 mir predecessors 缓存中的内部可变性](https://github.com/rust-lang/rust/pull/64736)
- [rustc：将调试信息从 LocalDecl 和 UpvarDecl 移到，专职的 VarDebugInfo 中](https://github.com/rust-lang/rust/pull/56231)
- [为`const`s 和`static`s，创建 promoted MIR 片段](https://github.com/rust-lang/rust/pull/66642)
- [alloc：添加 new_zeroed()版本，例如 new_uninit()](https://github.com/rust-lang/rust/pull/66128)
- [impl TrustedLen for vec::Drain](https://github.com/rust-lang/rust/pull/66759)
- [原子操作的 as_mut_ptr](https://github.com/rust-lang/rust/pull/66705)
- [为 MaybeUninit 实现 Debug](https://github.com/rust-lang/rust/pull/65013)
- [libc：添加对 solaris/illumos 的共享内存操作的支持](https://github.com/rust-lang/libc/pull/1584)
- [cargo：稳定化 profile-overrides](https://github.com/rust-lang/cargo/pull/7591)
- [rustup：添加工具链安装的 --allow-downgrade 选项](https://github.com/rust-lang/rustup/pull/2126)
- [docs.rs：如果正在使用多个 crate-types，则要正确匹配库](https://github.com/rust-lang/docs.rs/pull/499)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC(求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

_当前没有 RFC 处于最后评论期。_

### [跟踪问题和PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：合并] [添加方法 Result::into_ok](https://github.com/rust-lang/rust/pull/66045)。
- \[处置：合并] [`From<NonZero*>` 的实现，给那些 wider 非零类型](https://github.com/rust-lang/rust/pull/66277)。
- \[处置：合并] [改 unused_labels，从 allow 到 warn](https://github.com/rust-lang/rust/pull/66325)。

## 新的 RFC

- [process-handle-for-async (异步处理进程)](https://github.com/rust-lang/rfcs/pull/2823)。

# 本周引用句

> > 最近老听说 rust 提供的是创造性编码法。呵，那入眠编码法呢，学着点 —— 尽你所能让你的代码编译时间有多长就搞多长，然后睡觉，在早上起来发现你的代码就是正确的，并且可以工作啦
>
> 哇，我知道人们说 Rust 编译器很慢，但我从未有一个 Rust 程序，是需要花了一整晚的时间来编译的 ☺

– [Maxim Vorobjov and ZiCog in our Quote of the Week Thread](https://users.rust-lang.org/t/twir-quote-of-the-week/328/749)

Thanks to [both of them and mmmmib](https://users.rust-lang.org/t/twir-quote-of-the-week/328/752) for the suggestion!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nasa42](https://github.com/nasa42), [llogiq](https://github.com/llogiq), and [Flavsditz](https://github.com/Flavsditz)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/e68fzf/this_week_in_rust_315/).</small>
