const http = require("http");
const fs = require("fs");
const path = require("path");
const htmlList = require("./modules.js").createHtml;
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

const server = http.createServer((req, res) => {
  req.on("error", err => {
    console.log("error :", err);
  });
  res.on("error", err => {
    console.log("error :", err);
  });
  if (req.method != "GET") {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url == "/") {
    res.setHeader("content-type", "text/html");
    res.statusCode = 200;
    res.end(htmlList());
    return;
  }

  const myPath = path.normalize(__dirname + "/projects/" + req.url);
  if (!myPath.startsWith(__dirname + "/projects/")) {
    res.statusCode = 403;
    res.end();
    return;
  }
  if (req.method == "GET") {
    res.setHeader("content-type", contentType);
    res.statusCode = 200;
  }
  fs.exists(myPath, exists => {
    if (exists) {
      fs.stat(myPath, (err, stat) => {
        if (err) {
          console.log(err);
          req.end();
        }
        if (stat.isFile()) {
          const ext = path.extname(myPath);
          res.setHeader("content-type", contentType[ext]);
          const readStream = fs.createReadStream(myPath);
          readStream.pipe(res);
          readStream.on("error", err => {
            console.log(err);
            res.statusCode = 404;
            res.end();
          });
        } else if (stat.isDirectory()) {
          if (req.url.endsWith("/")) {
            res.setHeader("Location", req.url + "index.html");
            res.statusCode = 302;
            res.end();
          } else {
            res.setHeader("Location", req.url + "/");
            res.statusCode = 302;
            res.end();
          }
        }
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});
server.listen(8080, () => {
  console.log("im listening");
});
