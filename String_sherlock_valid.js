/*
Sherlock considers a string to be valid if all characters 
of the string appear the same number of times. 
It is also valid if he can remove just 1 character at 1 
index in the string, and the remaining characters 
will occur the same number of times. Given a string s, 
determine if it is valid. If so, return YES, otherwise 
return NO.
*/

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    var map = new Map()
    if (s.length == 0){
        return "YES"
    }
    for (var i = 0 ; i < s.length ; i++){
        if (map.get(s[i])){
            map.set(s[i], map.get(s[i])+1)
        } else {
           map.set(s[i], 1) 
        }
    }
    var f_count = 0;
    var l_count = 0;
    var result = true;
    map.forEach(function(value,key){
        if (f_count == 0){
            f_count = (value)
        } else {
            if (value != f_count){
               l_count ++ 
            }
        }
        if (l_count == 2){
            result = false
        }
    })
    if(result){
        return "YES"
    } else {
        return "NO"
    }
}