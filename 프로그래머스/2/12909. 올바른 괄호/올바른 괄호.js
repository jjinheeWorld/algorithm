function solution(s){
    const stack = [];
    
    for (const target of s) {
        if (stack.length > 0 && target === ")") stack.pop();
        else stack.push(target);
    }
    
    return stack.length > 0 ? false : true;
}