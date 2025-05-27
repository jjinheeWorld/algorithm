function getGCD(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }    
    return a;
}

function getLCM(a, b) {
   return  a * b / getGCD(a, b);
}

function solution(n, m) {
    const answer = [];
    answer.push(getGCD(n, m));
    answer.push(getLCM(n, m));
    return answer;
}