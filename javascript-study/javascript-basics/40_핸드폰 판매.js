/*** 핸드폰 판매 ***/

// 핸드폰 판매 수량을 입력 받아서, 가장 많이 판매한 종업원 번호를 반환해주는 함수를 작성해보자.
// 입력은 배열 형태로 종업원 별 판매 수량 값이 주어지며, 가장 많이 판매한 번호를 반환한다.
// 가장 첫번째 번호는 1번이다.

/* user code */

function answer(employee) {
  let employee_id;

  let max = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }
  return employee_id;
}

/* main code */
let input = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
