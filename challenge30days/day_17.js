/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) return 0
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') count += 1
            changeLandToWater(grid, i, j)
        }
    }
    return count
};

var changeLandToWater = function changeLandToWater(grid, i, j) {
    // 1) i < 0
    // 2) i > grid.length (row)
    // 3) j <0
    // 4) j > grid[0].length (col)
    // 5) grid[i][j] === '1'
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return
    // change land
    grid[i][j] = '0'
    changeLandToWater(grid, i - 1, j)
    changeLandToWater(grid, i + 1, j)
    changeLandToWater(grid, i, j - 1)
    changeLandToWater(grid, i, j + 1)
}

module.exports = numIslands