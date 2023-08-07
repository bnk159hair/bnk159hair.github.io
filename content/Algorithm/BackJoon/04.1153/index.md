---
emoji: 🔮
title: 백준 1153, 네 개의 소수
date: '2023-08-06 21:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 임의의 자연수가 주어졌을 때 네 개의 소수의 합으로 분해해야 한다.
- 자연수의 범위가 1부터 1,000,000(백만)이다.
- 출력이 불가능한 경우는 -1을 출력한다.

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 백트래킹으로 접근해보았다.
- 분해해야하는 개수는 4개로 고정, 각각의 수는 모두 소수여야 하므로 주어지는 자연수 N이하의 모든 소수를 구해 배열을 구한다.
  - 이 때 소수는 에라토스테네스의 체를 이용해 구한다.
- 길이가 4이고 합이 N일 때 문자열을 출력하고 종료하는 재귀함수를 작성한다. 배열의 모든 값에 대해 경우의 수를 찾는다.

  - 찾는 중 길이가 4를 넘거나 합이 이미 N을 넘는 경우는 더 이상 찾을 필요가 없기에 이 때는 함수를 종료시킨다.

- 소수의 가장 작은 값부터 합을 더하기 시작하면 무조건 길이가 4가 될때까지 합 연산을 진행하게 되므로, 소수의 가장 큰 값부터 합을 더하기 시작해서 불필요한 연산들을 제거한다. (실수했던 부분)
  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 문제 자체는 어렵지 않아 금방 풀 수 있었다. 하지만 첫번째 풀이는 6프로 정도에서 시간초과가 발생했었다.
- 문제 원인을 생각해보니 소수의 가장 작은 값이 2인데 2부터 합하는 걸로 찾으면 가지치기 경우가 너무 많이 발생할거 같았다.
- 그래서 소수 배열을 reverse 시키고 가장 큰 소수부터 더하도록 처리하니 시간 내에 해결할 수 있었다.
- 다른 사람의 풀이도 한번 보고 공부해야겠다.
  - 골드바흐의 추측을 이용해서 해결한 해답들도 있다.

<br/>
<br/>

## 코드

```python
import math
N = int(input())


def che(num):
    sosu = []
    visited = [True for _ in range(num+1)]

    for i in range(2, int(math.sqrt(num))):
        for j in range(i*2, num+1, i):
            if visited[j]:
                visited[j] = False
    for i in range(2, num+1):
        if visited[i]:
            sosu.append(i)
    return sosu


sosu = che(N)
sosu.reverse()
check = False


def Find(Len, idx, Sum, mstr):
    global check
    if check:
        return
    if Len == 4 and Sum == N:
        print(mstr)
        check = True
        return
    if Len >= 4 or Sum > N:
        return
    for i in range(idx, len(sosu)):
        Find(Len+1, i, Sum+sosu[i], str(sosu[i])+" "+mstr)


Find(0, 0, 0, "")

if not check:
    print(-1)


```

```toc

```
