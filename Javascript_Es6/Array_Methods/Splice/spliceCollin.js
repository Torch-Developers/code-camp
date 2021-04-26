/*  Splice: Adds/Removes elements to/from the array. splice(start, delete, element1, element2, ?, elementn) 
    Splice modifies original array. DOES NOT MAKE A COPY!
*/

// Created an array called grocery list
const groceryList = ["Paper Towels", "Eggs", "Milk", "Butter", "Soda"];

// Created function that adds an element to the new array.
const addElement = (listItem) => {
    let newGroceryList = [];
    // Used concat to create a copy of the original list. So that splice would not modify the original array.
    newGroceryList = newGroceryList.concat(groceryList);
    newGroceryList.splice(2, 0, listItem);
    return newGroceryList;
}

console.log(addElement("pickles"));
console.log(groceryList);
