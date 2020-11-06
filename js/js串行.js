// function makePromise (num) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },Math.floor((Math.random()*10)+1) * 1000)
//     })
// }
// function print (val) {
//     console.log('val', val)
//     return val
// }
// let promises = [1, 3, 4, 5, 6].map((item, index) => {
//     return makePromise(item)
//   });
// function parellel (promises) {
//     let parallelPromises = promises.reduce(
//         (total, currentValue) => total.then(() => currentValue.then(print)),
//         Promise.resolve()
//       )
// }

// parellel(promises)

// // 并行执行
// Promise.all(promises)
// .then(() => {
//   console.log('done')
// })
// .catch(() => {
//   console.log('error')
// })





function makePromise (n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('resolve', n)
            resolve(n * 10)
        }, Math.floor(Math.random() * 10 + 1))
    })
}

var arr = [1,2,3,4,5]
var promises = arr.map((n)=>{
    return makePromise(n)
})
var result = promises.reduce((total, curr)=>{
    console.log('total', total)
    return total.then((lastRes)=>{
        return curr.then((currRes)=>{
            return lastRes + ' ' + currRes
        })
    })
}, Promise.resolve(''))
console.log(result, result.then((res)=>{
    console.log(res)
}), 'asd')