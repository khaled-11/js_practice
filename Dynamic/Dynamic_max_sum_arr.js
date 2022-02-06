/*
Given an array of integers, find the subset of 
non-adjacent elements with the maximum sum. 
Calculate the sum of that subset. It is possible 
that the maximum sum is 0, the case when all elements 
are negative.
*/


// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    let incl = arr[0];
    let excl = 0;
    let excl_new;
    let i;
    for(i = 1; i < arr.length; i++){
        // Current max excluding i
        excl_new = (incl > excl) ? incl : excl;
        // Current max including i
        incl = excl + arr[i];
        excl = excl_new;
    }
    // Return max of incl and excl
    return ((incl > excl) ? incl : excl);

}