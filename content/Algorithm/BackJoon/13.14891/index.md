---
emoji: 🔮
title: 백준 14891, 톱니바퀴
date: '2023-08-16 23:18:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 8개의 톱니를 가진 톱니바퀴 4개가 일렬로 놓여져있음
- 톱니는 N극 또는 S극 중 하나
- 가장 왼쪽부터 오른쪽 톱니바뀌까지 1~4번
- 회전은 한칸을 기준, 시계방향, 반시계방향 존재
- 회전 후 맞닿은 극에 따라 다른 톱니가 회전할 수 있음
- 맛닿은 톱니의 극이 다르다면 먼저 회전한 톱니의 방향과 반대방향으로 회전

- 1~4번째 줄은 각 n번째 톱니바퀴의 상태
- 상태는 8개의 정수
- 12시 방향부터 시계 방향대로 순서가 주어짐
- N극은 0, S극은 1
- 다섯째 줄은 회전횟수 K가 주어짐
- 다음 k개 줄에는 회전시킬 톱니 번호와 방향이 주어짐
- 방향이 1인 경우 시계 방향, -1인 경우는 반시계 방향
- K는 1부터 100

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 각각의 톱니바퀴를 deque으로 설정
- 0번째를 12시방향으로 설정해서 시계방향으로 값 저장
- 시계방향으로 회전할 경우 pop해서, appendleft 실행
- 반시계방향으로 회전할 경우 popleft해서 append 실행
- 회전전 해당 톱니바퀴에서 왼쪽으로 검사 시행, 이 때 이전 톱니의 회전 방향 기억
- 왼쪽 검사 후 오른쪽으로 검사
- 1번의 2번째 인덱스와 2번의 6번째 인덱스가 맞닿음
- 2번의 2번째 인덱스와 3번의 6번째 인덱스가 맞닿음
- 3번의 2번째 인덱스와 4번의 6번째 인덱스가 맞닿음
- 맞닿은 값들이 다른 경우 반대방향으로 회전
- 회전 후 맞닿은 값을 확인하는 것이 아닌 회전 하기 전 다른 값이면 회전 시 반대 방향으로 회전하기에
- 재귀 호출로 해결

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 처음에 문제의 예시를 제대로 읽지 않고 마음대로 해석해서 시간낭비를 했다.
  - 회전 후 맞닿은 극이 아니라, 회전하기전 맞닿은 극을 확인하고 다를 경우, 회전시 반대로 회전하는 것이다.
- 인덱스를 적은 부분에서 사소한 변수 실수를 한다. 이러한 부분을 좀 더 조심해야겠다.

<br/>
<br/>

## 코드

```python
import sys
from collections import deque

input = sys.stdin.readline

topni = [deque() for _ in range(4)]

for i in range(4):
    for j in map(int, list(input()[:-1])):
        topni[i].append(j)

K = int(input())
order = [list(map(int, input().split())) for _ in range(K)]


def rotate(num, dir):  # num에 -1 해서 전달해야함
    if dir == 1:
        topni[num].appendleft(topni[num].pop())

    else:
        topni[num].append(topni[num].popleft())


def propagateleft(nth, dir):  # nth에 -1해서 전달해야함
    if nth == 0:
        return
    if topni[nth][6] != topni[nth-1][2]:
        propagateleft(nth-1, -dir)
        rotate(nth-1, -dir)


def propagateright(nth, dir):
    if nth == 3:
        return
    if topni[nth+1][6] != topni[nth][2]:
        propagateright(nth+1, -dir)
        rotate(nth+1, -dir)


def calsum():
    result = 0
    for i in range(4):
        if topni[i][0] == 1:
            result += pow(2, i)
    return result


for i in range(K):
    num, dir = order[i]

    propagateleft(num-1, dir)
    propagateright(num-1, dir)
    rotate(num-1, dir)

print(calsum())

```

```toc

```
