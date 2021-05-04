/* String Manipulation Leet Code Question */

const string1 = ['String', 'Bean', 'Green', 'Team'];
const string2 = "Collin";

const reversal = (str) => {
    const splitString = str.split('');
    //const splitString = [...str]; 
    //using spread to split the string into a char array

    const reverseArr = splitString.reverse(); // ['n', 'i', 'l', 'l', 'o', 'C']

    const joinArr = reverseArr.join('');

    return joinArr;
}

console.log(reversal(string2));

for (let i = 0; i < string1.length; i++) {
    console.log(reversal(string1[i]));
}