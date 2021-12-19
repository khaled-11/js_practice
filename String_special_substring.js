/*
A string is said to be a special string if either of 
two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, 
e.g. aadaa.
A special substring is any substring of a string 
which meets one of those criteria. Given a string, 
determine how many special substrings can be formed 
from it.
*/

// Complete the substrCount function below.
function substrCount(n, s) {
    var count = s.length;
    for (var i = 0; i < s.length; i++) {
        var next = i;
        while (s[i] === s[next + 1]) {
            next++;
        }
        console.log(i,next)
        if (i !== next) {
            const length = next - i;
            count = count + (length * (length + 1)) / 2;
            i = next;
        } else {
            let step = 1;
            while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
                step++;
                count++;
            }
        }
    }
    return count;
}
