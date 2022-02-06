/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.
*/

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

/*
Brain Storm:
Add all possible substring - Not needed
Add to array and check - Slow.
Add each character in the shortest string to a map and compare to the longest string. If any character is found in both, it is solved by printing YES.
*/

function twoStrings(s1, s2) {
    // Write your code here
    var short_map = new Map()
    if (s1.length > s2.length){
        var temp = s1
        s1 = s2
        s2 = temp
    }
    
    for (var i = 0 ; i < s1.length ; i++){
        if (!short_map.get(s1[i])){
            short_map.set(s1[i],1)
        }
    }
    for (i = 0 ; i < s2.length ; i++){
        if (short_map.get(s2[i])){
            return("YES")
        }
    }
    return("NO")
    // // Slower method
    // var short = []
    // if (s1.length > s2.length){
    //     var temp = s1
    //     s1 = s2
    //     s2 = temp
    // }
    
    // for (var i = 0 ; i < s1.length ; i++){
    //     if (!short.includes(s1[i])){
    //         short[short.length] = s1[i]
    //     }
    // }
    // for (i = 0 ; i < s2.length ; i++){
    //     if (s1.includes(s2[i])){
    //         return("YES")
    //     }
    // }
    // return("NO")
}