function solution(a, b) {
    const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(`2016-${a}-${b}`);
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
}