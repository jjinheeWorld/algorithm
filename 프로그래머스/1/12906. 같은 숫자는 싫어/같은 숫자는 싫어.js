function solution(arr) {
    const stack = [];
    
    for (let num of arr) {
        if (num !== stack[stack.length - 1]) stack.push(num);
    }
    
    return stack;
}