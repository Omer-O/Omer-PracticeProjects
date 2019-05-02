const http = require("http");

const server = http.createServer(function(request, response) {
    console.log(request);
    request.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });
    response.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });

    console.log(`request received: ${request.method}, ${request.url}`);

    if (request.method == "GET" || request.method == "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        if (request.method == "GET") {
            response.write(`
                <!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!
                </html>
            `);
        }
        response.end("");
    } else if (request.method == "POST") {
        console.log("post request");
        let data = "";
        request.on("data", chunk => {
            data += chunk;
            console.log(chunk);
            // to be finshed
            response.setHeader("content-type", "text/html");
        });
        request.on("end", () => {
            console.log(data);
            response.statusCode = 200;
            response.end();
            return;
        });
    } else {
        response.statusCode = 405;
    }
});

server.listen(8080, () => {
    console.log("I'm listening");
});
