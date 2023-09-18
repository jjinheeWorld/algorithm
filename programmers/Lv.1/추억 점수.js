function solution(name, yearning, photo) {
  let answer = [];
  let tmp = new Map();

  for (let i = 0; i < name.length; i++) {
    if (!tmp.has(name[i])) tmp.set(name[i], yearning[i]);
  }

  for (let x of photo) {
    answer.push(
      x.reduce((a, b) => {
        if (tmp.has(b)) return a + tmp.get(b);
        else return a + 0;
      }, 0)
    );
  }

  return answer;
}
