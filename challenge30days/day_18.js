/**
 * 
 * Given a m x n grid filled with non-negative numbers, find a path 
 * from top left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0

    // initialize dp array beforehand improve performance than push every loop
    const dp = new Array(grid.length).fill(new Array(grid[0].length).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // starting point from grid[0][0]
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            }
            // if row zero
            else if (i === 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            }
            // if col zero
            else if (j === 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            }
            // inside the grid
            else {
                dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    return dp[dp.length - 1][dp[0].length - 1]
};

module.exports = minPathSum