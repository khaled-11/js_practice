var input = "aaaaaaaa"

var result = ""

if (input.length == 0 || input == null){
    console.log("")
} else {
    var count = 1;
    for (i=0; i <input.length; i++){
        if (input[i] != input[i+1] || i == input-1){
            result+=`${count}${input[i]}`
            count = 1
        } else {
            count ++
        }
    }
    console.log(result)
}

var st_arr = ["aa","bb","zz","ab","az"]
console.log(st_arr)
st_arr.sort()
console.log(st_arr)
var arr = [6,8,6,5,6,8,33,45,43,22,34]
console.log(arr)
arr.sort(function(a, b) {
    return b -a;
})
console.log(arr)