function selectSort () {
    const arr = init(10)
    console.log('init', arr)
    sortByLastIndex(arr, selectUntilIndex)
}

function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    return arr
}
function selectUntilIndex (arr, lastIndex) {
    let max = -1
    let maxIndex = 0
    for(let i = 0;i <= lastIndex; i++) {
        if(arr[i] > max) {
            maxIndex = i
            max = arr[i]
        }
    }
    arr = swap(arr, lastIndex, maxIndex)
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

selectSort()