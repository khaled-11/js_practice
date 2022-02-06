/*
Perform q queries where each query consists of some 
integer string s. For each query, print whether or 
not the string is beautiful on a new line. 
If it is beautiful, print YES x, where X is the 
first number of the increasing sequence. 
If there are multiple such values of X, choose 
the smallest. Otherwise, print NO.
*/


/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    for (let i = 1 ; i <= s.length/2 ; i++){
        let n = s.substr(0,i)
        let n2 = n
        let a = BigInt(n)
        while (n.length <= s.length) {
            n2 += `${++a}`
            if (n2 !== s.substr(0, n2.length)){
                break
            } 
            if (n2 === s){
                console.log(`YES ${n}`)
                return
            }
        }
    }
    console.log("NO")
}
