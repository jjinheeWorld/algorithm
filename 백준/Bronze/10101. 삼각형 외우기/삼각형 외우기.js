const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const sum = arr.reduce((acc, num) => acc + num);
const angleSet = new Set(arr);

if (sum === 180) {
  switch (angleSet.size) {
    case 1:
      console.log("Equilateral");
      break;
    case 2:
      console.log("Isosceles");
      break;
    case 3:
      console.log("Scalene");
  }
} else {
  console.log("Error");
}
