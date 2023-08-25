function solution(array, commands) {
  let answer = tmp = [];
  for (let i = 0; i < commands.length; i++) {
      const [start, end, target] = commands[i];
      tmp = array.slice(start - 1, end);
      tmp.sort((a, b) => a - b);
      answer.push(tmp[target - 1]);
  }
  return answer;
}