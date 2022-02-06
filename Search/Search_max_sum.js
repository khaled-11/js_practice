/*
We define the following:

A subarray of array a of length n is a contiguous 
segment from a[i] through a[j] where 0<=i<=j<n.
The sum of an array is the sum of its elements.
Given an n element array of integers, a, and an 
integer, m, determine the maximum value of the sum 
of any of its subarrays modulo m.
*/


/*
 * Complete the 'maximumSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY a
 *  2. LONG_INTEGER m
 */

function maximumSum(a, m) {
    // Write your code here
    // Compute a modulo sum array. Store an index and a sum.
    var sums = [[-1, 0]];
    var maxSum = 0;
    for (var i=0; i<a.length; i++) {
        sums.push([i, (sums[i][1] + a[i]) % m]);
        // One can always compute the difference between 0 and the current element.
        maxSum = Math.max(sums[sums.length-1][1], maxSum);
    }
    // Sort the array by sum value.
    sums.sort(function(a,b){return a[1]-b[1];});
    
    for (var i=1; i<sums.length; i++) {
        var origIndex = sums[i][0],
            curSum = sums[i][1];
        // Look for the first element with greater sum with index before it.
        var j = i+1;
        while (j<sums.length && (sums[j][0] >= origIndex || sums[j][1] == curSum)) {
            j++;
        }
        // If we found one, compute the negative difference and update max.
        if (j<sums.length) {
            maxSum = Math.max(curSum - sums[j][1] + m, maxSum);
        }
    }
    return maxSum;
}