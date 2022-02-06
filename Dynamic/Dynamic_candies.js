/*
Alice is a kindergarten teacher. 
She wants to give some candies to the children in her 
class.  All the children sit in a line and each of them 
has a rating score according to his or her performance 
in the class.  Alice wants to give at least 1 candy to 
each child. If two children sit next to each other, 
then the one with the higher rating must get more 
candies. Alice wants to minimize the total number of 
candies she must buy.
*/


/*
 * Complete the 'candies' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function candies(n, arr) {
    // Write your code here
    let l_arr = [];
    for(let i=0;i<n;i++){
        let curr = arr[i];
        let last = arr[i-1];
        if(i==0){
        l_arr[i] = 1;
        }else if(curr > last){
        l_arr[i] = l_arr[i-1]+1;
        }else{
        l_arr[i] = 1;
        }
    }
    let r_arr = [];
    for(let j=n-1;j>=0;j--){
        let curr = arr[j];
        let last = arr[j+1];
        if(j==n-1){
            r_arr[j] = 1;
        }else if(curr > last){
            r_arr[j] = r_arr[j+1]+1;
        }else{
            r_arr[j] = 1;
        }
    }
    
    let sum = 0;
    for(let k=0;k<n;k++){
        sum+= Math.max(l_arr[k],r_arr[k]);
    }
    return sum;
}