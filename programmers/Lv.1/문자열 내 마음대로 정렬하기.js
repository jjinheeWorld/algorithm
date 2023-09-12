function solution(strings, n) {
  let answer = strings.sort((a, b) => {
      if (a[n] > b[n]) return 1;
      else if (a[n] < b[n]) return -1;
      // 인덱스 n번째 글자가 같으면 사전순으로 정렬 
      else return a > b ? 1 : -1 ;
  });
  return answer;
}