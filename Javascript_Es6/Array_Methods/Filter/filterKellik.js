/*Filter Function for Arrays 	
This method returns the new array, 
which contains the elements that pass 
the provided function conditions.*/


/* PSEUDO CODE
Create a object cars with array of objects
include colors,name,price,model
return only blue cars using filter array method
*/ 

const cars = [
    {
        "car_name": "Honda",
        "car_model": 2014,
        "car_color": "Yellow",
        "car_price": 25000
    },
    {
        "car_name": "Mustang",
        "car_model": 2021,
        "car_color": "Blue",
        "car_price": 30000
    },
    {
        "car_name": "Dodge",
        "car_model": 2018,
        "car_color": "Blue",
        "car_price": 25000
    },
    {
        "car_name": "Tesla",
        "car_model": 2021,
        "car_color": "Black",
        "car_price": 50000
    },

];

/* KELLIK FUNCTION 

CAR OBJECTS 
*/
// const cars = [  

//     {name: "Honda", color: "Blue"},
//     {name: "Buick", color: "Black"},
//     {name: "Trash Charger", color: "Red"},
//     {name: "Jeep", color: "Orange"}

// ];




/* FILTER FUNCTION

filtering array of objects to return objects that have the car color blue */

const viewBlueCars = cars.filter((car) => {
    return car.car_color === "Blue";
    
});

/* printing bluecar function in JSON format(json string) */

console.log(JSON.stringify(viewBlueCars, null, 2))



