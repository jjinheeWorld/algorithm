/*** 별별별 ***/

// 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성해보자.

/* user code */
function answer(num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    result += "*";
  }
  return result;
}

/* main code */
let input = [5, 7, 12];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i])}`);
}
