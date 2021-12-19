/*
You are given an unordered array consisting of 
consecutive integers belong to [1, 2, 3, ..., n] without 
any duplicates. 
You are allowed to swap any two elements. 
Find the minimum number of swaps required 
to sort the array in ascending order.
*/

/*
Brain Storm
consecutive 123456789
start at the first element and see if it is in the right spot.
If not, swap the first element with the element in its position,
Keep doing it until the first element is the right one.
*/

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    var swaps = 0
    var min = Math.min.apply(null, arr)
    for (var j = min-1 ; j < arr.length - 1 ; j++){
        while (arr [j] != (j+1)){
            var temp = arr[j]
            arr[j] = arr[temp-1]
            arr[temp-1] = temp
            swaps++
        }
    }
    return swaps;
}
