function solution(n) {
    return String(n).split("").reduce((acc, v) => acc + Number(v), 0);
}