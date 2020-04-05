/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  // trim leading zeros
  let zeros = 0
  for (let digit of digits) {
    if (digit == 0) zeros++
    else break
  }
  digits.splice(0, zeros)

  // if empty array, return [1]
  let len = digits.length
  if (len == 0) return [1]

  // if last number is not 9, just add 1 to it
  let last = len - 1
  if (digits[last] != 9) {
    digits[last] = digits[last] + 1
    return digits
  }

  // if last numbers are 9s
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i == 0) return [1].concat(digits)
    }
    else {
      digits[i] = digits[i] + 1
      return digits
    }
  };

}

module.exports = plusOne