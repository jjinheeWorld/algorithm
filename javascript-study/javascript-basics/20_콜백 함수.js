// 콜백 함수(Callback Function)란 다른 함수의 매개변수로 전달되어 수행되어지는 함수
// 고차 함수(Higher-order Function)란 매개변수를 통해 함수를 받아 호출하는 함수

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y); 
}

console.log(calculator(add, 7, 3));
console.log(calculator(sub, 7, 3));
console.log(calculator(mul, 7, 3));
console.log(calculator(div, 7, 3));


// call by *

/* call by value
값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음
원시 타입(primitive type)을 매개 변수로 넘겼을 때 발생 
*/
let a = 1;

let addd = function (b) {b = b + 1;}; // callee
addd(a); // caller
console.log(a); // output: 1

/* call by reference
주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
객체 타입(object type)을 매개 변수로 넘겼을 때 발생
*/
var d = {v:1};
var adddd = function (d) {d.v = d.v + 1;}; // callee
adddd(d); // caller
console.log(d.v); // output: 2