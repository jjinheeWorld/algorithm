// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성해보자
// A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 한다.

function solution(test) {
  let answer = 0;
  let m = test.length; // 테스트 수
  let n = test[0].length; // 학생 수

  for (let i = 1; i <= n; i++) {
    // 1번 학생부터 n번 학생까지
    for (let j = 1; j <= n; j++) {
      // 1번 학생부터 n번 학생까지
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        // 몇 번째 테스트인지
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // s는 등수
          if (test[k][s] === i) pi = s; // 너의 등수는 s다!
          if (test[k][s] === j) pj = s; // 너의 등수는 s다!
        }
        if (pi < pj) cnt++; // 테스트마다 i번 학생의 등수가 더 높다면 cnt++
      }
      if (cnt === m) answer++; // 모든 테스트에서 i번 학생의 등수가 더 높았다면 answer++
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
