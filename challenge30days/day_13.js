// Given a binary array, find the maximum length of a 
// contiguous subarray with equal number of 0 and 1. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if ((!nums.includes(0)) || (!nums.includes(1))) return 0
  if (nums.length <= 1) return 0

  let map = {}
  let max = 0
  let cnt = 0

  map[0] = -1 // current sum, index when starting

  for (let i = 0; i < nums.length; i++) {
    cnt += nums[i] == 1 ? 1 : -1
    if (cnt in map) max = Math.max(max, i - map[cnt])
    else map[cnt] = i
  }

  return max
};

module.exports = findMaxLength