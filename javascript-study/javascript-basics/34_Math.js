/* 최대/최소/절대값
  최대값 : Math.max(... x), 최소값 : Math.min(... x), 절대값 : Math.abs(x)
  배열을 인수로 받아 최대/최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요
*/

/* 1. MAX/MIN */
console.log(Math.max(1, -1)); // output: 1
console.log(Math.min(1, -1)); // output: -1

console.log(Math.max(1, -1, 5, 23, 17, -4)); // output: 23
console.log(Math.min(1, -1, 5, 23, 17, -4)); // output: -4

let nums = [1, -1, 5, 23, 17, -4];
// use apply
console.log(Math.max.apply(null, nums)); // output: MAX: 23
console.log(Math.min.apply(null, nums)); // output: MIN: -4
// use spread
console.log(Math.max(...nums)); // output: MAX: 23
console.log(Math.min(...nums)); // output: MIN: -4

/* 2. ABS */
console.log(Math.abs(1)); // output: 1
console.log(Math.abs(-1)); // output: 1
console.log(Math.abs(-Infinity)); // output: Infinity

/*  속성 및 랜덤
 0과 1사이의 난수 랜덤 값 : Math.random()
*/

/* 1. Math property */
console.log(Math.E); // output: 2.718281828459045
console.log(Math.PI); // output: 3.141592653589793

/* 2. Random */
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}
/* output
0.7779590451289782
0.2895172764917562
0.39467166747802396
*/
for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
}
/* output
6
7
9
*/

/* 제곱/제곱근/소수점 처리
  제곱 : Math.pow(x, y), 제곱근 : Math.sqrt(x) 
  소수점 이하 반올림 정수 : Math.round(x)
  소수점 이하 올림 : Math.ceil(x), 소수점 이하 내림 : Math.floor(x)
*/

/* 1. pow */
console.log(Math.pow(2, 3)); // output: 8
console.log(2 ** 3); // output: 8

/* 2. sqrt */
console.log(Math.sqrt(4)); // output: 2
console.log(Math.sqrt(2)); // output: 1.4142135623730951

/* round, ceil, floor */
console.log(Math.round(3.5)); // output: 4
console.log(Math.round(-2.3)); // output: -2
console.log(Math.round(-2.7)); // output: -3

console.log(Math.ceil(3.5)); // output: 4
console.log(Math.ceil(-2.3)); // output: -2
console.log(Math.ceil(-2.7)); // output: -2

console.log(Math.floor(3.7)); // output: 3
console.log(Math.floor(-2.3)); // output: -3
console.log(Math.floor(-2.7)); // output: -3
