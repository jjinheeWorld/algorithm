function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });
    
    let flag = days[0];
    let count = 0;
    
    for (const day of days) {
        if (flag >= day) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            flag = day;
        }
    }
    
    answer.push(count);
    return answer;
}