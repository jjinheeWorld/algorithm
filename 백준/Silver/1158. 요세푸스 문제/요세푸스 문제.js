const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const queue = Array.from({ length: N }, (_, index) => index + 1);
const answer = [];

while (queue.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }

  answer.push(queue.shift());
}

console.log(`<${answer.join(", ")}>`);