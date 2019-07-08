
const url = require('url');
const querystring = require('querystring');
const arr = process.argv[2];
const anUrl = url.parse(arr);
const query = querystring.parse(anUrl.query);

    console.log('The protocol is ' + anUrl.protocol);
    console.log('The host is ' + anUrl.host);
    console.log('The hostname is ' + anUrl.hostname);
    console.log('The port is ' + anUrl.port);
    console.log('The path name is ' + anUrl.pathname);
    console.log('The query is ' + anUrl.query);
    console.log('The value of the a parameter is ' + query.a);
    console.log('The value of the b parameter is ' + query.b);
