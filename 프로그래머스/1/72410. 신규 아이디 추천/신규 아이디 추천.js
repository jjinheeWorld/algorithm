function solution(new_id) {
    // 1. 소문자
    let s = new_id.toLowerCase();

    // 2. (소문자, 숫자, -, _, .)
    s = s.replace(/[^a-z0-9-_.]/g, "");

    // 3. 마침표 2번 이상 -> 1개로
    s = s.replace(/\.+/g, ".");

    // 4. 처음/끝 마침표 제거
    s = s.replace(/^\.|\.$/g, "");

    // 5. 빈 문자열이면 "a"
    if (s === "") s = "a";

    // 6. 길이 16 이상이면 15자로 자르고, 끝 마침표 제거
    if (s.length >= 16) s = s.slice(0, 15).replace(/\.$/, "");

    // 7. 길이 2 이하면 마지막 문자 반복해서 길이 3 만들기
    while (s.length < 3) {
        s += s[s.length - 1];
    }

    return s;
}