const { describe, it } = require('mocha')
const expect = require('chai').expect
const TreeNode = require('../tree')

describe('Tree (Easy Collection) @wip', () => {

    describe('#maxDepth', () => {
        // Initialize a tree
        const root = new TreeNode(3)
        root.left = new TreeNode(9)
        root.right = new TreeNode(20)
        root.right.left = new TreeNode(15)
        root.right.right = new TreeNode(7)
        //      3
        //     / \
        //    9  20
        //  /  \
        // 15   7
        const maxDepth = require('../tree/e_maxDepth')
        it('Should be correct array tc1', () => {
            expect(maxDepth(root)).to.eql(3)
        })
    })
})