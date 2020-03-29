const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Array', () => {

  describe('#containsDuplicate', () => {
    const containsDuplicate = require('../array/containDup')

    it('Should be true if found', () => {
      const input = [1, 2, 3, 1]
      const result = containsDuplicate(input)
      expect(result).to.equal(true)
    })

    it('Should be false if did not find', () => {
      const input = [1, 2, 3, 4]
      const result = containsDuplicate(input)
      expect(result).to.equal(false)
    })
  })


  describe('#rotate', () => {
    const rotate = require('../array/rotate')

    it('Should be correct with all positive numbers', () => {
      let nums = [1, 2, 3, 4, 5, 6, 7]
      const k = 3
      const output = [5, 6, 7, 1, 2, 3, 4]

      rotate.loop(nums, k)

      expect(nums).to.eql(output)
    })

    it('Should be correct with negative and positive numbers', () => {
      let nums = [-1, -100, 3, 99]
      const k = 2
      const output = [3, 99, -1, -100]

      rotate.loop(nums, k)

      expect(nums).to.eql(output)
    })
  })
})