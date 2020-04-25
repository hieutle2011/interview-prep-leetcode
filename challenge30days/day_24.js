/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastGoodPos = nums.length -1
  
  for (let i= nums.length-1; i>=0; i--) {
    if (i + nums[i] >= lastGoodPos) { // that means index i can reach last good position
      lastGoodPos = i
    }
  }
  
  return lastGoodPos === 0 // if index 0 is good ?
};

module.exports = canJump