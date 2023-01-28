// N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구해보자

function solution(k, arr) {
  let answer = (sum = 0);
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
