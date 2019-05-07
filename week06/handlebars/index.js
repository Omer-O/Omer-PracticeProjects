const express = require("express");
const hb = require("express-handlebars");
var fs = require("fs");

const app = express();

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("projects"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    fs.readdir(
        __dirname + "/projects",
        { withFileTypes: true },
        (err, projectsList) => {
            if (err) {
                console.log(err);
                return;
            }
            res.render("welcome", {
                layout: "main",
                projects: projectsList
            });
        }
    );
});

app.get("/:name/description", (req, res) => {
    let name = req.params.name;
    var projectFound = false;

    fs.readdir(__dirname + "/projects", (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(item => {
            console.log("item: ", item);
            if (item == name) {
                projectFound = true;
            }
        }); //end of forEach

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
    }); //end of fs.readdir
});

app.listen(8080, () => {
    console.log("Server is running. Handlebars in use!!!");
});
