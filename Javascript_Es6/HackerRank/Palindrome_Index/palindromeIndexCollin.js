/* Given a string of lowercase letters in the range ascii[a-z],
determine the index of a character that can be removed to make the string a palindrome.
Input Format:
--------------
The first line contains an integer q, the number of queries.
Each of the next q lines contains a query string s.
 * Complete the 'palindromeIndex' function below.
 * Palindrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
*/

/* strLen is the length of string str
* Returns boolean value if string is a palindrome or not
*/
const isPalindrome = (str) => {
    let strLen = str.length;

    for (let i = 0; i < strLen / 2; i++) {
        if (str.charAt(i) !== str.charAt(strLen - i - 1)) {
            return false;
        }
    }
    return true;
}

/* function accepting the string.
* index is the default set to -1 if palidrome is already present
* sLen contains the length of the string s
* first if statement in for loop checks the first char of the string and comparing it to the last char of the string (sLen - i - 1).
* the second if statement checks if i is less than length of string s. if it is, use funtion (isPalindrome) to check if it is a palindrome
*/
const palindromeIndex = (s) => {
    let index = -1;

    const sLen = s.length;

    for (let i = 0; i < sLen / 2; i++) { // We divide the length by two because we are looking at the start and the end of the string and trying to comapre the two. 
        if (s.charAt(i) !== s.charAt(sLen - i - 1)) {

            if (i + 1 < sLen) {
                if (isPalindrome(s.substring(i + 1, sLen - i))) {
                    return i; //remove char from front if it makes it a palidrome
                }
                return sLen - i - 1; // the char from the right side if removed will return and make it a palidrome.
            }
        }
    }

    return index;

}



console.log(palindromeIndex("aa"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaab"));