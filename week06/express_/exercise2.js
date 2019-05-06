const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(function(req, res, next) {
    console.log(`HELLO! the url is : ${req.url}`);
    if (!req.cookies.accept && req.url != "/cookies") {
        console.log("no cookies, redirecting...");
        if (!req.cookies.url) {
            res.cookie("url", req.url);
        }
        res.redirect("/cookies");
    } else next();
});

app.use(express.static("./projects"));

app.get("/cookies", (req, res) => {
    res.send(`
        <!doctype html>
        <title>Cookie time!</title>
        <h1>Cookie?</h1>
        <form method = "POST">
        <input type = "checkbox" name = "accept"> I accept your cookies
        <button>Submit</button>
        </form>
        `);
});

app.post("/cookies", (req, res, next) => {
    console.log("cookie form received");
    if (req.body.accept) {
        console.log("cookie accepted");
        res.cookie("accept", "yes");
        console.log("cookie stored");
        res.redirect(req.cookies.url);
    } else {
        res.redirect("/cookies");
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
