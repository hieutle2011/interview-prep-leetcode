// Given an array of integers, find if the array contains any duplicates.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const sort_loop = (nums) => {
  const sorted = nums.sort((a, b) => a - b)

  const findDup = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) return true
    }
    return false
  }

  return findDup(sorted)
};

const mapTable = (nums) => {
  // const hashTable = makeObjNum(nums)
  const myMap = makeMapNum(nums)
  const iter = myMap.keys()
  let key = iter.next()

  while (!key.done) {
    if (myMap.get(key.value) > 1) return true
    key = iter.next()
  }
  return false
}

const hashTable = (nums) => {
  const myList = []
  for (let i =0; i < nums.length; i++) {
    let num = nums[i]
    if (myList.includes(num)) return true
    myList.push(num)
  }
  return false
}

const makeMapNum = (nums) => {
  let myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (myMap.has(num)) {
      let val = myMap.get(num) + 1
      myMap.set(num, val)
    }
    else myMap.set(num, 1)
  }
  return myMap
}

module.exports = {
  sort_loop, // Approach: Sorting
  mapTable,
  hashTable,
}