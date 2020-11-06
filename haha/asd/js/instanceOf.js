function instanceOf(instance, construc) {
    let prototype = construc.prototype
    while(true) {
        if(instance === null) {
            return false
        } else if (instance.__proto__ === prototype) {
            return true
        } else {
            instance = instance.__proto__
        }
    }
}
function People (name) {
    this.name = name
}
let p = new People('qwe')
console.log(instanceOf(p, People))