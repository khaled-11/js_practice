/*
Starting with a 1-indexed array of zeros and a list of 
operations, for each operation add a value to each the 
array element between two given indices, inclusive. 
Once all operations have been performed, return the 
maximum value in the array.
*/

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    var arr = new Array(n).fill(0)
    for (var i = 0 ; i < queries.length ; i++){
        var start = queries[i][0]
        var end = queries[i][1]
        var amt = queries[i][2]
        // for (var j = start-1 ; j < end ; j++){
        //     arr[j] += amt
        // }
        arr[start-1] += amt
        if (end<n) arr[end] -= amt
    }
    var mv = -1
    var running = 0
    for (var j = 0 ; j < arr.length ; j++){
        running += arr[j]
        if (running > mv){
            mv = running
        }
    }
    // Math.max.apply(Math,arr)
    return(mv)
}