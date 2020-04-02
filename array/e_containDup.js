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

const makeObjNum = (nums) => {
  const hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashTable) hashTable[nums[i]]++
    else hashTable[nums[i]] = 1
  }
  return hashTable
}

const makeMapNum = (nums) => {
  let myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // let value = myMap.get(num)

    // if (value) myMap.set(num, value++)
    // else myMap.set(num, 1)


    if (myMap.has(num)) {
      let val = myMap.get(num) + 1
      myMap.set(num, val)
    }
    else myMap.set(num, 1)
  }
  return myMap
}

module.exports = {
  sort_loop,
  mapTable,
}