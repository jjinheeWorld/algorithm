function solution(nums) {
    const pickNumber = Math.floor(nums.length / 2);
    const types = new Set(nums);
    return types.size > pickNumber ? pickNumber : types.size;
}