function solution(nums) {
    const monsters = new Set(nums);
    const max = (nums.length / 2);
    return monsters.size > max ? max : monsters.size;
}