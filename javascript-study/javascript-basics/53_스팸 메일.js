/*** 스팸 메일 ***/

// 대소문자를 구분하지 않고 Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구현해보자.
// 입력 값은 문자형이며, 출력 값은 스팸으로 판단할 경우 true, 아닐 경우 false를 반환한다.

/* user code */

function answer(str) {
  let spam_flag;

  spam_flag = str.toLowerCase().includes("advert");

  return spam_flag;
}

/* main code */
let input = [
  "RE: Request documents",
  "[Advertisement] free mobile!",
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
