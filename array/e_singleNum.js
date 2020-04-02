// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var sortList = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    while (sorted[0] === sorted[1]) {
        sorted.shift(sorted[0])
        sorted.shift(sorted[1])
    }
    return sorted[0]
};

// Improve searching by hash map
var hashTable = function (nums) {
    const hash_table = {}
    for (let i = 0; i < nums.length; i++) {
        const curKey = nums[i].toString()
        const hashKeys = Object.keys(hash_table)
        if (hashKeys.includes(curKey)) hash_table[curKey] += 1
        else hash_table[nums[i]] = 1
    }

    const keys = Object.keys(hash_table)
    for (let i = 0; i < keys.length; i++) {
        if (hash_table[keys[i]] === 1) return parseInt(keys[i])
    }

}

module.exports = {
    sortList,
    hashTable,
}