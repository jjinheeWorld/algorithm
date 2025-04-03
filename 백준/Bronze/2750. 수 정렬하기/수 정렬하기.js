const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

// 선택정렬
for (let i = 0; i < arr.length - 1; i++) {
  let minValueIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minValueIndex] > arr[j]) {
      minValueIndex = j;
    }
  }
  const temp = arr[i];
  arr[i] = arr[minValueIndex];
  arr[minValueIndex] = temp;
}

console.log(arr.join("\n"));
