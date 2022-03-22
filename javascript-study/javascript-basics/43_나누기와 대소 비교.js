/*** 나누기와 대소비교 ***/

// 4개의 수를 입력 받아 나누기 연산을 통해 대소를 판단하는 함수를 제작해보자.
// 입력 값은 1000이하의 자연수 a, b, c, d가 주어지고
// a/b > c/d일 때는 1, a/b = c/d일 때는 0, a/b < c/d일 때는 -1을 반환한다.

/* user code */

function answer(a, b, c, d) {
  let result;

  if (a / b > c / d) {
    result = 1;
  } else if (a / b == c / d) {
    result = 0;
  } else {
    result = -1;
  }
  return result;
}

/* main code */
let input = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
