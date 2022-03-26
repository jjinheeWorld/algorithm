/*** 제곱 구현 ***/

// 두 수 x, y를 입력 받아 x의 y 제곱 값을 반환해주는 함수를 구현해보자.
// 제곱 연산자(**)는 사용하지 않는다.

/* user code */

function answer(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

/* main code */
let input = [
  [2, 3],
  [4, 6],
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
