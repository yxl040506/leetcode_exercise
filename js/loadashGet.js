// 查答案
function get (obj, path, defaultValue) {
    if (!obj || !path) return defaultValue
   
    const travel = (regexp) => {
        const splitResult = String.prototype.split.call(path, regexp)
        console.log('splitResult', splitResult)
        return splitResult
        .filter(Boolean) // 过滤空字符
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    }
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
}


const obj = { selector: { to: { toutiao: 'FE coder' } }, target: [1, 2, { name: 'byted' }] };
// console.log(get(obj, 'target[0]'))
console.log(get(obj, 'selector[to].toutiao'))