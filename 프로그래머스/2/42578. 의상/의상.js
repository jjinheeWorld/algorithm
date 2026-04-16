function solution(clothes) {
    const types = new Map();
    
    for (const [value, type] of clothes) {
        if (types.has(type)) types.set(type, types.get(type) + 1);
        else types.set(type, 1);
    }
    
    let answer = 1;
    
    for (const count of types.values()) {
        answer *= count + 1;
    }
    
    return answer - 1;
}