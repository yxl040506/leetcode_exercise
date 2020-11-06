Function.prototype.newCall = function (context, ...params) {
    if (typeof context === 'object') {
        context = context || window
    } else if(typeof context === 'string') {
        context = Object.create(null)
    }
    let fnKey = Symbol()
    console.log('this', this)
    context[fnKey] = this
    console.log(context, context[fnKey])
    // context[fnKey](...params)
    // delete context[fnKey]
}
function test (a, b) {
    console.log('this.', this, this.name, a, b)
}
var bobo = {
    name: 'bobo'
}
test.newCall('123', 2, 3)