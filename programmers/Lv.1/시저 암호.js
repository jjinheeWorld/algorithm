// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.

function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      // 대문자 처리
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((char.charCodeAt() - "A".charCodeAt() + n) % 26) + "A".charCodeAt()
        );
      }
      // 소문자 처리
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((char.charCodeAt() - "a".charCodeAt() + n) % 26) + "a".charCodeAt()
        );
      }
      // 공백 처리
      return char;
    })
    .join("");
}
