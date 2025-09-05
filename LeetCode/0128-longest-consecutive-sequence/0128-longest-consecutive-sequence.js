/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    const sH = new Set(nums);
    let longest = 0;
    for (let num of sH) {
        let count = 0;
        if (!sH.has(num - 1)) {
            while (sH.has(num)) {
                count++;
                num++;
            }
        }
        longest = Math.max(longest, count);
    }
    return longest;
};