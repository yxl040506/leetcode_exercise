var twoSum = function(nums, target) {
    var map = {}
    nums.forEach((num, i)=> {
        map[num] = i
    })
    console.log('map', map)
    for(let i=0;i<nums.length;i++) {
        var num = nums[i]
        var other = target - num
        if(map[other] && map[other] !== i) {
            return [i, map[other]]
        }
    }
};
var result = twoSum([2, 7, 11, 15], 9)
console.log('result', result)