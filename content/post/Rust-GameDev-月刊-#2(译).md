---
title: "Rust GameDev 月刊 #2(译)"
date: 2020-01-20T13:21:58+08:00
categories: ["Rust"]
tags: ["month"]
description: "Rust-GameDev-月刊-#1"
css: ["/css/main.css", "/css/stylesheet.css"]
series: "Rust-GameDev-月刊-中文"
draft: false
---

<style>
a { color: #b33434;}
div.inner  { background: #fbf6ec !important;}
</style>

[![](https://rust-gamedev.github.io/logo.png)](https://rust-gamedev.github.io/)

# [Rust GameDev #2 月刊 - 9 月 2019 ](https://rust-gamedev.github.io/posts/newsletter-002/)

2019-10-05

欢迎来到 Rust GameDev 工作组的月刊第二期。

[Rust](https://rust-lang.org)是一种追求三重性的系统语言：安全性、并发性和速度。这些目标与游戏开发非常一致。

我们希望为想在开发过程中，使用 Rust 的人建立一个吸引人的生态系统！想参与吗？[加入 Rust GameDev working group!](https://github.com/rust-gamedev/wg#join-the-fun)

## 游戏更新  [#](#game-updates)

### [Veloren](https://veloren.net) [#](#veloren)

![Town surrounded by a wall](https://rust-gamedev.github.io/posts/newsletter-002/veloren-town.png)

[Veloren](https://veloren.net)是一个开放的世界，开源的多人像素 RPG。游戏处于开发的早期阶段，但可以玩。

九月的一些改进：

- 完善多阶段城镇建设；
- 改进库存系统和角色创建；
- 在水、水物理、湖泊和河流方面取得了巨大进展！
- 新的块数据结构；
- 三维地图和小地图；
- 第一人称观点；
- 弓箭；
- 性能优化；

新视频：["24 分钟的 Alpha Gameplay"](https://youtube.com/watch?v=YyvXXCjpbqQ).

完整的每周开发日志“本周在 Veloren…”：[#31](https://veloren.net/devblog-31),[#32](https://veloren.net/devblog-32),[#33](https://veloren.net/devblog-33),[#34](https://veloren.net/devblog-34),[#35](https://veloren.net/devblog-35).

### [Zemeroth v0.6](http://ozkriff.games/2019-09-21--devlog-zemeroth-v0-6) [#](#zemeroth-v0-6)

![fighters smash demons in fire and poison clouds](https://rust-gamedev.github.io/posts/newsletter-002/zemeroth.png)

[Zemeroth](https://github.com/ozkriff/zemeroth)是一款回合制的极简 2d 战术游戏。

本月[Zemeroth v0.6](https://github.com/ozkriff/zemeroth/releases/tag/v0.6.0)发布。此版本的主要功能包括：

- 名望和 fighter 升级，
- 财产，
- 精灵帧和翻转，
- 状态效果图标。

阅读[完整的 devlog post](http://ozkriff.games/2019-09-21--devlog-zemeroth-v0-6)或观看[the video version](http://youtu.be/6tZByt4LBlU)。

### [Twenty Asteroids](https://itch.io/queue/c/449652/rustlang-games?game_id=477762) [#](#twenty-asteroids)

[![space ship destroys enemies and asteroids with plasma beams](https://rust-gamedev.github.io/posts/newsletter-002/asteroids-demo.gif)](https://itch.io/queue/c/449652/rustlang-games?game_id=477762)

[@VladZhukov0](https://twitter.com/VladZhukov0)发表了一些关于他们["Twenty Asteroids"](https://itch.io/queue/c/449652/rustlang-games?game_id=477762)游戏：

- 开发日志 2：[Video](https://youtu.be/gYevCyU5gxU)以及[Text](https://pum-purum-pum-pum.itch.io/asteroids-like-game/devlog/98842/my-asteroids-like-game-devlog-002)版本；
- 开发日志 3：[Video](https://youtu.be/YSYRKzogbKg)以及[Text](https://pum-purum-pum-pum.itch.io/asteroids-like-game/devlog/101357/new-menu-performance-and-abilities-devlog-3)版本。

更新包括：

- 新的敌人：一艘有弹珠状子弹和激光网的船；
- 新的升级：激光射程和子弹反射；
- 爆炸的大小，现在取决于小行星的大小；
- 改进主菜单，升级和死亡画面；
- 更好的色彩对比度；
- 新的人工智能行为：跟随并绕圈；
- 调试性能图；

### [Amethyst Games](https://amethyst.rs) [#](#amethyst-games)

- [Space Shooter v0.1.3](https://github.com/amethyst/space_shooter_rs/releases/tag/v0.1.3) by [@carlosupina](https://twitter.com/carlosupina)引入货币制度、商店制度和音响效果：[观看 devlog video](https://youtube.com/watch?v=MmdUrZzuGfw).

  [![shmap gameplay sample](https://rust-gamedev.github.io/posts/newsletter-002/space-shooter.gif)](https://youtube.com/watch?v=MmdUrZzuGfw)

- ["Stabman", by Noah2610](https://github.com/Noah2610/LD44).

  ![Stabman in the beginning of the overworld level](https://rust-gamedev.github.io/posts/newsletter-002/stabman-overworld.png)

- [@mvlabat](https://twitter.com/mvlabat)是[working on interpolation in his multiplayer prototype (video)](https://youtu.be/xJm6cI_XmT4).

- [@a5huynh](https://github.com/a5huynh)让[3D 路径 工作 (video)](https://youtu.be/STWQRTxnhRo).

- [Azriel Hoh](https://twitter.com/im_azriel)发布[重大 devblog 更新， 标语是 "Focus!"](https://azriel.im/will/2019/09/27/focus).

  ![bots attack](https://rust-gamedev.github.io/posts/newsletter-002/rox_clone_attack.png)

- [@webshinra](https://twitter.com/Webshinra)在他们的六边形游戏中，与 raycasted FOV 取得了进展。

  ![hexagonal map with two mechs, paths and visually blocked tiles](https://rust-gamedev.github.io/posts/newsletter-002/hex-fov.jpeg)

### 其他游戏新闻  [#](#other-game-news)

- [@dooskington](https://twitter.com/dooskington)出版了他们的第五部 devlog：["Stats And Skills"](https://dooskington.com/dev-log/5);

  ![Stats and skill demo](https://rust-gamedev.github.io/posts/newsletter-002/dooskington-devlog-5-screenshot.jpeg)

- [Alex Butler](https://twitter.com/bigabgames)继续打磨他们的”[Robo Instructus](https://steamcommunity.com/games/1032170/announcements/detail/1604892840079306082)“游戏；[1.8, 1.9, 1.10 and 1.11 版以及发布](https://steamcommunity.com/app/1032170/allnews)：官方 macOS 支持、错误修复和更好的翻译。

  ![Robo Instructus gameplay screenshot with full UI](https://rust-gamedev.github.io/posts/newsletter-002/robo.jpg)

- [@Wraithan 让 tower placement 工作](https://twitter.com/Wraithan/status/1172982932341805056)在他们的“幽灵防御”塔防游戏中；开发过程会[在 Twitch](https://twitch.tv/wraithan)直播。

  ![Towers on the map](https://rust-gamedev.github.io/posts/newsletter-002/wraith-def.jpeg)

- [@oliviff](https://twitter.com/oliviff)发布[v0.0.1](https://twitter.com/oliviff/status/1168556346431692800)以及[v0.0.2](https://twitter.com/oliviff/status/1172912164488843265)的更新，到[Tennis Academy](https://iolivia.me/posts/6-months-of-rust-game-dev)：简化的游戏流程、区域、现金流、动画、玩家的状态视觉提示等。

  ![Tennis Academy v0.0.2 Demo](https://rust-gamedev.github.io/posts/newsletter-002/tennis-academy.gif)

- 这个[Garden](https://epcc.itch.io/garden)游戏是[再次积极开发](https://twitter.com/logicsoup/status/1174259591250661379)。开发人员[are coming soon!](https://twitter.com/logicsoup/status/1166469607412158464)

  ![a screenshot from Garden showing a build and some trees](https://rust-gamedev.github.io/posts/newsletter-002/garden.jpeg)

- ["Live"](https://nuria.itch.io/live-rust)由[@pincfloit](https://twitter.com/pincfloit) —— 一款小型命令行界面生存游戏\[[twitter](https://twitter.com/pincfloit/status/1173965160089837568), [github](https://github.com/codegram/live-rust)]。

  [![Live demo](https://rust-gamedev.github.io/posts/newsletter-002/live-cli.png)](https://nuria.itch.io/live-rust)

- [@seratonik 共享了一个 GIF with 全向阴影](https://twitter.com/seratonik/status/1169106102710988801):

  [![shadows demo](https://rust-gamedev.github.io/posts/newsletter-002/shadows.gif)](https://twitter.com/seratonik/status/1169106102710988801)

- [@MrVallentin](https://twitter.com/MrVallentin)在推特上，发布了一系列关于他们的像素引擎的更新：[falling cubes](https://twitter.com/MrVallentin/status/1170164060542918656), [文本渲染](https://twitter.com/MrVallentin/status/1170515003113451520), [60M 块的生成，只需要一眨眼的功夫](https://twitter.com/MrVallentin/status/1171773622039515136), [重塑](https://twitter.com/MrVallentin/status/1171774889335951361), [回顾 video](https://twitter.com/MrVallentin/status/1174493952894033920), [saving 和 loading](https://twitter.com/MrVallentin/status/1176996637681623042)，还有更多。

  ![screenshot of the WIP terrain generation](https://rust-gamedev.github.io/posts/newsletter-002/vallentin-voxel-terrain.jpeg)

- [@Mistodon](https://twitter.com/Mistodon)得到了他们的整个游戏["Disconnect"](https://mistodon.itch.io/disconnect)能[在终端上渲染](https://twitter.com/Mistodon/status/1175361784246603776);

  [![Disconnect in the terminal](https://rust-gamedev.github.io/posts/newsletter-002/disconnect-console.png)](https://twitter.com/Mistodon/status/1175361784246603776)

## 库 & 工具更新  [#](#library-tooling-updates)

### [gfx-rs & wgpu-rs: 项目更新](https://gfx-rs.github.io/2019/10/01/update.html) [#](#gfx-rs-wgpu-rs-project-update)

[![gfx-rs rusty logo](https://rust-gamedev.github.io/posts/newsletter-002/gfx-logo.png)](https://gfx-rs.github.io/2019/10/01/update.html)

[gfx-rs](https://github.com/gfx-rs/gfx)是一个 Rust 项目，旨在使底层 GPU 编程具有低开销的可移植性。它是一个类似于 Vulkan 的 Rust API，有多个后端实现：Direct3D 12/11、Metal、Vulkan，甚至 OpenGL。

[wgpu-rs](https://github.com/gfx-rs/wgpu-rs)是一个基于 gfx-rs 的 Rust 项目，它提供了安全性、可访问性，甚至更强的可移植性。

- gfx rs 被精简了：“神奇”的依赖（比如[failure](https://github.com/rust-lang-nursery/failure)以及[derivative](https://github.com/mcarton/rust-derivative))被移除，提升了 8.5 倍的新 gfx-hal 构建速度；gfx-hal 的“类型”层被移除。
- 从 wgpu rs 中，删除了后端功能；
- 全新的[swapchain](https://vulkan-tutorial.com/Drawing_a_triangle/Presentation/Swap_chain)模型的原型化和实现。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/dbzxw2/gfxrs_late_2019_project_update)_

### [Mun](https://mun-lang.org) 和 热重载实验 [#](#mun-and-hot-reloading-experiments)

![Mun text logo](https://rust-gamedev.github.io/posts/newsletter-002/mun-logo.png)

[Mun](https://mun-lang.org)是 gamedev 的一种脚本语言，专注于 Rust 编写的快速迭代时间。

Mun 的支柱：

- 热重新加载。Mun 原生支持热重加载 —— 应用程序运行时，代码和资源的更改过程，它可以在所有目标平台和控制台上运行，运行时开销很小。它的 runtime 有有用的错误消息，并且可以很容易地嵌入到其他语言中。
- 静态类型。Mun 的 类型系统消除了一整类 runtime 错误，并提供了强大的 IDE 集成以及自动补全和重构工具，允许开发人员专注于编写代码。
- 信诺。Mun 使用 LLVM 编译可在任何目标平台上原生执行的代码，以确保尽可能最佳的 runtime 性能。

Mun 开发背后的驱动力是原生支持的函数和数据热重新加载。因此，该语言及其语法，将继续以添加支持热重加载的语义的速度增长。目前，语言如下：

```
fn main() { let sum = add(a, b); // 注释: Mun 原生支持 bool, float, and int let is\_true = true; let var: float = 0.5;
} // 函数定义的顺序并不重要
fn add(a: int, b: int): int {
    a + b
}
```

项目的源代码[is available on GitHub](https://github.com/mun-lang/mun)，处在 MIT 或 Apache 许可下。

Mun runtime 在 Rust 中实现。查看[一个 GIF 演示，关于 Rust hot reloading 的功能性](https://reddit.com/r/rust/comments/cywwtv/progress_on_hot_reloading_experimentation_in_rust)这表明：

- 捕捉和记录错误（例如，类型不匹配），
- 热加载共享库的符号（用于反射）和方法逻辑，
- runtime 可调用方法和类型/方法的反射。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/d4wngp/released_source_of_hot_reloading_experimentation)_

### Rust [Roguelike Toolkit](https://github.com/thebracket/rltk_rs) and [Roguelike Tutorial](https://bfnightly.bracketproductions.com/rustbook) [#](#rust-roguelike-toolkit-and-roguelike-tutorial)

![Minimal pathfinding and FoV example](https://rust-gamedev.github.io/posts/newsletter-002/rltk-rs-example-06.gif)

[rltk_rs](https://github.com/thebracket/rltk_rs)由[@herberticus](https://patreon.com/blackfuture)是[C++ Roguelike Toolkit](https://github.com/thebracket/rltk) ([什么是 "Roguelike?"](https://en.wikipedia.org/wiki/Roguelike))。

它提供了编写 roguelike 游戏所需的所有基本功能，以及鼠标支持、嵌入式资源系统、Web 程序集支持等。

全部[示例](https://github.com/thebracket/rltk_rs#examples)都链到浏览器 WASM，以供尝试。

后端使用[glow](https://github.com/grovesNL/glow)在不同版本之间抽象 OpenGL。用于将’资源‘直接嵌入二进制文件的 API。

如果你想看到一个使用 rltk 的实用 roguelike_rs，查看[Rusty Roguelike](https://github.com/thebracket/rustyroguelike)。

---

[现在 Roguelike 教程](https://bfnightly.bracketproductions.com/rustbook)包括 20 多个章节和继续增长。

它涵盖了“hello rust”和“什么是 ECS？”添加怪物，设备，漂亮的菜单，保存/加载，多层次，血迹，粒子效果，魔法地图卷轴，等等。

本教程有指向所有示例的 Web 部件链接，因此您可以在浏览器中运行它们。

### [EmbarkStudios/texture-synthesis](https://github.com/EmbarkStudios/texture-synthesis) [#](#embarkstudios-texture-synthesis)

![Generated textures samples](https://rust-gamedev.github.io/posts/newsletter-002/texture-synthesis.jpg)

[Embark](https://embark.games)他们的纹理合成箱是开源的 **[texture-synthesis](https://github.com/EmbarkStudios/texture-synthesis)**。这是一个用 Rust 编写的基于实例的非参数图像生成算法。

[The repo](https://github.com/EmbarkStudios/texture-synthesis)还包括多个代码示例和测试图像，在 release 选项卡下，可以找到带有命令行界面的编译二进制文件。

还有，看一段很长的记录会议["More Like This, Please! Texture Synthesis and Remixing from a Single Example"](https://youtu.be/fMbK7PYQux4) 就更深入地解释了这种技术和背景。

[Embark](https://embark.games)已经发布完整的清单：[embark.rs](http://embark.rs).

_讨论：[twitter](https://twitter.com/anastasiaopara/status/1169594058530066432)_

---

还有，

- [Embark 会赞助 RustFest in Barcelona this year.](https://twitter.com/AriVanider/status/1171359194336903169)
- [Embark 开始聘用 new grads](https://embark.games/position/software-engineer-new-grad) \[[twitter](https://twitter.com/AriVanider/status/1173903615498567680)].

### [Iced - a Renderer-Agnostic GUI Library](https://github.com/hecrj/iced) [#](#iced-a-renderer-agnostic-gui-library)

[![All widgets tour demo: radio buttons, sliders, debugging view, etc](https://rust-gamedev.github.io/posts/newsletter-002/iced.gif)](https://github.com/hecrj/iced/tree/e82e96e6/examples#tour)

Iced 是一个与渲染器无关的图形用户界面库，专注于简单性和类型安全性。它最初是为了将[Elm](https://elm-lang.org)的简单性以及 Elm 架构带到[Coffee 2D game engine](https://github.com/hecrj/coffee)。

特征：

- 简单、易用、不依赖渲染器的 API；
- 基于 flexbox 的响应式布局；
- 类型安全，无功规划模型；
- 许多内置小部件和自定义小部件支持。

查看[设计概略 in the repo's README](https://github.com/hecrj/iced#overview).

_讨论：[/r/rust](https://reddit.com/r/rust/comments/czzjnv/iced_a_rendereragnostic_gui_library)_

### [Amethyst](https://amethyst.rs) [#](#amethyst)

![amethyst logo](/amethyst-logo.png)

[Amethyst](https://amethyst.rs)是一个游戏引擎和工具集的野心勃勃的游戏开发商。它通过数据驱动设计和 ECS 架构，使游戏开发者，能够在不陷入太多麻烦的情况下，制作复杂的游戏。

工具：

- [Amethyst Engine v0.13 已发布](https://github.com/amethyst/amethyst/releases/tag/v0.13.0)。一个新的`amethyst_tiles`箱子被添加，还有[the Pong 教程](https://book.amethyst.rs/stable/pong-tutorial/pong-tutorial-06.html)现在完成添加音频部分。

- [Laminar v0.3.1 已发布](https://github.com/amethyst/laminar/releases/tag/0.3.1)。

- [@\_AndreaCatania](https://twitter.com/_AndreaCatania)发表了["初始物理世界 - Amethyst physics 教程 #1"](https://youtube.com/watch?v=XzSKuY9nv7A)视频。

- [amethyst-imgui v0.5 is out](https://twitter.com/AmethystEngine/status/1177720011013709824)，支持新 imgui 对接功能的测试版。

  ![docking widgets demo](https://rust-gamedev.github.io/posts/newsletter-002/amethyst-imgui.gif)

- ["如何制作一个回合制游戏，with ECS 模式"](https://community.amethyst.rs/t/classic-turn-based-workflow-how-to/1082/20) post，by [@webshinra](https://twitter.com/webshinra)。

- [@valkum](https://github.com/valkum)是[实现区域光，通过线性 transformed cosines](https://youtube.com/watch?v=KVpLPInWRWg)。

### [Godot](https://godotengine.org) and Rust [#](#godot-and-rust)

![Recall Singularity's ship base](https://rust-gamedev.github.io/posts/newsletter-002/recall-singularity.jpeg)

[Tom Leys](https://twitter.com/RecallSingular1)正在开发一个“召回奇点”游戏，关于设计自动工厂船舶和车站，本月他们发表了一些贴文，关于使用[the Godot engine](https://godotengine.org)和 Rust：

- ["我是怎么样使用 Rust 和 Godot 勘查空间"](https://blog.usejournal.com/how-i-use-rust-and-godot-to-explore-space-806bb810e950) \[[/r/godot](https://reddit.com/r/godot/comments/d5qdoy/inspiration_how_i_use_rust_and_godot_to_explore)];
- ["Gorgeous Godot games in Rust"](https://medium.com/@recallsingularity/gorgeous-godot-games-in-rust-1867c56045e6) \[[/r/rust](https://reddit.com/r/rust_gamedev/comments/d75qfz/gorgeous_godot_games_in_rust)];
- ["一个基础 Godot-Rust 架构"](https://medium.com/@recallsingularity/a-basic-godot-rust-structure-eb855ba07223);

### [通过 Rust Macros 使用预构建房间，更多有趣过程式地牢](https://jamesbaum.co.uk/blether/procedural-generation-prebuilt-rooms-rust-macros) [#](#use-prebuilt-rooms-with-rust-macros-for-more-interesting-procedural-dungeons)

![Top-down view on a generated dungeon](https://rust-gamedev.github.io/posts/newsletter-002/proc-dungeons.png)

[@whostolemyhat](https://twitter.com/whostolemyhat) 发布了他们的教程系列的第四部分，关于 Rust 的程序生成。在本教程中，房间生成功能已更新，以便它可以从选择的预建房间样式中进行选择，并创建标准的空房间。

_讨论：[/r/rust](https://reddit.com/r/rust/comments/d85i8x/make_more_interesting_procedural_dungeons_using)_

### 其他库 & 工具新闻  [#](#other-library-tooling-news)

- [**uset**](https://crates.io/crates/uset) —— 为中小型存储元素设计的 set 和 map 的一种实现，这些元素变化很快，即在视频游戏中动态变化的场景中。

- **[blend](https://github.com/lukebitts/blend)** —— [Blender](https://blender.org)的.blend 文件的解析器和运行时，可用于读取（几乎）文件中的所有内容：从网格数据、材质、相机和动画到用户首选项、窗口位置和渲染设置 \[[/r/rust](https://reddit.com/r/rust/comments/d70lu6/blend_a_parser_and_runtime_for_blenders_blend)]。

- **[cubism-rs](https://github.com/Veykril/cubism-rs)**（[Live2D Cubism](https://www.live2d.com/en/download/cubism-sdk)的 Rust 绑定库) 获得对[Piston2D](https://www.piston.rs)的渲染器支持。

  ![Live2D Piston demo](https://rust-gamedev.github.io/posts/newsletter-002/live2d-cubism.png)

- ["Github Actions CI with Rust 和 SDL2"](https://alexene.dev/2019/09/04/Github-actions-CI-rust-SDL2.html) - [Alexandru Ene](https://twitter.com/_AlexEne_)写了一篇关于 CI 配[github actions](https://github.com/features/actions)，用于[他们的业余游戏项目](https://alexene.dev/2019/01/15/After-hours-game-development.html)，该项目使用 Rust 和 SDL2。

  ![Github Actions with SDL2 screencast demo](https://rust-gamedev.github.io/posts/newsletter-002/github_actions_ci.gif)

- [@phaazon](https://github.com/phaazon)发布[luminance](https://crates.io/crates/luminance)0.33 ，它[带来了几何实例的支持](https://reddit.com/r/rust/comments/d0us73/announcement_luminance033)；还有，第三个 wiki 章节["Wavefront .obj loader"](https://github.com/phaazon/luminance-rs/wiki/Wavefront-.obj-loader)已推出。

  ![loaded and lighted Suzanne model](https://rust-gamedev.github.io/posts/newsletter-002/suzanne_lit.png)

- [phaazon/spline-editor](https://github.com/phaazon/spline-editor) —— 给[splines 箱子](https://crates.io/crates/splines)的样条线编辑器，使用[luminance](https://crates.io/crates/luminance)。

  ![complex spline in the editor](https://rust-gamedev.github.io/posts/newsletter-002/splines.png)

- [@magistratic](https://twitter.com/magistratic)来了场会话，在 Doom 的[BSP](https://en.wikipedia.org/wiki/Binary_space_partitioning)渲染引擎上，使用了他们的 Rust 实现，于 RevolverConf 演示：视频（挪威语）和 WASM 可用演示[在这里](https://magnushoff.com/blog/doom-revolverconf) ([source code](https://github.com/maghoff/wad-render/tree/revolverconf-2019.2))。

  ![WASM demo](https://rust-gamedev.github.io/posts/newsletter-002/doom-bsp-wasm.png)

- [**rx**](https://cloudhead.io/rx)由[@cloudhead](https://cloudhead.io)是一个现代的像素编辑器和动画师；本月，v0.2.0 发布，新的画笔模式 —— 像素完美绘制，对称和多帧绘制 —— 一个新的 GLFW 后端和`.gif`输出。\[[/r/rust](https://reddit.com/r/rust/comments/dauizc/rx_v020_released_a_modern_pixel_editor), [github](https://github.com/cloudhead/rx)].

  [![rx demo](https://rust-gamedev.github.io/posts/newsletter-002/rx.gif)](https://cloudhead.io/rx)

- 像素艺术编辑器 **[Xprite](https://pickitup247.com/xprite.html)** 是现在[开源 under GNU GPL](https://github.com/rickyhan/xprite-editor) \[[/r/rust](https://reddit.com/r/rust/comments/d4r0o3/pixel_art_editor_xprite_is_now_open_source), [/r/rust_gamedev](https://reddit.com/r/rust_gamedev/comments/d3vl65/xprite_is_now_open_source)]。

  ![XPrite drawing demo](https://rust-gamedev.github.io/posts/newsletter-002/xprite-demo.gif)

- **[minimum](https://github.com/aclysma/minimum)** by ([@aclysma](https://twitter.com/aclysma))是一个游戏开发框架，提供了基本的工具和内容创作工作流；本月，在编辑器中，添加了可拖动形状的渲染和旋转/缩放\[[YouTube demo](https://youtube.com/watch?v=BON_RvVFiWY)]。

  ![editor with a bunch of shapes](https://rust-gamedev.github.io/posts/newsletter-002/minimum.png)

- 这个 **[imgui-inspect](https://github.com/aclysma/imgui-inspect)**基于宏的属性编辑器 by [@aclysma](https://twitter.com/aclysma)是上述“minimum”项目的副产品。

  ![inspector widget with position, debug draw rect, and physics body sub-widgets](https://rust-gamedev.github.io/posts/newsletter-002/imgui-inspect.png)

- [Project Deios](https://kickstarter.com/projects/dungeonfog/project-deios-dungeonfog-mapmaker-suite-for-worldbuilders) 决定在 Rust 中实现其核心，并一直在寻找 Rust 图形程序员：[/r/rust announcement](https://reddit.com/r/rust/comments/d487dr/were_looking_for_a_rust_graphics_programmer).

  ![Deios logo ant promo pic](https://rust-gamedev.github.io/posts/newsletter-002/deios.jpg)

## Popular Workgroup Issues in Github [#](#popular-workgroup-issues-in-github)

- [#36 "Adoption of Rust over time in existing game codebases"](https://github.com/rust-gamedev/wg/issues/36)
- [#48 "Placement New"](https://github.com/rust-gamedev/wg/issues/48)
- [#49 "Branch prediction hints (i.e. Likely/Unlikely)"](https://github.com/rust-gamedev/wg/issues/49)
- [#51 "Using wasm-bindgen for games"](https://github.com/rust-gamedev/wg/issues/51)

## Meeting Minutes [#](#meeting-minutes)

[查看所有的会面 issues](https://github.com/rust-gamedev/wg/issues?q=label%3Ameeting)包括书面记录或[加入下一 meeting](https://github.com/rust-gamedev/wg#join-the-fun)。

## Requests for Contribution [#](#requests-for-contribution)

- [winit](https://github.com/rust-windowing/winit):
  - [Issues：标记上 "Good first issue" 和 “help wanted”](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22status%3A+help+wanted%22+label%3A%22Good+first+issue%22);
  - [Issues：标记上 "Blocking a release"](https://github.com/rust-windowing/winit/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22Blocking+a+release%22);
- [gfx-rs's "contributor-friendly" issues](https://github.com/gfx-rs/gfx/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor-friendly);
- [wgpu's "help wanted" issues](https://github.com/gfx-rs/wgpu-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22);
- [luminance's "low hanging fruit" issues](https://github.com/phaazon/luminance-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22low+hanging+fruit%22);
- Amethyst 的要求：["非特定渲染器的 GUI 库 “Iced” by @hecrj looks _so_ good。若想让此与 Amethyst 一起合作，请联系我们! (or just do it...)"](https://twitter.com/AmethystEngine/status/1169922826033336320).

## Bonus [#](#bonus)

只是过去有趣的 Rust 游戏开发链接。:)

[![a scene with sand, water, a tree, flowers, and fire](https://rust-gamedev.github.io/posts/newsletter-002/sandspiel.png)](https://sandspiel.club)

**[Sandspiel](https://sandspiel.club)**是一场落沙游戏 by [@MaxBittker](https://maxbittker.com)建于 2018 年底，使用 Rust（via WASM）、WebGL 和一些 JS 将东西粘在一起。

> Sandspiel 是一个像素物理模拟沙盒，在这里你可以用元素作画，进行实验，建立自己的世界！
>
> 元素包括冰、水、沙、熔岩、火、油、植物、真菌等等！
>
> 我们的目标是创造一个有趣的细胞自动环境，并支持与其他玩家分享和分享有趣的创作。最后，我希望这个平台支持通过可编程的细胞自动 API 编辑和上传您自己的元素。

游戏的历史和开发过程，记录在 **["Making Sandspiel"](https://maxbittker.com/making-sandspiel)** 博客文章。

[GitHub 上的源代码](https://github.com/MaxBittker/sandspiel)。

游戏的社区仍处于活动状态：检查[@sandspiel_feed feed of uploads](https://twitter.com/sandspiel_feed).

_讨论：[/r/rust](https://reddit.com/r/rust/comments/a6v0p1/sandspiel_a_falling_sand_game_built_in_rustwebgl), [/r/programming](https://reddit.com/r/programming/comments/a6zxou/sandspiel_a_falling_sand_game_built_in_rust), [hacker news](https://news.ycombinator.com/item?id=18696291)_

---

今天就是所有新闻，感谢您的阅读！

想要下一期新闻中，提到的内容吗？[Send us a pull request](https://github.com/rust-gamedev/rust-gamedev.github.io)。

另外，订阅[@rust_gamedev on Twitter](https://twitter.com/rust_gamedev)要么[/r/rust_gamedev subreddit](https://reddit.com/r/rust_gamedev)如果您想接收新消息！

**本帖讨论**: [/r/rust](https://reddit.com/r/rust/comments/ddtbpm/this_month_in_rust_gamedev_2_september_2019), [twitter](https://twitter.com/rust_gamedev/status/1180590459913035776).

[](https://rust-gamedev.github.io/posts/newsletter-002/)

## Rust Game Development Working Group

了解 Rust 游戏开发工作组的最新进展。

- [Github (rust-gamedev)](https://github.com/rust-gamedev "rust-gamedev")
- [Twitter (rust_gamedev)](https://twitter.com/rust_gamedev "rust_gamedev")
- [Discord (#wg-gamedev)](https://discord.gg/j6QJsMd "Discord")
- [RSS feed](https://rust-gamedev.github.io/feed.xml "RSS")

