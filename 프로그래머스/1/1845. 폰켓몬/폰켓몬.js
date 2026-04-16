function solution(nums) {
    const types = new Set(nums);
    const max = nums.length / 2;
    return max < types.size ? max : types.size;
}