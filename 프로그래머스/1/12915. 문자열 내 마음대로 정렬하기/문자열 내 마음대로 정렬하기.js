function solution(strings, n) {
    return strings.sort((a, b) => {
        // n번째 문자 비교
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        
        // n번째 문자가 같으면 사전순
        return a.localeCompare(b);
    });
}