---
title: 'Go 多个并发等待 Url请求 示例'
date: 2018-11-04T12:34:22+08:00
categories: ['example']
tags: ['go', 'sync']
description: '使用 sync.WaitGroup 的 多url并发请求等待'
draft: false
---

# Code

```go
package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"sync"
)

func main() {
	urls := []string{
		"http://llever.com",
		"http://llever.com/goreleaser-zh",
		"http://llever.com/about/",
	}
	jsonResponses := make(chan int)

	var wg sync.WaitGroup

	all := 0

	for _, url := range urls {
		wg.Add(1)
		all++

		go func(url string) {
			defer wg.Done()
			fmt.Println(url)
			res, err := http.Get(url)
			if err != nil {
				log.Fatal(err)
			} else {
				defer res.Body.Close()
				body, err := ioutil.ReadAll(res.Body)
				if err != nil {
					log.Fatal(err)
				} else {
					jsonResponses <- len(body)
					fmt.Println("postsend")

				}
			}
		}(url)
	}
	
	index := 0
	for response := range jsonResponses {
		index++
		fmt.Println(response)
		if all == index {
			close(jsonResponses)
		}
	}

	fmt.Println("before done")

	wg.Wait()

}
```

## Output

```
http://llever.com/about/
http://llever.com
http://llever.com/goreleaser-zh
postsend
22281
postsend
4049
postsend
35901
before done
```