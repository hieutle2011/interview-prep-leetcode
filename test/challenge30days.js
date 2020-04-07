const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('30 days leetcoding challenge @30day', () => {

  describe('#Day 06: groupAnagrams', () => {
    const groupAnagrams = require('../challenge30days/day_06')

    it('Should return correct for tc1', () => {
      const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
      const output = [
        ["eat", "tea", "ate"],
        ["tan", "nat"],
        ["bat"]
      ]

      const result = groupAnagrams(input)

      expect(result).to.eql(output)
    })

    it('Should return correct for tc2', () => {
      const input = [""]
      const output = [[""]]

      const result = groupAnagrams(input)

      expect(result).to.eql(output)
    })

    it('Should return correct for tc3', () => {
      const input = ["", ""]
      const output = [["", ""]]

      const result = groupAnagrams(input)

      expect(result).to.eql(output)
    })

    it('Should return correct for tc4', () => {
      const input = ["dad","day", "day", "boo", "bob"]
      const output = [["dad"], ["day", "day"], ["boo"], ["bob"]]

      const result = groupAnagrams(input)

      expect(result).to.eql(output)
    })
  })

  describe('#Day 04: moveZeroes', () => {
    const moveZeroes = require('../challenge30days/day_04')

    it('Should return correct for tc1', () => {
      const input = [0, 1, 0, 3, 12]
      const output = [1, 3, 12, 0, 0]

      moveZeroes(input) // modify input in-place

      expect(input).to.eql(output)
    })
  })

  describe('#Day 03: maxSubArray', () => {
    const maxSubArray = require('../challenge30days/day_03')

    it('Should return correct for tc3 [-2, -1]', () => {
      const input = [-2, -1]
      expect(maxSubArray(input)).to.equal(-1)
    })

    it('Should return correct for tc3 [-2, 1]', () => {
      const input = [-2, 1]
      expect(maxSubArray(input)).to.equal(1)
    })

    it('Should return correct for tc2 [1]', () => {
      const input = [1]
      expect(maxSubArray(input)).to.equal(1)
    })

    it('Should return 6 for tc1', () => {
      const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
      expect(maxSubArray(input)).to.equal(6)
    })
  })

  describe('#Day 02: Happy Number', () => {
    const isHappy = require('../challenge30days/day_02')

    it('Should be true with input 19', () => {
      expect(isHappy(19)).to.equal(true)
    })

    it('Should be true with input 7', () => {
      expect(isHappy(7)).to.equal(true)
    })

    it('Should be false with input 78', () => {
      expect(isHappy(78)).to.equal(false)
    })
  })

})