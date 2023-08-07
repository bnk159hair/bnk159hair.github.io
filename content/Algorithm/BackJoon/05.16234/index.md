---
emoji: 🔮
title: 백준 16234, 인구 이동
date: '2023-08-07 21:47:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 땅의 크기는 N x N, r행 c열에는 A[r][c]만큼의 인구가 존재
- 인접한 나라 사이에는 국경선이 존재
- 인구 이동은 하루 동안 진행 되며 인구 차이가 L 이상 R 이하인 국가 끼리는 국경선이 열림 - 연합
- 연합을 이루는 국가의 인구수는 (인구수 총합 / 국가의 수)가 된다. 소수점은 버림

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- dfs를 통해 해결할 수 있는 문제이다.
- 특정 방향 국가와는 연합이 가능하고 다른 방향 국가와는 연합이 불가능 할 수 있기에 전체 땅에서 연합은 1개 이상 존재할 수도있음
  - 따라서 방문하지 않은 모든 노드에 대해 dfs를 수행한다.
- 인구 이동은 연합이 생기지 않을 때까지 반복되므로
  changed 변수를 통해 인구 이동이 발생했는지를 확인한다.
- dfs를 수행할 때는 4방 탐색을 통해 진행 되며 연합이 생기는 나라의 인구 합도 같이 구한다.
- 연합이 생기는 경우에 chaged를 true로 설정한다.
- 또한 연합(4방 탐색을 통해 방문한 노드)를 기록해서 인구수를 갱신한다.

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 다행히 실수 없이 한번에 풀었다. 하지만 필요한 조건, 변수 등에 대한 계획없이 접근하는 것 같다.
- 내일부터 풀 때는 필요한 변수, 조건을 적으면서 정리를 해보아야겠다.

<br/>
<br/>

## 코드

```python
import sys
from collections import deque
input = sys.stdin.readline

N, L, R = map(int, input().split())

arr = []

for i in range(N):
    arr.append(list(map(int, input().split())))


def dfs(x, y):
    global changed
    mem = deque()
    queue = deque()
    queue.append((x, y))

    visited[x][y] = True
    dx = [-1, 0, 1, 0]
    dy = [0, -1, 0, 1]
    Sum = 0
    while queue:
        cur_x, cur_y = queue.popleft()
        mem.append((cur_x, cur_y))
        cur_value = arr[cur_x][cur_y]
        Sum += cur_value

        for i in range(4):
            new_x = cur_x + dx[i]
            new_y = cur_y + dy[i]
            if new_x < 0 or new_x >= N or new_y < 0 or new_y >= N or visited[new_x][new_y] or not (L <= abs(cur_value-arr[new_x][new_y]) <= R):
                continue

            changed = True
            queue.append((new_x, new_y))
            visited[new_x][new_y] = True
    Sum //= len(mem)

    while mem:
        x, y = mem.pop()
        arr[x][y] = Sum


changed = True
result = 0
while changed:
    changed = False
    visited = [[False for _ in range(N)] for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                dfs(i, j)
    if changed:
        result += 1
print(result)



```

```toc

```
