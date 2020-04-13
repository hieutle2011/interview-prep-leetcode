/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length == 1) return stones[0]

    let sorted = stones.sort((a, b) => a - b)

    while (sorted.length > 1) {
        let a0 = sorted.pop()
        let a1 = sorted.pop()

        let sub = a0 - a1
        sorted.push(Math.abs(sub))
        sorted.sort((a, b) => a - b)
    }


    return sorted[0]
};

module.exports = lastStoneWeight