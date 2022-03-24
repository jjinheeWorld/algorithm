/*** ATM 기기 ***/

// ATM 기기는 5 만원 지폐밖에 사용하지 않아 5 배수 금액만 취급한다.
// 그리고 인출 할 때 0.5만원(5천원)의 수수료가 필요하다.
// 인출할 금액과 계좌의 총 금액을 입력 받아 계좌의 남은 금액을 반환하는 함수를 작성해보자.
// 단, 정상적인 인출이 불가능할 경우 돈은 출금되지 않고, 통장의 원래 금액을 반환한다.

/* user code */

function answer(withdraw, total) {
  let result;

  if (withdraw % 5 != 0) {
    result = total;
  } else if (withdraw + 0.5 > total) {
    result = total;
  } else {
    result = total - withdraw - 0.5;
  }

  return result;
}
/* main code */
let input = [
  [40, 130.0],
  [33, 130.0],
  [300, 300.0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
