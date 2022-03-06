/* 배열 탐색
  index 탐색(앞에서부터) :Array.indexOf(item, from)
  index 탐색(뒤에서부터) :Array.lastIndexOf(item, from)
  값 포함 여부 확인 : Array.includes(item, from)
*/
let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); // output: 1
console.log(fruits.indexOf("Orange")); // output: -1
console.log(fruits.indexOf("orange", 2)); // output: 3

console.log(fruits.lastIndexOf("orange")); // output: 3
console.log(fruits.lastIndexOf("orange", -3)); // output: 1
console.log(fruits.lastIndexOf("orange", 0)); // output: -1

console.log(fruits.includes("orange")); // output: true
console.log(fruits.includes("Orange")); // output: false
console.log(fruits.includes("watermelon")); // output: false

/* 
배열 변형 (정렬, 반전, 변환)
*/

// 배열 정렬 : Array.sort(), 배열 반전 : Array.reverse()
let num = [1, -1, 4, 5, 2, 0];

console.log(num); // output: [ 1, -1, 4, 5, 2, 0 ]
console.log(num.sort()); // output: [ -1, 0, 1, 2, 4, 5 ]
console.log(num.reverse()); // output: [ 5, 4, 2, 1, 0, -1 ]

fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // output: [ 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits.reverse()); // output: [ 'orange', 'melon', 'banana', 'apple' ]

// 배열 변환 : 배열 값을 문자열로 변환, Array.join(separator)
fruits = ["apple", "orange", "banana", "melon"];

let str = fruits.join();
console.log(str); // output: apple,orange,banana,melon

let str_separator = fruits.join(";");
console.log(str_separator); // output: apple;orange;banana;melon

let result = str_separator.split(";");
console.log(result); // output: [ 'apple', 'orange', 'banana', 'melon' ]
