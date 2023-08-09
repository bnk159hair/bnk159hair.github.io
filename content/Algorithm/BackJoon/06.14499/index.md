---
emoji: 🔮
title: 백준 14499, 주사위 굴리기
date: '2023-08-07 21:47:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 지도의 크기는 N X M
- 초기 주사위는 윗면은 1이고, 동쪽(오른쪽)을 바라보는 방향이 3인 상태로 놓여있음
- 주사위를 굴렸을 때 이동한 칸에 수가 0인지 아닌지에 따라 처리하는 경우의 수가 다름
- 주사위를 바깥으로 이동시키려고 하는 경우는 무시해야하며 출력도 해서는 안됌

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 구현해야하는 문제이다
- 주사위가 이동할 수 있는 방향은 상, 하, 좌, 우 이고 기억해야하는 값은 바닥면(cur), 반대면-윗면(op), 왼쪽(le), 오른쪽(ri), 위(up), 아래(dn)이다.
- 초기 값은 정해져 있고 함수를 통해 방향에 따라 값들을 변경해준다.
- 방향에 따른 값 변경은 아래와 같은 규칙을 가진다.

```python
# up l, r 그대로 up->cur cur->dn dn->op op->up
# dn l, r 그대로 dn->cur cur->up up->op op->dn
# le u, d 그대로 le->cur cur->ri op->le ri->op
# re u, d 그대로 ri->cur cur->le op->ri le->op
```

- 그 다음부터는 구현을 통해서 문제를 해결하면 된다.

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 문제를 이해하는데 너무 많은 시간이 걸렸다. 쓰면서 문제를 빨리 이해하려고 노력해봐야겠다.
- 처음에는 주사위의 바닥면이 정해지면 상하좌우 값이 고정되어있다고 생각해서 풀었는데 같은 바닥면이여도 어떻게 굴렀는지에 따라 방향값이 다를 수 있음을 알게 되었다. 직접 쓰면서 예시를 보았으면 진작에 알 수 있는 부분이었는데 이걸 제대로 못해 2시간이 걸렸다...
- x, y 변수를 계속해서 헷갈리는데 잘 처리해서 사용해야겠다...

<br/>
<br/>

## 코드

```python
import sys

input = sys.stdin.readline

# 중요 바깥으로 이동시키는 경우는 출력X, 무시

# 각 면마다 어떤수를 가지고 있는지 기억하기
# 각 면의 맞은편 면은 어떤거지도 기억하기 두 면의 합은 7이어야함
# 시작면 바닥 면은 6
# 경우의 수는 1. 이동한 칸에 쓰여있는 수가 0이면 바닥면의 수가 칸에 복사
# 2. 0이 아니 ㄴ경우에는 칸에 쓰여있는수가 주사위의 바닥면으로 복사, 칸 수는 0


mem = [6, 2, 5, 4, 3, 1]  # cur up dn le ri op
# up l, r 그대로 up->cur cur->dn dn->op op->up
# dn l, r 그대로 dn->cur cur->up up->op op->dn
# le u, d 그대로 le->cur cur->ri op->le ri->op
# re u, d 그대로 ri->cur cur->le op->ri le->op

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
dice_mem = [0 for _ in range(6)]


def change(dir, mem):
    if dir == 0:
        ri = mem[4]
        cur = mem[0]
        op = mem[5]
        le = mem[3]
        mem[0] = ri
        mem[3] = cur
        mem[4] = op
        mem[5] = le
    elif dir == 1:
        le = mem[3]
        cur = mem[0]
        op = mem[5]
        ri = mem[4]
        mem[0] = le
        mem[3] = op
        mem[4] = cur
        mem[5] = ri
    elif dir == 2:
        up = mem[1]
        cur = mem[0]
        dn = mem[2]
        op = mem[5]
        mem[0] = up
        mem[2] = cur
        mem[5] = dn
        mem[1] = op
    else:
        up = mem[1]
        cur = mem[0]
        dn = mem[2]
        op = mem[5]
        mem[0] = dn
        mem[2] = op
        mem[5] = up
        mem[1] = cur


N, M, x, y, K = map(int, input().split())
Map = [list(map(int, input().split())) for _ in range(N)]

Op = list(map(int, input().split()))

for i in Op:

    new_x = x + dx[i-1]
    new_y = y + dy[i-1]
    if new_x < 0 or new_x >= N or new_y < 0 or new_y >= M:
        continue

    change(i-1, mem)
    cur = mem[0]  # 이동

    if Map[new_x][new_y] == 0:  # 이동한 칸에 쓰여있는 수가 0일 때
        Map[new_x][new_y] = dice_mem[cur-1]
    else:  # 이동한 칸이 0 이 아닌 경우, 값복사 하고 0으로
        dice_mem[cur-1] = Map[new_x][new_y]
        Map[new_x][new_y] = 0

    print(dice_mem[mem[5]-1])  # 현재면 출력

    x = new_x
    y = new_y


```

```toc

```
