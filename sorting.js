/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            var temp;
            if (a[j] > a[j + 1]) {
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                count ++;
            }
        }
    }
    // print results
    console.log("Array is sorted in", count, "swaps.")
    console.log("First Element:", a[0])
    console.log("Last Element:", a[a.length-1])
}



/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    // Function to quick sort the array
    function quickSortBasic(array) {
        if(array.length < 2) {
            return array;
        }
        var pivot = array[0];
        var lesserArray = [];
        var greaterArray = [];
        for (var i = 1; i < array.length; i++) {
            if ( array[i] > pivot ) {
            greaterArray.push(array[i]);
            } else {
            lesserArray.push(array[i]);
            }
        }
        return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray))
    }

    // OR 
    // prices.sort((a,b)=>{
    //     return a-b
    // })

    // counter and sorting the array
    prices = quickSortBasic(prices)
    var count = 0
    
    // loop over the sorted array
    for (var n = 0 ; n < prices.length ; n++){
        k = k - prices [n]
        count++
        if (k <= 0){
            count --
            break;
        }
    }
    return(count)
}


// sort by score then name
function main() {
    // Enter your code here
    // new array and save input
    var arr = []
    for (var i = 1 ; i < inputLines.length ; i++){
        arr[arr.length] = inputLines[i]
    }
    // temp var for swap
    var temp
    // Sort by score
    for (var j = 0 ; j < arr.length ; j++){
        for (var k = 0 ; k < arr.length -1 ; k++){
            var sp1 = arr[k].split(" ")[1]
            var sp2 = arr[k+1].split(" ")[1]
            if (parseInt(sp1) < parseInt(sp2)){
                temp = arr[k]
                arr[k]= arr[k+1]
                arr[k+1] = temp
            }
        }
    }
    // Sort by name
    for (var o = 0 ; o < arr.length ; o++){
        for (var t = 0 ; t < arr.length-1 ; t++){
            var spp1 = arr[t].split(" ")[1]
            var spp2 = arr[t+1].split(" ")[1]
            var spp3 = arr[t].split(" ")[0]
            var spp4 = arr[t+1].split(" ")[0]
            if (parseInt(spp1) == parseInt(spp2)){
                if (spp3 > spp4){
                    temp = arr[t]
                    arr[t]= arr[t+1]
                    arr[t+1] = temp
                }
            }
        }
    }
    
    // print the result array
    for (var p = 0 ; p < arr.length ; p++){
        console.log(arr[p])
    }
}