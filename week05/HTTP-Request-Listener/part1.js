const http = require("http");

const server = http.createServer(function(request, response) {
    request.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });
    response.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });

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
        console.log("methond POST received!");
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", () => {
            console.log("post data: ", data);
            response.setHeader("Location", "/");
            response.statusCode = 302;
            response.end();
        });
    } else {
        response.statusCode = 405;
    }
});

server.listen(8080, () => {
    console.log("I'm listening");
});
