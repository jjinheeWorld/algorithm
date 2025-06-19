const fs = require("fs");
const N = fs.readFileSync("/dev/stdin").toString().trim();

function solution(n) {
  const arr = n.split("").map(Number);
  if (!arr.includes(0)) return -1;
  const sum = arr.reduce((acc, v) => acc + v, 0);

  if (sum % 3 !== 0) return -1;
  arr.sort((a, b) => b - a);
  
  return arr.join("");
}

console.log(solution(N));
