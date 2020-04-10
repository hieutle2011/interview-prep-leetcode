const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('30 days leetcoding challenge @30day', () => {

  describe('#Day 10: Min Stack @wip', () => {
    const MinStack = require('../challenge30days/day_10')

    it('Should return correct MinStack instance', () => {
      const minStack = new MinStack();
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);
      expect(minStack.getMin()).to.equal(-3)
      minStack.pop();
      expect(minStack.top()).to.equal(0)
      expect(minStack.getMin()).to.equal(-2)
    })
  })

  describe('#Day 09: backspaceCompare', () => {
    const backspaceCompare = require('../challenge30days/day_09')

    it('Should return "true" for tc1', () => {
      const S = "ab#c"
      const T = "ad#c"
      const result = backspaceCompare(S, T)
      expect(result).to.equal(true)
    })

    it('Should return "true" for tc2', () => {
      const S = "ab##"
      const T = "c#d#"
      const result = backspaceCompare(S, T)
      expect(result).to.equal(true)
    })

    it('Should return "true" for tc3', () => {
      const S = "a##c"
      const T = "#a#c#a#c"
      const result = backspaceCompare(S, T)
      expect(result).to.equal(true)
    })

    it('Should return "false" for tc4', () => {
      const S = "a#c"
      const T = "b"
      const result = backspaceCompare(S, T)
      expect(result).to.equal(false)
    })
  })

  describe('#Day 07: countElements', () => {
    const countElements = require('../challenge30days/day_07')

    it('Should return correct for tc1', () => {
      const input = [1, 2, 3]
      const output = 2
      const result = countElements(input)
      expect(result).to.eql(output)
    })

    it('Should return correct for tc2', () => {
      const input = [1, 1, 3, 3, 5, 5, 7, 7]
      const output = 0
      const result = countElements(input)
      expect(result).to.eql(output)
    })

    it('Should return correct for tc3', () => {
      const input = [1, 3, 2, 3, 5, 0]
      const output = 3
      const result = countElements(input)
      expect(result).to.eql(output)
    })

    it('Should return correct for tc4', () => {
      const input = [1, 1, 2, 2]
      const output = 2
      const result = countElements(input)
      expect(result).to.eql(output)
    })
  })

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
      const input = ["dad", "day", "day", "boo", "bob"]
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