
function jsonstringify (obj, cache = new Map()) {
    var str = ''
    if(cache.get(obj) !== undefined) {
        return cache.get(obj)
    }
    if(isObject(obj)) {
        cache.set(obj, '[Circular]')
        str = '{'
        const keys = Object.keys(obj)
        keys.forEach((key, index)=>{
            str += `${key}:`
            str += jsonstringify(obj[key], cache)
            if(index < keys.length - 1) {
                str += ','
            }
        })
        str += '}'
        cache.set(obj, str)
        return str
    } else if(Array.isArray(obj)) {
        str = '['
        obj.forEach((item, index)=>{
            str += jsonstringify(item, cache)
            if(index < obj.length -1) {
                str += ','
            }
        })
        str += ']'
        cache.set(obj, str)
        return str
    } else {
       return obj
    }
  
}
function isObject (obj) {
    return toString.call(obj) === '[object Object]'
}
var target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8, {objInArr: 1}],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;
var result = jsonstringify(target)
// var result = JSON.stringify(obj1)
console.log('result', result)