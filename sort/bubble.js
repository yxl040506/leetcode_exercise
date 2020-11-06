function bubbleSort () {
    const arr = init(10)
    console.log('init', arr)
    sortByLastIndex(arr, sortUntilIndex)
}

function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    return arr
}
function sortUntilIndex (arr, lastIndex) {
    // 不能等于lastIndex， i+1可能会数组越界
    for(let i = 0;i < lastIndex; i++) {
        if(arr[i] > arr[i+1]) {
            arr = swap(arr, i, i+1)
        }
    }
    return arr
}

function init(num) {
    let arr = []
    for(let i =0;i < num;i++) {
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr
}

function sortByLastIndex (arr, func) {
    for(let i =arr.length - 1;i >= 0;i-- ) {
        arr = func(arr, i)
    }
    console.log('arr', arr)
    return arr
}

bubbleSort()