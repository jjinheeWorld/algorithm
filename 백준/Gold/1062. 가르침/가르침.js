const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

function solution(N, K) {
  const requireChars = ["a", "n", "t", "i", "c"];

  if (K < requireChars.length) {
    console.log(0);
    return;
  }

  const learned = Array(26).fill(false);
  requireChars.forEach((char) => (learned[char.charCodeAt(0) - 97] = true));

  const words = input.slice(1).map((word) => word.slice(4, -4));

  let max = 0;

  const backtracking = (start, count) => {
    if (count === K - 5) {
      let readable = 0;
      for (const word of words) {
        let canRead = true;
        for (const ch of word) {
          if (!learned[ch.charCodeAt(0) - 97]) {
            canRead = false;
            break;
          }
        }
        if (canRead) readable++;
      }
      max = Math.max(max, readable);
      return;
    }

    for (let i = start; i < 26; i++) {
      if (!learned[i]) {
        learned[i] = true;
        backtracking(i + 1, count + 1);
        learned[i] = false;
      }
    }
  };
  backtracking(0, 0);
  console.log(max);
}

solution(N, K);
