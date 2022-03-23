/*** 윤년 판별기 ***/

// 자연수를 입력으로 받아 윤년이면 true, 아니면 false 값을 반환하는 함수를 작성해보자.
// 윤년이란 아래 두 가지 중 하나라도 참이면 윤년이다.
//   1. 4의 배수이고 100의 배수가 아닐 때
//   2. 400의 배수일 때

/* user code */

function answer(year) {
  let result;

  if (year % 4 == 0 && year % 100 != 0) {
    result = true;
  } else if (year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/* main code */
let input = [4, 100, 124, 247, 400];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
