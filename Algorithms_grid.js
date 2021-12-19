/*
Given a square grid of characters in the range 
ascii[a-z], rearrange elements of each row alphabetically,
ascending. Determine if the columns are also in ascending 
alphabetical order, top to bottom. 
Return YES if they are or NO if they are not.
*/

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */
function check(array) {
    return array.reduce((r, a, i, { [i - 1]: b }) => a.map((v, j) => i
            ? r[j] && b[j] < v
            : true
    ), []);
}

function gridChallenge(grid) {
    // Write your code here
    // var j = 1, i = 0;
    // grid = grid.map((s) => s.split('').sort().join(''));
    // while(true) {
    //     if(j == grid.length) {
    //         i++;
    //         j = 1;
    //     }
    //     if(i == grid[0].length) return 'YES';
    //     if(grid[j - 1][i] > grid[j][i]) return 'NO';
    //     j++;
    // }
    // return 'YES'  
    
    var arr = []
    var ans = true
    grid.forEach((row, index) => {
        arr[index] = row.split('').sort((a, b) => a.localeCompare(b));
    });
    for (var i = 0 ; i < arr[0].length ; i++){
        var temp = []
        for (var j = 0 ; j < arr.length ; j++){
            temp[temp.length] = arr[j][i]
        }
        for (var k = 0 ; k < temp.length ; k++){
            if (temp[k]> temp[k+1]){
                ans = false
                k = temp.length;
                j = arr.length;
                i = arr[0].length;
            }
        }
    }
    if (ans){
        return "YES"
    } else {
        return "NO"
    }
}