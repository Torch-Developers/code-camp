/* forEach Applies a function on all items in an array, good for iterating through arrays */

const paintColors = ["Brown", "White", "Tan", "Red"];


const negativeColors = (color) => {
    switch (color) {
        case "Brown":
            return "Dark Blue";
        case "White":
            return "Black"
        case "Tan":
            return "Bright"
        case "Red":
            return "Yellow"
    }

};

const newP = [];

paintColors.forEach(x => {
    newP.push(negativeColors(x));
});
console.log(newP);
