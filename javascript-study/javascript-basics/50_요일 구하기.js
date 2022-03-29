/*** 요일 구하기 ***/

// 날짜를 입력 받아 요일을 반환해주는 함수를 구현해보자.
// 입력 값은 문자형 날짜(datestring) 값이 입력되며, 문자형 형태의 요일을 반환한다.

/* user code */

function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  let day;

  let date = new Date(str);
  day = week[date.getDay()];

  return day;
}

/* main code */
let input = ["2022-03-29", "2022-03-30", "2022-03-31"];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
