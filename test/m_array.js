const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Array (Medium Collection)', () => {

  describe('#threeSum @wip', () => {
    const threeSum = require('../array/m_threeSum')

    it('Should be correct with first test', () => {
      const input = [-1, 0, 1, 2, -1, -4]
      let exp = [
        [-1, -1, 2],
        [-1, 0, 1]
      ]
      const result = threeSum(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct with input [0,0,0]', () => {
      const input = [0, 0, 0]
      const exp = [[0, 0, 0]]
      const result = threeSum(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct with input [3,0,-2,-1,1,2]', () => {
      const input = [3, 0, -2, -1, 1, 2]
      const exp = [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]
      const result = threeSum(input)
      expect(result).to.eql(exp)
    })
  })

})
