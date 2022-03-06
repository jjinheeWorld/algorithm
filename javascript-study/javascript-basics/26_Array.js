// 배열
// 여러 개체(Entity)값을 순차적으로 나열한 자료 구조
// 배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근

// 배열 선언 : "new Array()" 혹은 "[]"를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능
// 접근 방법 : "Array[index]"를 통해 index를 통하여 O(1) 접근
// 배열 속성 : "Array.length"를 통해 배열 요소의 개수 확인 가능

let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); // output: [ <10 empty items> ]
console.log(arr_2); // output: []

let fruits = ["apple", "orange", "melon"];
console.log(fruits); // output: [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // output: 3
console.log(fruits[0]); // output: apple
console.log(fruits[1]); // output: orange
console.log(fruits[2]); // output: melon

fruits[1] = "kiwi";
console.log(fruits); // output: [ 'apple', 'kiwi', 'melon' ]

// 배열의 실체
// 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
// 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums.length); // output: 2
console.log(nums); // output: [ 'one', 'two' ]

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length); // output: 2
console.log(nums); // output: [ 'one', 'two', once: 'once', twice: 'twice' ]

console.log(Object.getOwnPropertyDescriptors(nums));
/* output:
{ '0': { value: 'one', writable: true, enumerable: true, configurable: true},
  '1': { value: 'two', writable: true, enumerable: true, configurable: true},
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  once: { value: 'once', writable: true, enumerable: true, configurable: true},
  twice: { value: 'twice', writable: true, enumerable: true, configurable: true}} */

// 배열 타입 확인 및 요소 삭제
// 배열 타입 확인 방법 : Array.isArray(value)
// 배열 일부 요소 삭제 : delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)
let num = 123.456;
let str = "here i am";
let fruitss = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); // output: false
console.log(Array.isArray(str)); // output: false
console.log(Array.isArray(fruitss)); // output: true

console.log(fruitss); // output: [ 'apple', 'orange', 'melon' ]
console.log(fruitss.length); // output: 3

delete fruitss[1];
console.log(fruitss); // output: [ 'apple', <1 empty item>, 'melon' ]
console.log(fruitss.length); // output: 3
