/*
It is New Year's Day and people are in line for the 
Wonderland rollercoaster ride. Each person wears 
a sticker indicating their initial position in 
the queue from 1 to n. 
Any person can bribe the person directly in front of 
them to swap positions, but they still wear their original 
sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place 
to get to a given queue order. 
Print the number of bribes, or, if anyone has bribed 
more than two people, print Too chaotic.

Brain Storm:
Start from end and check the item position.
If it the right position, check the two before.
If no possible bribes, terminate and use boolean.
*/

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    var count = 0 ;
    var temp;
    var result = true
    for (var i = q.length-1 ; i > 0 ; i--){
        if (q[i] != (i+1)){
            if (i-1 >= 0 && q[i-1] == i+1){
                count ++
                temp = q[i]
                q[i] = q[i-1]
                q[i-1] = temp
            } else if (i-2 >= 0 && q[i-2] == i+1){
                count = count+2
                q[i-2] = q[i-1]
                q[i-1] = q[i]
                q[i] = i+1
            } else {
                result = false
                i = 0
                break;
            }
        }
    }
    if (result){
        console.log(count)
    } else {
        console.log("Too chaotic")
    }
}