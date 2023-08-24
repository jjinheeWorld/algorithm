function solution(phone_number) {
    let len = phone_number.length - 4;
    let answer = '*'.repeat(len)
    return answer + phone_number.substring(len);
}