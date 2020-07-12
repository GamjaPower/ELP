# ELP(Elastic Layer for Phantom)
ELP는 보안 데이터가 수집된 Elasticsearch에 SPL을 사용해서 이벤트를 탐지한 후 해당 이벤트를 Splunk Phantom으로 보내는 기능을 가지고 있습니다. 
또한 ELP는 SPLUNK의 장점인 SPL을 Elasticsearch에서도 사용할 수 있게 해줍니다. Splunk 엔지니어로서 Elasitcsearch를 사용하다보면 불편한 점이 많이 있습니다. 
바로 그 그부분을 해결해주는 프로그램이라고 생각하시면 됩니다. 

# Getting Started
이 프로그램은 Splunk를 사용중인데, 라이센스 비용때문에 추가 데이터 수집을 못하는 조직에 적합합니다. 
예를 들면 엔드포인트 데이터처럼 데이터가 큰 경우 Elasticsearch에 데이터를 저장하고 분석은 SPL을 사용하여 분석할 수 있습니다. 
ELP를 사용하기 위해서는 Elastic Cluster가 구축되어 있고, 데이터도 수집되어 있어야 합니다. 
즉, ELP에는 Elasticsearch를 포함하고 있지 않습니다.

# 프로그램 설치 및 실행 
[DIST 폴더](https://github.com/GamjaPower/ELP/tree/master/dist)에서 최신 버전의 설치 파일을 다운로드한 후 설치하고자 하는 디렉토리에 파일을 압축해제하면 됩니다. 그리고 els-front를 실행하면 프로그램이 실행됩니다. rpm 설치 파일은 충분히 테스트를 한 후 배포하도록 하겠습니다.(아직 테스트가 완료되지 않았습니다.)   
예) tar zxvf elp-0.9.1-linux-x86_64.tar.gz ; cd elp ; ./els-front & 

# 관리자 화면 접속 방법 
브라우저로 설치된 서버의 IP의 7080포트로 접속 후 secret / garden 입력하면 됩니다. 
예) http://x.x.x.x:7080  
관리자 접속 정보는 최초 접속 후 비밀번호를 변경할 수 있도록 준비중입니다. 


# ScreenShot

## SPL 기본 기능  
![Search01](https://github.com/GamjaPower/ELP/raw/master/public/elp_search_01.png)

## TIMECHART
![Search02](https://github.com/GamjaPower/ELP/raw/master/public/elp_search_02.png)

## 시나리오 탐지 및 팬텀 연동 
![Phantom01](https://github.com/GamjaPower/ELP/raw/master/public/elp_phantom_01.png)




## SPL Command List

### index
정확히 index라는 Command는 없고 index를 지정해서 검색하는 하는 기능이다. 아래처럼 인덱스를 정하고 필드 검색을 할 수 있다.  
필드 검색 시 log_message="message"일 경우 log_message가 포함되어 있는 문서를 검색한다.  
그리고 log_message="Rejected message"은 2개의 키워드가 모두 존재하는 문서를 검색한다. 즉 공백은 AND로 처리된다.  
예) index="mail_log" log_message="Rejected message not authorized to relay to"   

### stats 
Splunk의 stats 명령어와 유사합니다. SQLite 기능을 활용해서 개발한 것이라 SQLite에서 사용하는 함수들 대부분 지원합니다.  
예1) index="network_traffic" | stats round(avg(bytes)/1024), sum(bytes), count(*), min(bytes), max(bytes) by src  
예2) index="network_traffic" | dedup src, dpt | stats group_concat(dpt) by src  
Support Function List 
| Type of function               | Supported functions and syntax     | 
| ------------------------- | ---------------|
| Aggregate functions       | sum(), avg(), min(), max(), count(), GROUP_CONCAT(expression, separator)          |


### tstats

Support Function List 
| Type of function               | Supported functions and syntax     | 
| ------------------------- | ---------------|
| Aggregate functions       | count(), distinct_count(), dc(), mean(), avg(), median(), median_absolute_deviation(), stats(), extended_stats(), min(), max(), sum(), values(), terms()        |

stats() : min(), max(), sum(), count(), avg()  
extended_stats() : min(), max(), sum(), count(), avg(), sum_of_squares(), variance(), std_deviation(), std_deviation_bounds_upper(), std_deviation_bounds_lower()


### streamstats 
Splunk의 streamstats 명령어와 유사합니다.  
예) streamstats sum(bytes) by src_ip 

| Type of function               | Supported functions and syntax     | 
| ------------------------- | ---------------|
| Aggregate functions       | sum(), avg(), mean(), median(), min(), max()          |


### timechart
예) timechart c from network_traffic by src span="1d"   


### where 
예) index="network_traffic" | where src="192.168.0.202" | table src, dst, bytes    

### table 
예) index="network_traffic" | where src="192.168.0.202" | table src, dst, bytes   

### head 
예) index="network_traffic" | head 100  

### rename 
예) tstats avg(bytes) from network_traffic by src, dst | rename avg(bytes) as avg_of_bytes  

### dedup 
중복제거 
예) index="network_traffic" | table src, dst, bytes | dedup  
예) index="network_traffic" | table src, dst, bytes | dedup src, dst, bytes

### eval 
예) tstats avg(bytes) as avg_bytes from network_traffic by src | eval avg_kb=round(avg_bytes/1024)  
Support Function List   
| Type of function               | Supported functions and syntax     | 
| ------------------------- | ---------------|
| Mathematical functions | abs(X), ceiling(X), exp(X), floor(X), ln(X), log(X,Y), pi(), pow(X,Y), round(X,Y), sqrt(X)  |
| Trigonometry and Hyperbolic functions | sin(X), cos(X), tan(X), abs(X), fabs(X), sqrt(X), square(X), modf(X), sign(X)  |
| Text functions| 개발중 |

Operators  
| Type              | Operators    | 
| ------------------------- | ---------------|
| Arithmetic  | + - * / % |
| Boolean  | 테스트중 |
| Concatenation  | 테스트중 |


### rex 
Use this command to either extract fields using regular expression named groups, or replace or substitute characters in a field using sed expressions.  
The rex command matches the value of the specified field against the unanchored regular expression and extracts the named groups into fields of the corresponding names.  

예) index="mail_log" | rex field=log_message "Rejected\s*message\s*-\s*(?P<source_ip>[0-9]*.[0-9]*.[0-9]*.[0-9]*)"  


### sort 
예) tstats c from network_traffic by src | sort -c


### join
Splunk에서 사용하는 join과 동일하고 현재는 LEFT OUTER JOIN만 지원합니다. INNER JOIN을 원하신다면 아래처럼 IN 을 사용한 서브쿼리를 사용해주세요. 
tstats max(@timestamp) as event_time, c from safe_db where size>5000 and user_id not in (## tstats c from exception_user by user_id ##) by user_id, dept_code   

예) tstats max(@timestamp) as event_time, c from safe_db by user_id, dept_code | join user_id, dept_code [ index=insa_db | table user_id, user_name, dept_code, dept_name ]    



# Version Compatibility with Elasticsearch

| ELP version               | ES version     | 
| ------------------------- | ---------------|
| 0.9.1                     | 7.x         |
