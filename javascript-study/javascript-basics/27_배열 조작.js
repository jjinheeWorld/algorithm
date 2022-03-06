/* 
  배열 추가/삭제 (LIFO - Back)
*/
let fruits = ["apple", "orange", "melon"];
let ret;

// 배열 추가 : Array.push(element)
ret = fruits.push("watermelon");
console.log(fruits); // output: [ 'apple', 'orange', 'melon', 'watermelon' ]
console.log(fruits.length); // output: 4
console.log(ret); // output: 4

// 배열 삭제 : Array.pop()
ret = fruits.pop();
console.log(fruits); // output: [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // output: 3
console.log(ret); // output: watermelon

/*
  배열 추가/삭제 (LIFO - Front)
*/
fruits = ["apple", "orange", "melon"];

// 배열 추가 : Array.unshift(element)
ret = fruits.unshift("watermelon");
console.log(fruits); // output: [ 'watermelon', 'apple', 'orange', 'melon' ]
console.log(fruits.length); // output: 4
console.log(ret); // output: 4

// 배열 삭제 : Array.shift()
ret = fruits.shift();
console.log(fruits); // output: [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // output: 3
console.log(ret); // output: watermelon

/* 배열 삭제/변경 (index)
  배열 요소 삭제/변경 : Array.splice(index[, deleteCount, elem1, ..., elemN])
*/
fruits = ["apple", "orange", "melon"];

ret = fruits.splice(1);
console.log(ret); // output: [ 'orange', 'melon' ]
console.log(fruits); // output: [ 'apple' ]

fruits = ["apple", "orange", "melon", "strawberry"];
ret = fruits.splice(1, 1);
console.log(ret); // output: [ 'orange' ]
console.log(fruits); // output: [ 'apple', 'melon', 'strawberry' ]

ret = fruits.splice(1, 1, "mango", "kiwi");
console.log(ret); // output: [ 'melon' ]
console.log(fruits); // output: [ 'apple', 'mango', 'kiwi', 'strawberry' ]

/* 배열 삭제 (index)
  배열 요소 삭제 : Array.slice([start], [end])
*/
fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1)); // output: [ 'orange', 'melon' ]
console.log(fruits); // output: [ 'apple', 'orange', 'melon' ]

console.log(fruits.slice(1, 2)); // output: [ 'orange' ]
console.log(fruits.slice(-2)); // output: [ 'orange', 'melon' ]

/* 배열 병합
  다중 배열 병합 : Array.concat(arg1, arg2...)
*/
fruits = ["apple", "orange", "melon"];
let fruits_add = ["cherry", "banana"];

console.log(fruits.concat(fruits_add));
// output: [ 'apple', 'orange', 'melon', 'cherry', 'banana' ]
console.log(fruits);
// output: [ 'apple', 'orange', 'melon' ]

/* 배열 반복문
  다양한 반복문 문법을 통해 배열 요소에 접근 가능
  반복문 문법 : for ... length(index 접근), for ... of (element 접근), for ... in (key 접근)
*/
fruits = ["apple", "orange", "melon"];

// 1. use for (index)
// output: apple, orange, melon
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. use for ...(element) of
// output: apple, orange, melon
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. use for ...(key) in
// output: apple, orange, melon
for (let key in fruits) {
  console.log(fruits[key]);
}
