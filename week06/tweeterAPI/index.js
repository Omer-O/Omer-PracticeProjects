const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
            console.log("RACHEL ERROR!");
        } else {
            console.log("received token: ", token);
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    console.log("error: ", err);
                    res.sendStatus(500);
                } else {
                    console.log("got tweets: ", tweets);
                    res.json(tweets);
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening.`));
