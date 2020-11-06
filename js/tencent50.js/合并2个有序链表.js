/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head1 = l1
    var head2 = l2
    var newHead = null
    var pHead = null
    if(!l1) {
        return l2
    } else if(!l2) {
        return l1
    }
    while(head1 && head2) {
        // 下面还有简化版。。少一个if else
        if(head1.val === head2.val) {
            if(!pHead) {
                newHead = head1
                pHead = head1
            } else {
                newHead.next = head1
                if(newHead.next) {
                    newHead = newHead.next
                }
            }
            // 一定要在这里移动link1的指针，不然移动了newHead指针之后，head1的next就不是原来的了
            head1 = head1.next
            
            newHead.next = head2
            if(newHead.next) {
                newHead = newHead.next
            }
          
            head2 = head2.next
        } else if(head1.val > head2.val) {
            if(!pHead) {
                newHead = head2
                pHead = head2
            } else {
                newHead.next = head2
                if(newHead.next) {
                    newHead = newHead.next
                }
            }
          
            head2 = head2.next
        } else if(head1.val < head2.val) {
            if(!pHead) {
                newHead = head1
                pHead = head1
            } else {
                newHead.next = head1
                if(newHead.next) {
                    newHead = newHead.next
                }
            }
           
            head1 = head1.next
        }
    }
    if(head1 && !head2) {
        newHead.next = head1
    } else if(head2 && !head1) {
        newHead.next = head2
    }
    return pHead
};

// var l1 = {
//     val:1,
//     next: {
//         val:2,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }

// var l2 = {
//     val:1,
//     next: {
//         val:3,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }
var l1 = {
    val:1,
    next: null
}

var l2 = {
    val:2,
    next: null
}
console.log(mergeTwoLists(l1, l2))


// 简化版：
var mergeTwoLists = function(l1, l2) {
    var head1 = l1
    var head2 = l2
    var newHead = null
    var pHead = null
    if(!l1) {
        return l2
    } else if(!l2) {
        return l1
    }
    while(head1 && head2) {
        if(head1.val > head2.val) {
            if(!pHead) {
                newHead = head2
                pHead = head2
            } else {
                newHead.next = head2
                if(newHead.next) {
                    newHead = newHead.next
                }
            }
          
            head2 = head2.next
        } else {
            if(!pHead) {
                newHead = head1
                pHead = head1
            } else {
                newHead.next = head1
                if(newHead.next) {
                    newHead = newHead.next
                }
            }
           
            head1 = head1.next
        }
    }
    if(head1 && !head2) {
        newHead.next = head1
    } else if(head2 && !head1) {
        newHead.next = head2
    }
    return pHead
};