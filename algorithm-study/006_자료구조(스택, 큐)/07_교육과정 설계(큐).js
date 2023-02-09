// 수업중에는 필수과목이 있다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있다.
// 수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석한다.
// 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성해보자

function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
