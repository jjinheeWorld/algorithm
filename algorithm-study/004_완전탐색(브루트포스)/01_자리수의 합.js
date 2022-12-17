// N개의 자연수가 입력되면 각 자연수의 자리수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성해보자
// 단, 자리수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 한다.

// 첫 번째 방법 (숫자로 만)
function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0; // 자연수의 자리수의 합
    let tmp = x; // 원본 저장
    while (tmp) {
      // tmp가 0이 되면 종료
      sum += tmp % 10; // 자리수의 합
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum; // 가장 큰 자리수의 합
      answer = x; // 합이 최대인 자연수를 answer에 할당
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

// 두 번째 방법 (내장함수)
function solution2(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(arr));
