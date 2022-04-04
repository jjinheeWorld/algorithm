/*** 2차원 배열의 곱셈 합 ***/

// 2차원 배열을 입력 받아 모든 요소를 곱한 값을 반환해주는 함수를 구현해보자.
// 입력 값은 2차원 배열로 Number 자료형 값이 들어오며, 모든 요소를 곱한 값을 반환해준다.

/* user code */

function answer(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

/* main code */
let input = [
  [[1], [2], [3]],
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
