/*
Consider the following version of Bubble Sort:
for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
}

Given an array of integers, sort the array in ascending 
order using the Bubble Sort algorithm above. 
Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where NumSwap is the 
number of swaps that took place.
First Element: firstElement, where firstElement is the first 
element in the sorted array.
Last Element: lastElement, where Lastelement is the last element 
in the sorted array.
Hint: To complete this challenge, you must add 
a variable that keeps a running tally of all swaps 
that occur during execution.
*/

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    var swaps = 0 
    for (var i = 0; i < a.length; i++) {
        
        for (var j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                var temp = a[j]
                a[j] = a [j+1]
                a[j+1] = temp
                swaps ++
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`)
}