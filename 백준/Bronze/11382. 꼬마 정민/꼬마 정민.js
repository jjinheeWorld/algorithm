const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const answer = input.reduce((acc, v) => acc + v);
console.log(answer);