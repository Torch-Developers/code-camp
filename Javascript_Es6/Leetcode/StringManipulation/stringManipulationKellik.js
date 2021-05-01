/* String Manipulation Leet Code Question */


var string1 = 'String';
var string2 = ['String', 'Bean', 'Green', 'Team'];


// # Reverse a string

// string1.substr(1);
// string1.charAt(0);
// console.log(string1.substr(1));
// console.log(string1.charAt(0));

const reverseString = (string) => {
    
    if(string === ""){
        return "";
    }else{

        return reverseString(string.substr(1)) + string.charAt(0);
    }

    
}
const reverseStringArray = (string) => {
    
    if(string === ""){
        return "";
    }else{

        return reverseString(string.substr(1)) + string.charAt(0);
    }

    
}

console.log(reverseString(string1))
