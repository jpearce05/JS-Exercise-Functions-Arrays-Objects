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
// */


const fruit = [ 'orange', 'grape', 'apple', 'banana', 'mango' ];


  function appleIndex() {
    return `${fruit[i].appleIndex}`
    
 
}


console.log(appleIndex);

