---
title: Pandas 기초 익히기
date: 2021-08-28 20:08:12
category: Data Processing Package
thumbnail: { thumbnailSrc }
draft: false
---

# 데이터 분석 패키지 설명

생성일: 2021년 8월 11일 오후 12:49
태그: basic

- **판다스(Pandas)**
    - 판다스(Pandas)는 파이썬 데이터 처리를 위한 라이브러리로써 데이터 분석 작업에서 필수적인 라이브러리다.
    - 판다스는 총 세가지의 데이터 구조를 사용한다.
        1. 시리즈(Series)
        2. 데이터프레임(Dataframe)
        3. 패널(Panel)
    1. **시리즈(Series)**
        - 시리즈 클래스는 1차원 배열의 값(values)에 각 값에 대응되는 인덱스(index)를 부여할 수 있는 구조를 갖는다.

        ```python
        sr = pd.Series([17000, 18000, 1000, 5000],
               index=["피자", "치킨", "콜라", "맥주"])
        print(sr)

        피자    17000
        치킨    18000
        콜라     1000
        맥주     5000
        dtype: int64
        ```

        ```python
        print(sr.values)

        [17000 18000  1000  5000]
        ```

        ```python
        print(sr.index)

        Index(['피자', '치킨', '콜라', '맥주'], dtype='object')
        ```

    1. **데이터프레임(DataFrame)**
        - 데이터프레임은 2차원 리스트를 매개변수로 전달한다. 2차원이므로 행 방향 인덱스(index)와 열 방향 인덱스(column)가 존대한다.
        - 즉, 행과 열을 가지는 자료구조로써 시리즈가 인덱스(index)와 값(values)으로 구성된다면, 데이터프레임은 열(columns)까지 추가 되어 열(columns), 인덱스(index), 값(values)으로 구성된다.

        ```python
        values = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        index = ['one', 'two', 'three']
        columns = ['A', 'B', 'C']

        df = pd.DataFrame(values, index=index, columns=columns)
        print(df)

        			 A  B  C
        one    1  2  3
        two    4  5  6
        three  7  8  9
        ```

        ```python
        print(df.index) # 인덱스 출력

        Index(['one', 'two', 'three'], dtype='object')
        ```

        ```python
        print(df.columns) # 열 출력

        Index(['A', 'B', 'C'], dtype='object')
        ```

        ```python
        print(df.values) # 값 출력

        [[1 2 3]
         [4 5 6]
         [7 8 9
        ```

    2. **데이터프레임의 생성**
        - 데이터프레임은 리스트(List), 시리즈(Series), 딕셔너리(dict), Numpy의 ndarrays, 또 다른 데이터프레임으로 생성할 수 있다.
        - 아래에서 리스트와 딕셔너리를 통해 데이터프레임을 생성 해보겠다.

        ```python
        # 리스트로 생성하기
        data = [
            ['1000', 'Steve', 90.72], 
            ['1001', 'James', 78.09], 
            ['1002', 'Doyeon', 98.43], 
            ['1003', 'Jane', 64.19], 
            ['1004', 'Pilwoong', 81.30],
            ['1005', 'Tony', 99.14],
        ]
        df = pd.DataFrame(data)
        print(df) 

        			0         1      2
        0  1000     Steve  90.72
        1  1001     James  78.09
        2  1002    Doyeon  98.43
        3  1003      Jane  64.19
        4  1004  Pilwoong  81.30
        5  1005      Tony  99.14
        ```

        - 생성된 데이터 프레임에 열(columns)을 지정해줄 수 있다.

        ```python
        df = pd.DataFrame(data, columns=['학번', '이름', '점수'])
        print(df)

        학번        이름     점수
        0  1000     Steve  90.72
        1  1001     James  78.09
        2  1002    Doyeon  98.43
        3  1003      Jane  64.19
        4  1004  Pilwoong  81.30
        5  1005      Tony  99.14
        ```

        - 아래는 파이썬 자료구조 중 하나인 딕셔너리(dict)를 통해 데이터프레임을 생성해 보겠다.

        ```python
        # 딕셔너리로 생성하기
        data = { '학번' : ['1000', '1001', '1002', '1003', '1004', '1005'],
        '이름' : [ 'Steve', 'James', 'Doyeon', 'Jane', 'Pilwoong', 'Tony'],
                 '점수': [90.72, 78.09, 98.43, 64.19, 81.30, 99.14]}

        df = pd.DataFrame(data)
        print(df)

        		학번     이름   점수
        0  1000     Steve  90.72
        1  1001     James  78.09
        2  1002    Doyeon  98.43
        3  1003      Jane  64.19
        4  1004  Pilwoong  81.30
        5  1005      Tony  99.14
        ```

    3. **데이터프레임 조회하기**
        - 아래의 명령어는 데이터프레임에서 원하는 구간만 확인하기 위한 명령어로서 유용하게 사용된다.
            - df.head(n) - 앞 부분을 n개만 보기
            - df.tail(n) - 뒷 부분을 n개만 보기
            - df['열이름'] - 해당되는 열을 확인
        - 앞서 설명한 데이터 프레임을 그대로 사용한다고 가정한다.

        ```python
        print(df.head(3)) # 앞 부분을 3개만 보기

        학번      이름     점수
        0  1000   Steve  90.72
        1  1001   James  78.09
        2  1002  Doyeon  98.43
        ```

        ```python
        print(df.tail(3)) # 뒷 부분을 3개만 보기

        학번        이름     점수
        3  1003      Jane  64.19
        4  1004  Pilwoong  81.30
        5  1005      Tony  99.14
        ```

        ```python
        print(df['학번']) # '학번'에 해당되는 열을 보기

        0    1000
        1    1001
        2    1002
        3    1003
        4    1004
        5    1005
        Name: 학번, dtype: object
        ```

    4. **외부 데이터 읽기**
        - Pandas는 CSV, 텍스트, Excel, SQL, HTML, JSON 등 다양한 데이터 파일을 읽고 데이터 프레임을 생성할 수 있다.
        - 예를 들어 csv 파일을 읽을 때는 pandas.read_csv()를 통해 읽을 수 있다.
        아래와 같은 csv 파일이 있다고 하자.

        <p align="center">
            <img src="assets\2021-08-28\01.png"/>
        </p>

        ```python
        df=pd.read_csv('example.csv 파일의 경로') # example.csv 파일 읽기
        # 예를 들어 윈도우 바탕화면에서 작업한 저자의 경우
        # df=pd.read_csv(r'C:\Users\USER\Desktop\example.csv')였습니다.
        print(df)

        student id      name  score
        0        1000     Steve  90.72
        1        1001     James  78.09
        2        1002    Doyeon  98.43
        3        1003      Jane  64.19
        4        1004  Pilwoong  81.30
        5        1005      Tony  99.14
        ```

        - 이 경우 인덱스가 자동으로 부여된 것을 볼 수 있다. 인덱스를 출력해보도록 하겠다.

        ```python
        print(df.index)

        RangeIndex(start=0, stop=6, step=1)
        ```

---

