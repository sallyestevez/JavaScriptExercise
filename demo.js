// single line comment

/* block
comment */

// PRINT INFORMATION INSIDE THE CONSOLE //
// console.log("Nico Nico Nii"); //included a string in quotation marks

// POPPING OPEN AN ALERT WINDOW //
// alert("I'll make your heart go Nico Nico Nii");
// alert(5);

// VARIABLE / TYPES //
//what is a variable?
//a place to store data:
//string, integers, floats, boolean

// DEFINING VARIABLES //
// string: uses quotation makrs

var firstName = "Nico";
var lastName = "Yazawa";
var space = " ";

// console.log(firstName);

// CONCATENATING VARIABLES //

// console.log(firstName + " :) " + lastName);
// console.log(firstName, lastName);
// console.log(firstName + space + lastName);
// console.log(firstName + lastName);

// STORING INTEGERS //
var num1 = 5;

// STORING FLOATS //
var num2 = 4.3;
var num3 = 4;

// console.log(num1 + num2 + num3); //does the actual math
// console.log("Output: " + num1 + num2 + num3); //concatenates the string and numbers

// console.log("Output: " + (num1 + num2 + num3)); //use parentheses to group mathematical things

// ARRAYS //
// CREATING ARRAYS //
//Arrays are a collection of multiple items

var firstArray = ["Lil", "Big", "DJ", "Dr.", "Dark", "Mx.", "Tik"];
var secondArray = ["Yeet", "Xan", "Kitten", "Pumpkin", "Tok", "Soup", "Nook"];

// PRINTING ARRAY IN CONSOLE //
// console.log(firstArray);
// console.log(secondArray);

// PRINT ONE ITEM FROM THE ARRAY //
// console.log(firstArray[0]);
// console.log(secondArray[6]);

// LOGIC WITH CONDITIONALS //
// set up control flow with if/else statements
// < or >
// <= or =>

// js accepts equality as == or ===. when you use === you are ensuring true equality
// var num = 12;
//
// if (num == 2) {
//   console.log("You have the correct number!")
// } else if (num > 15) {
//   console.log("Your number is too big.")
// } else {
//   console.log("Please choose another number.")
// }

// FUNCTIONS //
// functions are collections of behaviors or algorithms you can execute using one word
// many functions are built into JavaScript

// random FLOAT from 0-1
// console.log(Math.random());

// random FLOAT from 0-50
// console.log(Math.random() * 50);

// random INTEGER from 0-length of array, giving us an index
var secondArray = ["Animal Crossing", "Zoom Party", "Candy", "Yoga", "Netflix Party", "Genshin Impact", "Bops"];

var randomIndex = Math.floor( Math.random() * secondArray.length);

// console.log(randomIndex);
// console.log(secondArray[randomIndex]);

// Math.floor() always rounds down
// var ourNum = 10.3829431324;
// console.log(Math.floor(ourNum));

// CUSTOM FUNCTIONS //
function sayHello() {
  console.log("Hello");
  console.log("Say hi hi hi hi");
  console.log("Take me high high high high");
}

// CALLING THE FUNCTION //
// sayHello();

// SETTING UP A FUNCTION WITH ARGUMENTS / PARAMETERS //
function addNumber(numberOne, numberTwo){ // parameters are temporary variable names that only exist within this function
  var result = numberOne + numberTwo;
  console.log("Result: " + result);
}

// addNumber(40, 60); //information passed into function is accessed when function is called

// RETURNING VALUES FROM A FUNCTION //
// specifies information that you want returned
function addNumberAndReturn(numberOne, numberTwo){
  return numberOne + numberTwo;
}

// console.log(addNumberAndReturn(400,20));

// LOGICAL OPERATORS //
// larger application of conditions

// create function that acts like a virtual door
// function that contains an if/else statement

function door(num){
  if (num == 0){
    return "Deadass Driveway";
  }
  else if (num == 1){
    return "Haunted Bathroom";
  }
  else if (num == 2){
    return "Spooky Bedroom";
  }
  else if (num == 3){
    return "Creepy Kitchen";
  }
  else if (num == 4){
    return "Boo-sment";
  }
  else if (num == 5){
    return "Acrid Attic";
  }
  else if (num == 6){
    return "Boo-lcony";
  }
  else {
    return "There are only 3 doors!"
  }
}

// console.log(door(1));
// console.log(door(2));
// console.log(door(Math.floor(Math.random() * 6)));
// console.log(door(4));
// console.log(door(8));
// console.log(door(0));
