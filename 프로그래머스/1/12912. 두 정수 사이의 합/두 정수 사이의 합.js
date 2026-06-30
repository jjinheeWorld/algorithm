function solution(a, b) {
    let sum = 0;
    
    if (a > b) {
        let c = b;
        b = a;
        a = c;
    }
    
    while (a <= b) {
        sum += a;
        a++;
    }
    
    return sum;
}