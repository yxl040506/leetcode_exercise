function DoubleLinkList () {
    this.head = null
    this.tail = null
}
DoubleLinkList.prototype.add = function (node) {
    if(!this.head) {
        this.head = node
        this.tail = node
    } else {
        this.tail.next = node
        node.last = this.tail
        this.tail = node
    }
    return node
}

DoubleLinkList.prototype.delete = function (node) {
    node.last.next = node.next
    node.next.last = node.last
}

//  1 -> 2 -> 3 -> 4 
//  1 <- 2 <- 3 <- 4

const linkList = new DoubleLinkList()
linkList.add({key: 1})
linkList.add({key: 2})
linkList.add({key: 3})
linkList.add({key: 4})
console.log('linkList', linkList)

export default DoubleLinkList