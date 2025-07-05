function getDistance(handPos, pos) {
    return Math.abs(handPos[0] - pos[0]) + Math.abs(handPos[1] - pos[1]);
}

function solution(numbers, hand) {
    const position = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      "*": [3, 0], 0: [3, 1], "#": [3, 2]
    };
    let leftPos = position["*"];
    let rightPos = position["#"];
    let answer = "";
    for (let num of numbers) {
        const pos = position[num];
        if ([1, 4, 7].includes(num)) {
            leftPos = pos;
            answer += "L";
        } else if ([3, 6, 9].includes(num)) {
            rightPos = pos;
            answer += "R";
        } else {
            const leftDist = getDistance(leftPos, pos);
            const rightDist = getDistance(rightPos, pos);
            if (leftDist < rightDist) {
                leftPos = pos;
                answer += "L";
            } else if (leftDist > rightDist) {
                rightPos = pos;
                answer += "R";
            } else {
                if (hand === "left") {
                    leftPos = pos;
                    answer += "L";
                } else {
                    rightPos = pos;
                    answer += "R";
                }
            }
        }
    }
    return answer;
}