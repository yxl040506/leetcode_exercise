function ListNode(val, next) {
    this.val = val;
    this.next = next;
}
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
}