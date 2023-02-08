// 1번 왕자부터 시 계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면
// 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
// 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다. 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.
// N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성해보자

function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    // queue의 길이가 1이 될 떄까지 반복
    // 1, 2번째 요소는 queue의 뒤로 옮긴 후
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    // 3번째 (k번째) 요소는 제거
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
