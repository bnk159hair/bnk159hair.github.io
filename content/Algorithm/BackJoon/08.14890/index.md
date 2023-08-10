---
emoji: 🔮
title: 백준 14890, 경사로
date: '2023-08-10 22:40:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 길이란 한 행 또는 열 전부를 나타냄
- 경사로가 높아지는지, 낮아지는지에 따라 처리가 다름
- L=2인 경우, 높이3 2개, 높이2 2개, 높이1 2개는 가능하지만
- 높이3 2개, 높이2 2개, 높이3 2개는 불가능하기 때문

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 구현해야하는 문제이다
- 시작은 왼쪽값 혹은 위쪽값
- 초기값(0번째 인덱스) 설정하고 다음 값이 같으면 개수 count를 한다
- 다른 값이면 차이가 1인지 확인하고
  - 높이가 높아지면 지금 센 개수가 L 이상인지 확인한다
  - 높이가 낮아지면 다시 개수를 count, check = true로 설정한다. (check는 개수를 파악해야함을 의미한다)
- 차이가 2이상이면 실패 처리를 한다.
- 해당 행 혹은 열에 대해 탐색이 끝나고 check를 한번 더 확인한다. L이 3이고 33322 와 같은 경우를 잡기 위해서이다.

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 문제를 읽고 어떻게 접근할지 적어보면서 하니 확실히 헷갈리는 부분이 적어졌다.
- 하지만 행 혹은 열에 대한 탐색이 끝나고 check를 확인하고 개수가 모자라지 않는지는 확인을 못해줬었다.
- 이러한 부분을 좀더 꼼꼼히 챙겨야겠다.
- 그리고 지금은 경우의 수가 다를 때 중복된 코드가 너무 많은데 다음에는 초반에 귀찮더라도 다른 변수가 필요한 곳만 조건문으로 처리해주어야겠다.
  - 소프티어 코테 같이 ctrl + c, v 가 안되는 곳이 있을 수 있기에...
  - 그리고 수정할 때 고쳐야 할 부분이 더블이 되는 것도 힘들다

<br/>
<br/>

## 코드

```python
import sys
input = sys.stdin.readline

N, L = map(int, input().split())

Map = [list(map(int, input().split())) for _ in range(N)]


def Find(xy, dir):
    DownCheck = False
    if dir == 0:
        st = Map[xy][0]
        cnt = 1
        for i in range(1, N):

            if Map[xy][i] - st == 0:
                cnt += 1
            else:

                if abs(Map[xy][i] - st) == 1:
                    if DownCheck:
                        cnt -= L
                        if cnt < 0:
                            return False
                    if Map[xy][i] - st == 1:  # 높아졌을 때
                        st = Map[xy][i]
                        if cnt >= L:
                            cnt = 1
                            DownCheck = False
                            continue
                        else:
                            return False
                    elif st - Map[xy][i] == 1:  # 낮아졌을 때
                        st = Map[xy][i]
                        cnt = 1
                        DownCheck = True
                else:
                    return False
    elif dir == 1:
        st = Map[0][xy]
        cnt = 1
        for i in range(1, N):

            if Map[i][xy] - st == 0:
                cnt += 1
            else:

                if abs(Map[i][xy] - st) == 1:
                    if DownCheck:
                        cnt -= L
                        if cnt < 0:
                            return False
                    if Map[i][xy] - st == 1:  # 높아졌을 때
                        st = Map[i][xy]
                        if cnt >= L:
                            cnt = 1
                            DownCheck = False
                            continue
                        else:
                            return False
                    elif st - Map[i][xy] == 1:  # 낮아졌을 때
                        st = Map[i][xy]
                        cnt = 1
                        DownCheck = True
                else:
                    return False
    if DownCheck:
        cnt -= L
        if cnt < 0:
            return False
    return True


result = 0
for i in range(2):
    for j in range(N):
        if Find(j, i):
            result += 1

print(result)


```

```toc

```
