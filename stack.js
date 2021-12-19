var s = "[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}](("

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
    console.log("NO")
} else {
    if (stack.length == 0){
        console.log("YES")

    } else {
        console.log("NO")

    }
}

