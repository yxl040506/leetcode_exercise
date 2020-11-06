var getKthFromEnd = function(head, k) {
    var slow = head
    var fast = head
    var count = 0
    while(count < k) {
        fast = fast.next
        count ++
    }
    while(fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};

var head = {
    val: 1,
    next: {
        val: 2,
        next:{
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

var result = getKthFromEnd(head, 2)
console.log('result', result)