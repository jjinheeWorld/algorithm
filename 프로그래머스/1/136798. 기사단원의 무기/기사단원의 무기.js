function solution(number, limit, power) {
    const answer = [];
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count += (i / j === j) ? 1 : 2;
            }
        }
        if (count > limit) answer.push(power);
        else answer.push(count);
    }
    return answer.reduce((a, b) => a + b, 0);
}