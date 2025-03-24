const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = input[1];

const b1 = Number(B[2]);
const b2 = Number(B[1]);
const b3 = Number(B[0]);

console.log(A * b1);
console.log(A * b2);
console.log(A * b3);
console.log(A * Number(B));
