/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let arr = nums.map((value, index) => [value, index]);
    arr.sort((a, b) => a[0] - b[0]);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left][0] + arr[right][0];
        if (sum === target) return [arr[left][1], arr[right][1]];
        else if (sum > target) right--;
        else left++;
    }
};