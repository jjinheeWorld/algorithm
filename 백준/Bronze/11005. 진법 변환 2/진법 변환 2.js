const fs = require("fs");
const [n, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(n.toString(b).toUpperCase());
