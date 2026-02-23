function solution(s){
    let count = 0;
    s = s.toLowerCase();
    
    for (const x of s) {
        if (x === "p") count++;
        else if (x === "y") count--;
    }
    
    return count === 0;
}