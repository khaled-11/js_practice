/*
Lena is preparing for an important coding competition 
that is preceded by a number of sequential preliminary 
contests. Initially, her luck balance is 0. 
She believes in "saving luck", and wants to check her 
theory. Each contest is described by two integers, L[i] 
and T[i]:

L[i] is the amount of luck associated with a contest. 
If Lena wins the contest, her luck balance will decrease 
by L[i]; if she loses it, her luck balance will increase 
by L[i]. 
T[i] denotes the contest's importance rating. 
It's equal to 0 if the contest is important, and it's 
equal to  if it's unimportant.
If Lena loses no more than k important contests, 
what is the maximum amount of luck she can have after 
competing in all the preliminary contests? This value 
may be negative.

If Lena loses all of the contests, her will be . 
Since she is allowed to lose  important contests, 
and there are only  important contests, she can lose 
all three contests to maximize her luck at .

If k=1, she has to win at least 1 of the 2 important 
contests. She would choose to win the lowest value 
important contest worth 1. Her final luck will be 
8 + 4 - 1 = 8.
*/

/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

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

function luckBalance(k, contests) {
    // Write your code here
    console.log(k)
    var arr = []
    var count = 0
    for (var i = 0 ; i < contests.length ; i ++){
        if (contests[i][1] == 1){
            arr[arr.length] = contests[i][0]
        }
        count += contests[i][0]
    }
    if (k == arr.length){
        return count
    } else {
        // arr.sort(function(a,b){
        //     return a-b
        // })
        arr = quickSortBasic(arr)
        var sum = 0;
        for (i = 0 ; i < arr.length-k ; i++){
            sum += arr[i]
        }
        return(count - (sum*2))
    }
}