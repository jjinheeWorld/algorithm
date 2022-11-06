// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고 고른 홀수들 중 최솟값을 찾는 프로그램을 작성해보자

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    // 주어진 자연수들 중에서 홀수 찾기
    if (arr[i] % 2 === 1) {
      // 홀수인 자연수들의 합 구하기
      sum += arr[i];
      if (arr[i] < min) {
        // 홀수들 중에서 최솟값 구하기
        min = arr[i];
      }
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
