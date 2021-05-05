
/* Given two strings, a & b, that may or may not be the same length, 
determine the number of character deletions required to make a and b anagrams.
Any characters can be deleted from either strings.

ex: if one string contains the letters of the others.

a= bce, b = dbc | anagram = a(bc), b(bc) delete e and d
Delete e from a and f from b so that the remaining strings are cd and dc which are anagrams. This takes 2 character deletions.
*/



const a = 'cde';
const b = 'dcf';


const makeAnagram = (a, b) => {
    a.toLowerCase();
    b.toLowerCase();

    // const aSplit = a.split(''); // ['c','d','e']
    // const bSplit = b.split(''); // ['d','c','f']

    let showDel = 0;

    /* My example */
    // for (let i = 0; i < aSplit.length; i++) {
    //     for (let j = 0; j < bSplit.length; j++) {
    //         if (!aSplit.includes(bSplit[i])) {
    //             console.log("here a:" + aSplit[i]);
    //             aSplit.splice(i, 1);
    //             // bSplit.splice(j, 1);
    //             console.log("this is A: " + aSplit);
    //             // console.log("this is B: " + bSplit);
    //             showDel++;
    //             console.log("A length: " + aSplit.length);
    //             break;
    //         }
    //         if (!bSplit.includes(aSplit[j])) {
    //             console.log("here b: " + bSplit[j]);
    //             bSplit.splice(j, 1);
    //             console.log("this is B: " + bSplit);
    //             showDel++;
    //             console.log("B length: " + bSplit.length);
    //             break;
    //         }
    //     }
    // }

    /* Solution using includes 
    for loop, looping over the string length of string a. 
    If statement checking if string b includes the char at index i within string a. 
    If it does, then we change string b to remove ("replace" - by making it empty) the char that is equal to the one in string a at index i. 
    If string b does not need anymore replacing, increment showDel by 1.
    Take showDel's value and add it with the length of string b.
    Return showDel, which shows the 
    */
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            b = b.replace(a[i], '');
            //console.log(b);
        } else {
            showDel++;
        }
    }
    showDel = showDel + b.length;
    return showDel;
}

console.log(makeAnagram(a, b));