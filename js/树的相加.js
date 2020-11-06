/*
*
                2

            /       \
    
          1         5
    
        /     \
       3      4
*
*/
var head = {
    value: 2,
    left: {
        value:1,
        left: {
            value:3
        }, 
        right: {
            value: 4
        }
    },
    right: {
        value: 5
    }
}

function addTree (node, initSum) {

    initSum = initSum === 0 ? '':initSum
    if(node.left || node.right) {
        var leftRes = 0
        var rightRes = 0
        if(node.left) {
            leftRes = addTree(node.left, String(initSum) + String(node.value))
            console.log('res1', leftRes, typeof leftRes)
            // 中层节点只负责向下传递自身数据和来自上层的数据，采集到数据之后，向上返回
        } 
        if(node.right) {
            rightRes = addTree(node.right, String(initSum) + String(node.value))
            console.log('res2', rightRes, typeof rightRes)
        }
        return leftRes + rightRes
    } else {
        const str = String(initSum) + String(node.value)
        return Number(str)
    }
}
const result = addTree(head, 0)
console.log('result', result)