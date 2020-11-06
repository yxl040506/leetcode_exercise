var getIntersectionNode = function(headA, headB) {
    var pA = headA
    var pB = headB
    while(pA !== pB) {
        pA = !pA.next ? headB :  pA.next
        pB = !pB.next ? headA :  pB.next
        console.log(pA.val)
        if(!pA && !pB) {
            break
        }
    }
    return pA
};

var headA = {
    val: 2,
    next: {
        val: 6,
        next: {
            val: 4
        }
    }
}
var headB = {
    val: 1,
    next: {
        val: 5
    }
}
var res = getIntersectionNode(headA, headB)
console.log('res', res)