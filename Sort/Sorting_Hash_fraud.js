/*
HackerLand National Bank has a simple policy for 
warning clients about possible fraudulent account 
activity. If the amount spent by a client on a particular 
day is greater than or equal to 2X the client's median 
spending for a trailing number of days, they send the 
client a notification about potential fraud. 
The bank doesn't send the client any notifications 
until they have at least that trailing number of prior 
days' transaction data.

Given the number of trailing days and a client's total 
daily expenditures for a period of n days, 
determine the number of times the client will receive 
a notification over all n days.
*/

/*
Arrays option
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
    // Write your code here
    var notice = 0
    var first_m = Math.floor((d-1)/2)
    var second_m = Math.ceil((d-1)/2)
    let index_array = new Array(200).fill(0)
    for (var i = d-1; i >= 0; i--) {
        index_array[expenditure[i]]++
    }
    
    for (i = d; i < expenditure.length; i++) {
        var k = 0, f_m = 0, s_m = 0
        for (var j = 0; k <= first_m; j++){
             k += index_array[j]
             f_m = j
        } 
        k = 0;
        for (j = 0; k <= second_m; j++){
            k += index_array[j]
            s_m = j
        }
        var median = (f_m + s_m) / 2
        if (expenditure[i] >= median * 2){
            notice++  
        } 
        index_array[expenditure[i-d]]--
        index_array[expenditure[i]]++
    }
    return notice
}

/*
Maps option
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function find(map,index) {
    var count = 0;
    for (let i = 0; i <= 200; i++) {
        if (i in map){
            count += map[i];
        }
        if (count >= index){{}
           return i; 
        }
    }
}

function activityNotifications(expenditure, d) {
    // Write your code here
    var freq_map = new Map();
    var notify = 0;
    var d2 = Math.ceil(d/2);

    for (var i = 0; i < expenditure.length - 1; i++) {
        if (expenditure[i] in freq_map) {
            freq_map[expenditure[i]] += 1;
        }
        else {
            freq_map[expenditure[i]] = 1;
        }

        if (i >= d - 1) {
            let median;
            if (d % 2 == 0) {
                median = (find(freq_map,d2) + find(freq_map,d2 + 1)) / 2;
            }
            else {

                median = find(freq_map,d2);
                
            }
            if (expenditure[i+1] >= median * 2) {
                notify++;
            }

            freq_map[expenditure[i - d + 1]] -= 1;
        }
    }
    return notify;
}