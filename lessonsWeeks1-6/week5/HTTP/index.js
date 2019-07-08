const http = require("http");
const fs = require("fs");

//Parts 1 & 2:
const server = http.createServer(function(request, response) {
    request.on("error", (err) => {
        console.log('error :', err);
    });
    response.on("error", (err) => {
        console.log('error :', err);
    });
    let {method, url, headers} = request;
    const data = `${new Date()}\t${method}\t${url}\t${headers['user-agent']}\n`
    fs.appendFile('./requests.txt', data, (err) => {
        if (err) {
            console.log('error :', err);
        }
    });
    console.log(method, url, headers);
    if (method == 'GET' || method == 'HEAD') {
        response.setHeader('content-type', 'text/html');
        response.statusCode = 200;
        if (method == 'GET') {
            response.end("<!doctype html><html><title>Hello World!</title><p>Hello World!</html>");
        } else {
            respond.end();
        }
    }
    if (method == 'POST') {
        console.log('POST request');
        let body = '';
        request.on('body', chunk => {
            body += chunk;
        });
        request.on('end', () => {
            console.log(body);
        });
        response.setHeader('Location', '/');
        response.statusCode = 302;
        response.end();
        return;
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, () => {console.log('im listening')});
