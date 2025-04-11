const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const max = 1000000;

const primes = Array(max + 1).fill(true);
primes[0] = primes[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (primes[i]) {
    for (let j = i * i; j <= max; j += i) {
      primes[j] = false;
    }
  }
}

const answer = [];

for (let n of input) {
  if (n === 0) break;

  let found = false;

  for (let a = 3; a <= n / 2; a += 2) {
    let b = n - a;
    if (primes[a] && primes[b]) {
      answer.push(`${n} = ${a} + ${b}`);
      found = true;
      break;
    }
  }

  if (!found) answer.push("Goldbach's conjecture is wrong.");
}

console.log(answer.join("\n"));
