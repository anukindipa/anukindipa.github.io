---
pubDate: 2025-12-10
description: A demo post showcasing some features
tags: [demo, web-dev]
pinned: true
---

# Hello!!

This is a demo post to test out/showcase some features.

Read my entry about how this was made ([coming soon....](../)) to learn more about this blog.

## Feature Overview


1. **Markdown formatting** 
> Files are render through Astro with a custom Base.

2. **Code syntax highlighting**

3. **Latex-like math rendering** with katex

4. **Tag-based organization** 
>  see [tags](../../tags/) or click one of the tags on the top of this post.

## Math Demo

#### Inline math equations 
random integral, $\int_0^\infty e^{-x} dx = 1$

#### Another math demo
A sequence $x_{1}, x_{2}, x_{3}\dots$ of real numbers is cauchy if 
$$
\begin{align*}
\forall \epsilon>0,
\exists N \in \mathbb{N} : \forall n,m &\ge N \Rightarrow |x_{n} - x_{m}| < \epsilon
\end{align*}
$$

#### Block equations

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} dx
$$

### Markdown Table

with custom css

| Table | Col 1 | Col 2 |
| ----- | ----- | ----- |
| Row 1 | T11   | T12   |
| Row 2 | T21   | T22   |

### Code Demo

Binary Search in C:

```c
int first_true(int* arr, int n, int (*is_true)(int)){
	if(!n) return n;
	
	int lo=0, hi = n-1;
	while(lo<hi){
		int mid = lo + (hi-low)/2;
		
		if(is_true(arr[mid])){
			// go to left subarr
			// inclusive of mid
			// new subarr = [lo, mid]
			hi = mid;
		}
		else{
			// right subarr
			// skip mid
			// new subarr = (mid, hi]
			lo = mid+1;	
		}
	}
	// if lo==hi we have hit the candidate
	return is_true(arr[lo]) ? lo : n;
}
```


### Image test:
A screenshot of a lecture slide:

![image test](../attachments/Pasted%20image%2020251202181641.png)
*custom css for image captions*

See [more stuff....](../../posts/)