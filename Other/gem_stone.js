/*
There is a collection of rocks where each rock has 
various minerals embeded in it. Each type of mineral 
is designated by a lowercase letter in the range [a-z]. 
There may be multiple occurrences of a mineral in a 
rock. A mineral is called a gemstone if it occurs at 
least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, 
display the number of types of gemstones in the collection.

Example
arr = ['abc','abc','bc']
The minerals b and c appear in each rock, so there are 2 
gemstones.
*/


/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here
    // Hash maps??
    // LOooooooooool
    // let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    // 'o','p','q','r','s','t','u','v','w','x','y','z']
    // let count = 0
    // for (let i = 0 ; i < alpha.length; i++){
    //     let state = true
    //     for (let j = 0 ; j < arr.length ; j++){
    //         if (!arr[j].includes(alpha[i])){
    //             state = false
    //         }
    //     }
    //     if (state){
    //         count++
    //     }
    // }
    // return(count)
    
    const map = new Map()
    for (let i = 0 ; i < arr.length ; i++){
        let temp = ""
        for (let j = 0 ; j < arr[i].length ; j++){
            if (!temp.includes(arr[i][j]) && map.get(arr[i][j])){
                map.set(arr[i][j],map.get(arr[i][j])+1)
            } else if (!temp.includes(arr[i][j]) && !map.get(arr[i][j])){
                map.set(arr[i][j],1)
            }
            temp += arr[i][j]
        }
    }
    let count = 0
    map.forEach(function (value, key){
        if (value === arr.length){
            count ++
        }
    })
    return(count)
}