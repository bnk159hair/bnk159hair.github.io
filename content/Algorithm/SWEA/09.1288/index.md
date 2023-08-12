---
emoji: 🔮
title: SWEA 1288, 새로운 불면증 치료법
date: '2023-08-12 22:50:00'
author: 하이영
tags: 알고리즘 SWEA B형특강
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- N번 양의 배수를 셈
- 수에서 본 숫자를 확인해야함
- 최소 몇번 양을 센 시점에 0에서 9까지의 모든 숫자를 볼 수 있는지 구해야 함

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 비트마스킹을 통해 쉽게 풀 수 있다.
- k번까지 세면서 지금까지 나온 수를 bit에 저장한다
- n개의 1로 이루어진 비트를 쉽게 구하려면 1을 n번 shift하고 -1을 해주면 된다

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 비트마스킹 사용하는 법을 알고 있었지만 n개의 1로 이루어진 비트를 shift하고 -1을 해줘서 구하는 방법은 생각을 못했었다.
- 오랜만에 java를 하려니 헷갈리는게 많은데 파이썬과 자바 둘 다 열심히 해야겠다

<br/>
<br/>

## 코드

```java
package javacode.Samsung_B.Week1;

import java.util.*;
import java.io.*;

public class Solution_1288 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // StringTokenizer st = new StringTokenizer(null, null, false)
        int T = Integer.parseInt(br.readLine());
        int checkV = (1<<10)-1;
        for(int t = 1; t<=T; t++){
            int val = Integer.parseInt(br.readLine());
            int bit = 0;
            for(int i=1;;i++){
                int num = val*i;
                for(;num>=10;num/=10){
                    bit = bit | (1 << (num%10));
                }
                bit = bit | (1 << (num));
                if(bit ==checkV){
                    System.out.println("#"+t+" "+val*i);
                    break;
                }
            }

        }

    }
}


```

```toc

```
