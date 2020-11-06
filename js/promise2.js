class  MyPromise {
    constructor (fn) {
        this.state = 'pending'
        this.callback = []
        this.result = null
        this.transition = this.transition.bind(this)
        fn(this.onResolved, this.onRejected)
    }
    onResolved = (result) => {
        this.transition('resolved', result)
    }
    transition (state, result) {
        if(this.state !== 'pending') { return }
        this.state = state
        this.result = result
        setTimeout(this.flushCbQueue, 0)
      
    }
    then (onFullfilled,onRejected) {
        return new Promise((resolve, reject)=>{
            var callback={onFullfilled, onRejected, resolve, reject}
     
            if(this.state === 'pending') {
                this.callback.push(callback)  
            } else {
                this.handleCallback(callback)
            }
        })
    }
    flushCbQueue = () => {
        console.log('flush callback');
        while(this.callback.length) {
            const cb = this.callback.shift()
            this.handleCallback(cb)
        }
    }
    handleCallback = ({onFullfilled, onRejected, resolve, reject}) => {
        if(this.state === 'resolved') { 
            var val = this.result
            if(onFullfilled) { 
                val = onFullfilled(this.result) 
            }
            resolve(val)
        } else if(this.state === 'rejected') {
            var val = this.result
            if(onRejected) { 
                val = onRejected(this.result) 
            }
            reject(val)
        }
    }
}

var result = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve({ test: 1 })
    }, 1000)
})
var thenRes = result.then((data) => {
    console.log('result1', data)
    //dosomething
    console.log('result2')
})
thenRes.then((data)=>{
    console.log('thenthen')
    return 'bobo'
}).then().then((data)=>{
    console.log('ohuohuo', data)
})
console.log('result', result, thenRes)