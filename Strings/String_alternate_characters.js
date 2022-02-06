/*
You are given a string containing characters A and B only. 
Your task is to change it into a string such that there 
are no matching adjacent characters. To do this, you 
are allowed to delete zero or more characters in the 
string.

Your task is to find the minimum number of required 
deletions.
*/

/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    // Write your code here
    var count = 0
    for (var i = 0 ; i < s.length-1 ; i ++){
        var temp = s[i]
        while(temp == s[i+1]){
            i++
            count++
        }
    }
    return(count)
}