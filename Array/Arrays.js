/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    //var for max sum with intial value of first group.
    var max_sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    // Loop over the main array length - 2
    for (var i = 0 ; i < arr.length - 2 ; i++){
        // Loop over the inner array (i)
        for (var j = 0 ; j < arr[i].length -2 ; j++){
            // calculate the sum of the pattern and compare it to the max sum
            var in_sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (in_sum > max_sum){
                max_sum = in_sum;
            }
        }
    }
    return max_sum
}


// Complete the 'rotLeft' function below.
// The function is expected to return an INTEGER_ARRAY.
// The function accepts following parameters:
//  1. INTEGER_ARRAY a
//  2. INTEGER d

function rotLeft(a, d) {
   // Write your code here
   // New array
   var new_arr =[]
   new_arr[0] = a[d]
   // counter
   for (var i = 1 ; i < a.length ; i++){
       if (d+i >= a.length){
           var num = (d+i - a.length)
       } else {
           var num = d+i
       }
       new_arr[i] = a[num]
   }
   return new_arr
}


/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    var arr = []
    for ( var k = 0 ; k < n ; k++){
        arr[k] = 0
    }
    for (var i = 0 ; i < queries.length ; i++){
        var start = queries[i][0]
        var end = queries[i][1]
        var amt = queries[i][2]
        arr[start-1] += amt
        arr[end] -= amt
    }
    
    var mv = -1
    var running = 0
    for (var j = 0 ; j < arr.length ; j++){
        running += arr[j]
        if (running > mv){
            mv = running
        }
    }
    return(mv)
}


/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    var count = 0 ;
    var temp
    var result = true
    for (var i = q.length-1 ; i > 0 ; i--){
        if (q[i] != (i+1)){
            if (i-1 >= 0 && q[i-1] == i+1){
                count ++
                temp = q[i]
                q[i] = q[i-1]
                q[i-1] = temp
            } else if (i-2 >= 0 && q[i-2] == i+1){
                count = count+2
                q[i-2] = q[i-1]
                q[i-1] = q[i]
                q[i] = i+1
            } else {
                result = false
                i = 0
                break;
            }
            
        }
    }
    if (result){
        console.log(count)
    } else {
        console.log("Too chaotic")
    }
}