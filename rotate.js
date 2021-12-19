var t = a[d]
var new_arr =[]
var count = 1
for (var i = 1 ; i < a.length ; i++){
    if (d+count >= a.length){
        var num = (d+count - a.length)
    } else {
        var num = d+count
    }
    new_arr[i] = a[num]
    count++
}
new_arr[0] = a[d]
return new_arr
}