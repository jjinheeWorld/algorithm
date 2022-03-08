/* sort() 문제와 한계점 */

// (1)
// 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인 : sort메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생

let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort()); // output: [ -1, 0, 1, 10, 12, 20, 4 ]
console.log(nums.reverse()); // output: [ 4, 20, 12, 10, 1, 0, -1 ]

/*
sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능 !!!!!!!!!!
*/

let ascending_order_1 = function (x, y) {
  return x - y;
};
let descending_order_1 = function (x, y) {
  return y - x;
};

nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order_1));
// output: [ -1, 0, 1, 4, 10, 12, 20 ]
console.log(nums.sort(descending_order_1));
// output: [ 20, 12, 10, 4, 1,  0, -1 ]

// (2)
// 한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon"];

console.log(fruits.sort());
// output: [ 'Orange', 'apple', 'melon', 'orange' ]
console.log(fruits.reverse());
// output: [ 'orange', 'melon', 'apple', 'Orange' ]

/* 
sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능 !!!!!!!!!!
*/

let ascending_order_2 = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

let descending_order_2 = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};
fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order_2));
// output: [ 'apple', 'melon', 'Orange', 'orange' ]
console.log(fruits.sort(descending_order_2));
// output: [ 'Orange', 'orange', 'melon', 'apple' ]

// (3)
/* 
콜백 함수 ascending_order, descending_order 공용화
*/
let ascending_order_3 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
};

let descending_order_3 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x < y ? 1 : -1;
};

// case 1
nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order_3)); // output: [ -1, 0, 1, 4, 10, 12, 20 ]
console.log(nums.sort(descending_order_3)); // output: [ 20, 12, 10, 4, 1,  0, -1 ]

// case 2
fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order_3));
// output: [ 'apple', 'melon', 'orange', 'Orange' ]
console.log(fruits.sort(descending_order_3));
// output: [ 'Orange', 'orange', 'melon', 'apple' ]
