const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const sH = new Map();

for (let char of input) {
  if (sH.has(char)) sH.set(char, sH.get(char) + 1);
  else sH.set(char, 1);
}

const maxCount = Math.max(...sH.values());
const maxCharArr = [...sH].filter(([_, count]) => count === maxCount);

console.log(maxCharArr.length > 1 ? "?" : maxCharArr[0][0]);
