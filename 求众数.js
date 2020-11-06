// 求众数：给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
/* hashmap
var majorityElement = function(nums) {
    let map = {}
    let length = Math.floor(nums.length / 2)
    nums.forEach((item) => {
        if(!map[item]) {
            map[item] = 1
        } else {
            map[item] += 1
        }
    })
    let keys = Object.keys(map)
    for(let i =0;i<keys.length;i++) {
        let item = keys[i]
        if(map[item] > length) {
            return keys[i]
        }
    }
};
*/
// 投票算法
var majorityElement = function(nums) {
    let counter = 0
    let result = nums[0]
    for(let i =0;i<nums.length;i++) {
        if(counter === 0) {
            // counter === 0 的时候，说明到这的时候，候选数字和其他数字数量相同，不能成为众数，我们使用下一个num作为候选者
            result = nums[i]
        }
        if(nums[i] === result) {
            counter += 1 // 和候选者相同则加一
        } else {
            counter -= 1 // 不同则减一
        }
    }
    return result
};
let result = majorityElement([3,2,3])
console.log('res', result)


/* 其他解法
1、排序，取中位数
2、分治算法


*/
