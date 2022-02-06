/*
Each time Sunny and Johnny take a trip to the Ice Cream 
Parlor, they pool their money to buy ice cream. 
On any given day, the parlor offers a line of flavors. 
Each flavor has a cost associated with it.

Given the value of money and the cost of each flavor 
for t trips to the Ice Cream Parlor, help Sunny and 
Johnny choose two distinct flavors such that they 
spend their entire pool of money during each visit. 
ID numbers are the 
1- based index number associated with a cost. 
For each trip to the parlor, print the ID numbers for 
the two types of ice cream that Sunny and Johnny 
purchase as two space-separated integers on a new line. 
You must print the smaller ID first and the larger ID 
second.
*/

/*
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost, money) {
    // Write your code here
    var map = new Map();
    for (let i = 0; i < cost.length; i++) {
        var target = money - cost[i];
        if (map.get(target)) {
            console.log(map.get(target), i + 1);
            break;
        }
        map.set(cost[i], i+1);
    }
}


/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
    // Write your code here
    var map = new Map()
    for (var i = 0 ; i < arr.length ; i++){
        var target = m - arr[i]
        if (map.get(target)){
            return[map.get(target), i+1]
        }
        map.set(arr[i],i+1)
    }
}