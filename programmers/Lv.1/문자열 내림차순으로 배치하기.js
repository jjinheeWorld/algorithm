function solution(s) {
  var answer = "";

  answer = s.split("").sort().reverse().join("");

  return answer;
}

/* 
split()   : 배열로 문자열 분할, String.split(Separator, limit)
sort()    : 배열 정렬, Array.sort()
reverse() : 배열 반전, Array.reverse()
join()    : 배열 값을 문자열로 변환, Array.join(separator)
*/
