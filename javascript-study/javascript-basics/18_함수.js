// 함수 정의

/* 1. 함수 선언식
function func (arg1, arg2, ...argN) {
  expression;
}
*/
function add(x, y) {
  return x + y;
}

/* 2. 함수 표현식
const func = function (arg1, arg2, ... argN) {
  expression;
}
*/
const addd = function (x, y) {
  return x + y;
};

/* 화살표 함수
const func = (arg1, arg2, ...argN) => expression;
*/
const adddd = (x, y) => x + y;


// 함수 호출
// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
// ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능

// 1. default value
function print_add(x, y = 10) {
  console.log(x + y);
}
print_add(10, 20, 30); // output: 30
print_add(10, 20); // output: 30
print_add(10); // output: 20
print_add(); // output: NaN

// 2. dynamic parameters
function print_min() {
  // console.log(arguments);
  console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // output: -10
print_min(10, 20); // output: -10
print_min(10); // output: NaN
print_min(); // output: NaN


// 함수 반환
// return 후 코드는 수행되지 않으며, default return value는 undefined

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAge(14)); // output: false
console.log(checkAge(20)); // output: true