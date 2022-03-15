/*** 두 수 사이 숫자 ***/

// 두 수 사이의 숫자들을 출력하는 함수를 작성해보자.
// 입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.

/* user code */

// 첫 번째 방법
/*
function answer(x, y) {
  let result = [];
  if (x > y) {
    for (let i = y; i <= x; i++) {
      result.push(i);
    }
  } else {
    for (let i = x; i <= y; i++) {
      result.push(i);
    }
  }

  return result;
}
*/

// 첫 번째 방법은 for문을 두 번 사용하니, 더 간결한 코드로 작성해보자.

// 두 번째 방법
// x < y
function answer(x, y) {
  let result = [];
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  return result;
}

/* main code */
let input = [
  [3, 7],
  [8, 3],
  [12, 10],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
