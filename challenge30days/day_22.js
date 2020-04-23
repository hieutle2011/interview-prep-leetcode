/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  while (m < n) n = n & (n-1) // reduce n by removing the rightest '1' bit until n=m;
  return n
};

module.exports = rangeBitwiseAnd