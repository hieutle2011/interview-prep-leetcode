/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {}

    for (let i = 0; i < strs.length; i++) {
        let curStr = strs[i]
        let key = curStr.split('').sort().join('')
        map[key] ? map[key].push(curStr) : map[key] = [curStr]
    }

    return Object.values(map)
};

module.exports = groupAnagrams