window.search = {"doc_urls":["chapter_1.html#chapter-1","chapter_1.html#booktoml","chapter_1.html#a关于导入其他文件的两种方式","chapter_1.html#playpen","chapter_1.html#include","chapter_1.html#summary","include.html#a关于导入其他文件"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":2},"1":{"body":87,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":6,"breadcrumbs":1,"title":1},"4":{"body":2,"breadcrumbs":1,"title":1},"5":{"body":2,"breadcrumbs":1,"title":1},"6":{"body":6,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"Chapter 1","id":"0","title":"Chapter 1"},"1":{"body":"示例 [book]\ntitle = \"mdbook 模范 例子\"\nauthors = [\"yobrave\"]\ndescription = \"mdbook nice 例子.\"\nlanguage = \"zh-CN\" [build]\nbuild-dir = \"docs\"\ncreate-missing = true\npreprocess = [\"links\", \"index\"] [output.html]\nmathjax-support = false\ntheme = \"theme\"\ncurly-quotes = true\ngoogle-analytics = \"UA-128555056-1\"\nadditional-css = [\"theme/custom.css\"]\ngit_repository_url = \"https://github.com/chinanf-boy/mdbook-nice-example\"\ngit_repository_icon = \"fa-github\"\n# additional-js = [\"theme/custom.js\"] [output.html.playpen]\n# editor = \"./path/to/editor\"\neditable = false [output.html.search]\nenable = true\n# searcher = \"./path/to/searcher\"\nlimit-results = 30\nteaser-word-count = 30\nuse-boolean-and = true\nboost-title = 2\nboost-hierarchy = 1\nboost-paragraph = 1\nexpand = true\nheading-split-level = 3\n# copy-js = true","breadcrumbs":"book.toml","id":"1","title":"book.toml"},"2":{"body":"","breadcrumbs":"关于导入其他文件的两种方式","id":"2","title":"关于导入其他文件的两种方式"},"3":{"body":"我是这样写的 {{ #playpen ***}} *** == ./SUMMARY.md # Summary - [book.toml 配置](./chapter_1.md) - [关于导入其他文件](./include.md)","breadcrumbs":"playpen","id":"3","title":"playpen"},"4":{"body":"我是这样写的 {{ #include ***}} *** == ./SUMMARY.md","breadcrumbs":"include","id":"4","title":"include"},"5":{"body":"book.toml 配置 关于导入其他文件 下一节，是rust文件的导入，看看有什么不同","breadcrumbs":"Summary","id":"5","title":"Summary"},"6":{"body":"我是这样写的 {{ #playpen ***}} *** == ./test.rs fn main(){ println!(\"{}\", \"hello,world\")\n}","breadcrumbs":"book.toml 配置 » 关于导入其他文件","id":"6","title":"关于导入其他文件"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"2":{"8":{"5":{"5":{"5":{"0":{"5":{"6":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"0":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":1,"docs":{"1":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":1,"docs":{"1":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"y":{"/":{"df":0,"docs":{},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"f":{"a":{"df":1,"docs":{"1":{"tf":1.0}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{",":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"/":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{".":{"c":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"j":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.449489742783178}}}}}},"u":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"breadcrumbs":{"root":{"1":{"2":{"8":{"5":{"5":{"5":{"0":{"5":{"6":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"0":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":1,"docs":{"1":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":4,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":1,"docs":{"1":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"y":{"/":{"df":0,"docs":{},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"o":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"f":{"a":{"df":1,"docs":{"1":{"tf":1.0}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{",":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.7320508075688772}},"e":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"/":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{".":{"c":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"j":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.449489742783178}}}}}},"u":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"title":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"AND","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};