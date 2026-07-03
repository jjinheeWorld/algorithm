function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });
    
    let current = days[0];
    let count = 0;
    
    for (const day of days) {
        if (current >= day) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            current = day;
        }
    }
    
    answer.push(count);
    return answer;
}