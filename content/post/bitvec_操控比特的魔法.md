---
title: "Bitvec_操控比特的魔法"
date: 2021-05-02T00:53:20+08:00
categories: ["Rust"]
tags: ["crate", "example", "explain"]
description: "Bitvec 控制 bit, 内存"
css: ["/css/main.css", "/css/stylesheet.css"]
draft: true
---

# Bitvec

## `BitSlice` 搭配 `Index`，可以写成 sugar —— `[2 .. 22]`

### Use

```rs

let fewer_bits = &mut data.view_bits_mut::<Local>()[2 .. 22];

```

### `impl Index<T> for BitSlice`

```rs
//src/slice/ops.rs
impl<O, T> Index<usize> for BitSlice<O, T>
where
	O: BitOrder,
	T: BitStore,
{
	type Output = bool;

	#[inline]
	fn index(&self, index: usize) -> &Self::Output {
		//  Convert the `BitRef` to `&'static bool`
		match *index.index(self) {
			true => &true,
			false => &false,
		}
	}
}

```

### 实现 Range

关于 [`2 .. 22`]，里面的类型是 Range 家族类型的一员。也是要 impl 的，作者用了宏去简化。

```rs
index!(
	Range<usize>,
	RangeFrom<usize>,
	RangeFull,
	RangeInclusive<usize>,
	RangeTo<usize>,
	RangeToInclusive<usize>,
);
```

### `macro_rules! index`的具体

```rs
/// Generate `Index`/`Mut` implementations for subslicing.
macro_rules! index {
	($($t:ty),+ $(,)?) => { $(
		impl<O, T> Index<$t> for BitSlice<O, T>
		where
			O: BitOrder,
			T: BitStore,
		{
			type Output = Self;

			#[inline(always)]
			#[cfg(not(tarpaulin_include))]
			fn index(&self, index: $t) -> &Self::Output {
				index.index(self)
			}
		}

		impl<O, T> IndexMut<$t> for BitSlice<O, T>
		where
			O: BitOrder,
			T: BitStore,
		{
			#[inline(always)]
			#[cfg(not(tarpaulin_include))]
			fn index_mut(&mut self, index: $t) -> &mut Self::Output {
				index.index_mut(self)
			}
		}
	)+ };
}

```

## 问题是具体实现

我们拿常见的`usize`为例子：

```rs
	#[inline]
	fn index(&self, index: usize) -> &BitSlice<O, T> {
		//  Convert the `BitRef` to `&'static bool`
		match *index.index(self) { // 1
			true => &true,
			false => &false,
		}
	}
