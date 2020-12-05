---
title: "Rust周报 367(译)"
date: 2020-12-05T21:20:26+08:00
tags: ["week"]
description: "螃蟹-Rust周报-367"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-week.css"]
series: "Rust周报-中文"
draft: false
---

- [this-week-in-rust](https://this-week-in-rust.org)
- 日期：2020-12-02
- [原文：367 期](https://this-week-in-rust.org/blog/2020/12/02/this-week-in-rust-367/)

你好，欢迎再来一期*本周的螃蟹行情*！[Rust](http://rust-lang.org)是一种追求三位一体的系统语言：安全性、并发性和速度。这是它的进展和社区的每周总结。有什么要说的吗？推特[@ThisWeekInRust](https://twitter.com/ThisWeekInRust)或[向我们发送请求](https://github.com/cmr/this-week-in-rust)。 想参与吗？[我们热爱贡献](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md).

*这本周的螃蟹行情*是在[在 Github 上](https://github.com/cmr/this-week-in-rust)公开的。如果你在本周的问题中发现任何错误，[请提交 PR](https://github.com/cmr/this-week-in-rust/pulls)。

# Updates from Rust Community

本周没有项目更新。

### Official

- [Announcing Rustup 1.23.0](https://blog.rust-lang.org/2020/11/27/Rustup-1.23.0.html)

### Newsletters

- [This Month in Rust Dimforge #3](https://www.dimforge.com/blog/2020/12/01/this-month-in-dimforge/)

### Tooling

- [IntelliJ Rust Changelog #136](https://intellij-rust.github.io/2020/11/30/changelog-136.html)
- [Rust Analyzer Changelog #53](https://rust-analyzer.github.io/thisweek/2020/11/30/changelog-53.html)
- [Knurling-rs Changelog #8](https://ferrous-systems.com/blog/knurling-changelog-8/)

### Observations/Thoughts

- [Rust 开发持续性](https://kflansburg.com/posts/rust-continuous-delivery/)
- [为什么 Rust's BTreeMap 没有 with_capacity() 方法?](https://www.nicolas-hahn.com/2020/11/30/btreemap-with-capacity/)
- [为什么 WebAssembly 和 Rust 一起能提升 Node.js 性能](https://developer.ibm.com/technologies/web-development/articles/why-webassembly-and-rust-together-improve-nodejs-performance/)
- [lib-ruby-parser](https://ilyabylich.svbtle.com/lib-ruby-parser)
- [Understanding Partial Moves in Rust](https://whileydave.com/2020/11/30/understanding-partial-moves-in-rust/)
- [Error 处理真困难](https://www.fpcomplete.com/blog/error-handling-is-hard/)
- [可扩展性基准测试 with Rust Streams](https://pkolaczk.github.io/benchmarking-cassandra-with-rust-streams/)
- [上个月，我将 1 万行 JS 代码，变为 Rust。这里，我记录下](https://www.reddit.com/r/rust/comments/k3jy5g/i_rewrote_10k_lines_of_js_into_rust_over_the_last/)

### Rust Walkthroughs

- [References in Rust](https://hashrust.com/blog/references-in-rust/)
- [OS in Rust: Building kernel for custom target: Part-4](https://blog.knoldus.com/os-in-rust-building-kernel-for-custom-target-part-4/)
- [用 Elixir 方式，编写 Rust](https://dev.to/bkolobara/writing-rust-the-elixir-way-2lm8)
- [Risp (in (Rust) (Lisp))](https://stopa.io/post/222)
- [Props 和 嵌套的 Components，with Yew](https://dev.to/fllstck/props-and-nested-components-with-yew-2l0d)
- [通过 Rust，使用 Selenium](https://dev.to/stevepryde/using-selenium-with-rust-aca)
- [Rocket Tutorial 04: Data Persistency and Rocket (with MongoDB)](https://dev.to/davidedelpapa/rocket-tutorial-04-data-persistency-and-rocket-with-mongodb-e5j)
- [The Little Book of Rust Macros](https://veykril.github.io/tlborm/)
- \[系列视频] [futures explained in 200 lines of rust](https://cfsamson.github.io/books-futures-explained/introduction.html)
- \[视频] [demo: 🦀️ building a runtime reflection system for rust](https://www.osohq.com/post/demo-building-runtime-reflection-system-for-rust)
- \[视频] [sapling livestream 5 - deleting code](https://youtu.be/oc8DWXsodzE)

### Miscellaneous

- [为什么科学家，开始使用 Rust](https://www.nature.com/articles/d41586-020-03382-2)
- [Pijul - 简单，合理，可扩展的版本控制系统](https://initialcommit.com/blog/pijul-version-control-system)
- [Amazon: We're hiring software engineers who know programming language Rust](https://www.zdnet.com/article/amazon-were-hiring-software-engineers-who-know-programming-language-rust/)

# Crate of the Week

这周的箱子是[kira](https://github.com/tesselode/kira)，一个用于表达游戏音频的库

谢谢[Alexis Bourget](https://users.rust-lang.org/t/crate-of-the-week/2704/849)的建议！

[提交您下周的建议和投票][submit_crate]！

[submit_crate]: https://users.rust-lang.org/t/crate-of-the-week/2704

# Call for Participation

一直想为开源项目做贡献，但不知道从哪里开始？每周我们都会重点介绍 Rust 社区的一些任务，供您选择和开始！

其中一些任务也可能有导师，请访问任务页面以获取更多信息。

如果您是 Rust 项目的所有者并且正在寻找贡献者，请提交任务[这里][guidelines]。

[guidelines]: https://users.rust-lang.org/t/twir-call-for-participation/4821

# Updates from Rust Core

共有 289 个拉取请求[在上周合并][merged]

[merged]: https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2020-11-23..2020-11-30

- [更新 the coverage map 到 Version 4](https://github.com/rust-lang/rust/pull/79365)
- [allow using generic trait methods in `const fn`](https://github.com/rust-lang/rust/pull/79287)
- [允许 Trait 继承语法，完成循环 associated types 语法，而不出错](https://github.com/rust-lang/rust/pull/79209)
- [不要访问 `ForeignItemRef` for HIR indexing and validation](https://github.com/rust-lang/rust/pull/79511)
- [仅在增量编译模式，创建`OnDiskCache`](https://github.com/rust-lang/rust/pull/79216)
- [缓存 pretty-print/retokenize 结果，避免编译时间'爆炸'](https://github.com/rust-lang/rust/pull/79338)
- [稳定化：`const_int_pow`](https://github.com/rust-lang/rust/pull/76829)
- [compiler-builtins: fix division on SPARC](https://github.com/rust-lang/compiler-builtins/pull/393)
- [libtest: 执行 a test suite，给出总计时间](https://github.com/rust-lang/rust/pull/75752)
- [accept '!' in intra-doc links](https://github.com/rust-lang/rust/pull/79321)
- [整理更多的 rustdoc](https://github.com/rust-lang/rust/pull/79372)
- [bindgen: struct_layout: 修复 field offset computation for packed(n) structs](https://github.com/rust-lang/rust-bindgen/pull/1935)
- [miri: 添加简单的数据竞态检察器](https://github.com/rust-lang/miri/pull/1617)
- [clippy: 添加 `suspicious_operation_groupings` lint](https://github.com/rust-lang/rust-clippy/pull/6086)

## Rust Compiler Performance Triage

- [2020-11-24](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-24.md)：1 个退步，2 个改进，2 个混合

这周我们看到了[#79237](https://github.com/rust-lang/rust/pull/79237)的着陆，它本身没有成功，但为在 macOS 上支持 split debuginfo 打开了大门。这最终会是巨大的成功，因为我们可以避免重新收集 debuginfo 的同时，保留对 lldb 和 Rust backtraces 的支持。[#79361](https://github.com/rust-lang/rust/issues/79361)跟踪 rustc 标志的稳定性，但尚未 100% 明确，向稳定版本的用户推出该产品。

分类由 @jyn514 和 @simulacrum 完成。

4 个退步，4 个改进，2 个混合结果。其中 5 个汇总。

见[full report](https://github.com/rust-lang/rustc-perf/blob/master/triage/2020-11-24.md)更多。

## Approved RFCs

对 Rust 的更改跟随 Rust[RFC (request for comments) process](https://github.com/rust-lang/rfcs#rust-rfcs)。以下是本周批准实施的 RFC：

_本周未批准任何 RFC。_

## Final Comment Period

每周[the team](https://www.rust-lang.org/team.html)宣布即将做出决定的 RFC 和主要 PR 的“最终评论期”。立即发表您的意见。

### [RFCs](https://github.com/rust-lang/rfcs/labels/final-comment-period)

- [RFC: 计划让 core 和 std's panic 相同](https://github.com/rust-lang/rfcs/pull/3007)
- [稳定化：Cargo's new feature resolver](https://github.com/rust-lang/rfcs/pull/2957)

### [Tracking Issues & PRs](https://github.com/rust-lang/rust/labels/final-comment-period)

- [当检测单 overriden forbids，使用 true previous lint level](https://github.com/rust-lang/rust/pull/78864)
- [Apply `unused_doc_comments` lint to inner items](https://github.com/rust-lang/rust/pull/78367)
- [移除这奇怪的 special case from promotion](https://github.com/rust-lang/rust/pull/78363)

## New RFCs

- [允许 "工具依赖" on bin, cdylib, and staticlib crates](https://github.com/rust-lang/rfcs/pull/3028)
- [Infallible promotion](https://github.com/rust-lang/rfcs/pull/3027)

# Quote of the Week

> 事情很清楚：我们知道，我们是受益者，受益于让人兴奋的 Rust。AWS 没有参与 Rust ，或使它成为今天的成功，但我们希望为 Rust 的未来做出贡献。

– [Matt Asay on the AWS Open Source blog](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/)

Thanks to [Alice Ryhl](https://users.rust-lang.org/t/twir-quote-of-the-week/328/969) for the suggestion.

[Please submit quotes and vote for next week!](https://users.rust-lang.org/t/twir-quote-of-the-week/328)

_This Week in Rust is edited by: [nellshamrell](https://github.com/nellshamrell), [llogiq](https://github.com/llogiq), and [cdmistman](https://github.com/cdmistman)._

<small>[Discuss on r/rust](https://www.reddit.com/r/rust/comments/k5nsab/this_week_in_rust_367/)</small>
