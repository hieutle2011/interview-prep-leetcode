const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Array (Easy Collection)', () => {

  describe('#containsDuplicate', () => {
    const containsDuplicate = require('../array/e_containDup')

    it('Should be true if found', () => {
      const input = [1, 2, 3, 1]
      const result = containsDuplicate.mapTable(input)
      expect(result).to.equal(true)
    })

    it('Should be false if did not find', () => {
      const input = [1, 2, 3, 4]
      const result = containsDuplicate.mapTable(input)
      expect(result).to.equal(false)
    })
  })


  describe('#rotate', () => {
    const rotate = require('../array/e_rotate')

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


  describe('#singleNumber', () => {
    const singleNumber = require('../array/e_singleNum')

    it('Should be correct with test 1', () => {
      let nums = [2,2,1]
      const output = 1

      const result = singleNumber.hashTable(nums)

      expect(result).to.equal(output)
    })

    it('Should be correct with test 2', () => {
      let nums = [4,1,2,1,2]
      const output = 4

      const result = singleNumber.hashTable(nums)

      expect(result).to.equal(output)
    })
  })
})