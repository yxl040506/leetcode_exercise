function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    return arr
}

function init(num) {
    let arr = []
    for(let i =0;i < num;i++) {
        arr[i] = Math.floor(Math.random() * 100)
    }
    return arr
}

function sortByUntilIndex (arr, func, initIndex, step) {
    for(let i =initIndex + step;i < arr.length;i += step) {
        arr = func(arr, i, initIndex, step)
    }
    return arr
}
function insertUntilIndex (arr, lastIndex, initIndex, step) {
    for(let i = lastIndex; i > initIndex; i-= step) {
        // console.log('undefined', arr[i], arr[i-1])
        if(arr[i] < arr[i-step]) {
            arr = swap(arr, i, i-step)
        }
    }
    return arr
}

function insertSort () {
    let arr = init(30)
    const initStep = 3
    // 步长要减一
    for(let step = initStep; step >0; step--) {
        for(let i = 0; i < step; i++) {
            arr = sortByUntilIndex(arr, insertUntilIndex, i, step)
        }
    }
}

insertSort()