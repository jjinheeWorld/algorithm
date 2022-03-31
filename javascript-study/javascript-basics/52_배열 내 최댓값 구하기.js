/*** 배열 내 최댓값 구하기 ***/

// 정수가 저장된 배열을 입력 받아 그 중 최댓값을 반환해주는 함수를 구현해보자.
// Math 객체를 이용하지 않고 반복문을 통해 구현해야 한다.
// 입력 값은 배열 형태로 값은 정수가 입력되며, 그 중 최댓값을 반환한다.

/* user code */

function answer(arr) {
  let max;

  max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

/* main code */
let input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
