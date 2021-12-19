/*
A group of friends want to buy a bouquet of flowers. 
The florist wants to maximize his number of new 
customers and the money he makes. To do this, 
he decides he'll multiply the price of each flower by 
the number of that customer's previously purchased 
flowers plus 1. The first flower will be original price,
(0+1)*original price, the next will be (1+1)*original price 
and so on.

Given the size of the group of friends, the number of 
flowers they want to purchase and the original prices 
of the flowers, determine the minimum cost to purchase 
all of the flowers. The number of flowers they want 
equals the length of the c array.
*/

// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    if (k == c.length){
        return c.reduce((a, b) => a + b, 0)
    } else {
        c.sort(function(a,b){
            return b-a
        })
        var pre = 0
        var price = 0
        var j = k-1
        for (var i = 0 ; i < c.length ; i++){
            price += (c[i]* (pre +1));
            if (i == j){
                pre ++
                j +=k
            }
        }
        return(price)
    }
}