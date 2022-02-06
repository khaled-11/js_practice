/*
Karl loves playing games on social networking sites. 
His current favorite is CandyMaker, where the goal is 
to make candies.

Karl just started a level in which he must accumulate n 
candies starting with m machines and w workers. 
In a single pass, he can make m*w candies. 
After each pass, he can decide whether to spend some 
of his candies to buy more machines or hire more 
workers. Buying a machine or hiring a worker costs p units, 
and there is no limit to the number of machines he can 
own or workers he can employ.

Karl wants to minimize the number of passes to obtain 
the required number of candies at the end of a day. 
Determine that number of passes.

*/



/*
 * Complete the 'minimumPasses' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER m
 *  2. LONG_INTEGER w
 *  3. LONG_INTEGER p
 *  4. LONG_INTEGER n
 */

function minimumPasses(m, w, p, n) {
    // Write your code here
    let pass=0, min = Math.ceil(n/(m*w)), points=0;
    while(pass < min) {
        let dPass = Math.ceil((p-points)/(m*w));
        pass+=dPass;
        points+=m*w*dPass;
        if (Math.floor(points/p) >= Math.abs(m-w)) {
            points -= Math.abs(m-w) * p;
            m > w ? w = m : m = w;
            let upgrades = Math.floor(points/p);
            if (upgrades > 0) {
                if (upgrades % 2 === 0) {
                    m=w=m+(upgrades/2);
                } else {
                    m=w=m+Math.floor(upgrades/2);
                    m++;
                }
                points -= upgrades * p;
            }
        } else {
            let upgrades = Math.floor(points/p);
            m > w ? w+=upgrades : m+=upgrades;
            points -= upgrades * p;
        }
        let minPass = Math.ceil((n-points)/(m*w));
        if (min > minPass+pass) min = minPass+pass;
    }
    return min;
}