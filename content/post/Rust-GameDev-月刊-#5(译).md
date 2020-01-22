---
title: "Rust GameDev 月刊 #5(译)"
date: 2020-01-22T09:59:00+08:00
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

# This Month in Rust GameDev #5 - December 2019

2020 年 1 月 10 日

欢迎来到 Rust GameDev 工作组的第五期月刊。

[Rust](https://rust-lang.org)是一种追求三重性的系统语言：安全性、并发性和速度。这些目标与游戏开发非常一致。

我们希望为想在开发过程中，使用 Rust 的人建立一个吸引人的生态系统！想参与吗？[加入 Rust GameDev working group!](https://github.com/rust-gamedev/wg#join-the-fun)

想要加入下一期新闻？[Send us a pull request](https://github.com/rust-gamedev/rust-gamedev.github.io) 随意发送有关您自己的项目的 PR。

## [演讲呼吁: Rust GameDev 伦敦站](https://reddit.com/r/rust_gamedev/comments/ecfb3x/a_call_for_speakers_rust_london_meetup_gamedev) [#](#call-for-speakers-rust-london-gamedev-meetup)

> 我是[Rust London](https://meetup.com/Rust-London-User-Group)的社区领导，我只想为任何一个在伦敦的人做些调查，想在我们的 Rust 伦敦站上做个演讲。我们想举办一个专门针对 GameDev 的 LDN 会谈。

[详细信息看这里](https://reddit.com/r/rust_gamedev/comments/ecfb3x/a_call_for_speakers_rust_london_meetup_gamedev).

## Game Updates [#](#game-updates)

### [A/B Street](https://github.com/dabreegster/abstreet#ab-street) - Adjust Traffic Patterns in Real Cities [#](#a-b-street-adjust-traffic-patterns-in-real-cities)

曾经坐在交通堵塞的公交车上，想知道为什么会有车停在路上，而不是公交专用道上？[A/B Street](https://github.com/dabreegster/abstreet#ab-street)这是一个探索道路空间和交通信号的微小变化，如何影响司机、骑自行车者、公交用户和行人的移动的游戏。游戏使用[OpenStreetMap](https://openstreetmap.org)和其他公共数据集，让玩家调整现有的基础设施，然后做一个详细的比较，看看谁的变化有帮助/伤害。

A/B Street 是用 Rust 编写的，在[glium](https://github.com/glium/glium)之上，使用自定义 GUI 库。

[Play it now](https://github.com/dabreegster/abstreet/blob/master/docs/INSTRUCTIONS.md)和[开始 contributing](https://github.com/dabreegster/abstreet/issues) 将游戏扩展到更多的城市，建立轻轨和共享的步行/自行车路径模型，并开发游戏模式（比如“让一切尽可能慢”，“如果没有人拥有和停放私人车辆怎么办？”）.

![Demo of some UI work in A/B Street](https://rust-gamedev.github.io/posts/newsletter-005/abstreet.gif)

12 个高光点：

- 在不重置模拟的情况下，预览交通信号“实时”更改
- 用户界面：新的小地图，弹出式信息图形面板，更好的形状，和汽车的颜色
- 可视数据：显示快速/慢速行程计数的柱状图，可视化哪个道路交通信号灯处的备用时间最长，分拆行程时间线（步行到汽车、开车到某处、寻找停车场、步行到目的地…）
- 改善行人寻路，和决定是否使用公共汽车

_讨论：[/r/rust](https://reddit.com/r/rust/comments/e9h7d4/want_to_work_on_a_traffic_simulation_game)_

### [vange-rs](https://github.com/kvark/vange-rs) [#](#vange-rs)

![Vehicle's collision shape](https://rust-gamedev.github.io/posts/newsletter-005/vangers.png)

[vange-rs](https://github.com/kvark/vange-rs)是[Vangers](https://en.wikipedia.org/wiki/Vangers)（1998 年）的重新实现，使用现代开发实践、并行计算和 GPU 的 Rust 游戏。

本月，该项目获得了一些主要功能。其中最大的一个是物理引擎在 GPU 上的闭环实现。同时，CPU 代码路径被固定，以保证平稳运行([video](https://reddit.com/r/rust_gamedev/comments/e8r695/vangers_gpu_physics_engine)).

另一组变化已经登陆，允许许多 NPC 汽车与用户世界同行。渲染器已转向完全实例化，CPU 物理计算已并行化。该游戏现在可以在关卡上容纳多达 50000 辆汽车，所有这些汽车都是一次模拟的，一次最多可以在屏幕上显示 5000 辆([video](https://reddit.com/r/rust_gamedev/comments/eg3k6x/spawning_4k_of_cars_in_vangers))。

在较小的功能，它成为可能在游戏中 jump ，以及改变汽车的颜色。

该项目还启动了[开发博客](http://kvark.github.io/vange-rs)，描述新技术和旧技术，例如：

- 在原始游戏中使用[数据格式](https://kvark.github.io/vange-rs/2019/12/12/data-formats.html)。
- 原始游戏的[碰撞模型](https://kvark.github.io/vange-rs/2019/12/17/collision-model.html)。
- 碰撞模型的[Pure-GPU 实现](https://kvark.github.io/vange-rs/2019/12/19/gpu-collisions.html)。

### [Veloren](https://veloren.net) [#](#veloren)

![Morning landscape](https://rust-gamedev.github.io/posts/newsletter-005/veloren1.png)

[Veloren](https://veloren.net)是一个开放的世界，开源体素 RPG 的灵感来自矮人堡垒和立方体世界。

12 月的一些更新：

- 正式的变更日志
- 寻路
- 飞艇发射器进展
- 侵蚀系统改进
- 第一个动画 UI 元素

您可以阅读有关某些特定主题的更多信息：

- [角色状态彻底检修](https://veloren.net/devblog-48#character-states-overhaul-by-adam)
- [飞船更新](https://veloren.net/devblog-46#airshipper-updates-with-songtronix)
- [SFX](https://veloren.net/devblog-46#sfx-with-shandley)
- [贡献者高光时刻: @AngelOnFira](https://veloren.net/devblog-46/#contributor-spotlight-angelonfira)
- [路径寻路](https://veloren.net/devblog-45/#pathfinding-by-chrischrischris)
- [Mac 构建困境](https://veloren.net/devblog-44/#lantern-slides-mac-build-predicament)
- [未完成的 Rust CI 博客](https://veloren.net/devblog-44/#lantern-slides-unfinished-rust-ci-blog)

![Sitting on the edge](https://rust-gamedev.github.io/posts/newsletter-005/veloren2.png)

一月份的工作，包括玩家帐号认证，初步的修改工作，以及角色状态系统。正在进行的会谈也在研究网络系统和优化。

12 月的全周节目：“本周在 Veloren…”：[#44](https://veloren.net/devblog-44), [#45](https://veloren.net/devblog-45), [#46](https://veloren.net/devblog-46), [#47](https://veloren.net/devblog-47), [#48](https://veloren.net/devblog-48).

### [voxel-rs](https://github.com/Technici4n/voxel-rs) [#](#voxel-rs)

![Some lake, hills, blue sunny sky and debug output](https://rust-gamedev.github.io/posts/newsletter-005/voxel-rs.png)

[voxel-rs](https://github.com/Technici4n/voxel-rs)是一个新的'类-我的世界'的多人游戏沙盒引擎，用 [wgpu-rs](https://github.com/gfx-rs/wgpu-rs) 编写.

> 这个游戏目前正在大力开发中，还不能玩。

该项目的路线图是[在这里](https://github.com/Technici4n/voxel-rs#roadmap)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/e9qqnv/in_the_works_minecraftlike_game_written_in_rust)_

### [Tennis Academy: Dash](https://iolivia.me/posts/6-months-of-rust-game-dev) [#](#tennis-academy-dash)

![menu, levels, and customers](https://rust-gamedev.github.io/posts/newsletter-005/tennis-academy.gif)

[@oliviff](https://twitter.com/oliviff)发布[v0.1.2](https://twitter.com/oliviff/status/1205891407606636544)..[v0.1.4](https://twitter.com/oliviff/status/1207671483981537280)“[Tennis Academy: Dash](https://iolivia.me/posts/6-months-of-rust-game-dev)“：

- 🖼️ 艺术重新设计，以及新的调色板；
- ✂️ 精灵表和资产包装；
- 🧮 游戏终于有了一个名字：“网球学院：达世币”；
- ⛱️ logo️，初始屏幕和 UI 抛光。

### [Dank Defense](https://elijahlucian.itch.io/dank-defense-theyre-coming) [#](#dank-defense)

![Trying to shoot down the missles](https://rust-gamedev.github.io/posts/newsletter-005/dank-defense.gif)

[Dank Defense](https://elijahlucian.itch.io/dank-defense-theyre-coming) by [Elijah Lucian](https://twitter.com/ELI7VHBO7)是 Rust 制作的一款有趣的小导弹防御游戏，使用[ggez](https://github.com/ggez/ggez)。

### [Akigi](https://akigi.com) [#](#akigi)

[![Akigi screenshot: map, character model, chat and panel](https://rust-gamedev.github.io/posts/newsletter-005/akigi.png)](https://akigi.com)

> [Akigi](https://akigi.com)是一个多人在线世界，其中大多数人认为人类是卑微的。

12 月的一些更新：

- 游戏服务器已移植到[specs](https://github.com/amethyst/specs);
- 生成系统被重写和简化；
- 使用 YAML 配置文件进行初始风光设置；
- 寻路现在可以在任意大小的图块之间工作；
- 更好的测试覆盖范围；

完整的 12 月开发日志：[#046](https://devjournal.akigi.com/december-2019/2019-12-15.html)，[#047](https://devjournal.akigi.com/december-2019/2019-12-22.html)，[#048](https://devjournal.akigi.com/december-2019/2019-12-29.html)。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/eejnyl/akigi_rust_wasm_webgl_game_dev_journal_047)_

### [Garden Devlog: December](https://cyberplant.xyz/posts/december) [#](#garden-devlog-december)

[![Playing with dirt](https://rust-gamedev.github.io/posts/newsletter-005/garden.gif)](https://youtube.com/watch?v=xU93FGrk1d8)

^ _新的平滑土壤编辑演示_

[Garden](https://epcc.itch.io/garden)是一款以成长中的现实植物为中心，即将到来的游戏。

12 月的一些更新：

- 一个新的地形系统，不再使用具有 surface nets 的体素，而是具有 heightmaps 的常规立方体素（[video](https://youtube.com/watch?v=xU93FGrk1d8)）;
- 新建筑材料；
- 改善了渲染性能和编译时间；

### [Slavic Castles](https://leinnan.itch.io/slavic-castles) [#](#slavic-castles)

![Updated cards & battle UI](https://rust-gamedev.github.io/posts/newsletter-005/slavic-castles.jpg)

[Slavic Castles](https://leinnan.itch.io/slavic-castles)是一款纸牌游戏，灵感来自[Arcomage](https://en.wikipedia.org/wiki/Arcomage)。

自上次开发日志以来，进行了以下更改：

- 从 JSON 文件加载的'real card'；
- 项目迁移到[quicksilver](https://github.com/ryanisaacg/quicksilver);
- 菜单，简单的动画以及视觉和音频反馈；
- 保存游戏状态的能力。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/e4isx9/card_game_progress)_

### [Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus) [#](#robo-instructus)

[![logo](https://rust-gamedev.github.io/posts/newsletter-005/roboinstructus.jpg)](https://store.steampowered.com/app/1032170/Robo_Instructus)

[Alex Butler](https://twitter.com/bigabgames)继续完善他们的“[Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus)益智游戏-[1.18, 1.19, and 1.20 versions were released](https://steamcommunity.com/app/1032170/allnews)：UI 调整，更好的翻译（包括完整的俄语翻译！），错误修正和性能优化。

### [Amethyst](https://amethyst.rs) Games [#](#amethyst-games)

- [Azriel](https://azriel.im)发表了["I See The Character In UI"](https://azriel.im/will/2019/12/20/i-see-the-character-in-ui)devlog：

  - 角色选择 UI，显示玩家将使用的角色。
  - 控制设置 UI，允许玩家查看已配置的控制键。
  - 用户界面（UI）很大程度上是通过配置定义的，从而使开发和自定义变得更加容易。
  - 可以在配置中，定义控制应用程序行为的事件。

  [![Controls menu](https://rust-gamedev.github.io/posts/newsletter-005/will.png)](https://youtube.com/watch?v=aQiK5rOylCY)

- [@dave_tucker](https://twitter.com/dave_tucker)正在重新实现一些经典。

  [![minesweeper](https://rust-gamedev.github.io/posts/newsletter-005/mines.gif)](https://twitter.com/dave_tucker/status/1208103971044438017)

- [@carlosupina](https://twitter.com/carlosupina)一直在添加动画和 boss 到[Space Shooter](https://github.com/amethyst/space_shooter_rs);

  [![boss enemy](https://rust-gamedev.github.io/posts/newsletter-005/space-shooter.gif)](https://twitter.com/carlosupina/status/1208128889891033095)

- [@a5huynh](https://twitter.com/a5huynh)使旋转地图起作用；

  ![Rotating map](https://rust-gamedev.github.io/posts/newsletter-005/amethyst-rotating-map.gif)

## Library & Tooling updates [#](#library-tooling-updates)

### [ultraviolet v0.4](https://grayolson.me/blog/posts/ultraviolet-0.4) [#](#ultraviolet-v0-4)

![Rayn output example - this renderer uses ultraviolet for its math](https://rust-gamedev.github.io/posts/newsletter-005/rayn.png)

[ultraviolet](https://crates.io/crates/ultraviolet)是计算机图形学和游戏相关的线性代数的箱子，但*快速*，无论是在生产率还是在运行时性能方面。

这个月[ultraviolet v0.4](https://grayolson.me/blog/posts/ultraviolet-0.4) 发布 by[@fu5ha](https://twitter.com/fu5ha)。带来[transform](https://docs.rs/ultraviolet/0.4.3/ultraviolet/transform/index.html)和[projection](https://docs.rs/ultraviolet/0.4.3/ultraviolet/projection/index.html)模块和许多较小的改进。

看看[完整 release 公文](https://grayolson.me/blog/posts/ultraviolet-0.4)。

### [component_group](https://github.com/sunjay/component_group) v0.2 [#](#component-group-v0-2)

[component_group](https://github.com/sunjay/component_group)是一个箱子，与一群[specs](https://github.com/amethyst/specs)::Components 一起工作。

> 这个箱子定义了[ComponentGroup](https://docs.rs/component_group/2.0.0/component_group/trait.ComponentGroup.html) trait。此 trait 使得管理一组`specs::Component`实例更容易。当您具有经常一起创建，读取和更新的多个组件时，这很有用。您可以使用此 trait ，轻松在 spec::World 实例之间，移动整个组件组。

### [想法试验: 在游戏引擎之外，使用 ECS](http://adventures.michaelfbryan.com/posts/ecs-outside-of-games) [#](#a-thought-experiment-using-an-ecs-outside-of-game-engines)

[这篇文章](http://adventures.michaelfbryan.com/posts/ecs-outside-of-games) by [Michael Bryan](http://adventures.michaelfbryan.com)讨论 ECS 模式在[CAD](https://en.wikipedia.org/wiki/Computer-aided_design)库的用途。显然，这与游戏无关，但对于某些游戏开发人员来说仍然很有趣。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/egcvil/a_thought_experiment_using_an_ecs_outside_of_game)_

### [Lyon v0.15](https://nical.github.io/posts/new-tessellator.html) [#](#lyon-v0-15)

![The triangles generated with vertical and horizontal traversals of the same path](https://rust-gamedev.github.io/posts/newsletter-005/lyon-sweep-v-h.png)

[Lyon](https://github.com/nical/lyon) Rust 箱子将任意 2D 形状细分为三角形网格，可轻松在 GPU 上渲染。

这个月[@nical](https://nical.github.io)发布了[Lyon 0.15](https://nical.github.io/posts/new-tessellator.html)。填充镶嵌器(fill tessellator)是从头开始重写的（花费了两年时间），它应该解决以前的实现所具有的健壮性问题，并且还具有许多新功能。

看看[完整 release 公文](https://nical.github.io/posts/new-tessellator.html)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/efz5jb/lyon_0150_a_new_tessellator)_

### [winit v0.20-alpha 和网络支持](https://users.rust-lang.org/t/winit-0-20-and-web-support/36155) [#](#winit-v0-20-alpha-and-web-support)

[winit](https://github.com/rust-windowing/winit)是用于创建和管理窗口的纯 Rust 库。

Winit 的新 Alpha 版本带来了 Web 支持。预计该网络版本具有一些 API 限制（例如，窗口装饰，调整大小，全屏等）。

> Web 支持基本处于测试阶段，而且我们希望鼓励您尝试一下并对其进行压力测试，以便我们可以查看问题出在哪里，并在必要时进行改进。

查看[公文](https://users.rust-lang.org/t/winit-0-20-and-web-support/36155)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/efz0rm/winit_020_and_web_support)_

### [The State Of GGEZ 2020](https://wiki.alopex.li/TheStateOfGGEZ2020) [#](#the-state-of-ggez-2020)

![GGEZ logo](https://rust-gamedev.github.io/posts/newsletter-005/ggez-logo-maroon-full.svg)

[ggez](https://github.com/ggez/ggez)是一款轻巧的游戏框架，其灵感来自于[love2D](https://love2d.org)。

[Icefox](https://github.com/icefoxen)已发表["GGEZ 2020"](https://wiki.alopex.li/TheStateOfGGEZ2020)博客文章，概述了 ggez 今年的发展中发生了什么，当前 ggez 0.6 的发展状况，路线图中的情况以及对 Rust 生态系统的想法。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/eh7wkx/the_state_of_ggez_2020)_

### [miniquad](https://github.com/not-fl3/miniquad) [#](#miniquad)

[![miniquad demos](https://rust-gamedev.github.io/posts/newsletter-005/miniquad.gif)](https://github.com/not-fl3/miniquad)

[miniquad](https://github.com/not-fl3/miniquad) by [@fedor_games](https://twitter.com/fedor_games)是一个安全的跨平台渲染库，专注于可移植性和低端平台支持。

网络演示：[quad](https://not-fl3.github.io/miniquad-samples/quad.html)，[offscreen](https://not-fl3.github.io/miniquad-samples/offscreen.html)，[astroblasto](https://not-fl3.github.io/miniquad-samples/astroblasto.html)，[arkanoid](https://not-fl3.github.io/miniquad-samples/arkanoid.html)，[zemeroth](https://not-fl3.github.io/miniquad-samples/zemeroth.html)。

---

[@fedor_games](https://twitter.com/fedor_games)在本月还发布了一些 Patreon 更新：

- ["Status update"](https://patreon.com/posts/32234274);
- ["Rust 2D Engine, 重提渲染"](https://patreon.com/posts/rust-2d-engine-32439672);

### [Godot](https://godotengine.org) and Rust [#](#godot-and-rust)

经过一年的工作，[godot-rust](https://github.com/GodotNativeTools/godot-rust)0.7 绑定库被发布。一些更新：

- Rust 2018;
- Godot 类的 API 描述已更新为稳定的 Godot 版本 3.1.1；
- 更多辅助 traits 和派生/过程宏，以减少样板；
- Godot 集合类型的迭代器；
- 新的示例项目；

---

另外，查看[a Godot-规范示例项目](https://github.com/tom-leys/godot-rust/tree/feature_specs_integration_example/examples/specs_integration) by [@RecallSingularity](https://twitter.com/RecallSingular1)。

### [raylib-rs](https://github.com/deltaphc/raylib-rs) [#](#raylib-rs)

[![raylib-rs minimalistic logo](https://rust-gamedev.github.io/posts/newsletter-005/raylib-rs.png)](https://github.com/deltaphc/raylib-rs)

[raylib](https://raylib.com)是一个简单的 C 2D / 3D 游戏引擎，几乎没有依赖性。这个月，[raylib-rs](https://github.com/deltaphc/raylib-rs) 1.0 发布 —— 主要是惯用且线程安全的 Rust raylib 绑定库。

[查看 roguelike game 示例](https://github.com/deltaphc/raylib-rs/blob/7e387774c/samples/roguelike.rs)。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/ednyyz/check_out_raylibrs_rust_bindings_for_the_raylib)_

### [Makepad](http://makepad.nl) [#](#makepad)

[![Makepad in action](https://rust-gamedev.github.io/posts/newsletter-005/makepad.jpg)](http://makepad.nl)

[Makepad](http://makepad.nl)是 Rust 的创新软件开发平台，可编译为 WASM / WebGL，macOS / Metal，Windows / DX11，Linux / OpenGL。

推出了早期的 Makepad Basic alpha 版本。此版本展示了开发平台，但尚未包括视觉设计工具或库生态系统。

Rust + Wasm 尽在[makepad.nl](http://makepad.nl)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/e6zcp3/introducing_makepad_live_editing)_

### [Tetra](https://github.com/17cupsofcoffee/tetra) v0.3 [#](#tetra-v0-3)

[Tetra](https://tetra.seventeencups.net)是一个简单的 2D 游戏框架，使用 SDL2 进行事件处理，并使用 OpenGL 3.2+进行渲染。

这个月，[@17cupsofcoffee](https://twitter.com/17cupsofcoffee)发布了 Tetra v0.3。主要变化是：

- [nalgebra](https://nalgebra.org)linalg 库被替换为[vek](https://github.com/yoanlcq/vek);
- 改进的窗口/输入事件；
- 改进的相机/转换矩阵；
- 屏幕缩放更灵活；
- 更好的错误处理；

[阅读完整的 changelog here](https://github.com/17cupsofcoffee/tetra/blob/master/CHANGELOG.md)。

---

[@17cupsofcoffee](https://twitter.com/17cupsofcoffee)还发布了[a little example](https://gist.github.com/17cupsofcoffee/f5082a13626ddf0030075d542262c728)如何实现音效池化

> 如果您不想一次播放相同声音的 X 个实例（例如，如果玩家能够以最快的速度射击武器），这是非常方便的。

---

[![Compact Space gameplay sample](https://rust-gamedev.github.io/posts/newsletter-005/compact-space.gif)](https://puppetmaster.itch.io/compact-space)

[@puppetmaster updated their "Compact Space" game](https://twitter.com/fischspiele/status/1206014736300728322)在 Tetra 0.3 中，添加了一些声音效果和 x-max 惊喜。

---

[@JohanLindfors](https://twitter.com/JohanLindfors)更新了他们的[Snake](https://github.com/programmeramera/snake-in-tetra)和[Flappy Bird](https://github.com/programmeramera/flappy-in-rust)示例游戏，到 Tetra 0.3。

而且，Snake 示例现在具有[十步教程，如何从头构建](https://github.com/programmeramera/snake-in-tetra/tree/5c7cc79f8/tutorial)。

### [rg3d-sound](https://github.com/mrDIMAS/rg3d-sound) [#](#rg3d-sound)

[rg3d-sound](https://github.com/mrDIMAS/rg3d-sound)是一个正在积极开发的新声音库。

本月，它具有三个主要功能：

- [Head-related transfer function](https://en.wikipedia.org/wiki/Head-related_transfer_function)支持 —— 提供完美的立体声音。尝试一下：`cargo run --example hrtf --release`
- [Reverberation](https://en.wikipedia.org/wiki/Reverberation) 支持 —— 使您的场景具有“音量”的基本效果。尝试一下：`cargo run --example reverb --release`
- [Vorbis/ogg](https://en.wikipedia.org/wiki/Vorbis) 支持 —— 一种类似于 mp3 的压缩格式。

[rg3d-sound](https://github.com/mrDIMAS/rg3d-sound)是[rg3d](https://github.com/mrDIMAS/rg3d)游戏引擎的一个组件。

### @siebencorgie's Voxel Engine [#](#siebencorgie-s-voxel-engine)

![roughness-based reflections](https://rust-gamedev.github.io/posts/newsletter-005/siebencorgie-voxels.jpeg)

[@siebencorgie](https://twitter.com/siebencorgie)得到了[voxel 全局照明](https://twitter.com/siebencorgie/status/1209086915925991425)和[voxel 锥状反射](https://twitter.com/siebencorgie/status/1201171106641698816)在他们的体素引擎中工作。

### [Introduction to Rendology](https://leod.github.io/rust/gamedev/rendology/2019/12/13/introduction-to-rendology.html) [#](#introduction-to-rendology)

![Rendology demo screenshot](https://rust-gamedev.github.io/posts/newsletter-005/rendology_hdr_0_4.png)

[Rendology](https://github.com/leod/rendology)是基于 Glium 并以 Rust 编写的 3D 渲染管线。它具有阴影映射，延迟阴影，发光效果，FXAA 和实例渲染的基本实现。

一个["介绍 Rendology"](https://leod.github.io/rust/gamedev/rendology/2019/12/13/introduction-to-rendology.html)本文，概述了 Rendology 的一些概念，并描述了它们如何成为这种方式。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/eaj6su/introduction_to_rendology_a_gliumbased_rendering)_

### [Oxygengine](https://github.com/PsichiX/Oxygengine) v0.5 [#](#oxygengine-v0-5)

![Oxygengine logo](https://rust-gamedev.github.io/posts/newsletter-005/oxygengine-dark-logo.svg)

[Oxygengine](https://github.com/PsichiX/Oxygengine)是“用 Web-sys 编写游戏的，最热门的 HTML5 + WASM 游戏引擎”。

v0.5 版本的主要更新：

- 在构建阶段，自动生成资产包；
- 从资产包加载资产；
- 支持音频：声音效果（缓冲的）和背景音乐>（数据流）；
- 支持 2D 物理（rigid bodies 和 colliders）via [nphysics2d](https://nphysics.org/);
- 一个新的例子：[初级 web game](https://github.com/PsichiX/Oxygengine/tree/master/demos/basic-web-game)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/ei8754/oxygengine_v050_2020_edition_release_of_the)_

### [This Month in Mun - December 2019](https://mun-lang.org/blog/2020/1/1/this-month-december) [#](#this-month-in-mun-december-2019)

![Mun logo](https://rust-gamedev.github.io/posts/newsletter-005/mun_logo.png)

[Mun](https://mun-lang.org)是用于 Gamedev 的脚本语言，专注于快速迭代时间，使用 Rust 编写。

[December updates](https://mun-lang.org/blog/2020/1/1/this-month-december)包括：

- 元组数据结构的解析；
- 数据结构文本的解析和类型推断；
- 数据结构字段的索引；
- 改进了对数据结构信息的处理；
- 二进制操作的类型检查；
- 一名社区成员在[Veloren](https://veloren.net)中，搞了个 Mun-供电的热重载 Poc;

### [Rust Roguelike Tutorial](http://bfnightly.bracketproductions.com/rustbook) [#](#rust-roguelike-tutorial)

![Roguelike gameplay sample](https://rust-gamedev.github.io/posts/newsletter-005/rl-c63-s4.gif)

[The Roguelike Tutorial](http://bfnightly.bracketproductions.com/rustbook) by [@blackfuture](https://patreon.com/blackfuture)现在包括将近 70 章，并将继续增长！

十二月的一些更新：

- 物品识别和魔法武器；
- 通用的“效果”系统；
- 被诅咒的物品，移除诅咒的卷轴以及物品识别卷轴；
- 影响您的属性，一般状态的项；
- 咒语，法术书，武器触发特效，暴民特殊能力，DoT，主动+/-效果；
- 一座被毁的堡垒中的龙巢穴；
- 多块'瓦'实体，包括寻路；
- 魔法武器/装甲的参数化过程生成；

另外，查看[@blackfuture's 2019 Roguelike 开发回顾博文](https://reddit.com/r/roguelikedev/comments/eij9nl/2020_in_roguelikedev_one_knight_in_the_dungeon)。

### [doryen-rs](https://github.com/jice-nospam/doryen-rs) v1.2.1 [#](#doryen-rs-v1-2-1)

[![Visual demo screenshot](https://rust-gamedev.github.io/posts/newsletter-005/doryen-small.png)](https://jice-nospam.github.io/doryen-rs/docs/demo)

[doryen-rs](https://github.com/jice-nospam/doryen-rs)是具有原生和 WASM 支持的 ASCII roguelike 库。使用来自[unrust](http://github.com/unrust/unrust)游戏引擎的 uni-gl 和 uni-app 箱子。

[doryen-rs](https://github.com/jice-nospam/doryen-rs) v1.2.1 已于本月发布。一些新功能：

- 添加了 InputApi.keys_release() 和 InputApi.keys_Pressed() 返回, key 事件的迭代器；
- 添加了 alpha 示例，展示了帧缓冲区过度绘制的情况；
- 通过 InputApi.text() 添加了文本输入支持；
- 添加了一个视觉演示，以实时 roguelike 展示了，子细胞分辨率和动态照明；

### [nes-rust](https://github.com/takahirox/nes-rust) - WASM [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) Emulator [#](#nes-rust-wasm-nes-emulator)

![Multiplayer session](https://rust-gamedev.github.io/posts/newsletter-005/nes-multiplay.png)

[nes-rust](https://github.com/takahirox/nes-rust) by [@superhoge](https://twitter.com/superhoge)--[NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) Rust 编写的（Famicom）模拟器，在网络，已编译为 WASM。

本月 nes-rust 进行了远程多人游戏：

> 进入房间后，与某人共享该 URL，然后开始要与他们一起玩的游戏。请享用！

[Try it!](https://raw.githack.com/takahirox/nes-rust/WebRTC/multiplay.html)

### [rx v0.3](https://rx.cloudhead.io) [#](#rx-v0-3)

![Animation editing sample](https://rx.cloudhead.io/gifs/demo.gif)

> [rx](https://rx.cloudhead.io)是一款可扩展，现代且极简的像素编辑器，在设计时关心和喜爱艺术家和黑客。它被认为具有尽可能少的 UI，而是专注于工作。

0.3 版本附带：

- [vim-like 视觉模式](https://rx.cloudhead.io/videos/manipulating.webm)，
- 一个[新网址](https://rx.cloudhead.io)，
- 还有一个[用户指南](https://rx.cloudhead.io/guide.html)！

_讨论：[/r/rust](https://reddit.com/r/rust/comments/eh6it4/rx_v03_released_with_user_guide_a_modern_pixel)_

### [Texel](https://github.com/almindor/texel) - ASCII Art Editor [#](#texel-ascii-art-editor)

[![Texel tutorial screen](https://rust-gamedev.github.io/posts/newsletter-005/texel.png)](https://github.com/almindor/texel)

[Texel](https://github.com/almindor/texel)是具有类 VIM 控制的 ASCII 艺术和风景编辑器。它旨在使编辑 ASCII 艺术作品变得容易，尤其是在游戏中。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/ebmbt2/introducing_texel_ascii_art_editor)_

### [Embark: 开发者时讯 002](https://us20.campaign-archive.com/?u=4206f0696b8b13a996c701852&id=0339af3ed2) [#](#embark-developer-newsletter-002)

![Embark's logo](https://rust-gamedev.github.io/posts/newsletter-005/embark.png)

[Embark](https://embark.rs) 发布[第二期周刊](https://us20.campaign-archive.com/?u=4206f0696b8b13a996c701852&id=0339af3ed2)。以下是一些 Rust 新闻：

- ["深入 Rust at Embark 🦀"](https://medium.com/embarkstudios/inside-rust-at-embark-b82c06d1d9f4) —— 窥探 Embark 与 Rust 和开源 gamedev 的日常工作（[/r/rust](https://reddit.com/r/rust/comments/e7120k/inside_rust_at_embark)）;
- [cargo-about](https://github.com/embarkstudios/cargo-about) —— 一个 cargo 插件，用于生成一个箱子的所有许可证列表（[/r/rust](https://www.reddit.com/r/rust/comments/e74uux/embarkstudioscargoabout_cargo_plugin_to_generate)）

## Popular Workgroup Issues in Github [#](#popular-workgroup-issues-in-github)

- [#32 "选择性 启用/禁用 优化 at a crate/file/function 等级别"](https://github.com/rust-gamedev/wg/issues/32);
- [#46 "确保 key 箱子有 `crev` 代码审查"](https://github.com/rust-gamedev/wg/issues/46);
- [#69 "输入控制处理"](https://github.com/rust-gamedev/wg/issues/69);
- [#71" 概念箱子求证: Simplistic Bump Allocator"](https://github.com/rust-gamedev/wg/issues/71);
- [#75 "使 API 标准化 for 共享线程池"](https://github.com/rust-gamedev/wg/issues/75);
- [#77 "我们能帮助 OpenXR 以使 键盘/鼠标 变为官方支持?"](https://github.com/rust-gamedev/wg/issues/77);
- [#79 "Polymorph project"](https://github.com/rust-gamedev/wg/issues/79);

## Meeting Minutes [#](#meeting-minutes)

[查看所有的会面 issues](https://github.com/rust-gamedev/wg/issues?q=label%3Ameeting)包括书面记录或[加入下一 meeting](https://github.com/rust-gamedev/wg#join-the-fun)。

## 请求帮助  [#](#requests-for-contribution)

- [Embark's open issues](https://github.com/search?q=user:EmbarkStudios+state:open)（[embark.rs](https://embark.rs)）;
- [winit's "Good first issue" 与 “help wanted” issues](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22status%3A+help+wanted%22+label%3A%22Good+first+issue%22);
- [gfx-rs's "contributor-friendly" issues](https://github.com/gfx-rs/gfx/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor-friendly);
- [wgpu's "help wanted" issues](https://github.com/gfx-rs/wgpu-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22);
- [luminance's "low hanging fruit" issues](https://github.com/phaazon/luminance-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22low+hanging+fruit%22);
- [ggez's "good first issue" issues](https://github.com/ggez/ggez/labels/%2AGOOD%20FIRST%20ISSUE%2A);
- [Veloren's "beginner" issues](https://gitlab.com/veloren/veloren/issues?label_name=beginner);
- [Amethyst's "good first issue" issues](https://github.com/amethyst/amethyst/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22);
- [A/B Street's "good first issue" issues](https://github.com/dabreegster/abstreet/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22);

## Bonus [#](#bonus)

只是过去有趣的 Rust 游戏开发链接。:)

[![Modulator video](https://rust-gamedev.github.io/posts/newsletter-005/modulator_youtube.gif)](https://youtube.com/watch?v=n-txrCMvdms)

^_点击查看[教程视频](https://youtube.com/watch?v=n-txrCMvdms)_

在 2018 年 11 月，[@AndreaPessino](https://twitter.com/AndreaPessino)（[Ready At Dawn](https://readyatdawn.com)工作室创始人/首席技术官）发行了[Modulator](https://github.com/apessino/modulator)箱子和超赞的["Modulator (Rust 编码系列)"](https://youtube.com/watch?v=n-txrCMvdms)教程视频。

[Modulator](https://github.com/apessino/modulator)是用于抽象，解耦 modulation 源的 Rust 箱子。

> Modulator 是随时间变化的源，它们独立于其影响的参数，及其目的而存在。

Modulator 随附游乐场/测试台应用程序[Modulator Play](https://github.com/apessino/modulator_play)：

> 可视化和测试 Modulator 箱子，并进行富有表现力的 2D 基本渲染渲染的环境。基于“Piston Window”，该应用程序既可以用作 Modulator 箱子及其随附的源类型的测试台，又可以用作最小的摩擦环境以感受 Rust 编码。

_讨论：[/r/rust](https://www.reddit.com/r/rust/comments/9zem4v/modulator_andrea_pessino_on_twitter)_

---

今天就是所有新闻，感谢您的阅读！

订阅[@rust_gamedev on Twitter](https://twitter.com/rust_gamedev)或是[/r/rust_gamedev subreddit](https://reddit.com/r/rust_gamedev)如果您想收到新消息！

**这篇文章的讨论**：[/r/rust](https://reddit.com/r/rust/comments/en7tki/this_month_in_rust_gamedev_5_december_2019)，[twitter](https://twitter.com/rust_gamedev/status/1215998150118461440)。

[](https://rust-gamedev.github.io/posts/newsletter-005/)

## Rust Game Development Working Group

紧跟 Rust 游戏开发工作组的最新进展。

- [Github (rust-gamedev)](https://github.com/rust-gamedev "rust-gamedev")
- [Twitter (rust_gamedev)](https://twitter.com/rust_gamedev "rust_gamedev")
- [Discord (#wg-gamedev)](https://discord.gg/j6QJsMd "Discord")
- [RSS feed](https://rust-gamedev.github.io/feed.xml "RSS")
