---
emoji: 🔮
title: 백준 16235, 나무 재테크
date: '2023-08-15 16:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 처음에 양분은 모든 칸에 5만큼 들어가 있음
- 같은 칸에 여러 개의 나무가 심어져 있을 수 있음
- M개의 나무를 심음가능하지만
- 봄에는 나무가 자신의 나이만큼 양분을 먹음, 나이 1증가
- 하나의 칸에 여러개의 나무가 있다면, 나이가 어린 나무부터 양분을 먹음
- 자신의 나이만큼 양분을 먹을 수 없는 나무는 양분은 못먹고 죽음
- 여름에는 죽은 나무가 양분으로 변하게 됌 죽은 나무의 나이 // 2 가 증가
- 가을에는 나무가 번식함, 번식하는 나무는 나이가 5의 배수여야함
- 인접한 8개의 칸에 나이가 1인 나무가 생김, 땅을 벗어나는 칸은 생기지 않음
- 로봇이 돌아디니면서 땅에 양분을 추가함, 각 칸에 추가되는 양은 A[r][c]
- K년이 지난 후 상도의 땅에 살아있는 나무의 개수를 구하라

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

1. N x N 사이즈의 deque를 원소로 갖는 2차원 배열을 생성, 양분을 원소로갖는 배열도 생성
2. 필요한 위치에 나무를 appendleft 해서 작은 값이 0번째에 있도록 배치
3. 봄 시작, popleft하면서 기존 양분보다 작거나 같을 경우 처리 -> 새로운 배열에 넣음
   3-1. 이때 5의 배수가 되는 것이 있는 곳은 기억
4. 현재 원소가 새로운 리스트를 가리키게 하고 이전 배열에서 남아있는 것들은 양분처리
5. 가을 시작, 앞서 5의 배수가 되는 애들 카운트 해서 새로운 나무 추가
6. 겨울 시작, 각 위치에 양분 추가
7. 1년 완료, 각 원소 리스트 길이 합치기

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 입력값 받은 것을 다르게 사용해서 틀렸었다. 입력값에 대한 주석도 달아야겠다.
- f_mem을 제대로 초기화 하지않아서 문제가 생겼었다. 초기화 하는 부분도 신경써야겠다.
- 확실히 문제를 어떻게 풀지 주석을 달고 각각 코드에 대한 주석도 작성하니 디버깅하기가 쉬워졌다.
- 삽입하고 값을 얻는 과정에서 우선순위 큐를 사용해서 시간초과가 발생했다.
  - 값이 들어가고 빼는 과정이 봄, 여름과 가을에 번식할 때만 있는데 이 때 넣는 순서만 잘 넣어주면 정렬 된다는 것이 보장되기에 그냥 deque으로 해야지 시간 문제가 발생안한다.
- 또한 (봄 여름), (가을 겨울) 코드를 함수로 빼니 시간 차이가 80ms 정도 차이난다. 자주 사용되는 부분은 함수로 빼는 것도 습관화 해야겠다.

<br/>
<br/>

## 코드

```python
import sys
from collections import deque
import heapq
input = sys.stdin.readline

N, M, K = map(int, input().split())
to_add = [list(map(int, input().split())) for _ in range(N)]
t_Map = [[deque() for _ in range(N)] for _ in range(N)]
n_Map = [[5 for _ in range(N)] for _ in range(N)]
f_mem = deque()
for _ in range(M):
    X, Y, O = map(int, input().split())
    t_Map[X-1][Y-1].appendleft(O)

dx = [-1, -1, -1, 0, 1, 1, 1, 0]
dy = [-1, 0, 1, 1, 1, 0, -1, -1]


def SW():
    new_tree = deque()
    five_check = False
    while t_Map[i][j] and t_Map[i][j][0] <= n_Map[i][j]:
        value = t_Map[i][j].popleft()
        n_Map[i][j] -= value
        new_tree.append(value+1)
        if (value+1) % 5 == 0:  # 5의 배수이면
            five_check = True  # 기억해야해서
    # 나무가 없거나 영양분이 모자랄 경우는 아래
    # 영양분이 모자랄 경우에는 나머지 죽여야함
    # 여름 기능
    for d_tree in t_Map[i][j]:
        n_Map[i][j] += (d_tree//2)
    t_Map[i][j] = new_tree  # 새로운 배열로 가리킴
    if five_check:
        f_mem.append((i, j))


def FW():
    for info in f_mem:
        X, Y = info
        for Tree in t_Map[X][Y]:
            if Tree % 5 == 0:
                for i in range(8):
                    new_x = X + dx[i]
                    new_y = Y + dy[i]
                    if new_x < 0 or new_x >= N or new_y < 0 or new_y >= N:
                        continue
                    t_Map[new_x][new_y].appendleft(1)
    # 겨울 시작
    for i in range(N):
        for j in range(N):
            n_Map[i][j] += to_add[i][j]


for year in range(K):
    f_mem = deque()
    # 봄 시작
    for i in range(N):
        for j in range(N):
            if t_Map[i][j]:  # 나무가 존재할 경우
                # 나무가 존재하고 0번째 값이 영양분보다 작을 경우
                SW()
    # 가을 시작
    FW()

result = 0

for i in range(N):
    for j in range(N):

        result += len(t_Map[i][j])
print(result)


```

```toc

```
