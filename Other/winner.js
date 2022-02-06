let c1 = ["apple", "banana", "orange" , "lemon"]
let c2 = ["apple", "banana", "juice", "lemon"]
let c3 = ["lemon", "banana", "apple"]
let c4 = ["banana", "lemon", "orange"]
let win_list = [["apple", "banana"],["anything"], ["lemon"]]

console.log(check(c1,win_list))
console.log(check(c2,win_list))
console.log(check(c3,win_list))
console.log(check(c4,[]))

function check(c,win_list){
    // Loop over the customer shopping list
    // Loop over the winning list
    // Compare and catch the first matching item or "anything"
    // Continue to the loop and validate the rest
    if (win_list.length == 1){
        return ("winner")
    }
    let one_list = []
    for (let i = 0 ; i < win_list.length ; i++){
        for (let j = 0 ; j < win_list[i].length; j++){
            one_list[one_list.length] = win_list[i][j]
        }
    }

    let st 
    for (let i = 0 ; i < c.length ; i++){
        for (let j = 0 ; j < one_list.length ; j++){
            if(c[i] === one_list[j] || one_list[j] === "anything"){
                st = true
                i++
            } else {
                if (st){
                    return "not winner"
                }
            }
        }
    }
    return ("winner")
}