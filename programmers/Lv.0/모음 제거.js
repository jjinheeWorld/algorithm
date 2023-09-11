function solution(my_string) {
  let answer = '';
  let delStr = ['a', 'e', 'i', 'o', 'u'];
  for (let x of my_string) {
      if (!delStr.includes(x)) answer += x;
  }
  return answer;
}