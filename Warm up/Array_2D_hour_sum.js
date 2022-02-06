/*
Given a 6x6 2D Array :
An hourglass is a subset of values with indices falling
in this pattern in 's graphical representation:
a b c
  d
e f g

There are 16 hourglasses in the array. 
An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in the array, 
then print the maximum hourglass sum. 
The array will always be 6x6.

Brain Storm
Iterate over the the first row and calculate the sum (n-2).
Repeat for the remaining rows and caculate the sum (n-2).
Comapre to the first sum and check for max.
*/

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    var count = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2]
    for (var i = 0 ; i < arr.length-2 ; i++){
        for (var j = 0 ; j < arr[i].length-2 ; j++){
            var current = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            if(current > count){
                count = current
            }
        }
    }
    return(count)
}