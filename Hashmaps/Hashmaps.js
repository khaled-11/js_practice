/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */


function checkMagazine(magazine, note) {
    // Write your code here
    var result = "Yes"
    var magazine_map = new Map()
    for (var i = 0 ; i < magazine.length ; i++){
        if (!magazine_map.get(`${magazine[i]}`)){
            magazine_map.set(magazine[i],1)
        } else {
            magazine_map.set(magazine[i],magazine_map.get(`${magazine[i]}`)+1)
        }
    }
    for (var j = 0 ; j < note.length ; j++){
        if (!magazine_map.get(`${note[j]}`) || magazine_map.get(`${note[j]}`) == 0){
            result = "No"
            j = note.length
            break;
        } else {
            magazine_map.set(note[j],magazine_map.get(`${note[j]}`)-1)
        }
    }
    console.log(result)
}


/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    var first = new Map()
    var not_found = true
    if (s1.length > s2.length){
        var temp = s1
        s1 = s2
        s2 = temp
    }
    for (var i = 0 ; i < s1.length ; i++){
        first.set(s1[i] , 1)
    }
    for (var j = 0 ; j < s2.length ; j++){
        if (first.get(`${s2[j]}`)){
            return("YES")
        }
    }
    if (not_found){
        return("NO")
    }  
}
