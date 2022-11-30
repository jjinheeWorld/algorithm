// 난쟁이가 일곱 명이 아닌 아홉 명으로 늘어났다.
// 다행스럽게도 백설공주는 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성해보자.

function solution(arr) {
  let answer = arr;
  // 먼저, 아홉 난쟁이의 키의 합을 구하기 위해
  // reduce()로 배열의 합계를 구한다.
  let sum = arr.reduce((acc, v) => acc + v, 0);
  // 이중 for문을 통해 가짜 난쟁이를 찾는다.
  // 아홉 난쟁이의 키의 합 - (난쟁이 i의 키 + 난쟁이 j의 키) === 100 이면
  // 난쟁이 i와 난쟁이 j는 가짜 난쟁이
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
