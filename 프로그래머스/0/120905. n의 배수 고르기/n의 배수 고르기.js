function solution(n, numlist) {
    const answer = [];
    
    for (const num of numlist) {
        if (num % n === 0) answer.push(num);
    }
    
    return answer;
}