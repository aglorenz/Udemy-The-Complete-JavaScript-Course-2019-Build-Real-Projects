/*********************************
* Variables and data types
**********************************/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

var job
console.log(job);

job = 'Teacher';
console.log(job)

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;   // can't use reserved words
*/

/*********************************
* Variable mutation and type coercion
**********************************/
/*
var firstName = 'John';
var age = 28;

// Type coercion example:  age is converted to a 
// string automatically so these can be joined.
// during output
console.log(firstName + ' ' + age);

// declare all vars on the same line, then 
// assign the values on separate lines. It looks
// cleaner
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';

job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + ' ' + lastName);
*/

/*********************************
* Basic Operators
**********************************/

/*
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math ooperators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/*********************************
* Operator precedence
**********************************/
/*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
// use precedence table on 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
varisFullAge = now - yearJohn >= fullAge;
console.log(varisFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple assignments
var x, y;

// assignment goes from right to left, hence
// y = 26, they x = y
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// more operators
x *=2;
console.log(x);
x += 10;
console.log(x);

// these all mean the same thing
//x = x + 1;
//x += 1;
x--;
console.log(x);

*/

/*********************************
* CODING CHALLENGE 1
**********************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var massMark = 78.5; // kg
var heightMark = 1.7; // meters
var bmiMark = massMark / heightMark * heightMark;

var massJohn = 68; // kg
var heightJohn = 1.9; // meters
var bmiJohn = massJohn / heightJohn * heightJohn;

var bmiMarkIsHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI = ' + bmiMark)
console.log('John\'s BMI = ', bmiJohn)


console.log('Is Mark\'s BMI higher than John\s?: ' + bmiMarkIsHigher);















