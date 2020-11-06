const a = require('./a')
const b = require('./main2')
console.log('a', a.val, b.val, a === b)
setTimeout(()=>{
    console.log('a', a.val, b.val, a=== b)
}, 5000)
