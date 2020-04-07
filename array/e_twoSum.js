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
        map[num] = i
    }

    // finding a pair
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        let y = target - x

        // if number y in map, and
        // index of num y is not same as current index i
        let index_y = map[y]
        if ((y in map) && (i != index_y)) return [i, index_y]
    }
    // else if not found a pair
    return []
};

module.exports = twoSum