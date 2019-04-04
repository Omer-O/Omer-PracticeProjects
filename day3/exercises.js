// 1) Write a function that takes any number of numbers as parameters and returns the sum of those numbers.

function sum() {
    var sum = 0;
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// exercise 1 test:
console.log("\nExercise 1 test:");
console.log(sum(5, 10));
console.log(sum(5, 10, 15));
console.log(sum(5, 10, 15, 100, 200));

/*
 2) Write a function that takes another function as a parameter.
It should wait 1.5 seconds and then run the function that was passed in.
*/
function waitThenRun(callback) {
    setTimeout(callback, 1500);
}

//test
console.log("\rExercise 2 test (delayed):");
waitThenRun(function() {
    console.log("Hello!");
}); // logs 'Hello!' 1.5 seconds later

waitThenRun(function() {
    console.log("Goodbye!");
}); // logs 'Goodbye!' 1.5 seconds later

/*
3) Write a function that expects a number as a parameter.
If the value that is passed in is less than 0, equal to 0,or not a number,
the function should   return the string 'ERROR'. If the number that is passed in
is greater than or equal to 1000000 it should simply return the number.
Otherwise it should multiply the number by 10 however many times it takes
to get a number that is greater than or equal to 1000000 and return that.
*/

function million(number) {
    if (number <= 0 || isNaN(number)) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        while (number < 1000000) {
            number *= 10;
        }
        return number;
    }
}

console.log("\rExercise 3 test:");
console.log(million(12312));

/*
BONUS) Write a function that returns a function that can be called repeatedly and passed a number each time.
Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls.
That is, it should return the sum of all the numbers that were ever passed to it.
*/

function getTotaler() {
    var globalVar = 0;
    return function(number) {
        globalVar += number;
        console.log(globalVar);
        return globalVar;
    };
}

console.log("\rBonus exercise test:");
var totaler = getTotaler();
totaler(1); //1
totaler(2); //3
totaler(5); //8
totaler(2); // an other test
