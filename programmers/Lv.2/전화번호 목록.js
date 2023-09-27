function solution(phone_book) {
  let answer = true;
  phone_book.sort(); // 사전순으로 정렬
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length))
      return false;
  }
  return answer;
}
