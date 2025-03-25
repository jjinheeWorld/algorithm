const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const v = Number(input[2]);

const answer = arr.filter((item) => item === v).length;
console.log(answer);
