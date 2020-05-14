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
