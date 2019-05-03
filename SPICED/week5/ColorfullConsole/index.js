
const http = require("http");
const fs = require("fs");
const chalk = require("chalk");
const querystring = require('querystring');

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
            request.on('data', chunk => {
                body += chunk;
                console.log("Request body happening", body);
            });
            request.on('end', () => {
            var bodyColor = querystring.parse(body);
                console.log(chalk[bodyColor.color](bodyColor.text));

            response.setHeader('content-type', 'text/html');
            response.statusCode = 200;
            response.write(`<!doctype html><html><title>${bodyColor.text}</title><a href="/" style="color:${bodyColor.color}">${bodyColor.text}</a></html>`);
            response.end();
            return;
            });
        } else {
            response.statusCode = 405;
            response.end();
        }
});
    server.listen(8080, () => {console.log('im listening')});
