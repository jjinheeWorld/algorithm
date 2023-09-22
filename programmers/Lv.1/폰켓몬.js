function solution(nums) {
  let max = Math.floor(nums.length / 2);
  let type = new Set(nums);

  return max >= type.size ? type.size : max;
}
