const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]; // 스위치 개수
let switches = input[1].split(" ").map(Number); // 스위치 상태
const studentCount = +input[2];
const students = input.slice(3).map((line) => line.split(" ").map(Number));

for (const [gender, number] of students) {
  if (gender === 1) {
    // 남학생 : 배수인 스위치 상태 반대로 변경
    for (let i = number - 1; i < N; i += number) {
      switches[i] = switches[i] === 0 ? 1 : 0;
    }
  } else {
    // 여학생 : 대칭 구간 찾기
    let left = number - 2;
    let right = number;

    while (left >= 0 && right < N && switches[left] === switches[right]) {
      left--;
      right++;
    }

    // 대칭 구간에 있는 스위치 상태 반대로 변경
    for (let i = left + 1; i < right; i++) {
      switches[i] = switches[i] === 0 ? 1 : 0;
    }
  }
}

// 출력 : 20개씩 줄바꿈
let answer = [];
for (let i = 0; i < N; i++) {
  answer.push(switches[i]);
  if ((i + 1) % 20 === 0) {
    console.log(answer.join(" "));
    answer = [];
  }
}

// 남은 스위치가 20개보다 적으면 마지막 줄 출력
if (answer.length > 0) {
  console.log(answer.join(" "));
}
