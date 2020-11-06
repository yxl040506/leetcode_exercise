/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    for(var i=0;i < matrix.length;i++) {
        console.log('iiii'), i
        var row = matrix[i]
        var low = 0
        var high = row.length - 1
        if(row[low] === target || row[high] === target) {
            return true
        }
        console.log(row[low], target, row[high])
        if(row[low] < target && target < row[high]) {
            var result = findNumInArray(row, target)
            console.log('asdsd', result)
            if(result) { return true }
        } else {
            continue
        }
    }
    return false
};

var findNumInArray = function(arr, target) {
    for(var i = 1; i <arr.length -1; i++) {
        if(arr[i]===target ) {
            return true
        }
    }
    return false
}

var matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
var target = 5
var result = findNumberIn2DArray(matrix, target)
console.log('result', result)