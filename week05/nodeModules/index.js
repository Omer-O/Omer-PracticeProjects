const url = require("url");
const querystring = require("querystring");

const input = process.argv[2];
if (!input) {
    process.exit();
}
const parseResults = url.parse(input);
const queryValues = querystring.parse(parseResults.query);

const parametersArray = [
    "protocol",
    "host",
    "hostname",
    "port",
    "pathname",
    "query"
];

parametersArray.forEach(function(field) {
    console.log(`The ${field} is ${parseResults[field]}`);
});

if (queryValues) {
    for (var n in queryValues) {
        console.log(`The value of the ${n} parameter is ${queryValues[n]}`);
    }
}
