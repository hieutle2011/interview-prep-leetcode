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
        num = 0
        arr.forEach((item) => num += parseInt(item) ** 2)
    }
    return true
};

module.exports = isHappy