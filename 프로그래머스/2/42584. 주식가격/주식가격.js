function solution(prices) {
    const n = prices.length;
    const answer = Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const k = stack.pop();
            answer[k] = i - k;
        }
        stack.push(i);
    }
    while (stack.length) {
        const k = stack.pop();
        answer[k] = n - 1 - k;
    }
    return answer;
}