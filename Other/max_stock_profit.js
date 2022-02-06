/*
Your algorithms have become so good at predicting the 
market that you now know what the share price of Wooden 
Orange Toothpicks Inc. (WOT) will be for the next number 
of days.

Each day, you can either buy one share of WOT, sell any 
number of shares of WOT that you own, or not make any 
transaction at all. What is the maximum profit you can 
obtain with an optimum trading strategy?

Example:
Prices = [1,2]
Buy one share day one, and sell it day two for a profit 
of 1. Return 1.


No profit can be made so you do not buy or sell stock 
those days. Return 0.
*/

/*
 * Complete the 'stockmax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function stockmax(prices) {
    // Write your code here
    // 1 4 8 3 4 5 2 14 5 6 7 56 4 21 1 1
    if (prices.length == 1){
        return 0
    }
    let max_sell = prices[prices.length - 1]
    let profit = 0
    for (let i = prices.length-1 ; i >= 0 ; i--){
        if (max_sell < prices[i]){
            max_sell = prices [i]
        }
        profit += max_sell - prices[i] 
    }
    return(profit)
}