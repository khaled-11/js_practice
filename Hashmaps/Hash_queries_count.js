/*
You are given q queries. Each query is of the form 
two integers described below:
1 x -  : Insert x in your data structure.
2 y -  : Delete one occurence of y from your data structure, if present.
3 z -  : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries
of size q where queries[i][0] contains the operation, 
and queries[i][0] contains the data element.
///////////////////////////////////////////////
Brain Storm
Iterate the array and add the occurance in a map.
Create Answer array to add the result.
If the value is 2, substract one from the occurance value in the map.
If the value is 3, check the map and append the result to the answer.
*/
// Complete the freqQuery function below.
function freqQuery(queries) {
    var occ_map = new Map()
    var answer = []
    for (var i = 0 ; i < queries.length ; i++){
        if (queries[i][0] == 1 && !occ_map.get(queries[i][1])){
            occ_map.set(queries[i][1], 1)
        } else if (queries[i][0] == 1 && occ_map.get(queries[i][1])){
            occ_map.set(queries[i][1], occ_map.get(queries[i][1]) + 1)
        } else if (queries[i][0] == 2 && occ_map.get(queries[i][1])){
            occ_map.set(queries[i][1], occ_map.get(queries[i][1]) - 1)
        } else if (queries[i][0] == 3){
            var state = false
            occ_map.forEach(function(value, key) {
                if (value == queries[i][1]){
                    state = true
                }
            })
            if (state){
                answer[answer.length] = 1
            } else {
                answer[answer.length] = 0
            }   
        }
    }
    return answer
}