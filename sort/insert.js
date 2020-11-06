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

function sortByUntilIndex (arr, func) {
    for(let i =1;i < arr.length;i++) {
        arr = func(arr, i)
    }
    return arr
}
function insertUntilIndex (arr, lastIndex) {
    for(let i = lastIndex; i >0; i--) {
        // console.log('undefined', arr[i], arr[i-1])
        if(arr[i] < arr[i-1]) {
            arr = swap(arr, i, i-1)
        }
    }
    return arr
}

function insertSort () {
    let arr = init(30)
    console.log('arr init', arr)
    arr = sortByUntilIndex(arr, insertUntilIndex)
    console.log('arr', arr)
}

insertSort()