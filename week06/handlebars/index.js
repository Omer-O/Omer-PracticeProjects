const express = require("express");
const hb = require("express-handlebars");

const app = express();

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("projects"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("made it to the slash route");
    res.render("home", {
        layout: "main"
        // quotes: futuramaData
    });
});

app.get("/about", (req, res) => {
    console.log("made it to the about route");
    res.render("about", {
        layout: "main"
    });
});

app.get("/:name", (req, res) => {
    console.log("req.params: ", req.params.name);
    res.render("characters", {
        layout: "main",
        imgName: req.params.name
        // quotes: futuramaData
    });
});

app.listen(8080, () => {
    console.log("Server is running. Handlebars in use!!!");
});
