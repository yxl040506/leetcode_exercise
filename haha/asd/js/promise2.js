class MyPromise {
    constructor (fn) {
        this.fn = fn
        this.value = void 0
        this.deffers = []
        this.state = 'pending'
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        this.final = this.final.bind(this)
        this.handle = this.handle.bind(this)
        this.then = this.then.bind(this)
        this.doResolve = this.doResolve.bind(this)
        this.doResolve(this.fn, this.resolve, this.reject)
    }
    doResolve (fn, resolve, reject) {
        fn((value)=>{
            resolve(value)
        }, (error)=>{
            reject(error)
        })
    }
    resolve (val) {
        if(val instanceof MyPromise) {
            this.doResolve(this.bind(val), this.resolve, this.reject)
        }
        this.state = 'resolved'
        this.value = val
        this.final()
    }
    reject (val) {
        this.state = 'rejected'
        this.value = val
        this.final()
    }
    final () {
        this.deffers.forEach((deffer) => {
            this.handle(deffer)
        })
    }
    handle (deffer) {
        if(this.state !== 'pending') {
            let {onFullFilled, onRejected, resolve, reject} = deffer
            let cb
            if(onFullFilled || onRejected) {
                cb = this.state === 'resolved' ? onFullFilled : onRejected
            }
            if (!cb) {
                cb = this.state === 'resolved' ? resolve : reject
            }
            let val = cb(this.value)
            deffer.resolve(val)
        }
    }
    then (onFullFilled, onRejected) {
        return new MyPromise((resolve, reject)=>{
            let deffer = {
                onFullFilled,
                onRejected,
                resolve,
                reject
            }
            this.deffers.push(deffer)
        })
    }
}
new MyPromise((resolve, reject) => {
   setTimeout(() => {
       let time = new Date().getTime()
       if(time % 2=== 0) {
        resolve(time)
       } else {
        reject(time)
       }
   }, 1000)
}).then(
    (val)=>{
        console.log('resolve', val)
        return val + 'resolve'
    }, (val) => {
        console.log('reject', val)
        return val + 'reject'
    }
).then((val)=>{
    console.log('111', val)
}, (val)=>{
    console.log('222', val)
})