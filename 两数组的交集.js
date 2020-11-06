/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     var map = {}
//     var numsToSearch = nums1.length > nums2.length ? nums1 : nums2
//     var numsToMap = nums1.length > nums2.length ? nums2 : nums1
//     numsToMap.forEach((num)=>{
//         if(!map[num]) {
//             map[num] = 1
//         } else if(map[num] > 0) {
//             map[num] += 1
//         } 
//     })
  

//     var result = []
//     numsToSearch.forEach((item)=>{
//         if(map[item] && map[item] > 0) {
//             result.push(item)
//             map[item] -= 1
//         }
//     })
//     return result
// };

// [4, 4, 8, 9, 9] 
// [4, 5, 9]
// 如果是排序以后的
var intersect = function(nums1, nums2) {
   var nums1Sorted = nums1.sort((a,b)=>{return a- b})
   var nums2Sorted = nums2.sort((a,b)=>{return a- b})
   var result = []
   var i = 0
   var j = 0
   while(i < nums1Sorted.length && j < nums2Sorted.length) {
        var a = nums1Sorted[i]
        var b = nums2Sorted[j]
        if(a === b) {
            result.push(a)
            i++
            j++
        } else if(a > b) {
            j++
        } else if(a<b) {
            i++
        }
    }
    return result
};

var result = intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81], 
    [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48])
console.log('result', result)