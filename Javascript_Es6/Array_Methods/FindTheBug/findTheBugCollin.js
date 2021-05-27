/* Purpose of this activity is to find the bug in the code and figure out how to fix it */

//Incorrect
/* The output includes the initial 2 that is in the array. does not get deleted because the length of the array keeps changing as we splice. We want to remove all instances of the item.*/
const findTheBug = () => {
    var array = [1,2,2,3,4,2,5,6,7,8];
    for (var i = 0; i < array.length; i++){
        if(array[i] === 2){
            array.splice(i, 1);
            //console.log(array);
        }
    }
    return(array); // 1,2,3,4,5,6,7,8
}

//Correct solution
/* The reason why is because the length is changing as we were splicing. so going through the array backwords allows us to loop through the array backwards (since indices and length will change as items are removed) and removes the item if it's found.*/
const findTheBug = () => {
    var array = [1,2,2,3,4,2,5,6,7,8];
    for (var i = array.length - 1; i >= 0; i--){
        if(array[i] === 2){
            array.splice(i, 1);
            //console.log(array);
        }
    }
    return(array); // 1,3,4,5,6,7,8
}

console.log(findTheBug());