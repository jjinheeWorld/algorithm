function solution(s) {
  let nums = Array.from({0: 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine' , length : 10});
  for (let i = 0; i < nums.length; i++) {
      if (s.includes(nums[i])) s = s.replaceAll(nums[i], i);
  }
  return parseInt(s);
}