const url = require("url");
const querystring = require("querystring");

const input = process.argv[2];
const parseResults = url.parse(input);
const queryValues = querystring.parse(parseResults.query);

console.log("The protocol is ", parseResults.protocol);
console.log("The host is ", parseResults.host);
console.log("The hostname is ", parseResults.hostname);
console.log("The port is ", parseResults.port);
console.log("The pathname is ", parseResults.pathname);
console.log("The query is ", parseResults.query);
console.log("The value of the a parameter is", queryValues.a);
console.log("The value of the b parameter is", queryValues.b);
