// 1번 문제가 맞는 경우에는 1점, 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점
// 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다.
// 틀린 문제는 0점으로 계산한다.
// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성해보자

function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
