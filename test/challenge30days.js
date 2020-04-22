const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('30 days leetcoding challenge @30day', () => {

  describe('#Day 20: Search in Rotated Sorted Array @wip', () => {
    const bstFromPreorder = require('../challenge30days/day_20')
    const TreeNode = require('../tree')

    it('Should return correct for tc1', () => {
      const preorder = [8,5,1,7,10,12]

      const root = new TreeNode(8)
      root.left = new TreeNode(5)
      root.right = new TreeNode(10)
      root.left.left = new TreeNode(1)
      root.left.right = new TreeNode(7)
      // root.right.left = new TreeNode(1)
      root.right.right = new TreeNode(12)
      
      const tree = bstFromPreorder(preorder)
      expect(tree).to.eql(root)
    })
  })

  describe('#Day 19: Search in Rotated Sorted Array', () => {
    const search = require('../challenge30days/day_19')

    it('Should return correct for tc1', () => {
      const nums = [4, 5, 6, 7, 0, 1, 2]
      const target = 0
      expect(search(nums, target)).to.equal(4)
    })

    it('Should return correct for tc2', () => {
      const nums = [4, 5, 6, 7, 0, 1, 2]
      const target = 3
      expect(search(nums, target)).to.equal(-1)
    })

    it('Should return correct for tc3', () => {
      const nums = [2]
      const target = 3
      expect(search(nums, target)).to.equal(-1)
    })
  })

  describe('#Day 18: Minimum Path Sum', () => {
    const minPathSum = require('../challenge30days/day_18')

    it('Should return correct for tc1', () => {
      const input = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ]
      expect(minPathSum(input)).to.equal(7)
    })
  })

  describe('#Day 17: Number of Islands', () => {
    const numIslands = require('../challenge30days/day_17')

    it('Should return correct for tc1', () => {
      const input = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ]
      expect(numIslands(input)).to.equal(1)
    })

    it('Should return correct for tc2', () => {
      const input = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ]
      expect(numIslands(input)).to.equal(3)
    })
  })

  describe('#Day 16: Valid Parenthesis String', () => {
    const checkValidString = require('../challenge30days/day_16')

    it('Should return correct for tc1', () => {
      const input = "()"
      expect(checkValidString(input)).to.equal(true)
    })

    it('Should return correct for tc2', () => {
      const input = "(*)"
      expect(checkValidString(input)).to.equal(true)
    })

    it('Should return correct for tc3', () => {
      const input = "(*))"
      expect(checkValidString(input)).to.equal(true)
    })

    it('Should return correct for tc4', () => {
      const input = ")("
      expect(checkValidString(input)).to.equal(false)
    })

    it('Should return correct for tc5', () => {
      const input = "*(()"
      expect(checkValidString(input)).to.equal(false)
    })

    it('Should return correct for tc6', () => {
      const input = "(())((())()()(*)(*()(())())())()()((()())((()))(*"
      expect(checkValidString(input)).to.equal(false)
    })

    it('Should return correct for tc7', () => {
      const input = "()()"
      expect(checkValidString(input)).to.equal(true)
    })

    it('Should return correct for tc8', () => {
      const input = "(()*"
      expect(checkValidString(input)).to.equal(true)
    })

    it('Should return correct for tc9', () => {
      const input = "((()))()(())(*()()())**(())()()()()((*()*))((*()*)"
      expect(checkValidString(input)).to.equal(true)
    })
  })


  describe('#Day 15: Product of Array Except Self', () => {
    const productExceptSelf = require('../challenge30days/day_15')

    it('Should return correct for tc1', () => {
      const input = [1, 2, 3, 4]
      const exp = [24, 12, 8, 6]

      const output = productExceptSelf(input)

      expect(output).to.eql(exp)
    })
  })

  describe('#Day 14: Perform String Shifts', () => {
    const stringShift = require('../challenge30days/day_14')
    it('Should return correct answer tc1', () => {
      const s = "abc"
      const shift = [[0, 1], [1, 2]]
      const exp = "cab"

      const result = stringShift(s, shift)
      expect(result).to.equal(exp)
    })
    it('Should return correct answer tc2', () => {
      const s = "abcdefg"
      const shift = [[1, 1], [1, 1], [0, 2], [1, 3]]
      const exp = "efgabcd"

      const result = stringShift(s, shift)
      expect(result).to.equal(exp)
    })
  })

  describe('#Day 13: Contiguous Array', () => {
    const findMaxLength = require('../challenge30days/day_13')
    it('Should return correct answer tc1', () => {
      const input = [0, 1]
      expect(findMaxLength(input)).to.equal(2)
    })

    it('Should return correct answer tc2', () => {
      const input = [0, 0, 1]
      expect(findMaxLength(input)).to.equal(2)
    })

    it('Should return correct answer tc3', () => {
      const input = [0, 1, 0, 1]
      expect(findMaxLength(input)).to.equal(4)
    })

    it('Should return correct answer tc4', () => {
      const input = [0, 1, 1, 0, 1, 1, 1, 0]
      expect(findMaxLength(input)).to.equal(4)
    })

    it('Should return correct answer tc5', () => {
      const input = [1]
      expect(findMaxLength(input)).to.equal(0)
    })
  })

  describe('#Day 12: Last Stone Weight', () => {
    const lastStoneWeight = require('../challenge30days/day_12')
    it('Should return correct answer tc1', () => {
      const input = [2, 7, 4, 1, 8, 1]
      expect(lastStoneWeight(input)).to.equal(1)
    })
  })

  describe('#Day 11: Diameter of Binary Tree', () => {
    const diameterOfBinaryTree = require('../challenge30days/day_11')
    const TreeNode = require('../tree')

    it('Should return correct Diameter', () => {
      // Initialize a tree
      const root = new TreeNode(1)
      root.left = new TreeNode(2)
      root.right = new TreeNode(3)
      root.left.left = new TreeNode(4)
      root.left.right = new TreeNode(5)

      expect(diameterOfBinaryTree(root)).to.equal(3)
    })
  })

  describe('#Day 10: Min Stack', () => {
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