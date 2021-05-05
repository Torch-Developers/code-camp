/* 
Function description:
---------------------
Complete the diagonalDifference function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers

Return:
---------------------
int: the absolute diagonal difference
*/


/* 
function diagonal difference takes in an array of integers matrix
Have a variable to hold the arr matrix.
use for loop to loop through values in matrix
return the absolute difference between the sums of the two matrix's two diagnoals as a single integer
*/
const diagonalDifference = (arr) => {
    const newArr = arr;

    let difference1 = 0;
    let difference2 = 0;
    let totalDifference = 0;

    for (let i = 0; i < newArr.length; i++) {
        difference1 += newArr[i][i];
        difference2 += newArr[i][newArr.length - i - 1];
    }
    return totalDifference = Math.abs(difference1 - difference2);
}

console.log(diagonalDifference());