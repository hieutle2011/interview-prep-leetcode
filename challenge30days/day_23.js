/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = {}
  this.age = -1
  this.least = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // if (this.least >= this.capacity) this.least= this.least +1
  // if (Object.keys(this.map).length >= this.capacity) this.least= this.least +1
  console.log('GET', key, this.map, 'Age', this.age, 'Least', this.least)
  // console.log('GET LEAST', Object.keys(this.map).map(k => parseInt(this.map[k].age)))
  // console.log('GET LEAST MIN', Math.min(...Object.keys(this.map).map(k => parseInt(this.map[k].age))))
  this.least = Math.min(Object.keys(this.map).map(k => parseInt(this.map[k].age)))
  this.age = this.age + 1

  if (this.map[key]) {
    this.map[key].age = this.age
    // return this.map[key] ?  this.map[key].value : -1
    return this.map[key].value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // if (this.least >= this.capacity) this.least= this.least +1
  this.age = this.age + 1
  console.log('PUT', key, this.map, 'Age', this.age, 'Least', this.least)
  if (Object.keys(this.map).length < this.capacity) {
    this.map[key] = { value, age: this.age }
    this.least = Math.min(...Object.keys(this.map).map(k => parseInt(this.map[k].age)))
    // this.least= this.least +1
  }
  else {
    this.least = Math.min(...Object.keys(this.map).map(k => parseInt(this.map[k].age)))

    // let least_age = this.age - this.capacity
    let del_key = Object.keys(this.map).filter(k => this.map[k].age === this.least)[0]
    delete this.map[del_key]
    this.map[key] = { value, age: this.age }
    // this.least= this.least +1
  }
  // let ages = Object.keys(this.map).map(k => parseInt(this.map[k].age))
  // this.least = Math.min(ages)


};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache

