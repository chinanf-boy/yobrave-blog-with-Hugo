---
title: 'Mrm 定制你的默认文件 Js工具'
date: 2019-02-17T14:11:05+08:00
categories: ['mrm']
tags: ['config']
series: '中文翻译/解释项目-工具初始化流程'
description: '项目的 mrm 配置文件'
draft: false
---

## 入门

之前[简单介绍了下 mrm](http://llever.com/2017/12/04/mrm-%E7%AE%A1%E7%90%86%E4%BD%A0%E7%9A%84%E5%A4%9A%E4%B8%AAjson/)

，当然[mrm 项目的 Github 页面也很适合入门](https://github.com/sapegin/mrm#writing-your-own-tasks)

> 或是看看[其 readme 的中文翻译](https://github.com/chinanf-boy/mrm-zh)

### 书接上回

[init.sh 脚本中，有关 mrm 命令启动 的编写](http://llever.com/2019/02/05/%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AF%87-%E8%B5%B7%E5%A7%8B/#%E6%80%BB%E8%A7%88%E8%84%9A%E6%9C%AC)

- **4.** 启用 [mrm] ，一个 `gitignore，readme`... 快速初始化的 js 工具。(运用之前获得的信息+参数)

```bash
echo "\n4. mrm ***"
mrm readme --config:repos $2 --config:name $1 --config:commit $COMMIT --config:date $DATE
mrm gitignore
```

### Readme 的 配置文件（mrm readme ...)

> 请查看入门，了解些知识，再继续

- `~/dotfiles/mrm/readme/index.js`

大体思路，

1. 获得 命令参数`'name','repos','date','commit'`
2. 分析`repos`是**ex**吗（这样此项目的模版就会是两个主分支：翻译/解释）
3. 添加各自分支的内容，填充上`doc-templite`工具的标记与参数。（*doc-templite*工具[下回分解](#下回分解))
4. 最后当然是，感谢与免责，以及一大串 md 链接格式简写。

```js
const {lines} = require('mrm-core');

function task(config) {
  const values = config.require('name', 'repos', 'date', 'commit').values();
  console.log(values);
  let {name, repos, date, commit} = values;
  if (name.endsWith('.git')) {
    let origin = 'github.com/';
    name = name.slice(name.indexOf(origin) + origin.length, -4);
  }

  let reposInfo = '';
  let enAzh = '';
  let other = '';
  if (repos === 'ex') {
    let sp = name.split('/');

    reposInfo = `## explain 🀄️
<!-- doc-templite START generated -->
<!-- time = '${date}' -->
<!-- name = '${sp[0]}' -->
<!-- repo = '${sp[1]}' -->
<!-- commit = '${commit}' -->
<!-- doc-templite END generated -->
        `;

    other = `### 中文 Readme

[中文](zh.md)
`;
  } else {
    reposInfo = `## 校对 🀄️

<!-- doc-templite START generated -->
<!-- repo = '${name}' -->
<!-- commit = '${commit}' -->
<!-- time = '${date}' -->

<!-- doc-templite END generated -->
`;
    enAzh = `[中文](./readme.md) | [english](https://github.com/${name}) `;
    other = `### 贡献

欢迎 👏 勘误/校对/更新贡献 😊 [具体贡献请看](https://github.com/chinanf-boy/chinese-translate-list#贡献)
        `;
  }
  // Read .gitignore if it exists
  lines('readme.md')
    // Add lines that do not exist in a file yet,
    // but keep all existing lines
    .add(
      `# ${name} [![explain]][source] [![translate-svg]][translate-list] 
    
<!-- [![size-img]][size] -->

[explain]: http://llever.com/explain.svg
[source]: https://github.com/chinanf-boy/Source-Explain
[translate-svg]: http://llever.com/translate.svg
[translate-list]: https://github.com/chinanf-boy/chinese-translate-list
[size-img]: https://packagephobia.now.sh/badge?p=Name
[size]: https://packagephobia.now.sh/result?p=Name
    `
    )
    .add(
      `\n
「 desc 」

${enAzh}


---

${reposInfo}

${other}

## 生活

[help me live , live need money 💰](https://github.com/chinanf-boy/live-need-money)

---

### 目录

<!-- START doctoc -->
<!-- END doctoc -->

`
    )
    // Update or create a file
    .save();
}

task.description = 'Adds readme Cool';
module.exports = task;
```

### gitignore 的 配置文件(mrm gitignore)

- `~/dotfiles/mrm/gitignore/index.js`

```js
const {lines} = require('mrm-core');

function task() {
  lines('.gitignore')
    .add(['node_modules/', '.DS_Store', 'fork', 'source', 'hub-create.sh']) // ✨ 就这样
    .save();
}

task.description = 'Adds .gitignore Cool';
module.exports = task;
```

## 下回分解

**doc-templite** 作为轻量级的模版工具，引入多个项目的特点，专注重复与独特的良好性质。

[可立即关注 其 Github 页面](https://github.com/chinanf-boy/doc-templite)
