---
emoji: 🔮
title: 백준 9251, LCS
date: '2023-07-27 21:00:00'
author: 하이영
tags: 알고리즘 백준
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.
- 예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 점화식을 세움으로써 해결할 수 있기에 해당 문제는 DP로 접근해야 한다.
- DP 테이블은 첫번째 (문자열의 길이+1) X (두번째 문자열의 길이+1) 크기의 2차원 배열이어야 한다.
- DP 테이블의 현재 값[x][y]이 정해지는 경우의 수는 총 2개이다.
  1. 두 문자열의 각각 위치[x][y]의 문자값이 같은 경우
  - 이 두 문자는 아직 비교가 안되어야하기에  
    각 문자열의 -1 위치[x-1][y-1]에 대한 테이블 값에 +1을 한다.
  2. 같지 않은 경우
  - 현재 문자가 다른 문자열의 이전 문자값([x-1][y] or [x][y-1])과 비교된 값 2개중 큰 값으로 정한다.

<br/>

- 예를 들어 문자열이 ABCD와 ACBD가 있다고 가정하면 아래와 같이 배열이 완성 된다.
- ABCD, ACBD

```
    [0, 0, 0, 0, 0]
    [0, 1, 1, 1, 1]
    [0, 1, 1, 2, 2]
    [0, 1, 2, 2, 2]
    [0, 1, 2, 2, 3]
```

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 1년 전에 풀었던 문제를 다시 풀었지만 풀이를 보았던 저번과는 달리 직접 풀게 되어 뿌듯하다.

<br/>
<br/>

## 코드

```python
import sys

input = sys.stdin.readline
A = input()[:-1]  # 위의 시스템 함수로 인해 마지막에 개행 문자가 들어가기에
B = input()[:-1]

dp = [[0 for _ in range(len(B)+1)] for _ in range(len(A)+1)]

for i in range(1, len(A)+1):
    for j in range(1, len(B)+1):
        dp[i][j] = max(dp[i][j-1], dp[i-1][j])
        if A[i-1] == B[j-1]:
            dp[i][j] = max(dp[i-1][j-1]+1, dp[i][j])

print(dp[len(A)][len(B)])

```

```toc

```
