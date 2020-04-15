/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
    const countSteps = (shift) => {
        let steps = 0
        for (let i = 0; i < shift.length; i++) {
            let direction = shift[i][0]
            let amount = shift[i][1]
            steps = direction == 0 ? steps - amount : steps + amount
        }
        return steps
    }

    const move = (str, steps) => {
        let len = str.length
        let reduced_steps = steps % len

        if (reduced_steps == 0) return str
        if (reduced_steps < 0) {
            // left
            part_0 = str.substr(0, Math.abs(reduced_steps))
            part_1 = str.substr(Math.abs(reduced_steps))
        }
        if (reduced_steps > 0) {
            //right
            part_0 = str.substr(0, len - reduced_steps)
            part_1 = str.substr(len - reduced_steps, reduced_steps)
        }
        return part_1 + part_0
    }

    let steps = countSteps(shift)
    return move(s, steps)
};

module.exports = stringShift