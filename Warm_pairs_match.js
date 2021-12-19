/*
There is a large pile of socks that must be paired 
by color. Given an array of integers representing 
the color of each sock, determine how many pairs 
of socks with matching colors there are.

Function Description:
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns:
int: the number of pairs
*/

/*
Brain Storming
* Socks to be paired by (color)
Maybe sort then count repeated
 10 10 10 10 20 20 20 30 50
*/

function sockMerchant(n, ar) {
    // Write your code here
    ar.sort()
    var total_pair = 0;
    for (var i = 0 ; i < ar.length - 1 ; i++){
        for (var j = i+1 ; j < ar.length ; j++){
            if (ar[i] == ar[j]){
                total_pair ++
                i = i+1
                j = ar.length
            } else {
                j = ar.length
            }
        }
    }
    return(total_pair)
}