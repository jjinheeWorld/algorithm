const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const xArr = [];
const yArr = [];

for (let arr of input) {
  const [x, y] = arr.split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
}

const findUnique = (arr) =>
  arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));

console.log(findUnique(xArr), findUnique(yArr));
