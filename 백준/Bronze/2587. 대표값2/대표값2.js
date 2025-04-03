const fs = require("fs");
let arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

arr.sort((a, b) => a - b);
const avg = Math.floor(arr.reduce((acc, num) => acc + num) / 5);
const midIndex = Math.floor(arr.length / 2);

console.log(avg);
console.log(arr[midIndex]);
