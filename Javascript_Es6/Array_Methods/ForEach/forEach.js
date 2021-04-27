/* forEach Applies a function on all items in an array, good for iterating through arrays */

const paintColors = ["Brown", "White", "Tan", "Red"];


const negativeColors = (color) =>{
    switch(color){
        case "Brown":
            color = "Dark Blue"
            break;
        case "White":
            color = "Black"
            break;
        case "Tan":
            color = "Bright"
            break;
        case "Red":
            color = "Yellow"
            break;
    }

}
console.log(negativeColors("Brown"))
//paintColors.forEach(x => console.log(x))
const newP = []

paintColors.forEach(x => {
    
    negativeColors(x)
    newP.push(x)


})

console.log(newP)




