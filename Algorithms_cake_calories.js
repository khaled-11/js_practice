/*
Marc loves cupcakes, but he also likes to stay fit. 
Each cupcake has a calorie count, and Marc can walk a 
distance to expend those calories. If Marc has eaten j 
cupcakes so far, after eating a cupcake with c calories 
he must walk at least 2^i X c miles to maintain his weight.
*/

/*
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

function marcsCakewalk(calorie) {
    // Write your code here
    calorie.sort(function(a,b){
        return b - a
    })
    var sum = 0
    for (var i = 0 ; i < calorie.length ; i++){
        sum += (2**i) * calorie[i]
    }
    return sum
}