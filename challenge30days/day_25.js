/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length
  let len2 = text2.length

  // SOLUTION 1 ================================================
  // if (len1 === 0 || len2 === 0) return 0
  // if (text1[len1 - 1] === text2[len2 - 1]) return 1 + longestCommonSubsequence(text1.substring(0, len1 - 1), text2.substring(0, len2 - 1))
  // if (text1[len1 - 1] !== text2[len2 - 1]) return Math.max(longestCommonSubsequence(text1.substring(0, len1 - 1), text2), longestCommonSubsequence(text1, text2.substring(0, len2 - 1)))


  // SOLUTION 2 ================================================
  let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0))

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      // if current character of X and Y matches
      if (text1[i - 1] == text2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;

      // else if current character of X and Y don't match
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[len1][len2]

};

module.exports = longestCommonSubsequence