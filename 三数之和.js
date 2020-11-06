/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var numsSorted = nums.sort((a, b)=>{return a-b})
    var first = 0
    var result = []
    while(first < numsSorted.length) {
        if(first > 0 && numsSorted[first] === numsSorted[first-1]) { first++; continue }
        var target = 0 - numsSorted[first]
        var twoSumResult = twoSum(first, numsSorted, target)
        result = result.concat(twoSumResult)
        first++
    }
    return result
};

var twoSum = function(first, nums, target) {
    var result = []
    var third = nums.length - 1
    var second = first + 1
    while(second < third) {
        const sum = nums[second] + nums[third]
        if(sum === target) {
            result.push([nums[first], nums[second], nums[third]])
            while(nums[second] === nums[second+1]) {
                second++
            }
            console.log('second', second, third, result)
            second++
            while(nums[third] === nums[third-1]) {
                third--
            }
            third--
        } else if(sum < target) {
            second++
        } else if (sum > target) {
            third--
        }
    }
    return result
};
// var nums = [-1, 0, 1, 2, -1, -4]
var nums = [-2,0,0,2,2]

// [ -4, -1, -1, 0, 1, 2]
console.log(threeSum(nums))
