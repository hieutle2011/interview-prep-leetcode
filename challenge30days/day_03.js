/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 0) throw Error('Empty array input is invalid')

    let maxSoFar = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let subMax = nums[i]

        for (let k = i + 1; k < nums.length; k++) {
            if (maxSoFar < subMax) maxSoFar = subMax
            subMax += nums[k]
        }

        if (maxSoFar < subMax) maxSoFar = subMax
    }
    return maxSoFar
};

module.exports = maxSubArray