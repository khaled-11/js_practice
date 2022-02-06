/*
 * Complete the 'countInversions' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// Global counter
var count;
// Swap and count function.
function swap(arr1, arr2) {
    var [i, j] = [0, 0];
    var mergedArr = [];
    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
            mergedArr[mergedArr.length] = arr1[i];
            i++;
        } else {
            mergedArr[mergedArr.length] = arr2[j];
            count += (arr1.length - i);
            j++;
        }
    }
    if (i >= j){
        return mergedArr.concat(arr2.slice(j))
    }
    return mergedArr.concat(arr1.slice(i));
}

// Merge sort function
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } 
    else {
        var middle = Math.floor(arr.length / 2);
        var left = mergeSort(arr.slice(0, middle))
        var right = mergeSort(arr.slice(middle, arr.length))
        return swap(left, right);
    }
}
    
function countInversions(arr) {
    // Write your code here
    count = 0 ;
    mergeSort(arr);
    return count;
}