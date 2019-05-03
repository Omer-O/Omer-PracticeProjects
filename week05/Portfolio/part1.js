const http = require("http");
const fs = require("fs");
const path = require("path");
const htmlContent = require("./part2.js").generateHtml;

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml"
};

http.createServer((req, res) => {
    if (req.method != "GET") {
        res.statusCode = 405;
        res.end();
        return;
    }

    if (req.url == "/") {
        res.end(htmlContent());
        return;
    }

    const fullPathUrl = path.normalize(__dirname + "/projects/" + req.url);
    //security against traversing /../../
    if (!fullPathUrl.startsWith(__dirname + "/projects/")) {
        res.statusCode = 403;
        res.end();
        return;
    }

    fs.stat(fullPathUrl, (err, stat) => {
        //Does the request url correspond to an item in the projects folder?
        //no - > 404
        if (err) {
            res.statusCode = 404;
            res.end();
            return;
        }

        //yes

        //Is it a directory?

        //no - serve the file
        if (stat.isFile()) {
            res.setHeader(
                "content-type",
                contentType[path.extname(fullPathUrl)]
            );
            const readStream = fs.createReadStream(fullPathUrl);
            readStream.pipe(res);
            readStream.on("error", err => {
                console.log(err);
                res.status = 404;
                res.end();
            });

            // yes, it is directory
        } else {
            // Does the request url end with a slash?
            if (fullPathUrl.endsWith("/")) {
                //serve index
                res.setHeader("content-type", "text/html");
                var readStream = fs.createReadStream(
                    fullPathUrl + "index.html"
                );
                readStream.pipe(res);
                readStream.on("error", err => {
                    //pipe error no index
                    console.log(err);
                    res.status = 404;
                    res.end();
                });
            } else {
                //ends with no /
                // rederice to url + "/"
                res.writeHead(302, { location: req.url + "/" });
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("I'm listening..."));
