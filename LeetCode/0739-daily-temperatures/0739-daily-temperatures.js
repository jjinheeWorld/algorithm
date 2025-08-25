/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const answer = Array(temperatures.length).fill(0);
    const stack = [];
    temperatures.forEach((temp, day) => {
        while (stack.length && stack[stack.length - 1].temp < temp) {
            const prev = stack.pop();
            answer[prev.day] = day - prev.day;
        }
        stack.push({temp, day});
    });
    return answer;
};