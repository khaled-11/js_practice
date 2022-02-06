/*
Comparators are used to compare two objects. 
In this challenge, you'll create a comparator and 
use it to sort an array. The Player class is provided 
in the editor below. It has two fields:

1- name: a string.
2- score: an integer.

Given an array of  Player objects, write a comparator 
that sorts them in order of decreasing score. 
If  or more players have the same score, sort those 
players alphabetically ascending by name. To do this, 
you must create a Checker class that implements the 
Comparator interface, then write an int compare
(Player a, Player b) method implementing the Comparator.
compare(T o1, T o2) method. In short, when sorting in 
ascending order, a comparator function returns -1 if ,  
if a<b, and 1 if a>b
Declare a Checker class that implements the comparator 
method as described. It should sort first descending 
by score, then ascending by name. 
The code stub reads the input, creates a list of 
Player objects, uses your method to sort the data, 
and prints it out properly.
*/

function main() {
    // Enter your code here
    // Classes (TS)

    // class Player {
    //     name: string;
    //     score: number;
    //     }
    //     const count = parseInt(readLine());
    //     var value;
    //     var playersArray:Player[] = [];
        
    //     while (value = readLine()) {
    //         value = value.split(' ');
    //         var entry = new Player();
    //         entry.name = value[0];
    //         entry.score = parseInt(value[1]);
    //         playersArray[playersArray.length] = entry;
    //     }
        
    //     playersArray.sort((a:Player, b:Player) => {
    //         if (a.score === b.score) {
    //             return b.name.localeCompare(a.name)*(-1);
    //         }
    //         if (a.score > b.score) {
    //             return -1;
    //         } else if (a.score < b.score) {
    //             return 1;
    //         } else {
    //             return 0;
    //         }
    //     });
        
    //     for (var i=0; i<count; i++) {
    //         console.log(`${playersArray[i].name} ${playersArray[i].score}`);
    //     }
      
    // Arrays (TS/JS)
    var count = parseInt(readLine())
    var arr = []
    var temp
    arr[arr.length] = readLine()
    for (var i = 1 ; i < count ; i++){
        arr[arr.length] = readLine()
        if (parseInt(arr[i].split(" ")[1]) > parseInt(arr[i-1].split(" ")[1])){
            temp = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = temp
        }
    }
    
    for (i = 0 ; i < arr.length-1 ; i++){
        for (var j = 0 ; j < arr.length-1 ; j++){
            var sp1 = arr[j].split(" ")[1]
            var sp2 = arr[j+1].split(" ")[1]
            var spp3 = arr[j].split(" ")[0]
            var spp4 = arr[j+1].split(" ")[0]
            if (parseInt(sp1) < parseInt(sp2)){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            } else if (parseInt(sp1) == parseInt(sp2)){
                if (spp3 > spp4){
                    temp = arr[j]
                    arr[j]= arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }
    
    for (i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
    }    
}