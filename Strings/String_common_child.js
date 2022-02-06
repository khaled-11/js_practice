/*
A string is said to be a child of a another string 
if it can be formed by deleting 0 or more characters 
from the other string. Letters cannot be rearranged. 
Given two strings of equal length, what's the longest 
string that can be constructed such that it is a child 
of both?
*/

/*
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    // Write your code here
    var l1 = s1.length;
    var l2 = s2.length;
    var result = [];
    for (var i = 0; i <= l1; i++) {
        result[i] = []
        for (var j = 0; j <= l2; j++) {
            if (i == 0 || j == 0) {
                result[i][j] = 0;
            } else if (s1[i-1] == s2[j-1]) {
                result[i][j] = 1 + result[i-1][j-1];
            } else {
                if (result[i][j-1] > result[i-1][j]){
                    result[i][j] = result[i][j-1]
                } else {
                    result[i][j] = result[i-1][j]
                }
            }
        }
    }
    return result[l1][l2];
     
    // Another option
    // let arr = [Array(s2.length + 1).fill(0)];
    // [...s1].forEach((v1, i) => {
    //     arr[i + 1] = [0];
    //     [...s2].forEach((v2, j) => {
    //         arr[i + 1][j + 1] = v1 === v2 ?
    //             arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
    //     });
    // });
    // return arr[s2.length][s1.length];

}