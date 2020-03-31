// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var loop = function (nums, k) {
    const len = nums.length
    k = k % len
    if (k === 0) return nums

    for (let i = 0; i < k; i++) {
        // use additional memory
        let last_item = nums.pop()
        nums.splice(0, 0, last_item) // move to the index 0
    }
};

// 2nd solution
var slice = function (nums, k) {
    const len = nums.length
    k = k % len
    if (k === 0) return nums

    const a = nums.slice(0, len - k)
    const b = nums.slice(len - k)

    nums = Array.prototype.concat(b, a)
};

module.exports = {
    loop,
    slice,
}

// Hint 1
// The easiest solution would use additional memory and that is perfectly fine.

// Hint 2
// The actual trick comes when trying to solve this problem without using any 
// additional memory. This means you need to use the original array somehow to 
// move the elements around. Now, we can place each element in its original 
// location and shift all the elements around it to adjust as that would be 
// too costly and most likely will time out on larger input arrays.

// Hint 3
// One line of thought is based on reversing the array (or parts of it) to
// obtain the desired result. Think about how reversal might potentially help 
// us out by using an example.

// [1,2,3,4,5]
// [5,1,2,3,4]
// [4,5,1,2,3]
// [3,4,5,1,2]
// [2,3,4,5,1]

// Hint 4
// The other line of thought is a tad bit complicated but essentially it builds 
// on the idea of placing each element in its original position while keeping track 
// of the element originally in that position. Basically, at every step, we place 
// an element in its rightful position and keep track of the element already there 
// or the one being overwritten in an additional variable. We can't do this in one 
// linear pass and the idea here is based on cyclic-dependencies between elements.