/*
A student is taking a cryptography class and has found 
anagrams to be very useful. Two strings are anagrams 
of each other if the first string's letters can be 
rearranged to form the second string. In other words, 
both strings must contain the same exact letters in 
the same exact frequency. For example, bacdc and dcbac 
are anagrams, but bacdc and dcbad are not.

The student decides on an encryption scheme that 
involves two large strings. 
The encryption is dependent on the minimum number of 
character deletions required to make the two strings 
anagrams. Determine this number.

Given two strings, a and b, that may or may not be of 
the same length, determine the minimum number of 
character deletions required to make a and b anagrams. 
Any characters can be deleted from either of the strings.
*/

/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    // Write your code here
    var map = new Map()
    var map2 = new Map()
    for (var i = 0 ; i < a.length ; i++){
        if (map.get(a[i])){
            map.set(a[i], map.get(a[i])+1)
        } else {
            map.set(a[i], 1)
        }
    }
    var map2 = new Map()
    for (i = 0 ; i < b.length ; i++){
        if (map2.get(b[i])){
            map2.set(b[i], map2.get(b[i])+1)
        } else {
            map2.set(b[i], 1)
        }
    }
    
    var count = 0;
    map.forEach(function(value, key) {
        if (map2.get(key)){
          if (value == map2.get(key)){
              count += (value +map2.get(key))
          } else {
              if (value > map2.get(key)){
                  count += map2.get(key) * 2
              } else {
                  count += value * 2
              }
          }
        }
        
    })
    return((a.length + b.length) - count) 
}

/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    // Write your code here
    let map1 = new Map()
    if (s2.length > s1.length){
        let temp = s1
        s1 = s2
        s2 = temp
    }
    for (let i = 0 ; i < s1.length ; i++){
        if (!map1.get(s1[i])){
            map1.set(s1[i],1)
        } else {
            map1.set(s1[i],map1.get(s1[i])+1)
        }
    }
    let count = 0
    for (let i = 0 ; i < s2.length ; i++){
        if (map1.get(s2[i]) && map1.get(s2[i]) > 0){
            map1.set(s2[i],map1.get(s2[i])-1)
        } else {
            count++
        }
    }
    map1.forEach(function(value,key){
        count += value
    })
    return count
}