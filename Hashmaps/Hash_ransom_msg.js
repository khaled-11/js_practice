/*
Harold is a kidnapper who wrote a ransom note, 
but now he is worried it will be traced back to him 
through his handwriting. He found a magazine and wants 
to know if he can cut out whole words from it and use 
them to create an untraceable replica of his ransom note. 
The words in his note are case-sensitive and he must 
use only whole words available in the magazine. 
He cannot use substrings or concatenation to create 
the words he needs.

Given the words in the magazine and the words in the 
ransom note, print Yes if he can replicate his ransom 
note exactly using whole words from the magazine; 
otherwise, print No.
*/

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

/*
Brian Storm:
Arrays and check -- too many words
HashMaps -- read magazine words and add count of each 
word. Then check note words and compare. Retun if NO.
*/
function checkMagazine(magazine, note) {
    // Write your code here
    var mag_words = new Map()
    for(var i = 0 ; i < magazine.length ; i++){
        if(!mag_words.get(magazine[i])){
            mag_words.set(magazine[i],1)
        } else {
            mag_words.set(magazine[i], mag_words.get(magazine[i])+1)
        }
    }
    
    for(i = 0 ; i < note.length ; i++){
        if (!mag_words.get(note[i])){
            console.log("No")
            return;
        } else {
            mag_words.set(note[i], mag_words.get(note[i])-1)
        }
    }
    console.log("Yes")
    return;
}