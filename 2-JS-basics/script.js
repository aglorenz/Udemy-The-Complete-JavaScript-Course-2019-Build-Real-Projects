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

/*
var massMark = 78.5; // kg
var heightMark = 1.7; // meters
var bmiMark = massMark / heightMark * heightMark;

var massJohn = 68; // kg
var heightJohn = 1.9; // meters
var bmiJohn = massJohn / heightJohn * heightJohn;

var bmiMarkIsHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI = ' + bmiMark);
console.log('John\'s BMI = ', bmiJohn);


console.log('Is Mark\'s BMI higher than John\'s?: ' + bmiMarkIsHigher);

*/

/*********************************
* If / else statements
**********************************/
/*
var firstName = 'John';
var civilStatus = 'single';

// === means 
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78.5; // kg
var heightMark = 1.7; // meters
var bmiMark = massMark / heightMark * heightMark;

var massJohn = 68; // kg
var heightJohn = 1.9; // meters
var bmiJohn = massJohn / heightJohn * heightJohn;

//var bmiMarkIsHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI = ' + bmiMark);
console.log('John\'s BMI = ', bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}

//console.log('Is Mark\'s BMI higher than John\'s?: ' + bmiMarkIsHigher);

*/
    
/*********************************
* Boolean logic
**********************************/
/*
var firstName = 'John';
var age = 19;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}
*/

/*********************************
* Ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink ='juice';
//}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName  + ' drives an uber in Libson');
        break;
    case 'designer':
        console.log(firstName + 'designes beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 31;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

*/

/*********************************
* Truthy and Falsy values
*/

// falsy values: undefined, null, 0, '', NaN (not a number) will evaluate to false in a boolean conditional statement

//truthy value:  all the values that are NOT falsy 

/*
var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// === string type comparison
// == types to not have to match

// equality operators
if (height == '23') {
    console.log('The == does type coercion!'); // converts string to number and then comparison
})

*/

/*********************************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀

*/

var johnGame1 = 89, johnGame2 = 120, johnGame3 = 103;
var mikeGame1 = 116, mikeGame2 = 94, mikeGame3 = 123;
var maryGame1 = 97, maryGame2 = 134, maryGame3 = 105;

var johnTeamAvg = (johnGame1 + johnGame2 + johnGame3) / 3;
var mikeTeamAvg = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
var maryTeamAvg = (maryGame1 + maryGame2 + maryGame3) / 3;

console.log('John\'s team score avg = ' + johnTeamAvg);
console.log('Mike\'s team score avg = ' + mikeTeamAvg);
console.log('Mary\'s team score avg = ' + maryTeamAvg);

switch (true) {
    case johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg:
        console.log('John\'s team wins with avg score of ' + johnTeamAvg);
        break;
    case mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg:
        console.log('Mike\'s team wins with avg score of ' + mikeTeamAvg);
        break;
    case maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg:
        console.log('Mary\'s team wins with avg score of ' + maryTeamAvg);
        break;
    default:
        console.log('Somewhere there is a draw');
}

























