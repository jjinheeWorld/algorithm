const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const cards = input[1].split(" ").map(Number);
const M = +input[2];
const numbers = input[3].split(" ").map(Number);
cards.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return 0;
};

const answer = [];
for (let number of numbers) {
  const result = binarySearch(cards, number);
  answer.push(result);
}

console.log(answer.join(" "));
