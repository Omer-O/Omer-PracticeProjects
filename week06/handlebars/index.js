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

app.get("/:name/description", (req, res) => {
    let projectsList = fs.readdirSync(__dirname + "/projects");
    console.log("project list: ", projectsList);
    console.log(":name", req.params.name);
    let projectFound = false;
    projectsList.forEach(item => {
        if (item == req.params.name) {
            projectFound = true;
        }
    });
    if (projectFound) {
        const description = require(`${__dirname}/projects/${
            req.params.name
        }/description.json`);
        res.render("description", {
            layout: "main",
            projectName: description.name,
            projectDescription: description.description
        });
    } else {
        res.sendStatus(404);
    }
});

app.listen(8080, () => {
    console.log("Server is running. Handlebars in use!!!");
});
