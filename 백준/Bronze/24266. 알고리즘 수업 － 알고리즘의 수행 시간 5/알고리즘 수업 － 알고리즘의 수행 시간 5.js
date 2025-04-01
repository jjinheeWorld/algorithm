const fs = require("fs");
let n = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${n * n * n}`);
console.log(3);
