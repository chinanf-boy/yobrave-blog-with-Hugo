---
title: '>>> Rust 官方学习索引(译+Copy)'
date: 2018-12-28T20:13:43+08:00
categories: ['rust']
tags: ['learn']
description: '学习 Rust 编程语言'

css:
  [
    '/other_css/2018/vendor.css',
    '/other_css/2018/fonts.css',
    '/other_css/2018/app.css',
  ]
draft: false
labels: false
---

---

{{% rawcss %}}.blog-post > h2:first-child {display:none}{{% /rawcss %}}

<div id="main-content">

<header class="mt3 mt2-ns mb4 mb5-ns tc tl-ns">
  <div class="w-100 mw-none ph3 mw8-m mw9-l center f3">
    <h1>  ❤️ 学习 Rust</h1>
  </div>
</header>

<section id="learn-begin" class="green">
  <div class="w-100 mw-none ph3 mw8-m mw9-l center f3">
    <header>
      <h2>开启您的 Rust 之旅</h2>
      <div class="highlight"></div>
    </header>
    <section class="flex flex-column flex-row-l pv0-l">
      <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pb4 pb5-m pb6-ns ph4-l">
        <div class="v-top pl4 pl0-l pt3-l measure-wide-l flex-l flex-column-l flex-auto-l">
          <p class="flex-grow"><strong>《Rust 程序设计语言》</strong>被亲切地称为“圣经”。本书从基本原则出发，给出了
        Rust 语言的概览。您将在阅读本书的过程中构建几个项目，读完本书后，您就能扎实地掌握 Rust 语言。</p>
          <a class="button button-secondary" href="https://kaisery.github.io/trpl-zh-cn/">阅读本书！（中文）</a>
        </div>
      </div>
      <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pb4 pb5-m pb6-ns ph4-l">
        <div class="v-top pl4 pl0-l pt3-l measure-wide-l flex-l flex-column-l flex-auto-l">
          <p class="flex-grow">此外，Rustlings 课程会指导您下载并设置 Rust 工具链，在命令行中教您阅读和编写 Rust 代码的语法基础。它可以运行在您自己的环境中，是《通过例子学 Rust》之外的另一种选择。</p>
          <a class="button button-secondary" href="https://github.com/rust-lang/rustlings/">学习 Rustlings 课程！</a>
        </div>
      </div>
      <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pb4 pb5-m pb6-ns ph4-l">
        <div class="v-top pl4 pl0-l pt3-l measure-wide-l flex-l flex-column-l flex-auto-l">
          <p class="flex-grow">如果您不喜欢阅读大量的文档来学习语言，那么《通过例子学 Rust》就能涵盖您要学的知识。虽然本书花了很多篇幅来解释代码，但它展示的代码很丰富，并且尽量减少了文字解释。它还包括很多练习！</p>
          <a class="button button-secondary" href="http://llever.com/rust-by-example-cn/">阅读《通过例子学 Rust》！（中文）</a>
        </div>
      </div>
    </section>
  </div>
</section>

<section id="learn-use" class="white">
  <div class="w-100 mw-none ph3 mw8-m mw9-l center f3">
    <header>
      <h2 class="black">
        与 Rust 共同成长
      </h2>
      <div class="highlight"></div>
    </header>
    <div class="row black">
      <h3>阅读核心文档</h3>
      <p>以下所有文档都可以用 <code>rustup doc</code> 命令在本地阅读，它会在您的浏览器中离线打开这些资源！</p>
      <section class="flex flex-column">
        <div class="pt3 flex flex-column flex-row-l items-center-l mb4-l">
          <a href="https://doc.rust-lang.org/std/index.html" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">标准库</a>
          <p class="pl4-l ma0-l mt1 mb3">
            详尽的 Rust 标准库 API 手册。
          </p>
        </div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
          <a href="https://doc.rust-lang.org/edition-guide/index.html" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">版本指南</a>
          <p class="pl4-l ma0-l mt1 mb3">
            Rust 版本指南。
          </p>
        </div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
          <a href="http://llever.com/cargo-book-zh" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">Cargo 之书（中文）</a>
          <p class="pl4-l ma0-l mt1 mb3">
            Rust 的包管理器和构建系统。
          </p>
        </div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
          <a href="http://llever.com/rustdoc-zh" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">rustdoc 之书(中文)</a>
          <p class="pl4-l ma0-l mt1 mb3">
            学习如何为您的 crate 编写完美的文档。
          </p>
        </div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
          <a href="http://llever.com/rustc-zh" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">rustc 之书(中文)</a>
          <p class="pl4-l ma0-l mt1 mb3">
            熟悉 Rust 编译器中可用的选项。
          </p>
        </div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
          <a href="https://doc.rust-lang.org/error-index.html" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">编译错误索引表</a>
          <p class="pl4-l mb0 mt1 ma0-l">
            深入解释了您可能会遇到的编译错误。
          </p>
        </div>
      </section>
    </div>
    <hr>
    <div class="row black">
      <h3>在应用领域中点亮您的技能树</h3>
        <section class="flex flex-column">