```

1. usize 怎么会有 index 方法呢，何况是接受一个 BitSlice<O, T> 类型参数

不用说，这个箱子为 usize 加了方法，那么它的主体在哪呢。

```rs
// src/slice/api.rs
impl<'a, O, T> BitSliceIndex<'a, O, T> for usize
where
	O: BitOrder,
	T: BitStore,
{
```

原来是，这个 trait，index 函数签名也是正确的。

```rs
// src/slice/api.rs
pub trait BitSliceIndex<'a, O, T>
where
	O: BitOrder,
	T: BitStore,
{
	type Immut;

	type Mut;

	fn get(self, slice: &'a BitSlice<O, T>) -> Option<Self::Immut>;

	fn get_mut(self, slice: &'a mut BitSlice<O, T>) -> Option<Self::Mut>;

	unsafe fn get_unchecked(self, slice: &'a BitSlice<O, T>) -> Self::Immut;

	unsafe fn get_unchecked_mut(
		self,
		slice: &'a mut BitSlice<O, T>,
	) -> Self::Mut;

	fn index(self, slice: &'a BitSlice<O, T>) -> Self::Immut;

	fn index_mut(self, slice: &'a mut BitSlice<O, T>) -> Self::Mut;
}
```

### impl<'a, O, T> BitSliceIndex<'a, O, T> for usize 的 index 具体实现

为了方便，将 self 换成比较具体的类型：usize，BitSlice...

```rs
	type Immut = BitRef<'a, Const, O, T>;
	type Mut = BitRef<'a, Mut, O, T>;
	#[inline]
	fn index(usize, slice: &'a BitSlice<O, T>) -> usize::Immut {
		usize.get(slice).unwrap_or_else(|| { // 1 飞到 get
			panic!("Index {} out of bounds: {}", usize, slice.len())
		})
	}
	fn get(usize, slice: &'a BitSlice<O, T>) -> Option<usize::Immut> { // 2
		if usize < slice.len() {
			Some(unsafe { usize.get_unchecked(slice) }) // 飞到 get_unchecked
		}
		else {
			None
		}
	}
    #[inline]
	unsafe fn get_unchecked(usize, slice: &'a BitSlice<O, T>) -> usize::Immut { // 3
		BitRef::from_bitptr(slice.as_bitptr().add(usize))
	}
```

地狱来了，看到出现了多少个新事物：`BitRef::from_bitptr`，`.as_bitptr()` ，`.add(usize)`:

#### 1. BitSlice.as_bitptr

```rs
	#[inline(always)]
	pub fn as_bitptr(&BitSlice) -> BitPtr<Const, O, T> {
		BitSlice.as_bitspan().as_bitptr()
	}
```

#### 1.1 BitSlice.as_bitspan

```rs
	#[inline(always)]
	#[cfg(not(tarpaulin_include))]
	pub(crate) fn as_bitspan(&BitSlice) -> BitSpan<Const, O, T> {
		BitSpan::from_bitslice_ptr(BitSlice)
	}
```

#### 1.1.1 BitSpan::from_bitslice_ptr

```rs
#[inline]
	pub(crate) fn from_bitslice_ptr(raw: *const BitSlice<O, T>) -> BitSpan {
		let slice_nn = match NonNull::new(raw as *const [()] as *mut [()]) {
			Some(nn) => nn,
			None => return BitSpan::EMPTY,
		};
		let ptr = slice_nn.cast::<()>();
		let len = unsafe { slice_nn.as_ref() }.len();
		BitSpan {
			ptr,
			len,
			_or: PhantomData,
			_ty: PhantomData,
		}
	}
```

#### 1.2 BitSlice.as_bitspan().as_bitptr()

```rs
	#[inline]
	pub(crate) fn as_bitptr(BitSpan) -> BitPtr<M, O, T> {
		BitPtr::new(BitSpan.address(), BitSpan.head())
	}
```

#### 2. 

```rs
	pub unsafe fn add(BitPtr, count: usize) -> BitPtr {
		BitPtr.offset(count as isize) // 这个就算了
	}
```

#### 3 BitRef::from_bitptr(slice.as_bitptr().add(usize))

```rs
	#[inline]
	pub unsafe fn from_bitptr(bitptr: BitPtr<M, O, T>) -> BitRef {
		let data = bitptr.read();
		BitRef {
			bitptr,
			data,
			_pad: [0; PADDING],
			_ref: PhantomData,
		}
	}
```

### BitRef<'a, Const, O, T>

由 fn index(self, slice: &'a BitSlice<O, T>) -> Self::Immut; 而来


得到 BitRef<'a, Const, O, T>

没错，得到了一个新事物：

```rs
//src/ptr/proxy.rs
pub struct BitRef<'a, M, O = Lsb0, T = usize>
where
	M: Mutability,
	O: BitOrder,
	T: BitStore,
{
	/// The proxied address.
	bitptr: BitPtr<M, O, T>,
	/// A local, dereferencable, cache of the proxied bit.
	data: bool,
	/// Pad the structure out to be two words wide.
	_pad: [u8; PADDING],
	/// Attach the lifetime and possibility of mutation.
	_ref: PhantomData<&'a Cell<bool>>,
}

```

还记得一开始我们的最开始的 impl<O, T> Index<usize> for BitSlice<O, T> 吗：


```rs
//src/slice/ops.rs
	#[inline]
	fn index(&self, index: usize) -> &BitSlice<O, T> {
		//  Convert the `BitRef` to `&'static bool`
		match *index.index(self) { // 1
			true => &true,
			false => &false,
		}
	}
```

index.index(self) -> BitRef<'a, Const, O, T>，请看 有个`*`，这里是Deref trait 的语法糖：

```rs
//src/ptr/proxy.rs

#[cfg(not(tarpaulin_include))]
impl<M, O, T> Deref for BitRef<'_, M, O, T>
where
	M: Mutability,
	O: BitOrder,
	T: BitStore,
{
	type Target = bool;

	#[inline(always)]
	fn deref(&BitRef) -> &bool {
		&BitRef.data
	}
}
```

那么就变成了

```rs
//src/slice/ops.rs
impl<O, T> Index<usize> for BitSlice<O, T>
where
	O: BitOrder,
	T: BitStore,
{
	type Output = bool;

	#[inline]
	fn index(&self, index: usize) -> &Self::Output {
		//  Convert the `BitRef` to `&'static bool`
        // *index.index(self) => &BitRef.data
		match &BitRef.data {
			true => &true,
			false => &false,
		}
	}
}
```

输出  &Self::Output 也就是 bool。完结

### impl<'a, O, T> BitSliceIndex<'a, O, T> for Range<usize> 的具体实现


```rs
range_impl!(Range<usize> {
	check |range: Self, span: BitSpan<_, _, _>| {
		let len = span.len();

		range.start <= len && range.end <= len && range.start <= range.end
	};

	select |range: Self, span: BitSpan<_, _, _>| {
		span.as_bitptr().add(range.start).span_unchecked(range.len())
	};
});
```