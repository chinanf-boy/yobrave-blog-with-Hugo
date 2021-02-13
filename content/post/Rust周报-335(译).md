---
title: "Rust周报 335(译)"
date: 2020-04-23T21:35:11+08:00
categories: ["Rust"]
tags: ["week"]
description: "this-week-in-rust.org 螃蟹-Rust周报-335"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

<img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rs logo" class="medium-zoom-image" style="
    width: 200px;
    background: white;
">

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-04-21
- [原文：335 期](https://this-week-in-rust.org/blog/2020/04/21/this-week-in-rust-335/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Rust 社区的更新

## 新闻和博客文章

- [Rust 2019 调研结果](https://blog.rust-lang.org/2020/04/17/Rust-survey-2019.html)。
- [在 Dropbox 上，测试 sync](https://dropbox.tech/infrastructure/-testing-our-new-sync-engine)。
- [用 Rust 为 Raspberry Pi 编写，操作系统](https://tc.gts3.org/cs3210/2020/spring/lab.html)。
- [Wired Logic —— 在浏览器上，运行的基于像素的数字电路模拟器（Rust 编译为 WASM）](https://iostapyshyn.github.io/wired-logic/)。
- [更好的 Firefox stack fixing](https://blog.mozilla.org/nnethercote/2020/04/15/better-stack-fixing-for-firefox/)。
- [在 Rust 代码内，编写 Python —— 第 1 部分](https://blog.m-ou.se/writing-python-inside-rust-1/)。
- [网络上的 wgpu-rs](https://gfx-rs.github.io/2020/04/21/wgpu-web.html)。
- [从头开始构建 Rust Web 浏览器](https://joshondesign.com/2020/03/10/rust_minibrowser)。
- [从 Pratt 到 Dijkstra](https://matklad.github.io/2020/04/15/from-pratt-to-dijkstra.html)。
- [Rust 技巧和窍门](https://mudit.blog/rust-tips-and-tricks/)。
- [使用类型擦除(type-erased)的数据结构进行的实验](https://vgatherps.github.io/2020-04-14-erasure/)。
- [如何编写 CRaP Rust 代码](https://blog.logrocket.com/how-to-write-crap-rust-code/)。
- [gfx-hal 简介 —— 第 3 部分：Vertex buffers](https://www.falseidolfactory.com/2020/04/16/intro-to-gfx-hal-part-3-vertex-buffers.html)。
- [我如何对 LastPass CLI 工具进行逆工程](http://adventures.michaelfbryan.com/posts/lastpass/)。
- [开放源码的 dotenv-linter：快如闪电的工具，可以整理您的 .env 文件](https://evrone.com/dotenv-linter)。
- [rust-analyzer changelog 21](https://rust-analyzer.github.io/thisweek/2020/04/20/changelog-21.html)。

# 周箱

这周的箱子是[regex2fat](https://github.com/8051Enthusiast/regex2fat)，将一个正则表达式，转换为一份绝对非标准 FAT32 文件系统的程序。

谢谢[乔什·特里维特（Josh Triplett）](https://users.rust-lang.org/t/crate-of-the-week/2704/757)的建议！

[提交下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# 呼吁参与

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

- [编译器资源管理器：Rust 的 Bytes 支持](https://github.com/mattgodbolt/compiler-explorer/issues/1925)。
- [rlua 正在寻找维护者](https://github.com/kyren/rlua/issues/172)。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Rust Core 的更新

共有 408 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-04-13..2020-04-20

- [从`.await` calls 中，移除一个 stack frame](https://github.com/rust-lang/rust/pull/70831)
- [在某些情况下，改善 async-await/generator 的 obligation errors](https://github.com/rust-lang/rust/pull/70679)
- [让`needs_drop`对 generators 不那么悲观](https://github.com/rust-lang/rust/pull/70015)
- [在返回`Result`的 fn 中，`Option`上使用`?`时，提供更好的编译器输出，反之亦然](https://github.com/rust-lang/rust/pull/71141)
- [会建议`.into()`，而不是`try_into()`，若是可以工作的话](https://github.com/rust-lang/rust/pull/71051)
- [维持，衍生的 obligations 之链](https://github.com/rust-lang/rust/pull/69793)
- [chalk：递归 solver](https://github.com/rust-lang/chalk/pull/372)
- [chalk：递归 solver：歧义尽早退出](https://github.com/rust-lang/chalk/pull/404)
- [chalk：可能缓存环境详尽细节的结果](https://github.com/rust-lang/chalk/pull/403)
- [使用查询确定，函数是否需要 const 检查](https://github.com/rust-lang/rust/pull/69642)
- [mir-opt：运行`SimplifyLocals`到一个定点，并处理大多数 rvalue](https://github.com/rust-lang/rust/pull/70755)
- [miri：添加选项 —— 禁用对齐检查(alignment check)](https://github.com/rust-lang/miri/pull/1332)
- [miri：让 machine hook 能动态决定 alignment check](https://github.com/rust-lang/rust/pull/71101)
- [miri：扩展 frame hooks](https://github.com/rust-lang/rust/pull/71100)
- [miri：处理`std::sync::atomic::spin_loop_hint()`](https://github.com/rust-lang/miri/pull/1342)
- [ptr：介入`len()`方法，on raw slices](https://github.com/rust-lang/rust/pull/71082)
- [miri：多使用预先计算的布局](https://github.com/rust-lang/miri/pull/1349)
- [miri-unleashed：测试 —— 我们检测堆分配](https://github.com/rust-lang/rust/pull/71276)
- [弃用`asm!`宏，赞成`llvm_asm!`](https://github.com/rust-lang/rust/pull/71007)
- [backtrace：删除 memmap 依赖项](https://github.com/rust-lang/backtrace-rs/pull/311)
- [cargo：token/index 处理的一些更新](https://github.com/rust-lang/cargo/pull/7973)
- [cargo：尽量避免在 buggy (?) clocks 上，出现 panics](https://github.com/rust-lang/cargo/pull/8114)

## 批准的 RFC

对 Rust 的更改跟随 Rust[RFC（征求意见）流程](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

- [RFC 2834：不兼容的 Cargo 报告](https://github.com/rust-lang/rfcs/pull/2834)。

## 最后意见征询期

每周[团队](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终意见征询期”。立即发表您的意见。

### [RFC](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- \[处置：合并] [编译器团队的提议大改](https://github.com/rust-lang/rfcs/pull/2904)。
- \[处置：合并] [项目组](https://github.com/rust-lang/rfcs/pull/2856)。

### [跟踪问题和 PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- \[处置：关闭] [跟踪问题：Vec::remove_item](https://github.com/rust-lang/rust/issues/40062)。
- \[处置：关闭] [跟踪问题：Box::into_raw_non_null](https://github.com/rust-lang/rust/issues/47336)。
- \[处置：合并] [稳定化： `#[alloc_error_handler]` 属性 (for no_std + liballoc)](https://github.com/rust-lang/rust/issues/66740)。
- \[处置：合并] [让 `handle_alloc_error` 默认 panic (for no_std + liballoc)](https://github.com/rust-lang/rust/issues/66741)。
- \[处置：合并] [proc_macro: 稳定化 `span::resolved_at` 和 `span::located_at`](https://github.com/rust-lang/rust/pull/69041)。
- \[处置：关闭] [返回 error for current_exe 若文件不存在](https://github.com/rust-lang/rust/pull/69557)。
- \[处置：合并] [impl BitOr 和 BitOrAssign for 非零(NonZero)整数类型 ](https://github.com/rust-lang/rust/pull/69813)。
- \[处置：合并] [enum 判别式应该有 generics（泛型） in scope（在范围内）](https://github.com/rust-lang/rust/issues/70453)。
- \[处置：合并] [稳定化：BTreezMap::remove_entry](https://github.com/rust-lang/rust/pull/70712)。
- \[处置：合并] [移除 语言层级的未定义行为(UB) for non-utf-8 str](https://github.com/rust-lang/rust/issues/71033)。
- \[处置：合并] [稳定化：UNICODE_VERSION (feature unicode_version)](https://github.com/rust-lang/rust/pull/71068)。
- \[处置：合并] [在 float-to-int 转换中，通过定义 未定义行为，去囊括(边缘情况)](https://github.com/rust-lang/rust/pull/71269)。

## 新的 RFC

- [转换，rust-analyzer 作为我们的官方 LSP（语言服务器协议）实现](https://github.com/rust-lang/rfcs/pull/2912)。
- [销毁工作](https://github.com/rust-lang/rfcs/pull/2909)。

# 本周引用句

> UB（未定义行为） 的特殊之处在于它会毁坏你审查 bug 的能力，就像一种攻击免疫系统的疾病。未定义的行为可能具有任意的、非局部的，甚至非关联的邪恶魔法，从而破坏程序的确定性。这是不可容忍的，这就是为什么 safe Rust 对未定义的行为排查，是如此重要，尽管仍然存在 Rust 无法消除的漏洞类别。

– [@trentj on rust-users](https://users.rust-lang.org/t/newbie-learning-how-to-deal-with-the-borrow-checker/40972/11)

Thanks to [Louis Cloete](https://users.rust-lang.org/t/twir-quote-of-the-week/328/854) for the suggestions!

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [nasa42](https://github.com/nasa42)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/g6d0ac/this_week_in_rust_335/).</small>
