
function getCharCount(st){
    var count = new Map()
    for (var i = 0 ; i < st.length ; i++){
        if (count.get(`${st[i]}`)){
            count.set(`${st[i]}`,count.get(`${st[i]}`)+1)
        } else {
            count.set(`${st[i]}`,1)
        }
    }
    return count
}

function makeAnagram(a, b) {
    var count1 = getCharCount(a)
    var count2 = getCharCount(b)
    console.log("count1", count1)
    console.log("count2", count2)

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