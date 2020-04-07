/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // making a hash table
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let y = target - num

        // We can check here, without to run through all num of nums
        if ((y in map) && (i != map[y])) return [map[y], i]
        map[num] = i
    }

    // else if not found a pair
    return []
};

module.exports = twoSum