// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성해보자
// 첫 번째 수는 무조건 출력한다.

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) answer.push(arr[i]);
  }
  return answer;
}

// reduce 활용
function solution2(arr) {
  let answer = [];
  arr.reduce((acc, v) => {
    if (acc < v) answer.push(v);
    return v;
  }, 0); // 첫 번째 수는 무조건 출력할 수 있도록 초기화 값을 0으로 설정한다.
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
