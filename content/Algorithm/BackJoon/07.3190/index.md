---
emoji: 🔮
title: 백준 3190, 뱀
date: '2023-08-09 22:22:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 우선 꼬리를 포함한 몸은 그대로 하고 머리만 다음칸 이동
- 벽이나 자기 자신의 몸과 부딪히면 종료
- 이동한 칸에 사과가 있다면 사과는 없어지고 머리는 그대로
- 없다면 몸길이를 줄여서 꼬리가 위치한 칸 비우기

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 구현해야하는 문제이다
- 현재 방향에 대한 정보를 담을 변수와 뱀의 몸통에 대한 정보를 담을 deque 자료구조와 visited를 활용한다.
- 뱀의 머리는 deque의 r쪽 꼬리는 l 쪽으로 위치해서 꼬리 처리는 popleft를 통해 하고 visited는 0으로 바꿔서 빈 공간으로 처리

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 문제를 단계별로 풀려고 구현 단계를 정리하면서 풀었는데 많은 도움이 된거 같다.
- 하지만 문제를 제대로 읽지 않아 게임 시작 후 X초라는 설명을 X초마다로 이해해서 답이 나오지 않았었다.
- 또한 = 을 ==으로 처리하고 == 0 을 ==0로 처리하는등 사소한 실수를 아직도 많이 한다...
- 실제 코테에서는 이런 실수들이 더욱 보이지 않으니 더 꼼꼼히 푸는 연습을 해야겠다.

<br/>
<br/>

## 코드

```python
# 0,0 위치에 오른쪽 방향, visited는 true, deque에는 (0,0) 하나
# 바라보는 방향으로 한칸 이동 (0, 1) , 벽이나 visited 통해서 게임 끝인지 판단
# deque에 0,1 넣고 visited처리
# 이동한 칸에 사과가 있다면 사과 없애고 deque 유지
# 없다면 deque popleft하기
import sys
from collections import deque
input = sys.stdin.readline
N = int(input())
K = int(input())

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
dir = 0
Map = [[0 for _ in range(N)] for _ in range(N)]

for _ in range(K):
    x, y = map(int, input().split())
    Map[x-1][y-1] = 1

Map[0][0] = -1  # false 대신 -1로 처리
body = deque()
body.append((0, 0))
L = int(input())
Op = []
for i in range(L):
    t, d = input().split()
    t = int(t)
    Op.append((t, d))
time = 0
idx = 0
Check = True
while True:
    time += 1
    new_x = body[-1][0]+dx[dir]
    new_y = body[-1][1]+dy[dir]
    if new_x < 0 or new_x >= N or new_y < 0 or new_y >= N or Map[new_x][new_y] == -1:

        break
    body.append((new_x, new_y))
    if Map[new_x][new_y] == 1:
        Map[new_x][new_y] = -1
    elif Map[new_x][new_y] == 0:
        Map[new_x][new_y] = -1
        tail = body.popleft()
        Map[tail[0]][tail[1]] = 0

    if idx < len(Op) and Op[idx][0] == time:
        if Op[idx][1] == "L":
            dir = (dir+3) % 4
        else:
            dir = (dir+1) % 4
        idx += 1
print(time)

```

```toc

```
