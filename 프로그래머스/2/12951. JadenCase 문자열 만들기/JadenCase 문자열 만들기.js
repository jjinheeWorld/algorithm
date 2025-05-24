function solution(s) {
    const strArr = s.toLowerCase().split(" ");
    const answer = strArr.map(word => {
        if (/^[a-z]/.test(word)) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    });
    return answer.join(" ");
}