
const http = require("http");
const fs = require("fs");
const querystring = require('querystring');
const chalk = require("chalk");
// const html = ();
// const htmlRespond = ()
// console.log(chalk.green('this is green'));
// console.log(chalk.red('this is red'));


    const server = http.createServer(function(request, response) {
        request.on("error", (err) => {
            console.log('error :', err);
        });
        response.on("error", (err) => {
            console.log('error :', err);
        });
        let {method, url, headers} = request;
        const data = `${new Date()}\t${method}\t${url}\t${headers['user-agent']}\n`;
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
                response.end('<!doctype html><html><title>Colors</title><form method="POST"><input type="text" name="text"><select name="color"><option value="red">red</option><option value="blue">blue</option><option value="green">green</option><option value="yellow">yellow</option><option value="gray">gray</option><option value="magenta">magenta</option><option value="cyan">yan</option></select><button type="submit">Go</button></form></html>');
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
                let bodyPr = querystring.parse(body);
               console.log('hey');
            });
            // response.setHeader('Location', '/');
            // response.statusCode = 302;
            response.write('<!doctype html><html><title>${bodyPr.text}</title><a href="/" style="color: ${bodyPr.color}">${bodyPr.text}</a></html>');
            response.end();
            return;
        } else {
            response.statusCode = 405;
            response.end();
        }
});
    server.listen(8080, () => {console.log('im listening')});
    //if the request is GET - copy paste the html page to the GET.
    //we need a GET ot POST request - othere wise we need a 405 error code
    //the output needs to be the console.log(); of the text the user types in the color the user
    //chosed.
    //the html the user reciee needs to be dinamicaly.
    //dealing with the body: this function after we recieved the request.
    //we need to put the body in the end() event - this will be converted to a JSON querystring.parse
    //and than accsses to the color in the array and listen to the color/text.

// }),server.listen(8080, () => {console.log('im listening')});
