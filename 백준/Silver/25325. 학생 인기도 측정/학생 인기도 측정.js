const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const studentList = input[1].split(" ");
const studentMap = new Map();

for (let student of studentList) {
  studentMap.set(student, 0);
}

const studentInfoList = input.slice(2);

for (let studentInfo of studentInfoList) {
  const likeList = studentInfo.split(" ");

  for (let name of likeList) {
    if (studentMap.has(name)) studentMap.set(name, studentMap.get(name) + 1);
  }
}

const sortedStudent = [...studentMap].sort((a, b) => {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else return a[0].localeCompare(b[0]);
});

for (let i = 0; i < n; i++) {
  const answer = sortedStudent[i];
  console.log(answer.join(" "));
}