<div class="pt3 flex flex-column flex-row-l items-center-l mb4-l">
  <a href="http://llever.com/cli-wg-zh" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">
    命令行之书 (中文)
  </a>
  <p class="pl4-l ma0-l mt1 mb3">
    学习如何用 Rust 构建高效的命令行应用。
  </p>
</div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
<a href="http://llever.com/rustwasm-book" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">
  WebAssembly 之书(中文)
</a>
<p class="pl4-l ma0-l mt1 mb3">
  通过 WebAssembly 用 Rust 构建浏览器原生的库。
</p>
</div>

<div class="pt4 pt3-l flex flex-column flex-row-l items-center-l mb4-l">
<a href="https://rust-embedded.github.io/book/" class="button button-secondary button-secondary--no-skeleton mw6-l w-100">
  嵌入式之书
</a>
<p class="pl4-l mb0 mt1 ma0-l">
  熟练掌握用 Rust 编写微控制器和其它嵌入式系统程序。
</p>
</div>

</section>
    </div>
  </div>
</section>

<section id="learn-master" class="purple">
  <div class="w-100 mw-none ph3 mw8-m mw9-l center f3">
    <header>
      <h2>精通 Rust</h2>
      <div class="highlight"></div>
    </header>
    <p>对 Rust 中的黑魔法感到好奇？在这里，您可以深入理解其本质。</p>
    <section class="flex flex-column flex-row-l pv0-l">
      <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pv4 pv5-m pv6-ns ph4-l">
        <div class="v-top tc-l">
          <img src="/file_imgs/2018-12/reference.svg" alt="书架图标" class="mw3 mw4-ns">
        </div>
        <div class="v-top pl4 pl0-l pt0 pt3-l measure-wide-l flex-l flex-column-l flex-auto-l justify-between-l">
          <p>《参考手册》并非正式的语言规范，但它比“圣经”更加详尽而全面。</p>
          <a class="button button-secondary" href="https://doc.rust-lang.org/reference/index.html">
            阅读《参考手册》
          </a>
        </div>
      </div>

  <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pv4 pv5-m pv6-ns ph4-l">
    <div class="v-top tc-l">
      <img src="/file_imgs/2018-12/nomicon.svg" alt="双手捧火" class="mw3 mw4-ns">
    </div>
    <div class="v-top pl4 pl0-l pt0 pt3-l measure-wide-l flex-l flex-column-l flex-auto-l justify-between-l">
      <p>《Rust 秘典》是 Unsafe Rust 的黑魔法指南。它有时被称作“死灵书”。</p>

      <a class="button button-secondary" href="https://doc.rust-lang.org/nomicon/index.html">
        阅读《Rust 秘典》
      </a>
    </div>
  </div>

  <div class="flex flex-row flex-column-l justify-between-l mw8 measure-wide-l pv3 pv5-m pv6-ns ph4-l">
    <div class="v-top tc-l">
      <img src="/file_imgs/2018-12/unstable.svg" alt="手洒星光" class="mw3 mw4-ns">
    </div>
    <div class="v-top pl4 pl0-l pt0 pt3-l measure-wide-l flex-l flex-column-l flex-auto-l justify-between-l">
      <p>《未稳定特性手册》覆盖了当前只能在 nightly Rust 中使用的还未稳定的特性。</p>
      <a class="button button-secondary" href="https://doc.rust-lang.org/unstable-book/index.html">
        阅读《未稳定特性手册》
      </a>
    </div>
  </div>

</section>

  </div>
</section>

</div>
