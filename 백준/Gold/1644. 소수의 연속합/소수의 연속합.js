const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

const primes = [];

for (let i = 2; i <= N; i++) {
  if (isPrime[i]) primes.push(i);
}

let left = 0;
let sum = 0;
let count = 0;

for (let right = 0; right < primes.length; right++) {
  sum += primes[right];

  while (sum >= N) {
    if (sum === N) count++;
    sum -= primes[left];
    left++;
  }
}

console.log(count);
