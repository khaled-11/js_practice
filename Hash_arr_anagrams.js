/*
Two strings are anagrams of each other if the letters 
of one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings 
of the string that are anagrams of each other.
*/
/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

/*
Brain Storm:
List all possible substring pairs in the string.
Sort the substring pair based on characters count.
Count all equal pairs in the same level. (Slow)
Second Approach: add all single characters to a map then increase until n-1
Calculate nCk for all equal values in the same level. 1,2,....,n-1
*/

function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    } else {
        return n*factorial(n-1)
    }
}

// function compute_ASCII(s){
//     var value = 0;
//     for (var u = 0 ; u < s.length ; u++){
//         value += s.codePointAt(u)
//     }
//     return value
// }

function sherlockAndAnagrams(s) {
    // Write your code here
    var r_map = new Map()
    var start = 1
    var end = s.length
    var count = 0;
    while (start < s.length){
        for (var i = 0 ; i < end ; i++){
            var temp_arr = []
            var str = ""
            for(var j = 0 ; j < start ; j++){
                temp_arr[temp_arr.length] = (s[i+j])
            }
            temp_arr.sort()
            for (j = 0 ; j < temp_arr.length ; j++){
                str += temp_arr[j]
            }
            if (!r_map.get(str)){
                r_map.set(str , 1)
            } else {
                r_map.set(str, r_map.get(str)+1)
            }
        }
        start++
        end--
    }
    r_map.forEach(function(value, key) {
        if (value > 1){
            count += factorial(value)/(2*factorial(value-2))
        }
    })
    return count
    
    // // Second solution
    // var start = 1
    // var end = s.length
    // var final_array = []
    // while (start < s.length){
    //     final_array[start-1] = []
    //     for (var i = 0 ; i < end ; i++){
    //         var temp_arr = [];
    //         for(var j = 0 ; j < start ; j++){
    //             temp_arr[temp_arr.length] = s[i+j]
    //         }
    //         temp_arr.sort()
    //         var temp_str = ""
    //         for (var k =0;k<temp_arr.length;k++){
    //             temp_str+=temp_arr[k]
    //         }
    //         final_array[start-1][final_array[start-1].length] = temp_str
    //     }
    //     final_array[start-1].sort()
    //     start++
    //     end--
    // }
    // var count = 0;
    // for (var t = 0 ; t < final_array.length ; t++){
    //     for (var z = 0 ; z < final_array[t].length ; z++){
    //         for(var w = z+1 ; w < final_array[t].length ; w++){
    //             if(final_array[t][z] == final_array[t][w]){
    //                 count++
    //             }
    //         }
    //     }
    // }
    // return(count)
}