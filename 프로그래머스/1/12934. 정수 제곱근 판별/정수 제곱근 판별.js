function solution(n) {
    let num = Math.sqrt(n);
    if (num % 1 !== 0) return -1;
    return Math.pow(num + 1, 2);
}