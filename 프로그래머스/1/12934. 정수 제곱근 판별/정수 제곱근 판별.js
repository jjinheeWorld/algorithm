function solution(n) {
    const num = Math.sqrt(n);
    if (num % 1 === 0) return (num + 1) ** 2;
    return -1;
}