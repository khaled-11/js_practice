/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    var stack = []
    var not_match = false
    for (var i = 0 ; i < s.length ; i++){
        if (s[i] == '['){
            stack[stack.length] = ']'
        } else if (s [i] == '{' ){
            stack[stack.length] = '}'
        } else if (s[i] == '('){
            stack[stack.length] = ')'            
        } else if (s[i] == ']' || s [i] == '}' || s[i] == ')'){
            if (s[i] == stack[stack.length-1]){
                stack.length = stack.length-1
            } else {
                not_match = true
                i = s.length
                break;
            }
        }
    }
    if (not_match){
        return("NO")
    } else {
        if (stack.length == 0){
            return("YES")
        } else {
            return("NO")
        }
    }
}


// Queue

function processData(input) {
    //Enter your code here
    var arr = input.split(/\r?\n/)
    var queue = []
    arr.splice(0,1)
    for (var i = 0 ; i < arr.length ; i++){
        if (arr[i][0] == 1){
            queue[queue.length] = arr[i].split(" ")[1]
        } else if (arr[i][0] == 2){
            queue.splice(0,1)
        } else {
            console.log(queue[0])
        }
    }
} 