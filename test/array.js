const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Array', () => {
  const containsDuplicate = require('../array/containDup')

  describe('#containsDuplicate', () => {
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

})