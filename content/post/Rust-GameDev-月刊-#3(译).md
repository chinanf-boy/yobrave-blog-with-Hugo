---
title: "Rust GameDev 月刊 #3(译)"
date: 2020-01-21T12:38:01+08:00
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

# [Rust GameDev #3 月刊 - 10 月 2019 ](https://rust-gamedev.github.io/posts/newsletter-003/)

2019 年 11 月 7 日

欢迎来到 Rust GameDev 工作组月刊，第三期。

[Rust](https://rust-lang.org)是一种追求三重性的系统语言：安全性、并发性和速度。这些目标与游戏开发非常一致。

我们希望为想在开发过程中，使用 Rust 的人建立一个吸引人的生态系统！想参与吗？[加入 Rust GameDev working group!](https://github.com/rust-gamedev/wg#join-the-fun)

## 游戏更新  [#](#game-updates)

### [Sulis](https://sulisgame.com) - a Turn-Based RPG [#](#sulis-a-turn-based-rpg)

![chest and inventory with items](https://rust-gamedev.github.io/posts/newsletter-003/sulis-inventory.png)

[Sulis](https://sulisgame.com)是一款角色扮演游戏（RPG），具有回合制、战略战斗、深度角色定制和引人入胜的故事情节。游戏从一开始，就以改造和定制的内容角度，进行考虑。当前支持 Windows 和 Linux 平台。

该游戏目前是完全可玩的，包括 the first act of Twin Expanse，一个经典游戏类似的老式 RPG 战役，如*巴尔杜尔之门*，但混合了现代元素，如*神界原罪*和*永恒之柱*。

核心游戏引擎以及战役仍在大力开发中。鼓励用户[给出 bugs issues](https://github.com/Grokmoo/sulis/issues)，功能请求或任何其他反馈。

![flaming fingers spell demonstration](https://rust-gamedev.github.io/posts/newsletter-003/sulis-battle.png)

特征：

- 跨平台原生二进制文件，当前[构建，供给 Windows 和 Linux](https://github.com/Grokmoo/sulis/releases)
- 多个战役，超过 8 小时的游玩时间，包括手工制作和过程内容。
- 一个详细和充分认知的世界和故事 —— 看看[Lore page](https://sulisgame.com/lore)。
- 设计时考虑到了改造 —— 虽然在这方面还有更多的工作要做。
- 一个强大的二维图形引擎，可缩放，可扩展的用户界面，HiDPI 支持，和一个可交换的图形后端。
- 在非常温和的硬件，甚至软件渲染器上运行（尽管帧速率降低）。

![ability tree gui](https://rust-gamedev.github.io/posts/newsletter-003/sulis-abilities-tree.png)

GPLv3 许可证[的源代码在 GitHub](https://github.com/Grokmoo/sulis)。Sulis 是用 Rust 编写的，脚本使用 Lua，大多数数据文件使用 YAML 格式。

_讨论：[/r/rust_gamedev](https://www.reddit.com/r/rust_gamedev/comments/din01e/sulis_a_turnbased_rpg_written_in_rust_by_ugrokmoo)_

### [Veloren](https://veloren.net) [#](#veloren)

![Bumpy terrain with a rivers and trees](https://rust-gamedev.github.io/posts/newsletter-003/veloren.png)

[Veloren](https://veloren.net)是一个开放的世界，开源的多人体素 RPG。游戏处于开发的早期阶段，但可以玩。

本月[发布了 v0.4 版本](https://veloren.net/devblog-37)以及[玩家调查问卷发布](https://veloren.net/devblog-36/#player-survey).

10 月份的一些改进：

- 大量的错误修复和优化；
- 改善侵蚀、河流和水流物理；
- 用户界面改进；
- 改进游戏故事；
- 0.5 开发的 RFC procedure。

新视频：["Cities, dungeons and other structures"](https://www.youtube.com/watch?v=iwP7SXdWcTg) \[[/r/veloren](https://reddit.com/r/Veloren/comments/ddp0n9/veloren_cities_dungeons_and_other_structures)].

完整的每周节目“本周在 Veloren…”：[#36](https://veloren.net/devblog-36), [#37](https://veloren.net/devblog-37), [#38](https://veloren.net/devblog-38), [#39](https://veloren.net/devblog-39).

还有，查看[/r/veloren subreddit](https://reddit.com/r/Veloren)，相当活跃。

### [PF Sandbox](https://github.com/rukai/PF_Sandbox) [#](#pf-sandbox)

![Exported models with textureas and skeletal animations](https://rust-gamedev.github.io/posts/newsletter-003/pf-sandbox.jpg)

[PF Sandbox](https://github.com/rukai/PF_Sandbox) by [@rukai](https://twitter.com/thisIsRukai)是一个平台 fighter 沙盒功能：游戏斗士和舞台编辑器，重播，和教学工具。

这个月，[exporting and hot-reloading assets from blender](https://twitter.com/thisIsRukai/status/1180477120113340417), [freelook camera](https://twitter.com/thisIsRukai/status/1182945899485335552), [textures](https://twitter.com/thisIsRukai/status/1182945899485335552)，和[animations](https://twitter.com/thisIsRukai/status/1188261107124727808)已添加到项目中。

### [Antorum](https://dooskington.com) [#](#antorum)

![Antorum screenshot: a few human characters, a few rats and an inventory UI](https://rust-gamedev.github.io/posts/newsletter-003/antorum.jpeg)

[Antorum](https://dooskington.com)是一种多人角色扮演游戏，玩家可以在游戏中，塑造自己的角色，并对抗岛上日益增长的威胁。游戏服务器是可信的，用 Rust 编写，而客户端是用 Unity/C#编写的。

这个月，[@dooskington](https://twitter.com/dooskington)发表了一系列文章：

- [#6 "Items And Inventory"](https://dooskington.com/dev-log/6);
- [#7 "Grubbnet"](https://dooskington.com/dev-log/7);
- [#8 "The Editor"](https://dooskington.com/dev-log/8);
- [#9 "The Editor, Pt. 2"](https://dooskington.com/dev-log/9);
- [#10 "Terrain Sync"](https://dooskington.com/dev-log/10)。

---

如[7th devlog](https://dooskington.com/dev-log/7)所诉，是“[grubbnet](https://github.com/Dooskington/grubbnet)箱子已发布。

它是用于编写联网应用程序和游戏的，轻量级 TCP 客户端/服务器。它提取套接字代码，跟踪连接，并通过一系列不错的事件将所有内容返回给开发人员。除了处理网络事件（例如，客户端连接和断开连接）外，处理传入数据包，也很容易在传入数据包队列上，获取迭代器。

这是 Antorum 游戏服务器在后台使用的同一网络箱子。

### [Ferris Fencing](http://ferrisfencing.org) [#](#ferris-fencing)

![Two crabs fencing on a 1D map](https://rust-gamedev.github.io/posts/newsletter-003/ferris-fencing.png)

[Ferris Fencing](http://ferrisfencing.org)是一场现场锦标赛，其中由玩家编程的机器人，在[RISC-V](https://riscv.org)虚拟机相互打斗。这是一个[CKB-VM](https://github.com/nervosnetwork/ckb-vm)展示会，这是用 Rust 编程语言编写的 RISC-V 指令集的简单实现。

[Here're the rules](http://www.ferrisfencing.org/#rules)。

Ferris Fencing 锦标赛尚未举行，但是 fencers 可能会开始建造他们的机器人，并在本地进行测试。说明在[GitHub repo](https://github.com/brson/ferris-fencing)。

### [Tennis Academy](https://iolivia.me/posts/6-months-of-rust-game-dev) v0.03 & v0.0.4 [#](#tennis-academy-v0-03-v0-0-4)

![4 courts with players](https://rust-gamedev.github.io/posts/newsletter-003/tennis-academy.png)

[@oliviff](https://twitter.com/oliviff)已发布[v0.0.3](https://twitter.com/oliviff/status/1185576890746265600)和[v0.0.4](https://twitter.com/oliviff/status/1185945850771660805) 为[Tennis Academy](https://iolivia.me/posts/6-months-of-rust-game-dev) 更新：

- 🏘️ 改善了接待区排队
- 🎆 玩家消失时的定时效果
- ⛹️ 单击以从玩家收集硬币
- 👟 屏幕上有 4 个球场
- ⛹️ 为玩家搭配的 T 恤
- 💯 现在，钱有分
- 🚥 球场 + T 恤配色逻辑
- 📊 分数倍数

### [piano-rs](https://github.com/ritiek/piano-rs) [#](#piano-rs)

![Virtual piano keyboard](https://rust-gamedev.github.io/posts/newsletter-003/piano.png)

[piano-rs](https://github.com/ritiek/piano-rs)是使用 UDP 套接字的多人钢琴，可以在终端中，使用计算机键盘进行演奏。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/de28rz/a_multiplayer_piano_game_for_the_terminal)_

### [Will it dissolve?](https://puppetmaster.itch.io/dissolve) [#](#will-it-dissolve)

![Dissolve gameplay demo](https://rust-gamedev.github.io/posts/newsletter-003/dissolve.gif)

["Will it dissolve?"](https://puppetmaster.itch.io/dissolve)是一款为["Open Jam 2019"](http://openjam.io)准备的小型益智游戏，在那里您必须准备好关卡，以便将来自动转换和分解它。

借助[Tetra 引擎](https://github.com/17cupsofcoffee/tetra)。[源代码](https://github.com/puppetmaster-/will_it_dissolve)。

### [Garden Devlog: October](http://cyberplant.xyz/posts/october) [#](#garden-devlog-october)

![Garden screenshot: a tree, leaves, water and ruins](https://rust-gamedev.github.io/posts/newsletter-003/garden.jpeg)

[Garden](https://epcc.itch.io/garden)是一款以生长逼真的植物为中心的，即将推出的游戏。

自上次开发日志以来，进行了以下更改：

- 添加了改良花。
- 植物模拟代码即将完成，开发人员将能够很快开始添加新物种。
- 程序废墟的产生得到了改善：不再有漂浮的混凝土块。

[Watch the video demo here](https://twitter.com/logicsoup/status/1190754460575961089)。

另外，创建了一个新的设计计划：

- 主要目的是，在受污染的荒原上，恢复甜美的生态系统。玩家将不得不不断思考如何应对不同的环境限制，以保持树木生长，收集足够的果实并弄清楚如何处理树木，并解锁新的目标和植物。
- 但是对于对野生，无目标的植物生长感兴趣的玩家，还可以使用沙盒模式。随着主游戏的进展并“解锁”更多的树木，将有可能玩耍创造繁茂的丛林之作。

要了解较小的更新，屏幕截图和新的开发日志，请关注[@logicsoup](https://twitter.com/logicsoup)在 Twitter 上。

### [EVE Aether Wars](https://store.steampowered.com/app/1165670/EVE_Aether_Wars__Tech_Demo/) Backend Optimization [#](#eve-aether-wars-backend-optimization)

[@aidanhs 分享](https://twitter.com/aidanhs/status/1181584776584675328)一个小的[EVE Aether Wars](https://store.steampowered.com/app/1165670/EVE_Aether_Wars__Tech_Demo/) 后端优化成功案例：

> 为了使滴答频率翻倍至 30Hz，[自上次](https://twitter.com/aidanhs/status/1110607519385350150)我们底部的 @rustlang 层需要...两行错误修正和一些指标支持。Rust 中可靠软件的不错凭证！

### [Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus/) [#](#robo-instructus)

[Alex Butler](https://twitter.com/bigabgames)继续完善他们的“[Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus/)“ 游戏;[1.12, 1.13, and 1.14 versions were released](https://steamcommunity.com/app/1032170/allnews)：非 ASCII 代码输入，新图标，错误修正和更好的翻译。

[你可在这里帮忙翻译](https://github.com/big-ab-games/robo-instructus-translation#about)。

![translated menu items](https://rust-gamedev.github.io/posts/newsletter-003/robo-ru.png)

### [Godot](https://godotengine.org) and Rust [#](#godot-and-rust)

- ["Rendering a 2D game in 3D"](https://medium.com/@recallsingularity/rendering-a-2d-game-in-3d-bd24ddbee6eb)--[Tom Leys](https://twitter.com/RecallSingular1)正在研究“召回奇点”[Godot](https://godotengine.org)/关于设计自主工厂船和车站的 Rust 游戏，本月他们发表了一篇有关游戏渲染演变的文章。

  ![Recall Singularity screenshot: map, a few belts and processing nodes](https://rust-gamedev.github.io/posts/newsletter-003/recall-singular.png)

- [@ardawanizadi](https://twitter.com/ardawanizadi)分享了[短的文本报告](https://reddit.com/r/godot/comments/dilbar/game_progress_for_almost_a_month_rust_godot)和一个[video demo](https://twitter.com/ardawanizadi/status/1184353596927688704)，给出他们在本月的 OpenWorld 游戏项目中取得的进展：角色物理，武器系统，相机，动画系统，动态伤害系统。

- ["Pong Clone in Godot Using 'gdnative' Rust Bindings"](https://reddit.com/r/godot/comments/dfam0p/i_made_a_pong_clone_in_godot_using_the_gdnative) -- [@you-win](https://github.com/you-win)找不到使用[godot-rust](https://github.com/GodotNativeTools/godot-rust)的完整游戏示例，所以他们做了自己的\[[source code](https://github.com/you-win/godot-pong-rust)]。

### Ludum Dare 45 [#](#ludum-dare-45)

[Ludum Dare](https://en.wikipedia.org/wiki/Ludum_Dare)是一项常规的游戏 jam 事件，在此期间，开发人员将根据社区提出的主题，在周末从头开始创建游戏。

LD45 的主题是“从无开始”。以下是一些用 Rust 制作的游戏：

- ["Working Title"](https://ldjam.com/events/ludum-dare/45/working-title) by [@NoahRosenzweig](https://twitter.com/NoahRosenzweig)用 Amethyst 制成（[source code](https://github.com/Noah2610/LD45-WorkingTitle)）。

  > _体验正在进行的工作。_
  >
  > 游戏在 2D 平台游戏的开发过程，并观察您的环境，随着进度的变化而变化……获得的越多，添加的功能就越多，包括险恶的敌人，破坏性的尖峰和自适应音乐。

  ![Working Title: an early stage of the game](https://rust-gamedev.github.io/posts/newsletter-003/working-title.png)

- ["Mindmaze"](https://ldjam.com/events/ludum-dare/45/mindmaze) by [@sigodme](https://twitter.com/sigodme)（[source code](https://github.com/sigod/ludum-dare-45)）。

  > 一个简短而轻松的故事，讲述了人类被困思维的曲折通道。从遗忘的中间开始，如阴影一般，然后漫步于这个地方的每个房间，以寻找所有失去个性的碎片。 你能找到出路吗？

  ![Mindmaze: main menu](https://rust-gamedev.github.io/posts/newsletter-003/ld45-mindmaze.png)

- ["Legally Dead"](https://ldjam.com/events/ludum-dare/45/legally-dead) by [@vilcans](https://twitter.com/vilcans)用[ggez](https://ggez.rs)（[source code](https://github.com/vilcans/ld45)）。

  > 一无所有，甚至没有记忆，您会发现自己在奇怪的洞穴中操纵某种手工艺品。

  ![ultra-low-poly ship in low-poly caves](https://rust-gamedev.github.io/posts/newsletter-003/legally-dead.png)

  查看 devlog 帖子：["Tools and tech for my game written in Rust"](https://ldjam.com/events/ludum-dare/45/legally-dead/tools-and-tech-for-my-game-written-in-rust)。

### Amethyst Games [#](#amethyst-games)

- 请参阅上面的“Working Title” LD45 游戏。

- 自上而下的 2D 射击游戏 ["Grumpy Visitors"](https://github.com/amethyst/grumpy_visitors) by [@mvlabat](https://twitter.com/mvlabat)成为官方的展示游戏。

  阅读公告文章：["Showcase game #4: Grumpy Visitors"](https://amethyst.rs/posts/showcase-game-4-grumpy-visitors)。

  当前游戏功能：

  - 合作多人游戏；
  - 产生基本的 AI 怪物;
  - 精灵动画和自定义着色器（运行状况 HUD）。

  [源代码 is available here](https://github.com/amethyst/grumpy_visitors)。

  ![A magician shooting missiles at giant bugs](https://rust-gamedev.github.io/posts/newsletter-003/grumpy-visitors.png)

- [Arrakis](https://github.com/JPMoresmau/arrakis) by [@JpMoresmau](https://twitter.com/JpMoresmau)是 Rust 和 Amethyst ，移植的 80 年代游戏。

  > 这是一个迷你角色扮演/冒险游戏。目标？漫步在 Arrakis 的街道上，找到传说中的 Arrakis 巫师，它可以教你梦寐以求的奥术力量！

  ![Arrakis screenshot](https://rust-gamedev.github.io/posts/newsletter-003/arrakis.png)

- [@webshinra](https://twitter.com/Webshinra)完成了将六角形游戏移植到 Amethyst 的工作，现在正准备建立游戏玩法。

  ![hexagonal pam with a few mechs](https://rust-gamedev.github.io/posts/newsletter-003/webshinra-hex.jpg)

- [@takeryo_eeic](https://twitter.com/takeryo_eeic)还致力于回合制六角形游戏。[Watch the video demo here](https://twitter.com/takeryo_eeic/status/1190142474062184448)。

  [![a small hex field with a few fighters](https://rust-gamedev.github.io/posts/newsletter-003/takeryo-eeic-hex-game.png)](https://twitter.com/takeryo_eeic/status/1190142474062184448)

- [Space Shooter](https://github.com/amethyst/space_shooter_rs) by [@carlosupina](https://twitter.com/carlosupina) 得到了[2 new items](https://github.com/amethyst/space_shooter_rs/pull/19)和[1 new enemy](https://github.com/amethyst/space_shooter_rs/pull/18)。

## 库 & 工具更新  [#](#library-tooling-updates)

### [Dev Time Optimization -- Part 1 (1.9x 加速, 65% 磁盘降低)](https://azriel.im/will/2019/10/08/dev-time-optimization-part-1-1.9x-speedup-65-less-disk-usage) [#](#dev-time-optimization-part-1-1-9x-speedup-65-less-disk-usage)

编译时间（完全和增量）是 Rust 的痛点之一。[Azriel](https://azriel.im)发布了有关优化[Will](https://azriel91.itch.io/will)的构建时间的 devlog。摘要：

> 在 45k LOC / 102 箱子的工作区中，将测试从成员箱子移到单个 workspace_tests 中，实现了以下改进：
>
> - 在发布模式下的构建和测试时间，从 23 分钟减少到 13 分钟。
> - 调试工件磁盘的使用从 20 G 减少到 7 G（ 重新构建缩减 65％），或从 230 G 减少到 50 G（正在进行开发缩减 78％）。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/desc3q/dev_time_optimization_part_1_19x_speedup_65_less)_

### 🛈 Tip: 加速迭代时间，通过使用 [LLD Linker](https://lld.llvm.org) [#](#tip-speed-up-iteration-time-by-using-lld-linker)

来自[一个有趣的推特](https://twitter.com/VladZhukov0/status/1186412587958845442) from [VladZhukov0](https://twitter.com/VladZhukov0)和一个[/r/rust 跟帖 "rust 编译器真的很慢吗?"](https://reddit.com/r/rust/comments/dl4c8o/is_the_rust_compiler_really_that_slow)：

- 尝试切换到[LLD linker](https://lld.llvm.org)：

  `RUSTFLAGS="-C link-arg=-fuse-ld=lld" cargo run`，另一种方式您可以设置 `rustflags` in your `.cargo/config`

  根据您的项目结构，操作系统和工具链，这可能会几次加速增量编译。

- 另外，请尝试禁用调试信息（如果你不需要）：

  \# in your `Cargo.toml` `[profile.dev] debug = 0`

> 现在，链接只需要大约一秒钟，而之前是 10 秒。
>
> 将我的平均编译时间从 10-20s（对于 gamedev 迭代有点疯狂）减少到 5-7s。想知道为什么我以前没有尝试过吗？🤔

另外，请参阅此 GameDev WG 跟踪器/投诉问题：[#50 "Linking Time"](https://github.com/rust-gamedev/wg/issues/50)。

### [RLSL](https://github.com/MaikKlein/rlsl): a Rust to SPIR-V Compiler [#](#rlsl-a-rust-to-spir-v-compiler)

![RLSL code sample](https://rust-gamedev.github.io/posts/newsletter-003/rlsl-example.png)

^ _一个渲染红色圆圈的简单碎片 shader（临时语法）_

这个月，[@MaikKlein_DEV](https://twitter.com/MaikKlein_DEV)在[The Khronos Group](https://www.khronos.org)发表演讲，展会在慕尼黑举行，关于将 Rust 引入 GPU ：[这里是幻灯片](https://docs.google.com/presentation/d/1_cB-sxUusYVoCYdXnqwAg2u3-lrqBfgrUj205ytxYaw)。

[RLSL](https://github.com/MaikKlein/rlsl)（Rust Like Shading Language）是一种*实验性的*允许将 Rust 编译为[SPIR-V](https://www.khronos.org/registry/spir-v)的项目。

当前功能：

- 支持 cargo；
- 可以在同一 SPIR-V 模块中，定义多个入口点。
- 目前支持 Vertex，Fragment 和 Compute shaders；
- 因为 rlsl 是 Rust 的子集，所以 shader 代码可以在 CPU 上运行。

另外，请查看较早的帖子：

- ["RLSL Progress report" (2018.02.09)](https://maikklein.github.io/rlsl-progress-report)，
- ["Raycasting a sphere with RLSL" (2018.10.20, video)](https://youtube.com/watch?v=XhAvIVs7lOA)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/dlcjet/rlsl_a_rust_to_spirv_compiler)，[hacker news](https://news.ycombinator.com/item?id=21314679)_

### [gfx-rs v0.4](https://reddit.com/r/rust/comments/dm89t2/gfxhal_version_04_release) [#](#gfx-rs-v0-4)

![sailor screenshot: vector terrain map and some basic UI](https://rust-gamedev.github.io/posts/newsletter-003/sailor.png)

^ _[Yatekii/sailor](https://github.com/Yatekii/sailor)的屏幕截图 —— 基于 wgpu 的航行导航应用程序_

[gfx-rs v0.4 was released](https://reddit.com/r/rust/comments/dm89t2/gfxhal_version_04_release)：主要变化，[the last blog post](https://gfx-rs.github.io/2019/10/01/update.html)有所描述，有关更改的详细列表，请参见[CHANGELOG](https://github.com/gfx-rs/gfx/blob/master/CHANGELOG.md#hal-040-23-10-2019)。

### [Vulkano: 为什么 Command Buffers 如此复杂?](https://twitter.com/tomaka17/status/1188513260473110528) [#](#vulkano-why-command-buffers-are-so-complicated)

![vulkano logo](https://rust-gamedev.github.io/posts/newsletter-003/vulkano-logo.png)

[A twitter thread by @Tomaka](https://twitter.com/tomaka17/status/1188513260473110528)关于为什么[Vulkano](http://vulkano.rs)的 command buffers（包裹[Vulkan graphics API](https://www.khronos.org/vulkan)的 Rust 库）是如此复杂。

### [splines v3.0](https://crates.io/crates/splines) [#](#splines-v3-0)

![a spline sample with node handles](https://rust-gamedev.github.io/posts/newsletter-003/splines.png)

[splines](https://crates.io/crates/splines)，一个箱子 by [@phaazon](https://twitter.com/phaazon_) 处理 spline 插值，[刚发布于 3.0.0](https://reddit.com/r/rust/comments/dln7yd/splines300)。

该版本增加了对笔触 Bézier 插值的支持，Bézier 插值是一种 Bézier 插值，但是允许您断开手柄 (instead of the regular 180° angle formed by the handle with the `Interpolation::Bezier` mode).

[spline-editor](https://github.com/phaazon/spline-editor)有一个补丁程序可以让您尝试 Bézier。

### [This Month in Mun - 10 月 2019](https://mun-lang.org/blog/2019/10/28/this-month-october) [#](#this-month-in-mun-october-2019)

[Mun](https://mun-lang.org)是用于 Gamedev 的脚本语言，该脚本语言专注于 Rust 编写的快速迭代时间。

Mun 小组从 10 月开始启动[mun-lang.org](https://mun-lang.org)网站，[Discord server](https://discord.gg/SfvvcCU)和[OpenCollective](https://opencollective.com/mun)和处理更多受众的反馈。现在，团队正在朝 v0.1 版本迈进。

另外，请查看 /r/rust["The Mun programming language is going live!" post](https://reddit.com/r/rust/comments/de51ai/the_mun_programming_language_is_going_live)。

### [ultraviolet](https://github.com/termhn/ultraviolet) [#](#ultraviolet)

![ultraviolet benchmarks table](https://rust-gamedev.github.io/posts/newsletter-003/ultraviolet-benches.png)

[ultraviolet](https://github.com/termhn/ultraviolet) by [@fu5ha](https://twitter.com/fu5ha)一个箱子，通过充分利用[SIMD](https://en.wikipedia.org/wiki/SIMD)，可以快速，基本地完成与计算机图形相关的线性代数。

> \<...> 为此，它使用“ SoA”（[Structure of Arrays](https://en.wikipedia.org/wiki/AoS_and_SoA)）架构，这样每个 Wec（wide-vec）实际上都包含 4 个 Vecs 的数据，并且将同时对所有 4 个 vector “通道”执行任何操作。这样做可能比“ AoS”（[Array of Structs](https://en.wikipedia.org/wiki/AoS_and_SoA)）布局快，就像当前所有 Rust 线性代数库一样，具体取决于您的工作量。但是，必须精心设计算法以充分利用此优势，并且说起来容易做起来难，尤其是在算法涉及大量分支的情况下。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/dpknd1/ultraviolet_a_crate_to_do_lots_of_linear_algebra)_

### [This month in rustsim #8 (Aug - Sep - Oct 2019)](https://rustsim.org/blog/2019/11/01/this-month-in-rustsim) [#](#this-month-in-rustsim-8-aug-sep-oct-2019)

![salva's logo](https://rust-gamedev.github.io/posts/newsletter-003/salva.png)

主要更新：

- [salva.rs](https://salva.rs) —— 用于流体模拟的两个新箱子：salva2d 和 salva3d！

  > Salva 是一个致力于流体模拟的新项目。salva 的目标是提供基于 CPU，基于粒子，2D 和 3D 的流体仿真库，这些库可用于动画等交互式和脱机应用程序。只要粒子数量保持较小，它就可以在某种程度上用于视频游戏（尤其是 2D 版本）。

  看一个["流体模拟 salva 0.1 and nphysics 0.13"](https://www.youtube.com/watch?v=356unTmeVUk)视频或在线玩玩[2D](https://www.salva.rs/demo_all_examples2)要么[3D](https://www.salva.rs/demo_all_examples3)WASM 演示。

- [nphysics 0.13](https://nphysics.org) 带来：对易碎的关节约束的一些支持，以及与 ECS 集成的更多改进。

- [@sebcrozet](https://github.com/sebcrozet)（当前所有 rustsim 项目的主要开发者）[已被添加到 GitHub 赞助者 beta](https://github.com/sponsors/sebcrozet)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/doheby/this_month_in_rustsim_8)_

### [cyclone-physics-rs](https://github.com/heyrutvik/cyclone-physics-rs) [#](#cyclone-physics-rs)

[![cyclone physics demo](https://rust-gamedev.github.io/posts/newsletter-003/cyclone-physics-demo.gif)](https://twitter.com/heyrutvik/status/1180072669250834432)

^_“粒子”模拟的一些演示_

[cyclone-physics-rs](https://github.com/heyrutvik/cyclone-physics-rs) by [@heyrutvik](https://twitter.com/heyrutvik)一个新的 WIP 游戏物理引擎，基于["Game Physics Engine Development" book](https://www.crcpress.com/Game-Physics-Engine-Development-How-to-Build-a-Robust-Commercial-Grade/Millington/p/book/9780123819765)。

### [Cynic64's WIP 渲染引擎](https://reddit.com/r/rust/comments/dpa3ar/wip_rendering_engine) [#](#cynic64-s-wip-rendering-engine)

[@cynic64](https://github.com/cynic64) 分享了[demo 视频](https://youtube.com/watch?v=UrnSCpf_yw0)和一份[关于他们 WIP 渲染引擎的报告](https://reddit.com/r/rust/comments/dpa3ar/wip_rendering_engine)。

它基于 Vulkano，由三个存储库组成：

- [re-ll](https://github.com/cynic64/re-ll) —— Vulkano 的 command buffers 和窗口的底层抽象。
- [render-engine](https://github.com/cynic64/render-engine) —— Vulkan 抽象。
- [test-render-engine](https://github.com/cynic64/test-render-engine) —— 使用 render-engine 创建的各种小程序。“pretty”是视频中显示的，“base”给出了基本功能。

### [Rust Roguelike 教程](http://bfnightly.bracketproductions.com/rustbook) [#](#rust-roguelike-tutorial)

[!["Doors" demo](https://rust-gamedev.github.io/posts/newsletter-003/rogulike-demo.gif)](http://bfnightly.bracketproductions.com/rustbook/wasm/chapter-40-doors)

[The Roguelike Tutorial](http://bfnightly.bracketproductions.com/rustbook) by [@blackfuture](https://patreon.com/blackfuture)现在包括将近 40 章，并将继续增长。

十月的一些更新：

- 陷阱和门；
- mapgen 算法，包括波形塌陷；
- 预绘制 关卡和部分；
- 城镇的指导构建。

所有章节都有指向 WASM 演示的链接。

---

另外，0.5 版[rltk-rs](https://github.com/thebracket/rltk_rs) 带来了后端之间的抽象，更好的编译时间，Web 版本的改进以及更多示例。

### [Nannou awarded Mozilla grant for foundational audio development](https://nannou.cc/posts/moss_grant_announce) [#](#nannou-awarded-mozilla-grant-for-foundational-audio-development)

[![Nannou & mozilla logos](https://rust-gamedev.github.io/posts/newsletter-003/mission_partners_nannou_mozilla.png)](https://nannou.cc/posts/moss_grant_announce)

[Nannou](https://nannou.cc)是一个创新的编码框架，旨在使艺术家可以轻松地用简单，快速，可靠的代码表达自己。

[Nannou 获予了 10K USD in funding](https://nannou.cc/posts/moss_grant_announce)作为[MOSS Mission Partners](https://mozilla.org/en-US/moss/mission-partners) 的一部分。拟定的工作目标，旨在在未来三到四个月内改善 Rust 音频生态系统中，一些基础箱子的状态。

我们工作的关键领域将包括：

- 解决[CPAL](https://github.com/rustaudio/cpal)一些长期存在的问题。
- 查看并改善 CPAL 的网络音频支持。
- 实现一个简单的 Web 应用程序，并指导演示 CPAL 的 Web 音频支持。
- 设计，开发和记录标准的音频图的抽象和箱子，以反映汲取的教训和先前工作的局限性，以及更广泛的 rust 音频社区的要求。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/dlz3fb/nannou_the_creative_coding_framework_awarded)_

### Amethyst [#](#amethyst)

![amethyst logo](/amethyst-logo.png)

- [specs](https://github.com/amethyst/specs)及其相关的资料库[awesome-specs](https://github.com/amethyst/awesome-specs)，[hibitset](https://github.com/amethyst/hibitset)和[shred](https://github.com/amethyst/shred) 被搬到 [Amethyst organization](https://github.com/amethyst) \[[URLO](https://users.rust-lang.org/t/specs-parallel-ecs-moved-to-amethyst-organization/33815)]。

- [amethyst_physics v0.1.1 was released](https://www.reddit.com/r/rust_gamedev/comments/dm3jsf/amethyst_v011_contacts_events)：现在可以获取 rigid body 接触事件。

- [@\_AndreaCatania](https://twitter.com/_AndreaCatania) 发表了两个视频教程：

  - ["角色控制器 - Amethyst 物理教程 #2"](https://youtube.com/watch?v=-RTPZPYR5CI)
  - ["物理批处理 Dispatcher - Amethyst 物理教程 #3"](https://youtube.com/watch?v=7GZc4P_v_DY)

## Popular Workgroup Issues in Github [#](#popular-workgroup-issues-in-github)

- [rust-gamedev/wg](https://github.com/rust-gamedev/wg)：
  - [#60 "Ecosystem At Risk: Custom Allocators (and more?) in std"](https://github.com/rust-gamedev/wg/issues/60);
  - [#61 "Tracking: Important Issues Filed Elsewhere"](https://github.com/rust-gamedev/wg/issues/61);
  - [#64 "Transfer Ownership of AreWeGameYet to Gamedev WG"](https://github.com/rust-gamedev/wg/issues/64);
- [rust-gamedev/rust-gamedev.github.io](https://github.com/rust-gamedev/rust-gamedev.github.io)：
  - [#24 "Email Subscription"](https://github.com/rust-gamedev/rust-gamedev.github.io/issues/24);

## Meeting Minutes [#](#meeting-minutes)

[查看所有的会面 issues](https://github.com/rust-gamedev/wg/issues?q=label%3Ameeting)包括书面记录或[加入下一 meeting](https://github.com/rust-gamedev/wg#join-the-fun)。

## 请求帮助  [#](#requests-for-contribution)

- [/r/rust: "需要移植 steam 库，到 rust"](https://reddit.com/r/rust/comments/diuqg7/need_help_porting_steam_libraries_to_rust);
- [Embark's open issues](https://github.com/search?q=user:EmbarkStudios+state:open)（[embark.rs](https://embark.rs)）;
- [winit's "Good first issue" 和 “help wanted” issues](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22status%3A+help+wanted%22+label%3A%22Good+first+issue%22);
- [gfx-rs's "contributor-friendly" issues](https://github.com/gfx-rs/gfx/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor-friendly);
- [wgpu's "help wanted" issues](https://github.com/gfx-rs/wgpu-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22);
- [luminance's "low hanging fruit" issues](https://github.com/phaazon/luminance-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22low+hanging+fruit%22);
- [ggez's "good first issue" issues](https://github.com/ggez/ggez/labels/%2AGOOD%20FIRST%20ISSUE%2A);
- [Veloren's "beginner" issues](https://gitlab.com/veloren/veloren/issues?label_name=beginner);
- [Amethyst's "good first issue" issues](https://github.com/amethyst/amethyst/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22);

## Bonus [#](#bonus)

只是过去有趣的 Rust 游戏开发链接。:)

[![Gravisim screenshot](https://rust-gamedev.github.io/posts/newsletter-003/gravisim.png)](https://reddit.com/r/rust/comments/atdkeg/ive_been_making_a_gravity_simulator_using/)

[Gravisim](https://github.com/bcamp1/Gravisim) by [@bcamp1](https://github.com/bcamp1)是万有引力的模拟。它用[牛顿定理之万有引力](https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation)运行一个 n-body 物理模拟。

[查看 /r/rust 公告版上的，视频示例](https://reddit.com/r/rust/comments/atdkeg/ive_been_making_a_gravity_simulator_using/)

---

今天就是所有新闻，感谢您的阅读！

想要下一期新闻中提到的内容吗？[Send us a pull request](https://github.com/rust-gamedev/rust-gamedev.github.io)。随意发送有关您自己的项目的 PR！

另外，订阅[@rust_gamedev on Twitter](https://twitter.com/rust_gamedev)要么[/r/rust_gamedev subreddit](https://reddit.com/r/rust_gamedev)如果您想接收新消息！

**这篇文章的讨论**：[/r/rust](https://reddit.com/r/rust/comments/dt3uc9/this_month_in_rust_gamedev_3_october_2019)，[twitter](https://twitter.com/rust_gamedev/status/1192539926161702913)。

[](https://rust-gamedev.github.io/posts/newsletter-003/)

## Rust Game Development Working Group

紧跟 Rust 游戏开发工作组的最新进展。

- [Github (rust-gamedev)](https://github.com/rust-gamedev "rust-gamedev")
- [Twitter (rust_gamedev)](https://twitter.com/rust_gamedev "rust_gamedev")
- [Discord (#wg-gamedev)](https://discord.gg/j6QJsMd "Discord")
- [RSS feed](https://rust-gamedev.github.io/feed.xml "RSS")
