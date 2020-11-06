function curry(fn, ...arg) {
    console.log('arg', arg.length, arg, fn.length)
    return fn.length <= arg.length ? fn(...arg) : curry.bind(null, fn, ...arg)
}
  
const add = curry((a, b, c) => a + b + c)

// function add (...args) {
//     if(args.length >=3) {
//         return args.reduce((sum, curr)=>{
//             return sum + curr
//         }, 0)
//     } else if(args.length < 3) {
//         return (...newArgs) => {
//             return add(...args, ...newArgs)
//         }
//     }
// }
const result = add(1)(2,3)(4)(5)
console.log('result',result)