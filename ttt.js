let arr = [13,8,12,12,10,11,7,15,6]
let k = 2

let arr2 = [9,6,10,7,7,15,8,12]
let k2= 3

let arr3 = [8,9,8,10,9,12,13,12]
let k3= 2

let arr4 = [2,4,1,3]
let k4= 2

let arr5 = [1,2,0,1,2]
let k5= 3

ans(arr,k)
ans(arr2,k2)
ans(arr3,k3)
ans(arr4,k4)
ans(arr5,k5)

function ans (arr, k){
    let ans = 0;
    for (let i = 0 ; i < arr.length-k ; i++){
        if (arr[i] > arr[i+k]){
            ans++
        }
    }
    console.log(ans)
}
