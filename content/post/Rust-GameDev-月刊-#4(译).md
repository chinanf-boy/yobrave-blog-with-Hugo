---
title: "Rust GameDev 月刊 #4(译)"
date: 2020-01-22T09:58:47+08:00
categories: ["Rust"]
tags: ["month"]
description: "Rust-GameDev-月刊"
css: ["/css/main.css", "/css/stylesheet.css"]
series: "Rust-GameDev-月刊-中文"
draft: false
---

<style>
a { color: #b33434;}
div.inner  { background: #fbf6ec !important;}
</style>

[![](https://rust-gamedev.github.io/logo.png)](https://rust-gamedev.github.io/)

# This Month in Rust GameDev #4 - 11 月 2019

2019-12-08

[Rust](https://rust-lang.org)是一种追求三重性的系统语言：安全性、并发性和速度。这些目标与游戏开发非常一致。

我们希望为想在开发过程中，使用 Rust 的人建立一个吸引人的生态系统！想参与吗？[加入 Rust GameDev working group!](https://github.com/rust-gamedev/wg#join-the-fun)

想要加入下一期新闻？[Send us a pull request](https://github.com/rust-gamedev/rust-gamedev.github.io) 随意发送有关您自己的项目的 PR。

## Game Updates [#](#game-updates)

### [Le Train Dispatcher](http://athorus.itch.io/ltd) - Route Trains in 模拟铁路网络  [#](#le-train-dispatcher-route-trains-in-simulated-rail-network)

![Demo of Le Train Dispatcher](https://rust-gamedev.github.io/posts/newsletter-004/ltd.gif)

Le Train Dispatcher！[itch.io](http://athorus.itch.io/ltd)，[Patreon](https://patreon.com/athorus) 允许你在完全模拟的铁路网络中，对火车进行路线选择。特别注意了光信号的实际管理（block 系统，开关保护），列车物理特性和弯道追踪。

该游戏使用 Rust 编程，主要使用的箱子是：ggez，imgui 和 serde。

这第一个版本完全可玩，但是如果您想发表评论，提出您的想法或为游戏的发展做出贡献，请不要犹豫地发布一个[message](https://athorus.itch.io/ltd/community)。

独特的特点：

- 逼真的灯光信号模拟：已经进行了大量的工程工作，来对铁路信号进行逼真的管理。
- 没有碰撞：是的，放手，看到许多火车自动行驶，这很有趣。你的所有行为都要检查：不能将火车置于危险之中。
- 真实物理学
  - 每个机车或货车都有其自身的重量，驱动力或制动力，和其粘连系数。
  - 这些弯道不是简单的圆，它们的计算公式与实际道路或铁路网络中，使用的方程相同。

### [Veloren](https://veloren.net) [#](#veloren)

![Character creation screen](https://rust-gamedev.github.io/posts/newsletter-004/veloren.png)

[Veloren](https://veloren.net)是一个开放世界，开放源代码的多人体素 RPG。该游戏尚处于开发初期，但可以玩。

11 月的一些更新：

- 主存储库达到 50,000 行代码（根据[Tokei](https://github.com/XAMPPRocky/tokei)）;
- [Airshipper launcher](https://gitlab.com/veloren/airshipper) 明显改善；
- 游戏设计工作组成立；
- 改进了身份验证，玩家创建界面，资产压缩，故事和配乐；
- CI 升级，大量错误修正和内容升级。

完整的每周开发日志“本周在 Veloren ...”：[#40](https://veloren.net/devblog-40)，[#41](https://veloren.net/devblog-41)，[#42](https://veloren.net/devblog-42)，[#43](https://veloren.net/devblog-43)。

---

观看新视频["什么是 Veloren?"](https://youtube.com/watch?v=IIl271iDulY) @DoNeo 和@ RonVal4 撰写（俄语，但有英文字幕）：

[![Youtube preview img](https://rust-gamedev.github.io/posts/newsletter-004/veloren-video.png)](https://youtube.com/watch?v=IIl271iDulY)

而且，他们写了[俄语博文，关于 Veloren for dtf.ru](https://dtf.ru/indie/83725-veloren-igra-mechty)。

### [Math Defense](https://jackmott.itch.io/math-defense) [#](#math-defense)

![Math Defense screenshot](https://rust-gamedev.github.io/posts/newsletter-004/math-def.png)

[Math Defense](https://jackmott.itch.io/math-defense) by [@512Avx](https://twitter.com/512Avx)是儿童数学游戏。

> 通过加减乘除，解决数学问题击落敌方太空飞船，取得进展。多个难度级别，可以通过编辑 levels.json 文件完全自定义。随意创建自己的关卡，改变难度。

[The source code is available here](https://github.com/jackmott/mathblaster)。

### [Sulis: 基本资源管理](https://sulisgame.com/dev-modding/9-dev/15-managing-resources) [#](#sulis-basic-resource-management)

![Sulis logo](https://rust-gamedev.github.io/posts/newsletter-004/sulis_logo.png)

[Sulis](https://sulisgame.com/dev-modding/9-dev/15-managing-resources)是一款角色扮演游戏（RPG），具有基于回合的战略战斗，深度角色定制和引人入胜的故事情节。

这个月，一篇文章["Basic Resource Management"](https://sulisgame.com/dev-modding/9-dev/15-managing-resources)发表：

> 在开发 Sulis 时，主要目标之一是，简便而强大的改装功能。为此，几乎所有资源都是通过简单的 YAML 文件定义的。这个想法是，任何拥有文本编辑器的人，都可以轻松创建新资源或编辑现有资源。但是，这立即提出了如何在游戏状态内管理所有这些资源的问题。在 Sulis 中，这是通过中央资源管理器处理的。

尽管是以 Sulis 作为示例的主体，但本文几乎适用于任何游戏。

另外，项目（游戏本身及其源代码）[被 gamefromscratch.com 评估](https://youtube.com/watch?v=gvibvDiVzn8) \[[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/du48iw/sulis_an_rpg_created_using_rust_gamesfromscratch)]。

### [Paddlers: 与 Rust 和分布式系统，一起快乐成长](https://www.jakobmeier.ch/blogging/Paddlers_3.html) [#](#paddlers-fun-with-rust-and-distributed-systems)

[![Paddlers architecture scheme](https://rust-gamedev.github.io/posts/newsletter-004/paddlers-arch.png)](https://www.jakobmeier.ch/blogging/Paddlers_3.html)

[Paddlers](https://github.com/jakmeier/paddlers-browser-game)是一款多人实时策略浏览器游戏，旨在使所有 Paddland 的鸭子都开心。

在[demo.paddlers.ch](http://demo.paddlers.ch)观看现场演示（测试用户的用户名是“ Tester”，密码是“ 1”）。

本月发布了第三个 devlog：["#3: Fun with Rust and distributed systems"](https://www.jakobmeier.ch/blogging/Paddlers_3.html)。它概述了项目的体系结构和实现。

### [Antorum: Drop Tables](https://dooskington.com/dev-log/11) [#](#antorum-drop-tables)

![screenshot: battlefield after slaying some chonkrats](https://rust-gamedev.github.io/posts/newsletter-004/antorum.jpeg)

[Antorum](https://dooskington.com)是一款多人 RPG，玩家可以在其中建立自己的角色，并与岛上日益增长的威胁作斗争。游戏服务器是可信的，用 Rust 编写，而客户端则用 Unity / C＃编写。

本月，@ dooskington 发布了[11th devlog "Drop Tables"](https://dooskington.com/dev-log/11)关于处理怪物战利品的掉落格系统的实现。

### [Recall Singularity: 11 月进程](https://medium.com/@recallsingularity/recalling-nov-2019-236cdf9c0a8a) [#](#recall-singularity-november-progress)

[![Demo of the basic ship collision](https://rust-gamedev.github.io/posts/newsletter-004/recall-sing.gif)](https://youtube.com/watch?v=AoPSAoqmTCk)

^_基本的船舶碰撞演示。_

[Tom Leys](https://twitter.com/RecallSingular1)正在开发有关设计自主工厂船只和车站的“The Recall Singularity”游戏，本月他们发布了一个 devlog 帖子：["Recalling Nov 2019"](https://medium.com/@recallsingularity/recalling-nov-2019-236cdf9c0a8a)。

你也可以[看视频版](https://youtube.com/watch?v=AoPSAoqmTCk)。

摘要：

- 用于移动船只或玩家的基本网络输入；
- 船舶物理，包括碰撞；
- [Twich 直播 - 开发过程](https://twitch.tv/recallsingularity);
- 从 Rust（规格）到 Godot 同步化的更通用方法。

### [Slavic Castles](https://leinnan.itch.io/slavic-castles) [#](#slavic-castles)

![Just a screenshot of some battle](https://rust-gamedev.github.io/posts/newsletter-004/castles.jpg)

[Slavic Castles](https://leinnan.itch.io/slavic-castles)是一款纸牌游戏，灵感来自[Arcomage](https://en.wikipedia.org/wiki/Arcomage)，用 [ggez](https://github.com/ggez/ggez)/[good-web-game](https://github.com/not-fl3/good-web-game) Rust 写的。

你可以[在线](http://leinnan.ayz.pl/ukw/slavic_castles/index.html)玩耍或上[itch.io](https://leinnan.itch.io/slavic-castles)。

[源代码在此](https://github.com/Leinnan/slavic_castles)。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/dsm2dh/card_game_inspired_by_arcomage)_

### [Tennis Academy](https://iolivia.me/posts/6-months-of-rust-game-dev) [#](#tennis-academy)

![robots demo](https://rust-gamedev.github.io/posts/newsletter-004/tennis-academy.gif)

[@oliviff](https://twitter.com/oliviff)已发布[v0.0.5](https://twitter.com/oliviff/status/1192178573488070659)..[v0.1.0](https://twitter.com/oliviff/status/1199073510443945985)版本的[Tennis Academy](https://iolivia.me/posts/6-months-of-rust-game-dev)：

- ⏰ 玩家有耐心，无聊时离开；
- ✨ 带有文字效果的分数乘数；
- 🥇 得/失状态；
- 🤖 若没有更多的人了，机器人已经接管了！
- 🎨 新的调色板和图形，新的按钮和 UI（使用[Iced](https://github.com/hecrj/iced)）。

### [Twenty Asteroids](https://pum-purum-pum-pum.itch.io/twenty-asteroids) [#](#twenty-asteroids)

[![space ship destroys enemies and asteroids with plasma beams](https://rust-gamedev.github.io/posts/newsletter-004/asteroids-demo.gif)](https://twitter.com/VladZhukov0/status/1197855075269521409)

该游戏现已正式命名为“二十个小行星”。

[@VladZhukov0](https://twitter.com/VladZhukov0)已发表[短视频： 更新/调整 gameplay](https://twitter.com/VladZhukov0/status/1197855075269521409)。

### [Erasterra](https://coffejunkstudio.itch.io/erasterra) [#](#erasterra)

![Flying cars](https://rust-gamedev.github.io/posts/newsletter-004/erasterra.png)

[Erasterra](https://coffejunkstudio.itch.io/erasterra)是一款地形赛车游戏。它使用 Rust 来实现配对服务器。

> 在 Rust 中实现 matchmaker 很有意义，因为它被设计为长期运行的服务，因此可能不会崩溃。Rust 只是使实现非崩溃软件变得更加容易 🙌

### [Garden](https://epcc.itch.io/garden) [#](#garden)

![Garden screenshot: ruins, trees and water in craters](https://rust-gamedev.github.io/posts/newsletter-004/garden.jpeg)

[@logicsoup](https://twitter.com/logicsoup)发了一系列更新，其中包括：

- [废墟的生成，是通过对建筑物"假轰炸" ](https://twitter.com/logicsoup/status/1192825303338536960)，
- [提升地质物理](https://twitter.com/logicsoup/status/1196195909119496199)，
- [craters](https://twitter.com/logicsoup/status/1195461536275415040)。

### [Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus/) [#](#robo-instructus)

![A screenshot of a later game level](https://rust-gamedev.github.io/posts/newsletter-004/robo.jpeg)

[Alex Butler](https://twitter.com/bigabgames)继续完善他们的“[Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus/)“ 游戏;[1.15, 1.16, and 1.17 versions were released](https://steamcommunity.com/app/1032170/allnews)：Rust 1.39，错误修正和更好的翻译。

[你可以帮忙翻译翻译](https://github.com/big-ab-games/robo-instructus-translation#about)。

### GitHub Game Off 2019 [#](#github-game-off-2019)

![gameoff logo](https://rust-gamedev.github.io/posts/newsletter-004/gh-gameoff.gif)

[GitHub's Game Off](https://itch.io/jam/game-off-2019)是一年一度的，长达一个月的 game jam（制作游戏的黑客马拉松）。今年的主题是["leaps and bounds"](https://github.blog/2019-11-01-game-off-2019-theme-announcement)。

- ["TopDown"](https://fedorgames.itch.io/ggoff2019) by [@fedor_games](https://twitter.com/fedor_games)用[他们自己的非公开游戏引擎](https://twitter.com/fedor_games/status/1192989017840730112)（[source code](https://github.com/not-fl3/gameoff-2019)）。

  ![TopDown: gameplay sample](https://rust-gamedev.github.io/posts/newsletter-004/fedor-defense.gif)

- ["Compact Space"](https://puppetmaster.itch.io/compact-space) by [@fischspiele](https://twitter.com/fischspiele) 使用 specs 和 Tetra（[source code](https://github.com/puppetmaster-/compact-space)）。

  > 你能活多久？

  ![Compact-Space screenshot: asteroids, ship, aliens](https://rust-gamedev.github.io/posts/newsletter-004/compact-space.png)

- “evo”的作者[@ZappedCow](https://twitter.com/)用 Tetra（[source code](https://github.com/jlauener/evo)）。

  > 一个生活/环境模拟器，里面有一些 rogue-like 的东西。

  ![evo: demo](https://rust-gamedev.github.io/posts/newsletter-004/rogue-sim.gif)

### Amethyst Games [#](#amethyst-games)

- [Azriel](https://azriel.im) 发表了["超棒 UI"](https://azriel.im/will/2019/11/08/that-looks-good-on-ui) devlog。

  > 新功能：
  >
  > - 可以定义动画菜单和背景。
  > - 玩家名称可以在控制器配置中指定。
  > - 游戏结束时，显示赢家。
  >
  > 在幕后，进行了以下代码维护：
  >
  > - 将所有测试转移到一个单独的箱子中 —— 速度提高了 1.9 倍，磁盘使用量减少了 65%。
  > - 资产被加载到单独的资产组件中 —— 更容易在不同类型的对象之间共享逻辑。
  > - 舞台的资产加载完成，为禁用某些舞台做准备。

  ![Will: Winner Status Demo](https://rust-gamedev.github.io/posts/newsletter-004/will_winner_status.png)

- [@takeryo_eeic](https://twitter.com/takeryo_eeic) 将他们的六边形游戏命名为“征服”，[添加了一个主菜单](https://twitter.com/takeryo_eeic/status/1195263050896429057)，和[公开了一个视频，关于新地图生成器和地图滚动](https://twitter.com/takeryo_eeic/status/1192407134245228546)。

  ![Main menu demo](https://rust-gamedev.github.io/posts/newsletter-004/conquest.png)

## 库 & 工具更新  [#](#library-tooling-updates)

### [Memory Arena](https://kooparse.com/blog/memory-arena) [#](#memory-arena)

![how entities/handles are related to each others](https://rust-gamedev.github.io/posts/newsletter-004/mem-arena.jpg)

[@kooparse](https://twitter.com/kooparse) 发了[一个帖子：关于实现一个 quick momery arena](https://kooparse.com/blog/memory-arena)。

> 对于我的游戏，我决定将几乎所有实体存储在一大块内存中，程序启动时就只分配一次内存。我使用这种技术有三个原因。首先，我想要对游戏中的内存管理方式进行全面而精确的控制，其次，我想要更好的数据局部性，以便增加来自 cpu 的缓存命中率，最后，在运行时，要求操作系统分配更多内存是缓慢的。

### [wgpu v0.4](https://reddit.com/r/rust_gamedev/comments/drcje5/wgpu04_is_out) [#](#wgpu-v0-4)

![some webgpu logo](https://rust-gamedev.github.io/posts/newsletter-004/webgpu.png)

[wgpu](https://github.com/gfx-rs/wgpu)是 Rust 中的一个库，用于解决大多数图形和计算需求。

wgpu-rs 0.4 箱子发布。wgpu 基于[gfx-hal-0.4](https://reddit.com/r/rust/comments/dm89t2/gfxhal_version_04_release)，并包含来自[上一篇博文](https://gfx-rs.github.io/2019/10/01/update.html)的变化;

一些值得注意的补充是：

- 适当的 Windows7 支持；
- 支持同一 GPU 服务器上的多个客户端；
- 精简 Rendy 依赖（内存和描述符）；
- 新的 skybox 示例。

Lyon 有该版本[更新的示例](https://github.com/nical/lyon/pull/496)，显示如何在`wgpu`画矢量图。

还有，`wgpu`现在是 Gecko 代码库的一部分，用于支持正在出现的 WebGPU 实现。

### Book: [学习 Luminance](https://rust-tutorials.github.io/learn-luminance) [#](#book-learn-luminance)

[luminance](https://github.com/phaazon/luminance-rs)是一个类型安全、类型级别和无状态的 Rust 图形框架。

这个月，[@phaazon](https://github.com/phaazon)发布了["Learn Luminance"](https://rust-tutorials.github.io/learn-luminance)一书。Luminance 的 wiki 被弃用了，这本书现在成为了新用户使用 Luminance 的重点参考，也成为了那些想尝试 Luminance，但对渲染一无所知的人的参考。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/e3662k/learn_luminance_the_book)_

---

顺便说一句，[@resinten 正使用 luminance，搞着一个游戏](https://twitter.com/resinten/status/1194825522418765826):

[![space ship pew pew](https://rust-gamedev.github.io/posts/newsletter-004/luminance-space-game.gif)](https://twitter.com/resinten/status/1194825522418765826)

### [Pixels](https://github.com/parasyte/pixels) [#](#pixels)

![Pixels logo](https://rust-gamedev.github.io/posts/newsletter-004/pixels.png)

[Pixels](https://github.com/parasyte/pixels) by [@kodewerx](https://twitter.com/kodewerx)是一种基于 wgpu 的小型'硬件加速'像素帧缓冲器。它应该用于模拟器，软件渲染，二维动画和游戏原型。

查看[URLO 通知贴文](https://users.rust-lang.org/t/announcing-pixels-hardware-accelerated-pixel-frame-buffer/34326/1).

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/drunej/announcing_pixels_hardwareaccelerated_pixel_frame)_

### [Metropolis](https://github.com/GuyL99/metropolis) [#](#metropolis)

[metropolis](https://github.com/GuyL99/metropolis) by [@GuyL99](https://github.com/GuyL99)是一个高级图形渲染器，具有易于使用的功能。

> 这个箱子应该使图形编程容易，功能如矩形，椭圆，线，文本，等等，它的速度在一台辣鸡电脑上，有 60-120 FPS 。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/e3lfr7/new_graphics_renderer_metropolis)_

### [skulpin](https://github.com/aclysma/skulpin) [#](#skulpin)

[![physics demo video](https://rust-gamedev.github.io/posts/newsletter-004/skuplin.jpeg)](https://www.youtube.com/watch?v=El99FgGSzfg)

^点击查看[a demo video](https://www.youtube.com/watch?v=El99FgGSzfg).

[skulpin](https://github.com/aclysma/skulpin) by [@aclysma](https://twitter.com/aclysma)结合 Vulkan 和[Skia](https://skia.org)。

### [ultraviolet](https://github.com/termhn/ultraviolet) v0.2 [#](#ultraviolet-v0-2)

[ultraviolet](https://github.com/termhn/ultraviolet) v0.2 发布 by [@fu5ha](https://twitter.com/fu5ha)。此版本引入[Bivectors](https://en.wikipedia.org/wiki/Bivector)以及[Rotors](<https://en.wikipedia.org/wiki/Rotor_(mathematics)>) 和提高了可用性。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/dt9zhz/ultraviolet_02_released)_

---

![rayn fractal render example](https://rust-gamedev.github.io/posts/newsletter-004/rayn-render.png)

还有，[Rayn v0.3 最近也发布了](https://reddit.com/r/rust/comments/dxjn64/rayn_03_a_major_update_with_deeply_integrated/) —— 它是一个基于 CPU 的路径跟踪渲染器，专注于渲染 SDFs（特别 fractals-分形）（基于[ultraviolet](https://github.com/termhn/ultraviolet) ）。

### [Mun v0.1](https://mun-lang.org/blog/2019/11/11/release-mun-v0-1-0) [#](#mun-v0-1)

![Mun logo](https://rust-gamedev.github.io/posts/newsletter-004/mun_logo.png)

[Mun](https://mun-lang.org)是 gamedev 的一种脚本语言，专注于 Rust 编写的快速迭代时间。

> 作为一种语言，Mun 还远未准备好生产，但是这个版本让您看到了原生支持的热重新加载，未来的样子。这个版本的目的是展示我们的进展，并收集那些勇敢的灵魂愿意尝试在这个早期阶段的反馈。

要开始，请阅读[the Mun Book](https://docs.mun-lang.org)看一看[Rust examples](https://github.com/mun-lang/mun/tree/master/crates/mun_runtime/examples).

对于 Mun 的完整路线图，请查看[Trello board](https://trello.com/b/ZcMiREnC/mun-roadmap).

_讨论：[/r/rust](https://reddit.com/r/rust/comments/duw3ls/mun_v010_released)_

### [glsl v3.0](https://reddit.com/r/rust/comments/dw87um/glsl30_official_release_announcement) [#](#glsl-v3-0)

[glsl](https://crates.io/crates/glsl)是将 GLSL 格式的源码，解析为类型化 AST 的箱子。箱子公开了几个方法、类型和模块，对 AST 执行转换，包括输出 GLSL、SPIR-V 生成和使用可能的立即可访问 AST。

[glsl v3.0](https://reddit.com/r/rust/comments/dw87um/glsl30_official_release_announcement)是由[@phaazon](https://github.com/phaazon)发布的:

- CPP 指令（例如。`#line`, `#pragma`, `#ifdef`，等等）现在都已实现；
- 改进了深度嵌套表达式的解析；
- 多行注释 () 现在作为一项最大的努力得到了支持；
- 其他错误修复。

### [SPIR-Q](https://github.com/PENGUINLIONG/spirq-rs) [#](#spir-q)

![example output](https://rust-gamedev.github.io/posts/newsletter-004/spir-q.png)

[SPIR-Q](https://github.com/PENGUINLIONG/spirq-rs)是一个轻量级的[SPIR-V](https://en.wikipedia.org/wiki/Standard_Portable_Intermediate_Representation)查询库。

> SPIR-Q\<…>对于动态图形/计算管道构建、着色器调试等非常有用。SPIR-Q 目前与 SPIR-V 1.5 的一个子集兼容，具有大多数图形功能，但没有涉及 OpenCL 内核功能。顺便说一下，SPIR-Q 目前只依赖于 Rust 标准库。

_讨论：[/r/rust](https://reddit.com/r/rust_gamedev/comments/e1ft1k/spirq_spirv_metadata_extraction_library)_

### [Iced: 测试版本](https://reddit.com/r/rust/comments/e1jckj/iced_a_crossplatform_gui_library_new_release) [#](#iced-beta-version)

![Iced demo](https://rust-gamedev.github.io/posts/newsletter-004/iced.gif)

[Iced](https://github.com/hecrj/iced)是一个与渲染器无关的 GUI 库，主要关注简单性和类型安全性。

这个月，一个[Iced 测试版本 was released](https://reddit.com/r/rust/comments/e1jckj/iced_a_crossplatform_gui_library_new_release)。最重要的新功能是：

- 一个[初级渲染器](https://github.com/hecrj/iced/pull/22)建立在[wgpu](https://github.com/gfx-rs/wgpu)之上;
- 由[winit](https://github.com/rust-windowing/winit)支撑一个 windowing shell;
- 一个[web runtime](https://github.com/hecrj/iced/pull/17)，它基于[dodrio](https://github.com/fitzgen/dodrio)（试一试[iced.rs](https://iced.rs));
- 头等[async actions](https://github.com/hecrj/iced/pull/62)，leveraging futures；
- 新的小部件，比如[文本输入](https://github.com/hecrj/iced/pull/37)以及[可滚动](https://github.com/hecrj/iced/pull/35)。

还有，[Cryptowatch 现在赞助 Iced 的开发!](https://blog.cryptowat.ch/2019/11/25/sponsoring-rust-gui-library-iced)

### Embark's Stockholm Rust Meetup and Newsletter [#](#embark-s-stockholm-rust-meetup-and-newsletter)

![Embark logo white on black](https://rust-gamedev.github.io/posts/newsletter-004/embark.png)

视频来自[Embark](https://embark.rs)斯德哥尔摩 Rust 会议：

- ["一个 Rust 和 C++ 的邪恶合体， in physx-rs"](https://youtube.com/watch?v=RxtXGeDHu0w) - [Tomasz Stachowiak](https://twitter.com/h3r2tic) Embark 的高级软件工程师，在创建 physx-rs 开源项目期间，详细介绍了结合 RIST 和 C++代码的经验。\[[/r/rust](https://reddit.com/r/rust/comments/du91t1/an_unholy_fusion_of_rust_and_c_in_physxrs)];

- ["Rust, Open Source, Game Dev"](https://youtube.com/watch?v=lpOg2nl3kr0) - [Jake Shadle](https://twitter.com/Ca1ne)解释 Rust、开源和游戏开发如何结合在一起\[[/r/rust](https://reddit.com/r/rust/comments/du9g5d/rust_open_source_game_dev_stockholm_rust_meetup)];

还有，[Embark 开始了一个新时讯](https://embark.dev/#newsletter)。看看第一期["11/08/2019 - Rust, Blender, Hacktoberfest, and more: Newsletter 001 from Embark"](http://eepurl.com/gI3v89).

### [创新码路 in Rust with Nannou](https://dev.to/deciduously/creative-coding-in-rust-with-nannou-1lbl) [#](#creative-coding-in-rust-with-nannou)

![Nannou example screenshot](https://rust-gamedev.github.io/posts/newsletter-004/nannou.png)

一篇初级教程文章，教授如何使用[nannou](https://nannou.cc) 这个创造性的编码框架。

### [RLTK](https://github.com/thebracket/rltk_rs) & [Rust Roguelike Tutorial](http://bfnightly.bracketproductions.com/rustbook) [#](#rltk-rust-roguelike-tutorial)

![Dungeon generation demo](https://rust-gamedev.github.io/posts/newsletter-004/rogulike-demo.gif)

[The Roguelike Tutorial](http://bfnightly.bracketproductions.com/rustbook) by [@blackfuture](https://patreon.com/blackfuture)包括近 60 章现在和继续增长！

11 月的一些更新：

- 回溯/持续 地图，
- 动态彩色照明，
- 城镇门户，以及一般的远程传送（包括选择性地影响 NPC），
- 作弊模式（用于测试以后的地图）。

### [nes-rust](https://github.com/takahirox/nes-rust) - WASM [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) Emulator [#](#nes-rust-wasm-nes-emulator)

[![Screenshot of the NES emulator](https://rust-gamedev.github.io/posts/newsletter-004/nes-wasm.gif)](https://raw.githack.com/takahirox/nes-rust/master/index.html)

[nes-rust](https://github.com/takahirox/nes-rust) by [@superhoge](https://twitter.com/superhoge) - [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System)（Famicom） Rust 编写的模拟器，编译成 WASM 到网络上。

查看[online Demo](https://raw.githack.com/takahirox/nes-rust/master/index.html)。

### Amethyst [#](#amethyst)

![Amethyst logo](https://rust-gamedev.github.io/posts/newsletter-004/amethyst-logo.png)

- [Blaine Price](https://blaineprice.me)正在制作一个“十佳”游戏，并分享了一个["Rustlang Up Some Grub at The Ten Top"](https://blaineprice.me/posts/rustlang-up-some-grub) 关于依赖图的 devlog；

  ![food truck](https://rust-gamedev.github.io/posts/newsletter-004/food_truck_cropped.jpg)

- ["\[RFC Discussion\] Legion ECS Evolution"](https://github.com/amethyst/rfcs/issues/22) \[[/r/rust](https://reddit.com/r/rust/comments/duki8d/amethyst_legion_ecs_rfc), [forum](https://community.amethyst.rs/t/legion-ecs-discussion/965)];

- [@mvlabat](https://github.com/mvlabat) 发了 ["我们如何提升惯用着色器用户经验?"](https://community.amethyst.rs/t/how-can-we-improve-custom-shaders-user-experience/1230);

- ["nalgebra 和 math 在 Amethyst 的未来"](https://community.amethyst.rs/t/future-of-nalgebra-and-math-in-amethyst/1228)讨论；

- ["Rendy 的质疑"](https://community.amethyst.rs/t/skepticism-about-rendy/1221)讨论；

- [A thread by @obiwanus 关于 long link time](https://community.amethyst.rs/t/obiwanuss-long-link-time-feedback/1207);

## Popular Workgroup Issues in Github [#](#popular-workgroup-issues-in-github)

- [#50 "Linking Time"](https://github.com/rust-gamedev/wg/issues/50);
- [#51 "Using wasm-bindgen for games"](https://github.com/rust-gamedev/wg/issues/51);
- [#68 "Modding"](https://github.com/rust-gamedev/wg/issues/68);
- [#69 "输入控制处理"](https://github.com/rust-gamedev/wg/issues/69);
- [#71 "概念箱子求证: Simplistic Bump Allocator"](https://github.com/rust-gamedev/wg/issues/71);
- [#73 "Membership Listing"](https://github.com/rust-gamedev/wg/issues/73);

## Meeting Minutes [#](#meeting-minutes)

[查看所有的会面 issues](https://github.com/rust-gamedev/wg/issues?q=label%3Ameeting)包括书面记录或[加入下一 meeting](https://github.com/rust-gamedev/wg#join-the-fun)。

## 请求帮助  [#](#requests-for-contribution)

- [@kyren 正寻找一个新的维护者 for "rlua"](https://reddit.com/r/rust/comments/dyhylu/luster_lua_vm_in_rust_this_project_is_currently);
- [添加资源 (图形, 关卡, 声效) to Le Train Dispatcher](https://itch.io/t/616119/contributing);
- [/r/rust: "Need help porting steam libraries to rust"](https://reddit.com/r/rust/comments/diuqg7/need_help_porting_steam_libraries_to_rust);
- [Embark's open issues](https://github.com/search?q=user:EmbarkStudios+state:open) ([embark.rs](https://embark.rs));
- [winit's "Good first issue" 和 “help wanted” issues](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22status%3A+help+wanted%22+label%3A%22Good+first+issue%22);
- [gfx-rs's "contributor-friendly" issues](https://github.com/gfx-rs/gfx/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor-friendly);
- [wgpu's "help wanted" issues](https://github.com/gfx-rs/wgpu-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22);
- [luminance's "low hanging fruit" issues](https://github.com/phaazon/luminance-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22low+hanging+fruit%22);
- [ggez's "good first issue" issues](https://github.com/ggez/ggez/labels/%2AGOOD%20FIRST%20ISSUE%2A);
- [Veloren's "beginner" issues](https://gitlab.com/veloren/veloren/issues?label_name=beginner);
- [Amethyst's "good first issue" issues](https://github.com/amethyst/amethyst/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22);

## Bonus [#](#bonus)

只是一个有趣的 Rust 游戏开发从过去的链接。:)

[![Pascal Penguin logo](https://rust-gamedev.github.io/posts/newsletter-004/penguin.png)](https://youtube.com/watch?v=EgFr73AUwps)

^ _单击以查看[发布的预告片](https://youtube.com/watch?v=EgFr73AUwps)_

["Adventures of Pascal Penguin"](http://luduminis.com/pascal/about/) by [Matthew Michelotti](http://luduminis.com)是一款基于 2D 网格的益智游戏，其关卡围绕滑冰设计。

> 当你试图到达每个关卡的末端时，推块并从保险杠上反弹。抓住隐形球穿过固体物体。在沸腾的熔岩和冰冷的水上建立一条安全的道路。有 40 个关卡分布在 5 个区域。你能全部完成吗？

使用[Gate](https://github.com/SergiusIW/gate)游戏引擎。

---

今天都是新闻，谢谢你的阅读！

订阅[@rust_gamedev on Twitter](https://twitter.com/rust_gamedev)或者[/r/rust_gamedev subreddit](https://reddit.com/r/rust_gamedev)如果你想得到新消息！

**本帖讨论**: [/r/rust](https://reddit.com/r/rust/comments/e7xdwf/this_month_in_rust_gamedev_4_november_2019), [twitter](https://twitter.com/rust_gamedev/status/1203745439243223044).

[](https://rust-gamedev.github.io/posts/newsletter-004/)

## Rust Game Development Working Group

了解 Rust 游戏开发工作组的最新进展和最新进展。

- [Github (rust-gamedev)](https://github.com/rust-gamedev "rust-gamedev")
- [Twitter (rust_gamedev)](https://twitter.com/rust_gamedev "rust_gamedev")
- [Discord (#wg-gamedev)](https://discord.gg/j6QJsMd "Discord")
- [RSS feed](https://rust-gamedev.github.io/feed.xml "RSS")
