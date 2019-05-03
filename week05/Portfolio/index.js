const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    //
    if (req.method != "GET") {
        res.statusCode = 405;
        res.end();
        return;
    }
    // dealing with GET request
    res.setHeader("content-type", "image/jpeg");
    const readStream = fs.createReadStream(
        __dirname + "/projects/carousel/assets/kit1.jpg"
    );
    readStream.pipe(res);
    readStream.on("error", err => {
        console.log(err);
        res.status = 404;
        res.end();
    });
}).listen(8080, () => console.log("I'm litening..."));
