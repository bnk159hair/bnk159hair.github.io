---
emoji: 🔮
title: 백준 2206, 벽 부수고 이동하기
date: '2023-07-15 00:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

# 실수한 내용 및 고찰

- 1, 2번에 대해 방문처리 코드를 작성하지 않았다가 메모리 초과 오류가 발생했다.
- 1년 전에 풀었던 문제지만 사소하게나마 메모리와 시간이 개선되었다.

# 코드

```python
input = sys.stdin.readline

N, M = map(int, input().split())
Map = [list(map(int, input()[:-1])) for _ in range(N)]
queue = deque()
visited = [[[False for _ in range(2)] for _ in range(M)] for _ in range(N)]
queue.append((0, 0, 1, 1))
visited[0][0][1] = True
visited[0][0][0] = True
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
while queue:
    x, y, depth, cnt = queue.popleft()
    if x == N-1 and y == M-1:
        print(depth)
        exit()
    for i in range(4):
        new_x = x + dx[i]
        new_y = y + dy[i]
        if new_x < 0 or new_x >= N or new_y < 0 or new_y >= M:
            continue
        if cnt > 0:
            if Map[new_x][new_y] > 0 and not visited[new_x][new_y][0]:
                visited[new_x][new_y][0] = True
                queue.append((new_x, new_y, depth+1, 0))
            if not Map[new_x][new_y] > 0 and not visited[new_x][new_y][1]:
                visited[new_x][new_y][1] = True
                queue.append((new_x, new_y, depth+1, 1))
        else:
            if Map[new_x][new_y] > 0 or visited[new_x][new_y][1] or visited[new_x][new_y][0]:
                continue
            queue.append((new_x, new_y, depth+1, 0))
            visited[new_x][new_y][0] = True

print(-1)
```

<br/>

```toc

```
