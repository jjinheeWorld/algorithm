const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numArr = input[1].split("").map(Number);
const answer = numArr.reduce((acc, num) => acc + num);
console.log(answer);
