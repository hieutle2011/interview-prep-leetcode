// Given an array of integers, find if the array contains any duplicates.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const sorted = nums.sort((a, b) => a - b)

  const findDup = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) return true
    }
    return false
  }

  return findDup(sorted)
};

module.exports = containsDuplicate