/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    for (const x of s) {
        if (x === "(") stack.push(")");
        else if (x === "{") stack.push("}");
        else if (x === "[") stack.push("]");
        else if (stack.length && x === stack[stack.length - 1]) stack.pop();
        else return false;
    }
    if (stack.length) return false;
    return true;
};