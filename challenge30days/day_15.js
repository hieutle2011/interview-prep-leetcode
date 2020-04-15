/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const product = (arr) => {
    if (arr.length == 1) return arr[0]
    if (arr.includes(0)) return 0
    return arr.reduce((prev, curr) => prev * curr, 1)
  }

  let map = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
    // reduce time by using val in map
    if (nums[i] in map) result.push(map[nums[i]])
    else {
      // create a sub array nums without nums[i]
      let sub = [...nums.slice(0, i), ...nums.slice(i + 1)]
      let val = product(sub)
      result.push(val)
      map[nums[i]] = val
    }
  }

  return result
};

module.exports = productExceptSelf