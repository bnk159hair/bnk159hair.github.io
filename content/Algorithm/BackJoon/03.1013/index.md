---
emoji: 🔮
title: 백준 1013, Contact
date: '2023-08-05 21:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

# 백준 1013, Contact

<br/>

## 문제 푸는데 필요한 정보

- 전파의 기본 단위는 { 0 , 1 } 두 가지로 구성되어있으며, x+ ( ) 는 임의의 개수(최소 1개) x의 반복으로 이루어진 전파의 집합을 나타낸다.
- 반복을 의미하는 + 외에도 or 를 의미하는 | 기호가 있다. { x | y } 는 x 혹은 y 를 의미하는 것으로, { 0+ | 1+ } 는 { 0 , 1 , 00 , 11 , 000 , 111 , … } 의 집합을 의미한다.
- 정리하면 뒤에 '+'가 붙은 숫자는 최소 1번이상 반복되어야하며, 괄호 뒤에 붙은 경우는 해당 괄호가 1회 이상 반복되는 것이다.
- 문제에 있는 예시는 경우의 수가 순서대로 나오는 것이 아니여서 이해하는데 어려움이 있었다.

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 백트래킹으로 접근해보았다.
- 문제에서 제공하는 패턴인 (100+1+ | 01)+ 의 경우
- 우선 괄호안을 볼 때

1. 100으로 시작하거나
   - 100으로 시작하면 0이 반복 되어야 하고
   - 0이 아닌 1이 나오게 되면 다음 0과 1에 따라 경우의 수가 나뉜다.
   - 1+ 이기에 1이 여러번 반복될 수 있음을 염두해야하며 0이 나오게 된다면 2번에 해당할 수 있는 패턴이기에 1일 때마다 재귀 함수를 추가 호출한다.
   - 만약 0 이 나오면 바로 break해서 종료 <- 내가 실수했던 부분
2. 01로 시작해야한다.

- 위의 경우들이 계속 반복한다.
  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 문제를 읽고 이해하는데 20분이 넘게 걸렸다. 너무 여유롭게 파악하는 버릇이 생긴거 같다... 얼른 고쳐야지
- 위에 '내가 실수했던 부분' 코드를 작성하지 않아서 계속 틀렸었다.
- 구현 문제를 풀때는 여러 상황과 조건을 미리 파악하고 코드를 작성해야겠다는 생각이 다시 들었다.
- 오늘 코테를 만족스럽게 보지 못해서 다시 1일 1솔을 시작했는데... 열심히 해보자!
- (위의 경우가 아닌 정규표현식을 통해 푼 방법도 존재하던데 공부 해보아야겠다.)

<br/>
<br/>

## 코드

```python
import sys

input = sys.stdin.readline

T = int(input())


result = False


def Find(in_str, idx, debug):
    global result
    if result:
        return

    if idx >= len(in_str):
        result = True
        return

    if in_str[idx:idx+3] == "100":  # 100과 같은지
        debug += "100"
        for i in range(idx+3, len(in_str)):
            if in_str[i] == "0":
                debug += "0"
                continue
            else:
                for j in range(i, len(in_str)):
                    if in_str[j] == "1":
                        debug += "1"

                        Find(in_str, j+1, debug)
                    else:
                        break
                break
    elif in_str[idx:idx+2] == "01":
        debug += "01"
        Find(in_str, idx+2, debug)


for t in range(T):
    str = input()[:-1]
    result = False
    Find(str, 0, "")
    if result:
        print("YES")
    else:
        print("NO")


```

```toc

```
