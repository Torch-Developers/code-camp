/*
Function Description:
---------------------
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):
int ar[n]: an array of integers.

Return:
----------------------
long: the sum of all array elements
*/

/*
aVeryBigSum will take in a long_integer_array as the parameter and return a long integer of the sum of the array
-----------
should loop through long array
have a variable (sum) adding the indices of the array
return the value of the variable sum
*/
const aVeryBigSum = (ar) => {
    const bigArr = ar;

    let sum = 0;

    for (let i = 0; i < bigArr.length; i++) {
        sum += bigArr[i];
    }
    return sum;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));