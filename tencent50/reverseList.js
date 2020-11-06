function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function() {
    let nodeList = createNodeList([1,2,3,4,5])
    console.log(nodeList)
    let head = nodeList[1]
    while(head) {
        console.log('head.val', head.val)
        if(head.next && head.next.next) {
            head.next.next.val = head.val
        }
        head = head.next
    }
    console.log(JSON.stringify(nodeList))
    // while(head) {
    //     head.next.next.val = head.val
    //     head = head.next
    // }
    return typeof head
};

var createNodeList = function (arr) {
    let result = []
    arr.forEach((item, index)=>{
        let node = {
            val: item,
            next: null
        }
        result.push(node)
        if(index > 0) {
            result[index - 1].next = node
        }
    })
    return result
}
reverseList()