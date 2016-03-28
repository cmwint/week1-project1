//Week 1 - Project 1

// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log("Question 1");

var myName = 'Corinne';
console.log(myName);

//2. Declare a variable called 'name', and then log it to the console.

console.log("Question 2");

var name;
console.log(name);

//3. Declare two variables with number values. 
//   Add, subtract, multiply and divide them.

console.log("Question 3");

var num1 = 4;
var num2 = 10;

console.log(num1+num2);
console.log(num1*num2);
console.log(num1/num2);

//4. Declare two variables with string values. 
//   Create a third variable that concatenates them.

console.log("Question 4");

var string1 = 'ice';
var string2 = 'cream';
var string3 = string1 + ' ' + string2;

console.log(string3);

//5. Add, subract, multiply and divide the strings '5' and '3'. 
//   Observe the results and know how to explain the results if asked.

console.log("Question 5");

var stringNum1 = '5';
var stringNum2 = '3';

//add - strings are concatenated together
console.log(stringNum1+stringNum2);
//subtract - strings are converted to numbers
console.log(stringNum1-stringNum2);
//mutiply - strings are converted to numbers
console.log(stringNum1*stringNum2);
//divide - strings are converted to numbers
console.log(stringNum1/stringNum2);

//6. Create a prompt that asks a user to pick a number. 
//   Then double the answer.

console.log("Question 6");
var reply = prompt('Hey there, good looking stranger! Pick a number please', '');
alert('Your answer doubled: ' + reply*2 );

//7. Create a custom alert.

console.log("Question 7");
alert('I love cats');

//8. Declare three variables called length, width and height. 
//   Calculate area and volume.

console.log("Question 8");

var length = 4;
var width = 6;
var height = 2;

console.log('Area = ' + length*width);
console.log('Volume = ' + length*width*height);

//9. Ask for a user's name, age and city. 
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."

console.log("Question 9");

var userName = prompt('Hi, again! What\'s your name?', '');
var userAge = prompt('How old are you?', '');
var userCity = prompt('Where are you from? Please give your city.', '');
var response = 'My name is ' + userName +'. I\'m ' + userAge +' years old, and I live in ' + userCity + '.';
alert(response);
console.log(response);

//10. Create an alert that uses the response from a prompt.

console.log("Question 10");
