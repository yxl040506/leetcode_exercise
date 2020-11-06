let target = null
class Watcher {
    constructor(obj, key, cb) {
        target = this
        this.obj = obj
        this.value = obj[key]
        this.cb = cb
        target = null
    }
    update (val) {
        this.cb(val)
    }
}
class Dep {
    constructor () {
        this.subs = []
    }
    addSub (sub) {
        this.subs.push(sub)
    }
    notify (val) {
        this.subs.forEach((sub) => {
            sub.update(val)
        })
    }
}
function observe (obj) {
    Object.keys(obj).forEach((key)=>{
        let dep = new Dep()
        Object.defineProperty(obj, key, {
            set: function setter(newVal) {
                // val = newVal
                dep.notify(newVal)
                // return val
            }, 
            get: function getter() {
                console.log('get', obj, key)
                if(target) {
                    dep.addSub(target)
                }
            }
        })
    })
}
function update (val) {
    console.log('val', val)
}
function update2 (val) {
    console.log('val', val)
}
var data = {name: 'yck', age: 10}
observe(data) // 给对象的每个属性都增添发布订阅模式，包括通知和调用所有监听函数
new Watcher(data,'name', update)
new Watcher(data,'age', update2)
data.name = 'yyy'