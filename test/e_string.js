const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('String (Easy Collection)', () => {

  describe('#reverseInteger', () => {
    const reverse = require('../string/e_reverseInteger')
    it('Should be correct array tc1', () => {
      const s = -123
      const target = -321

      let res = reverse(s)
      expect(res).to.eql(target)
    })

    it('Should be correct array tc2', () => {
      const s = 120
      const target = 21

      let res = reverse(s)
      expect(res).to.eql(target)
    })
  })

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