const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

while (true) {
  const [n, m] = input[idx].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  const targets = input.slice(idx + 1, idx + 1 + n).map(Number);
  const arr = input.slice(idx + 1 + n, idx + 1 + n + m).map(Number);

  let count = 0;

  for (let target of targets) {
    let left = 0;
    let right = m - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        count++;
        break;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  console.log(count);

  idx += n + m + 1;
}
