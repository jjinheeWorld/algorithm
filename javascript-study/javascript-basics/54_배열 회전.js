/*** 배열 회전 ***/

// 배열을 입력 받아 순서를 역으로 만들어 반환해주는 함수를 구현해보자.
// reverse 함수를 이용하지 않고 반복문을 통해 구현해야 한다.
// 입력은 배열 형태로 값은 정수형과 문자형으로 구성되어 있으며, 역으로 변환된 배열을 반환한다.

/* user code */

function answer(user) {
  let reverse = [];

  let tmp;
  for (let i = 0; i < user.length / 2; i++) {
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }
  reverse = user;

  return reverse;
}

/* main code */
let input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
