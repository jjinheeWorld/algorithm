function solution(s){
    const stack = [];
    
    for (const x of s) {
        if (x === "(") stack.push(x);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    
    if (stack.length > 0) return false;
    return true;
}