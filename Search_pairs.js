/*
Given an array of integers and a target value, 
determine the number of pairs of array elements that 
have a difference equal to the target value.
*/

/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
    // Write your code here
    arr.sort(function(a,b){
        return a-b
    })
    var i = 0, j = 1, count = 0;
    
    while(j < arr.length) {
        var diff = arr[j] - arr[i];
        if (diff == k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
        } else if (diff < k) {
            j++;
        }
    }
    return count
    // var s = new Set(arr);
    // return arr.reduce((ac,v) => s.has(v-k) ? ac+1: ac,0);
}