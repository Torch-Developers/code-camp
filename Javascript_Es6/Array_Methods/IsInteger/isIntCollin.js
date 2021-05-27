/* Create a function called isInteger that determines if the parameter x is a integer or not */

//using typeof
const isInteger = (x) => {
    console.log(typeof x);
}

isInteger(2);
isInteger("hello");
isInteger(true);
isInteger("wow");
isInteger(5);

console.log("---------------------------");

//using Number.isInteger for seeing if number is actually an integer.
const isNumInteger = (y) =>{
    console.log(Number.isInteger(y));
}

isNumInteger("hello");
isNumInteger(2);
isNumInteger(0.5);
isNumInteger(5);
isNumInteger(false);