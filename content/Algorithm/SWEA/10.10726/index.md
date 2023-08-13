---
emoji: 🔮
title: SWEA 10726, 이진수 표현
date: '2023-08-13 22:30:00'
author: 하이영
tags: 알고리즘 SWEA B형특강
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- N, M이 주어지고 M의 마지막 N개의 비트가 모두 켜져 있으면 ON, 꺼져있으면 OFF를 출력해야한다.

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 비트마스킹을 통해 풀 수 있다.
- N개의 1로 이루어진 bit와 M을 AND 연산을 통해 N개의 1로 이루어진 bit이 그대로 나오면 ON을 출력하면 된다.

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 오랜만에 java를 하려니 헷갈리는게 많은데 파이썬과 자바 둘 다 열심히 해야겠다
- 특강에서 다른 분이 삼항연산자를 통해 푼 것을 보고 이번 풀이에 적용해보았는데 빠르게 조건문을 구현할 수 있어서 좋은거 같다.

<br/>
<br/>

## 코드

```java

import java.util.*;
import java.io.*;

public class Solution_10726 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int TC = Integer.parseInt(br.readLine());
        StringTokenizer st = null;
        for(int t=1; t<=TC; t++){
            st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());
            int bit = (1 << N) - 1;
            String result = (bit & M)==bit ? "ON":"OFF";
            System.out.println("#"+t+" "+result);
        }
    }
}



```

```toc

```
