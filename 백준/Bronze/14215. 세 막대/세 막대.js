const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

arr.sort((a, b) => b - a);

if (arr[0] < arr[1] + arr[2]) console.log(arr[0] + arr[1] + arr[2]);
else {
  arr[0] = arr[1] + arr[2] - 1;
  console.log(arr[0] + arr[1] + arr[2]);
}
