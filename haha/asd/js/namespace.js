var MyApp = {
    namespace: function(ns) {
        var parts = ns.split("."),
            object = this, i, len;
        console.log('parts', parts)
        for(i = 0, len = parts.length; i < len; i ++) {
            console.log('iiii', i)
            if(!object[parts[i]]) {
                object[parts[i]] = {};
            }
            console.log('123', object, parts[i])
            object = object[parts[i]];
        }console.log('object', object)
    return object;
    }
};

// 定义命名空间
MyApp.namespace("Helpers.Parsing");