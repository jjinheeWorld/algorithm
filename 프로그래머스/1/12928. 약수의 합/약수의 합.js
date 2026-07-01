function solution(n) {
    let sum = 0;
    
    if (n === 0) return sum;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }
    
    return sum;
}