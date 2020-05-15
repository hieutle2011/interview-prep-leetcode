const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('String (Easy Collection)', () => {

  describe('#reverseString', () => {
    const reverseString = require('../string/e_reverseString')
    it('Should be correct array tc1', () => {
      const s = ["h","e","l","l","o"]
      const target = ["o","l","l","e","h"]

      reverseString(s)
      expect(s).to.eql(target)
    })
  })
})