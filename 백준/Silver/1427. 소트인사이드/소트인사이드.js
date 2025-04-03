const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

const arr = n.split("").map(Number);

arr.sort((a, b) => b - a);
console.log(arr.join(""));
