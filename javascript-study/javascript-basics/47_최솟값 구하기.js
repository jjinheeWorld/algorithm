/*** 최솟값 구하기 ***/

// 두 수의 정수를 입력 받아 최솟값을 반환해주는 함수를 구현해보자.

/* user code */

function answer(x, y) {
  let min;

  min = x > y ? y : x;

  return min;
}

/* main code */
let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
