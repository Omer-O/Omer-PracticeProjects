const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(cookieParser());

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(function(req, res, next) {
    if (!req.cookies.accept && req.url != "/cookie") {
        if (!req.cookies.url) {
            res.cookie("url", req.url);
        }
        res.redirect("/cookie");
    } else next();
});

app.use("/carousel", auth);
app.use(express.static("./projects"));

app.get("/cookie", (req, res) => {
    res.send(`
        <!doctype html>
        <title>Cookie time!</title>
        <h1>Do you like cookies?</h1>
        <p>You must accept cookies to access the contnet!</p>
        <form method = "POST">
        <input type = "checkbox" name = "accept"> I accept your cookies
        <button>Submit</button>
        </form>
        `);
});

app.post("/cookie", (req, res, next) => {
    if (req.body.accept) {
        res.cookie("accept", "yes");
        res.redirect(req.cookies.url);
    } else {
        res.redirect("/cookie");
    }
});

app.get("*", (req, res) => {
    res.send(`
        <!doctype html>
        <title>Not found</title>
        <h1>Not found</h1>
        `);
});

app.listen(8080, () => console.log("Exercise 2 server is listeining"));