//Exercise 1:
// Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:
// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"

function logType(arg) {
  if (typeof arg == "undefined") {
    console.log("undefined!");
  } else if (arg === null) {
    console.log("null!");
  } else if (Array.isArray(arg)) {
    console.log("array!");
  } else if (Number.isNaN(arg)) {
    console.log("not a number!");
  } else if (typeof arg == "number") {
    console.log(typeof arg + "!");
  } else if (typeof arg == "string") {
    console.log(typeof arg + "!");
  } else if (typeof arg == "boolean") {
    console.log(typeof arg + "!");
  } else if (typeof arg == "function") {
    console.log(typeof arg + "!");
  } else if (typeof arg == "object") {
    console.log(typeof arg + "!");
  } else {
    console.log("I have no idea!");
  }
}

logType();
