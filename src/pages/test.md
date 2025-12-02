---
layout: ../layouts/MarkdownBase.astro
title: Test Page
---

# hello world

testing if workflow works

testing $\int_0^\infty e^{-x} dx = 1$

$$
\int_0^\infty e^{-x} dx = 1
$$

# Big O proof for heap create.

https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity


first true binary search
- invariant: `first_true`$\in$`[lo,hi]` 
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

Binary search iterative version 1.
```c
int search(int* arr, int n, int target){
	if(!n) return n;
	
	int lo=0, hi = n-1;
	while(lo<=hi){
		int mid = lo + (hi-low)/2;
		int x = arr[mid];
		
		if(x==target){
			return mid;
		}
		if(x>target){
			hi = mid-1;
		}
		else{
			lo = mid+1;
		}
	}
	return NOT_FOUND;
}
```