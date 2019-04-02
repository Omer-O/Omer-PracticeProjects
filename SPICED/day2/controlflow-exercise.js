
function logType(arg) {
    if (typeof(arg) == "undefined") {
        console.log("undefined!");
    }  else if (arg === null) {
        console.log("null!");
    }  else if (Number.isNaN (arg)) {
        console.log("not a number!");
    } else if (typeof(arg) == "number") {
        console.log(typeof(arg) + "!");
    }  else if (typeof(arg) == "string") {
        console.log(typeof(arg) + "!");
    }  else if (typeof(arg) == "boolean") {
        console.log(typeof(arg) + "!");
    }  else if (typeof(arg) == "function") {
        console.log(typeof(arg) + "!");
    }  else if (typeof(arg) == "object") {
        console.log(typeof(arg) + "!");
    }  else if (Array.isArray (arg)) {
        console.log("array!");
    }  else {
        console.log("I have no idea!");
    }
}

logType();
