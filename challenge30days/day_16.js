/*  Given a string containing only three types of characters: '(', ')' and '*', 
 *  write a function to check whether this string is valid. We define the validity of a string by these rules:
 *  
 *  Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 *  Any right parenthesis ')' must have a corresponding left parenthesis '('.
 *  Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 *  '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 *  An empty string is also valid.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {

  const OPEN = '('
  const CLOSE = ')'
  const STAR = '*'

  // edge cases
  if (s === '') return true
  if (s.length == 1) {
    if (s === STAR) return true
    return false
  }
  if (s[0] === CLOSE) return false

  // running from left
  let leftBalance = 0
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === OPEN) || (s[i] === STAR)) leftBalance++
    else leftBalance--

    if (leftBalance < 0) return false
  }

  // running from right
  let rightBalance = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] === CLOSE) || (s[i] === STAR)) rightBalance++
    else rightBalance--

    if (rightBalance < 0) return false
  }

  return true
};

module.exports = checkValidString