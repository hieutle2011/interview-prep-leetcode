# Interview preparation leetcode - in Javascript

[![Build Status](https://api.travis-ci.org/hieutle2011/interview-prep-leetcode.svg?branch=master)](https://travis-ci.org/github/hieutle2011/interview-prep-leetcode) [![Run on Repl.it](https://repl.it/badge/github/hieutle2011/interview-prep-leetcode)](https://repl.it/github/hieutle2011/interview-prep-leetcode)

## Lessons learnt

### On experience
- Coding skill can be greatly improved with [deliberate practice](1).
- Try to attack the problem for the 2nd or even better, the 3rd time.
- Learn to use Map object and iterator object in Javascript.
- Write unit test is tedious but well worth your time debugging and refactoring later.

### On Array
- The easiest solution is quite obvious, but the challenging part is to find the trick to solve the problem without using any additional memory.
- Store data in a hash map boost the search.

### On String
- [Concat method](2) is slower compared to array.join() or assignment operator

### On Object
- Construct object prototype or ES class syntax.
- Implement inheritance and methods.

## Installation

Make sure you have node installed on your machine, then run command

```bash
npm install
npm test
```

## Todo
- Using hash map to spped up "threeSum"
- Using the *divide and conquer approach* to improve "maxSubArray"
- Look deeper into the *groupAnagrams*

[1]:https://en.wikipedia.org/wiki/Practice_(learning_method)#Deliberate_practice
[2]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat