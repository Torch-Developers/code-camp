/*
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):
    - ar: an array of integers

*/

/* Parameter ar takes in an array of numbers
* variable numbers was made to equal input array
* sum variable was made to equal 0
* for loop, loops through numbers array and adds indexes to the sum variable
* return the value of sum
 */
const arraySum = (ar) => {
    const numbers = ar;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(arraySum([5, 10]));