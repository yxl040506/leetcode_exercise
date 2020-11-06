/*
Mozilla 的实现例子
*/
function Shape () {
    this.x = 0
}
Shape.prototype.move = function () {
    this.x += 10
}
function Rectangle () {
    Shape.call(this)
}
Rectangle.prototype = Object.create(Shape.prototype) // Rectangle.prototype = Shape.prototype
Rectangle.prototype.constructor = Rectangle;
console.log(Rectangle.prototype)


//测试
var rect = new Rectangle()
console.log(rect.x)
rect.move()
console.log(rect.x)

