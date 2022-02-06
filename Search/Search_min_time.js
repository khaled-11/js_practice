/*
You are planning production for an order. You have a 
number of machines that each have a fixed number of 
days to produce an item. Given that all the machines 
operate simultaneously, determine the minimum number of 
days to produce the required order.

For example, you have to produce goal = 10 items. You 
have three machines that take machine = [2,3,2] days to 
produce an item. The following is a schedule of items 
produced:

Day Production  Count
2   2               2
3   1               3
4   2               5
6   3               8
8   2              10

It takes 8 days to produce 10 items using these machines.
*/

   
// Complete the minTime function below.
function minTime(machines, goal) {
    machines.sort()
    // Big Int is the key for JS
    let maxDays = BigInt(machines[machines.length-1] * goal)
    let minDays = BigInt(0)
    var result = BigInt(-1)
    while (maxDays > minDays){
        let mid = BigInt((minDays + maxDays) /BigInt(2))
        let unit = BigInt(0)
        for (let machine in machines){
            unit += mid/BigInt(machines[machine])
        }
        if (unit < goal) {
            minDays = mid+BigInt(1)
            result = mid +BigInt(1)
        } else {
            result = mid
            maxDays = mid
        }
    }
    return result
}
    