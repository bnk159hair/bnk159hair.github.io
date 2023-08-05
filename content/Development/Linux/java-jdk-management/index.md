---
emoji: 💻
title: Ubuntu 20.04 자바 JDK 설치 및 버전 관리
date: '2023-08-05 21:00:00'
author: 하이영
tags: 우분투 리눅스 Java
categories: Ubuntu
---

## 개요

<br/>
우분투를 통한 자바 스프링부트 서버 개발 및 빌드, 배포를 진행하다보니 특정 자바 버전으로 변경해야할 일이 생겼습니다.  
(나중에는 도커를 배우게 되어서 도커를 많이 쓰게 되었지만...)  
알고 있으면 나중에 필요할 때 바로 쓸 수 있기에 기록 목적으로 작성하게 되었습니다.

<br/> 
<br/>

## 자바 설치

<br/>

1. apt 패키지 인덱스 정보를 아래 명령어로 업데이트하여 자바 리스트를 갱신합니다.

```
    sudo apt update
```

<br/>

2. 원하는 자바 버전을 설치합니다. 아래 예시는 8버전과 16버전을 설치합니다.

```
    sudo apt install openjdk-8-jdk
    sudo apt install openjdk-16-jdk
```

<br/>

3. bashrc에 JAVA_HOME을 추가합니다.

- 많은 application(Apache Hadoop 등)은 자바 위치를 찾기위해 `JAVA_HOME` 변수를 참조합니다. 이에 다른 어플리케이션에서 쉽게 사용할 수 있도록, JAVA_HOME을 설정합니다.
- (저는 바로 잘 잡았기에 실행하진 않았습니다.)
  ```
  sudo vi ~/.bashrc
  export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")
  ```

<br/>

4. bashrc 변경 사항을 적용하기 위해 아래 명령어를 통해 bashrc를 1회 실행합니다.

```
    source ~/.bashrc
```

<br/>
<br/>

## 버전 변경 방법

1. Ubuntu에서 application들의 다양한 버전 관리를 담당하는 update-alternatives 명령어를 이용하여 설치된 자바 버전을 확인합니다.

```
    # 현재 자바 버전 확인
    java -version

    # 설치된 자바 버전 리스트 확인
    update-alternatives --list java
```

2. 버전을 변경하고자 한다면 아래 명령어 2가지를 실행한 후 java와 javac의 버전을 변경해 줍니다.

```
    sudo update-alternatives --config java
    sudo update-alternatives --config javac
```

3. 현재 자바 버전이 변경되었는지 확인합니다.

```
    java -version
```

## 참조

[Java JDK 설치 및 버전 관리 참조글](https://mech2cs.tistory.com/entry/Ubuntu-2004-%EC%9E%90%EB%B0%94-JDK-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EB%B2%84%EC%A0%84-%EA%B4%80%EB%A6%AC)
