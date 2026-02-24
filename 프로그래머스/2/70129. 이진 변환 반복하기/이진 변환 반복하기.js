function solution(s) {
    let count = 0;
    let removedZeros = 0;
    
    while (s !== "1") {
        let c = s.length;
        s = s.replaceAll("0", "");
        removedZeros += c - s.length;
        s = s.length.toString(2);
        count++;
    }
    
    return [count, removedZeros];
}