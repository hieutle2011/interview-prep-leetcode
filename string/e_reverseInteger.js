let reverseString = require('./e_reverseString')

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString()

  if (str.startsWith('-')) {
    // handler negative
    let [sign, ...num] = str.split('')
    reverseString(num)
    num = [sign, ...num]
    let newStr = num.join('')
    let result =  parseInt(newStr)
    return (result < Math.pow(2, 31) -1 && result > - Math.pow(2, 31)) ? result : 0

  } else {
    let newArr = str.split('')
    reverseString(newArr)
    let newStr = newArr.join('')
    let result =  parseInt(newStr)
    return (result < Math.pow(2, 31) -1 && result > - Math.pow(2, 31)) ? result : 0
  }
};

module.exports = reverse