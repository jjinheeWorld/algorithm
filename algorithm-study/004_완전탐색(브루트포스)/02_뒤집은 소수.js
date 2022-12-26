// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성해보자
// 단, 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 소수 판별 함수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 첫 번째 방법 (숫자로 만)
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 두 번째 방법 (내장함수)
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));
