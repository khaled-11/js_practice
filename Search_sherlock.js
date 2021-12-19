/*
Watson gives Sherlock an array of integers. 
His challenge is to find an element of the array such 
that the sum of all elements to the left is equal to 
the sum of all elements to the right.

Example:

arr = [5,6,7,11]
8 is between two subarrays that sum to 11.


The answer is 1 since left and right sum to 0.

You will be given arrays of integers and must determine 
whether there is an element that meets the criterion. 
If there is, return YES. Otherwise, return NO.
*/

/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // Write your code here
    if(arr.length == 1){
        return "YES"
    }
    var total = arr.reduce((a, b) => a + b, 0)
    var sum = 0
    var sum2 = 0
    for (var i = 0 ; i < arr.length ; i++){
        sum += arr[i]
        if (sum > total/2){
            sum -= arr[i]
            for (var j = i+1 ; j < arr.length ;j++){
                sum2 += arr[j]
            }
            i = arr.length
        }
    }
    if (sum == sum2){
        return "YES"
    } else {
        return "NO"
    }
}