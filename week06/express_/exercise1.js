const express = require("express");
const app = express();

app.use(express.static("./projects"));

app.get("*", (req, res) => {
    res.status(404).send(`
        <!doctype html>
        <title>Not found</title>
        <h1>Project not found, sorry.</h1>
        `);
});

app.listen(8080, () => console.log("Exercise 2 server is listeining"));
