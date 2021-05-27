/* Reverse and array without using the reserve method for arrays
 * I want to use the In Place Reserse algorithm to achieve this.
 * Benefits of using in place reverse algorithm is less memory because another array is not created to do this.
 * Time complexity of 0(n/2) with in place reverse.
*/

const reverseArray = (arr, size) => {
    let temp;

    for(let i = 0; i < size / 2; i++){
        temp = arr[i];
        arr[i] = arr[size - i - 1];
        arr[size - i - 1] = temp;
    }

    return console.log("Here is your reversed array: " + arr);
}

const nums = [1 , 2, 3 , 4 , 5 ,6 ,7, 8, 9, 10];

console.log("Original Array: " + nums);

reverseArray(nums, nums.length);