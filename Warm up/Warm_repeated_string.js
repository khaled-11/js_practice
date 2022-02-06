/*
There is a string, S , of lowercase English letters 
that is repeated infinitely many times. 
Given an integer, N , find and print the number of 
letter a's in the first letters of the infinite string.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns
int: the frequency of a in the substring
Input Format
The first line contains a single string, .
The second line contains an integer, .
*/

/*
Brain Storm:
String with a length. Infinite repeat. (how many times)
What is the first n letters?
loops. String Short (count a)
Multiple by n
*/

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    var how_many_a = 0 
    for ( var i = 0 ; i < s.length ; i++){
        if(s[i] == 'a'){
            how_many_a ++
        }
    }
    var remind = n%s.length
    var total = (Math.floor(n / s.length))*how_many_a
    for (i = 0 ; i < remind ; i++){
        if (s[i] == 'a'){
            total ++
        }
    }
    return(total)
} 