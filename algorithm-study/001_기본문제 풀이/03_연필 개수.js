// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성해보자
// 연필 1다스는 12자루

function solution(n) {
  let answer = Math.ceil(n / 12); // Math.ceil() 소수점 이하를 올림
  return answer;
}

console.log(solution(178));
