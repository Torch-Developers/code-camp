/* String Manipulation Leet Code Question */

var string = ['String', 'Bean', 'Green', 'Team'];
var string2 = "Collin";

const reversal = (str) => {
    var splitString = str.split('');

    var reverseArr = splitString.reverse(); // ['n', 'i', 'l', 'l', 'o', 'C']

    var joinArr = reverseArr.join('');

    return joinArr;
}

console.log(reversal(string2));