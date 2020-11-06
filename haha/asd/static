function isLongEnough(str) {
    return str.length >= 5;
}

function isShortEnough(str) {
    return str.length <= 10;
}
function strUppercase(str) { return str.toUpperCase() }
function strConcat(str1, str2) { return str1+str2 }
function strUppercaseReducer(list, str) {
    
    return list.concat([strUppercase(str)])
}
function filterReducer(predicateFn) {
    return function reducer(list, val) {
        if(predicateFn(val)) {
            return list.concat([val])
        }
        return list
    }
}
var isLongEnoughReducer = filterReducer(isLongEnough);
var isShortEnoughReducer = filterReducer(isShortEnough)
// function isLongEnoughReducer(list, str) {
//     if(isLongEnough(str)) {
//         return list.concat(str)
//     }
//     return list
// }
// function isShortEnoughReducer(list, str) {
//     if(isShortEnough(str)) {
//         return list.concat(str)
//     }
//     return list
// }
var words = [ "You", "have", "written", "something", "very", "interesting" ];
let result = words.reduce(strUppercaseReducer, [])
.reduce(isLongEnoughReducer, [])
.reduce(isShortEnoughReducer, [])
.reduce(strConcat, "")
console.log(result)