// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것
// 10부제를 위반하는 자동차의 대수를 출력하는 프로그램을 작성해보자

function solution(day, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    // 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자 일치한다면
    if (arr[i] % 10 === day) {
      // answer를 하나씩 증가
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
