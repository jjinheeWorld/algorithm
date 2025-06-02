function solution(k, m, score) {
  const answer = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i + m <= score.length; i += m) {
    const minScore = score[i + m - 1];
    answer.push(minScore * m);
  }
  return answer.reduce((a, b) => a + b, 0);
}
