function solution(arr, divisor) {
    const answer = [];
    
    for (const number of arr) {
        if (number % divisor === 0) answer.push(number);
    }
    
    answer.sort((a, b) => a - b);
    
    return answer.length > 0 ? answer : [-1];
}