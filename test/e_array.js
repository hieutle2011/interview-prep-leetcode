const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Array (Easy Collection)', () => {
  describe('#Plus One', () => {
    const plusOne = require('../array/e_plusOne')

    it('Should be correct array with leading zeros', () => {
      const input = [0, 0, 1, 2, 3]
      const exp = [1, 2, 4]

      const result = plusOne(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct array with normal numbers', () => {
      const input = [4, 3, 2, 1]
      const exp = [4, 3, 2, 2]

      const result = plusOne(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct array with big numbers', () => {
      const input = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
      const exp = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]

      const result = plusOne(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct array with all 9s like [9,9]', () => {
      const input = [9, 9]
      const exp = [1, 0, 0]

      const result = plusOne(input)
      expect(result).to.eql(exp)
    })

    it('Should be correct array with last numbers are/is 9 like [1,9]', () => {
      const input = [1, 9]
      const exp = [2, 0]

      const result = plusOne(input)
      expect(result).to.eql(exp)
    })
  })

  describe('#Intersection of Two Arrays II', () => {
    const { intersect } = require('../array/e_intersectArray')

    it('Should be correct array tc1', () => {
      const nums1 = [1, 2, 2, 1]
      const nums2 = [2, 2]
      const exp = [2, 2]

      const result = intersect(nums1, nums2)
      expect(result.length).to.equal(exp.length)
      expect(result).to.eql(exp)
    })

    it('Should be correct array tc2', () => {
      const nums1 = [4, 9, 5]
      const nums2 = [9, 4, 9, 8, 4]
      const exp = [9, 4]

      const result = intersect(nums1, nums2)
      expect(result.length).to.equal(exp.length)
      expect(result).to.eql(exp)
    })

    it('Should be empty array tc3', () => {
      const nums1 = [4, 9, 5]
      const nums2 = [1, 2, 3]
      const exp = []

      const result = intersect(nums1, nums2)
      expect(result.length).to.equal(exp.length)
      expect(result).to.eql(exp)
    })

    it('Should be one item in array tc4', () => {
      const nums1 = [1, 2, 2, 1]
      const nums2 = [2]
      const exp = [2]

      const result = intersect(nums1, nums2)
      expect(result.length).to.equal(exp.length)
      expect(result).to.eql(exp)
    })

    it('Should be one item in array tc5', () => {
      const nums1 = [3, 1, 2]
      const nums2 = [1, 1]
      const exp = [1]

      const result = intersect(nums1, nums2)
      expect(result.length).to.equal(exp.length)
      expect(result).to.eql(exp)
    })
  })

  describe('#containsDuplicate', () => {
    const containsDuplicate = require('../array/e_containDup')

    it('Should be true if found', () => {
      const input = [1, 2, 3, 1]
      const result = containsDuplicate.hashTable(input)
      expect(result).to.equal(true)
    })

    it('Should be false if did not find', () => {
      const input = [1, 2, 3, 4]
      const result = containsDuplicate.hashTable(input)
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
      let nums = [2, 2, 1]
      const output = 1

      const result = singleNumber.hashTable(nums)

      expect(result).to.equal(output)
    })

    it('Should be correct with test 2', () => {
      let nums = [4, 1, 2, 1, 2]
      const output = 4

      const result = singleNumber.hashTable(nums)

      expect(result).to.equal(output)
    })
  })
})