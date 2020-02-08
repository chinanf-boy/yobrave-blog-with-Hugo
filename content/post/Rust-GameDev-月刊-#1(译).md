---
title: "Rust GameDev 月刊 #1(译)"
date: 2020-01-19T10:35:38+08:00
categories: ["Rust"]
tags: ["month"]
description: "Rust-GameDev-月刊"
css: ["/css/main.css", "/css/stylesheet.css", "/css/rust-gamedev.css"]
series: "Rust-GameDev-月刊-中文"
draft: false
---

[![](https://rust-gamedev.github.io/logo.png)](https://rust-gamedev.github.io/)

# [Rust GameDev #1 月刊 - 8 月 2019 ](https://rust-gamedev.github.io/posts/newsletter-001/)

2019 年 9 月 2 日

欢迎来到 Rust 游戏开发工作组月刊（希望如此！）的创刊号新闻稿。

[Rust](https://rust-lang.org)是一种追求三重性的系统语言：安全性、并发性和速度。这些目标与游戏开发非常一致。

我们希望为想在开发过程中，使用 Rust 的人建立一个吸引人的生态系统！想参与吗？[加入 Rust GameDev working group!](https://github.com/rust-gamedev/wg#join-the-fun)

## 新闻和博文  [#](#news-and-blog-posts)

### [the Rust GameDev Working Group 的调查问卷](https://users.rust-lang.org/t/survey-from-the-rust-game-development-working-group/31270) 📋 [#](#survey-from-the-rust-gamedev-working-group-clipboard)

对在游戏开发中使用 Rust 感兴趣（可能已经投资了？）？请留出一点时间，来回答这个简短的调查，了解我们游戏开发生态系统的现状，以及游戏开发工作组可以做些什么，来培育它。🌱

尽管我们非常感谢您提供少量的信息，以便我们可以方便地与您联系进行进一步的讨论，但共享这些信息是可选的。这项调查中只有 3 个问题是强制性的，我们把最重要的问题留到最后。

目前正在处理问卷，以供稍后的发布。在调查结果公布并随后永久关闭之前，我们仍在接受回复。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/cp2ib7/survey_from_the_rust_game_development_working/),[twitter](https://twitter.com/rust_gamedev/status/1160659441550864384)_

---

还有，看看我们之前的帖子["欢迎 Rust Game Development Working Group"](https://rust-gamedev.github.io/2019/08/18/introducing-the-rust-game-development-working-group.html)，如果你还没看到\[[/r/rust](https://reddit.com/r/rust/comments/cs44vx/introducing_the_rust_game_development_working),[twitter](https://twitter.com/rust_gamedev/status/1163137574812209152)].

### [Rustsim #7 月刊 (June − July 2019)](https://www.rustsim.org/blog/2019/08/01/this-month-in-rustsim) [#](#this-month-in-rustsim-7-june-july-2019)

![CCD sub-steps](https://rust-gamedev.github.io/posts/newsletter-001/ccd_substeps.svg)

[nphysics](https://nphysics.org) 0.12 release 版本包含几个期待已久的功能：

- 支持 colliders 的线性和非线性的*连续碰撞检测（CCD）*，在刚体和传感器。还有关于它的[全新的用户手册](https://www.nphysics.org/continuous_collision_detection)。
- 刚体*速率降*：这允许人为地减慢一些物体的速度。这对于不能使用传统摩擦的自上而下二维游戏来说，是必不可少的。
- 刚体*最大速率*限制：有可能迫使一个刚体永远不会得到高于阈值的速度。
- *自定义容器*有可能用于实体、colliders、关节和 force 生成器。这有助于克服与借用相关的一些困难，也有助于 npphysics 与其他解决方案的集成。物理世界结构将不再拥有这些容器。

与[ncollide](https://ncollide.org) 0.20，现在可以计算两个形状，在经历任意固性运动时的碰撞时间。这就是所谓的非线性碰撞时间计算。这被新的 npphysics0.12 上的 CCD 集成所使用。

观看[一个 "CCD support on nphysics 0.12" 视频](https://youtube.com/watch?v=EnjgJp9mKz0)或者[在线示例，自己耍耍](https://nphysics.org/demo_all_examples3)（在“选择示例”菜单中，选择“CCD”）。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/cmxdyk/this_month_in_rustsim_7_june_july_2019_nphysics), [twitter](https://twitter.com/rust_gamedev/status/1160659441550864384)_

---

还有，瞧瞧["关于 nphysics 的未来: 纯 rust 2D 和 3D 即时物理引擎"](https://www.patreon.com/posts/about-future-of-28917514) \[[/r/rust](https://reddit.com/r/rust/comments/cm2858/about_the_future_of_nphysics_a_pure_rust_2d_and)].

### Rhea 之路 [Trailer](https://youtube.com/watch?v=VIzqlI-gbAY) and [Steam Wishlist](https://store.steampowered.com/app/1110620/Way_of_Rhea) Announced [#](#way-of-rhea-trailer-and-steam-wishlist-announced)

[![Part of the trailer](https://rust-gamedev.github.io/posts/newsletter-001/way-of-rhea.gif)](https://youtube.com/watch?v=VIzqlI-gbAY)

^ _点击 GIF 查看[完整预告片](https://youtube.com/watch?v=VIzqlI-gbAY)_

[new 预告片](https://youtube.com/watch?v=VIzqlI-gbAY)以及[Steam 心愿单](https://store.steampowered.com/app/1110620/Way_of_Rhea)由[Anthropic Studios](https://anthropicstudios.com)发布。

Rhea 之路是一个即将推出的谜题游戏，在那个世界里，你只能与匹配你当前的颜色的对象互动。

看一看[this Reddit comment](https://reddit.com/r/rust_gamedev/comments/co8kqd/way_of_rhea_trailer_steam_wishlist_announced/ewryjet)，其中有实现和工具的快速总结。

_讨论：[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/co8kqd/way_of_rhea_trailer_steam_wishlist_announced), [twitter](https://twitter.com/AnthropicSt/status/1159867047821611010)_

### [Veloren 0.3](https://veloren.net/devblog-27) [#](#veloren-0-3)

![Veloren screenshot](https://rust-gamedev.github.io/posts/newsletter-001/veloren.png)

Veloren 是一个开放的世界，开源的多人体素 RPG。游戏处于开发的早期阶段，但可以玩。

0.3 版本是走过了很长的时间，并有一吨功能增加到 Veloren。以下是此版本中主要更改的小列表：

- 经验值和等级
- 更好的战斗、动作和动画
- 敌人，bosses
- 更好的世界，更多的生物群落
- Build 模式
- 洞穴，灯笼，灯光，地牢
- 角色定制，多个种族
- 库存（WIP）
- 白天/晚上，更好的阴影，体素阴影
- 许多性能优化

_讨论：[/r/rust](https://reddit.com/r/rust/comments/clziyh/veloren_03_the_multiplayer_voxel_rpg_written_in)_

---

另外，如果你想看看 0.4 的工作进展如何，可以看看 8 月份，其他的每周 devlog 帖子：“本周 Veloren…”[#28](https://veloren.net/devblog-28), [#29](https://veloren.net/devblog-29)，和[#30](https://veloren.net/devblog-30).

### [RUZZT](https://github.com/yokljo/ruzzt) [#](#ruzzt)

![RUZZT screenshot](https://rust-gamedev.github.io/posts/newsletter-001/ruzzt.png)

[@yokljo](https://github.com/yokljo)发布了[RUZZT](https://github.com/yokljo/ruzzt) —— 一个[ZZT](https://en.wikipedia.org/wiki/ZZT)游戏引擎克隆，用 Rust 编写。

> 我和妻子写这篇文章是一个有趣的练习，而且比最初预想的要深入得多。我们想尝试复制原始游戏的行为，只是简单看看它在 Dosbox 中运行，看看我们是否可以让 RUZZT 做同样的事情。这意味着，代码架构可能与原始游戏有很大不同。
>
> 最后，我们做了足够的努力，而去猜测一些具体的事情是如何实现的，有点浪费事件了，所以我们使用了反汇编程序来确保各种行为都能正确工作。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/cl9qhk/ruzzt_a_zzt_game_engine_clone_written_in_rust)_

### [oxygengine-navigation](https://github.com/PsichiX/Oxygengine/tree/master/oxygengine-navigation) - Navmesh Pathfinding System for ECS Games [#](#oxygengine-navigation-navmesh-pathfinding-system-for-ecs-games)

![oxygengine-navigation interactive demo](https://rust-gamedev.github.io/posts/newsletter-001/oxygengine-navigation-demo.gif)

[oxygengine-navigation](https://github.com/PsichiX/Oxygengine/tree/master/oxygengine-navigation)是一个在[navmeshes](https://en.wikipedia.org/wiki/Navigation_mesh)上用来进行寻路的箱子。它是一个 ECS 模块（兼容任何规格的引擎），是一个更大的[Oxygen game engine](https://github.com/PsichiX/oxygengine)的一部分。

这是一个[demo/example 与 Amethyst 的集成](https://github.com/PsichiX/Oxygengine/tree/master/demos/amethyst-integration)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/co62an/navmesh_based_navigation_system_for_ecs_games), [twitter](https://twitter.com/PsichiX/status/1159895167392002048)_

### [Amethyst's Activity Report](https://amethyst.rs/posts/activity-report-july-2019) [#](#amethyst-s-activity-report)

![amethyst logo](https://rust-gamedev.github.io/amethyst-logo.png)

- [Amethyst v0.12 quietly released](https://github.com/amethyst/amethyst/releases/tag/v0.12.0)，现在项目进入两周的发布周期。

- 二维动作平台[Space Menace](https://github.com/amethyst/space-menace)由[@krankur](https://github.com/krankur)与 Amethyst 合作成为官方展示项目([announcement](https://amethyst.rs/posts/space-menace-showcase))。

  ![Space Menace screenshot](https://rust-gamedev.github.io/posts/newsletter-001/space-menace.png)

- [Evoli](https://github.com/amethyst/evoli)发布[v0.2](https://github.com/amethyst/evoli/releases/tag/v0.2.0)以及[移到 3D](https://community.amethyst.rs/t/evoli-v0-2-video-log-retrospective/1007).

  ![Evlovi screenshot](https://rust-gamedev.github.io/posts/newsletter-001/evoli-shot.png)

- 二维游戏开发的新工具：[the Sheep spritesheet packer 和 Amethyst 2D Starter](https://amethyst.rs/posts/tools-for-2d-games).

- 脚本支持[edges closer](https://community.amethyst.rs/t/scripting-what-do-we-need-to-get-there/958).

- 向 Legion 学习：[an ECS 设计讨论](https://community.amethyst.rs/t/legion-ecs-discussion/965)。

- [Arsenal](https://github.com/katharostech/arsenal) —— 以 Amethyst 和 Rust 为基础的搅拌机游戏引擎([announcement](https://community.amethyst.rs/t/arsenal-the-vision-for-a-full-amethyst-blender-integration/911)).

- [amethyst-imgui](https://github.com/amethyst/amethyst-imgui)以及[Laminar](https://github.com/amethyst/laminar)（一种基于 UDP 的多人游戏半可靠协议）逐渐成熟。

- [Rendy](https://github.com/amethyst/rendy)（渲染引擎）以及可以 [提供 web 和 OpenGL 支持](https://twitter.com/AmethystEngine/status/1159765804205957120)。

- Atelier Editor 接受了一些[visual 计划](https://github.com/amethyst/atelier-editor/issues/21)。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/coh2hy/amethyst_activity_report_july_2019), [twitter](https://twitter.com/AmethystEngine/status/1160992752341016576)_

---

几天前第三个展示项目[宣布了](https://amethyst.rs/posts/third-showcase-game-space-shooter): ["Space Shooter"](https://github.com/amethyst/space_shooter_rs) by [Carlo Supina](https://twitter.com/carlosupina) \[[/r/rust](https://www.reddit.com/r/rust/comments/cwy4qq/amethyst_showcase_space_shooter_shootem_up), [twitter](https://twitter.com/carlosupina/status/1167094848907808768)]。

!["Space Shooter" gameplay](https://rust-gamedev.github.io/posts/newsletter-001/amethyst-space-shooter.gif)

### [Embark's Rust 开源箱子和生态路径](http://embark.rs) [#](#embark-s-rust-open-source-crates-and-ecosystem-tracking)

![Embark logo](https://rust-gamedev.github.io/posts/newsletter-001/embark-logo-bg.jpg)

公告引述：

> 我们已经为 Rust 开源工作、未来的想法/计划以及我们遇到，并希望改进的问题建立了一个跟踪页面。
>
> [embark.rs](http://embark.rs)
>
> 现在还为时尚早，但希望它能对我们这个商业游戏公司有帮助或有兴趣，看看我们正在计划和思考 Rust 的问题。
>
> 我们也愿意与其他公司或个人合作，并赞助更多的开源工作来改善和支持生态系统。在这里或在这里随时联系我们<mailto:opensource@embark-studios.com>!

_讨论：[/r/rust](https://reddit.com/r/rust/comments/cr73zz/embarks_rust_open_source_crates_and_ecosystem), [twitter](https://twitter.com/repi/status/1162361431355994112)_

---

而且，最近，Embark 已经开源了[physx-rs](https://github.com/EmbarkStudios/physx-rs) -- [PhysX](https://github.com/NVIDIAGameWorks/PhysX) 的 Rust 绑定库。

!["ball" example](https://rust-gamedev.github.io/posts/newsletter-001/physx-example.png)

> 是个相当复杂的大型 C ++项目，要构建和绑定到（[@h3r2tic](https://github.com/h3r2tic)秀了一些魔术）。最终想要完整的原生 Rust 库，但是 PhysX 今天具有丰富的功能和强大的性能，也很好用！

_讨论：[/r/rust](https://old.reddit.com/r/rust/comments/cqbhif/embarkstudiosphysxrs_rust_binding_and_wrapper_for/)，[twitter](https://twitter.com/repi/status/1161645313532280835)_

### [6 个月的 Game Development in Rust](https://iolivia.me/posts/6-months-of-rust-game-dev) [#](#6-months-of-game-development-in-rust)

![screenshot from Olivia's game](https://rust-gamedev.github.io/posts/newsletter-001/iolivia-screenshot.png)

[@oliviff](https://twitter.com/oliviff)讲述了他们六个月在 Rust 中，开发业余游戏“网球学院”的经历。

这是[a YouTube video](https://www.youtube.com/watch?v=96qPwvDEAuI)与游戏的当前状态。

游戏特色：

- 💵 金钱：每件商品都要花钱，并且在购买商品时会减去这些钱
- 👟 各种类型的网球场：硬地，黏土，混凝土和草地
- 🎁 其他对象类型：长凳，球，屋顶瓦片
- ⏱️ 时间：游戏会记录过去的天数/月数/年
- 🌶️ 主菜单
- 🏠 构建菜单
- ⛹️ 玩家选择菜单
- ↩️ 分配：可以将球员分配到球场或替补席
- 🛣️ 基本寻路：玩家可以找到通往指定球场或替补席的方式
- 📈 技能等级：在球场上比赛的球员将获得更高的网球技能等级
- 🛌 需求：玩得太多的球员会累，需要休息

_讨论：[/r/rust_gamedev](https://www.reddit.com/r/rust_gamedev/comments/ctuocb/6_months_of_game_development_in_rust)，[twitter](https://twitter.com/oliviff/status/1164460622186274817)_

### [gfx-hal 0.3 and wgpu 0.3](https://users.rust-lang.org/t/wgpu-v0-3-is-released) [#](#gfx-hal-0-3-and-wgpu-0-3)

![Mipmap example](https://rust-gamedev.github.io/posts/newsletter-001/gfx-mipmap.png)

`gfx-hal`是 Rust 中的低开销 Vulkanic GPU API。已发布 0.3 版，其中包括：

- MSAA resolves
- 事件 API
- 在 Apple 平台上，构建 Vulkan 后端
- DX12 后端中的“只读”存储支持
- GL 后端中的 WASM 和计算支持
- 所有后端都有很多修复和改进

_讨论：[/r/rust](https://www.reddit.com/r/rust/comments/cnvfrm/gfxhal03_release_notes)_

---

`wgpu`是用于原生平台和 Web 的安全，现代和便携式 GPU API。它基于 gfx-hal 和 Rendy。我们的实现及其 Rust 包装器`wgpu-rs`达到了版本 0.3。主要改进：

- API（大部分）已更新为上游 WebGPU 工作组规范
- 内部死锁保护
- `raw-window-handle`支持
- 分别跟踪纹理阵列层和 mipmap 级别
- 更多 API 功能：
  - 多重采样
  - 间接抽签
  - stencil masks 和参考值
- 更多例子！
- 更多状态验证！

_讨论：[discourse](https://users.rust-lang.org/t/wgpu-v0-3-is-released)，[/r/rust](https://www.reddit.com/r/rust/comments/cu09vr/release_of_wgpu03)_

### [luminance 0.31](https://phaazon.net/blog/luminance-0.31) [#](#luminance-0-31)

[luminance](https://github.com/phaazon/luminance-rs)是类型安全，类型级别和无状态的 Rust 图形框架。

luminance v0.31 已发布[@phaazon](https://github.com/phaazon)。这个版本带来[大量的 major changes 和 bugfixes](https://github.com/phaazon/luminance-rs/blob/master/luminance/CHANGELOG.md#031)，其中包括两个新的箱子：

- [luminance-derive](https://crates.io/crates/luminance-derive) —— 提供了几个过程派生宏，可用于轻松实现所有必需的 traits，以与 luminance 一起使用。特别是，可以使用该箱子以安全的方式实现一些不安全的 traits。
- [luminance-glutin](https://crates.io/crates/luminance-glutin) —— 对[glutin](https://github.com/rust-windowing/glutin) 的窗口支持。

此外，添加了两种学习 luminance 的方法：

> - [examples](https://github.com/phaazon/luminance-rs/blob/master/luminance/examples/README.md)。它们就像单元测试：每个单元测试都引入并专注于非常特定的方面或功能。如果您对给定功能感兴趣，则应该阅读这些。它们不适合从头开始学习，比结构化教程要弱一些，但更简洁。
>
> - [wiki](https://github.com/phaazon/luminance-rs/wiki)。它包含不同的章节，包括教程和新手入门。它不会为您提供给定功能的最佳描述，因为它比起直接编写代码，更着重于整体理解和解释。

_讨论：[/r/rust](https://www.reddit.com/r/rust/comments/cx0syl/announcement_luminance031_luminancederive_and)，[twitter]（<https://twitter.com/phaazon>_/ status / 1167064285643771910）\_

### 其他新闻  [#](#other-news)

- [Vlad Zhukov](https://twitter.com/VladZhukov0)共享[他们首个 Youtube devlog](https://youtu.be/7NojrtICE1k) 关于类似小行星游戏的开发，[带有 Voronoi 图表的过程式解构](https://twitter.com/VladZhukov0/status/1162462543530643457)。

  ![Gameplay of Vlad's prototype](https://rust-gamedev.github.io/posts/newsletter-001/vlad-asteroinds-gameplay.gif)

- [Azriel](https://azriel.im/)发表了一个 devlog ["Charging Up"](https://azriel.im/will/2019/08/16/charging-up) —— [Will](https://azriel91.itch.io/will)的角色现在可以通过按住“攻击”按钮充电。

  ![charging sprites from Will](https://rust-gamedev.github.io/posts/newsletter-001/will-charging.png)

- [droprate](https://crates.io/crates/droprate) —— 根据加权概率图（也称为玩家友好型随机数），用于选择性结果的箱子\[[/r/rust](https://reddit.com/r/rust/comments/co3buo/ann_droprate_a_crate_for_randomly_choosing_things)]。

- ["Compare Against Your Friends"](https://blog.roboinstruct.us/2019/08/02/better-than-your-friends.html)- 在[1.0 release](https://reddit.com/r/rust/comments/cdw1ct/robo_instructus_is_out_now_programming_puzzle)的[Robo Instructus](https://store.steampowered.com/app/1032170/Robo_Instructus) 之后，[Alex Butler](https://twitter.com/bigabgames)发布了更多版本，修复了一些错误，提高了性能，得分和用户界面。

  ![RoboInstructus logo from Steam](https://rust-gamedev.github.io/posts/newsletter-001/roboinstructus.jpg)

- [@Remco](https://twitter.com/wodannson)在推特上分享[a video of 热重载演示](https://twitter.com/wodannson/status/1157472538622078976) \[[/r/rust](https://reddit.com/r/rust/comments/cldaew/hot_reloading_of_function_bodies_in_rust)，[/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/cldajt/hot_reloading_of_function_bodies_in_rust/)]。

- [rx](https://cloudhead.io/rx) —— Rust 中的极简和可扩展像素编辑器 \[[/r/rust](https://www.reddit.com/r/rust/comments/cv6o4q/announcing_rx_minimalist_and_extensible_pixel)，[repo](https://github.com/cloudhead/rx)]。

## Github 上引起关注的 ISSUE [#](#popular-workgroup-issues-in-github)

- [#23 "\[Needed Crate\] A pure rust SPIRV generator"](https://github.com/rust-gamedev/wg/issues/23)
- [#25 "The state of math libraries"](https://github.com/rust-gamedev/wg/issues/25)
- [#26 "\[Tracker\] Better windowing/graphics inter-operation"](https://github.com/rust-gamedev/wg/issues/26)
- [#42 "\[Discussion\] A plan for crate stewardship"](https://github.com/rust-gamedev/wg/issues/42)
- [rust-gamedev.github.io](https://github.com/rust-gamedev/rust-gamedev.github.io)：
  - [#2 "Newsletter"](https://github.com/rust-gamedev/rust-gamedev.github.io/issues/2)（好多信息阿！）
  - [#4 "Create a rust-gamedev.github.io site"](https://github.com/rust-gamedev/rust-gamedev.github.io/issues/4)

## Meeting Minutes [#](#meeting-minutes)

[查看所有的会面 issues](https://github.com/rust-gamedev/wg/issues?q=label%3Ameeting)包括书面记录或[加入下一 meeting](https://github.com/rust-gamedev/wg#join-the-fun)。

## 请求帮助  [#](#requests-for-contribution)

- [winit](https://github.com/rust-windowing/winit)：
  - [Issues： 标记上 "Good first issue" 和 “help wanted”](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22status%3A+help+wanted%22+label%3A%22Good+first+issue%22);
  - [Issues： 标记上 "Blocking a release"](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22Blocking+a+release%22);
- [gfx-rs's "contributor-friendly" issues](https://github.com/gfx-rs/gfx/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor-friendly);

## 加料  [#](#bonus)

只是过去有趣的 Rust 游戏开发链接。:)

![A Snake's Tale's logo](https://rust-gamedev.github.io/posts/newsletter-001/a-snakes-tale-logo.png)

在 2017.07.06 上第一个商业 Rust 游戏之一 ["A Snake's Tale"](https://m12y.com/a-snakes-tale) by [Michael Fairley](https://twitter.com/michaelfairley)已发布：[Steam](https://store.steampowered.com/app/654810/A_Snakes_Tale)（Windows / Linux / macOS），[itch.io](https://m12y.itch.io/a-snakes-tale)，[AppStore](https://itunes.apple.com/us/app/a-snakes-tale/id1211845149?mt=8&at=1001lnX5)，[Google Play](https://play.google.com/store/apps/details?id=com.m12y.asnakestale)。

> 蛇的故事是一个关于‘狭窄地方的蛇’的益智游戏。清理一条通往洞的路径，沿途吃一些鸡蛋，并确保按下所有按钮。

[![Part of A snake's Tail's trailer](https://rust-gamedev.github.io/posts/newsletter-001/a-snakes-tail.gif)](https://www.youtube.com/watch?v=23pQmEuueNw)

^_点击 GIF 以查看[the full release trailer](https://www.youtube.com/watch?v=23pQmEuueNw)_

有关该游戏及其开发方式的几篇文章：

- ["I Made a Game in Rust"](https://michaelfairley.com/blog/i-made-a-game-in-rust)，
- ["A Snake's Tale Postmortem"](https://michaelfairley.com/blog/a-snakes-tale-postmortem)。

---

今天就是所有新闻，感谢您的阅读！

想要下一期新闻中，提到的内容吗？[Send us a pull request](https://github.com/rust-gamedev/rust-gamedev.github.io)。

另外，订阅[@rust_gamedev on Twitter](https://twitter.com/rust_gamedev)要么[/r/rust_gamedev subreddit](https://reddit.com/r/rust_gamedev)如果您想接收新消息！

**这篇文章的讨论**：[/r/rust](https://www.reddit.com/r/rust/comments/cyu3zg/this_month_in_rust_gamedev_1_august_2019)，[twitter](https://twitter.com/rust_gamedev/status/1168614980721266695)。

[](https://rust-gamedev.github.io/posts/newsletter-001/)

## Rust Game Development Working Group

紧跟 Rust 游戏开发工作组的最新进展。

- [Github (rust-gamedev)](https://github.com/rust-gamedev "rust-gamedev")
- [Twitter (rust_gamedev)](https://twitter.com/rust_gamedev "rust_gamedev")
- [Discord (#wg-gamedev)](https://discord.gg/j6QJsMd "Discord")
- [RSS feed](https://rust-gamedev.github.io/feed.xml "RSS")
