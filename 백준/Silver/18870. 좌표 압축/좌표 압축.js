const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

const indexMap = new Map();
sortedArr.forEach((num, index) => indexMap.set(num, index));

const answer = arr.map((num) => indexMap.get(num));
console.log(answer.join(" "));
