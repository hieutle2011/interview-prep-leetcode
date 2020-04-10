// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    const backspace = '#'
    const sArr = []
    const tArr = []
    const lenMax = S.length >= T.length ? S.length : T.length

    for (let i = 0; i < lenMax; i++) {
        let sChar = S[i]
        if (sChar && sChar != backspace) sArr.push(sChar)
        if (sChar && sChar == backspace) sArr.pop()

        let tChar = T[i]
        if (tChar && tChar != backspace) tArr.push(tChar)
        if (tChar && tChar == backspace) tArr.pop()
    }

    const sStr = ''.concat(...sArr)
    const tStr = ''.concat(...tArr)

    return sStr === tStr
};

module.exports = backspaceCompare