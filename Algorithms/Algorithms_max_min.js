/*
You will be given a list of integers, arr, and a single 
integer k. You must create an array of length k from 
elements of arr such that its unfairness is minimized. 
Call that array arr`. Unfairness of an array is calculated 
as max(arr`) - min(arr`)

Where:
- max denotes the largest integer in arr`
- min denotes the smallest integer in arr`
*/

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here
    arr.sort(function(a,b){
        return a-b
    })

    var current = k-1
    var min = arr[current] - arr[0]
    current ++
    for (var i = 1 ; i < arr.length+1-k ; i++){
        if (arr[current] - arr[i] < min){
            min = arr[current] - arr[i]
        }
        current++
    }
    return(min)
}