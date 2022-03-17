/*** 반평균 ***/

// 시험 점수의 반 평균을 구해주는 프로그램을 만들어보자.
// 입력은 배열 형태로 학생 별 시험 점수 값이 주어지며, 해당 반의 평균 점수를 반환한다.
// 단, 평균 점수가 소수점으로 나올 수 있기 때문에 두번째 자리까지 반올림하여 반환한다.

/* user code */

function answer(score) {
  let average = 0;

  // 1. 반 인원만큼 시험 점수를 더한다.
  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }

  // 2. 반 인원 수만큼 더한 점수를 나눠 평균을 구한다.
  average /= score.length;

  // 3. 소수 두번째 자리까지 표현되도록 한다. (반올림 처리)
  average = average.toFixed(2);

  return average;
}

/* main code */
let input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
