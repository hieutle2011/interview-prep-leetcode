const { describe, it } = require('mocha')
const expect = require('chai').expect
const TreeNode = require('../tree')

describe('Tree (Easy Collection) @wip', () => {
    // Initialize a tree
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)


    describe('#maxDepth', () => {
        const maxDepth = require('../tree/e_maxDepth')
        it('Should be correct array tc1', () => {
            const exp = 3

            const result = maxDepth(root)
            expect(result).to.eql(exp)
        })
    })
})