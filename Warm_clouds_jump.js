/*
There is a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having 
a number that is equal to the number of the current 
cloud plus  or the player must avoid the thunderheads. 
Determine the minimum number of jumps it will take to 
jump from the starting postion to the last cloud. 
It is always possible to win the game.

For each game, you will get an array of clouds numbered  
if they are safe or  if they must be avoided.

Function Description:
Complete the jumpingOnClouds function in the editor below.
jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers

Returns:
int: the minimum number of jumps required

Brain Storm
Counting minimum jumps
0 0 1 0 0 1 0
First always safe
Always can win (no more than 2 unsafe on the path)
*/
function jumpingOnClouds(c) {
    // Write your code here
    var jumps = 0;
    for (var i = 0 ; i < c.length -1 ; i++){
        if (c[i + 1] == 1){
            jumps ++
            i ++
        } else if (c[i+1] == 0 && c[i+2] == 0){
            jumps ++
            i ++
        } else {
            jumps ++
        }
    }
    return(jumps)
}