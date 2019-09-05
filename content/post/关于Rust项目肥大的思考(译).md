---
title: '关于Rust项目肥大的思考(译)'
date: 2019-09-05T10:52:40+08:00
categories: ['Rust']
tags: ['size']
description: '关于 Rust 项目大小膨胀的思考'
css: ['/css/main.css', '/css/stylesheet.css']
draft: false
---

# 关于 Rust 项目大小膨胀的思考

2019 年 8 月 21 日 ❤️ [原文](https://raphlinus.github.io/rust/2019/08/21/rust-bloat.html)

我要接受了一个[PR](https://github.com/xi-editor/druid/pull/124#issuecomment-523211377)，这将加快了 [druid](https://github.com/xi-editor/druid) 的编译时间，约 3 倍，而其可执行文件大小则变为近乎 2 倍。在这种情况下，我认为需要权衡一下（没有国际化，这个 GUI 工具包严格上来说，是一个玩具），但膨胀使我不高兴，我认为有改善 Rust 生态系统的空间。

## 我们应该关心吗？

对我来说，rust 中的膨胀主要是关于编译时间和可执行文件大小。关于编译时间的[十大挑战](https://blog.rust-lang.org/2018/11/27/Rust-survey-2018.html#challenges)，其中含有 Rust 的开发经验，但在某种程度上，它是由开发人员控制的，特别是选择那些臃肿的箱子。

膨胀是软件中的一个常见问题，但有一些事情使它在 Rust ，会是一个更大挑战：

- Cargo 很容易就够到箱子。
- 泛型，特别是单态化。
- 不支持动态库。

对编译时间影响的一个更微妙的方法是，使用像 rls 这样的工具。

这会因人而异，但我个人很在乎。我希望 XI 编辑器的核心是轻量级，特别是当我们能够考虑 UI 之类的问题时。但是，现在发布的二进制文件是 5.9M（发布版本，Windows，不包括语法着色，而这是额外的 2.1M）。为了减少膨胀，我在 Rust 生态系统中做了很多其他的事情，在这篇文章中，我会吹嘘一下。

## 功能 vs 膨胀

当然，我之所以考虑在 druid 上，进行如此大的编译时间跳跃，是因为我想要国际化，这是一个重要而复杂的特性。正确地进行这项工作，需要相当多的逻辑，其中包括区域匹配、Unicode 和自然语言处理（如复数规则）的。我没有*期待过*会有一个小箱子，能帮我做到这些。

最近我们看到的一个类似的权衡是，pulldown-cmark 关于[Unicase dep 增加了 50K](https://github.com/raphlinus/pulldown-cmark/issues/357)二进制文件大小。在这种情况下，[CommonMark 规范](https://spec.commonmark.org/0.29/#matches)要求 Unicode 大小写折叠，如果没有这个，它将不再符合标准。我理解这种不去匹配的诱惑，但我认为，不符合规范的版本是一件坏事，尤其是对世界上大多数母语不是英语的人不友好。

因此，重要的是，不要将精益求精与缺乏重要特性混为一谈。真正要说的是，膨胀是不必要的资源消耗，超出了满足需求所必需的范围。Unicode 和国际化是一个特别有争议的问题，这不仅是因为它们实际上，需要代码和数据才能正确处理，而且还因为它们有很大的膨胀量。

## 作'廋子'的基础箱子

我将对“基础”箱子有更高的标准，这些箱子会给多数 Rust 应用所使用。*不*使用依赖关系会是一个膨胀关注点，或者根据需求和对膨胀的容忍度，将生态系统分割成不同的解决方案。

我认为箱子提供了通用的功能是一个特殊的风险，因这些功能肯定会使“内置电池”的语言打上折扣。其中会一些（bitflags, lazy_static, cfg-if, 等）不是很大影响的，且会提供了明显的好处，特别是使 api 更加人性化。对于其他（rental, failure），成本更高，我通常建议不要在基础箱子中，使用它们。但是这是你自己的应用，如果你喜欢，当然你说了算。我认为 rental 可能是 fluent 最昂贵的传化依赖项，因为我发现仅使用箱子，就需要 27.3 秒（调试版本、Windows；发布版本 53.2 秒）。

我担心[gfx-rs](https://github.com/gfx-rs/gfx)的腹胀 - 调试版本构建大约需要一分钟时间，以及大约需要 3M 大小（Windows，quad 示例）。出于这个原因（以及稳定性和文档），我倾向直接使用底层图形 API，用 GPU 渲染器于 piet，而不是使用这个抽象层。我发现其他“包装形式”的箱子也有类似的问题，包括[direct2d](https://github.com/Connicpu/direct2d-rs)。但在这里，这些权衡是复杂的。

\[更新文章，重提一下 gfx-rs：作为对这篇文章的回应，gfx-rs 团队很快取得了编译时间方面的重大改进，kvark 还指出，我使用 quad 示例的方法是无效的，因为它引入了一系列 gfx-rs 实际上不需要的依赖项。我很高兴有人注意到这一点，并且我的许多担忧得到了缓解，因此将更密切地关注 gfx-rs，来应对未来的 GPU 工作。我注意到了来自其他包装箱的编译时间影响，所以一般建议，应仔细查看的观点，仍相当重要。]

虽然我还没有实际数字，但我发现[rust-objc](https://github.com/SSheldon/rust-objc)宏产生相当膨胀的代码，每个方法大约是 1.5K。这让我考虑直接用 Objective-C（将 C 用作普通的 FFI，并不太糟糕）重写 MacOS 平台的绑定代码，而不是依赖动态 Objective-C 运行时(编译器)的 Rust 代码。我预计这里的膨胀，会影响到 MacOS（和 iOS）平台中的调用，而这些代码相当广泛，因此深入研究它将是一个很好的主题。

### 共享

我有时听说依赖常用箱子是可以的，因为它们的成本，在共享它们的不同用户中分摊。我并不买账，原因有很多。首先，你通常会得到不同的版本(这个[Zola](https://github.com/getzola/zola)的构建目前有两个版本，每个都有 unicase, parking_lot, parking_lot_core, crossbeam-deque, toml, derive_more, lock_api, scopeguard, and winapi）。其次，如果大量使用泛型（见下文），那么很可能会出现代码重复。

也就是说，对于像 Unicode 数据这样的东西，在二进制文件中，越少副本尤为重要。最好的选择是将箱子设计成廋子。

### 程序宏

一个特别有争议的问题是 程序宏。支持这些（syn 和 quote）的箱子需要大约 10 秒的时间来编译，和不会直接影响可执行文件的大小。这是 Rust 语言表达能力的一个主要提升，我们可能会在 druid 使用它们，尽管我们一直在讨论。

我个人想看到的是程序宏更加稳定，然后被采用到语言中。

## 谨慎使用序列化

挖掘 XI 编辑器，最大一个臃肿来源的是 serde，一般来说，它将一切序列化为 JSON 消息。这是一个实验箱子，回想起来，我会说一件我最不高兴的事情。有效的序列化似乎还不是一个已解决的问题。\[还要注意，Swift 的 JSON 序列化是[非常慢](https://github.com/xi-editor/xi-mac/issues/102)]

## 谨慎使用多态性

这个 serde 如此膨胀的*特别*原因是它使所有的东西都单态化。还有其他选择；特别是[miniserde](https://github.com/dtolnay/miniserde)，通过使用动态调度（ trait 对象），代替单态化，生成较小的二进制文件和编译时间。但它也有其他的局限性，所以还没有流行起来。

一般来说，多态性的过度使用是导致膨胀的主要原因。例如，resvg [从 lyon 换到 kurbo](https://github.com/RazrFalcon/resvg/commit/708d0fff2bf47939587e0d562085a65f6dbf794f)，其原因\[添加注释：Razfralcon [指出](https://www.reddit.com/r/rust/comments/ctlt16/thoughts_on_rust_bloat/exlpd78/)，提升 lyon 编译时间的主要贡献是程序宏，而不是多态性，自[已修复](https://github.com/servo/euclid/issues/345)]以来。 我们不采用 lyon / euclid 生态系统，也是因为这个原因，这是一个遗憾，因为现在有更多的碎渣。在[kurbo](https://github.com/linebender/kurbo)上，我做了一些实验表明，除了允许浮点类型`f64`之外没有真正的好处。所以，就决定了坐标的类型。我对这个选择很满意。

## 谨慎使用异步

由于各种原因，异步代码的编译速度，要比相应的同步代码慢得多，尽管编译器团队[取得重大进展](https://tmandry.gitlab.io/blog/posts/optimizing-await-1/)。尽管 async/await 是一个闪亮的新特性，但重要的是，要认识到在很多情况下，老式的同步代码仍然更好。当然，如果您正在编写大规模的 Internet 服务器，您需要异步，但还是有很多其他情况。

我会挑[Zola](https://github.com/getzola/zola)出战。发布版本超过 9 分钟编译时间，以及 15M 大小。（调试版本的速度大约是原来的两倍，但要大 3-5 倍）。观看编译（总共超过 400 箱子！）很明显，它的网络服务（基于 actix）占了很大一部分，同时也扯住了 tokio 生态系统的很大一部分。对于只想预览下，该工具构建的静态网站的人来说，这可能是杀伤力过大。也就是说，对于这个特定的应用程序来说，膨胀可能没有那么重要，而且使用流行的、功能强大的 Web 服务框架也有好处。

结果，我选择了*不*在 druid 中，使用 async，但这是一种更简单的单线程方法，即使，异步方法有所[提出](https://www.reddit.com/r/rust/comments/agaees/rusts_native_gui_story_it_starts_with_the_main/).

## 使用特征门

箱子通常有一些核心功能，然后是只有一些用户需要的其他功能。我认为拥有可选的依赖是个好主意。例如，xi-rope 有将 deltas 序列化到 JSON 的能力，因为我们要在 XI 编辑器中使用了它，但是对于那些只希望大字符串有效的数据结构的人来说，这是一个非常重量级的依赖。所以我们[把它变为可选的](https://github.com/xi-editor/xi-editor/issues/1197)。

另一种方法是将箱子破碎成更细的颗粒；[rand](https://crates.io/crates/rand)在这里是一个特殊的罪犯，因为在一个构建版本中，看到 10 个子箱子也并不罕见。我们发现，拥有大量的子箱子通常会使用户的生活更加困难，因为增加了确保版本兼容性的协调工作。

## 编译-时工作

另一个 Rust 构建中，经常出现箱子是[phf](https://github.com/sfackler/rust-phf)，一个完美散列的实现。这通常是一个很好的主意，也是您在二进制文件中想要的东西，但是在使用宏版本时，它还占用了大约 13 秒的编译时间（再次引入了 quote 和 syn 的两个单独副本）。\[补充：sfackler 指出，你可以使用 phf-codegen 生成 Rust 源，并签到到你的项目存储库中。]

在[unicode-normalization](https://github.com/unicode-rs/unicode-normalization/pull/37)中优化编译时间，我决定使用自定义工具构建哈希列表，并将其签入 repo。这样，只有当数据实际发生变化时（大约一年一次，如 Unicode revs），而不是每次编译时，才做。我为这项工作感到自豪，因为它将 unicode-normalization 的编译时间提高了约 3 倍，我认为这是一个重要的基础箱子。

## 测量，测量，测量

编译时间和可执行文件大小是性能的一个方面（尽管通常不如运行时速度那么明显），并且[性能文化](http://joeduffyblog.com/2016/04/10/performance-culture/)应用。适当的情况下，常用诸如[cargo-bloat](https://github.com/RazrFalcon/cargo-bloat)工具，并跟踪性能退化。

cargo-bloat 的一个好例子是[clap](https://clap.rs/2018/01/09/new-years-weight-loss/)，尽管它在今天仍然相当'重'（它在 Zola 的调试构建中，占了大约 1M， MacOS 上衡量）。

还有一个努力，让[分析二进制大小](https://www.reddit.com/r/rust/comments/c9fzyp/analysis_of_rust_crate_sizes_on_cratesio/)更加系统化。我为这些努力喝彩，如果能更清晰地看到它们，我会很高兴的。理想的，[crates.io](https://crates.io/)能包括臃肿报告，关于某种类型及它的其他元数据，尽管使用完全自动化的工具有局限性（比方说，使用 clap 的“hello world”示例可能相当不错，但若是数百个选项的示例，可能非常巨大）。

一旦你接受了膨胀，就很难把它拉回来。如果您的项目有分种计算的编译，那么人们甚至不会注意到，在编译时间有 10 秒的减速。之后，若这些代码堆积起来，’减肥‘工作的斗志，就变得越来越困难，最后编译时间上，'肥'的每一秒，都会加大‘计步器’的数值。

## 结论

随着 Druid 发展成为一个真正的 GUI，我将面临更多的此类选择，编译时间和可执行大小都将不可避免地变大。但是对膨胀的思考过程，也只是工程技术的一步。在写这篇博文的时候，我希望提高人们对这个问题的认识，给出有用的建议，并寻求社区的帮助，以尽可能地保持 Rust 生态系统的膨胀。

和所有工程一样，这是一个权衡问题。对于 druid 来说，哪一个更重要，拥有快速的编译，或者是拥有由 Rust 生态系统提供的丰富特性，比如 fluent？这没有一个明显的答案，所以我打算主要听取用户和其他开发人员的反馈。

## 讨论

Lively discussion on [Reddit](https://www.reddit.com/r/rust/comments/ctlt16/thoughts_on_rust_bloat/), [Hacker News](https://news.ycombinator.com/item?id=20761449), and [lobste.rs](https://lobste.rs/s/dxik3b/thoughts_on_rust_bloat).

版权归 [Raph Levien’s blog](https://raphlinus.github.io/) 所有。