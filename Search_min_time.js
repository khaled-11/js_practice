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
    const map = machines.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        var counter = goal
        var days = 1
        while (counter > 0){
            map.forEach(function (key, value){
                if (days % value == 0){
                    counter -= key
                }
    
            })
    
            // for (var i = 0 ; i < machines.length ; i++){
            //     if (days % machines[i] == 0){
            //         counter --
            //     }
            //     if (counter <= 0){
            //         i = machines.length
            //     }
            // }
            days ++
    
        }
        return(days-1)
    }
    