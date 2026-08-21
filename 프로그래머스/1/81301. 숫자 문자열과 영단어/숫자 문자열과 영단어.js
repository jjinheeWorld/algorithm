function solution(s) {
    const numbers = new Map([
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
    ]);
    
    let result = "";
    let temp = "";
    
    for (const x of s) {
        if (!isNaN(x)) result += x;
        else {
            temp += x;
            if (numbers.has(temp)) {
                result += numbers.get(temp);
                temp = "";
            }
        }
    }
    
    return Number(result);
}