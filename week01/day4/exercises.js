/*
Exercise 1
Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.
If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.
If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.
*/
function each(obj, callback) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
        }
    } else if (typeof obj === "object") {
        for (var key in obj) {
            callback(obj[key], key);
        }
    }
}

//Exercise 1 test:
console.log("\nExercise 1:");
each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

/*
Exercise 2
Write a function that takes an array as a parameter and returns a new array containing all of the items
that are in the array that was passed in but in reverse order.
Unlike the reverse method that all arrays have, this function should leave the original array unchanged.
*/
function reverseArray(arg) {
    var newArr = [];
    console.log(arg);
    for (var i = arg.length - 1; i >= 0; i--) {
        newArr.push(arg[i]);
    }
    return newArr;
}

console.log("\nExercise 2:");
var arr = ["1", "2", "3", "4", "5", "6"];
console.log(reverseArray(arr));

/*
Exercise 3
Write a function called getLessThanZero that expects an array of numbers to be passed to it and
returns a new array containing only those numbers from the array that was passed in that are less than zero.
*/
function getLessThanZero(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("\nExercise 3:");
console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log(getLessThanZero([1, 2])); //[]
