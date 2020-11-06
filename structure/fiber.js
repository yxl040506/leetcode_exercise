class Node {
    constructor(instance) {
        this.instance = instance
        this.child = null
        this.sibling = null
        this.return = null
        this.name = instance.name
    }
}
function link(parent, elements) {
    if(elements === null) elements = []
    parent.child = elements.reduceRight((previous, current) => {
        /* 遍历顺序：
            null b3,  b3.sibling = null
            b3   b2,  b2.sibling = b3
            b2   b1,  b1.sibling = b2
        */
        const node = new Node(current);
        node.return = parent
        node.sibling = previous
        return node
    }, null)
    return parent.child
}
function walk(o) {
    let root = o
    let current = o
    console.log('currnet', current.name)
    while(true) {
        let child = doWork(current)
        
        if(child) {
            // 有child就继续深度遍历
            current = child
            console.log('currnet', current.name)
            continue
        }
        if(current === root) {
            return
        }
        while(!current.sibling) {
            // 没有children 也不是root的节点才会到这一步（因为是深度遍历）
            if(!current.return || current.return === root) {
                return
            }
            current = current.return
            console.log('current', current.name)
        }
        current = current.sibling
        console.log('currnet', current.name)
    }
}
function doWork (node) {
    const children = node.instance.render()
    return link(node, children)
}
// const children = [{name: 'b1'}, {name: 'b2'}, {name: 'b3'}];
// const parent = new Node({name: 'a1'});
// const child = link(parent, children);
// console.log('parent', parent)



const a1 = {name: 'a1'};
const b1 = {name: 'b1'};
const b2 = {name: 'b2'};
const b3 = {name: 'b3'};
const c1 = {name: 'c1'};
const c2 = {name: 'c2'};
const d1 = {name: 'd1'};
const d2 = {name: 'd2'};

a1.render = () => [b1, b2, b3];
b1.render = () => []
b2.render = () => [c1]
b3.render = () => [c2]
c1.render = () => [d1, d2]
c2.render = () => []
d1.render = () => []
d2.render = () => []

let root = new Node(a1)
walk(root)

/*
    a1 -> b1 -> b2 -> c1 -> d1 -> d2 ----> b3 -> c2
                                  |        ^     |     
                                  v        |     v
                                  c1----> b2     b3 ---> a1

*/