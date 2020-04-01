// Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which 
// gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// TODO: Improve search speed using hash map

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const TARGET = 0
    const result = []

    // if nums includes all negative or positive, return []
    if ((Math.max(nums) <= 0) || (Math.min(nums) >= 0)) return result

    const sorted = nums.sort((a, b) => a - b)

    let last_a = null

    const len = sorted.length

    // outer most loop
    for (let i = 0; i < len; i++) {
        // reset for each outer loop
        let last_b = null

        const a = sorted[i]
        if (a > 0) return result

        if (a != last_a) {
            // reduce to the prolem of doubleSum
            const doubleSum = TARGET - a

            // intermediate loop
            for (let j = i + 1; j < len; j++) {
                // reset for each inner loop
                let last_c = null

                const b = sorted[j]
                if (b != last_b) {

                    // inner most loop
                    for (let k = j + 1; k < len; k++) {
                        const tmp = []

                        const c = sorted[k]

                        if (c != last_c) {
                            // console.log('==== All', a, b, c)
                            if (b + c === doubleSum) {
                                // console.log('ok====', a, b, c)

                                // make tmp list
                                tmp.push(a)
                                tmp.push(b)
                                tmp.push(c)

                                last_a = a
                                last_b = b
                                last_c = c

                                result.push(tmp)
                            }
                        }

                    }

                }
            }
        }

    }
    return result
};

module.exports = threeSum

