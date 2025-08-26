function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    let flag = days[0];
    let count = 0;
    for (let i = 0; i < days.length; i++) {
        if (flag >= days[i]) count++;
        else {
            answer.push(count);
            count = 1;
            flag = days[i];
        }
    }
    answer.push(count);
    return answer;
}