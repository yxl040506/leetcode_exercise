/**
 * @param {number} capacity
 */

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
    if(node === this.head) {
        this.head = node.next
    }
    if(node === this.tail) {
        this.tail = node.last
    }
    if(node.last) {
        node.last.next = node.next
    }
    if(node.next) {
        node.next.last = node.last
    }   
}
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.linkList = new DoubleLinkList()
    this.data = {}
    this.count = 0
};



LRUCache.prototype.addToList = function (key) {
    const newNode = this.linkList.add({
        key
    })
    this.data[key].node = newNode
}

LRUCache.prototype.deleteFromList = function (key) {
    const {node} = this.data[key]
    if(this.linkList.head === node && node.next) {
        this.linkList.head = node.next
    }
    this.linkList.delete(node)
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    if(!this.data[key]) { console.log('value', -1); return -1 }
    const {node, value} = this.data[key]
    this.deleteFromList(key)
    this.addToList(key)
    return value
};




/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.data[key]) {
       this.deleteFromList(key)
    } else if(this.count >= this.capacity) {
        delete this.data[this.linkList.head.key]
        this.linkList.delete(this.linkList.head)
        // this.deleteFromList(headNode)
    } else {
        if(!this.data[key]) {
            this.count += 1
        } 
    }
    this.data[key] = {
        value,
    }
    this.addToList(key)
};

// function findNode (head, node) {
//     var walk = head
//     console.table('walk1', walk)
//     while(walk) {
//         if(walk === node) {
//             console.table('walk2', walk)
//             return walk
//         } else {
//             walk = walk.next
//         }
//     }
// }








var cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4


// var enter = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
// // const enter = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
// var opacity = enter.shift()[0]
// var cache = new LRUCache(opacity)
// var temp = enter.slice(0, 63)
// temp.forEach((item)=>{
   
//     if(item.length === 2) {
//         const key = item[0]
//         const value = item[1]
//         console.log('put(', key, value, ')')
//         cache.put(key, value)
//     } else {
//         const key = item[0]
//         console.log('get(', key, ')')
//         cache.get(key)

//     }
// })
// console.log('cache', cache)