// 2차원 배열
// 2차원 배열은 array[N][M]으로 접근하며, 배열(Array) 전체를 push(), pop() 가능
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array); // output: [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // output: [ 101, 102, 103 ]
console.log(array[1][0]); // output: 201
console.log(array[2][2]); // output: 303

let arr_2 = array.pop();
console.log(array.length); // output: 2
console.log(arr_2); // output: [ 301, 302, 303 ]
console.log(array); // output: [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // output: 3
console.log(array_num); // output: 3
console.log(array); // output: [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]

// 2차원 배열 반복문
// 이중 for loop를 사용한 2차원 배열 접근
array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array[0][0]);
//...
console.log(array[2][2]);

for (let i = 0; i < array.length; i++) {
  // array.length == 3, i: 0 ~ 2
  for (let j = 0; j < array[i].length; j++) {
    // array[i].length == 3, j: 0 ~ 2
    console.log(array[i][j]);
  }
}
/* output: 101 ... 303 */

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits : ${fruits[i][0]}, amount : ${fruits[i][1]}`);
}
/* output
fruits : strawberry, amount : 50
fruits : banana, amount : 100
fruits : ice, amount : 150
*/
