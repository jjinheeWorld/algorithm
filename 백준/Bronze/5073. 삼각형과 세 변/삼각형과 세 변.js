const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let arr of input) {
  arr = arr.split(" ").map(Number).sort((a, b) => b - a);

  if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0) break;

  if (arr[0] >= arr[1] + arr[2]) {
    console.log("Invalid");
  } else {
    const sideSet = new Set(arr);

    switch (sideSet.size) {
      case 1:
        console.log("Equilateral");
        break;
      case 2:
        console.log("Isosceles");
        break;
      case 3:
        console.log("Scalene");
        break;
    }
  }
}
