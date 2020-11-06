
function quickSort (arr, left, right) {
    // const arr = init(10)
    const pivot = arr[left]
    console.log('pivot', pivot, left, right)
    let i = left
    let j = right
    if(left < right) {
        while(j > i) {
            while(j > i) {
                // console.log('iiijjj', i, j)
                if(arr[j] < pivot) {
                    arr[i] = arr[j]
                    i++
                    break
                }
                j--
            }
            while(j > i) {
                if(arr[i] > pivot) {
                    arr[j] = arr[i]
                    j--
                    break
                }
                i++
            }
            // console.log('iiijj', i, j)
        }
        arr[i] = pivot
        console.log('arrrrr', arr, 'left', i+1, 'right', right)
        arr = quickSort(arr, left, i)
        arr = quickSort(arr, i+1, right)
        // for(let i = 0;i <j)
        return arr
    } else {
        return arr
    }
}

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
// let arr = [3, 8, 2, 7, 6, 4, 1, 9, 5]
let arr = init(15)
arr = quickSort(arr, 0, arr.length - 1)
console.log('arr', arr)















































































// function quickSort(arr, l, r) {
//     let i = l
//     let j = r
//     let key = arr[i]
//     if(l < r) {
//         while(i < j) {
//             while(i < j && arr[j] > key) {
//                 j--
//             }
//             if(i < j) {
//                 arr[i] = arr[j]
//                 i++
//             }
//             while(i < j && arr[i] < key) {
//                 i++
//             }
//             if(i < j) {
//                 arr[j] = arr[i]
//                 j--
//             }
//         }
//         console.log('arr', arr)
//         arr[i] = key
//         quickSort(arr, l, i-1)
//         quickSort(arr, i+1, r)
//     }
//     return arr
// }
// let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
// console.log(quickSort(arr, 0 , arr.length - 1))