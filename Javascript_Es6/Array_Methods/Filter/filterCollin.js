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

/* FILTER FUNCTION

filtering array of objects to return objects that have the car color blue */

const viewBlueCars = cars.filter((car) => {
    return car.car_color === "Blue";

});

const viewYellowCars = cars.filter((car) => {
    return car.car_color === "Yellow";

});

const viewBlackCars = cars.filter((car) => {
    return car.car_color === "Black";

});

/* printing bluecar function in JSON format(json string) */
console.log("Blue Cars:" + JSON.stringify(viewBlueCars, null, 2));

/* printing yellowcar function in JSON format(json string) */
console.log("Yellow Cars:" + JSON.stringify(viewYellowCars, null, 2));

/* printing blackcar function in JSON format(json string) */
console.log("Black Cars:" + JSON.stringify(viewBlackCars, null, 2));
