const fs = require("fs");
let n = +fs.readFileSync("/dev/stdin").toString().trim();

console.log((n * (n - 1)) / 2);
console.log(2);
