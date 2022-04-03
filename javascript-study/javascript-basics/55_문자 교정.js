/*** 문자 교정 ***/

// 원고의 단어 앞 글자를 모두 대문자로 변경시켜주는 함수를 구현해보자.
// 입력 값은 문자형 형태의 단어들이며, 교정된 문자형으로 치환시켜 반환한다.

/* user code */

function answer(str) {
  let fix_str = "";

  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  return fix_str;
}

/* main code */
let input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "Fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
