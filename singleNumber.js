var singleNumber = function(nums) {
    let temp = 0
    for(let i =0;i<nums.length; i++) {
        temp ^= nums[i]
    }
    return temp
};
let result = singleNumber([4,1,2,1,2]);
console.log(result)