function solution(num_list) {
  let answer = [];
  let cnt = 0;
  for (let num of num_list) {
      if (num % 2 === 0) {
          cnt++;
      }
  }
  answer.push(cnt);
  answer.push(num_list.length - cnt);
  return answer;
}