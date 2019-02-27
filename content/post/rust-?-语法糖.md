---
title: 'Rust ? 语法糖 (译)'
date: 2019-02-27T14:56:41+08:00
categories: ['rust']
tags: ['rust']
description: 'Rust ?符号的真正含义'
draft: false
---

## 宏 `std::try`

```rust
macro_rules! try {
    ( $ expr : expr ) => { ... };
    ( $ expr : expr , ) => { ... };
}
```

用于减少样板代码，以匹配`Result`以及转换下游错误的帮助宏。

增加`?`运算符，以替换`try!`。简化。

`try!`与给定`Result`匹配。对 `Ok` 变量，表达式为包装的值。

如果是 `Err` 变量，则检索内部错误。`try!`！然后使用 From 执行转换。这提供了专用错误和更通用错误之间的自动转换。然后立即返回错误。

因为提前返回，`try!`只能在返回`Result`的函数中使用。

### Examples

```rust
use std::io;
use std::fs::File;
use std::io::prelude::*;

enum MyError {
    FileWriteError
}

impl From<io::Error> for MyError {
    fn from(e: io::Error) -> MyError {
        MyError::FileWriteError
    }
}

// 快速返回错误的首选方法
fn write_to_file_question() -> Result<(), MyError> {
    let mut file = File::create("my_best_friends.txt")?;
    file.write_all(b"This is a list of my best friends.")?;
    Ok(())
}

// 上一种快速返回错误的方法，的另一版本
fn write_to_file_using_try() -> Result<(), MyError> {
    let mut file = r#try!(File::create("my_best_friends.txt"));
    r#try!(file.write_all(b"This is a list of my best friends."));
    Ok(())
}

// 完整相当于：
fn write_to_file_using_match() -> Result<(), MyError> {
    let mut file = r#try!(File::create("my_best_friends.txt"));
    match file.write_all(b"This is a list of my best friends.") {
        Ok(v) => v,
        Err(e) => return Err(From::from(e)),
    }
    Ok(())
}
```
