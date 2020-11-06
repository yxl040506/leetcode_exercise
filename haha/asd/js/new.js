function create() {
    let obj = new Object()
    let Con = [].shift.call(arguments) // 不同传参写法可能会不一样，只是为了获得构造函数，构造函数也可以作为参数直接传入
    console.log(Con, arguments)
    obj.__proto__ = Con.prototype
    let result = Con.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}

function create (Con) {
  let obj = new Object()
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return typeof result === 'object' ? result : obj   
}
function People(name,age){
    this.name = name;
    this.age = age;
  }
create(People,'Rose',18)