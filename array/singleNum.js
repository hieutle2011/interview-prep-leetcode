// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    while (sorted[0] === sorted[1]) {
        sorted.shift(sorted[0])
        sorted.shift(sorted[1])
    } 
    return sorted[0]
};

module.exports = singleNumber