function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let cnt = 0;
  let idx = m - 1;
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    cnt += score[idx] * m;
    idx += m;
  }
  return cnt;
}
