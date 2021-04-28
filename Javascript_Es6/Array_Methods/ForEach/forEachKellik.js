/* forEach Applies a function on all items in an array, good for iterating through arrays */

const paintColors = ["Brown", "White", "Tan", "Red"];


const negativeColors = (color) =>{
    switch(color){
        case "Brown":
            return "Dark Blue";
            break;
        case "White":
            return "Black";
            break;
        case "Tan":
            return "Bright";
            break;
        case "Red":
            return "Yellow";
            break;
    }

}
console.log(negativeColors('Brown'))
//paintColors.forEach(x => console.log(x))
const newP = []

paintColors.forEach(x => {
    
    newP.push(negativeColors(x))


})

console.log(newP)




