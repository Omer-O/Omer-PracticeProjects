const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
    request.on("error", err => {
        console.log("err: ", err);
    });
    response.on("error", err => {
        console.log("err: ", err);
    });
    var responseArr = [
        new Date(),
        request.method,
        request.url,
        request.headers["user-agent"]
    ];
    responseArr.join("\t");
    responseArr.push("\n");

    fs.appendFile(__dirname + "/requests-log.text", responseArr, err => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
});

server.listen(8080, () => {
    console.log("I'm listening");
});
