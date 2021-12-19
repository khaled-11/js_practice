/*
You are given an array and you need to find number of 
tripets of indices (i,j,k) such that the elements at those 
indices are in geometric progression for a given common 
ratio r and i < j < k.

*/


// Complete the countTriplets function below.
function countTriplets(arr, r) {
    var count = 0
    const r_map = new Map()
    const doubles_map = new Map()
    for (let i = arr.length ; i >= 0  ; i--){
        var a = arr[i]
        var ar = a*r
        var ar2 = ar * r
        var pair = `${ar}, ${ar2}`
        if (doubles_map.get(pair)){
            count += doubles_map.get(pair)
        }
        
        let doub = `${a}, ${ar}`;
        if (!doubles_map.get(doub)){
            doubles_map.set(doub,0)
        }
        
        if (!r_map.get(ar)){
            doubles_map.set(doub, (doubles_map.get(doub)))
        } else {
            doubles_map.set(doub, (doubles_map.get(doub) + r_map.get(ar)))
        }

        if(r_map.get(a)){
           r_map.set(a,r_map.get(a)+1) 
        } else{
          r_map.set(a,1)  
        } 

    }
    return count
}