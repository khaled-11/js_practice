/*
A left rotation operation on an array shifts each of 
the array's elements 1 unit to the left. For example, 
if 2 left rotations are performed on array 1 2 3 4 5
then the array would become 3 4 5 1 2
Note that the lowest index item moves to the highest 
index in a rotation. This is called a circular array.

Given an array a of n integers and a number, d,
perform d left rotations on the array. 
Return the updated array to be printed as a single line 
of space-separated integers.
*/

/*
Brain Storm:
Try - New same length array starting from the second then add the first element to the end.
Another try: put the first element and put whatever after then start from zero.
Another try:  Observe the location of each element in the new array.
The first element in the final array is always the [d] element of the original array.
check the rest of the element and put in position after comapring with the length.
*/

function rotLeft(a, d) {
    // Write your code here
    var temp =[]
    temp[0] = a[d]
    for(var i = d ; i < a.length -1 ; i++){
        temp[temp.length] = a[i+1]
    }
    for(i = 0 ; i < d ; i++){
        temp[temp.length] = a[i]
    }
    // for (var i = 1 ; i <= a.length -1 ; i++){
    //     if (d+i >= a.length){
    //        var num = (d+i - a.length)
    //    } else {
    //        var num = d+i
    //    }
    //    temp[i] = a[num]
    //     }
        return temp
    }