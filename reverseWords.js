/**
 * @param {string} str
 * @return {string}
 */
var reverseWords = function(str) {
    return str.split(' ').map((item) => {
            return item.split('').reverse().join('')
        }).join(' ')
};
