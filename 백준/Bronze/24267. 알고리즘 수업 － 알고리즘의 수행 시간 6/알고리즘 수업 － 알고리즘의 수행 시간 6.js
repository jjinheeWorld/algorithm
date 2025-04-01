const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`${(BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)}`);
console.log(3);
