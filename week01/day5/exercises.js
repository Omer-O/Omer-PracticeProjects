/*
Exercise 1
Write a constructor called Rectangle that accepts two numbers (width and height) as parameters.
Rectangle instances should have a method called getArea that returns the instance's
width multiplied by its height. Write another constructor called Square that accepts one number
(which will serve as both width and the height) as a parameter.
Instances of Square should also have a getArea method but you should not rewrite the getArea
function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.
*/

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Squere(n) {
    this.width = n;
    this.height = n;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Squere.prototype = Object.create(Rectangle.prototype);

// Test
console.log("\nExercise 1:");
var square = new Squere(4);
console.log(square.getArea()); //16

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20

/*
Exercise 2
Write a function called invertCase that expects a string as a parameter.
This function should return a new string with all the same characters as the string that
was passed in but with the cases of the alphabetic characters switched.
Uppercase characters should become lowercase and lowercase letters should become uppercase.
Characters that are not alphabetic should not change. String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy here.
*/

function invertCase(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log("\nExercise 2:");
var testSTring = "this IS a TEST of INVERTING **!!?{}32452345";
console.log(testSTring);
console.log(invertCase(testSTring));

/*
Bonus Exercise
Write a constructor called Countdown that accepts a single argument - the number of seconds to count down.
It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts,
it should count down to zero starting with the number that was passed to the constructor and logging
each number to the console with a one second delay.
*/

function Countdown(arg) {
    var temp = this;
    this.time = arg;
    this.start = function() {
        if (temp.time >= 0) {
            console.log(temp.time--);
            setTimeout(temp.start, 1000);
        }
    };
}

console.log("\nBonus exercise:");
var test = new Countdown(8);
// console.log("This is contdown.start method (debuging): \n", test.start + " ");
test.start();
