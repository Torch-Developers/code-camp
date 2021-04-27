/* The JavaScript array map() method calls the specified function for every array element and returns the new array. 
This method doesn't change the original array */


const groceryList = ["Paper Towels", "Eggs", "Milk", "Butter", "Soda"];



// Created function that adds an element to the new array.
const addElement = (listItem) => {

    groceryList.splice(2, 0, listItem)
    return groceryList

}

const newGroceryList = groceryList.map(x => console.log(x))
//console.log(addElement("so"))
console.log(newGroceryList)
