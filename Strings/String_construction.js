/*
Amanda has a string of lowercase letters that she wants 
to copy to a new string. She can perform the following 
operations with the given costs. She can perform them 
any number of times to construct a new string p:

Append a character to the end of string p at a cost of 1 dollar.
Choose any substring of r and append it to the end of p at no charge.


*/


function stringConstruction(s) {
    // Write your code here
    var s_map = new Map()
    var cost = 0
    var cost2 = 0
    for (var i = 0 ; i < s.length ; i++){
        if(s_map.get(s[i])){
            s_map.set(s[i],s_map.get(s[i])+1)
        } else {
            s_map.set(s[i],1)
        }
    }
    console.log(s_map)
    s_map.forEach(function(value,key){
        cost ++
    })
    console.log(cost,cost2)
    return cost
    //return [...new Set(s)].length
}