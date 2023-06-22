// // /*

// // // VARIABLES
// // // let, var, const

// // let name = "collin";

// // name = "vince";

// // console.log(name); // console.log() Prints something to the console
// // console.log("hello how is it going?");
// // console.log("Im ready to go");

// // const thing = "hey"; // '' creates a string
// // console.log(thing);
// // // now thing can only mean hey

// // /* adding two strings;
// // concatenation*/

// // // console.log(thing + " " + "pineapple");

// // //commas also make spaces

// // //console.log(thing, "me");

// // // const nam = "pizza";
// // // const topping = "bell peppers";

// // //console.log(nam, topping);

// // // TEMPLATE LITERALS
// // /*these make it so that you can add different variables and turn them all into a string
// //  */
// // // console.log(`${nam} ${topping}`);

// // //console.log("string" + 1);

// // // console.log("string" + "1");

// // /* both console.log("string" + 1); and console.log("string" + "1"); will log string1 to
// // the console because it will convert that number into a string */

// // //console.log(typeof   ) will tell you in the console what the thing after type of is to the console; typeof '1' will say string bc '1' is a string

// // // booleans
// // // false, undefined, null, 0
// // // console.log(Boolean(nam)); //this is true because nam exists

// // // console.log(Boolean(0)); // 0 is false

// // // let prompt1 = prompt("what is your name");
// // // console.log(prompt1);
// // // let whereDidHeGo = prompt("Where Did He Go?"); //whereDidHeGo is in camelcase
// // // console.log(`Hello, ${prompt1} went to ${whereDidHeGo}`);

// // // alert(`Hello, ${prompt1} went to ${whereDidHeGo}`);
// // //sends an alert, so you no longer need the console

// // /* let prompt1 = prompt("What is your name?");
// // let yourAge = prompt("In only numbers, How many years old are you?");
// // let yourHobbie = prompt("What is your favorite hobbie?");
// // console.log(
// //   `Hello, my name is ${prompt1}. I am ${yourAge} years old and my favorite hobbie is ${yourHobbie}`
// // );
// // alert(
// //   `Hello, my name is ${prompt1}. I am ${yourAge} years old and my favorite hobbie is ${yourHobbie}`
// // );
// // */

// // // DATA TYPES AND VARIABLES

// // // CONDITIONALS ////////*****This is where conditionals start */
// // //Conditionals need a Boolean for conditional to start

// // // let x = 1;

// // // console.log(Boolean(x));

// // //conditional operators
// // // ===; known as strict equals makes sure it's true 1 === 1 is true
// // // ==; loose truth, it compares it doesnt matter what data type (string, number, Boolean) it is, checks if value is the same regardless of data type: 1=='1'
// // // <,>, !==(not equal), <=, >=
// // // 1 !== 2; true
// // // 1 >= 1; true

// // // if statement

// // //if (this is true) {then run this}

// // // if ("collin" === "collin") {
// // //   console.log("Hello World");
// // // }

// // //LOGICAL OPERATORS
// // //used to check multiple conditions
// // // || (OR)
// // // && (AND)
// // // ?? (NULLISH)
// // // There's more but these are the basics

// // let x = 0;
// // let y = 1;

// // if (x === 0 && y === 2) {
// //   console.log("im a boss");
// // }

// // if (x === 1 || y === 1) {
// //   console.log("Deisy rules");
// // }

// // // Else; if the statement is false

// // let v = 18;
// // let u = 8;

// // if (v === 9) {
// //   console.log("hello me");
// // } else if (u === 8) {
// //   alert("kk bye");
// // } else {
// //   alert("byeee");
// // }

// // //else if will run if the conditions before it are false and it specifies a new condition

// // let user = "guest";
// // if (user === "admin") {
// //   //redirect to admin page
// // } else if ((user = "user")) {
// //   // redirect to user page
// // } else {
// //   alert("account not found");
// // }

// // let userName = prompt("Enter your name?");

// // if (userName === "collin123") {
// //   alert("logged in!");
// // } else if (userName === "lucy 32") {
// //   alert("logged in!");
// // } else {
// //   alert("No account found");
// // }

// // let randomNumber = Math.random();
// // console.log(randomNumber);
// // // this gives a random number as a decimal (so smaller than 1)
// // let randomNumber = Math.floor(Math.random());
// // console.log(randomNumber);
// // // thiss gives a random number and round it down to zero
//let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);
// // This will give the random decimal * 4 then round it down so you'll get any number under 4 so 0,1,2,or 3

// let arr = ["liv", "kamar", "derrick", "Jimmy"];

// console.log(arr[randomNumber]);
// if (arr[randomNumber] === "liv") {
//   console.log("boot");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("hello");
// } else {
//   console.log("tech you're wrong");
// }

let randomNumber = Math.floor(Math.random() * 11);
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[randomNumber]);
let prompt1 = prompt("I am thinking of a number. Guess a number from 0 to 10.");
if (arr[randomNumber] == prompt1) {
  alert("you are correct");
} else {
  alert(`you are incorrect the answer is ${randomNumber} `);
}
