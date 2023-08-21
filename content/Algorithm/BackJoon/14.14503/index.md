---
emoji: 🔮
title: 백준 14503, 로봇 청소기
date: '2023-08-21 23:05:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- N X M 크기의 직사각형으로 나타낼 수 있으며, 1 X 1 크기의 정사각형 칸으로 나누어져 있다.
- 각각의 칸은 벽 또는 빈 칸 이다.
- 청소기는 바라보는 방향이 있으며, 동, 서, 남, 북 중 하나이다.
- 방의 각 칸은 좌표 (r, c)로 나타낼 수 있으며 이는 북쪽에서 r+1번째, 서쪽에서 c+1번째 칸을 가리킴
- 처음에 빈 칸은 전부 청소되지 않은 상태이다.

- 1. 현재 칸이 청소되지 않은 경우, 현재 칸을 청소
- 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈칸이 없는 경우
- 2-1. 바라보는 방향을 유치한채로 한칸 후진 가능하면 한칸 후진하고 1번
- 2-2. 바라보는 방향의 뒤쪽칸이 벽이라 후진이 안되면 작동 멈춤
- 3. 현재 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우
- 3-1. 반시계방향으로 90도 회전
- 3-2. 바라보는 뱡향을 기준으로 앞칸이 청소되지않은 빈칸이면 한칸 전진
- 3-3. 1번

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 위의 내용을 바탕으로 단순 구현

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 빈칸이 있는 경우 4 방향에 대해 빈칸이 있는지를 판단해야 하는데 알고리즘을 잘못 생각해서 3개까지만 방향을 확인해서 틀렸었다.
- 위의 문제를 해결하고 정답보다 개수가 더 나오는 문제가 있었는데 후진 시에는 cnt를 증가시킬 필요가 없음에도 추가시키는 실수를 했었다.

<br/>
<br/>

## 코드

```python
import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())
r, c, d = map(int, input().split())

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

Map = [list(map(int, input().split())) for _ in range(N)]

stack = deque()
cnt = 1
stack.append((r, c, cnt))
Map[r][c] = -1
while stack:
    x, y, cnt = stack.popleft()
    check = False
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if Map[nx][ny] == 0:
            check = True
            break
    if check:  # 빈칸이 있는 경우
        for _ in range(4):  # 빈칸 있는 곳 나오면 이동
            d = (d+3) % 4
            nx = x + dx[d]
            ny = y + dy[d]
            if Map[nx][ny] == 0:
                stack.append((nx, ny, cnt+1))
                Map[nx][ny] = -1
                break
    else:  # 빈칸이 없는 경우
        nx = x + dx[((d+2) % 4)]
        ny = y + dy[((d+2) % 4)]
        if Map[nx][ny] == -1:  # 후진 가능?
            stack.append((nx, ny, cnt))
        else:
            break
print(cnt)

```

```toc

```
