/*
Red John has committed another murder. 
This time, he doesn't leave a red smiley behind. 
Instead he leaves a puzzle for Patrick Jane to solve. 
He also texts Teresa Lisbon that if Patrick is successful, 
he will turn himself in. The puzzle begins as follows.

There is a wall of size 4xn in the victim's house. 
The victim has an infinite supply of bricks of size 
4x1 and 1x4 in her house. There is a hidden safe 
which can only be opened by a particular configuration 
of bricks. First we must calculate the total number 
of ways in which the bricks can be arranged so that 
the entire wall is covered. The following diagram 
shows how bricks might be arranged to cover walls 
where 1 <= n <= 4:
*/


/*
 * Complete the 'redJohn' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function getPrime(n){
    let count = BigInt(0)
    let primes = []
    for (let i = 0 ; i <= n ; i++){
        primes[i] = true
    }

    for (let p = 2 ; p*p <= n ; p++){
        if (primes[p] == true){
            for (let i = p*2 ; i <= n; i+=p){
                primes[i] = false
            }
        }
    }  
    
    for (let i = 2 ; i <= n ; i++){
        if (primes[i] == true){
            count ++
        }
    }  
    return count
}

function getWays(n){
    if (n > 0){
        if (n == 1 || n == 2 || n == 3){
            return 1
        }
        if (n == 4){
            return 2
        }
        return (getWays(n-1) + getWays(n-4))
    } else {
        return 0
    }
}

function redJohn(n) {
    // Write your code here
    let ways = getWays(n)
    return(getPrime(ways))
}