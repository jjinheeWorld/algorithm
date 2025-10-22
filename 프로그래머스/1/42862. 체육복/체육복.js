function solution(n, lost, reserve) {
  const students = Array(n).fill(1);

  for (const i of lost) students[i - 1] -= 1;
  for (const i of reserve) students[i - 1] += 1;

  // 내가 2벌이면 왼쪽 -> 오른쪽 순서로
  for (let i = 0; i < n; i++) {
    if (students[i] === 2) {
      if (i - 1 >= 0 && students[i - 1] === 0) {
        students[i - 1] = 1;
        students[i] = 1;
      } else if (i + 1 < n && students[i + 1] === 0) {
        students[i + 1] = 1;
        students[i] = 1;
      }
    }
  }

  return students.filter((v) => v > 0).length;
}