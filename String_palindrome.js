/*
Given a string of lowercase letters in the range 
ascii[a-z], determine the index of a character that 
can be removed to make the string a palindrome. 
There may be more than one solution, but any will do. 
If the word is already a palindrome or there is no 
solution, return -1. Otherwise, return the index of 
a character to remove.

Brain Storm:
loop till the middle of the array and compare first 
to last, and if all good, return -1 otherwise compute 
the index.
*/

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    var answer = -1;
    var j = s.length-1
    for (var i = 0 ; i < s.length/2 ; i++){
        if (s[i] != s[j]){
            if (s[i] != s[j]){
                answer = i;
                i = s.length
            } else {
                answer = j;
                i = s.length
            }
        }
        j--
    }
    return answer
}
