// 是否回文数
var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) {
        return false
    }
    let revertedNumber = 0
    while(x > revertedNumber) {
      revertedNumber = revertedNumber * 10 + x % 10  
      x = parseInt(x/10)
    }
    return revertedNumber === x || parseInt(revertedNumber / 10) === x
};
console.log(isPalindrome(121))