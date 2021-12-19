/*
Given 3 arrays a,b,c of different sizes, find the number 
of distinct triplets (p,q,r) where p is an element of a, 
written as p (belong to) a, q (belongs to) b, and r =>c, 
satisfying the criteria: p <= qand q >= r.

For example, given a = [3,5,7], b = [3,6], and c = [4,6,9]
we find four distinct triplets: 
(3,6,4),(3,6,6),(5,6,4),(5,6,6).
*/

// Complete the triplets function below.
function triplets(a, b, c) {
    a.sort(function (a,b){
        return a-b
    })
    b.sort(function (a,b){
        return a-b
    })
    c.sort(function (a,b){
        return a-b
    })
    a = [...new Set(a)]
    b = [...new Set(b)]
    c = [...new Set(c)]

    var q = 0, r = 0, ans = 0;
    for(var p = 0; q < b.length; q++) {
        while(a[p] <= b[q]) p++;
        while(c[r] <= b[q]) r++;
        ans += p * r;
    }
    return ans;
    // var a_map = new Map()
    // var b_map = new Map()
    // var c_map = new Map()
    // a.forEach(el => a_map.set(el,1))
    // b.forEach(el => b_map.set(el,1))
    // c.forEach(el => c_map.set(el,1))
    // var count = 0
    // b_map.forEach(function (value, key){
    //     var current = key;
    //     var f_c = 0
    //     var s_c = 0
    //     a_map.forEach(function (value, key){
    //         if (key <= current){
    //             f_c++
    //         }
    //     })
    //     c_map.forEach(function (value, key){
    //         if (key <= current){
    //             s_c++
    //         }
    //     })
    //     // for (var i = key ; i > 0 ; i--){
    //     //     if (a_map.get(i)){
    //     //         for (var j = key ; j > 0 ; j--){
    //     //             if (c_map.get(j)){
    //     //                 count ++
    //     //             }
    //     //         }
    //     //     }
    //     // }
    //     count += f_c * s_c
    // })
    // return(count)
}