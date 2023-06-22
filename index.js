/*

// VARIABLES
// let, var, const

let name = "collin";

name = "vince";

console.log(name); // console.log() Prints something to the console
console.log("hello how is it going?");
console.log("Im ready to go");

const thing = "hey"; // '' creates a string
console.log(thing);
// now thing can only mean hey

/* adding two strings;
concatenation*/

// console.log(thing + " " + "pineapple");

//commas also make spaces

//console.log(thing, "me");

// const nam = "pizza";
// const topping = "bell peppers";

//console.log(nam, topping);

// TEMPLATE LITERALS
/*these make it so that you can add different variables and turn them all into a string
 */
// console.log(`${nam} ${topping}`);

//console.log("string" + 1);

// console.log("string" + "1");

/* both console.log("string" + 1); and console.log("string" + "1"); will log string1 to
the console because it will convert that number into a string */

//console.log(typeof   ) will tell you in the console what the thing after type of is to the console; typeof '1' will say string bc '1' is a string

// booleans
// false, undefined, null, 0
// console.log(Boolean(nam)); //this is true because nam exists

// console.log(Boolean(0)); // 0 is false

// let prompt1 = prompt("what is your name");
// console.log(prompt1);
// let whereDidHeGo = prompt("Where Did He Go?"); //whereDidHeGo is in camelcase
// console.log(`Hello, ${prompt1} went to ${whereDidHeGo}`);

// alert(`Hello, ${prompt1} went to ${whereDidHeGo}`);
//sends an alert, so you no longer need the console

let prompt1 = prompt("What is your name?");
let yourAge = prompt("In only numbers, How many years old are you?");
let yourHobbie = prompt("What is your favorite hobbie?");
console.log(
  `Hello, my name is ${prompt1}. I am ${yourAge} years old and my favorite hobbie is ${yourHobbie}`
);
alert(
  `Hello, my name is ${prompt1}. I am ${yourAge} years old and my favorite hobbie is ${yourHobbie}`
);
