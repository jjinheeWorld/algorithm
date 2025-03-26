const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map((num) => Number([...num].reverse().join("")));
console.log(Math.max(...arr));
