/*
Given a string, A, we define some operations on the 
string as follows:
a. reverse(A) denotes the string obtained by reversing 
string A. Example:
reverse("abc") = "cba"

b. shuffle(A) denotes any string that's a permutation of 
string A. Example:
shuffle("god") => ["god", "gdo", "ogd", "odg", "dog", "dgo"]

c. merge(Aq,A2) denotes any string that's obtained by 
interspersing the two strings A1 & A2, maintaining the 
order of characters in both. For example:
A1 = "abc" A2 = "def" could be
"abcdef", "abdecf", "adbecf", ........
Given a string s such that 
s (belongs to) merge(reverse(A), suffle(A))

for some string A, find the lexicographically smallest A.

For example, s= abab. We can split it into two strings 
of ab. The reverse is ba and we need to find a string 
to shuffle in to get abab. 
The middle two characters match our reverse string, 
leaving the a and b at the ends. Our shuffle string 
needs to be ab. Lexicographically ab < ba, so our 
answer is ab.
*/

function getMax(a, v, c) {
    var i, max=-1;
    for ( var k in c ) { 
        for ( i=0; i<a.length; ++i ) {
            if ( a[i]==k && v[i]==c[k] ) {
                if ( max<i ) max=i; 
                break;
            }
        }
    }
    return {max:max};
}

function smallest(a, i, end, c) {
    var min = 'z', pos=-1;
    for (i = i;i<end;++i) { 
        if ( c[a[i]]==null ) continue;
        if ( min>=a[i]){
            pos = i
            min=a[i]; 
        } 
    }
    return {element:min, position:pos};
}

/*
 * Complete the 'reverseShuffleMerge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function reverseShuffleMerge(s) {
    // Write your code here
    var a = s.split('');
    var c_map={}, c2_map={};
    var v_arr=[], r_arr=[];
    for ( var i=0; i<a.length; ++i ) {
        if ( c_map[a[i]]==null ) v_arr.push(c_map[a[i]] = 1); else v_arr.push(++c_map[a[i]]);
    }
    for ( var k in c_map ) { c2_map[k] = c_map[k]/2; }
    var end = a.length;
    var p = getMax(a, v_arr, c2_map);
    for ( i=p.max; i>=0; ) {
        var s = smallest(a, i, end, c2_map);
        r_arr.unshift(s.element);
        if ( c2_map[s.element]<=1 ) delete c2_map[s.element]; else --c2_map[s.element];
        end = s.position;
        p = getMax(a, v_arr, c2_map);
        i = p.max;
        if ( p.max == -1 ) break;
    }
    return(r_arr.reverse().join(''));
}