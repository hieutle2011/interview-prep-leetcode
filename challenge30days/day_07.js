/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    const hashTable = {}
    for (let num of arr) hashTable[num] = hashTable[num] ? hashTable[num] += 1 : 1

    let count = 0
    Object.keys(hashTable).forEach((num) => {
        if ((parseInt(num) + 1) in hashTable) count += hashTable[num]
    })

    return count
};

module.exports = countElements