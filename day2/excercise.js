// EXERCISE 1
/*
Write a function named logType that expects a single argument and logs a different string
depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:
"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"function!"
"object!"
"array!"
"I have no idea!"
*/

//define some variabels for test
var obj = {
    name: "Grzegorz",
    age: 18
};
var test;
var array = [];

// the function
function logType(argument) {
    if (argument === null) {
        console.log("null!");
    } else if (Number.isNaN(argument)) {
        console.log("not a number!");
    } else if (Array.isArray(argument)) {
        console.log("array!");
    } else if (
        typeof argument == "undefined" ||
        typeof argument == "number" ||
        typeof argument == "string" ||
        typeof argument == "boolean" ||
        typeof argument == "function" ||
        typeof argument == "object"
    ) {
        console.log(typeof argument + "!");
    } else {
        console.log("I have no idea!");
    }
}

// function logType test:
console.log("EXERCISE 1:");
logType(test);
logType(null);
logType(12345);
logType(NaN);
logType("this is a string");
logType(true);
logType(logType);
logType(obj);
logType(array);

// EXERCISE 2
//------------------------------------------------------------------------------
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};
/*
Then create a new empty object b and use a for..in loop to iterate over all of a's properties.
Give b properties whose names are the values from a and whose values are the property names from a.
The result should be an object that looks like this:
{
    Germany: 'Berlin',
    France: 'Paris',
    USA: 'New York'
}
*/
console.log("\nEXERCISE 2:");
var b = {};
for (var key in a) {
    b[a[key]] = key;
}

console.log(a);
console.log(b);

// EXERCISE 3
//------------------------------------------------------------------------------
// Write a while or for loop that counts down from 10 to 1, logging each number to the console.
console.log("\nEXERCISE 3:");
var i = 10;
while (i > 0) {
    console.log(i--);
}
