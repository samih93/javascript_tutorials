//! Time Limit Exceeded
// var maxProfit = function (prices) {
//     var currentMaxProfit = 0;
//     for (i = 0; i < prices.length; i++) {

//         for (j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > currentMaxProfit) {
//                 currentMaxProfit = (prices[j] - prices[i]);

//             }
//         }

//     }
//     return currentMaxProfit;
// }

var maxProfit = function (prices) {
    var min = prices[0];
    var currentMaxProfit = 0;

    for (var price of prices) {
        min = Math.min(min, price);
        currentMaxProfit = Math.max(currentMaxProfit, price - min);

    }

    return currentMaxProfit;
}
console.log(maxProfit([7, 6, 4, 3, 1]))