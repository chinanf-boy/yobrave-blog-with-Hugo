---
title: 'Rust E0008 - ref 的重要性（译）'
date: 2019-02-25T14:17:47+08:00
categories: ['rust']
tags: ['error']
description: 'Rust 官方错误集'
draft: false
---

- [官方原文](https://doc.rust-lang.org/stable/error-index.html#E0008)

## E0008，(无法逾越的 ref 关键字)

匹配条件语句中的绑定名称，在模式控制中保留了其类型。因此，若在一个模式中，这一名称是通过移动进行绑定的，那它也会被移动到在模式代码中的参考变量位置。这样做的话，会阻止原名称在匹配语句的主体中可用。

考虑以下:

```rust
match Some("hi".to_string()) {
    Some(s) if s.len() == 0 => {}, // 使用 s.
    _ => {},
}
```

变量 `s` 具有 `String` 类型，并且它在 匹配语句 中的用法是 `String` 类型的变量。 使用`s`变量的代码，在匹配语句主体的分离作用域内，执行有效，因此该值被移动到此匿名作用域内，结果就是在匹配语句的主体中变得不可用。

上面的问题，可以通过使用 `ref` 关键字来解决。

```rust
match Some("hi".to_string()) {
    Some(ref s) if s.len() == 0 => {},
    _ => {},
}
```

虽然，这个例子似乎不怎么厉害且易于解决，但当它遇到消耗该值的函数时,问题就变得清晰了:

```rust
struct A{}

impl A {
    fn consume(self) -> usize {
        0
    }
}

fn main() {
    let a = Some(A{});
    match a {
        Some(y) if y.consume() > 0 => {}
        _ => {}
    }
}
```

在这种情况下，即使 `ref` 关键字也无法解决，因为无法移动(引用/指针)借用的内容。这个问题一般无法解决。但，若该值可以克隆，那这有个不太具体的解决方案:

```rust
#[derive(Clone)]
struct A{}

impl A {
    fn consume(self) -> usize {
        0
    }
}

fn main() {
    let a = Some(A{});
    match a{
        Some(ref y) if y.clone().consume() > 0 => {}
        _ => {}
    }
}
```

如果该值在模式语句中要被消耗，那使用克隆，不会移动(消耗)原所有权，因此代码可以正常工作。

> `ref`也不能省掉，否则，`y`就会移动到模式语句的作用域，一去不回头。
