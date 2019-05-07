const express = require("express");
const hb = require("express-handlebars");
var fs = require("fs");

const app = express();

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("projects"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let projectsList = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true
    });
    res.render("welcome", {
        layout: "main",
        projects: projectsList
    });
});

app.get("/:name", (req, res) => {
    console.log("req.params: ", req.params.name);
    res.render("project", {
        layout: "main",
        imgName: req.params.name
        // quotes: futuramaData
    });
});

app.listen(8080, () => {
    console.log("Server is running. Handlebars in use!!!");
});
