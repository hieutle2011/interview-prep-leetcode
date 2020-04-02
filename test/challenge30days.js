const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('30 days leetcoding challenge @w30day', () => {

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