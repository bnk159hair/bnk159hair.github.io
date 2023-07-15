---
emoji: 🔮
title: 백준 2206, 벽 부수고 이동하기
date: '2023-07-15 00:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

# 문제 푸는데 필요한 정보

- N X M 행렬로 표현되는 맵이 주어짐
  - 0은 이동할 수 있는 곳, 1은 이동할 수 없는 곳
- (1, 1)에서 (N, M)의 위치까지 최단 경로로 이동해야함
  - 최단 경로는 맵에서 가장 적은 개수의 칸을 지나는 경로를 말함
  - 이 때 시작하는 칸과 끝나는 칸도 포함해서 세야함
- 이동 도중 벽을 부수고 이동하는 것이 좀 더 경로가 짧아진다면, 한 개까지 부수고 이동해도 됌
- 한 칸에서 이동할 수 있는 칸은 상하좌우로 인접한 칸

# 문제 푸는데 필요한 알고리즘

- 전체적인 풀이법은 BFS를 통한 최단 경로를 구해내는 것과 유사하다.
- 하지만 이동 도중 벽을 한번 부술 수 있다는 것이 차이점
- 방문 처리의 경우에도 단순한 2차원 배열로는 불가능하다
  - 한 지역이라도 벽을 부수고 온 경우와 벽을 부수지 않고 온 경우가 존재하기 때문
  - 따라서 3차원 배열로 구현 ( 1일 때는 아직 부수지 않음, 0일 때는 이미 부수고 옴)
- 현재 위치에서 이동할 수 있는 경우의 수는 총 3가지이다.
  1. 벽을 부수지 않았으며 이동하려는 위치가 벽이며 방문처리가 안 된 경우
  2. 벽을 부수지 않았으며 이동하려는 위치가 벽이 아니며 방문처리가 안 된 경우
  3. 벽을 이미 부쉈으며 이동하려는 위치가 벽이 아니며 방분처리가 안 된 경우
- 위의 경우에 대해 방문 처리를 진행하며 BFS를 돌리면 문제가 해결 된다.

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

```toc

```
