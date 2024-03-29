// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력해보자

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; // 초기화
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }
    // Math.max는 입력값으로 받은 숫자 중 가장 큰 숫자를 반환
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0; // 초기화
  for (let i = 0; i < n; i++) {
    // 두 대각선의 합
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
