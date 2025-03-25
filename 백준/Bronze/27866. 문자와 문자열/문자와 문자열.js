const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const s = input[0];
const index = +input[1];

console.log(s[index - 1]);
