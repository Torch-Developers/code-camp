/* Create a function to determine whether or not a string is considered a palindrome or not */

/* function looks at two points of the array, start (+1) and ending (-1) and compares them to see if they can make a palindrome */ 
const isPalindrome = (str) =>{
    const strLen = str.length;

    for(let i = 0; i < strLen / 2; i++){
        if(str.charAt(i) !== str.charAt(strLen - i - 1)){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("anna"));//true
console.log(isPalindrome("bob")); //true
console.log(isPalindrome("hello"));//false
console.log(isPalindrome("racecar"));//true