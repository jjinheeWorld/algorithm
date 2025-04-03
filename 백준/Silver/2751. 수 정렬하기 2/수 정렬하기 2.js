const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = input.splice(1);

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
