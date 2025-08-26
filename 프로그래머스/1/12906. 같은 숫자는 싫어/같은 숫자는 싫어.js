function solution(arr) {
    const stack = [];
    for (let v of arr) {
        if (v !== stack[stack.length - 1]) stack.push(v);
    }
    return stack;
}