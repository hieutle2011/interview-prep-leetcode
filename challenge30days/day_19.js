/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length
  let notFound = -1
  if (len === 0) return notFound

  if (nums[len - 1] > nums[0] && nums[0] > target) return notFound;

  for (let i = 0; i < len; i++) {
    if (nums[i] === target) return i
  }

  return notFound
};

module.exports = search