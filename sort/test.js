/*
    function sort(arr) {
        // 冒泡排序
            两重循环，
            内层循环的右界限往左不断推移，每次推进一个单位
            内层循环中交换相邻（符合条件的）2个元素 
            由外层的i控制内循环的右界限
      
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - 1 -i; j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        return arr
    }

    function sort(arr) {
        // 改进冒泡排序
        //    两重循环，
        //    内层循环的右界限不断往左推移，每次推进的单位数由上次交换的最大下标数决定
        let i = arr.length
        let pos = 0
        while(i > 0) {
            pos = 0
            for(let j = 0;j < i ;j++) {
                if(arr[j] > arr[j+1]) {
                pos = j
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                }
            }
            i = pos
        }
        return arr
    }
*/
/*
function sort(arr) {
    let low = 0;
    let high = arr.length - 1;
    let j
    while(low < high) {
        for(j = low; j < high; j++) {
            if(arr[j] > arr[j+1]) {
                // 核心还是交换相邻2个
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        high--;
        console.log(high)
        for(j = high; j > low; j--) {
            if(arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        low++
    }
}

function sort(arr, l, r) {
        // 挖坑填进去，而不是交换
        // 对比的是选定的key和内层循环的index元素
   
    let i = l
    let j = r
    let key = arr[l]
    if(l < r) {
        while(i < j) {
            while(j > i && arr[j] > key) {
                j--
            }
            if(j > i) {
                arr[i] = arr[j]
                i++
            }
            while(j > i && arr[i] < key) {
                i++
            }
            if(j > i) {
                arr[j] = arr[i]
                j--
            }
        }
        arr[i] = key
        sort(arr, l, i-1)
        sort(arr, i+1, r)
    }
    return arr
}
*/
// function sort(arr) {
//     for(let i = 0 ;i < arr.length; i++) {
//         let minIndex = i
//         for(let j = i+1; j < arr.length ; j++) {
    // 遍历右边所有元素,找到一个最小的
    // 交换的是外层索引index指向的元素 和 在外层索引之后数组的最小元素
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// function sort(arr, l, h) {
//     let i = l
//     let j = h
//     let key = arr[l]
//     if(l < h) {
//         while(j > i) {
//             // 起始下标选在最左，就只能从右边开始
//             while(j > i && arr[j] > key) {
//                 j--
//             }
//             if(j > i) {
//                 arr[i] = arr[j]
//                 i++
//             }
//             console.log(j, 'j')
//             while(j > i && arr[i] < key) {
//                 i++
//             }
//             if(j > i) {
//                 arr[j] = arr[i]
//                 j--
//             }
//         }
//         arr[i] = key
//         console.log(arr, i, j)
//         let pivot = i
//         sort(arr, l, pivot - 1)
//         sort(arr, pivot + 1, h)
//     }
//     return arr
// }
function sort (arr) {
    for(let i = 1;i < arr.length ; i++) {
        let key = arr[i]
        // 挖坑填坑
        // 外层循环索引元素为key
        //内层循环以外层循环索引为右边界，向前移动索引，遇到大于key的就向右移动元素，当找到小于key的元素时，证明找到合适的位置了
        // 如果一直比key大，就不断往后填
        let j
        for(j = i -1; j >= 0; j--) {
            if(arr[j] > key) {
                
                arr[j+1] = arr[j]
            } else {
                break
            }
        }
        arr[j+1] = key
    }
    return arr
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(sort(arr, 0 , arr.length - 1));