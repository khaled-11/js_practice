/*
The absolute difference is the positive difference 
between two values a and b, is written |a - b| or |b - a| 
and they are equal. If a = 3 and b = 2, result = 1. 
Given an array of integers, find the minimum absolute 
difference between any two elements in the array.

Example. arr = [-2,2,4]
There are 3 pairs of numbers: [-2,2], [-2,4] and [2,4]. 
The absolute differences for these pairs are 2,4 & 6. 
The minimum absolute difference is .
*/

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
    arr.sort((a,b)=>{
        return a-b
    })
    var min = 10**6
    for (var i = 0 ; i < arr.length-1 ; i++){
        for (var j = i+1 ; j < i+2 ; j++){
            if (Math.abs(arr[i] - arr[j]) < min){
                min =  Math.abs(arr[i] - arr[j])
            }
            if (min == 0 ){
                return 0
            }
        }

    }
    return min
}
