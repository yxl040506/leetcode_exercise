/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.mainStack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.mainStack.push(x)
    if(minStack.length > 0) {
        var currMin = this.minStack.getMin()
        if(x < currMin) {
            this.minStack.push(x)
        } else {
            this.minStack.push(currMin)
        }
    } else {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.mainStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('minStack', minStack)
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.top())
console.log(minStack.getMin())


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */