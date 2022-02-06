/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    // Write your code here
    var count = 0;
    for (var i = 0 ; i < s.length ; i++){
        if(s[i] == s[i+1]){
            count ++;
        }
    }
    return count;
}



/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    var count = new Map();
    for (var i = 0 ; i < s.length ; i++){
        if (count.get(`${s[i]}`)){
            count.set(`${s[i]}`, count.get(`${s[i]}`)+1)
        } else {
            count.set(`${s[i]}`, 1)
        }
    }
    var final_count = 0;
    var first_value = 0;
    var result = true;
    count.forEach((values,keys)=>{
        if (first_value == 0){
            first_value = (values)
        } else {
            if (values != first_value){
               final_count ++ 
            }
        }
        if (final_count == 2){
            result = false
        }
    })

    if(result){
        return "YES"
    } else {
        return "NO"
    }
}






// Comapring
function makeAnagram(a, b) {
    // Maps for char count
    var count1 = getCharCount(a)
    var count2 = getCharCount(b)
    // Difference map
    var diff1 = new Map()
    
    count1.forEach((value,key)=>{
        if (!count2.get(key)){
            diff1.set(key, count1.get(key))
        }
        else if (count2.get(key) && count1.get(key) - count2.get(key) > 0){
            diff1.set(key, (count1.get(key) - count2.get(key)))
        }
    })
    
    var diff2 = new Map()
    count2.forEach((value,key)=>{
        if (!count1.get(key)){
            diff2.set(key, count2.get(key))
        }
        else if (count1.get(key) && count2.get(key) - count1.get(key) > 0){
            diff2.set(key, (count2.get(key) - count1.get(key)))
        }
    })
    console.log("diff1",diff1)
    console.log("diff2",diff2)
    
    var tot_dif = new Map();
    
    diff2.forEach((value,key)=>{
        tot_dif.set(key,diff2.get(key))
    })
    
    diff1.forEach((value,key)=>{
        if (!tot_dif.get(key)){
            tot_dif.set(key, diff1.get(key))
        } else {
            tot_dif.set(key,tot_dif.get(key)+diff1.get(key))
        }
    })
    
    var counter = 0
    console.log(tot_dif)
    tot_dif.forEach((value,key)=>{
        counter += value;
    })
    console.log(counter)
    return counter
}
