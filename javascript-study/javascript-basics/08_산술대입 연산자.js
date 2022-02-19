/* 
산술 연산자 
*/
// 수학적 계산을 위해 제공하는 연산자
// 덧셈 연산자 : +
console.log(31 + 10);  // output: 41

// 뺄셈 연산자 : -
console.log(31 - 10);  // output: 21

// 곱셈 연산자 : *
console.log(31 * 10);  // output: 310

// 나눗셈 연산자 : /
console.log(31 / 10);  // output: 3.1

// 몫
console.log(parseInt(31 / 10)); // output: 3

// 나머지 연산자 : %
console.log(31 % 10);  // output: 1

// 거듭제곱 연산자 : **
console.log(2 ** 3);   // output: 8


/*
대입 연산자 : =
*/
// 계산한 결과를 하나의 변수에 저장하기 위한 연산자
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "world";

let num_3, str_3;
num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3);  // output: 579
console.log(str_3);  // output: helloworld

let num_4 = num_1 - num_2;
console.log(num_4);  // output: -333


/* 
복합 대입 연산자
*/
// 산술 연산자로 피연산자를 계산해 결과값을 한번에 대입시켜주는 연산자
let num = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

// +=
result_1 += num; // result_1 = result_1 + num;
console.log(result_1);  // output: 41

// -=
result_2 -= num;
console.log(result_2);  // output: 21

// *=
result_3 *= num;
console.log(result_3);  // output: 310

// /=
result_4 /= num;
console.log(result_4);  // output: 3.1

// %=
result_5 %= num;
console.log(result_5);  // output: 1


/*
증가 감소 연산자
*/
// 숫자 1만큼 증가시키거나 감소시킬 때 사용되는 연산자
let numb, result;

// 증가 연산자 : ++(피연산자), (피연산자)++;
numb = 10;
result = numb ++;
console.log(result); // output: 10
console.log(numb);   // output: 11

numb = 10;
result = ++numb;     // output: 11
console.log(result); // output: 11
console.log(numb);

// 감소 연산자 : --(피연산자), (피연산자)--;
numb = 10;
result = numb --;
console.log(result); // output: 10
console.log(numb);   // output: 9

numb = 10;
result = --numb;
console.log(result); // output: 9
console.log(numb);   // output: 9