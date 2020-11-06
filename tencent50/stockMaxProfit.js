var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0
    let sold = prices[0]
    let soldFlag = false
    for(let i = 0;i < prices.length; i ++){
        let curr = prices[i]
        if(soldFlag) {
            if(curr < sold) {
                profit += sold - buy
                soldFlag = false
                buy = curr
                sold = curr
            } 
        } 
        if (i === prices.length - 1) {
            sold = curr
            profit += sold - buy > 0 ? sold - buy : 0
        }
        if(curr < buy) {
            buy = curr
            soldFlag = false
        } else if(curr > buy) {
            sold = curr
            soldFlag = true
        }
    }  
    return profit
};
let prices = [7,6,4,3,1]
let result = maxProfit(prices)
console.log('result', result)