/**
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//   let count = 0
//   let map = {}

//   for (let i = 0; i < nums.length; i++) {

//     for (let j = i; j < nums.length; j++) {
//       let cur_sum = 0
//       if (i == j) {
//         if (!map[i]) map[i] = map[i - 1] ? nums[i] + map[i - 1] : nums[i]
//         if (nums[i] == k) count += 1

//       } else {
//         if (!map[j]) map[j] = map[j - 1] + nums[j]
//         cur_sum = map[i - 1] ? map[j] - map[i - 1] : map[j]

//         if (cur_sum == k) {
//           count += 1
//           cur_sum = 0
//         }
//       }
//     }
//   }
//   return count
// };

// better solution
var subarraySum = function(nums, k) {
  let map = {0: 1};
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map[sum - k]) {
          count += map[sum - k];
      }
      map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  
  return count;
};

module.exports = subarraySum