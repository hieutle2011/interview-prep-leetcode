/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let num = n
    const trace = []

    while (num !== 1) {
        // check if num is repeated, return false
        if (trace.includes(num)) return false
        trace.push(num)
        let arr = num.toString().split('')
        // calculate new num
        const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue) ** 2
        const resetValue = 0
        num = arr.reduce(reducer, resetValue)
    }
    return true
};

module.exports = isHappy