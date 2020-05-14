// * ### Challenge `sayGoodbye`
// * 
// * instructions
// * This function should take an a name as an argument,
// * and return a string that says 'Goodbye, {name}. Have a great day.'
// * 
// * For example, if we invoke `sayGoodbye`
// * passing 'Andy' as the argument,
// * the returned value should look like: 'Goodbye, Andy. Have a great day.'

// methods - functions that belong to the object
//   eat: function(){
//     return `${this.name} likes to eat ${this.favFood}`;
//   }

// function sayGoodbye(name) {
//  return `Goodbye, ${name}. Have a great day.`;

// }

// console.log(sayGoodbye("Andy"));


// ### Challenge `temperatureCtoF`

// * This function should take an a temperature in celsius as an argument,
//  * and return the temperature in fahrenheit, rounded to the nearest whole number. 
//  * 
//  * For example, if we invoke `temperatureCtoF`
//  * passing 24 as the argument,
//  * the returned value should be: 75
//  * 
//  * Hint 1: The formula for converting celsius to fahrenheit is t*9/5 + 32 where t is the temperature in celsius.
//  * Hint 2: There is a very easy way to round numbers in JS. Do a google search to find out how. 

// function temperatureCtoF(tempCel) {
//   let tempFahr = Math.round(tempCel * 9/5 + 32);
//   return tempFahr;

// }

// console.log(temperatureCtoF(21));


/**
 * ### Challenge `temperatureInF`
 * 
 * instructions
 * This function should take an a temperature and a unit (either 'F' or 'C') as arguments,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureInF`
 * passing 88, 'F' as the arguments,
 * the returned value should be: '88F'
 * 
 * If we invoke `temperatureInF`
 * passing 24, 'C' as the arguments,
 * the returned value should be: '75F'
 * 
 * (32°F − 32) × 5/9 = 0°C
 *  return `${this.name} likes to eat ${this.favFood}`;
 * 
 * Hint: You can call your `temperatureCtoF` function from inside `temperatureInF`.
*/

// function temperatureInF(temp, unit) {
//   if (unit === 'C') {
//     return Math.round(temp * 9 / 5 + 32) + 'F';
//   } else {
//     return Math.round(temp) + 'F';
//   }

// }

// console.log(temperatureInF(88, 'F'));


// * ### Challenge `makePersonObject`
// * 
// * @instructions
// * This function should take an id, a name and an email as arguments,
// * and return an object with `id`, `name` and `email` properties.
// * 
// * For example, if we invoke `makePersonObject`
// * passing 5, 'Leia' and 'leia@leia.com' as arguments,
// * the returned value should look like:

// * @instructions
//  * This function should take an id, a name and an email as arguments,
//  * and return an object with `id`, `name` and `email` properties.
//  * 
//  * For example, if we invoke `makePersonObject`
//  * passing 5, 'Leia' and 'leia@leia.com' as arguments,
//  * the returned value should look like:
//  * {
//  *   id: 5,
//  *   name: "Leia",
//  *   email: "leia@leia.com",
//  * }
// */
// function makePersonObject(/* code here */) {
//   /* code here */
// }


// const personObject {
//    id: 5,   
//    name: "Leia",
//    email: "leia@leia.com",
// }



// function makePersonObject(id, name, email) {
//   const personObject = {id: id, name: name, email: email }
//   return personObject;

// }

// console.log(makePersonObject(5, 'Leia', 'leia@leia.com'));
// console.log(personObject);

// const newObject = makePersonObject(5, 'Leia', 'leia@leia.com');
// console.log(newObject);


// * ### Challenge `getName`
// * 
// * @instructions

// Create a personObject with these varaibles.  
// { id: 1, name: 'Leia', email: 'leia@leia.com` }
// Pass the object into a function
// Return string that says " whatever "

// * This function takes as its only argument
// -- take in an object
// * an object containing a `name` property,
// * and return a string that reads `Hello, my name is {name}`,
// * where `{name}` is the name stored in the object.
// * 
// * For example, if we invoke `getName`
// * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
// * the returned value should look like `Hello, my name is Leia`.
// */


// const personObject = {
//   id: 1, 
//   name: 'Leia', 
//   email: 'leia@leia.com',
// }
 
// function getName(personObject) {
//   return `Hello, my name is ${personObject.name}`;
 
// }

// console.log(personObject.name);

// const newObject = getName(personObject);
// console.log(newObject);


// * ### Challenge `appleIndex`
// * 
// * @instructions
// * This function takes as its only argument an array 
// * containing strings,
// * and returns the index in the array of the string 'apple'.
// * 
// * You may assume the string 'apple' will appear exactly 
// * once in the array.
// * 
// * For example, if we invoke `appleIndex`
// * passing in [ 'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
// * the returned value should be: 2.

// ** how it should be written

// Loop over each item in the array
// check to see if the current item is an apple  
// If item is an apple return the current index
// */


// const fruit = [ 'orange', 'grape', 'apple', 'banana', 'mango' ];


//   function appleIndex() {
//     return `${fruit[i].appleIndex}`
    
 
// }


// console.log(appleIndex);


// Data from file 
// var data = require('data/inventory.js');

var inventory = [

  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
  { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
  { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
  { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
  { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
  { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
  { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
  { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
  { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
  { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
  { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
  { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
  { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
  { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
  { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
  { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
  { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
  { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
  { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
  { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
  { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
  { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
  { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
  { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
  { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
  { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
  { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
  { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
  { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }

]

/**
  * ### Example Array Challenge:
  * 
  * instructions
  * get3rdCar() should return the string `The is a Land Rover Defender Ice Edition`
  * 
  *
  * NOTE: This example has been completed for you.
**/

// function get3rdCar(inventory) {
//   const the3rd = inventory[2];
//   return `The is a ${the3rd.car_make} ${the3rd.car_model}`
// }

// console.log(get3rdCar(inventory));


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(inventory, index) {
  /* code here */
}


