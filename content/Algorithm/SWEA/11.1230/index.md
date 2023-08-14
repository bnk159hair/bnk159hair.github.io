---
emoji: 🔮
title: SWEA 1230, 암호문3
date: '2023-08-14 22:30:00'
author: 하이영
tags: 알고리즘 SWEA B형특강
categories: 알고리즘
---

<br/>

## 문제 푸는데 필요한 정보

- 0 ~ 999999 사이의 수로 표현되는 암호문이 있고, N개 모아 놓은 암호문 뭉치가 있음
- 암호문은 삽입, 삭제, 추가 3개의 명령어로 제어함
- 초기 암호문을 명령어를 통해 수정하고 결과의 첫 10개 암호문을 출력해야함

<br/>
<br/>

## 문제 푸는데 필요한 알고리즘

- 동적으로 길이가 증가해야하고 삽입 삭제 등의 연산이 존재하기에 배열이 아닌 ArrayList를 사용했다.
- 삽입할 때는 원하는 인덱스에 값을 추가하면 인덱스가 증가하기에 증가하는 인덱스에 맞춰 새로운값을 추가하면 된다.
- 삭제할 때는 삭제한 값 이후 원소들은 인덱스가 1이 줄기에 똑같은 인덱스에 대해 삭제 연산을 반복하면 된다.
- 추가의 경우에는 add 연산이 자동으로 마지막에 추가하기에 삭제와 마찬가지로 연산을 반복하면 된다.

  <br/>

  <br/>
  <br/>

## 실수한 내용 및 고찰

- 오랜만에 java를 하려니 헷갈리는게 많은데 파이썬과 자바 둘 다 열심히 해야겠다

<br/>
<br/>

## 코드

```java

import java.util.*;
import java.io.*;
public class Solution_1230 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= null;
        for(int t=1; t<=10; t++){ // 10개의 테스트 케이스
            int N = Integer.parseInt(br.readLine()); // 암호문 개수
            ArrayList<Integer> list = new ArrayList<>(); // 암호문 자료구조
            st = new StringTokenizer(br.readLine());
            for(int i=0; i< N; i++){
                list.add(Integer.parseInt(st.nextToken())); // 초기 암호문 저장
            }
            int M = Integer.parseInt(br.readLine()); // 명령어의 개수
            st = new StringTokenizer(br.readLine());
            for(int i =0; i< M; i++){ // 명령어 처리
                char op = st.nextToken().charAt(0); // 명령어 구분
                if(op=='I'){ // 삽입
                    int x = Integer.parseInt(st.nextToken());
                    int y = Integer.parseInt(st.nextToken());
                    for(int j=0; j<y; j++){
                        int s = Integer.parseInt(st.nextToken());
                        list.add(x+j, s); // 원하는 인덱스에 추가, 넣을수록 인덱스 증가
                    }
                }else if(op=='D'){ // 삭제
                    int x = Integer.parseInt(st.nextToken());
                    int y = Integer.parseInt(st.nextToken());
                    for(int j=0; j<y; j++){
                        list.remove(x); // 삽입과 달리 지우면 당겨지기에 지우는 위치 그대로
                    }
                }else if(op=='A'){ // 끝에 추가
                    int y = Integer.parseInt(st.nextToken());
                    for(int j=0; j<y; j++){
                        int s = Integer.parseInt(st.nextToken());

                        list.add(s); // 마지막에 추가
                    }
                }
            }
            System.out.print("#"+t+" ");
            for(int i=0; i<10; i++){
                System.out.print(list.get(i)+" "); // 상위 10개 추가
            }
            System.out.println();
        }

    }
}


```

```toc

```
