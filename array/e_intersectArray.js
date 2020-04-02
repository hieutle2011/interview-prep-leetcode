/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

  // Boost speed by using map table for bigger array
  if (nums2.length > nums1.length) intersect(nums2, nums1)

  const map = {}
  nums1.forEach(num => map[num] = (map[num] || 0) + 1);

  const result = []
  for (let num of nums2) {
    if (map[num] && map[num] > 0) {
      result.push(num)
      map[num]--
    }
  }

  return result
};

module.exports = {
  intersect,
}