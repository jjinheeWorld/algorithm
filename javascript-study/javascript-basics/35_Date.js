/* Date 생성자
  Date 생성자 종류 : new Date(), new Date(miniseconds), new Date(datestring)
  new Date(year, month, date, hours, minutes, seconds, ms)
*/

/* 1. Default */
let date_now = new Date();
let date_now_str = Date();

console.log(date_now);
// output: 2022-03-13T01:35:49.712Z
console.log(date_now_str);
// output: Sun Mar 13 2022 10:35:49 GMT+0900 (Korean Standard Time)
console.log(typeof date_now); // output: object
console.log(typeof date_now_str); // output: string

/* 2. milliseconds (1/1000)sec */
let date_ms_1 = new Date(0);
console.log(date_ms_1);
// output: 1970-01-01T00:00:00.000Z
let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2);
// output: 1970-01-02T00:00:00.000Z

/* 3. date string */
let date_string = new Date("2020-01-01");
console.log(date_string);
// output: 2020-01-01T00:00:00.000Z

/* 4. year, month, ..., ms */
// month 값 범위는 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);
// output: 2020-12-31T15:00:00.000Z
console.log(date_params_2);
// output: 2021-01-01T06:12:18.024Z
console.log(date_params_3);
// output: 2021-01-01T00:00:00.000Z

/* 날짜 정보 얻기
  날짜 정보 얻기 (년/월/일/요일) : Date.getFullYear(), Date.getMonth(), Date.getDate(), Date.getDay()
  날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
  주어진 일시 - 1970/1/1 차분(ms) : Date.getTime(), 현지시간 - 표준 시간 차분 (min) : Date.getTimezoneOffset() 
*/

let date = new Date();
console.log(date); // output: 2022-03-13T01:56:55.128Z

/* 1. year, month, day : 일요일(0) ~ 토요일(6) */
console.log(date.getFullYear()); // output: 2022
console.log(date.getMonth()); // output: 2 -> 3월
console.log(date.getDay()); // output: 0 -> 일요일

/* 2. hours */
console.log(date.getHours()); // output: 10
console.log(date.getUTCHours()); // output: 1

/* 3 getTime : (now - date(0)) milliseconds
     getTimezoneOffset : (UTC+0 - currentZone) minutes */
console.log(date.getTime()); // output: 1647136858012
console.log(new Date(date.getTime())); // output: 2022-03-13T02:00:58.012Z
console.log(date.getTimezoneOffset()); // output: -540

/* 날짜 정보 설정
  날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
  날짜 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
*/

let ms_year = date.setFullYear(2022, 10, 23);
console.log(date); // output: 2022-11-23T02:08:59.096Z
console.log(new Date(ms_year)); // output: 2022-11-23T02:08:59.096Z

date.setDate(1);
console.log(date); // output: 2022-11-01T02:08:59.096Z
date.setDate(0); // setDate(0) => 이전 달의 마지막 날
console.log(date); // output: 2022-10-31T02:08:59.096Z

date.setHours(date.getHours() + 2);
console.log(date); // output: 2022-10-31T04:08:59.096Z

/* parse 
  문자열 기반 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
    YYYY-MM-DD -> 날짜(연-월-일), "T" -> 구분 기호, HH:mm:ss.sss -> 시:분:초.밀리초
    'Z'(option) -> 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정
*/

let ms_parse = Date.parse("2022-03-13T00:00:00.000");

console.log(ms_parse);
// output: 1647097200000
console.log(new Date(ms_parse));
// output: 2022-03-12T15:00:00.000Z

console.log(new Date(Date.parse("2022-03-13T00:00:00.000Z")));
// output: 2022-03-13T00:00:00.000Z

/* benchmark
  벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정
*/

function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTime(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
  let date_1 = new Date("2022-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); // dateSub: 13ms
console.log("getTime: " + benchmark(getTime) + "ms"); // getTime: 3ms
