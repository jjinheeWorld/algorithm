function solution(s) {
  const answer = Array.from({length : s.length}, () => -1);
  const lastIndexMap = {}; // 각 글자의 마지막 인덱스를 저장하는 객체
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (lastIndexMap[char] !== undefined) {
          // 해당 글자가 이전에 나왔던 경우
          answer[i] = i - lastIndexMap[char]; // 현재 인덱스와 마지막 인덱스의 차이를 저장
      }
      lastIndexMap[char] = i; // 현재 글자의 인덱스를 업데이트
  }
  return answer;
}